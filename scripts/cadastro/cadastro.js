function buscar() {
    const cep = document.getElementById("cep").value;
    let search = cep.replace("-", "");
    fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
        response.json().then(data => {
            console.log(data)
            document.getElementById("endereco").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
    })

}

function enviar() {
    let endereco = document.getElementById("endereco").value;
    let bairro = document.getElementById("bairro").value;
    let cidade = document.getElementById("cidade").value;
    let estado = document.getElementById("estado").value;

    let json = {
        "endereco": endereco,
        "bairro": bairro,
        "cidade": cidade,
        "estado": estado
    }
};

const cep = document.getElementById("cep");
cep.addEventListener("blur", (e) => {
    let Cep = document.getElementById("cep").value;
    let search = Cep.replace("-", "");
    fetch(`https://viacep.com.br/ws/${search}/json/`).then((response) => {
        response.json().then(data => {
            console.log(data);
            document.getElementById("endereco").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
    })
})




