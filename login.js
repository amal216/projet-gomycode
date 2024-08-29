document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('loginForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); 
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Check if the username and password are correct
      if (username === 'amal' && password === 'admin') {
        window.location.href = 'welcome.html'; 
      } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect');
      }
    });
  });
  