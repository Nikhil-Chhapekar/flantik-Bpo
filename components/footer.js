/* ============================================
   Flantik Solution - Footer Component
   ============================================ */

function renderFooter() {
  const container = document.getElementById('footer-container');
  if (!container) return;

  container.innerHTML = `
  <footer class="bg-slate-900 dark:bg-slate-950 border-t border-slate-800">
    <!-- Newsletter Section -->
    <div class="bg-gradient-to-r from-blue-600 to-cyan-500">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 class="text-2xl font-bold text-white">Subscribe to Our Newsletter</h3>
            <p class="text-blue-100 mt-1">Stay updated with our latest news and offerings.</p>
          </div>
          <form id="newsletter-form" class="flex w-full md:w-auto gap-3">
            <input type="email" required placeholder="Enter your email"
              class="px-5 py-3 rounded-lg bg-white/20 backdrop-blur text-white placeholder-blue-200 border border-white/30 focus:outline-none focus:border-white w-full md:w-72 transition-all">
            <button type="submit" class="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-all whitespace-nowrap">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>

    <!-- Footer Content -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <!-- Company Info -->
        <div>
          <a href="index.html" class="flex items-center gap-2 mb-4">
            <div class="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-400 flex items-center justify-center">
              <span class="text-white font-bold text-xl">F</span>
            </div>
            <span class="text-xl font-bold text-white">Flantik<span class="text-cyan-400">.</span></span>
          </a>
          <p class="text-slate-400 text-sm leading-relaxed mb-6">Empowering Businesses with Smart Outsourcing Solutions. Your trusted BPO partner for growth.</p>
          <div class="flex gap-3">
            <a href="#" class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <i data-lucide="facebook" class="w-4 h-4"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <i data-lucide="twitter" class="w-4 h-4"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <i data-lucide="linkedin" class="w-4 h-4"></i>
            </a>
            <a href="#" class="w-10 h-10 rounded-lg bg-slate-800 hover:bg-blue-600 flex items-center justify-center text-slate-400 hover:text-white transition-all">
              <i data-lucide="instagram" class="w-4 h-4"></i>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-white font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-3">
            <li><a href="index.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Home</a></li>
            <li><a href="about.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> About Us</a></li>
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Services</a></li>
            <li><a href="careers.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Careers</a></li>
            <li><a href="contact.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm flex items-center gap-2"><i data-lucide="chevron-right" class="w-3 h-3"></i> Contact</a></li>
          </ul>
        </div>

        <!-- Services -->
        <div>
          <h4 class="text-white font-semibold mb-6">Our Services</h4>
          <ul class="space-y-3">
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Customer Support</a></li>
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Technical Support</a></li>
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Data Entry & Processing</a></li>
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Telemarketing</a></li>
            <li><a href="services.html" class="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Email & Chat Support</a></li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-white font-semibold mb-6">Contact Info</h4>
          <ul class="space-y-4">
            <li class="flex items-start gap-3 text-sm text-slate-400">
              <i data-lucide="map-pin" class="w-5 h-5 text-cyan-400 mt-0.5 shrink-0"></i>
              123 Business Park, Tech City, India
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-400">
              <i data-lucide="phone" class="w-5 h-5 text-cyan-400 shrink-0"></i>
              +91 98765 43210
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-400">
              <i data-lucide="mail" class="w-5 h-5 text-cyan-400 shrink-0"></i>
              info@flantiksolution.com
            </li>
            <li class="flex items-center gap-3 text-sm text-slate-400">
              <i data-lucide="clock" class="w-5 h-5 text-cyan-400 shrink-0"></i>
              Mon - Sat: 9:00 AM - 6:00 PM
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-slate-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-sm">&copy; ${new Date().getFullYear()} Flantik Solution. All rights reserved.</p>
        <div class="flex gap-6 text-sm text-slate-500">
          <a href="#" class="hover:text-cyan-400 transition-colors">Privacy Policy</a>
          <a href="#" class="hover:text-cyan-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>

  <!-- Back to Top -->
  <button id="back-to-top" aria-label="Back to top">
    <i data-lucide="arrow-up" class="w-5 h-5"></i>
  </button>`;
}

renderFooter();

