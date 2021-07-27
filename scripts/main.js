const highlightImage = document.querySelector('img');
const defaultHighlight = 'images/gallery_01.PNG';

highlightImage.onclick = function() {
    let mySrc = highlightImage.getAttribute('src');
    if(mySrc === defaultHighlight) {
        highlightImage.setAttribute('src', 'images/gallery_02.PNG');
    } else {
        highlightImage.setAttribute('src', defaultHighlight);
    }
}