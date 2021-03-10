const animation = {

    transformBackground: () => {
        // On gere le clic sur l'input pour changer certain effets agressif à l'oeil
        const signin = document.querySelector('.signin'); 
        const mainRegistryInput = document.querySelectorAll('.main__form input');
        const mainRegistry = document.querySelector('.main__form');

        signin.style.background = 'linear-gradient(90deg, rgba(2,0,36,1) 5%, rgba(23,30,84,1) 33%, rgba(0,172,255,1) 100%)';
        mainRegistry.style.animation = "none";
        mainRegistry.style.border = "white 1px solid";
        mainRegistry.style.background = "url('./pictures/planet-1702788_1280.jpg')";
        mainRegistry.style.opacity = 0.75;

        for (const value of mainRegistryInput) {
            value.style.border = "white solid 1px";
        };
 
    },
    
    eventListen: () => {
        document.querySelector('.textId').addEventListener('click', app.transformBackground);
    },

    init: () => {

        app.eventListen();

    }
};

app.init();