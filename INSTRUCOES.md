# Guia de Estudos - Prática de JavaScript no Painel de Login

Este painel de login foi construído com HTML semântico e CSS moderno (Glassmorphism), deixando o terreno pronto para você aplicar a lógica com JavaScript.

## 📝 Estrutura do Projeto

- **index.html**: Contém a estrutura da página. Observe que os elementos principais possuem `id` (ex: `loginForm`, `email`, `password`, `btnSubmit`) para facilitar a seleção via JS.
- **index.css**: Contém todo o estilo visual. Não mexa aqui a menos que queira alterar cores ou layout.

## 🚀 Desafios de JavaScript Sugeridos

Aqui está um roteiro gradual para você treinar suas habilidades, do básico ao avançado:

### Nível 1: Manipulação Básica e Eventos
1.  **Capturar o Submit**: Selecione o form (`#loginForm`) e adicione um 'event listener' para o evento `submit`.
    -   *Dica*: Use `e.preventDefault()` para impedir que a página recarregue.
2.  **Ler Valores**: Quando o usuário clicar em "Entrar", capture os valores dos campos de e-mail e senha e exiba no `console.log`.
3.  **Validação Simples**: Verifique se a senha tem pelo menos 6 caracteres. Se não tiver, mostre um `alert()` avisando o usuário.

### Nível 2: Interatividade Visual (DOM)
1.  **Mostrar/Ocultar Senha**:
    -   Adicione um pequeno botão ou ícone (pode ser texto "👁️") dentro do campo de senha.
    -   Ao clicar, altere o tipo do input de `password` para `text` e vice-versa.
2.  **Feedback de Erro**:
    -   Ao invés de `alert()`, crie uma mensagem de erro vermelha logo abaixo do input se o e-mail for inválido ou a senha curta.
    -   Adicione/remova uma classe CSS (ex: `.error`) na borda do input.

### Nível 3: Lógica e Armazenamento
1.  **Simulação de Login**:
    -   Crie um objeto no seu código com um usuário "mock" (falso), ex: `const userMock = { email: "admin@teste.com", pass: "123456" }`.
    -   Compare os dados digitados com esse objeto. Se bater, redirecione para uma "dashboard" (pode ser apenas um `window.location.href = 'dashboard.html'`).
2.  **Lembrar de Mim (LocalStorage)**:
    -   Se o checkbox "Lembrar de mim" estiver marcado ao logar, salve o e-mail no `localStorage`.
    -   Ao abrir a página novamente, verifique se existe algo no `localStorage` e preencha o campo de e-mail automaticamente.

### Nível 4: Efeitos Visuais Avançados
1.  **Loading State**:
    -   Quando clicar em entrar, mude o texto do botão para "Carregando..." e desabilite-o (`disabled = true`).
    -   Use `setTimeout` para simular uma espera de 2 segundos antes de dar o resultado.

## 💡 Dicas de Código

Para selecionar elementos:
```javascript
const form = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
```

Para ouvir eventos:
```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();
    // Sua lógica aqui
});
```

Boa sorte nos estudos! Pratique bastante o `console.log` para entender o que está acontecendo em cada etapa.
