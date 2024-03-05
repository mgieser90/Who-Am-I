window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger');
  const scrollThreshold = 640;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger2');
  const scrollThreshold = 931;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

window.addEventListener('scroll', function () {
  const scrollTrigger = document.getElementById('scroll-trigger3');
  const scrollThreshold = 1239;

  const scrollPosition = window.scrollY;

  if (scrollPosition > scrollThreshold && !scrollTrigger.checked) {
    scrollTrigger.checked = true;
  } else if (scrollPosition <= scrollThreshold && scrollTrigger.checked) {
    scrollTrigger.checked = false;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  const navBar = document.getElementById('click-trigger');
  const resumeMenuButton = document.getElementById('resume-menu');
  const mobileNavBackground = document.getElementById('mobile-nav-background');
  const navExit = document.getElementById('mobile-nav-exit');

  navBar.style.left = '-275px'; // Set initial state to hidden
  mobileNavBackground.style.display = 'none';
  navExit.style.right = '-70px'; // Set initial state to hidden

  resumeMenuButton.addEventListener('click', function () {
    if (navBar.style.left === '-275px') {
      navBar.style.left = '0';
      mobileNavBackground.style.display = 'block';
      navExit.style.right = '10px';
    } else {
      navBar.style.left = '-275px';
      mobileNavBackground.style.display = 'none';
      navExit.style.right = '-70px';
    }
  });

  mobileNavBackground.addEventListener('click', function () {
    // Close the navigation when mobileNavBackground is clicked
    navBar.style.left = '-275px';
    mobileNavBackground.style.display = 'none';
    navExit.style.right = '-70px';
  });

  navExit.addEventListener('click', function () {
    // Close the navigation when navExit is clicked
    navBar.style.left = '-275px';
    mobileNavBackground.style.display = 'none';
    navExit.style.right = '-70px';
  });
});

