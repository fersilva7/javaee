/**
 * Validação de Formulário
 * @author Fernando Silva
 */
 
 function confirmar(idcon){
	let resposta = confirm("Confirmar a exclusão deste contato ?")
	if (resposta === true){
		//alert(idcon)
		window.location.href = "delete?idcon=" + idcon
	}
}