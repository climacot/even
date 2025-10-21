import microdata from "node-microdata-scraper";

const res = await fetch("https://raw.github.com/mhausenblas/schema-org-rdf/master/examples/Thing/Product/Product.microdata");
const html = await res.text();

const json = microdata.parse(html);

console.log(JSON.stringify(JSON.parse(json), null, 2));
