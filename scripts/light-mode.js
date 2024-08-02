document.querySelector(".light-mode").addEventListener("click", () =>{
    if(localStorage.getItem('You_Are_My_Love_Theme') == "dark"){
        document.body.classList.remove('dark');
        document.body.classList.add('light');
        localStorage.setItem('You_Are_My_Love_Theme', "light");
        return
    }
    if(localStorage.getItem('You_Are_My_Love_Theme') == "light"){
        document.body.classList.remove('light');
        document.body.classList.add('dark');
        localStorage.setItem('You_Are_My_Love_Theme', "dark");
        return
    }
});


if(localStorage.getItem('You_Are_My_Love_Theme') == null || localStorage.getItem('You_Are_My_Love_Theme') == ''){
    localStorage.setItem('You_Are_My_Love_Theme', 'light');
}else{
    document.body.classList.remove('dark');
    document.body.classList.remove('light');
    document.body.classList.add(localStorage.getItem('You_Are_My_Love_Theme'));
}