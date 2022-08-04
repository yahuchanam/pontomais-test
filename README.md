# Pontomais Test

Teste front-end para se tornar um PontoMaker!

Considerações:

- Desenvolvido com Angular 14 e suas features
- Desenvolvido seguindo The Angular Way
- O projeto está usando Ivy
- Tentei componentizar o máximo possível
- Fiz uso dos pattern:
  - DRY
  - SOLID (em alguns momentos - SRP é um desafio no Angular)
  - Object Calisthnics
  - Clean Code
  - BEM CSS (só havia necessidade mas usei em alguns casos)

_DISCLAIMER:_

Tentei usar o minimo possível de bibliotecas te terceiros, usando apenas:

- SubSink: para controlar as subscrições
- Normalize.css: para ter um css reset mão na roda

Para rodar:

```
npm install
ng server -o
```

ou acesse:
https://pontomais-test.vercel.app/

Obrigado!

Critérios de aceite:

Listagem:

- Mostra uma lista com os super-heróis, as séries que eles participam e os eventos
  da Marvel onde eles aparecem.
- A listagem deve ter 10 super-heróis por página. Na listagem, mostrar apenas 3
  séries e os eventos
- Para telas pequenas, mostrar apenas os super-heróis, sem suas séries e eventos
- Deve ser possível filtrar os personagens por nome
- Deve ser possível navegar entre as páginas da tabela
- Ao selecionar um super-herói, mostrar as informações sobre ele em na parte de
  Detalhe
- Seguir a especificação em anexo

2. Detalhes

- Mostrar detalhes dos eventos/séries que o super-herói participou
- Layout livre. Use a criatividade.
