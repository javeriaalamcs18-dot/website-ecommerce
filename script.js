/**
 * NEXT GEN SMART SKILLS FOR YOUTH — SHOPIFY E-COMMERCE COURSE
 * Interactive Vanilla JavaScript Engine
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initial Applications Storage Setup
  const STORAGE_KEY = 'ngss_shopify_applications';
  const defaultApps = [
    {
      id: 'NGSS-2026-894102',
      fullName: 'Ayesha Khan',
      fatherName: 'Muhammad Tariq',
      cnic: '16101-1234567-2',
      phone: '0312-8444762',
      email: 'ayesha.k@example.com',
      age: '21',
      education: 'Bachelor of Science (Computer Science)',
      city: 'Mardan City',
      occupation: 'Student',
      reason: 'Passionate about setting up my own online modest fashion Shopify store.',
      status: 'Selected',
      createdAt: '2026-10-01T10:30:00Z',
    },
    {
      id: 'NGSS-2026-749210',
      fullName: 'Fatima Noor',
      fatherName: 'Noor Muhammad',
      cnic: '16102-9876543-4',
      phone: '0300-9876543',
      email: 'fatima.noor@example.com',
      age: '23',
      education: 'BBA Marketing',
      city: 'Takht Bhai, Mardan',
      occupation: 'Freelancer',
      reason: 'Want to master Shopify product research and run digital commerce campaigns.',
      status: 'Under Review',
      createdAt: '2026-10-02T14:15:00Z',
    },
    {
      id: 'NGSS-2026-512398',
      fullName: 'Zainab Bibi',
      fatherName: 'Abdul Rasheed',
      cnic: '16101-4455667-8',
      phone: '0333-5566778',
      email: 'zainab.b@example.com',
      age: '20',
      education: 'Intermediate (FSc)',
      city: 'Mardan Cantonment',
      occupation: 'Student',
      reason: 'Seeking practical skills to support my family with digital entrepreneurship.',
      status: 'Application Received',
      createdAt: '2026-10-03T09:00:00Z',
    }
  ];

  if (!localStorage.getItem(STORAGE_KEY)) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultApps));
  }

  function getStoredApplications() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultApps;
    } catch {
      return defaultApps;
    }
  }

  function saveNewApplication(record) {
    const apps = getStoredApplications();
    const updated = [record, ...apps];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  // 2. Sticky Header Scroll Effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 3. Smooth Navigation & Active Underline Observer
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. Mobile Menu Toggle
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileNavDrawer = document.getElementById('mobileNavDrawer');
  if (hamburgerBtn && mobileNavDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      mobileNavDrawer.classList.toggle('open');
    });
  }

  // 5. FAQ Accordion Toggle
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(btn => {
    btn.addEventListener('click', () => {
      const card = btn.closest('.faq-card');
      const isOpen = card.classList.contains('open');

      document.querySelectorAll('.faq-card').forEach(c => c.classList.remove('open'));
      if (!isOpen) {
        card.classList.add('open');
      }
    });
  });

  // 6. Registration Form Submission & Application ID Generator
  const regForm = document.getElementById('applicationForm');
  const regFormBox = document.getElementById('formContainer');
  const successBox = document.getElementById('successContainer');
  const generatedIdText = document.getElementById('generatedIdText');
  const copyIdBtn = document.getElementById('copyIdBtn');
  const newAppBtn = document.getElementById('newAppBtn');

  if (regForm) {
    regForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const fullName = document.getElementById('fullName').value.trim();
      const fatherName = document.getElementById('fatherName').value.trim();
      const cnic = document.getElementById('cnic').value.trim();
      const phone = document.getElementById('phone').value.trim();
      const email = document.getElementById('email').value.trim();
      const age = document.getElementById('age').value.trim();
      const education = document.getElementById('education').value.trim();
      const city = document.getElementById('city').value.trim();
      const occupation = document.getElementById('occupation').value.trim();
      const reason = document.getElementById('reason').value.trim();
      const confirmCheck = document.getElementById('confirmCheck').checked;

      if (!confirmCheck) {
        alert('Please confirm that the provided information is correct.');
        return;
      }

      const randomSuffix = Math.floor(100000 + Math.random() * 900000);
      const generatedId = `NGSS-2026-${randomSuffix}`;

      const newRecord = {
        id: generatedId,
        fullName,
        fatherName,
        cnic,
        phone,
        email,
        age,
        education,
        city,
        occupation,
        reason,
        status: 'Application Received',
        createdAt: new Date().toISOString()
      };

      saveNewApplication(newRecord);

      // Show Success screen
      if (generatedIdText) generatedIdText.textContent = generatedId;
      if (regFormBox) regFormBox.style.display = 'none';
      if (successBox) successBox.style.display = 'block';

      // Confetti Animation Effect if available
      try {
        if (typeof confetti === 'function') {
          confetti({
            particleCount: 80,
            spread: 60,
            origin: { y: 0.6 }
          });
        }
      } catch (err) {}
    });
  }

  // Copy ID Button
  if (copyIdBtn && generatedIdText) {
    copyIdBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(generatedIdText.textContent);
      const originalText = copyIdBtn.textContent;
      copyIdBtn.textContent = 'Copied to Clipboard!';
      setTimeout(() => {
        copyIdBtn.textContent = originalText;
      }, 2000);
    });
  }

  // Submit Another Application
  if (newAppBtn) {
    newAppBtn.addEventListener('click', () => {
      if (regForm) regForm.reset();
      if (regFormBox) regFormBox.style.display = 'block';
      if (successBox) successBox.style.display = 'none';
    });
  }

  // 7. Check Application Status
  const statusForm = document.getElementById('statusForm');
  const statusResultBox = document.getElementById('statusResultBox');
  const statusErrorBox = document.getElementById('statusErrorBox');

  if (statusForm) {
    statusForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const inputId = document.getElementById('statusAppId').value.trim().toUpperCase();
      const inputPhone = document.getElementById('statusPhone').value.trim().replace(/[^0-9]/g, '');

      const apps = getStoredApplications();
      const found = apps.find(app => {
        const cleanPhone = app.phone.replace(/[^0-9]/g, '');
        return app.id.toUpperCase() === inputId && (cleanPhone.endsWith(inputPhone) || inputPhone.endsWith(cleanPhone));
      });

      if (found) {
        if (statusErrorBox) statusErrorBox.style.display = 'none';
        if (statusResultBox) {
          statusResultBox.style.display = 'block';
          document.getElementById('resId').textContent = found.id;
          document.getElementById('resName').textContent = found.fullName;
          document.getElementById('resStatusBadge').textContent = found.status;
          document.getElementById('resCity').textContent = `${found.city || 'Mardan'} • D/o ${found.fatherName}`;

          // Update Progress Nodes
          const stages = ['Application Received', 'Under Review', 'Selected', 'Waitlisted'];
          const currentIdx = stages.indexOf(found.status);

          document.querySelectorAll('.tracker-node').forEach((node, idx) => {
            node.classList.remove('active', 'done');
            if (idx === currentIdx) {
              node.classList.add('active');
            } else if (idx < currentIdx) {
              node.classList.add('done');
            }
          });
        }
      } else {
        if (statusResultBox) statusResultBox.style.display = 'none';
        if (statusErrorBox) statusErrorBox.style.display = 'block';
      }
    });
  }

  // 8. Official Poster Lightbox Modal
  const posterThumb = document.getElementById('posterThumb');
  const posterModal = document.getElementById('posterModal');
  const closePosterModal = document.getElementById('closePosterModal');

  if (posterThumb && posterModal) {
    posterThumb.addEventListener('click', () => {
      posterModal.style.display = 'flex';
    });
  }

  if (closePosterModal && posterModal) {
    closePosterModal.addEventListener('click', () => {
      posterModal.style.display = 'none';
    });
  }

  if (posterModal) {
    posterModal.addEventListener('click', (e) => {
      if (e.target === posterModal) {
        posterModal.style.display = 'none';
      }
    });
  }
});
