onmessage = function(e) {
	var mensagemRecebida = e.data;
	var mensagemRetornada = 'O Worker acusa o recebimento da seguinte mensagem:<br><span class="dest">'+ mensagemRecebida +'</span>';
	postMessage(MensagemRetornada);
}
