//  document.body.textContent="im a new document";
// console.log(document)


// // // bom BOM
//  console.log(this);
// // // empty javascript file
// // // is a minimum function  of a javascript

// console.log(window);
// // // window is a simple object that shows the whole window
//  window.alert("hi");

//  const log =() =>
//  {     console.log("hi there");

// }
// const windowObject={
//     logger : log(),
// }
// windowObject.logger;
// for (let i=0;i<6;i++)
// {
//     if(i==3)
//     {
//          confirm(" hey the loop has runed three times");
//     }
//     console.log(i);
// }
// console.log(window);

//     function newFunction(){
//         console.log("hey i'm the function")
//         alert('hi there');
//     }

//     function newSecons(){
//         console.log("hey i'm the function");
//         // alert(" hey i'm the function")
       
//     }
//     setTimeout(newSecons,1000);

    //alert
    //prompt
    //confirm


// alert // prompt //confirm

//////////alert ////////////////

function alertFunction(message) {
    alert(message); // nothing
  }
  
  /////////promt////////////////
  let promptElement = document.createElement("div")
  document.body.append(promptElement); 
  
  function promptFunction(){
    let answer = prompt("Hey there have you attended the class?", "") // returns a null or value
   
      promptElement.textContent = `${answer} is your answer`
    
  }
  
  //////////confrim////////////////////
  
  function confirmFunction(){
    let response = confirm("Are you confirming?"); // true or false
  
    if (response == true){
      promptElement.textContent = `You have approved the request`
    } else {
      promptElement.textContent = `You have rejected the request`
    }
  }
  
  /////////set time out////////////////
  
  let count = 10; 
  
  function timeOutExample(){
     // count++ or count = count +1 
    promptElement.textContent = count; 
    count = count-1;
    const id = setTimeout(timeOutExample, 1000); 
    if (count == 0){
      clearTimeout(id); 
      promptElement.textContent = "Your time is up..."
    }
  }
  
  
  ///////////set interval//////////////
  // repeat after certain time 
  function intervalFunction(){
  let ourInterval = setInterval(() => {
     promptElement.textContent = count
     count = count - 1
     if (count === 0 ){
      clearInterval(ourInterval)
      promptElement.textContent = "your time has stopped..."
     }
  }, 1000);
  }
  
  /////////Events////////
  let clickCounter = 0
  
  function clickEvent(){
    clickCounter++;
    console.log("You clicked this", clickCounter)
   const inputVarible = document.getElementById("input-id"); 
   console.log(inputVarible.value);
   inputVarible.value = "";
   
  }
  let changeCounter = 0
  function changeEvent(){
    changeCounter++;
    console.log("You changed this", changeCounter)
  }
  
  
  let addBtn = document.getElementById("btn-id")
  /////
  addBtn.addEventListener("click", ()=>{
    console.log("you have created a function")
  })












































    
        















