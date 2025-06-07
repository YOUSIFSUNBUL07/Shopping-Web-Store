
// let maxvalue1=0
// let supervalue=0
// let alor=document.getElementById("alor")
// let bag=document.getElementById("buyPlace")
// let big= document.getElementById("big")
// let maxvalue=0
// let atocart=document.querySelectorAll(".atocart")
// let input=document.querySelectorAll("input")
// r=input.value

// input.forEach((item, indx) => {
// item.addEventListener("change", (eo) => {

//   let iv=item.value
//   let OP=document.getElementsByClassName("iprice")[indx]
  
//   ON=OP.textContent.replace("$","")
//   maxvalue=iv*ON



//  maxvalue1=iv*ON

// maxvalue=maxvalue+(iv*ON)

// // let maxvalue2=iv[1]*ON
// // let maxvalue3=iv[2]*ON
// // let maxvalue4=iv[3]*ON
// // let maxvalue5=iv[4]*ON
// // let maxvalue6=iv[5]*ON
// // let maxvalue7=iv[6]*ON
// // let maxvalue8=iv[7]*ON
// // let maxvalue9=iv[8]*ON
// // let maxvalue10=iv[9]*ON
//  //allmaxvaluecomaninaition
// // console.log(maxvalue1);
// // console.log(maxvalue2);


//   console.log(maxvalue);
// atocart[indx].innerText= `Add To Cart ${item.value} Items   Price= ${maxvalue}$`

// eo.preventDefault()
// })


// });


// bag.addEventListener("click", (eo) => {
//   big.classList.add("black")
// alor.classList.remove("invisible")
// alor.classList.add("visibile")
// alor.innerText=` Total Price= ${maxvalue}$`
// })




let returnn=document.getElementById("returnn")
let maxvalue = 0;
let alor = document.getElementById("alor");
let bag = document.getElementById("buyPlace");
let big = document.getElementById("big");
let atocart = document.querySelectorAll(".atocart");
let input = document.querySelectorAll("input");

// let ali = document.getElementById("ali");
// Track previous values to subtract old total when updating

let itemTotals= new Array(input.length).fill(0)
input.forEach((item, indx) => {
  item.addEventListener("change", (eo) => {
    let iv = Number(item.value);
    let priceElement = document.getElementsByClassName("iprice")[indx];
    let unitPrice = Number(priceElement.textContent.replace("$", ""));

    // Remove previous total for this item from maxvalue
    maxvalue -= itemTotals[indx]; 
    // Calculate new subtotal for this item
    let newItemTotal = iv * unitPrice;
    itemTotals[indx] = newItemTotal;

    // Add new subtotal to total
    maxvalue += newItemTotal;

    // Update button text
    atocart[indx].innerText = `Add To Cart ${iv} Items   Price = ${newItemTotal}$`;

    console.log("Updated maxvalue:", maxvalue);
  });
});

bag.addEventListener("click", (eo) => {
  // window.location.href='totalPrice.html'
  big.classList.add("black");
  alor.classList.remove("invisible");
  alor.classList.add("visibile");
  
  alor.innerText += `   
  
  
  
  Total Price = ${maxvalue}$`;
// ali.innerText = `Total Price = ${maxvalue}$`;


});
returnn.addEventListener("click",
  (params) => {
      alor.classList.remove("visibile")
  alor.classList.add("invisible")
  }


  
)
// const act = (params) => {
//   localStorage.setItem(alor.innerText = `Total Price = ${maxvalue}$`);
// }
