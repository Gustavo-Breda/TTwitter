const form = document.getElementById('form-inputs');

const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('password');
const csenha = document.getElementById('cpassword');
const datanasc = document.getElementById('datanasc');

const floginBtn = document.getElementById('flogin');

form.addEventListener("submit", (e) => 
{
    e.preventDefault();

    checkInputs();
    window.location.href = 'home.html'
})

floginBtn.addEventListener("click", (e) => 
{
    e.preventDefault();

    window.location.href = 'index.html'
})

function checkInputs () 
{
    const nomeValue = nome.value;
    const emailValue = email.value;
    const senhaValue = senha.value;
    const csenhaValue = csenha.value;
    const datanascValue = datanasc.value;

    verificaBD(nomeValue, emailValue, senhaValue, csenhaValue, datanascValue);
}

function verificaBD (nome, email, senha, csenha, datanasc) 
{
    console.log("")
}