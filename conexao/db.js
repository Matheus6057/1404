// db.js
const mysql = require('mysql');

const conexao = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'matheus_produtos'
});

conexao.connect((erro) => {
  if (erro) {
    console.error('Erro ao conectar ao banco de dados:', erro);
    return;
  }
  console.log('Conexão com o banco de dados estabelecida!');
});

module.exports = conexao;