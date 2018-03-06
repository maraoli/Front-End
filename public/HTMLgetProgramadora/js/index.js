var linkCadastrar = document.querySelector(''),
    moduloLogin = document.querySelector('#login'),

linkCadastrar.addEventListener('click', 
    function(event){
        moduloLogin.classList.toggle('modal-close');
    }   
);
    