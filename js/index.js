// scritp do popup de saída
const popUp = document.querySelector('#pop_up_saida');
const buttonCancel = document.querySelector('#button-cancel');
const icon_whatsapp = document.querySelector('#icon-whatsapp');

localStorage.removeItem('popUpDisplayed'); // remove o popUpDisplayed sempre que o usuário entrar na página

document.addEventListener('mouseout', event => {

    const popUpDisplayed = localStorage.getItem('popUpDisplayed');

    // verifica se mouse saiu da tela e se o popup ja foi acionado alguma vez
    if (!popUpDisplayed && event.relatedTarget == null)
        popUp.style.display = 'block';
});

buttonCancel.addEventListener('click', () => {
    popUp.style.display = 'none';

    // vai verificar se o popup ja foi acionado alguma vez
    localStorage.setItem('popUpDisplayed', true);
});

// script que aciona o ícone do whatsapp na tela

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop; // captura o scroll da página atual
    
    if (scrollTop > 500) {
        icon_whatsapp.style.display = 'block';
    } else {
        icon_whatsapp.style.display = 'none';
    }
});