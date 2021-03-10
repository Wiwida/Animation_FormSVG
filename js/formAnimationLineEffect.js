const color = ['rgb(205, 92, 92)', 'rgb(255, 0, 0)', 'rgb(255, 20, 147)', 'rgb(199, 21, 133)', 'rgb(255, 140, 0)', 'rgb(255, 255, 0)', 'rgb(255, 228, 181)', 'rgb(189, 183, 107)', 'rgb(102, 51, 153)', 'rgb(75, 0, 130)']
// On tire au sort une couleur pour les lignes contenues dans les svg
const colorRandom = () => {
    const colorChiffre = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    return color[colorChiffre]
}
// On génère un nombre aléatoire pour pouvoir définir une épaisseur à ces lignes
const numberRandom = () => {
    return Math.random();
}
// Corps de l'animation
const overlayAnimationLine = (indiceClasseLineAndSvg) => {

    const body = document.querySelector('.ajout');
    const lineRandom = setInterval( function() {

        const svgAll = document.querySelectorAll('.effect2');
        const aleatoire = colorRandom();  // Couleur ligne
        const aleatoire2 = numberRandom(); // Epaisseur ligne
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        // On genère 12 svg + lignes par appel de la fonction
        if (svgAll.length > 12) {
            clearInterval(lineRandom);
        } else {
            // On définit les attributs generaux des svg + ligne
            svg.setAttribute('height', 470);
            svg.setAttribute('width', 450);
            // Voir css car 4 animations differentes donc 4 effect
            svg.classList = `effect${indiceClasseLineAndSvg}`;

            line.setAttribute('x1', 450);
            line.setAttribute('y1', 467);
            line.setAttribute('x2', 450);
            line.setAttribute('y2', 1);
            line.style.strokeWidth = aleatoire2;
            line.style.stroke = aleatoire;
            line.style.opacity = aleatoire2;
            // Pareil qu'au dessus mais pour les lignes cette fois
            line.classList = `line${indiceClasseLineAndSvg}`;

            body.append(svg);
            svg.append(line);
            
        }
        
    }, 300);
};
// On lance la fonction 4 fois pour generer 48 svg + ligne auxquels via le css, on appliquera des animations (effet de mouvement de droite à gauche)  
for (let increment = 1; increment < 5; increment++) {
    overlayAnimationLine(increment);
}