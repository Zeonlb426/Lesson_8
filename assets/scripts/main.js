// Smooth-Scrollbar
//
// Документация:
// https://github.com/idiotWu/smooth-scrollbar/blob/v9/docs/api.md#scrollbardestroy
//
// Примеры:
// https://idiotwu.github.io/smooth-scrollbar/
// Получаем элемент в котором будет осуществляться плавная прокрутка контента
const scrollContainer = document.getElementById('smooth-scroll');

// Создаем объект с настройками для плавной прокрутки
const option = {
    damping: 0.03, // коэфициент плавности от 0 до 1
    renderByPixels: true, // перерисовка экрана только при целых значениях кол-ва пикселей
}

// Инициализация прокрутки. Навешиваем на DOM элемент, с заданными настройками
const scrollbar = Scrollbar.init(scrollContainer, option);

const introScreen = document.getElementById('intro');

const height = window.innerHeight;

window.addEventListener("load", (event) => {

    gsap.registerPlugin(ScrollTrigger);

    const img1 = document.getElementById('sec1-img');
    const img2 = document.getElementById('sec2-img');
    const img3 = document.getElementById('sec3-img');
    let action1 = false,
        action2 = false,
        action3 = false;

    scrollbar.addListener(function(status) {
        if (introScreen.style.display !== 'none') {
            scrollbar.offset.y = 0
            introScreen.style.transform = `translate3d(0px, ${ status.offset.y }px, 0px)`;
        }

        if (img1.getBoundingClientRect().top < height && action1 === false) {
            action1 = true
            gsap.from('#sec1-img', {
                x: '100%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec1-title', {
                x: '-80%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec1-discription', {
                x: '-50%',
                opacity: 0,
                duration: 1,
                delay: 1
            })
        }
        
        if (img2.getBoundingClientRect().top < height && action2 === false) {
            action2 = true
            gsap.from('#sec2-img', {
                x: '-100%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec2-title', {
                x: '80%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec2-discription', {
                x: '50%',
                opacity: 0,
                duration: 1,
                delay: 1
            })
        }

        if (img3.getBoundingClientRect().top < height && action3 === false) {
            action3 = true
            gsap.from('#sec3-img', {
                x: '100%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec3-title', {
                x: '-80%',
                opacity: 0,
                duration: 2,
            })
            gsap.from('#sec3-discription', {
                x: '-50%',
                opacity: 0,
                duration: 1,
                delay: 1
            })
        }
    });


    let timelineIntro = gsap.timeline();
    timelineIntro.fromTo(".symbol_1", {
        x: '-200%',
        scale: 2,
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2,
    });
    timelineIntro.fromTo(".symbol_2", {
        y: '-200%',
        scale: 2,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2
    }, '-=1');
    timelineIntro.fromTo(".symbol_3", {
        y: '200%',
        scale: 2,
    }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 2
    }, '-=1');
    timelineIntro.fromTo(".symbol_4", {
        x: '200%',
        scale: 2,
    }, {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 2
    }, '-=1.5');
    timelineIntro.to("#intro", {
        opacity: 0,
        duration: 2,
        delay: 1,
        display:"none"
    });

    gsap.from('#sky', {
        y: '-30%',
        duration: 3,
        delay: 5,
    })
    gsap.from('#mountains', {
        y: '-20%',
        duration: 3,
        delay: 5,
    })
    gsap.from('#man', {
        y: '30%',
        duration: 3,
        delay: 5,
    })
    gsap.from('header', {
        y: '-100%',
        duration: 2,
        delay: 6,
    })
    gsap.from('.block_scroll_arrow_down', {
        y: '-40%',
        duration: 0.5,
        yoyo: true,
        repeat: -1,
        delay: 6,
    })

});