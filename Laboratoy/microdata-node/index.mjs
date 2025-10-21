import microdata from "microdata-node";

const res = await fetch("https://raw.github.com/mhausenblas/schema-org-rdf/master/examples/Thing/Product/Product.microdata");
const html = await res.text();

const json = microdata.toJson(html);

console.log(JSON.stringify(json, null, 2));
