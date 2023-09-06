//Function dedicated to animating the pics

var index = 0;
var capabg = document.getElementById("capabg");
var imagesbg = new Array("img/Pizza-stock.jpg","img/Pizza-serv.jpg","img/Pizza-clients.jpg");


let animateCSS = (element, animation, prefix = 'animate__') =>
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      setInterval(resolve, 2000);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd);
  
  });



var prd_index = 0;
let seta1 = document.getElementById("seta1");
let seta2 = document.getElementById("seta2");
var images_prd = new Array("img/pizzaStock.png","img/refrisStock.png");

  function ChangePicArrowEsquerda(){
    prd_index--;
    var prodtexto = document.getElementById("p_texto")
    var img_product= document.getElementById("image_produtos");
    prodtexto.innerText='Pizzas e massas feitas com produtos caseiros' 
    img_product.setAttribute("src", images_prd[prd_index]);
    animateCSS('.image_prod', 'fadeInRight');


    
    if (prd_index <= -1){
      prd_index = 1;
      img_product.setAttribute("src", images_prd[prd_index]);
      prodtexto.innerText='Variedade tremenda de bebidas'    
    }
    
    
    
  }

  function ChangePicArrowDireita(){
    prd_index++;
    var img_product= document.getElementById("image_produtos");
    var prodtexto = document.getElementById("p_texto")
    img_product.setAttribute("src",images_prd[prd_index]);
    prodtexto.innerText='Variedade tremenda de bebidas'    
    animateCSS('.image_prod', 'fadeInLeft');

    if (prd_index >= 2){
      prd_index = 0;
      img_product.setAttribute("src",images_prd[prd_index]);
      prodtexto.innerText='Pizzas e massas feitas com produtos caseiros' 
    }
  }

  seta1.addEventListener('click', ChangePicArrowEsquerda);
  seta2.addEventListener('click', ChangePicArrowDireita);