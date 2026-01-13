import fotoPerfil from "./assets/foto-perfil.jpg";
import gitHubIcon from "./assets/github.svg";
import linkedinIcon from "./assets/linkedin.svg";
import whatsappIcon from "./assets/whatsapp.svg";
import baseDadosCelular from "./assets/baseDadosCelular.png";
// App.js - Componente principal
document.getElementById("app").innerHTML = `
  <!-- Menu Mobile Button -->
  <button id="menu-button" class="fixed top-4 left-4 z-50 md:hidden bg-gray-900 p-2 rounded-lg">
    <div id="mobile-menu" class="menu-icon">
      <span></span>
      <span></span>
      <span></span>
    </div>
  </button>

  <!-- Sidebar Navigation -->
  <aside id="sidebar" class="fixed left-0 top-0 h-full w-64 bg-gray-900 border-r border-gray-800 z-40 transform transition-transform duration-300 ease-in-out md:translate-x-0 -translate-x-full">
    <!-- Logo -->
    <div class="flex justify-center items-center pt-8 pb-6 border-b border-gray-800">
      <div class="relative group">
        <img src="/src/assets/logo-hr.png" alt="HR Logo" class="w-24 h-16 transition-transform duration-300 group-hover:scale-110">
      </div>
    </div>
    <nav class="p-6">
      <ul class="space-y-2">
        <li><a href="#sobre-mim" class="nav-link">Sobre Mim</a></li>
        <li><a href="#formacoes" class="nav-link">Formações</a></li>
        <li><a href="#experiencia" class="nav-link">Experiência</a></li>
        <li><a href="#certificados" class="nav-link">Certificados</a></li>
        <li><a href="#competencias" class="nav-link">Competências</a></li>
        <li><a href="#projetos" class="nav-link">Projetos</a></li>
      </ul>
    </nav>
  </aside>

  <!-- Main Content -->
  <main class="md:ml-64">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="content-container text-center">
        <h1 class="text-5xl md:text-7xl font-bold mb-4">Hugo Rodrigues</h1>
        <p class="text-xl md:text-2xl text-gray-300">Full-Stack | Data | Analytics</p>
      </div>
    </section>

    <!-- Sobre Mim -->
    <section id="sobre-mim" class="section">
      <div class="content-container">
        <h2 class="section-title">Sobre Mim</h2>
        <div class="card flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src="${fotoPerfil}" alt="Hugo Rodrigues" class="w-48 h-48 rounded-full object-cover border-4 border-gray-700" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect fill=\'%23374151\' width=\'200\' height=\'200\'/%3E%3Ctext fill=\'%239CA3AF\' font-family=\'sans-serif\' font-size=\'50\' dy=\'10.5\' font-weight=\'bold\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EHR%3C/text%3E%3C/svg%3E'">
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-3xl font-bold mb-4">Hugo Rodrigues</h3>
            <div class="space-y-3 text-gray-300">
              <p><strong class="text-white">Email:</strong> hugorbrdev@gmail.com</p>
              <p><strong class="text-white">Telefone:</strong> (31) 9.87541-8774</p>
              <p><strong class="text-white">Localização:</strong> MG,Brasil</p>
              <p class="mt-4 text-lg leading-relaxed">
                Desenvolvimento e automação de soluções tecnológicas para otimizar processos e melhorar a eficiência operacional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Formações -->
    <section id="formacoes" class="section">
      <div class="content-container">
        <h2 class="section-title">Formações</h2>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Graduação em Economia</h3>
          <p class="text-gray-300 mb-2"><strong>Instituição:</strong> Universidade Estácio</p>
          <p class="text-gray-300 mb-2"><strong>Período:</strong> 2020 - 2025</p>
          <p class="text-gray-400">Formação completa em ciências Econômicas.</p>
        </div>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Técnico em Edificação</h3>
          <p class="text-gray-300 mb-2"><strong>Instituição:</strong> Escola Técnica FASPEC</p>
          <p class="text-gray-300 mb-2"><strong>Período:</strong> 2019 - 2021</p>
          <p class="text-gray-400">Curso técnico com constução civil</p>
        </div>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Curso.dev</h3>
          <p class="text-gray-300 mb-2"><strong>Instituição:</strong> Filipe Deschamps </p>
          <p class="text-gray-300 mb-2"><strong>Período:</strong> 2025 - 2026</p>
          <p class="text-gray-400">Curso de Programação contemplando Javascript, Git, Docker, Next.JS, React, Node.JS, Postgresql, Migrations, Protocolos HTTP, REST, TDD</p>
        </div>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Curso de Programação em C#</h3>
          <p class="text-gray-300 mb-2"><strong>Instituição:</strong> COTI Informática  </p>
          <p class="text-gray-300 mb-2"><strong>Período:</strong> 2012 - 2013</p>
          <p class="text-gray-400">Curso de Programação em C# (WEB) e Orientação a Objetos</p>
        </div>
      </div>
    </section>

    <!-- Experiência -->
    <section id="experiencia" class="section">
      <div class="content-container">
        <h2 class="section-title">Experiência</h2>
        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia1.jpg" alt="Experiência 1" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Fiscal Sênior</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> Lyon Engenharia</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2024 - Presente</p>
              <p class="text-gray-400 mb-4">
                Atuação na fiscalização da implantação de sistemas hídricos e reservatórios, convertendo dados de avanço de campo em indicadores de performance (KPIs) para a gerência.
                Desenvolvimento de aplicações para automação de atividades rotineiras.
                Automação e coleta de dados sobre a instalação de redes e reservatórios, garantindo o cumprimento do cronograma de abastecimento das comunidades ao longo da bacia do Paraopeba;
              </p>
              <p class="text-gray-400">
                <strong class="text-white">Atuações:</strong> Implantação de sistema hídrico para os afetados em toda a bacia do Paraopeba.
                Implantação e monitoramento do sistema hídrico na comunidade do Queima Fogo - Pompéu
                Obras de implantação de Reservatórios Taça em Brumadinho, Pompeu e Tres Marias

              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia2.jpg" alt="Experiência 2" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Fiscal Pleno</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> Concremat Engenharia e Tecnologia</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2021 - 2024</p>
              <p class="text-gray-400 mb-4">
                Controle de Cronograma das obras de reparação de Brumadinho; 
                Análise e tratamento de dados de medições contratuais e automações para garantir a integridade dos indicadores físico-financeiros da VALE S/A;
                Implantação de obras de melhorias na Mina Córrego do Feijão

              </p>
              <p class="text-gray-400">
                <strong class="text-white">Atuações:</strong> Implantação de Creches em Brumadinho (Bela Vista, Casa Branca, Mário Campos, Parque Cachoeira), Unidades de Saúde (USF Casa Branca, USF Mário Campos);
                Lançamento de tubulação PEAD para abastecimento da comunidade do Feijão e a Mina Córrego do Feijão; Obra de ressignificação da Praça do Feijão;
                Obras de urbanização em Paraopeba, Caetanópolis.

              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia2.jpg" alt="Experiência 3" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Auxiliar Administrativo</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> Real Estrutura</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2021 - 2021</p>
              <p class="text-gray-400 mb-4">
                 Desenvolvimento de relatórios gerenciais estruturados para monitoramento de subcontratadas, focando em KPI’s de desempenho e prazos.
              </p>
              
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia2.jpg" alt="Experiência 4" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Assistente de Produção</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> Sowelu</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2017 - 2021</p>
              <p class="text-gray-400 mb-4">
                Manutenção do Sistema; Suporte técnico; Controle de contas; Controle de custos; Controle de estoque.
              </p>
              
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia2.jpg" alt="Experiência 5" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Estágio</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> TechX Engenharia</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2014 - 2015</p>
              <p class="text-gray-400 mb-4">
                 Geração de Relatórios e Controle de Planilhas de Obras da Telefônica.
              </p>
              <p class="text-gray-400">
                <strong class="text-white">Atuações:</strong> Lançamento da Rede 4G pela Zona Oeste no Rio de Janeiro
              </p>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="flex flex-col md:flex-row gap-6">
            <img src="/src/assets/experiencia2.jpg" alt="Experiência 6" class="w-full md:w-64 h-48 object-cover rounded-lg bg-gray-800" onerror="this.style.display='none'">
            <div class="flex-1">
              <h3 class="text-2xl font-bold mb-3">Estágio</h3>
              <p class="text-gray-300 mb-2"><strong>Empresa:</strong> Folha Dourada</p>
              <p class="text-gray-300 mb-2"><strong>Período:</strong> 2012 - 2013</p>
              <p class="text-gray-400 mb-4">
                  Geração de Relatórios gerenciais, gestão de folhas de pagamento, controle de estoque e cálculos financeiros em Excel; Manutenção de Computadores.
              </p>
              
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Certificados -->
    <section id="certificados" class="section">
      <div class="content-container">
        <h2 class="section-title">Certificados</h2>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Microsoft Project</h3>
          <p class="text-gray-300 mb-2"><strong>Emissor:</strong> Udemy</p>
          <p class="text-gray-300 mb-2"><strong>Data:</strong> 2023</p>
          <p class="text-gray-400">Curso Completo de MS Project - Do básico ao Avançado</p>
        </div>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Microsoft Excel</h3>
          <p class="text-gray-300 mb-2"><strong>Emissor:</strong> Fundação Bradesco</p>
          <p class="text-gray-300 mb-2"><strong>Data:</strong> 2026</p>
          <p class="text-gray-400">Curso completo de Excel Avançado.</p>
        </div>
        <div class="card">
          <h3 class="text-2xl font-bold mb-3">Power BI</h3>
          <p class="text-gray-300 mb-2"><strong>Emissor:</strong> Fundação Bradesco</p>
          <p class="text-gray-300 mb-2"><strong>Data:</strong> 2026</p>
          <p class="text-gray-400">Preparando dados para análise com Power BI</p>
        </div>
      </div>
    </section>

    <!-- Competências -->
    <section id="competencias" class="section">
      <div class="content-container">
        <h2 class="section-title">Competências</h2>
        <div class="text-center">
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Frontend</h3>
            <div>
              <span class="skill-item">HTML5</span>
              <span class="skill-item">CSS3</span>
              <span class="skill-item">JavaScript</span>
              <span class="skill-item">TypeScript</span>
              <span class="skill-item">React</span>
              <span class="skill-item">Tailwind CSS</span>
            </div>
          </div>
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Backend</h3>
            <div>
              <span class="skill-item">Node.js</span>
              <span class="skill-item">Express</span>
              <span class="skill-item">Python</span>
              <span class="skill-item">Django</span>
              <span class="skill-item">PostgreSQL</span>
              <span class="skill-item">MongoDB</span>
              <span class="skill-item">RESTful API</span>
              <span class="skill-item">GraphQL</span>
            </div>
          </div>
          <div class="mb-8">
            <h3 class="text-2xl font-bold mb-4">Ferramentas & Outros</h3>
            <div>
              <span class="skill-item">Git</span>
              <span class="skill-item">Docker</span>
              <span class="skill-item">AWS</span>
              <span class="skill-item">Linux</span>
              <span class="skill-item">Vite</span>
              <span class="skill-item">Webpack</span>
              <span class="skill-item">Jest</span>
              <span class="skill-item">CI/CD</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projetos -->
    <section id="projetos" class="section">
      <div class="content-container">
        <h2 class="section-title">Projetos</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="project-card">
            <img src="${baseDadosCelular}" alt="Projeto 1" class="w-full h-48 object-cover bg-gray-800" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'%3E%3Crect fill=\'%231F2937\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%236B7280\' font-family=\'sans-serif\' font-size=\'24\' dy=\'10.5\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EProjeto 1%3C/text%3E%3C/svg%3E'">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Digitalização e Automação de Gestão Hídrica (AppSheet + Google Sheets)</h3>
              <p class="text-gray-400 mb-4">Aplicativo para controle e automação de leitura de Poços Artesianos.</p>
              <a href="https://github.com/hugorodrigues/projeto1" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Ver Projeto →</a>
            </div>
          </div>
          <div class="project-card">
            <img src="/src/assets/projeto2.jpg" alt="Projeto 2" class="w-full h-48 object-cover bg-gray-800" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'%3E%3Crect fill=\'%231F2937\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%236B7280\' font-family=\'sans-serif\' font-size=\'24\' dy=\'10.5\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EProjeto 2%3C/text%3E%3C/svg%3E'">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Task Management App</h3>
              <p class="text-gray-400 mb-4">Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real usando Vue.js e Socket.io.</p>
              <a href="https://github.com/hugorodrigues/projeto2" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Ver Projeto →</a>
            </div>
          </div>
          <div class="project-card">
            <img src="/src/assets/projeto3.jpg" alt="Projeto 3" class="w-full h-48 object-cover bg-gray-800" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'%3E%3Crect fill=\'%231F2937\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%236B7280\' font-family=\'sans-serif\' font-size=\'24\' dy=\'10.5\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EProjeto 3%3C/text%3E%3C/svg%3E'">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Blog Platform</h3>
              <p class="text-gray-400 mb-4">Plataforma de blog moderna com sistema de autenticação, comentários e painel administrativo.</p>
              <a href="https://github.com/hugorodrigues/projeto3" target="_blank" class="text-blue-400 hover:text-blue-300 underline">Ver Projeto →</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-gray-900 border-t border-gray-800 py-8">
      <div class="content-container">
        <div class="text-center mb-6">
          <p class="text-gray-400">Desenvolvido por <strong class="text-white">Hugo Rodrigues</strong></p>
        </div>
        <div class="flex justify-center items-center">
          <a href="https://www.linkedin.com/in/hugorodriguesbr/" target="_blank" class="social-link">
            <img src="${linkedinIcon}" alt="LinkedIn" class="w-8 h-8">
          </a>
          <a href="https://wa.me/5531975418774" target="_blank" class="social-link">
            <img src="${whatsappIcon}" alt="WhatsApp" class="w-8 h-8">
          </a>
          <a href="https://github.com/HugoRbrDev" target="_blank" class="social-link">
            <img src="${gitHubIcon}" alt="GitHub" class="w-8 h-8">
          </a>
        </div>
      </div>
    </footer>
  </main>
`;
