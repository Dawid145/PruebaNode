const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8"
    });

    res.end(
      "Prueba Node recibida correctamente por Solicitante-Compilador."
    );

    return;
  }

  res.writeHead(404, {
    "Content-Type": "text/plain; charset=utf-8"
  });

  res.end("404 - Recurso no encontrado.");
});

server.listen(PORT, () => {
  console.log(`Servidor de prueba iniciado en el puerto ${PORT}`);
});
