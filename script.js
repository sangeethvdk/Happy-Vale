function switchPage(current,next){
    document.querySelector(current).classList.remove("active");
    setTimeout(()=>{
        document.querySelector(next).classList.add("active");
    },500);
}


function startLove(){
    document.getElementById("bgMusic").play();
    switchPage(".page1",".page2");
}


function goToPage3(){
    switchPage(".page2",".page3");
}


function openModal(img, caption){
    document.getElementById("modal").style.display="flex";
    document.getElementById("modalImg").src=img.src;
    document.getElementById("modalCaption").innerText=caption;
}


function closeModal(){
    document.getElementById("modal").style.display="none";
}