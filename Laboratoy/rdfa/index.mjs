import { DOMParser } from "@xmldom/xmldom";
import rdfa from "rdfa";

const url = "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia-/gt2j-8ykr/about_data";

const response = await fetch(url);
const html = await response.text();

const document = new DOMParser();

const result = rdfa.parseDOM(
  rdfa.RDFaHTMLParser,
  url,
  document.parseFromString(html, "text/html"),
  {}
);

result.outputGraph.forEach((v) => {
  console.log(JSON.stringify(v, null, 2));
});
