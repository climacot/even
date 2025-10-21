import microformats from "microformat-node";
import * as cheerio from "cheerio";

const res = await fetch("https://www.bbc.co.uk/food/recipes");
const html = await res.text();
const $ = cheerio.load(html);

const m = await microformats.getAsync($);

console.log("Microformatos encontrados:", m);
