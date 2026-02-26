/* ============================================
   Flantik Solution - Form Validation
   ============================================ */

function initFormValidation(formId) {
  const form = document.getElementById(formId);
  if (!form) return;

  const inputs = form.querySelectorAll('input, textarea, select');

  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('border-red-500')) validateField(input);
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;
    inputs.forEach(input => {
      if (!validateField(input)) isValid = false;
    });

    if (isValid) {
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = '<span class="flex items-center justify-center gap-2"><svg class="animate-spin h-5 w-5" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"/><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/></svg> Sending...</span>';
      btn.disabled = true;

      setTimeout(() => {
        showToast('Message sent successfully! We\'ll get back to you soon.');
        form.reset();
        btn.innerHTML = originalText;
        btn.disabled = false;
        inputs.forEach(input => {
          input.classList.remove('border-green-500');
          removeError(input);
        });
      }, 2000);
    }
  });
}

function validateField(input) {
  const value = input.value.trim();
  const type = input.type;
  const required = input.hasAttribute('required');
  removeError(input);

  if (required && !value) {
    showError(input, 'This field is required');
    return false;
  }

  if (type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showError(input, 'Please enter a valid email');
      return false;
    }
  }

  if (type === 'tel' && value) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,15}$/;
    if (!phoneRegex.test(value)) {
      showError(input, 'Please enter a valid phone number');
      return false;
    }
  }

  if (value) {
    input.classList.add('border-green-500');
    input.classList.remove('border-red-500');
  }
  return true;
}

function showError(input, message) {
  input.classList.add('border-red-500');
  input.classList.remove('border-green-500');
  const error = document.createElement('p');
  error.className = 'text-red-500 text-sm mt-1 error-message animate-pulse';
  error.textContent = message;
  input.parentElement.appendChild(error);
}

function removeError(input) {
  input.classList.remove('border-red-500');
  const existing = input.parentElement.querySelector('.error-message');
  if (existing) existing.remove();
}

