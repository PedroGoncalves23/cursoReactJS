fetch('pessoas.json')
    .then(resposta => resposta.json())
    .then(json => carregaElementos(json));

function carregaElementos(json) {
    const table = document.createElement('table');
    for (let pessoa of json) {
        const tr = document.createElement('tr');

        const td = document.createElement('td');

        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        table.appendChild(tr)
    }

    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table)
}