import { Request, Response, NextFunction } from "express";
import * as cheerio from "cheerio";

export const get = (_: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json({ message: "Hello World" });
  } catch (error) {
    next(error);
  }
};

export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await getSemanticTecnologies(req.body.url);
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

export const getSemanticTecnologies = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);

  const microformatClasses = [
    "h-card",
    "h-entry",
    "h-event",
    "h-review",
    "h-product",
    "h-recipe",
    "h-adr",
    "h-feed",
    "h-geo",
    "h-item",
    "h-listing",
    "h-resume",
    "h-review-aggregate",
  ];

  const microdataItems = "[itemid], [itemref], [itemscope], [itemtype], [itemprop]";
  const rdfaItems = "[vocab], [resource], [prefix], [about], [typeof], [property]";
  const jsonLDTag = 'script[type="application/ld+json"]';

  const microformats = microformatClasses.flatMap((cls) => $(`.${cls}`).toArray());
  const microdata = $(microdataItems).toArray();
  const jsonLd = $(jsonLDTag).toArray();
  const rdfa = $(rdfaItems).toArray();

  // --- Palabras clave ---
  const vocabKeywords = ["schema.org", "w3.org/ns", "vocab", "foaf", "dublincore", "goodrelations", "hydra", "skos"];
  const ontologyKeywords = ["ontology", "rdf", "rdfs", "owl", "sparql", "turtle", "rdf+xml"];
  const datasetKeywords = ["dataset", "data catalog", "datacatalog", "distribution", "data.gov", "linked data"];

  // --- Función para contar ocurrencias ---
  const countOccurrences = (text: string, keyword: string): number => {
    const regex = new RegExp(keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "gi");
    return (text.match(regex) || []).length;
  };

  // --- Unir todo el contenido de etiquetas detectadas ---
  const combinedText = [...microformats, ...microdata, ...rdfa, ...jsonLd]
    .map((node) => $(node).html() || "")
    .join(" ")
    .toLowerCase();

  // --- Conteo global ---
  const countCategory = (keywords: string[]) => {
    return keywords.reduce((sum, kw) => {
      return sum + countOccurrences(combinedText, kw);
    }, 0);
  };

  const vocabCount = countCategory(vocabKeywords);
  const ontologyCount = countCategory(ontologyKeywords);
  const datasetCount = countCategory(datasetKeywords);

  return {
    microformats: microformats.length,
    microdata: microdata.length,
    jsonLd: jsonLd.length,
    rdfa: rdfa.length,
    vocabularies: vocabCount,
    ontologies: ontologyCount,
    datasets: datasetCount,
  };
};
