# Versão paralela em Slidev

Experimento em paralelo à apresentação estática (`../index.html`), pra testar os
recursos do [Slidev](https://sli.dev): modo apresentador com notas, export pra
PDF/PPTX, diagramas Mermaid nativos, etc. A versão estática continua sendo a
principal e já está publicada no GitHub Pages, isso aqui é só pra teste.

## Rodar localmente

```bash
cd slidev
npm install
npm run dev
```

Abre em <http://localhost:3030>.

## O que testar

- **Apresentação normal**: <http://localhost:3030>, setas/espaço pra navegar
- **Modo apresentador** (slide atual + próximo + notas de fala): <http://localhost:3030/presenter/>
- **Visão geral de todos os slides**: <http://localhost:3030/overview/>
- **Export**: <http://localhost:3030/export/> (PDF, PNGs ou PPTX)

O conteúdo está em [slides.md](./slides.md), um slide por bloco separado por `---`.
As notas do apresentador ficam em comentários HTML `<!-- ... -->` no fim de cada slide.

## Se der problema

A versão de produção (`../index.html`, HTML/CSS/JS puro, sem dependências) continua
pronta e publicada. Essa pasta é só experimental.
