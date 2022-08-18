import Parser from "@apidevtools/swagger-parser";
import type { OpenAPI, OpenAPIV3 } from "openapi-types";
import { mkdir, writeFile } from "fs/promises";
import { compile } from "json-schema-to-typescript"; // можно заменить на quicktype-core (github.com/quicktype/quicktype)
import { join } from "path";
import { paramCase } from "change-case";

function isOpenApiV3Document(
    document: OpenAPI.Document
): document is OpenAPIV3.Document {
    return "openapi" in document && document.openapi.startsWith("3.0");
}

function isSchemaObject(
    schemaOrReference:
        | OpenAPIV3.ReferenceObject
        | OpenAPIV3.SchemaObject
        | null
        | undefined
): schemaOrReference is OpenAPIV3.SchemaObject {
    return !!schemaOrReference && !("$ref" in schemaOrReference);
}

const OUT_DIR = "generated-by-json-schema-to-typescript";

(async () => {
    const document = await Parser.validate("./petstore.json");
    if (!isOpenApiV3Document(document)) {
        throw new Error("Not v3 document");
    }

    await mkdir(OUT_DIR, { recursive: true });

    Object.keys(document.components?.schemas ?? {}).forEach(
        async (schemaName) => {
            const jsonSchema = document.components?.schemas?.[schemaName];

            if (!isSchemaObject(jsonSchema)) {
                return;
            }

            const typings = await compile(jsonSchema, schemaName);
            await Promise.all([
                writeFile(
                    join(OUT_DIR, `${paramCase(schemaName)}.ts`),
                    typings
                ),
                writeFile(
                    join(OUT_DIR, `${paramCase(schemaName)}-json-schema.json`),
                    JSON.stringify(jsonSchema, null, 4)
                ),
            ]);
        }
    );
})();
