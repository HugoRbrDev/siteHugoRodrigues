// 1. Importação dinâmica de todas as imagens da pasta assets
const images = import.meta.glob("../assets/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

// 2. Organização das imagens em um objeto acessível
const assets = Object.fromEntries(
  Object.entries(images).map(([path, module]) => {
    const name = path.replace(/^.*[\\\/]/, "").replace(/\.[^/.]+$/, "");
    return [name, module.default || module];
  }),
);

console.log("Nomes de imagens detectados:", Object.keys(assets));

export function Projects() {
  return `
    <section id="projetos" class="section py-12 transition-colors duration-500">
      <div class="content-container px-4 max-w-7xl mx-auto">
        <h2 class="section-title text-4xl font-bold mb-12 text-center text-current">Projetos</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div class="project-card rounded-xl overflow-hidden shadow-lg border border-gray-500/30 bg-gray-500/5 backdrop-blur-sm">
            <img src="${assets.controlServiceLogin || assets.controlFinLogin}" alt="Projeto 2" class="w-full h-56 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-current">Sistema de Clínicas</h3>
              <p class="opacity-70 mb-4 text-sm">NextJs + Supabase com múltiplos níveis de acesso.</p>
              <button class="project-toggle-btn text-blue-500 font-bold cursor-pointer" data-project="2">Ver Detalhes →</button>
            </div>
          </div>

          <div class="project-card rounded-xl overflow-hidden shadow-lg border border-gray-500/30 bg-gray-500/5 backdrop-blur-sm">
            <img src="${assets.controlFin}" alt="Projeto 3" class="w-full h-56 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-current">Gestão Financeira</h3>
              <p class="opacity-70 mb-4 text-sm">FastApi + Neon com dashboards interativos.</p>
              <button class="project-toggle-btn text-blue-500 font-bold cursor-pointer" data-project="3">Ver Detalhes →</button>
            </div>
          </div>

          <div class="project-card rounded-xl overflow-hidden shadow-lg border border-gray-500/30 bg-gray-500/5 backdrop-blur-sm">
            <img src="${assets.baseDadosCelular}" alt="Projeto 1" class="w-full h-56 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-2 text-current">Gestão Hídrica</h3>
              <p class="opacity-70 mb-4 text-sm">Automação de leitura de poços e relatórios.</p>
              <button class="project-toggle-btn text-blue-500 font-bold cursor-pointer" data-project="1">Ver Detalhes →</button>
            </div>
          </div>

        </div>

        <div id="project-expand-1" class="project-expand-container hidden mt-10 p-6 rounded-2xl border border-gray-500/30 bg-gray-500/5">
          <div class="project-expand-content space-y-6 text-center">
            <img src="${assets.baseDadosCelular}" class="w-full rounded-lg shadow-md">
            <img src="${assets.appscript}" class="w-full rounded-lg shadow-md">
            <h3 class="text-2xl font-bold text-current">Automação de Gestão Hídrica</h3>
            <p class="opacity-80 max-w-2xl mx-auto">Digitalização completa utilizando AppSheet e scripts de automação para Google Sheets.</p>
          </div>
        </div>

        <div id="project-expand-2" class="project-expand-container hidden mt-10 p-6 rounded-2xl border border-gray-500/30 bg-gray-500/5 overflow-y-auto max-h-[120vh]">
          <div class="project-expand-content space-y-8">
            <a href="https://control-service.vercel.app/" target="_blank" class="block">
              
              <div class="space-y-6">
                <img src="${assets.controlServiceHomeAdmin}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceHomeAdmin">
                <img src="${assets.controlServiceFinanceiro1}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceFinanceiro1">
                <img src="${assets.controlServiceFinanceiro2}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceFinanceiro2">
                <img src="${assets.controlServiceLogin}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceLogin">
                <img src="${assets.controlServiceNoticias}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceNoticias">
                <img src="${assets.controlServiceStakeholders}" class="w-full rounded-xl shadow-lg border border-gray-500/20" alt="controlServiceStakeholders">
              </div>

              <div class="space-y-6 pt-4">
                <h4 class="text-lg font-semibold text-current">Visualizações Mobile</h4>
                <div class="grid grid-cols-2 gap-4 justify-center">
                  <img src="${assets.controlServiceMobilePerfil}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                  <img src="${assets.controlServiceMobileHome}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                </div>
                <div class="grid grid-cols-2 gap-4 justify-center">
                  <img src="${assets.controlServiceMobileFinanceiro1}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                  <img src="${assets.controlServiceMobileFinanceiro2}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                </div>
                <div class="grid grid-cols-2 gap-4 justify-center">
                  <img src="${assets.controlServiceMobileStakeholders}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                  <img src="${assets.controlServiceMobileFinanceiro1}" class="w-full max-w-[260px] rounded-2xl border-2 border-gray-500/50 shadow-2xl mx-auto">
                </div>
              </div>

              <div class="text-center pt-6 border-t border-gray-500/30">
                <h3 class="text-3xl font-bold text-current mb-4">Sistema de Gerenciamento de Clínicas</h3>
                <p class="opacity-80 max-w-3xl mx-auto">Portal completo para médicos, pacientes e administradores.</p>
                <p class="text-blue-500 font-bold mt-4">Visitar Projeto Oficial ↗</p>
              </div>
            </a>
          </div>
        </div>

        <div id="project-expand-3" class="project-expand-container hidden mt-10 p-6 rounded-2xl border border-gray-500/30 bg-gray-500/5">
          <div class="project-expand-content space-y-6 text-center">
            <a href="https://controlfin-orcin.vercel.app/login" target="_blank">
              <img src="${assets.controlFin}" class="w-full rounded-xl shadow-lg">
              <div class="flex gap-4 justify-center mt-6">
                 <img src="${assets.controlFinMobileLogin}" class="w-1/3 max-w-[200px] rounded-xl shadow-xl">
                 <img src="${assets.controlFinMobileMenu}" class="w-1/3 max-w-[200px] rounded-xl shadow-xl">
              </div>
              <h3 class="text-2xl font-bold text-current mt-6">Plataforma de Gestão Financeira</h3>
              <p class="opacity-80">Backend robusto em Python com análise de dados e gráficos interativos.</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}
