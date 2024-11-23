import { MongoClient } from 'mongodb';

// Função assíncrona para conectar ao banco de dados MongoDB
export default async function conectarAoBanco(stringConexao) {
  // Cria uma variável para armazenar o cliente MongoDB
  let mongoClient;

  // Bloco try-catch para tratar possíveis erros durante a conexão
  try {
    // Cria uma nova instância do cliente MongoDB usando a string de conexão fornecida
    mongoClient = new MongoClient(stringConexao);
    // Exibe uma mensagem no console indicando que a conexão está sendo estabelecida
    console.log('Conectando ao cluster do banco de dados...');
    // Conecta ao banco de dados de forma assíncrona e aguarda a conclusão
    await mongoClient.connect();
    // Exibe uma mensagem de sucesso caso a conexão seja bem-sucedida
    console.log('Conectado ao MongoDB Atlas com sucesso!');

    // Retorna o cliente MongoDB para que possa ser utilizado em outras partes do código
    return mongoClient;
  } catch (erro) {
    // Exibe uma mensagem de erro no console caso ocorra algum problema durante a conexão
    console.error('Falha na conexão com o banco!', erro);
    // Encerra a aplicação em caso de falha na conexão
    process.exit();
  }
}