let toDoList = [
    {
        tarea: "Hacer tarea de matematica",
        realizado: false,
        fechaCreacion: new Date,
        fechaRealizado: null
    },
    {
        tarea: "Leer Judia",
        realizado: false,
        fechaCreacion: new Date,
        fechaRealizado: null
    }
];

let ul = document.getElementById("toDoList");
const mostrarList = () => {
    ul.innerHTML = toDoList.map(toDo => `<li><label><input id="check" type="checkbox"> ${toDo.tarea}</label></li>`).join("");
}
mostrarList();

let checkBox = document.getElementById("check");
checkBox.onclick = (e) => {
    if (checkBox.checked) {
        e.target.style.textDecoration = "line-through";
        console.log("tachado");
    }
}

let input = document.getElementById("tarea");
let button = document.getElementById("enviar");

button.onclick = () => {    
    if (input.value.length == 0) {
        input.style.border = "1px solid red";
        alert("Complete los datos");
    }
    else {
        ul.innerHTML = "";
        toDoList.push({
            tarea: input.value,
            realizado: false,
            fechaCreacion: Date.now(),
            fechaRealizado: new Date
        });
        /*let li = document.createElement("li");
        li.innerHTML = `<label><input class="check" type="checkbox"> ${input.value}</label>`;
        ul.appendChild(li);*/
        mostrarList();
        input.style.border = "1px solid black";
        input.value = "";
    }
};

console.log(toDoList);