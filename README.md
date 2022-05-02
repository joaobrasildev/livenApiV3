# Guide Application start
Requirments:
- Docker
- Node version 16.13.01

Commands to run:
- npm install
- criar .env como o exemplo .env.example
- make or docker-compose -f docker-compose.yml up -d
- npm run m:run
- npm run start:dev
- npm run test (Executar os testes da aplicação)

Actions to execute
- Criar um usuário rota /user (Conforme postman Collection)
- Fazer login com usuário /login, armazenar o token retornado e setá-lo na requesição como bearer token

Obs: 
- Foi gerado uma collection do postman com as requests da aplicação, a única coisa que deve ser feito é, após fazer login e recuperar o token, o mesmo deve ser setado como bearer token de autorização.