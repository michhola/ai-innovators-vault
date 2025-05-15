/**
 * This script serves as a backup method to ensure
 * the chat button animation works even if the main
 * wiggle script fails
 */
(function() {
  // Different approach to finding and animating the button
  function checkForChatButton() {
    const buttons = document.querySelectorAll('button');
    let chatButton = null;
    
    // Look for button with specific characteristics
    buttons.forEach(btn => {
      // Check if it's likely the chat toggle button based on position
      const rect = btn.getBoundingClientRect();
      const isBottomRight = rect.bottom > window.innerHeight - 100 && 
                           rect.right > window.innerWidth - 100;
      
      if (isBottomRight && 
          (btn.classList.contains('n8n-chat__toggle-button') || 
           btn.closest('.n8n-chat__toggle-button'))) {
        chatButton = btn;
      }
    });
    
    if (chatButton) {
      console.log('Chat button found by worker script');
      setupAnimation(chatButton);
      return true;
    }
    
    return false;
  }
  
  function setupAnimation(button) {
    // Add keyframes if needed
    ensureKeyframesExist();
    
    // Setup wiggle interval
    setInterval(() => {
      if (!document.querySelector('.n8n-chat__window--open')) {
        wiggleButton(button);
      }
    }, 15000);
  }
  
  function wiggleButton(button) {
    // Add custom class for animation
    button.classList.add('wiggle-chat');
    
    // Remove class after animation completes
    setTimeout(() => {
      button.classList.remove('wiggle-chat');
    }, 1000);
  }
  
  function ensureKeyframesExist() {
    // Check if we already added the keyframes
    if (document.querySelector('#wiggle-keyframes')) {
      return;
    }
    
    // Add keyframes dynamically
    const style = document.createElement('style');
    style.id = 'wiggle-keyframes';
    style.textContent = `
      @keyframes wiggle {
        0% { transform: rotate(0deg); }
        15% { transform: rotate(-15deg); }
        30% { transform: rotate(10deg); }
        45% { transform: rotate(-10deg); }
        60% { transform: rotate(6deg); }
        75% { transform: rotate(-4deg); }
        85% { transform: rotate(2deg); }
        92% { transform: rotate(-1deg); }
        100% { transform: rotate(0deg); }
      }
      .wiggle-chat {
        animation: wiggle 0.8s ease-in-out !important;
      }
    `;
    
    document.head.appendChild(style);
  }
  
  // Try to find the button multiple times
  let attempts = 0;
  const checkInterval = setInterval(() => {
    attempts++;
    
    if (checkForChatButton() || attempts > 20) {
      clearInterval(checkInterval);
    }
  }, 1000);
  
  // Also try on load
  window.addEventListener('load', () => {
    setTimeout(checkForChatButton, 2000);
  });
})();
