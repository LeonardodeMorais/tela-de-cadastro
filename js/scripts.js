class validator {

    constructor() {
        this.validations = [

        ]
    }

    //iniciar a validação de todos os capos
    validade(form) {

        // pegar os inputs
        let inputs = form.getElementByTagName('input');

        console.log(inputs);

        // HTMLCollection -> array
        let inputsArray = [...inputs];

        console.log(inputsArray)
    }
}

let form = document.getElementById("register-for");
let submit = document.getElementById("btn-submit");

// evento que dispara as validações

submit.addEventListener('click', function (e) {
    e.preventDefault();
    console.log('funcionou');
});