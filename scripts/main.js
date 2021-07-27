const highlightImage = document.querySelector('img');

var galleryImages = {
    0: {
        src: 'images/gallery_00.PNG',
        alt: 'Imagem de Destaque: Desenho colorido de uma garota sentada em uma nuvem'
    },
    1: { 
        src: 'images/gallery_01.PNG',
        alt: 'Imagem de Destaque: Sketch de um retrato de uma garota usando um lenço sobre a cabeça em  preto e branco '
    }
}

setupGallery()

function setupGallery() { 
    loadImage(galleryImages[0])
    setupHighlightClick()
}

function setupHighlightClick(){ 
    const defaultHighlight = galleryImages[0].src;

    highlightImage.onclick = function() {
        let mySrc = highlightImage.getAttribute('src');
    
        if(mySrc === defaultHighlight) {
            loadImage(galleryImages[1])
        } else {
            loadImage(galleryImages[0])
        }
    }
}

function loadImage(image) {
    highlightImage.setAttribute('src', image.src);
    highlightImage.setAttribute('alt', image.alt);
}