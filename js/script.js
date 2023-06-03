const modal = document.getElementById("myModal");
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");
const btn = document.getElementById("openModal");
const btn1 = document.getElementById("openModal1");
const btn2 = document.getElementById("openModal2");
const btn3= document.getElementById("openModal3");
const span = document.getElementsByClassName("close")[0];
const span1 = document.getElementsByClassName("close")[1];
const span2 = document.getElementsByClassName("close")[2];
const span3 = document.getElementsByClassName("close")[3];

// Event listeners para abrir e fechar o modal
btn.onclick = function() {
  modal.style.display = "block";
  setTimeout(function() {
    modal.style.opacity = "1";
  }, 10);
}
btn1.onclick = function() {
  modal1.style.display = "block";
  setTimeout(function() {
    modal1.style.opacity = "1";
  }, 10);
}
btn2.onclick = function() {
  modal2.style.display = "block";
  setTimeout(function() {
    modal2.style.opacity = "1";
  }, 10);
}
btn3.onclick = function() {
  modal3.style.display = "block";
  setTimeout(function() {
    modal3.style.opacity = "1";
  }, 10);
}

span.onclick = function() {
  modal.style.opacity = "0";
  setTimeout(function() {
    modal.style.display = "none";
  }, 300);
}
span1.onclick = function() { 
  modal1.style.opacity = "0";
  setTimeout(function() {
    modal1.style.display = "none";
  }, 300);
}
span2.onclick = function() { 
  modal2.style.opacity = "0";
  setTimeout(function() {
    modal2.style.display = "none";
  }, 300);
}
span3.onclick = function() { 
  modal3.style.opacity = "0";
  setTimeout(function() {
    modal3.style.display = "none";
  }, 300);
}

window.onclick = function(event) {
  if (event.target == modal ) {
    modal.style.opacity = "0";
    setTimeout(function() {
      modal.style.display = "none";
    }, 300);
  }
  if (event.target == modal1 ) {  
    modal1.style.opacity = "0";
    setTimeout(function() {
      modal1.style.display = "none";
    }, 300);
  }
  if (event.target == modal2 ) { 
    modal2.style.opacity = "0";
    setTimeout(function() {
      modal2.style.display = "none";
    }, 300);
  }
  if (event.target == modal3 ) {  
    modal3.style.opacity = "0";
    setTimeout(function() {
      modal3.style.display = "none";
    }, 300);
  }
 

}