import logoHr from "../assets/logo-hr.png";

export function Sidebar() {
  return `
    <button id="menu-button" class="fixed top-4 left-4 z-50 md:hidden bg-sidebar p-2 rounded-lg border border-gray-200 dark:border-gray-800 shadow-md">
      <div id="mobile-menu" class="menu-icon text-text">
        <span class="bg-current block h-0.5 w-6 mb-1"></span>
        <span class="bg-current block h-0.5 w-6 mb-1"></span>
        <span class="bg-current block h-0.5 w-6"></span>
      </div>
    </button>

    <aside id="sidebar" class="fixed left-0 top-0 h-full w-64 bg-sidebar border-r border-gray-600 dark:border-gray-800 z-40 transform transition-transform duration-300 md:translate-x-0 -translate-x-full">
      <div class="flex justify-center items-center pt-8 pb-6 border-b border-gray-600 dark:border-gray-800">
        <img src="${logoHr}" alt="HR Logo" class="w-24 h-16">
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
  `;
}
