# 📸 Portfólio de Fotografia - Flávia Benegas

Este projeto é um website de portfólio desenvolvido para apresentar o trabalho da fotógrafa Flávia Benegas. O site conta com uma galeria interativa, filtragem de imagens por categoria e páginas informativas de contacto e sobre.

## 🚀 Funcionalidades

- **Galeria Dinâmica:** As imagens são carregadas via JavaScript através de um array de objetos, facilitando a adição de novas fotos.
- **Sistema de Filtros:** Os utilizadores podem filtrar as fotos por categorias (Infantil, Aniversários, Casamento, Ensaio).
- **Navegação Inteligente:**
  - A seleção de filtros persiste mesmo ao navegar entre páginas diferentes (ex: clicar em "Infantil" na página _Sobre_ redireciona para o _Portfólio_ já filtrado).
  - Uso de `URLSearchParams` para gerir o estado da aplicação via URL.
- **Design Responsivo:** Layout adaptável para dispositivos móveis e desktop.
- **Link Tree:** Página inicial (`index.html`) estilo "árvore de links" para acesso rápido às redes sociais.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica.
- **CSS3:** Estilização com uso de variáveis (`:root`), Flexbox e importação de fontes (Google Fonts - Montserrat e Playfair).
- **JavaScript (ES6+):** Manipulação do DOM, gestão de eventos e lógica de filtragem (`filter`, `forEach`).
