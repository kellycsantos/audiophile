# Audiophile

O projeto Audiophile consiste no desenvolvimento de um e-commerce de equipamentos de áudio inspirado no desafio do Frontend Mentor. O objetivo é reproduzir o design disponibilizado no Figma de forma fiel, desenvolvendo uma aplicação moderna, responsiva e escalável utilizando Next.js.

Além da implementação da interface, o projeto foi desenvolvido buscando aplicar boas práticas de componentização, organização de código e arquitetura Front-end.

## Design
O layout foi desenvolvido com base no design oficial disponibilizado no Figma.

### Figma

https://www.figma.com/design/m9fncWmHX7LZYG7rSCn5Yi/audiophile-ecommerce-website?node-id=11-205&t=q7OOrM7xeQC4il94-0
   
   <img width="758" height="486" alt="image" src="https://github.com/user-attachments/assets/a0207bf3-6fa0-498d-8dcc-5671a639134d" />
   <img width="318" height="300" alt="image" src="https://github.com/user-attachments/assets/a8a7f5ea-2111-4e30-9abd-4c1bd1413d13" />
   <img width="172" height="264" alt="image" src="https://github.com/user-attachments/assets/faa56816-0245-40ab-8278-fa9e140e779f" />



## Arquitetura

O projeto adota uma arquitetura baseada em componentes (Component-Based Architecture) utilizando o App Router do Next.js.

A aplicação foi estruturada separando responsabilidades entre páginas, componentes reutilizáveis e camada de acesso aos dados, permitindo maior organização e facilidade de manutenção.

Estrutura simplificada:

src/

app/
    page.tsx
    layout.tsx

components/
    Banner/
    Button/
    CardCategories/
    CardProduct/
    Footer/
    Navbar/

api/
    endpoint.ts

assets/
Organização
- App Router responsável pelas rotas da aplicação.
- Components contendo componentes reutilizáveis.
- API (Mock) responsável disponibilizar os dados da aplicação.
- SCSS Modules para isolamento dos estilos.

## Tecnologias e Libs
  - Next.js 16
  - Typescript
  - SCSS
  - Lucide React
  - ESLint
  - Zustand
  - 
## Aprendizados
- Responsividade utilizando Mobile First
- Utilização da propriedade "anchor" do css para ancorar elementos relativos e aboslutos a um elemento especificado
- Melhor utilização da função layout aninhado do Next.js
- Utilização de container para resposividade fluida em grandes telas

## ideas para o futuro
- Criar padronização de nomenclatura para arquivos e componentes
- Evoluir acessibilidade
- Adicionar Husky 
