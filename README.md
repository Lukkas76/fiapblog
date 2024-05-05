# FIAP Blog

Tarefa de blog da FIAP da disciplina de Front End.

## Como Rodar o Projeto Localmente

Siga estas instruções para executar o projeto em seu ambiente local.

### Pré-requisitos

- Node.js instalado
- npm instalado

### Instalação

1. Clone o repositório: git clone https://github.com/Lukkas76/fiapblog

2. Navegue até o diretório do projeto: cd fiapblog

3. Instale as dependências: npm install

4. Para iniciar o servidor de desenvolvimento: npm run dev

Para gerar uma versão otimizada para produção: npm run build

Os arquivos do build serão gerados no diretório `dist`.

## Como Entregar o Projeto em Produção

Existem várias maneiras de implantar um projeto em produção. Aqui está um exemplo de como implantar este projeto usando o Netlify:

1. Faça o commit de suas alterações em seu repositório remoto:

    git add .
    git commit -m "Descrição breve das alterações"
    git push origin main


2. Crie uma conta no [Netlify](https://www.netlify.com/) e faça login.

3. Clique em "New site from Git" e selecione seu repositório do GitHub.

4. Configure as opções de build e implantação conforme necessário.

5. Clique em "Deploy site".

Após a implantação, seu projeto estará disponível em uma URL fornecida pelo Netlify.
