# Store Manager API

## Descrição
A Store Manager API é uma aplicação para gerenciamento de vendas que utiliza a arquitetura em camadas (model-service-controller) e segue os princípios RESTful. A API permite listar, cadastrar, atualizar e deletar produtos, bem como registrar e listar vendas.

## Funcionalidades
1. **Listar Produtos**
   - **GET /products**: Retorna todos os produtos.
   - **GET /products/:id**: Retorna um produto específico por ID.
   
2. **Cadastrar Produto**
   - **POST /products**: Cadastra um novo produto. O corpo da requisição deve conter `{ "name": "ProdutoX" }`.

3. **Atualizar Produto**
   - **PUT /products/:id**: Atualiza um produto específico por ID. O corpo da requisição deve conter `{ "name": "NovoNome" }`.

4. **Deletar Produto**
   - **DELETE /products/:id**: Deleta um produto específico por ID.

5. **Listar Vendas**
   - **GET /sales**: Retorna todas as vendas.
   - **GET /sales/:id**: Retorna uma venda específica por ID.
   
6. **Cadastrar Venda**
   - **POST /sales**: Cadastra uma nova venda. O corpo da requisição deve seguir o formato:
     ```json
     [
       { "productId": 1, "quantity": 1 },
       { "productId": 2, "quantity": 5 }
     ]
     ```

## Configuração e Execução

### Pré-requisitos
- Docker
- Docker Compose

### Passos para rodar o projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/usuario/store-manager.git
   cd store-manager

2. Inicie os contêineres Docker:
   ```sh
   docker-compose up -d

2. Acesse a API em http://localhost:3000.
