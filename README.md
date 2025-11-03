# 🌙💡 Calculadora de Investimentos + Tema Dinâmico e Efeitos Interativos

Um projeto **front-end moderno** que une **cálculo de investimentos baseados no CDI** com um **design responsivo e interativo** — incluindo **modo escuro**, **rolagem suave**, **animações de entrada (scroll reveal)** e um **menu fixo inteligente** que se adapta conforme a rolagem da página.

---

## 🧩 Funcionalidades Principais

### 💰 **Calculadora CDI**
- Simula o rendimento de investimentos baseados no **CDI (Certificado de Depósito Interbancário)**.  
- Permite configurar:
  - **Aporte inicial**
  - **Aporte mensal**
  - **CDI anual (%)**
  - **Percentual do CDI (%)**
  - **Prazo (meses)**
- Exibe:
  - Total investido  
  - Valor final bruto  
  - Lucro bruto  
  - Imposto de Renda (IR)  
  - Valor líquido  
- Mostra a **evolução do investimento em gráfico interativo** com **Chart.js**.

---

### 🌗 **Modo Claro e Escuro (Dark Mode)**
- Alternância entre temas com ícones dinâmicos (lua ☾ / sol ☀️).  
- Tema salvo automaticamente no **localStorage**.  
- Transição suave de cores com **variáveis CSS**.

---

### 🎢 **Efeitos e Interações**
- **Menu fixo** que muda de estilo ao rolar a página.  
- **Scroll suave (smooth scroll)** para links e botões CTA.  
- **Animação de entrada (scroll reveal)** para elementos ao aparecerem na tela.  
- **Botão flutuante de alternância de tema** no canto inferior direito.

---

## 🧠 Tecnologias Utilizadas

| Tecnologia | Finalidade |
|-------------|-------------|
| **HTML5** | Estrutura da aplicação |
| **CSS3 (com variáveis e media queries)** | Layout responsivo e temas |
| **JavaScript (ES6+)** | Lógica da calculadora, dark mode e interações |
| **Chart.js** | Exibição de gráficos de rendimento |
| **Font Awesome (opcional)** | Ícones para o botão de tema |

---

## 🗂️ Estrutura de Arquivos

📁 projeto-cdi-interativo
│
├── index.html # Estrutura principal do site
├── style.css # Estilos, variáveis de tema e responsividade
├── script.js # Lógica da calculadora, dark mode e efeitos de rolagem
├── money-7923867_1920.jpg # Imagem de fundo ilustrativa
└── README.md # Documentação do projeto
