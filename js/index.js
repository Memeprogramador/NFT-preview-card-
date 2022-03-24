

document.addEventListener('DOMContentLoaded', function() {
    eventListeners();

    showImage();

});

function eventListeners() {

    const selectedImg = document.querySelector('.contenedor-imagen');


    selectedImg.addEventListener('click', showImage);

}

//Image selector
function showImage() {

    //At image click, open image
    const selectedImg = document.querySelector('.contenedor-imagen');
    const overlay = document.createElement('DIV');  //<div></div>
    const closeImage = document.createElement('P'); //<p></p>

    selectedImg.addEventListener('click', function() {
        //create image
        const img = document.createElement('IMG');

        //Add parameter "src" to <img> element
        img.src = './images/image-equilibrium.jpg';

        //Add class 'overlay' (<div class="overlay"></div>)
        overlay.classList.add('overlay');

        //Add image to div as a child
        overlay.appendChild(img);

        //image closing button

        //text content ( 'X' button below image)
        closeImage.textContent = 'X';
        //Add class "close-btn" (<p class="close-btn"></p>)
        closeImage.classList.add('close-btn');

        //Add Close Button to div as a child
        overlay.appendChild(closeImage);
    })


    //at click out of button, close image
    overlay.onclick = function() {
        overlay.remove();
    }

    //at click on X, close image
    closeImage.onclick = function() {
        overlay.remove();
    }

    //show on html
    const body = document.querySelector('body');

    //Adds "overlay" div to body as a child
    body.appendChild(overlay);

    //Add "body-fix" class to body
    body.classList.add('body-fix');
}
