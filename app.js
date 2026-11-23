/**
 * Interactive Application Logic for Muhammed Sahid VP Portfolio
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.portfolioData;
  if (!data) {
    console.error("Portfolio data not found.");
    return;
  }

  // --- 1. Theme Toggle Management ---
  const themeToggleBtn = document.getElementById("theme-toggle-btn");
  const themeToggleMobile = document.getElementById("theme-toggle-mobile");
  const body = document.body;

  const savedTheme = localStorage.getItem("sahid_portfolio_theme");
  if (savedTheme === "light") {
    body.classList.add("light-theme");
    updateThemeIcons(true);
  } else {
    updateThemeIcons(false);
  }

  function toggleTheme() {
    body.classList.toggle("light-theme");
    const isLight = body.classList.contains("light-theme");
    localStorage.setItem("sahid_portfolio_theme", isLight ? "light" : "dark");
    updateThemeIcons(isLight);
  }

  function updateThemeIcons(isLight) {
    const suns = document.querySelectorAll(".theme-icon-sun");
    const moons = document.querySelectorAll(".theme-icon-moon");
    suns.forEach(sun => {
      sun.classList.toggle("hidden", isLight);
    });
    moons.forEach(moon => {
      moon.classList.toggle("hidden", !isLight);
    });
  }

  if (themeToggleBtn) themeToggleBtn.addEventListener("click", toggleTheme);
  if (themeToggleMobile) themeToggleMobile.addEventListener("click", toggleTheme);

  // --- 2. Mobile Menu Navigation ---
  const mobileMenuBtn = document.getElementById("mobile-menu-btn");
  const mobileNavMenu = document.getElementById("mobile-nav-menu");
  const mobileNavClose = document.getElementById("mobile-nav-close");
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

  function openMobileNav() {
    mobileNavMenu.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeMobileNav() {
    mobileNavMenu.classList.add("hidden");
    document.body.style.overflow = "";
  }

  if (mobileMenuBtn) mobileMenuBtn.addEventListener("click", openMobileNav);
  if (mobileNavClose) mobileNavClose.addEventListener("click", closeMobileNav);
  mobileNavLinks.forEach(link => link.addEventListener("click", closeMobileNav));

  // --- 3. Dynamic Roles Carousel / Typed Effect ---
  const dynamicRoleEl = document.getElementById("dynamic-role");
  if (dynamicRoleEl && data.personal.roles && data.personal.roles.length > 0) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 90;
    const deletingSpeed = 45;
    const delayBetween = 1800;

    function typeEffect() {
      const currentRole = data.personal.roles[roleIndex];
      if (isDeleting) {
        dynamicRoleEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
      } else {
        dynamicRoleEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        setTimeout(typeEffect, delayBetween);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % data.personal.roles.length;
        setTimeout(typeEffect, 400);
      } else {
        setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
      }
    }
    typeEffect();
  }

  // --- 4. Render Stats ---
  const statsContainer = document.getElementById("hero-stats-container");
  if (statsContainer && data.personal.stats) {
    statsContainer.innerHTML = data.personal.stats.map(stat => `
      <div class="glass-panel p-4 rounded-2xl text-center border border-slate-800/80 hover:border-blue-500/40 transition-all shadow-lg">
        <div class="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-mono">
          ${stat.value}<span class="text-xs font-normal text-blue-400 ml-1">${stat.suffix}</span>
        </div>
        <div class="text-xs md:text-sm text-slate-400 font-medium mt-1">
          ${stat.label}
        </div>
      </div>
    `).join("");
  }

  // --- 5. Render Enlarged Projects ---
  const projectsGrid = document.getElementById("projects-container");
  const projectFilters = document.querySelectorAll(".project-filter-btn");
  let activeFilter = "all";

  function renderProjects(filter = "all") {
    if (!projectsGrid) return;
    const filtered = filter === "all" 
      ? data.projects 
      : data.projects.filter(p => p.category === filter);

    projectsGrid.innerHTML = filtered.map((project, idx) => {
      const isEven = idx % 2 === 0;
      const techPills = project.techStack.map(t => `<span class="tech-pill"><i data-lucide="tag" class="w-3 h-3 text-blue-400"></i>${t}</span>`).join("");
      
      const metricsHtml = project.metrics.map(m => `
        <div class="px-3 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 flex flex-col">
          <span class="text-sm font-bold text-blue-400 font-mono">${m.value}</span>
          <span class="text-[11px] text-slate-400">${m.label}</span>
        </div>
      `).join("");

      const featuresHtml = project.keyFeatures.slice(0, 3).map(f => `
        <li class="flex items-start gap-2.5 text-xs md:text-sm text-slate-300">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join("");

      // Mockup rendering (Mobile vs Desktop)
      let mockupHtml = "";
      if (project.mockupType === "mobile") {
        mockupHtml = `
          <div class="phone-mockup">
            <div class="phone-notch">
              <div class="phone-notch-speaker"></div>
              <div class="phone-notch-camera"></div>
            </div>
            <div class="phone-screen p-4 flex flex-col justify-between">
              <!-- App Bar Preview -->
              <div class="flex items-center justify-between pb-3 border-b border-slate-800">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-blue-600/30 flex items-center justify-center text-blue-400 font-bold text-xs">
                    <i data-lucide="layers" class="w-4 h-4"></i>
                  </div>
                  <div>
                    <div class="text-[11px] font-bold text-white leading-tight">${project.title.split('–')[0]}</div>
                    <div class="text-[9px] text-emerald-400 flex items-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Flutter Native 60 FPS
                    </div>
                  </div>
                </div>
                <i data-lucide="bell" class="w-3.5 h-3.5 text-slate-400"></i>
              </div>

              <!-- Content Visual Preview -->
              <div class="my-auto space-y-3 py-2">
                <div class="p-3 rounded-xl bg-gradient-to-br ${project.accentColor} text-white shadow-md">
                  <div class="text-[10px] uppercase tracking-wider font-semibold opacity-90">${project.badge}</div>
                  <div class="text-xs font-bold mt-1 line-clamp-2">${project.tagline}</div>
                </div>
                <div class="grid grid-cols-2 gap-2">
                  <div class="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px]">
                    <div class="text-slate-400">Architecture</div>
                    <div class="font-bold text-blue-400 font-mono text-[11px] truncate">${project.archPattern || 'Clean Arch'}</div>
                  </div>
                  <div class="p-2 rounded-lg bg-slate-900/80 border border-slate-800 text-[10px]">
                    <div class="text-slate-400">State Engine</div>
                    <div class="font-bold text-emerald-400 font-mono text-[11px] truncate">${project.stateMgmt || 'GetX / BLoC'}</div>
                  </div>
                </div>
                <div class="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800 text-[10px] space-y-1">
                  <div class="flex justify-between text-slate-400">
                    <span>Sync & Telemetry</span>
                    <span class="text-emerald-400 font-mono font-medium">${project.syncStatus || 'Active Stream'}</span>
                  </div>
                  <div class="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div class="bg-gradient-to-r from-blue-500 to-emerald-400 h-1.5 rounded-full w-5/6"></div>
                  </div>
                </div>
              </div>

              <!-- Bottom Action in Mockup -->
              <div class="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                <div class="flex items-center gap-1">
                  <i data-lucide="smartphone" class="w-3 h-3 text-blue-400"></i>
                  <span>${project.platformTag || 'Android & iOS Ready'}</span>
                </div>
                <span class="text-blue-400 font-mono font-semibold">Flutter Native</span>
              </div>
            </div>
          </div>
        `;
      } else {
        // Desktop / Browser mockup
        mockupHtml = `
          <div class="browser-mockup">
            <div class="browser-header">
              <div class="browser-dot bg-rose-500"></div>
              <div class="browser-dot bg-amber-500"></div>
              <div class="browser-dot bg-emerald-500"></div>
              <div class="browser-url-bar">
                <i data-lucide="lock" class="w-2.5 h-2.5 mr-1 text-emerald-400"></i>
                ${project.repoUrl || 'https://github.com/sahidvp/' + project.id}
              </div>
            </div>
            <div class="p-6 bg-slate-950/90 text-left font-mono">
              <div class="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
                <span class="text-xs text-blue-400 font-bold flex items-center gap-2">
                  <i data-lucide="terminal" class="w-4 h-4"></i> ${project.title.split('–')[0]} SPA
                </span>
                <span class="text-[10px] px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  ${project.platformTag || 'React + Vite'}
                </span>
              </div>
              <div class="space-y-2 text-xs text-slate-300">
                <p class="text-slate-400">// Modern React Component Architecture</p>
                <p><span class="text-purple-400">export default function</span> <span class="text-amber-300">ResortExperience</span>() {</p>
                <p class="pl-4 text-slate-300"><span class="text-purple-400">const</span> [selectedSuite, setSuite] = <span class="text-blue-300">useState</span>(<span class="text-emerald-400">"deluxe-ocean"</span>);</p>
                <p class="pl-4 text-slate-400">// Dynamic Booking & Real-time Room Availability</p>
                <p class="pl-4 text-slate-300"><span class="text-purple-400">return</span> (</p>
                <p class="pl-8 text-blue-300">&lt;<span class="text-rose-400">ResortHero</span> suite={selectedSuite} onBook={handleReservation} /&gt;</p>
                <p class="pl-4 text-slate-300">);</p>
                <p>}</p>
              </div>
              <div class="mt-4 pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-400">
                <span>Performance: Sub-second HMR & 60 FPS</span>
                <span class="text-blue-400">Tailwind + Vite</span>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="glass-panel rounded-3xl p-6 md:p-8 border border-slate-800 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/20 transition-all duration-300">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <!-- Left Info Column -->
            <div class="lg:col-span-7 space-y-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}">
              <div class="flex flex-wrap items-center gap-2.5">
                <span class="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center gap-1.5">
                  <i data-lucide="sparkles" class="w-3.5 h-3.5"></i> ${project.categoryLabel}
                </span>
                <span class="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  ${project.badge}
                </span>
              </div>

              <div>
                <h3 class="text-2xl md:text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
                  ${project.title}
                </h3>
                <p class="text-sm md:text-base text-slate-400 mt-2 leading-relaxed">
                  ${project.tagline}
                </p>
              </div>

              <!-- Metrics Grid -->
              <div class="grid grid-cols-3 gap-2.5 py-1">
                ${metricsHtml}
              </div>

              <!-- Key Highlights -->
              <ul class="space-y-2 py-1">
                ${featuresHtml}
              </ul>

              <!-- Tech Stack Tags -->
              <div class="flex flex-wrap gap-1.5 pt-2">
                ${techPills}
              </div>

              <!-- Action Buttons -->
              <div class="flex flex-wrap items-center gap-3 pt-3">
                <button onclick="window.openProjectModal('${project.id}')" class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all hover:scale-105 active:scale-95 cursor-pointer">
                  <i data-lucide="maximize-2" class="w-4 h-4"></i>
                  <span>Enlarge Deep Dive</span>
                </button>
                ${project.playStoreUrl ? `
                  <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-medium text-sm flex items-center gap-2 transition-all">
                    <i data-lucide="play" class="w-4 h-4 text-emerald-400"></i>
                    <span>Google Play Store</span>
                  </a>
                ` : ''}
                ${project.repoUrl && !project.isEnterprise ? `
                  <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 font-medium text-sm flex items-center gap-2 transition-all">
                    <i data-lucide="github" class="w-4 h-4"></i>
                    <span>GitHub Repository</span>
                  </a>
                ` : ''}
                ${project.adminRepoUrl ? `
                  <a href="${project.adminRepoUrl}" target="_blank" rel="noopener noreferrer" class="px-3.5 py-2.5 rounded-xl bg-purple-600/20 hover:bg-purple-600/30 border border-purple-500/40 text-purple-300 font-medium text-xs flex items-center gap-1.5 transition-all">
                    <i data-lucide="layout-dashboard" class="w-3.5 h-3.5 text-purple-400"></i>
                    <span>Admin App</span>
                  </a>
                ` : ''}
                ${project.isEnterprise && !project.playStoreUrl ? `
                  <span class="px-3.5 py-2 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 text-xs font-mono flex items-center gap-1.5" title="${project.enterpriseNote || 'Enterprise System'}">
                    <i data-lucide="shield-check" class="w-3.5 h-3.5 text-blue-400"></i>
                    <span>Enterprise System</span>
                  </span>
                ` : ''}
              </div>
            </div>

            <!-- Right Visual Mockup Column -->
            <div class="lg:col-span-5 flex justify-center items-center ${isEven ? 'order-2' : 'order-2 lg:order-1'}">
              ${mockupHtml}
            </div>

          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) {
      window.lucide.createIcons();
    }
  }

  // Filter Button Listeners
  projectFilters.forEach(btn => {
    btn.addEventListener("click", () => {
      projectFilters.forEach(b => {
        b.classList.remove("bg-blue-600", "text-white");
        b.classList.add("bg-slate-900/60", "text-slate-400");
      });
      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove("bg-slate-900/60", "text-slate-400");

      activeFilter = btn.getAttribute("data-filter");
      renderProjects(activeFilter);
    });
  });

  // Initial render
  renderProjects("all");

  // --- 6. Project Modal Logic ---
  const projectModal = document.getElementById("project-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBody = document.getElementById("modal-body-content");

  window.openProjectModal = function(projectId) {
    const project = data.projects.find(p => p.id === projectId);
    if (!project || !projectModal || !modalBody) return;

    modalBody.innerHTML = `
      <div class="space-y-6">
        <!-- Header -->
        <div class="border-b border-slate-800 pb-5">
          <div class="flex flex-wrap items-center gap-2 mb-2">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-400 border border-blue-500/30">
              ${project.categoryLabel}
            </span>
            <span class="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
              ${project.badge}
            </span>
          </div>
          <h2 class="text-2xl md:text-3xl font-extrabold text-white">
            ${project.title}
          </h2>
          <p class="text-slate-400 text-sm md:text-base mt-2">
            ${project.tagline}
          </p>
        </div>

        <!-- Project Overview -->
        <div class="space-y-2">
          <h4 class="text-sm uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
            <i data-lucide="file-text" class="w-4 h-4"></i> Executive Summary & Scope
          </h4>
          <p class="text-sm md:text-base text-slate-300 leading-relaxed bg-slate-900/50 p-4 rounded-2xl border border-slate-800">
            ${project.summary}
          </p>
        </div>

        <!-- Architecture & Challenge/Solution -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class="p-4 rounded-2xl bg-slate-900/60 border border-slate-800">
            <div class="text-xs uppercase tracking-wider text-rose-400 font-bold flex items-center gap-2 mb-2">
              <i data-lucide="alert-triangle" class="w-4 h-4"></i> The Engineering Challenge
            </div>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
              ${project.challengeAndSolution.challenge}
            </p>
          </div>

          <div class="p-4 rounded-2xl bg-slate-900/60 border border-emerald-500/30">
            <div class="text-xs uppercase tracking-wider text-emerald-400 font-bold flex items-center gap-2 mb-2">
              <i data-lucide="check-circle" class="w-4 h-4"></i> Architectural Solution
            </div>
            <p class="text-xs md:text-sm text-slate-300 leading-relaxed">
              ${project.challengeAndSolution.solution}
            </p>
          </div>
        </div>

        <!-- Comprehensive Key Highlights -->
        <div class="space-y-3">
          <h4 class="text-sm uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
            <i data-lucide="check-square" class="w-4 h-4"></i> Full Feature Breakdown & Engineering Details
          </h4>
          <ul class="space-y-2.5">
            ${project.keyFeatures.map(feat => `
              <li class="flex items-start gap-3 text-xs md:text-sm text-slate-300 bg-slate-900/40 p-3 rounded-xl border border-slate-800/80">
                <i data-lucide="check" class="w-4 h-4 text-emerald-400 shrink-0 mt-0.5"></i>
                <span>${feat}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <!-- Tech Stack Used -->
        <div class="space-y-2">
          <h4 class="text-sm uppercase tracking-wider text-blue-400 font-bold flex items-center gap-2">
            <i data-lucide="cpu" class="w-4 h-4"></i> Tech Stack & Tooling
          </h4>
          <div class="flex flex-wrap gap-2">
            ${project.techStack.map(t => `<span class="tech-pill px-3 py-1 text-xs"><i data-lucide="box" class="w-3.5 h-3.5 text-blue-400"></i> ${t}</span>`).join("")}
          </div>
        </div>

        <!-- Modal Action Footer -->
        <div class="pt-4 border-t border-slate-800 flex flex-wrap justify-between items-center gap-3">
          <div class="text-xs text-slate-400 font-mono">
            ${project.enterpriseNote 
              ? `<span class="text-blue-400 font-semibold flex items-center gap-1.5"><i data-lucide="building-2" class="w-4 h-4"></i>${project.enterpriseNote}</span>` 
              : `Repository: <a href="${project.repoUrl}" target="_blank" class="text-blue-400 hover:underline">github.com/sahidvp/${project.repoUrl ? project.repoUrl.split('/').pop() : project.id}</a>`}
          </div>
          <div class="flex flex-wrap items-center gap-3">
            ${project.playStoreUrl ? `
              <a href="${project.playStoreUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all">
                <i data-lucide="play" class="w-4 h-4"></i>
                <span>Open in Google Play</span>
              </a>
            ` : ''}
            ${project.repoUrl && !project.isEnterprise ? `
              <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-blue-600/30 transition-all">
                <i data-lucide="github" class="w-4 h-4"></i>
                <span>View Source Code</span>
              </a>
            ` : ''}
            ${project.adminRepoUrl ? `
              <a href="${project.adminRepoUrl}" target="_blank" rel="noopener noreferrer" class="px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs md:text-sm flex items-center gap-2 shadow-lg shadow-purple-600/30 transition-all">
                <i data-lucide="layout-dashboard" class="w-4 h-4"></i>
                <span>Admin App Repo</span>
              </a>
            ` : ''}
          </div>
        </div>
      </div>
    `;

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
    if (window.lucide) window.lucide.createIcons();
  };

  function closeProjectModal() {
    if (projectModal) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && projectModal && projectModal.classList.contains("active")) {
      closeProjectModal();
    }
  });

  // --- 7. Render Enlarged Experiences & Timeline ---
  const experienceContainer = document.getElementById("experience-timeline-container");
  const expTypeTabs = document.querySelectorAll(".exp-tab-btn");

  function renderExperience(typeFilter = "all") {
    if (!experienceContainer) return;

    const filtered = typeFilter === "all"
      ? data.experiences
      : data.experiences.filter(e => e.type === typeFilter);

    experienceContainer.innerHTML = filtered.map((exp, idx) => {
      const isWork = exp.type === "work";
      const badgeColor = isWork 
        ? "bg-blue-500/10 text-blue-400 border-blue-500/20" 
        : "bg-purple-500/10 text-purple-400 border-purple-500/20";
      
      const skillsPills = exp.skillsUsed.map(s => `
        <span class="px-2.5 py-1 rounded-lg text-xs font-mono bg-slate-900 border border-slate-800 text-slate-300">
          ${s}
        </span>
      `).join("");

      return `
        <div class="relative pl-8 md:pl-0 mb-10 group">
          <!-- Timeline Node Icon -->
          <div class="hidden md:flex absolute left-1/2 -translate-x-1/2 top-4 w-9 h-9 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 items-center justify-center shadow-lg shadow-blue-500/20 z-10 group-hover:scale-110 transition-transform">
            <i data-lucide="${isWork ? 'briefcase' : 'graduation-cap'}" class="w-4 h-4"></i>
          </div>

          <!-- Mobile Stem Node -->
          <div class="md:hidden absolute left-0 top-4 w-6 h-6 rounded-full bg-slate-900 border-2 border-blue-500 text-blue-400 flex items-center justify-center z-10">
            <div class="w-2 h-2 rounded-full bg-blue-400"></div>
          </div>

          <!-- Card (Alternating left/right on desktop) -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div class="${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:col-start-2 md:pl-12'}">
              <div class="glass-panel p-6 md:p-8 rounded-3xl border border-slate-800 hover:border-blue-500/40 transition-all shadow-xl group-hover:shadow-2xl">
                
                <div class="flex flex-wrap items-center gap-2 mb-3 ${idx % 2 === 0 ? 'md:justify-end' : ''}">
                  <span class="px-3 py-1 rounded-full text-xs font-semibold ${badgeColor} border">
                    ${exp.badge}
                  </span>
                  <span class="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <i data-lucide="calendar" class="w-3.5 h-3.5 text-blue-400"></i> ${exp.period}
                  </span>
                </div>

                <h3 class="text-xl md:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  ${exp.role}
                </h3>
                <div class="text-sm font-semibold text-blue-400 mt-1 flex items-center gap-1.5 ${idx % 2 === 0 ? 'md:justify-end' : ''}">
                  <i data-lucide="building-2" class="w-4 h-4"></i> ${exp.company}
                </div>
                <div class="text-xs text-slate-400 mt-1 flex items-center gap-1 ${idx % 2 === 0 ? 'md:justify-end' : ''}">
                  <i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-500"></i> ${exp.location}
                </div>

                <p class="text-xs md:text-sm text-slate-300 mt-4 leading-relaxed text-left">
                  ${exp.summary}
                </p>

                <!-- Detailed Bullet Points -->
                <div class="mt-4 pt-4 border-t border-slate-800 text-left">
                  <div class="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Contributions & Architecture</div>
                  <ul class="space-y-2 text-xs md:text-sm text-slate-300">
                    ${exp.highlights.map(h => `
                      <li class="flex items-start gap-2">
                        <i data-lucide="chevron-right" class="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5"></i>
                        <span>${h}</span>
                      </li>
                    `).join("")}
                  </ul>
                </div>

                <!-- Skills Tag Cloud -->
                <div class="mt-4 pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5 text-left">
                  ${skillsPills}
                </div>

              </div>
            </div>
          </div>
        </div>
      `;
    }).join("");

    if (window.lucide) window.lucide.createIcons();
  }

  expTypeTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      expTypeTabs.forEach(t => {
        t.classList.remove("bg-blue-600", "text-white");
        t.classList.add("bg-slate-900/60", "text-slate-400");
      });
      tab.classList.add("bg-blue-600", "text-white");
      tab.classList.remove("bg-slate-900/60", "text-slate-400");

      const filter = tab.getAttribute("data-exp");
      renderExperience(filter);
    });
  });

  renderExperience("all");

  // --- 8. Render Skills Matrix ---
  const skillsContainer = document.getElementById("skills-categories-container");
  if (skillsContainer && data.skills && data.skills.categories) {
    skillsContainer.innerHTML = data.skills.categories.map(cat => {
      const skillsList = cat.skills.map(s => `
        <div class="flex items-center justify-between p-2.5 rounded-xl bg-slate-950/60 border border-slate-800/80 hover:border-slate-700 transition-colors">
          <span class="text-xs md:text-sm font-medium text-slate-200">${s.name}</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded-md bg-blue-500/10 text-blue-400 border border-blue-500/20">${s.badge}</span>
        </div>
      `).join("");

      return `
        <div class="glass-panel p-6 rounded-3xl border border-slate-800 hover:border-blue-500/30 transition-all flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-3 mb-4">
              <div class="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
              </div>
              <h3 class="text-lg font-bold text-white">${cat.name}</h3>
            </div>
            <div class="space-y-2 mt-2">
              ${skillsList}
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  // --- 9. Copy Email Toast & Form Action ---
  const copyEmailBtn = document.getElementById("copy-email-btn");
  const copyFeedback = document.getElementById("copy-feedback");

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(data.personal.email).then(() => {
        if (copyFeedback) {
          copyFeedback.classList.remove("opacity-0");
          setTimeout(() => {
            copyFeedback.classList.add("opacity-0");
          }, 2500);
        }
      });
    });
  }

  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("sender-name")?.value || "";
      const email = document.getElementById("sender-email")?.value || "";
      const subject = document.getElementById("sender-subject")?.value || "Project Collaboration Inquiry";
      const message = document.getElementById("sender-message")?.value || "";

      const mailtoLink = `mailto:${data.personal.email}?subject=${encodeURIComponent(subject + " - from " + name)}&body=${encodeURIComponent("From: " + name + " (" + email + ")\n\n" + message)}`;
      window.location.href = mailtoLink;

      const submitBtn = contactForm.querySelector("button[type='submit']");
      if (submitBtn) {
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Message Drafted!`;
        submitBtn.classList.add("bg-emerald-600");
        setTimeout(() => {
          submitBtn.innerHTML = originalText;
          submitBtn.classList.remove("bg-emerald-600");
          contactForm.reset();
          if (window.lucide) window.lucide.createIcons();
        }, 3000);
      }
    });
  }

  // --- 10. Update Dynamic Text Fields ---
  const userNameElements = document.querySelectorAll(".user-name-text");
  userNameElements.forEach(el => el.textContent = data.personal.name);

  const userEmailElements = document.querySelectorAll(".user-email-text");
  userEmailElements.forEach(el => {
    el.textContent = data.personal.email;
    if (el.tagName === "A") el.href = `mailto:${data.personal.email}`;
  });

  const userGithubLinks = document.querySelectorAll(".user-github-link");
  userGithubLinks.forEach(el => {
    el.href = data.personal.github;
  });

  // Re-run Lucide Icons to cover all dynamic HTML
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

