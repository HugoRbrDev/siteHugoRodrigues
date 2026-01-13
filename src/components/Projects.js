import baseDadosCelular from "../assets/baseDadosCelular.png";
import appscript from "../assets/appscript.png";

export function Projects() {
  return `
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
              <button class="project-toggle-btn text-blue-400 hover:text-blue-300 underline cursor-pointer" data-project="1">
                Ver Projeto →
              </button>
            </div>
          </div>
          <div class="project-card">
            <img src="/src/assets/projeto2.jpg" alt="Projeto 2" class="w-full h-48 object-cover bg-gray-800" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'%3E%3Crect fill=\'%231F2937\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%236B7280\' font-family=\'sans-serif\' font-size=\'24\' dy=\'10.5\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EProjeto 2%3C/text%3E%3C/svg%3E'">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Task Management App</h3>
              <p class="text-gray-400 mb-4">Aplicativo de gerenciamento de tarefas com funcionalidades de colaboração em tempo real usando Vue.js e Socket.io.</p>
              <button class="project-toggle-btn text-blue-400 hover:text-blue-300 underline cursor-pointer" data-project="2">
                Ver Projeto →
              </button>
            </div>
          </div>
          <div class="project-card">
            <img src="/src/assets/projeto3.jpg" alt="Projeto 3" class="w-full h-48 object-cover bg-gray-800" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'200\'%3E%3Crect fill=\'%231F2937\' width=\'400\' height=\'200\'/%3E%3Ctext fill=\'%236B7280\' font-family=\'sans-serif\' font-size=\'24\' dy=\'10.5\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EProjeto 3%3C/text%3E%3C/svg%3E'">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2">Blog Platform</h3>
              <p class="text-gray-400 mb-4">Plataforma de blog moderna com sistema de autenticação, comentários e painel administrativo.</p>
              <button class="project-toggle-btn text-blue-400 hover:text-blue-300 underline cursor-pointer" data-project="3">
                Ver Projeto →
              </button>
            </div>
          </div>
        </div>

        <!-- Áreas expansíveis dos projetos -->
        <div id="project-expand-1" class="project-expand-container hidden">
          <div class="project-expand-content">
            <img src="${baseDadosCelular}" alt="Detalhes Projeto 1" class="project-expand-image">
            <img src="${appscript}" alt="Detalhes Projeto 1" class="project-expand-image">
            
            <div class="project-expand-text">
              <p class="text-gray-300 leading-relaxed">
                Sistema completo desenvolvido para digitalização e automação da gestão hídrica. 
                Utiliza AppSheet como interface móvel conectada ao Google Sheets para armazenamento de dados. 
                Permite leitura automatizada de poços artesianos, geração de relatórios em tempo real 
                e análise de dados históricos. Interface intuitiva desenvolvida para facilitar o trabalho 
                de campo e garantir precisão nas medições.
              </p>
            </div>
          </div>
        </div>

        <div id="project-expand-2" class="project-expand-container hidden">
          <div class="project-expand-content">
            <img src="${baseDadosCelular}" alt="Detalhes Projeto 2" class="project-expand-image">
            <div class="project-expand-text">
              <p class="text-gray-300 leading-relaxed">
                Aplicativo completo de gerenciamento de tarefas com funcionalidades avançadas de colaboração. 
                Desenvolvido com Vue.js no frontend e Socket.io para comunicação em tempo real. 
                Permite criação de equipes, atribuição de tarefas, acompanhamento de progresso e notificações instantâneas. 
                Interface moderna e responsiva, otimizada para uso em desktop e dispositivos móveis.
              </p>
            </div>
          </div>
        </div>

        <div id="project-expand-3" class="project-expand-container hidden">
          <div class="project-expand-content">
            <img src="${baseDadosCelular}" alt="Detalhes Projeto 3" class="project-expand-image">
            <div class="project-expand-text">
              <p class="text-gray-300 leading-relaxed">
                Plataforma de blog moderna e completa desenvolvida com as melhores práticas de desenvolvimento web. 
                Sistema de autenticação seguro, área de comentários interativa e painel administrativo completo. 
                Interface intuitiva para criação e edição de posts, gerenciamento de usuários e análise de métricas. 
                Design responsivo e otimizado para SEO.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
