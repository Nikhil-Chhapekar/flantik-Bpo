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
        <a href="/" class="flex items-center gap-2.5 group">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00C6E0] via-[#0077B6] to-[#7C3AED] flex items-center justify-center transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-[#0077B6]/30 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-tr from-[#EF4444]/40 via-transparent to-[#F97316]/40"></div>
            <span class="text-white font-extrabold text-lg relative z-10" style="font-family:'Poppins',sans-serif;">F</span>
          </div>
          <span class="text-xl font-bold text-white tracking-tight">Flantik<span class="text-[#00C6E0]"> Solution</span></span>
        </a>

        <!-- Desktop Nav -->
        <div class="hidden md:flex items-center gap-8">
          <a href="/" class="nav-link text-slate-300 hover:text-[#00C6E0] transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00C6E0] after:transition-all hover:after:w-full">Home</a>
          <a href="/about" class="nav-link text-slate-300 hover:text-[#00C6E0] transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00C6E0] after:transition-all hover:after:w-full">About</a>
          <!-- Services Dropdown -->
          <div class="relative group">
            <button class="nav-link flex items-center gap-1 text-slate-300 hover:text-[#00C6E0] transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00C6E0] after:transition-all group-hover:after:w-full">
              Services <i data-lucide="chevron-down" class="w-4 h-4 transition-transform group-hover:rotate-180"></i>
            </button>
            <div class="absolute top-full left-0 mt-6 w-64 bg-slate-900 border border-slate-800 rounded-xl shadow-xl shadow-black/50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden z-50">
              <a href="/services" class="block px-4 py-3 text-sm text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border-b border-slate-800">All Services</a>
              <a href="/services/customer-support" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Customer Support</a>
              <a href="/services/technical-support" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Technical Support</a>
              <a href="/services/digital-marketing" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Digital Marketing</a>
              <a href="/services/telemarketing" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Telemarketing</a>
              <a href="/services/email-chat-support" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Email & Chat Support</a>
              <a href="/services/hiring-support" class="block px-4 py-3 text-sm text-slate-300 hover:text-[#00C6E0] hover:bg-slate-800/50 transition-colors">Hiring Support</a>
            </div>
          </div>
          <a href="/careers" class="nav-link text-slate-300 hover:text-[#00C6E0] transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00C6E0] after:transition-all hover:after:w-full">Careers</a>
          <a href="/contact" class="nav-link text-slate-300 hover:text-[#00C6E0] transition-colors duration-300 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-[#00C6E0] after:transition-all hover:after:w-full">Contact</a>
        </div>

        <!-- Right side -->
        <div class="flex items-center gap-4">
          <a href="/contact" class="hidden md:inline-flex btn-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold">
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
        <a href="/" class="nav-link block text-slate-300 hover:text-[#00C6E0] py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Home</a>
        <a href="/about" class="nav-link block text-slate-300 hover:text-[#00C6E0] py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">About</a>
        <a href="/services" class="nav-link block text-slate-300 hover:text-[#00C6E0] py-2 px-4 rounded-lg hover:bg-slate-800 transition-all font-semibold">Services</a>
        <div class="pl-6 space-y-1">
          <a href="/services/customer-support" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Customer Support</a>
          <a href="/services/technical-support" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Technical Support</a>
          <a href="/services/digital-marketing" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Digital Marketing</a>
          <a href="/services/telemarketing" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Telemarketing</a>
          <a href="/services/email-chat-support" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Email & Chat Support</a>
          <a href="/services/hiring-support" class="nav-link block text-slate-400 hover:text-[#00C6E0] py-1.5 px-4 rounded-lg hover:bg-slate-800 transition-all text-sm">Hiring Support</a>
        </div>
        <a href="/careers" class="nav-link block text-slate-300 hover:text-[#00C6E0] py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Careers</a>
        <a href="/contact" class="nav-link block text-slate-300 hover:text-[#00C6E0] py-2 px-4 rounded-lg hover:bg-slate-800 transition-all">Contact</a>
        <a href="/contact" class="block btn-primary text-white text-center px-5 py-2.5 rounded-lg text-sm font-semibold mt-2">Get Started</a>
      </div>
    </div>
  </nav>`;
}

renderNavbar();

