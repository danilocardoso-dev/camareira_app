
### ⚡ Scripts

- `npm run dist`: Compiles TypeScript files to JavaScript in the dist directory.
- `npm run start:dev`: Runs the server in development mode with environment variables loaded from the .env file.
- `npm run start:watch`: Runs the server in development mode with support for automatic reload on file changes.
- `npm run start:dist`: Compiles the project and runs the compiled version from the dist directory.


### 📁 Estrutura do Projeto

src/
├─ app/
├─ config/
├─ modules/
├─ plugins/
├─ shared/
└─ types/

### 📁 app
- Responsável pela inicialização da aplicação
- Cria a instância do Fastify
- Registra plugins
- Registra módulos
- Inicia o servidor (listen)
- Não contém regra de negócio
- Não contém SQL
- Não contém lógica de rotas

### 📁 config
- Centraliza configurações globais
- Define variáveis de ambiente
- Define configuração de banco de dados
- Define configuração de logger
- Define flags da aplicação
- Não contém queries SQL
- Não contém lógica de negócio

### 📁 plugins
- Gerencia infraestrutura compartilhada
- Gerencia conexão com banco de dados
- Gerencia autenticação (JWT)
- Gerencia cache
- Gerencia rate limit
- Gerencia CORS
- Não contém regra de negócio
- Não contém código específico de módulos

### 📁 modules
- Contém funcionalidades da aplicação
- Organiza código por domínio
- Contém rotas por módulo
- Contém controllers por módulo
- Contém services por módulo
- Não contém configuração global
- Não contém plugins
- Não contém utilitários genéricos

### 📁 shared
- Contém código reutilizável
- Contém erros customizados
- Contém helpers
- Contém middlewares genéricos
- Contém constantes
- Não contém código específico de um único módulo

### 📁 types
- Contém tipagens globais
- Contém extensões do Fastify
- Contém tipos compartilhados
- Não contém lógica de negócio
- Não contém código executável
