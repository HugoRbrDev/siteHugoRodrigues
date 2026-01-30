import { Sidebar } from "./components/Sidebar.js";
import { Footer } from "./components/Footer.js";
import { About } from "./components/About.js";
import { Formations } from "./components/Formations.js";
import { Experience } from "./components/Experience.js";
import { Certificates } from "./components/Certificates.js";
import { Skills } from "./components/Skills.js";
import { Projects } from "./components/Projects.js";

// App.js - Componente principal
document.getElementById("app").innerHTML = `
  ${Sidebar()}
  <button id="theme-toggle" class="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-accent text-white shadow-2xl hover:scale-110 transition-transform">
    <span class="dark:hidden">🌙</span>
    <span class="hidden dark:inline">☀️</span>
  </button>

  <!-- Main Content -->
  <main class="md:ml-64">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-overlay"></div>
      <div class="content-container text-center">
        <h1 class="text-5xl md:text-7xl font-bold text-white mb-4">Hugo Rodrigues</h1>
        <p class="text-xl md:text-2xl text-gray-300">Full-Stack | Data | Analytics</p>
      </div>
    </section>

    ${About()}
    ${Formations()}
    ${Experience()}
    ${Certificates()}
    ${Skills()}
    ${Projects()}

    ${Footer()}
  </main>
`;
