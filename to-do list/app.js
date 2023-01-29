const item = document.querySelector("#item");
const todo = document.querySelector("#to-do-box");



item.addEventListener(
    "keyup",
    function(event){
        if(event.key=="Enter") {
                addtodo(this.value);
                
                    savetodo();
                
            this.value = "";
        }
    }
)

const savetodo =()=>{
    const items = document.querySelectorAll(".note p");
    // console.log(items);
    const data = [];
    items.forEach(
        (item) => {
                data.push(item.innerHTML);
           
        }
    )
    // console.log(data);
    if(data.length === null ){
        localStorage.removeItem("items")
    }
    else {
        localStorage.setItem("items",JSON.stringify(data));
    }
}



const addtodo =(item)=>{
    const listitem = document.createElement("li");
    listitem.classList.add("note")
    listitem.innerHTML = `
    <p> ${item}</p>
    <i class="fas fa-times"></i>
    `;

    listitem.addEventListener(
        "click",
        function(){
            this.classList.toggle("done");
        }
        )

        listitem.querySelector("i").addEventListener(
            "click",
            function(){
                listitem.remove();  
                savetodo();   
               }
        )


    todo.appendChild(listitem);
}

(
    function() {
        const lsitems = JSON.parse(localStorage.getItem("items"));
        console.log(lsitems);
       
            lsitems.forEach(
                (lsitem) => {
                    addtodo(lsitem);
                }
            )
        }
    
)()






