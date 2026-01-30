# Currículo Hugo Rodrigues

Site de currículo pessoal desenvolvido com HTML, CSS, JavaScript, Tailwind CSS e Vite.

## 🚀 Tecnologias

- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**
- **Tailwind CSS**
- **Vite**

## 📋 Funcionalidades

- ✅ Design responsivo (mobile-first)
- ✅ Barra de navegação lateral (desktop) / Menu hambúrguer (mobile)
- ✅ Scroll suave entre seções
- ✅ Seções: Sobre Mim, Formações, Experiência, Certificados, Competências, Projetos
- ✅ Hero section com imagem de fundo e efeito fade
- ✅ Rodapé com links sociais (LinkedIn, WhatsApp, GitHub)

## 🛠️ Instalação

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Acesse no navegador:

```
http://localhost:3000
```

## 📦 Build para Produção

```bash
npm run build
```

Os arquivos serão gerados na pasta `dist/`.

## 📁 Estrutura do Projeto

```
CurriculoHugo/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── src/
│   ├── main.js
│   ├── App.js
│   ├── style.css
│   └── assets/
│       ├── linkedin.svg
│       ├── whatsapp.svg
│       ├── github.svg
│       ├── foto-perfil.jpg (adicione sua foto)
│       ├── hero-bg.jpg (adicione imagem de fundo)
│       ├── experiencia1.jpg (adicione imagens)
│       ├── experiencia2.jpg
│       ├── projeto1.jpg
│       ├── projeto2.jpg
│       └── projeto3.jpg
└── README.md
```

## 🎨 Personalização

### Adicionar imagens:

1. **Foto de perfil**: Substitua `/src/assets/foto-perfil.jpg`
2. **Imagem de fundo do hero**: Substitua `/src/assets/hero-bg.jpg`
3. **Imagens de experiência**: Substitua `/src/assets/experiencia1.jpg` e `experiencia2.jpg`
4. **Imagens de projetos**: Substitua `/src/assets/projeto1.jpg`, `projeto2.jpg`, `projeto3.jpg`

### Editar informações:

Edite o arquivo `src/App.js` para personalizar:

- Informações pessoais (Sobre Mim)
- Formações
- Experiências profissionais
- Certificados
- Competências
- Projetos
- Links sociais no rodapé

## 📱 Responsividade

O site é totalmente responsivo e se adapta a:

- 📱 Mobile (< 768px)
- 📱 Tablet (768px - 1024px)
- 💻 Desktop (> 1024px)

## 📄 Licença

Este projeto é de uso pessoal.

A Fazer:
O botão de troca de tema está funcional, agora falta tratar do tema light
