/* Instalando Typescript local apenas no projeto.
(npm init -y) para criar um projeto tipo Node.js
(npm install typescript -D) para instalação apenas em desenvolvimento não indo para o deploy do projeto
(npx tsc --init) para criar arquivo de configuração do Typescript tsc
Script em package.json (""start": "npx tsc && node ./build/index.js"")  para rodar usa (npm start run)
(npm install ts-node-dev -D) para usar um servidor que lê Typescript
Script em package.json (""start:dev": "ts-node-dev --respawn --transpile-only src/index.ts"")  para rodar usa (npm start:dev run)*/

type hero = {
    name : string;
    vulgo : string;
}

function printObject(pessoa: hero) {
    console.log(pessoa);
}

printObject({
    name : "Bruce Wayne",
    vulgo : "Batman"
})