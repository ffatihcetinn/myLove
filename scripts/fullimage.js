const imgs = document.querySelectorAll('.photo');
const fullPage = document.querySelector('#fullpage');
const fullpage_img = document.querySelector('#fullpage_img');

imgs.forEach(img => {
    img.addEventListener('click', function() {
        fullpage_img.style.display = "block";
        fullpage_img.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
    });
});


fullPage.addEventListener("click", ()=>{
    fullPage.style.display = "none";
    fullpage_img.style.display = "none";
})