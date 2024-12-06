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

/*const cep = document.getElementById("cep");
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
})*/


//Código para mostrar senha:
function mostraSenha() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

  //Fim do código de mostrar senha

//código para validar caractere da senha

var myInput = document.getElementById("password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var caractere = document.getElementById("caractere");

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate numbers
  var especial = /[^a-zA-Z 0-9]+/g;
  if(myInput.value.match(especial)) {
    caractere.classList.remove("invalid");
    caractere.classList.add("valid");
  } else {
    caractere.classList.remove("valid");
    caractere.classList.add("invalid");
  }

  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}

//Fim do código para validar caracteres da senha


class FormSubmit{
    constructor(settings){
        this.settings = settings;
        this.form = document.querySelector(settings.form);
        this.formButton = document.querySelector(settings.button);
        if(this.form){
            this.url = this.form.getAttribute("action");
        }
        this.sendForm = this.sendForm.bind(this);
    }

    displaySuccess(){
        this.form.innerHTML = this.settings.success;
    }

    displayError(){
        this.form.innerHTML = this.settings.error;
    }

    getFormObject(){
        let nome_completo = document.getElementById("fullname").value;
        let nome_social = document.getElementById("socialname").value;
        let data_nascimento = document.getElementById("date").value;
        let genero = document.querySelector("input[name='genero']:checked").value;
        let email = document.getElementById("email").value;
        let senha = document.getElementById("password").value;
        let cep = document.getElementById("cep").value;
        let logradouro = document.getElementById("endereco").value;
        let numero = document.getElementById("numero").value;
        let bairro = document.getElementById("bairro").value;
        let cidade = document.getElementById("cidade").value;
        let estado = document.getElementById("estado").value;
        let interesse = document.querySelector("input[name='interesse']:checked").value;
        const formObject = {
            "nome_completo": nome_completo,
            "nome_social": nome_social,
            "data_nascimento": data_nascimento,
            "genero": genero,
            "email": email,
            "senha": senha,
            "cep": cep,
            "logradouro": logradouro,
            "numero": numero,
            "bairro": bairro,
            "cidade": cidade,
            "estado": estado,
            "interesse": interesse
        };
        console.log("chegou aqui getFormObject---------------------")
        console.log(formObject);
        return formObject;
    }

    onSubmission(event){
        event.preventDefault();
        event.target.disabled = true;
        console.log("chegou no onSubmission")
        event.target.innerText = "Enviando...";
    }

    async sendForm(event){
        try {
            this.onSubmission(event);
            await fetch(this.url, {
                 method: "POST",
                 headers: {
                     "Content-Type": "application/json",
                     Accept: "application/json"
                 },
                 body: JSON.stringify(this.getFormObject()),
             });
             this.displaySuccess();
        } catch (error) {
            this.displayError();
            throw new Error(error);
        }
    }

    init(){
        if(this.form)
         this.formButton.addEventListener("click", () => this.displaySuccess());
        return this;
    }
}

const formSubmit = new FormSubmit({
    form: "[data-form]",
    button: "[data-button]",
    success: "<h1 class='success'>Cadastro enviado</h1>",
    error:"<h1 class='error'>Não foi possível enviar sua mensagem</h1>",
});

formSubmit.init();