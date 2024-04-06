// scritp do popup de saída
const popUp = document.querySelector('#pop_up_saida');
const buttonCancel = document.querySelector('#button-cancel');
const icon_back_to_top = document.querySelector('#icon-back-to-top');

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
        icon_back_to_top.style.display = 'block';
    } else {
        icon_back_to_top.style.display = 'none';
    }
});

// script scrollReveal

// sessão dos feedbacks dos clientes

window.sr = ScrollReveal({ reset: true });
// sr.reveal('.costumer', {
//     rotate: {x: 100, y: 0, z: 0},
//     duration: 2000
// });
sr.reveal('.costumer', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '50px', // Distância de deslocamento do elemento
      origin: 'bottom', // De onde o elemento vai se originar
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});
