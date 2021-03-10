function solucao(stringCorrompida) {
	// seu código aqui
    
    var stringPurificada = stringCorrompida.replace(/[!@#$%&*()]/g, '');
    
    console.log(stringPurificada);
}
