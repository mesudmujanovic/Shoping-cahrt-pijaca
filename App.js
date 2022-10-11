allTotal=0;

function addToCart (element) {
let mainEl = element.closest(".single-item");
let price = mainEl.querySelector(".price").innerText;
let name = mainEl.querySelector("h3").innerText;
let quantity = mainEl.querySelector("input").value;
let cartItems = document.querySelector(".cart-items");


if(parseInt(quantity)>0){
 price=price.substring(1);
 let total = price * parseInt(quantity);
 allTotal += total;

 cartItems.innerHTML += `<div class="cart-single-item">
 <h3> $${price} - artikl ${name}</h3>
 <p> $${price} x ${quantity} = $<span>${total}</span> </p>
 <button onclick="removeFromCart(this)" class="remove-item">Ukloni</button>
 </div>`
document.querySelector(".total").innerText=`Total:${allTotal}`

element.innerText="Dodato";
element.setAttribute('disabled','true');
 }  

else{
 alert('Unesi kolicinu');
}
 }
 

function removeFromCart(element){
 let mainEl = element.closest(".cart-single-item");

 let price = mainEl.querySelector('p span').innerText;
 let name = mainEl.querySelector('h3').innerText;
 let vegetables = document.querySelectorAll('.single-item');

  price = parseInt(price);
 allTotal -= price;
 document.querySelector(".total").innerText=
 `Total:   ${allTotal}`
mainEl.remove();

vegetables.forEach(function(vege){
 let itemName = vege.querySelector(".single-item h3").innerText;
 if(itemName === name){
  vege.querySelector(".actions input").value=0;
  vege.querySelector(" button").removeAttribute('disabled','true');
  vege.querySelector("button").innerText="Dodaj";

 }
});
}
