const text = document.getElementById("text");
const btn = document.getElementById("btn");
const div = document.getElementById("list");
const clearItems = document.getElementById("clear-items");
const check = document.getElementById("check");
const trash = document.getElementById("trash");

let product = "";

let createList = () => {
    if(text.value != ""){
        let str = text.value;
        let value = str.charAt(0).toUpperCase() + str.slice(1);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class","list-content");
        let p = document.createElement("p");
        p.setAttribute("class","product");
        p.textContent = value;
        let trash = document.createElement("i");
        trash.setAttribute("class","fa-solid fa-trash");
        trash.setAttribute("id","trash");
        let check = document.createElement("i");
        check.setAttribute("class","fa-solid fa-circle-check");
        check.setAttribute("id","check");
        
        newDiv.append(p);
        newDiv.append(trash);
        newDiv.append(check);
        div.append(newDiv);
        text.value = ""
        trash.addEventListener('click',eliminarTarea)
        check.addEventListener('click',completarTarea)
    }

};

btn.addEventListener("click", () => {
    createList()
});
clearItems.addEventListener("click", () => {
    div.innerHTML = "";
})
function completarTarea(e){
    let tarea = e.target.previousElementSibling.previousElementSibling;;
    tarea.classList.toggle('completada')
}
function eliminarTarea(e){
    let tarea = e.target.parentNode;
    tarea.remove();
}

text.addEventListener('keydown',(e) =>{
    if(e.key === "Enter"){
        createList();
    }
})

