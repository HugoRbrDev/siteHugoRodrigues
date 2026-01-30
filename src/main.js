import "./style.css";
import "./App.js";

// Aguardar um momento para garantir que o HTML foi renderizado
setTimeout(() => {
  initNavigation();
}, 100);

function initNavigation() {
  // Smooth scroll para navegação
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
        // Fechar menu mobile após clicar
        const menu = document.getElementById("mobile-menu");
        const sidebar = document.getElementById("sidebar");
        if (menu && sidebar) {
          sidebar.classList.add("-translate-x-full");
          menu.classList.remove("active");
        }
      }
    });
  });

  // Toggle menu mobile
  const menuButton = document.getElementById("menu-button");
  const sidebar = document.getElementById("sidebar");
  const menu = document.getElementById("mobile-menu");

  if (menuButton && sidebar && menu) {
    menuButton.addEventListener("click", () => {
      sidebar.classList.toggle("-translate-x-full");
      menu.classList.toggle("active");
    });
  }

  // Fechar menu ao clicar fora (mobile)
  document.addEventListener("click", (e) => {
    if (window.innerWidth < 768) {
      if (
        sidebar &&
        !sidebar.contains(e.target) &&
        menuButton &&
        !menuButton.contains(e.target)
      ) {
        sidebar.classList.add("-translate-x-full");
        menu.classList.remove("active");
      }
    }
  });

  // Highlight seção ativa no scroll
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.pageYOffset >= sectionTop - 200) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  });

  // Toggle projetos expansíveis
  setTimeout(() => {
    initProjectExpansion();
  }, 200);
}

function initProjectExpansion() {
  const toggleButtons = document.querySelectorAll(".project-toggle-btn");

  toggleButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const projectId = this.getAttribute("data-project");
      const expandContainer = document.getElementById(
        `project-expand-${projectId}`
      );

      if (expandContainer) {
        const isActive = expandContainer.classList.contains("active");

        // Fechar todos os outros projetos
        document
          .querySelectorAll(".project-expand-container")
          .forEach((container) => {
            if (container !== expandContainer) {
              container.classList.remove("active");
              container.classList.add("hidden");
            }
          });

        // Toggle do projeto atual
        if (isActive) {
          expandContainer.classList.remove("active");
          setTimeout(() => {
            expandContainer.classList.add("hidden");
          }, 500); // Aguardar animação terminar
        } else {
          expandContainer.classList.remove("hidden");
          // Pequeno delay para garantir que o elemento está visível antes da animação
          setTimeout(() => {
            expandContainer.classList.add("active");
          }, 10);

          // Scroll suave para a área expandida
          setTimeout(() => {
            expandContainer.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }, 250);
        }
      }
    });
  });
}
// Botão Tema claro/escuro
setTimeout(() => {
  const themeBtn = document.getElementById("theme-toggle");
  const html = document.documentElement;

  // Inicializa
  html.classList.add(localStorage.getItem("theme") || "light-mode");

  themeBtn?.addEventListener("click", () => {
    const isDark = html.classList.contains("light-mode");
    const newTheme = isDark ? "root" : "light-mode";
    html.classList.remove("light-mode", "root");
    html.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  });
}, 200);
