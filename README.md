# Gestão de Laudos Backend

Backend da aplicação de gestão de laudos forenses odontológicos.

## Tecnologias Utilizadas

- **Node.js + Express**: Plataforma backend com framework leve para criação de APIs.
- **Supabase**: Banco de dados PostgreSQL com autenticação e API REST integradas.
- **PDFKit**: Geração de arquivos PDF para laudos e documentos.
- **Dotenv**: Gerenciamento seguro de variáveis de ambiente com arquivo `.env`.
- **CORS**: Permite acesso da API por diferentes origens (cross-origin).
- **Render:** Plataforma de deploy para aplicações Node.js de forma rápida e gratuita

## 🚀 Como Rodar Localmente

1. **Clone o repositório**
   ```bash
   git clone https://github.com/alessandramacedodev/gestaodelaudosBACK.git
   cd gestaodelaudosBACK
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   
   Crie um arquivo `.env` na raiz com as seguintes informações:

   ```
   SUPABASE_URL='https://keimualjftjhdqjtljpq.supabase.co';
   SUPABASE_API_KEY='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlaW11YWxqZnRqaGRxanRsanBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTg1NTcsImV4cCI6MjA2MDgzNDU1N30.5UFN41Oa1fL9doenNIGVM3pGymjPJTuKutnQj4GGUmw';
   ```

4. **Inicie o servidor**
   npm run dev
      ou
   ```bash
   npm start
   ```
   Ou com nodemon:
   ```bash
   nodemon index.js

   
5. **Servidor rodando em**
   ```
   http://localhost:3001
   ```

## 📂 Estrutura de Pastas

```
/config          # Configurações de conexão (ex: Supabase client)
/controllers     # Lógica das rotas
/routes          # Definições das rotas
/services        # Acesso ao banco de dados (CRUD)
/utils           # Utilitários (ex: geração de PDF)
.env             # Variáveis de ambiente
server.js / index.js  # Arquivo principal
```

## 📌 Rotas da API

| Método | Rota                         | Descrição                                |
|:------:|:-----------------------------:|:---------------------------------------:|
| GET    | `/users`                     | Listar todos os usuários               |
| POST   | `/users`                     | Criar novo usuário                     |
| PUT    | `/users/:id`                 | Atualizar usuário pelo ID              |
| DELETE | `/users/:id`                 | Deletar usuário pelo ID                |
| GET    | `/cases`                     | Listar todos os casos                  |
| POST   | `/cases`                     | Criar novo caso                        |
| PUT    | `/cases/:id`                 | Atualizar caso pelo ID                 |
| DELETE | `/cases/:id`                 | Deletar caso pelo ID                   |
| GET    | `/evidences`                 | Listar todas as evidências             |
| POST   | `/evidences`                 | Criar nova evidência                   |
| PUT    | `/evidences/:id`              | Atualizar evidência pelo ID            |
| DELETE | `/evidences/:id`              | Deletar evidência pelo ID              |
| GET    | `/laudos`                    | Listar todos os laudos                 |
| POST   | `/laudos`                    | Criar novo laudo                       |
| PUT    | `/laudos/:id`                 | Atualizar laudo pelo ID                |
| DELETE | `/laudos/:id`                 | Deletar laudo pelo ID                  |
| GET    | `/config`                    | Listar configurações do sistema        |
| PUT    | `/config/:id`                 | Atualizar configuração pelo ID         |

---

## Segurança
- Uso de `.env` para proteger dados sensíveis
- Middleware CORS configurado para controle de acesso

## Funcionalidades Principais

- Cadastro, consulta, atualização e exclusão de usuários, casos, evidências e laudos.
- Geração de laudos em PDF.
- Integração direta com Supabase para banco de dados e armazenamento.

