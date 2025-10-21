import { Request, Response, NextFunction } from "express";
import nodeMicrodataScrapper from "node-microdata-scraper";
import microformatsNode from "microformat-node";
import * as cheerio from "cheerio";

export const find = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(await getSemanticTecnologies(req.body.url));
  } catch (error) {
    next(error);
  }
};

export const getSemanticTecnologies = async (url: string) => {
  const res = await fetch(url);
  const html = await res.text();

  const microformats = await getMicroformats(html);
  const microdata = getMicrodata(html);
  const jsonLd = getJsonld(html);
  const rdfa = getRdfa(html);

  const vocabKeywords = ["schema.org", "w3.org/ns", "vocab", "foaf", "dublincore", "goodrelations", "hydra", "skos"];
  const ontologyKeywords = ["ontology", "rdf", "rdfs", "owl", "sparql", "turtle", "rdf+xml"];
  const datasetKeywords = ["dataset", "data catalog", "datacatalog", "distribution", "data.gov", "linked data"];

  return {
    microformats: microformats.items.length,
    microdata: microdata.length,
    jsonLd: jsonLd.length,
    rdfa: rdfa.length,
    vocabularies: 0,
    ontologies: 0,
    datasets: 0,
  };
};

const getMicroformats = async (html: string): Promise<{ items: [] }> => {
  const $ = cheerio.load(html);
  return await microformatsNode.getAsync($);
};

const getMicrodata = (html: string): any[] => {
  return JSON.parse(nodeMicrodataScrapper.parse(html));
};

const getJsonld = (html: string) => {
  const $ = cheerio.load(html);

  const $tags = $('script[type="application/ld+json"]');

  const jsonLds: any[] = [];

  $tags.each((_, element) => {
    try {
      const tag = JSON.parse($(element).html()!);

      if (tag["@graph"] && Array.isArray(tag["@graph"])) {
        jsonLds.push(...tag["@graph"]);
      } else if (Array.isArray(tag)) {
        jsonLds.push(...tag);
      } else {
        jsonLds.push(tag);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return jsonLds;
};

const getRdfa = (html: string) => {
  const $ = cheerio.load(html);

  const $tags = $("[vocab]");

  const rdfas: any[] = [];

  $tags.each((_, element) => {
    try {
      const $element = $(element);

      const data: {
        vocab?: string;
        type?: string;
        property?: string;
        value?: string;
        resource?: string;
      } = {};

      if ($element.attr("vocab")) {
        data.vocab = $element.attr("vocab");
      }

      if ($element.attr("typeof")) {
        data.type = $element.attr("typeof");
      }

      if ($element.attr("property")) {
        data.property = $element.attr("property");
        data.value =
          $element.text().trim() || $element.attr("content") || $element.attr("href") || $element.attr("src");
      }

      if ($element.attr("resource")) {
        data.resource = $element.attr("resource");
      }

      if (Object.keys(data).length > 0) {
        rdfas.push(data);
      }
    } catch (error) {
      console.error(error);
    }
  });

  return rdfas;
};
