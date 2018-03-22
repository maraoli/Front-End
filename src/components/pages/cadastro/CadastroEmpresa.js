import React, { Component } from 'react';

class CadastroEmpresa extends Component {
    render() {
        return (
            <ul class="cadastro">
                <div class="cadastro-item-content new-customer auth-form-box">
                <form id="login-account-create" data-form="" data-form-ui-enabled="" data-form-excluded="[disabled]" data-login-validate="createLogin"
                    action="/customer/account/login/" method="post">
                    <input type="hidden" value="f2cdf64787c264aab2f7e91c4073287e43507727" name="YII_CSRF_TOKEN"/>

                    <div class="tipo-de-cadastro" name="tipo-de-cadastro"></div>

                    <div class="input-box">
                    <label data-login-name="" for="RegistrationForm_first_name" class="required">Nome</label>
                    <input data-form-group="cadastroPlat,natural" data-form-required="" data-social-first-name="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[first_name]" id="RegistrationForm_first_name" type="text" maxlength="50"/>
                    </div>
                    <div class="input-box auth-form-state-registration" data-login-person-type-container="" style={{"display":"none"}}>
                    <label for="RegistrationForm_state_registration">Inscrição Est.</label>
                    <input data-form-group="cadastroPlat" data-form-required="" data-login-state-registration="" name="RegistrationForm[state_registration]"
                        id="RegistrationForm_state_registration" type="text" disabled="disabled"/>
                    <input id="ytRegistrationForm_state_registration_exempt" type="hidden" value="0" name="RegistrationForm[state_registration_exempt]"/>
                    <input data-login-check-state-registration="" name="RegistrationForm[state_registration_exempt]" id="RegistrationForm_state_registration_exempt"
                        value="1" type="checkbox"/> <label for="RegistrationForm_state_registration_exempt">Isento</label>
                    </div>

                    <div class="input-box">
                    <label for="RegistrationForm_email" class="required">E-mail <span class="required">*</span></label>
                    <input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"
                        data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"
                        id="RegistrationForm_email" type="text" maxlength="40"/>
                    </div>

                    <div class="input-box">
                    <label data-login-tax-identification-label="" for="RegistrationForm_tax_identification" class="required">CNPJ</label>
                    <input data-login-tax-identification="" data-form-group="natural,cadastroPlat" data-form-required="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[tax_identification]" id="RegistrationForm_tax_identification" type="text"/>
                    </div>

                    <div class="input-box">
                    <label data-login-name="" for="RegistrationForm_first_name" class="required">Endereço</label>
                    <input data-form-group="cadastroPlat,natural" data-form-required="" data-social-first-name="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[first_name]" id="RegistrationForm_first_name" type="text" maxlength="50"/>
                    </div>

                    <form id="formCadastro" name="formulario" action="" method="POST">
                    <div>
                        <label for="txtSenha">Senha</label>
                        <input id="txtSenha" name="senha" type="password" required="" placeholder="Digite uma Senha" title="Senha" />
                        <label for="repetir_senha">Confirmar Senha</label>
                        <input id="repetir_senha" name="repetir_senha" type="password" required="" placeholder="Repetir Senha" title="Repetir Senha"/>
                    </div>
                    <div>
                        <button type="button" onclick="validarSenha(this)" class="testar button2 botao__cadastrar__cadastro">
                            <a class="close-modal botao-login-form" id="link-cadastro" data-dismiss="modal" data-toggle="modal" href="#">Criar conta</a>
                        </button>
                    </div>
                    </form>
                </form>
                </div>
            </ul> 
        );
    }
}

export default CadastroEmpresa;