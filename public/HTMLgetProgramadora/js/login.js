function validarSenha(){ 
	senha = document.getElementById("txtSenha").value;
	senhaRepetida = document.getElementById("repetir_senha").value;
	if (senha != senhaRepetida){
		alert("Repita a senha corretamente");
		document.getElementById("repetir_senha").focus();	
	}
	return false;
}