let priceElement = document.getElementById("price");
let quantityElement =  document.getElementsById("quantity");
let subtotal1Element = document.getElementById("subtotal1");

quantityElement.addEventListener("input", calculateSubtotal);

for(let i=0;i<priceElement.clientHeight;i++){function calculateSubtotal() {
  var price = parseFloat(priceElement.value);
  var quantity = parseInt(quantityElement.value);

    var subtotal1 = price * quantity;

    subtotal1Element.textContent = "Subtotal: Rs." + subtotal1.toFixed(2);
  } 
}
