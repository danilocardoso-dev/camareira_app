import http from "http";
import app from "./app"

http.createServer(app).listen(3001, () => {
  console.log(`🌐 Servidor HTTP rodando em http://localhost:3001`);
});