/* ============================================
   Flantik Solution - Navbar Component
   ============================================ */

function renderNavbar() {
  const container = document.getElementById('navbar-container');
  if (!container) return;

  container.innerHTML = `
  <div id="scroll-progress"></div>
  <nav id="navbar" class="fixed top-0 left-0 right-0 z-50 bg-transparent transition-all duration-300">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <a href="index.html" class="flex items-center gap-2 group">
          <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
            <span class="text-white font-bold text-xl">F</span>
          </div>
          <span class="text-xl font-bold text-white">Flantik<span class="text-cyan-400">.</span></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a href="index.html" class="nav-link text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">Home</a>
          <a href="about.html" class="nav-link text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">About</a>
          <a href="services.html" class="nav-link text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">Services</a>
          <a href="careers.html" class="nav-link text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">Careers</a>
          <a href="contact.html" class="nav-link text-slate-300 hover:text-cyan-400 transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 after:transition-all hover:after:w-full">Contact</a>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <button id="dark-toggle" class="text-slate-300 hover:text-cyan-400 transition-colors p-2 rounded-lg hover:bg-slate-800" aria-label="Toggle dark mode">
            <i data-lucide="moon" class="w-5 h-5"></i>
          </button>
          <a href="contact.html" class="hidden md:inline-flex btn-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
            Get Started
          </a>

          <!-- Hamburger -->
          <button id="hamburger" class="md:hidden flex flex-col gap-1.5 p-2" aria-label="Toggle menu">
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            <span class="block w-6 h-0.5 bg-white transition-all duration-300 origin-center"></span>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div id="mobile-menu" class="md:hidden max-h-0 opacity-0 overflow-hidden transition-all duration-500 bg-slate-900/95 backdrop-blur-md">
      <div class="px-4 py-4 space-y-3">
        <a href="index.html" class="nav-link block text-slate-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Home</a>
        <a href="about.html" class="nav-link block text-slate-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">About</a>
        <a href="services.html" class="nav-link block text-slate-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Services</a>
        <a href="careers.html" class="nav-link block text-slate-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Careers</a>
        <a href="contact.html" class="nav-link block text-slate-300 hover:text-cyan-400 py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Contact</a>
        <a href="contact.html" class="block btn-primary text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold mt-2">Get Started</a>
      </div>
    </div>
  </nav>`;
}

renderNavbar();

