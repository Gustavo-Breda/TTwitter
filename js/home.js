

const btnPostar = document.getElementById('btn-postar');
const btnPostar2 = document.getElementById('btn-postar-2');

const btnCurtir = document.getElementsByClassName('btn-curtir')[0]; // Assuming there is only one element
const btnSalvar = document.getElementsByClassName('btn-salvar')[0]; // Assuming there is only one element

btnCurtir.addEventListener('click', function() {
    changeReactionContent(btnCurtir, 'images/curtir.png', 'images/curtido.png', 'curtir', 'curtido');
});

btnSalvar.addEventListener('click', function() {
    changeReactionContent(btnSalvar, 'images/salvar.png', 'images/salvo.png', 'salvar', 'salvo');
});

btnPostar.addEventListener('click', create_post);
btnPostar2.addEventListener('click', create_post_2);


function changeReactionContent(botao, imagem_1, imagem_2, nome_helper_1, nome_helper_2) 
{

    if (botao.innerHTML.includes(`src="${imagem_2}"`))
    {
        botao.innerHTML = `<img src="${imagem_1}" alt="botao de ${nome_helper_1}">`;
        return;
    }
    botao.innerHTML = `<img src="${imagem_2}" alt="botao de ${nome_helper_1} (${nome_helper_2})">`;
}


function anexarImagem() 
{
    
    return
}


function create_post() 
{
    
    var textPost = document.getElementById('text-post');
    var textPostValue = textPost.value;
    

    var imagemAnexada = document.getElementById('anexar-img')
    
    if (imagemAnexada.files.length === 0) {
        alert('Please select an image before posting.');
        return;
    }

    var postDiv = document.createElement('div');
    postDiv.classList.add('post-template');


    var userTemplate = document.createElement('div');
    userTemplate.classList.add('user-template');

    var contornoUsuario = document.createElement('div');
    contornoUsuario.classList.add('contorno-usuario');
    contornoUsuario.id = 'cuh-post';

    
    var imgUsuario = document.createElement('img');
    imgUsuario.alt = '';

    var usuarioNome = document.createElement('div');
    usuarioNome.classList.add('usuario-nome-template');
    usuarioNome.textContent = 'você';

    userTemplate.appendChild(contornoUsuario);
    userTemplate.appendChild(usuarioNome);

    
    var imagemTemplate = document.createElement('div');
    imagemTemplate.classList.add('imagem-template');

    var imgPost = document.createElement('img');
    imgPost.src = URL.createObjectURL(imagemAnexada.files[0]);
    imgPost.alt = 'imagem do seu post';

    imagemTemplate.appendChild(imgPost);
    

    var reactionsTemplate = document.createElement('div');
    reactionsTemplate.classList.add('reactions-template');
    var linkComentar = document.createElement('a');

    var reactionsTemplate2 = document.createElement('div');
    reactionsTemplate2.classList.add('reactions-template-2');

    var btnCurtirPost = document.createElement('button');
    btnCurtirPost.className = 'btn-curtir';

    var imgBtnCurtirPost = document.createElement('img');
    var imgLinkComentar = document.createElement('img');
    imgLinkComentar.src = 'images/comentar.png';
    imgBtnCurtirPost.src = 'images/curtir.png';
    imgLinkComentar.alt = '';
    
    btnCurtirPost.appendChild(imgBtnCurtirPost);
    linkComentar.appendChild(imgLinkComentar);

    reactionsTemplate2.appendChild(btnCurtirPost);
    reactionsTemplate2.appendChild(linkComentar);
    
    btnCurtirPost.addEventListener('click', function() {
        changeReactionContent(btnCurtirPost, 'images/curtir.png', 'images/curtido.png', 'curtir', 'curtido');
    });


    var btnSalvarPost = document.createElement('button');
    btnSalvarPost.className = 'btn-salvar';

    var imgSalvar = document.createElement('img');
    imgSalvar.src = 'images/salvar.png';
    imgSalvar.alt = 'botao de salvar';

    btnSalvarPost.appendChild(imgSalvar);

    reactionsTemplate.appendChild(reactionsTemplate2);
    reactionsTemplate.appendChild(btnSalvarPost);

    btnSalvarPost.addEventListener('click', function() {
        changeReactionContent(btnSalvarPost, 'images/salvar.png', 'images/salvo.png', 'salvar', 'salvo');
    });


    var textoTemplate = document.createElement('div');
    textoTemplate.classList.add('text-template');

    var div = document.createElement('div');
    div.textContent = textPostValue;

    textoTemplate.appendChild(div);


    postDiv.appendChild(userTemplate);
    postDiv.appendChild(imagemTemplate);
    postDiv.appendChild(reactionsTemplate);
    postDiv.appendChild(textoTemplate);


    document.getElementById('posts-container').appendChild(postDiv);
    document.getElementById('anexar-img').value = '';
    textPost.value="";

}

function create_post_2() 
{
    
    var textPost = document.getElementById('text-post-2');
    var textPostValue = textPost.value;
    

    var imagemAnexada = document.getElementById('anexar-img')
    
    if (imagemAnexada.files.length === 0) {
        alert('Please select an image before posting.');
        return;
    }

    var postDiv = document.createElement('div');
    postDiv.classList.add('post-template');


    var userTemplate = document.createElement('div');
    userTemplate.classList.add('user-template');

    var contornoUsuario = document.createElement('div');
    contornoUsuario.classList.add('contorno-usuario');
    contornoUsuario.id = 'cuh-post';

    
    var imgUsuario = document.createElement('img');
    imgUsuario.alt = '';

    var usuarioNome = document.createElement('div');
    usuarioNome.classList.add('usuario-nome-template');
    usuarioNome.textContent = 'você';

    userTemplate.appendChild(contornoUsuario);
    userTemplate.appendChild(usuarioNome);

    
    var imagemTemplate = document.createElement('div');
    imagemTemplate.classList.add('imagem-template');

    var imgPost = document.createElement('img');
    imgPost.src = URL.createObjectURL(imagemAnexada.files[0]);
    imgPost.alt = 'imagem do seu post';

    imagemTemplate.appendChild(imgPost);
    

    var reactionsTemplate = document.createElement('div');
    reactionsTemplate.classList.add('reactions-template');
    var linkComentar = document.createElement('a');

    var reactionsTemplate2 = document.createElement('div');
    reactionsTemplate2.classList.add('reactions-template-2');

    var btnCurtirPost = document.createElement('button');
    btnCurtirPost.className = 'btn-curtir';

    var imgBtnCurtirPost = document.createElement('img');
    var imgLinkComentar = document.createElement('img');
    imgLinkComentar.src = 'images/comentar.png';
    imgBtnCurtirPost.src = 'images/curtir.png';
    imgLinkComentar.alt = '';
    
    btnCurtirPost.appendChild(imgBtnCurtirPost);
    linkComentar.appendChild(imgLinkComentar);

    reactionsTemplate2.appendChild(btnCurtirPost);
    reactionsTemplate2.appendChild(linkComentar);
    
    btnCurtirPost.addEventListener('click', function() {
        changeReactionContent(btnCurtirPost, 'images/curtir.png', 'images/curtido.png', 'curtir', 'curtido');
    });


    var btnSalvarPost = document.createElement('button');
    btnSalvarPost.className = 'btn-salvar';

    var imgSalvar = document.createElement('img');
    imgSalvar.src = 'images/salvar.png';
    imgSalvar.alt = 'botao de salvar';

    btnSalvarPost.appendChild(imgSalvar);

    reactionsTemplate.appendChild(reactionsTemplate2);
    reactionsTemplate.appendChild(btnSalvarPost);

    btnSalvarPost.addEventListener('click', function() {
        changeReactionContent(btnSalvarPost, 'images/salvar.png', 'images/salvo.png', 'salvar', 'salvo');
    });


    var textoTemplate = document.createElement('div');
    textoTemplate.classList.add('text-template');

    var div = document.createElement('div');
    div.textContent = textPostValue;

    textoTemplate.appendChild(div);


    postDiv.appendChild(userTemplate);
    postDiv.appendChild(imagemTemplate);
    postDiv.appendChild(reactionsTemplate);
    postDiv.appendChild(textoTemplate);


    document.getElementById('posts-container').appendChild(postDiv);
    document.getElementById('anexar-img').value = '';
    textPost.value="";

}