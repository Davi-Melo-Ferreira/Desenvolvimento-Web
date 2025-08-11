// Ainda não compreendido
function consultarServidor() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const usuario = { nome: "Gabriel", idade: 25 };
      resolve(usuario); // Retorna o usuário após 2 segundos
    }, 2000);
  });
};

// A função assíncrona que chama a anterior com 'await'
async function buscarUsuario() {
  console.log("Buscando usuário...");
  const usuarioEncontrado = await consultarServidor(); // 'await' pausa a função até promise ser feito
  console.log("Usuário encontrado:", usuarioEncontrado);
};

buscarUsuario();