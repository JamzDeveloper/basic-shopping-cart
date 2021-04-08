
const bntPayment = document.querySelector(".button-payment");
const containerPay = document.querySelector(".container-pay");
let containerProduct = document.querySelector(".container-product");
let containerTrolley = document.querySelector(".container-trolley");
let total =  document.querySelector(".price-total span");
/**
 * add products to the cart
 */
containerProduct.addEventListener("click", (e) => {
  //console.log(e);
  //console.log(e.target.classList[1]);
  
  if (e.target.classList[0] == "toby") {
    let buttonTem = document.querySelector(`.${e.target.classList[1]}`);
    //console.log(buttonTem.parentNode.getAttribute("value"));
    let id = buttonTem.parentNode;
    //console.log(id.classList[1]);
    let nameClass = id.classList[1];
    let name = document.querySelector(`.${nameClass} .name`);
    let price = document.querySelector(`.${nameClass} .price`);
    //console.log(document.querySelector(`.${nameClass} .name`));
    //console.log(document.querySelector(`.${nameClass} .price`));
    //console.log(name.innerText)
    //console.log();
    if(checkProduct(name.innerText)==false){
      createElement(name.innerHTML, price.innerHTML, id.getAttribute("value"),parseFloat(price.getAttribute("value")));  
    //console.log( price.getAttribute("value"))
      totalDat("suma", parseFloat(price.getAttribute("value")));
    }else{
      alert("producto ya fue agregado a carrito")
    }
    }
});

containerTrolley.addEventListener("click", (e) => {
  let price = document.querySelector(`.${e.target.parentNode.parentNode.classList[1]} .element-price`);
  if (e.target.className == "element-remove"){
    e.target.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode
    );
    totalDat("resta",parseFloat(price.getAttribute("value")));
  }
      
});

//button of to pay
bntPayment.addEventListener("click", () => {
  let arrayElement = document.querySelectorAll(".element");

  arrayElement.forEach((element) => {
    let arrayCard = document.querySelectorAll(".card");
    arrayCard.forEach((element2) => {
      if (element2.getAttribute("value") === element.getAttribute("value")) {
        element.parentNode.removeChild(element);
        element2.parentNode.removeChild(element2);
        total.innerHTML= 0;
      }
    });
  });
});

const createElement = (name, price, value, valuePrice) => {
  containerPay.innerHTML += `<div class="element ${name}" value="${value}">
                <h4 class="element-tittle">
                    ${name}
                </h4>
                <div class="container-action">
                    <p>Eliminar</p> <button class="element-remove">X</button>
                </div>
                <p class="element-price" value='${valuePrice}'>${price}</p>
            </div>`;
};

const checkProduct = (name)=>{
  let auxElement = document.querySelectorAll(".container-trolley .element  .element-tittle ");
  let valor =false;
  auxElement.forEach((element) => {
    
    if(name == element.innerText){
      valor = true;
  }
  })

return valor;

};

 const totalDat = (res, dat)=>{
   if(res == "suma"){
     let value = total.innerHTML;
     value = parseFloat(value);
     total.innerHTML = value + dat;
   }
   if(res == "resta"){
    let value = total.innerHTML;
    value = parseFloat(value);
    total.innerHTML = value -dat;
   }
 };