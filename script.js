document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
      icon.style.transform = 'scale(1.3) rotateX(15deg) rotateY(15deg)';
      icon.style.transition = 'transform 0.3s ease';
  });
  icon.addEventListener('mouseleave', () => {
      icon.style.transform = 'scale(1) rotateX(0) rotateY(0)';
  });
});


// ai 

document.getElementById('send').addEventListener('click', function () {
  const input = document.getElementById('input');
  const message = input.value.trim();

  if (message) {
      addMessage('user', message);
      input.value = '';

      setTimeout(function() {
          addMessage('bot', 'Welcome To HealthBridge');
      }, 1000);  // Simulasi balasan bot

      setTimeout(function() {
        addMessage('bot', 'Mau Tanya Apa?');
    }, 1000);  // Simulasi balasan bot
  }
});

function addMessage(sender, text) {
  const messagesContainer = document.getElementById('messages');
  const messageElement = document.createElement('div');
  messageElement.classList.add('message', sender);
  messageElement.textContent = text;
  messagesContainer.appendChild(messageElement);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}
  