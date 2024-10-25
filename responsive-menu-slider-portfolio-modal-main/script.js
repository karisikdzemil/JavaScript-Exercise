const mobileMenu = () => {
    let menu = document.querySelector(".header ul");
    let btn = document.querySelector(".header button");

    if(btn.innerText === "MENU"){
        menu.style.display = "block";
    btn.innerText = "CLOSE";

    }else{
        menu.style.display = "none";
    btn.innerText = "MENU";

    }

}
