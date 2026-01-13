import logoHr from "../assets/logo-hr.png";

export function Sidebar() {
  return `
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
          <img src="${logoHr}" alt="HR Logo" class="w-24 h-16 transition-transform duration-300 group-hover:scale-110">
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
  `;
}
