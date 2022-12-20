
// const newDivision=document.createElement("para");

// // newDivision.setAttribute("id","append-sample");

// newDivision.textContent="i'm from new append";
var queryAllElement=document.querySelectorAll(".sample-class")
console.log(queryAllElement);
for(let i=0;i<queryAllElement.length;i++)
{
    
    queryAllElement[i].style.color="red";
    queryAllElement[i].innerText="para";
    console.log(queryAllElement[i]);
}
document.body.append(newElement);

console.log( "initial :",newElement);

const newDivision=document.createElement("para");

newDivision.setAttribute("id","append-sample");

newDivision.textContent="i'm from new append";
//  we can use append and create and use multiple elements like an array

newElement.append(newDivision,"hey there i'm a new string");






console.log("final :",newElement);

