var button = document.querySelector("button"),
    modal = document.querySelector(".modal-parent"),
    x = document.querySelector(".X"),
    section = document.querySelector("section");

button.addEventListener("click", appear, false);
x.addEventListener("click", getRid, false);
modal.addEventListener("click", getRidParent, false);

function appear(){
  modal.style.display = "block";
  section.style.filter = "blur(6px)";
  modal.style.animation = "2s dropUp";
}

function getRid(){
  modal.style.display = "none";
  section.style.filter = "none";
}

function getRidParent(e){
  if(e.target.className == "modal-parent"){
    modal.style.display = "none";
    section.style.filter = "none";
  }
}
