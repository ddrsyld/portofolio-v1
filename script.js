// Initialize Lucide Icons
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    lucide.createIcons();
  }

  // --- Theme Toggle (Light / Dark Claude Palette) ---
  const themeToggleBtn = document.getElementById('themeToggle');
  const htmlElement = document.documentElement;

  // Check saved theme or system preference
  const savedTheme = localStorage.getItem('theme');
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    htmlElement.classList.add('dark');
  } else {
    htmlElement.classList.remove('dark');
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const isDark = htmlElement.classList.toggle('dark');
      localStorage.setItem('theme', isDark ? 'dark' : 'light');
      // Re-run lucide icons to ensure icons render properly if needed
      if (window.lucide) {
        lucide.createIcons();
      }
    });
  }

  // --- Mobile Drawer Menu ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenu = document.getElementById('mobileMenu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking nav links
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // --- Copy Email Button Action ---
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyBtnText = document.getElementById('copyBtnText');

  if (copyEmailBtn && copyBtnText) {
    copyEmailBtn.addEventListener('click', () => {
      const email = 'risyaldi06@gmail.com';
      navigator.clipboard.writeText(email).then(() => {
        const originalText = copyBtnText.textContent;
        copyBtnText.textContent = '✓ Copied to Clipboard!';
        copyEmailBtn.classList.add('border-emerald-500', 'text-emerald-600', 'dark:text-emerald-400');

        setTimeout(() => {
          copyBtnText.textContent = originalText;
          copyEmailBtn.classList.remove('border-emerald-500', 'text-emerald-600', 'dark:text-emerald-400');
        }, 2500);
      }).catch(err => {
        console.error('Failed to copy text: ', err);
      });
    });
  }
});
