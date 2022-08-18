import { Fetcher } from "openapi-typescript-fetch";
import { paths } from "./generated-by-openapi-typescript/typings";
import fetch, { Headers, Request, Response } from "node-fetch";
// @ts-ignore
if (!globalThis.fetch) {
    // @ts-ignore
    globalThis.fetch = fetch as any;
    // @ts-ignore
    globalThis.Headers = Headers as any;
    // @ts-ignore
    globalThis.Request = Request as any;
    // @ts-ignore
    globalThis.Response = Response as any;
}

const api = Fetcher.for<paths>();

api.configure({
    baseUrl: "https://petstore.swagger.io/v2",
    init: {
        headers: {},
    },
});

(async () => {
    console.log(
        await api.path("/pet/findByStatus").method("get").create()({
            status: "sold",
        })
    );
})();
