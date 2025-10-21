import { RdfaParser } from "rdfa-streaming-parser";
import { Readable } from "stream";

const url = "https://www.datos.gov.co/Salud-y-Protecci-n-Social/Casos-positivos-de-COVID-19-en-Colombia-/gt2j-8ykr/about_data";

const response = await fetch(url);
const html = await response.text();

const htmlStream = Readable.from([html]);

const parser = new RdfaParser({
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
