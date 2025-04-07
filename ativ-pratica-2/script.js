document.getElementById('meuFormulario').addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('messagem').value;

  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Menssagem:', mensagem);
});
