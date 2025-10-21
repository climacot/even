import { JsonLdParser } from "jsonld-streaming-parser";
import { Readable } from "stream";

const url = "https://uxcristian.site";

const response = await fetch(url);
const html = await response.text();

const htmlStream = Readable.from([html]);

const parser = new JsonLdParser({
  baseIRI: url,
  contentType: "text/html",
});

htmlStream
  .pipe(parser)
  .on("data", (triple) => {
    console.log(JSON.stringify(triple, null, 2));
    console.log("---");
  })
  .on("end", () => {
    console.log("Procesamiento completado");
  })
  .on("error", (error) => {
    console.error("Error:", error);
  });
