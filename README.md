# FrontEndHorus

1 - Clone o repositório, após isso será necessário instalar todas as dependencias do projeto, é possivel fazer isso utilizando o compando
``` npm install ```
Ou
``` yarn ```

2 - Com as dependencias instaladas você já pode executar o projeto usando
 ``` yarn serve ```
 
 ## Problmas possiveis

```bash
Error: listen EADDRINUSE: address already in use :8080
```

Tente verificar se existe alguma outra aplicação rodando na porta 8080, caso não consiga achar nenhuma
aplicação rodando utilize os seguintes comandos

```bash
fuser -k 8080/tcp
```

A resposta desse comando será:

```bash
3000/tcp:            <Sequencia Númerica>
```

Pronto, será finalizado a aplicação e agora você pode rodar o comando npm novamente

Se o problema persistir você pode trocar o valor da porta em que a aplicação está rodando, caso mude a porta em que o BackEnd está rodando será necessário mudar tambem a rota dento do `src/api/index.js`

Agora basta abrir a url que o terminal te indicar para conseguir utilizar o FrontEnd, lembrando que para rodar o FrontEnd de maneira local é necessário também rodar o BackEnd, já o BackEnd pode ser rodado local e testado via Insomnia ou PostMan.

## Observações e Dificuldades
Uma das principais dificuldades foi o deploy ao Heroku, com isso seria bem mais facil de ser testado a aplicação, sem a necessidade de clonar o repositório, a principio o deploy não ocorria, então o repositório nem estava no heroku, porem com algumas pesquisa eu pude resolver esse problema, o erro seria referente ao comando `python managepy collectstatic --noinput` que o heroku dava, que foi resolvido. Atualmente o erro é sobre o 'App Crashed' que por conta do tempo não pude resolver, mas é um erro resolvido facilmente em nodeJs, apenas com a adpatação do Procfile.
