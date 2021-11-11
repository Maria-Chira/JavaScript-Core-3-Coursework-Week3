let order = [
  { itemName: "Hot cakes", quantity: 1, unitPrice: 2.29 },
  { itemName: "Apple Pie", quantity: 2, unitPrice: 1.39 },
  { itemName: "Egg McMuffin", quantity: 1, unitPrice: 2.8 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPrice: 3.0 },
  { itemName: "Hot Coffee", quantity: 2, unitPrice: 1.0 },
  { itemName: "Hash Brown", quantity: 4, unitPrice: 0.4 },
];

function printReceipt (order){
  console.log(`QTY         ITEM              TOTAL`);
  let totalValue = 0;
  order.forEach((item) =>{
    let  {itemName, quantity, unitPrice} = item;
    const itemsPrice = (quantity * unitPrice).toFixed(2);
   
    totalValue += parseFloat(itemsPrice);
    itemName = itemName.padEnd(25," ")
    console.log(`${quantity}         ${itemName} £${itemsPrice}`);
  })
  console.log("");
  console.log(`Total: ${totalValue}`);
}

printReceipt(order);