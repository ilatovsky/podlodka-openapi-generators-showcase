import Ajv, { JSONSchemaType } from "ajv";
import addFormats from "ajv-formats";
import petJsonSchema from "./generated-by-json-schema-to-typescript/pet-json-schema.json";
import type { Pet } from "./generated-by-json-schema-to-typescript/pet";

const ajv = new Ajv({ strict: false });
addFormats(ajv);

const pets: unknown[] = [
    {
        name: "Scooby doo",
        photoUrls: [],
    },
    {
        foo: 1,
        bar: "abc",
    },
];

const isPet = ajv.compile(petJsonSchema as unknown as JSONSchemaType<Pet>);

pets.forEach((mayBePet) => {
    if (isPet(mayBePet)) {
        console.log(mayBePet.name);
    } else {
        console.error(isPet.errors);
    }
});
