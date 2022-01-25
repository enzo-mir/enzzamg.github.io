function slider() {
    f1.style.transform = `rotateY(0deg) translateZ(${f1.clientWidth / 2}px)`;
    f2.style.transform = `rotateY(90deg) translateZ(${f2.clientWidth / 2}px)`;
    f3.style.transform = `rotateY(180deg) translateZ(${f3.clientWidth / 2}px)`;
    f4.style.transform = `rotateY(-90deg) translateZ(${f4.clientWidth / 2}px)`;

    const nav_slider = document.querySelector('.nav_slider');

    for (let n = 0; n < 4; n++) {
        const e = document.createElement("span");
        nav_slider.appendChild(e);
    }
    nav_slider.insertAdjacentElement("beforeend", document.querySelector('#s2 .nav_slider img:nth-child(2)'))
    const span = document.querySelectorAll('#s2 .nav_slider span');


    let n = 0;
    let counter = 0;
    let a = 0;

    span[0].style.background = "red";

    document.querySelector('#s2 .nav_slider img:nth-child(6)').addEventListener('click', () => {
        counter++;
        if (n < 3) {
            n++
            span[n].style.background = "red";
            if (n > 0) {
                span[n - 1].style.background = "white";
            }
            if (counter++) {
                a -= 90;
                slider_cont.style.transition = '1.5s ease-in-out';
                slider_cont.style.transform = 'rotateY(' + a + 'deg)';
            }
        }
    }, false)
    document.querySelector('#s2 .nav_slider img:nth-child(1)').addEventListener('click', () => {
        counter++;
        if (n > 0) {
            n--;
            slider_cont.style.transform -= "rotateY(90deg)";
            span[n].style.background = "red";
            if (n < 3) {
                span[n + 1].style.background = "white";
            }
            if (counter++) {
                a += 90;
                slider_cont.style.transition = '1.5s ease-in-out';
                slider_cont.style.transform = 'rotateY(' + a + 'deg)';
            }
        }
    }, false)


    span[0].addEventListener('click', () => {
        a = 0;
        span[0].style.background = "red";

        slider_cont.style.transition = '1.5s ease-in-out';
        slider_cont.style.transform = 'rotateY(' + a + 'deg)';

        span[n].style.background = "white";
        n = 0;
    })
    span[1].addEventListener('click', () => {
        a = -90;
        span[1].style.background = "red";

        slider_cont.style.transition = '1.5s ease-in-out';
        slider_cont.style.transform = 'rotateY(' + a + 'deg)';

        span[n].style.background = "white";
        n = 1;
    })
    span[2].addEventListener('click', () => {
        a = -180;
        span[2].style.background = "red";

        slider_cont.style.transition = '1.5s ease-in-out';
        slider_cont.style.transform = 'rotateY(' + a + 'deg)';

        span[n].style.background = "white";
        n = 2;
    })
    span[3].addEventListener('click', () => {
        a = -270;
        span[3].style.background = "red";

        slider_cont.style.transition = '1.5s ease-in-out';
        slider_cont.style.transform = 'rotateY(' + a + 'deg)';

        span[n].style.background = "white";
        n = 3;
    })
}