# Pesquisando jogos - Imersão Alura

## Descrição
Esta função JavaScript implementa uma simples funcionalidade de busca em um conjunto de dados de jogos. O usuário pode inserir uma palavra-chave e a função irá retornar todos os jogos que contenham essa palavra-chave em seus títulos, descrições ou tags.

## Como funciona
1. **Coleta da palavra-chave:** A função obtém a palavra-chave inserida pelo usuário no campo de pesquisa.
2. **Busca nos dados:** Itera sobre cada jogo no array de jogos, comparando a palavra-chave com os campos `nome`, `descriçao` e `tags` (todos convertidos para minúsculas).
3. **Geração de HTML:** Para cada jogo encontrado, gera um elemento HTML com as informações relevantes do jogo.
4. **Exibição dos resultados:** Insere o HTML gerado na seção HTML designada para exibir os resultados.

## Estrutura do Código
* **`jogos`:** Um array de objetos, onde cada objeto representa um jogo com propriedades como `nome`, `descriçao`, `generos`, `link` e `tags`.
* **`search()`:** A função principal que realiza a busca e a exibição dos resultados.

## Uso
Para utilizar esta função:
1. **HTML:** Certifique-se de ter um campo de entrada com o ID "campo-pesquisa" e uma seção com o ID "resultados-pesquisa" em seu HTML.
2. **JavaScript:** Chame a função `search()` quando um evento de mudança ocorrer no campo de pesquisa.

## Exemplo de HTML
```html
<input type="text" id="campo-pesquisa" placeholder="Pesquisar jogos">
<div id="resultados-pesquisa"></div>
