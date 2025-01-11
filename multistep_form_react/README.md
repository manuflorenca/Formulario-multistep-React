# Formulário de Avaliação de Produto

Este é um projeto de formulário de múltiplas etapas, criado com React, para coletar avaliações de clientes sobre produtos. Ele inclui componentes dinâmicos, navegação entre etapas e um design responsivo.

## Funcionalidades

- Formulário dividido em múltiplas etapas:
  - **Etapa 1:** Informações do usuário (nome e e-mail).
  - **Etapa 2:** Avaliação do produto (review e comentários).
  - **Etapa 3:** Agradecimento e resumo dos dados fornecidos.
- Navegação com botões de **Avançar** e **Voltar**.
- Exibição de um botão **Enviar** ao final do formulário.
- Integração de ícones com a biblioteca `react-icons`.

## Tecnologias Utilizadas

- **React**: Biblioteca principal para a construção do front-end.
- **React Icons**: Para os ícones de navegação.
- **CSS**: Para o estilo do formulário.
- **Hooks**:
  - `useState` para gerenciar o estado do formulário.
  - `UseForm` (custom hook) para controlar as etapas e a lógica de navegação.

## Navegação entre Etapas
A navegação é controlada pelo hook personalizado UseForm, que gerencia:

currentStep: Etapa atual.
changeStep: Função para mudar de etapa.
isFirstStep e isLastStep: Verificações para habilitar ou desabilitar botões.
Personalização
Estilo: Edite o arquivo App.css para alterar o design.
Textos e Rótulos: Ajuste os textos nos componentes e no arquivo App.js.
Novas Etapas: Adicione componentes ao array formComponents e configure suas interações.
Licença
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Feito com ❤️ e React.
