window.addEventListener('load', () => {
    fleche_bas.addEventListener("click", () => {
        window.scrollTo({
            top: window.innerHeight + fleche_bas.height,
            behavior: 'smooth'
        });
    })

    const
        element_accueil = document.createElement('span'),
        element_hobbies = document.createElement('span'),
        element_project = document.createElement('span'),
        element_contact = document.createElement('span');

    acceuil.appendChild(element_accueil);
    const span_li_accueil = document.querySelector('nav ul li:nth-child(1)>span');
    span_li_accueil.classList += ('menus acceuil');

    hobbies.appendChild(element_hobbies);
    const span_li_hobbies = document.querySelector('nav ul li:nth-child(2)>span');
    span_li_hobbies.classList += ('menus hobbies');

    project.appendChild(element_project);
    const span_li_project = document.querySelector('nav ul li:nth-child(3)>span');
    span_li_project.classList += ('menus project');

    contact.appendChild(element_contact);
    const span_li_contact = document.querySelector('nav ul li:nth-child(4)>span');
    span_li_contact.classList += ('menus contact');

    const cont_s3 = document.querySelector('#s3 .cont');


    window.addEventListener('scroll', () => {
        var scroll_pourcent = document.documentElement.scrollTop * 100 / (document.documentElement.offsetHeight - window.innerHeight);
        function opacity_nav() {
            if (scroll_pourcent >= 0) {
                span_li_accueil.style.opacity = `${(100 - scroll_pourcent * 4)}%`;
                if (scroll_pourcent == 0) {
                    span_li_hobbies.style.opacity = `100%`;
                }
            }
            if (scroll_pourcent >= 25) {
                var new_scroll = scroll_pourcent - 25;
                span_li_hobbies.style.opacity = `${(100 - new_scroll * 4)}%`;
                if (scroll_pourcent <= 26.7) {
                    span_li_hobbies.style.opacity = `100%`;
                }
            }
            if (scroll_pourcent >= 50) {
                var new_scroll = scroll_pourcent - 50;
                span_li_project.style.opacity = `${(100 - new_scroll * 4)}%`;
                if (scroll_pourcent <= 52.43) {
                    span_li_project.style.opacity = `100%`;
                }
            }
            if (scroll_pourcent >= 75) {
                var new_scroll = scroll_pourcent - 75;
                span_li_contact.style.opacity = `${(100 - new_scroll * 4)}%`;
                if (scroll_pourcent <= 76.41) {
                    span_li_contact.style.opacity = `100%`;
                }
            }
        }
        opacity_nav();


        if (scroll_pourcent >= 70) {
            cont_s3.classList.add('active');
        } else {
            cont_s3.classList.remove('active');
        }

        console.log(scroll_pourcent)
    })

})
