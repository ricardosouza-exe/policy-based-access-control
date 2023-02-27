
# PBAC - Controle de acesso baseado em políticas
[ENGLISH VERSION](/README_EN.md)

Essa aplicação tem como objetivo exemplicar um sistema de controle, com grupos de usuário e políticas para aplicar diversos níveis de permissões ao usuários de um sistema.

## Requisitos

- Servidor MongoDB
- NodeJS
- Yarn

## Instalação

- Instale as dependências usando o comando `yarn`
- Renome o arquivo `.env.example` para `.env` e configure de acordo com o seu ambiente
- Inicie o projeto com `yarn start`

## Explicação

A aplicação consiste em um servidor HTTP com as seguintes rotas:

- POST /login
- GET /users
- GET /users/:id
- POST /users
- PUT /users/:id
- DELETE /users/:id

O algoritmo das rotas está disponível nos arquivos `src/routes/index.js` e `src/routes/UserRoutes.js`.

Ao realizar o login é gerado um token de autenticação (JWT), que deverá ser repassado no cabeçalho das requisições em rotas autenticadas. `Authorization: Bearer <token>`

Antes de chegar na rota, a requisição passa pelo middleware **AuthMiddleware** localizado em `src/middlewares/AuthMiddleware.js`, na qual o token será decodificado e atribuido ao objeto da requisição. `req.auth = await decodeJWT(authToken)`

Dentro de cada rota é chamada uma função assíncrona `await AuthModule.verify(auth, validPolicyActions)`, que é responsável por verificar se o usuário autenticado possui alguma das ações listadas no segundo parâmetro `validPolicyActions`.

Essa função pode disparar os seguintes erros:

- MISSING_TOKEN = quando o token não é passado no cabeçalho.
- ACCESS_NOT_FOUND = quando o acesso não existe, ou está desativado.
- ACCESS_GROUP_NOT_FOUND = quando o grupo de acesso associado ao usuário não existe, ou está desativado.
- NOT_ALLOWED = quando o usuário não possui permissão para nenhuma das ações listadas.

A função de verificação em caso de sucesso, sempre retornará um objeto de acesso.

`const access = await AuthModule.verify(auth, validPolicyActions)`

E caso o `validPolicyActions = null` apenas validará se o usuário está autenticado, não será feita a validação das permissões.


## Scripts

Para auxiliar no teste do sistema foi criado alguns executáveis para manipular os acessos no banco de dados.

#### Criar política de acesso
`node src/scripts/createAccessPolicy <name> <actions_separed_by_comma>`

#### Criar grupo de acessos
`node src/scripts/createAccessPolicy <name> <policy_ids_separed_by_comma>`

#### Criar acesso
`node src/scripts/createAccess <username> <password> <name> <group_id>`

#### Deletar política de acesso
`node src/scripts/deleteAccess <username>`

#### Deletar grupo de acesso
`node src/scripts/deleteAccess <group_id>`

#### Deletar acesso
`node src/scripts/deleteAccess <username>`

#### Adicionar politicas ao grupo de acessos
`node src/scripts/addPoliciesToAccessGroup <groud_id> <policy_ids_separed_by_comma>`

#### Remover politicas do grupo de acessos
`node src/scripts/removePoliciesFromGroup <groud_id> <policy_ids_separed_by_comma>`

#### Adicionar ações à política de acesso
`node src/scripts/addActionsToPolicy <policy_id> <actions_separed_by_comma>`

#### Remover ações da política de acesso
`node src/scripts/removeActionsFromPolicy <policy_id> <actions_separed_by_comma>`

#### Alterar grupo de acesso
`node src/scripts/setAccessGroup <access_id> <group_id>`

policy_ids_separed_by_comma = "id_1,id_2,id_3"
actions_separed_by_comma = "acao_1,acao_2,acao_3"

**IMPORTANTE! Evite usar espaço no nome das ações.**
 
## Licença

[MIT](https://choosealicense.com/licenses/mit/)