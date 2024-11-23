import 'dotenv/config';
// Importa a função para conectar ao banco de dados
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão do ambiente
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para obter todos os posts
export async function getTodosPosts() {
  // Seleciona o banco de dados "imersao-instabytes"
  const db = conexao.db("imersao-instabytes");

  // Seleciona a coleção "posts" dentro do banco de dados
  const colecao = db.collection("posts");

  // Busca todos os documentos da coleção e retorna como um array
  return colecao.find().toArray();
}

export async function criarPost(novoPost) {
    
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novoPost);
  
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  const objID = ObjectId.createFromHexString(id)
  return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost})

}