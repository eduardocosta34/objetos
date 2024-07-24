const listaDeUsuarios = [
    { id: 1, nome: 'Alice', idade: 25 },
    { id: 2, nome: 'Bob', idade: 30 },
    { id: 3, nome: 'Charlie', idade: 22 }
  ]


  function encontrarUsuarioPorId(id) {
    return listaDeUsuarios.find(usuario => usuario.id === id);
  }

  function encontrarUsuarioPorIdComFor(id) {
    let usuarioEncontrado = null;
    listaDeUsuarios.forEach(usuario => {
      if (usuario.id === id) {
        usuarioEncontrado = usuario;
      }
    });
    return usuarioEncontrado;
  }

  console.log(encontrarUsuarioPorIdComFor(4))