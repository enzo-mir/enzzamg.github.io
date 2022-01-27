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

    var tab_img = ["ux", "computer", "coding"];
    document.getElementById('img1').src = "/image/ux.png";


    let i = 0;
    setInterval(() => {
        if (i < tab_img.length) {
            i++;
            const img = document.getElementById('img1');
            img.src = "/image/" + tab_img[i] + ".png";
            if (i == 2) {
                i -= 3;
            }
            setTimeout(() => {
                setTimeout(() => {
                    img.style.transform = "translate(0%,0)";
                    img.style.opacity = "1";
                }, 500);
                img.style.transform = "translate(25%,0%)";
                img.style.opacity = "0";
            }, 2500);



        }
    }, 3000);


})

