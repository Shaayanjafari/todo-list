let input=document.querySelector("input");
let btn=document.querySelector("button");
let list=document.querySelector("ul");

btn.addEventListener("click",()=>{
    if(!input.value == " "){
      let jomle=tabdil(input.value);
      jomle.innerHTML +=`<span class="trsh"><i class="fa-solid fa-trash"></i></span>`;
      list.appendChild(jomle);
      input.value="";
    }
});

list.addEventListener('click',(e)=>{
  console.log(e.target.nodeName)
  if(e.target.nodeName ==='I'){
    e.target.parentElement.parentElement.style='display:none';
  }
  if(e.target.nodeName==='LI'){
    e.target.classList.toggle('done');
  }
})


function tabdil(text){
   let element=document.createElement('li');
   element.textContent=text;
   return element;
};
