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

// script que aciona o ícone do back to top na tela

window.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop; // captura o scroll da página atual
    
    if (scrollTop > 500 && !isActive()) {
        icon_back_to_top.style.display = 'block';
    } else {
        icon_back_to_top.style.display = 'none';
    }
});

// script scrollReveal

// sessão dos feedbacks dos clientes

window.sr = ScrollReveal({ reset: true });
sr.reveal('.costumer', {
      delay: 200, // Atraso antes de cada elemento ser revelado
      distance: '50px', // Distância de deslocamento do elemento
      origin: 'bottom', // De onde o elemento vai se originar
      duration: 1000, // Duração da animação em milissegundos
      easing: 'ease-in-out', // Tipo de animação
      reset: true // Se os elementos devem ser reanimados ao rolar para cima novamente
});

// script do menu hamburguer

const burguer = document.querySelector('.menu-burguer');
const nav = document.querySelector('.nav');
const btn_cta = document.querySelector('.cta');
const img_dog = document.querySelector('.img-dog-section-principle');
const feedbacks_costumer = document.querySelector('.feedbacks-costumer-container');
const section_end_page = document.querySelector('.container-end-page');

burguer.addEventListener('click', () => {
    nav.classList.toggle("active");
    if (isActive()) {
        btn_cta.style.display = 'none';
        img_dog.style.display = 'none';
        feedbacks_costumer.style.display = 'none';
        section_end_page.style.display = 'none';
    } else {
        btn_cta.style.display = 'block';
        img_dog.style.display = 'block';
        feedbacks_costumer.style.display = 'block';
        section_end_page.style.display = 'block';
    }
});

function isActive() {
    return nav.classList.contains('active');
}

// script do back to top

icon_back_to_top.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});


// script da interação com os links da nav

const links = document.querySelectorAll('.link');
const color_effect = '#d3d3d3';
const color_main = '#260101';

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        links.forEach(otherLink => {
            if(otherLink !== link) {
                otherLink.style.color = color_effect;
            }
        });
    });

    link.addEventListener('mouseout', () => {
        links.forEach(otherLink => {
            otherLink.style.color = color_main;
        })
    });
});