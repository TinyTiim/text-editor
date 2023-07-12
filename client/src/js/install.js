const butInstall = document.getElementById('buttonInstall');

let deferredPrompt;

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  
  event.preventDefault();
  
  deferredPrompt = event;
  // Show the install button
  butInstall.style.display = 'block';
});

// Click event handler for the install button
butInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
    
    deferredPrompt.prompt();
    
    const choiceResult = await deferredPrompt.userChoice;
    if (choiceResult.outcome === 'accepted') {
      console.log('PWA installation accepted.');
    } else {
      console.log('PWA installation dismissed.');
    }
  
    deferredPrompt = null;
   
    butInstall.style.display = 'none';
  }
});

// Event handler for the appinstalled event
window.addEventListener('appinstalled', (event) => {
  console.log('PWA installed successfully.');
});