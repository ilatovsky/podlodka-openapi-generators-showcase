не забудьте сделать `npm i` перед тем как начнете играться

Что можно нажать:

-   `npm run 0-clean` зачистит все нагенерированное
-   `npm run 1-openapi-typescript` - сгенерирует тайпингов c помощью [openapi-typescript](https://github.com/drwpow/openapi-typescript)
-   `npm run 2-json-schema-to-typescript` - сгенерирует тайпинги для моделек из спеки с помощью [@apidevtools/swagger-parser](https://apitools.dev/swagger-parser/) и [json-schema-to-typescript](https://github.com/bcherny/json-schema-to-typescript)
-   `npm run 3-ajv-validate-example` - повалидируем объекты относительно моделей из спеки с помощью [ajv](https://ajv.js.org)
-   `npm run 4-openapi-generator-cli` - сгенерируем целый пакет-sdk к нашему api для браузера на fetch'e с помощью официального генератора [@openapitools/openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli)

    > Если вы маковод и у вас нет java runtime, его легко заиметь с помощью [brew](https://brew.sh) и команды\
    > `brew install java && sudo ln -sfn /opt/homebrew/opt/openjdk/libexec/openjdk.jdk \ /Library/Java/JavaVirtualMachines/openjdk.jdk`. Виндоводы, сорян...

-   `npm run 5-swagger-typescript-api` - сгенерируем sdk к нашему api для браузера с помощью официального генератора [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api)
-   `npm run 6-oazapfts` - сгенерируем sdk к нашему api с помощью официального генератора [oazapfts](https://github.com/cellular/oazapfts) и спросим у petstore всех собачек в наличии
-   `7-openapi-typescript-fetch` - прокидываем тайпинги от openapi-typescript в [openapi-typescript-fetch](https://github.com/ajaishankar/openapi-typescript-fetch), получаем кособокий, но главное рабочий клиент и спрашиваем с его помощью проданых собачков
-   `8-openapi-generator-cli-docker` - уже знакомый нам [@openapitools/openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli) нагенерит нам клиент у которого под капотом rxjs, но только в этот раз сделает это внутри докера
