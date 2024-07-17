function redirecionarParaWhatsApp() {
    let numeroTelefone = '5511970284280';
 
    let mensagem = 'Olá sr José, vim pelo site e gostaria de fazer um orçamento.';

    let mensagemCodificada = encodeURIComponent(mensagem);

    let urlWhatsApp = 'https://api.whatsapp.com/send?phone=' + numeroTelefone + '&text=' + mensagemCodificada;

    window.open(urlWhatsApp, '_blank');
}


function ligarParaFixo() {
    let numeroFixo = '+551136916061';
    window.open('tel:' + numeroFixo, '_blank');
}

function redirecionarLinkedin() {
    let urlLinkedin = 'https://www.linkedin.com/'; 
    window.open (urlLinkedin, '_blank');
}


