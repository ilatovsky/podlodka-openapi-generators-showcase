import * as api from "./generated-by-oazapfts";
import nodeFetch from "node-fetch";

api.defaults.baseUrl = "https://petstore.swagger.io/v2";

api.defaults.headers = {
    access_token: "secret",
};

api.defaults.fetch = nodeFetch;

(async () => {
    console.log(await api.findPetsByStatus({ status: "available" }));
})();
