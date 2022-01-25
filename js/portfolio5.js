window.addEventListener('load', () => {
    para.innerHTML = para.innerText.split("").map(
        (char, i) =>
            `<span style="transform:rotate(${i * 36}deg)">${char}</span>`
    ).join("");

    fleche_bas.style.marginTop = `calc(100vh - ${Epara.offsetHeight}px - ${fleche_bas.height * 3}px)`;
    fleche_bas.style.marginBottom = `${fleche_bas.height * 3}px`;
    para_acceuil.style.marginTop = `calc(100vh - ${Epara.offsetHeight}px - ${fleche_bas.height * 5}px)`;

    header.style.left = 0 + "px";


    fl_accueil.addEventListener('click', () => {
        s1.style.transform = "rotateY(" + -90 + "deg)";
        document.querySelector('body').style.overflowY = 'hidden';
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
        header.style.left = -header.clientWidth - 100 + "px";
    })

    fl_accueil_retour.addEventListener('click', () => {
        s1.style.transform = "rotateY(" + 0 + "deg)";
        document.querySelector('body').style.overflowY = 'visible';
        header.style.left = 0 + "px";
    })



    slider();


    function particle() {
        var n = 20;
        for (let i = 0; i < n; i++) {
            let elem = document.createElement('i');

            let size = Math.random() * 4;
            elem.style.width = size + 'px';

            let height = Math.random() * 50 + 20;
            elem.style.height = height + "px";

            let posx = Math.floor(Math.random() * cont_s3.clientWidth - 20);
            elem.style.left = posx + 'px';

            let delay = Math.random() * 5;
            elem.style.animationDelay = delay + 's';

            let speed = 2 - Math.random() * 0.5;
            elem.style.animationDuration = speed + 's';

            let color = ['hsl(194, 74%, 56%)', 'hsl(266, 74%, 56%)', 'hsl(338, 74%, 56%)', 'hsl(50, 74%, 56%)', 'hsl(122, 74%, 56%)']
            elem.style.background = `linear-gradient(transparent ,${color[Math.floor(Math.random() * color.length)]} )`

            cont_s3.appendChild(elem);
        }
    }

    particle();

    const h1_part = document.querySelector('#s3 .cont h1');
    const h1_part_retour = document.querySelector('#s3 .cont .h1');

    const h1_content_part = document.querySelector('#s3 .cont #content');

    h1_part.addEventListener('click', h1_particle, false);
    function h1_particle() {
        h1_content_part.style.clipPath = 'circle(100% at 50% 50%)';
    }
    h1_part_retour.addEventListener('click', h1_particle_retour, false);
    function h1_particle_retour() {
        h1_content_part.style.clipPath = 'circle(0% at 50% 50%)';
    }

})

