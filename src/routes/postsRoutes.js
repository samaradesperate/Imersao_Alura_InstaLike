// Importa o módulo Express para criar a aplicação web
import express from "express";
import multer from "multer";
// Importa a função `listarPosts` do controlador de posts
import { listarPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from "../controllers/postsController.js";
import cors from "cors";

const corsOptions = {
  origin: "http://localhost:8000", 
  optionsSuccessStatus: 200
}

// Configura o armazenamento do Multer para uploads de imagens
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Especifica o diretório para armazenar as imagens enviadas
    cb(null, 'uploads/'); // Substitua por seu caminho de upload desejado
  },
  filename: function (req, file, cb) {
    // Mantém o nome original do arquivo por simplicidade
    cb(null, file.originalname); // Considere usar uma estratégia de geração de nomes únicos para produção
  }
});

// Cria uma instância do middleware Multer
const upload = multer({ dest: "./uploads", storage});

// Define uma função que configura as rotas da aplicação
const routes = (app) => {
  // Habilita o parsing de JSON no corpo das requisições
  app.use(express.json());
  app.use(cors(corsOptions))
  // rota para buscar todos os posts
  app.get("/posts", listarPosts);
  // Nova rota para criar um post
  app.post("/posts", postarNovoPost);
  app.post("/upload", upload.single("imagem"), uploadImagem);
  app.put("/upload/:id", atualizarNovoPost);
}

// Exporta a função de configuração de rotas
export default routes;