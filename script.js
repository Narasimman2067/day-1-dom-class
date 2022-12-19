
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
newElement.innerHTML =
`<div>
<h1 style="background-color:red;color:yellow;font-family:algerian">I'm a inner html</h1>
</div>`

// set attribute
newElement.setAttribute("class","create-class")

//  get element by id
let inbuildElement=document.getElementById("sample-id");
inbuildElement.innerText="JS intro over Id";
inbuildElement.style.backgroundColor="red";
var queryElement=document.querySelector('#sample-id')
var queryElement=document.querySelector('.sample-class')

queryElement.style.color="blue"
document.body.append(newElement);




console.log(document);
