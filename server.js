import express from "express";
import routes from "./src/routes/postsRoutes.js";

// Cria uma instância do aplicativo Express
const app = express();

app.use(express.static("uploads"));
// Chama a função de rotas para configurar as rotas da aplicação
routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console
app.listen(3000, () => {
    console.log("Servidor escutando...");
});

