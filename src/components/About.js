import fotoPerfil from "../assets/foto-perfil.jpg";

export function About() {
  return `
    <!-- Sobre Mim -->
    <section id="sobre-mim" class="section">
      <div class="content-container">
        <h2 class="section-title">Sobre Mim</h2>
        <div class="card flex flex-col md:flex-row items-center md:items-start gap-6">
          <img src="${fotoPerfil}" alt="Hugo Rodrigues" class="w-48 h-48 rounded-full object-cover border-4 border-gray-700" onerror="this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'200\' height=\'200\'%3E%3Crect fill=\'%23374151\' width=\'200\' height=\'200\'/%3E%3Ctext fill=\'%239CA3AF\' font-family=\'sans-serif\' font-size=\'50\' dy=\'10.5\' font-weight=\'bold\' x=\'50%25\' y=\'50%25\' text-anchor=\'middle\'%3EHR%3C/text%3E%3C/svg%3E'">
          <div class="flex-1 text-center md:text-left">
            <h3 class="text-3xl font-bold mb-4 text-white">Hugo Rodrigues</h3>
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
  `;
}
