document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.querySelector('form[action="/register"]');
  const loginForm = document.querySelector('form[action="/login"]');

  if (registerForm) {
    registerForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(registerForm);
      const userData = {
        username: formData.get('username'),
        email: formData.get('email'),
        password: formData.get('password'),
      };

      try {
        const response = await fetch('/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const data = await response.json();
          alert('Registro exitoso! Tu UserID es ' + data.userId);
        } else {
          alert('Error en el registro');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
      }
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const userData = {
        username: formData.get('username'),
        password: formData.get('password'),
      };

      try {
        const response = await fetch('/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
        });

        if (response.ok) {
          const data = await response.json();
          alert('Inicio de sesión exitoso!');
          // Redirigir al dashboard o hacer algo más
        } else {
          alert('Error en el inicio de sesión');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Error de conexión');
      }
    });
  }
});
