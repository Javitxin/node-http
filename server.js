const { objInformacion } = require('./data.js');
const http = require('node:http');

console.log(objInformacion.Titulo);

const server = http.createServer((req, res) => {
    console.log('request recived');
    res.end(`<!DOCTYPE html>\n
            <html dir="ltr" lang="es" chrome-refresh-2023 class lazy-loaded="true">\n
            <head>\n
            <meta charset="utf-8">\n
            <title>${objInformacion.Titulo}</title>\n
            </head>\n
            <body>\n
            <h1>${objInformacion.Descripcion}</h1>\n
            <h2>${objInformacion.TituloP}</h2>\n
            <p>${objInformacion.Parrafo}</p>\n
            </body>`);
});

server.listen(0, () => {
    console.log(`server listening on port http://localhost:${server.address().port}`);
});