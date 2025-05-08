// Bootstrap 5 Dropdown Hover and Nested Dropdown Support
document.addEventListener('DOMContentLoaded', function() {
  // Handle nested dropdowns on click for mobile
  document.querySelectorAll('.dropdown-menu a.dropdown-toggle').forEach(function(element) {
    element.addEventListener('click', function(e) {
      if (!this.nextElementSibling.classList.contains('show')) {
        // Close other submenus if open
        this.closest('.dropdown-menu').querySelectorAll('.show').forEach(function(submenu) {
          submenu.classList.remove('show');
        });
      }
      
      // Toggle current submenu
      this.nextElementSibling.classList.toggle('show');
      
      // Prevent default link behavior
      e.stopPropagation();
      e.preventDefault();
    });
  });
  
  // Fix for mobile header top bar
  const headerTopBar = document.querySelector('.bg-primary');
  const navbar = document.querySelector('.navbar');
  
  // Ensure proper spacing between header and navbar on mobile
  function adjustHeaderSpacing() {
    if (window.innerWidth < 768) {
      navbar.style.marginTop = '0';
    } else {
      navbar.style.marginTop = '0';
    }
  }
  
  // Fix for language dropdowns
  const mobileLanguageDropdown = document.getElementById('mobileLanguageDropdown');
  const desktopLanguageDropdown = document.getElementById('languageDropdown');
  
  // Prevent language dropdowns from closing immediately
  if (mobileLanguageDropdown) {
    mobileLanguageDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  if (desktopLanguageDropdown) {
    desktopLanguageDropdown.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  }
  
  // Run on load and resize
  adjustHeaderSpacing();
  window.addEventListener('resize', adjustHeaderSpacing);

  // --- Cloud Animation Logic --- 
  const cloudsContainer = document.getElementById('clouds-container');

  function createCloud(id, animationDuration, animationDelay) {
    if (!cloudsContainer) return;

    const cloud = document.createElement('div');
    cloud.classList.add('cloud');
    cloud.id = id; // Assign unique ID

    // Apply animation timings
    cloud.style.animationDuration = animationDuration;
    cloud.style.animationDelay = animationDelay;

    cloudsContainer.appendChild(cloud);
  }

  // Create 4 clouds with specific IDs and slightly varied timings
  if (cloudsContainer) { // Only create if container exists
    createCloud('cloud-1', '15s', '0s');
    createCloud('cloud-2', '18s', '2s'); // Stagger start slightly
    createCloud('cloud-3', '16s', '1s');
    createCloud('cloud-4', '20s', '3s');
  }
  // --- End Cloud Animation Logic ---

});

