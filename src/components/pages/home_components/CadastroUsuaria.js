import React, { Component } from 'react';

class CadastroUsuaria extends Component {
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

                    <div class="input-box" data-login-person-type-container="" style={{"display":"block"}}>
                    <label for="RegistrationForm_last_name" class="required">Sobrenome <span class="required">*</span></label>
                    <input data-form-group="natural" data-form-required="" data-social-last-name="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[last_name]" id="RegistrationForm_last_name" type="text" maxlength="50"/>
                    </div>

                    <div class="input-box">
                    <label for="RegistrationForm_email" class="required">E-mail <span class="required">*</span></label>
                    <input data-form-group="natural,cadastroPlat" data-form-type="email" data-form-required="" data-form-required-message="Campo obrigatório"
                        data-form-type-message="E-mail inválido. Verifique se digitou corretamente." name="RegistrationForm[email]"
                        id="RegistrationForm_email" type="text" maxlength="40"/>
                    </div>

                    <div class="input-box">
                    <label data-login-tax-identification-label="" for="RegistrationForm_tax_identification" class="required">CPF</label>
                    <input data-login-tax-identification="" data-form-group="natural,cadastroPlat" data-form-required="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[tax_identification]" id="RegistrationForm_tax_identification" type="text"/>
                    </div>

                    <div class="input-box cadastro__data-selection" data-login-person-type-container="" style={{"display":"block"}}>
                    <label for="RegistrationForm_Nascimento">Nascimento</label>
                    <select class="selectbox day" data-form-group="natural" data-form-required="" data-social-birth-day="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[day]" id="RegistrationForm_day">
                                        <option value="" selected="selected"></option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                        <option value="15">15</option>
                                        <option value="16">16</option>
                                        <option value="17">17</option>
                                        <option value="18">18</option>
                                        <option value="19">19</option>
                                        <option value="20">20</option>
                                        <option value="21">21</option>
                                        <option value="22">22</option>
                                        <option value="23">23</option>
                                        <option value="24">24</option>
                                        <option value="25">25</option>
                                        <option value="26">26</option>
                                        <option value="27">27</option>
                                        <option value="28">28</option>
                                        <option value="29">29</option>
                                        <option value="30">30</option>
                                        <option value="31">31</option>
                                    </select>
                    <i class="icon-chevron-down"></i>

                    <select class="selectbox month" data-form-group="natural" data-form-required="" data-social-birth-month="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[month]" id="RegistrationForm_month">
                                        <option value="" selected="selected"></option>
                                        <option value="01">01</option>
                                        <option value="02">02</option>
                                        <option value="03">03</option>
                                        <option value="04">04</option>
                                        <option value="05">05</option>
                                        <option value="06">06</option>
                                        <option value="07">07</option>
                                        <option value="08">08</option>
                                        <option value="09">09</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                    </select>
                    <i class="icon-chevron-down"></i>

                    <select class="selectbox year" data-form-group="natural" data-form-required="" data-social-birth-year="" data-form-required-message="Campo obrigatório"
                        name="RegistrationForm[year]" id="RegistrationForm_year">
                                        <option value="" selected="selected"></option>
                                        <option value="2008">2008</option>
                                        <option value="2007">2007</option>
                                        <option value="2006">2006</option>
                                        <option value="2005">2005</option>
                                        <option value="2004">2004</option>
                                        <option value="2003">2003</option>
                                        <option value="2002">2002</option>
                                        <option value="2001">2001</option>
                                        <option value="2000">2000</option>
                                        <option value="1999">1999</option>
                                        <option value="1998">1998</option>
                                        <option value="1997">1997</option>
                                        <option value="1996">1996</option>
                                        <option value="1995">1995</option>
                                        <option value="1994">1994</option>
                                        <option value="1993">1993</option>
                                        <option value="1992">1992</option>
                                        <option value="1991">1991</option>
                                        <option value="1990">1990</option>
                                        <option value="1989">1989</option>
                                        <option value="1988">1988</option>
                                        <option value="1987">1987</option>
                                        <option value="1986">1986</option>
                                        <option value="1985">1985</option>
                                        <option value="1984">1984</option>
                                        <option value="1983">1983</option>
                                        <option value="1982">1982</option>
                                        <option value="1981">1981</option>
                                        <option value="1980">1980</option>
                                        <option value="1979">1979</option>
                                        <option value="1978">1978</option>
                                        <option value="1977">1977</option>
                                        <option value="1976">1976</option>
                                        <option value="1975">1975</option>
                                        <option value="1974">1974</option>
                                        <option value="1973">1973</option>
                                        <option value="1972">1972</option>
                                        <option value="1971">1971</option>
                                        <option value="1970">1970</option>
                                    </select>
                    <i class="icon-chevron-down"></i>
                    </div>

                    <form id="formCadastro" name="formulario" action="" method="POST">
                    <div>
                        <label for="txtSenha">Senha</label>
                        <input id="txtSenha" name="senha" type="password" required="" placeholder="Digite uma Senha" title="Senha" />
                        <label for="repetir_senha">Confirmar Senha</label>
                        <input id="repetir_senha" name="repetir_senha" type="password" required="" placeholder="Repetir Senha" title="Repetir Senha"/>
                    </div>
                    <div>
                        <button type="button" onclick="validarSenha(this)" class="testar button2 botao__cadastrar__cadastro">Criar conta</button>
                    </div>
                    </form>
                </form>
                </div>
            </ul>
        );
    }
}

export default CadastroUsuaria;