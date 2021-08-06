
// add a task //

function addItem (){
    const input = document.getElementById("nuevoItem").value;
    const li = document.createElement("li");
    const t= document.createTextNode(input);
    const deletebtn = document.createElement('span')
    deletebtn.textContent = ("\u00D7");  
    deletebtn.addEventListener("click", removeItem); 
    deletebtn.className = "close";
    li.appendChild(deletebtn);
    li.appendChild(t);

    if (input === '') {
        alert("Please add a task!");
      } else {
        document.getElementById("lista").appendChild(li);
          }
      }
      document.getElementById("lista").value = "";
                      
    
   // agregar tarea presionando Enter//
   const contenido = document.getElementById("nuevoItem");
    contenido.addEventListener("keyup", (event) => {
        if (event.key === "Enter" ) {
        addItem();
        document.getElementById("lista").value = "";
                  
      }
    });

  
  
    //remove Task//
 
function removeItem (){ 
   const lista = document.getElementById("lista");
  const quitarItem = document.querySelector("li");
  if(quitarItem)
  lista.removeChild(quitarItem);   
}

// cross as done! //


 const list = document.querySelector("ul");
 list.addEventListener('click', function(ev){
   console.log(Event)
   if (ev.target.tagName ==="LI") {
     ev.target.classList.toggle("done");
   }
 },false);


 
 


