// // Solicitação GET.
// fetch('https://api.github.com/users/manishmshiva')
//     .then(response => response.json())  // converter para json
//     .then(json => console.log(json))    //imprimir dados no console
//     .catch(err => console.log('Erro de solicitação', err));


fetch('http://exemplo.com/usuario')
    .then(response => {
      if (response.status !== 200) {
        console.log('não encontrou qualquer resultado')
      }
      else {
        console.log("ok")
      }
    })