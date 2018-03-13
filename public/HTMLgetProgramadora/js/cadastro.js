alert("Oi");
var secao = document.getElementById('tipo-de-cadastro');
var radio = document.getElementsByName("check-tipo-de-cadastro");

var template = "";
//user
if(radio[0].checked){
    template += '<input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"'
    +'data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"'
    +'id="RegistrationForm_email" type="text" maxlength="40">';
}
//cia
else{
    template += '<input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"'
    +'data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"'
    +'id="RegistrationForm_email" type="text" maxlength="40">';
}
secao.innerHTML = template;




