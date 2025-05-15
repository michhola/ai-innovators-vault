/**
 * This script adds a wiggle animation to the n8n chat button
 * to attract attention periodically
 */
(function() {
  // Wait for DOM to ensure chat button is loaded
  function waitForChatButton() {
    const chatButton = document.querySelector('.n8n-chat__toggle-button');
    
    if (chatButton) {
      // Successfully found the button
      console.log('Chat button found, setting up wiggle animation');
      setupWiggleAnimation(chatButton);
      return true;
    }
    
    // Button not found yet, try again later
    console.log('Chat button not found, will retry');
    return false;
  }
  
  function setupWiggleAnimation(button) {
    // Apply initial animation after a delay
    setTimeout(() => {
      triggerWiggle(button);
    }, 3000);
    
    // Set up periodic wiggle
    setInterval(() => {
      // Only wiggle if chat is not open
      if (!document.querySelector('.n8n-chat__window--open')) {
        triggerWiggle(button);
      }
    }, 20000); // Wiggle every 20 seconds
  }
  
  function triggerWiggle(button) {
    // Remove class if it exists (to restart animation)
    button.classList.remove('wiggle-animation');
    
    // Force reflow to ensure animation restarts
    void button.offsetWidth;
    
    // Add class back to trigger animation
    button.classList.add('wiggle-animation');
  }
  
  // Try to find button every 1s for 15s
  let attempts = 0;
  const maxAttempts = 15;
  
  function findButtonWithRetry() {
    if (waitForChatButton() || attempts >= maxAttempts) {
      // Success or max attempts reached
      return;
    }
    
    // Try again after delay
    attempts++;
    setTimeout(findButtonWithRetry, 1000);
  }
  
  // Start looking for the button
  findButtonWithRetry();
  
  // Also try after window load event
  window.addEventListener('load', findButtonWithRetry);
})();
