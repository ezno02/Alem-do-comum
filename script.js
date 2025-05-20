function nowmore(){
    let nowmores = document.getElementById("dodia01")
    
    nowmores.scrollIntoView({behavior: "smooth", block: "center"});
    
    nowmores.style.scale = "1.6"

    setTimeout(() => {
        open("now_more.html", "_self")
        nowmores.style.scale = "1"
    }, 1300);
}