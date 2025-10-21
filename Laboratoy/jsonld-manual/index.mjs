import * as cheerio from "cheerio";

const url = "https://en.wikipedia.org/wiki/Internet";

const response = await fetch(url);
const html = await response.text();

const $ = cheerio.load(html);

const jsonLd = $('script[type="application/ld+json"]');

const listaJSONLD = [];

jsonLd.each((_, element) => {
  const textoJSON = $(element).html();
  const datosJSON = JSON.parse(textoJSON);

  if (datosJSON["@graph"] && Array.isArray(datosJSON["@graph"])) {
    listaJSONLD.push(...datosJSON["@graph"]);
  } else if (Array.isArray(datosJSON)) {
    listaJSONLD.push(...datosJSON);
  } else {
    listaJSONLD.push(datosJSON);
  }
});

console.log(listaJSONLD);
