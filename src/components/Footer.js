import gitHubIcon from "../assets/github.svg";
import linkedinIcon from "../assets/linkedin.svg";
import whatsappIcon from "../assets/whatsapp.svg";

export function Footer() {
  return `
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
  `;
}
