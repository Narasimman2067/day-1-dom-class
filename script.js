
// console.log(document);
// let elementName= prompt("hai tell me what you feel", "")
// if(elementName != null){
// newElement.innerText=elementName;
// }
let newElement = document.createElement("div")

// newElement.innerText="i am from JS"
newElement.innerText="i'm a inner text"
newElement.style.backgroundColor="yellow";
newElement.style.color="red";
newElement.innerText="i'm a inner text"


// inner text
newElement.innerText
newElement.innerHTML =
` <h1>hi there</h1>
<div>
<h1 style="background-color:red;color:yellow;font-family:algerian">I'm a inner html</h1>
</div>`

// set attribute
newElement.setAttribute("class","create-class")

//  get element by id
let inbuildElement=document.getElementById("sample-id");
inbuildElement.innerText="JS intro over Id";
inbuildElement.style.backgroundColor="red";
var queryElement=document.querySelector('#sample-id')




// sample  element by id

let demoPara=document.getElementById("para");

//here i changed the text content by using the text content element
// see in the front html 26 line i had changed that line by giving new text content 
demoPara.textContent="I'm changed to         new text content";
// inner text
console.log("inner text:",demoPara.innerText);
//text content
console.log("text content: ",demoPara.textContent);

// query selector and query selector all
var queryElement=document.querySelector('.sample-class')
queryElement.style.color="blue"
console.log(queryElement);

// query selector all
var queryAllElement=document.querySelectorAll(".sample-class")
console.log(queryAllElement);
for(let i=0;i<queryAllElement.length;i++)
{
    
    queryAllElement[i].style.color="green";
    queryAllElement[i].innerText="js class over";
    console.log(queryAllElement[i]);
}


document.body.append(newElement);

console.log( "initial :",newElement);

const newDivision=document.createElement("div");

newDivision.setAttribute("id","append-sample");

newDivision.textContent="i'm from new append";
//  we can use append and create and use multiple elements like an array

newElement.append(newDivision,"hey there i'm a new string",demoPara);

// in append child we can use only the element not like strings,values had not been included

newElement.appendChild(newDivision);


console.log("final :",newElement);

