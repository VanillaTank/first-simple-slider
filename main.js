//find elements
var showPrevBtn = document.getElementById('show-prew');
var showNextBtn = document.getElementById('show-next');
var slideImages = document.getElementById('slide_img');
//subscribe to events
showPrevBtn.addEventListener('click',onShowPrevBtnClick);
showNextBtn.addEventListener('click', onShowNextBtnClick);

//create images arrey
var imagesUrls = [];
imagesUrls.push('images/tes.jpg');
imagesUrls.push('images/tesla1.jpg');
imagesUrls.push('images/tesla2.jpg');
imagesUrls.push('images/tesla3.jpg');

var currentImagesIndex = 0;

slideImages.src = imagesUrls[currentImagesIndex];
showPrevBtn.disabled = true;

//functions definitions
function onShowNextBtnClick() {
    currentImagesIndex++;
    slideImages.src = imagesUrls[currentImagesIndex];
    showPrevBtn.disabled = false;
    //disabled next button if need
    if(currentImagesIndex === (imagesUrls.length - 1) ) {
        showNextBtn.disabled = true;
    }
}

function onShowPrevBtnClick() {
    currentImagesIndex--;
    slideImages.src = imagesUrls[currentImagesIndex];
    showNextBtn.disabled = false;

    //disabled prev button if need
    if(currentImagesIndex === 0) {
        showPrevBtn.disabled = true;
    }
}