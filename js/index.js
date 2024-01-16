const form = document.getElementById('form-inputs');

const login = document.getElementById('email');
const senha = document.getElementById('password');
const registrarBtn = document.getElementById('registrar');

form.addEventListener("submit", (e) => 
{
    e.preventDefault();

    checkInputs();
    window.location.href = 'home.html'
})

registrarBtn.addEventListener("click", (e) => 
{
    e.preventDefault();

    window.location.href = 'cadastro.html'
})

function checkInputs () 
{
    const loginValue = login.value;
    const senhaValue = senha.value;

    verificaBD(loginValue, senhaValue);
}

function verificaBD (login, senha) 
{
    console.log("")
}