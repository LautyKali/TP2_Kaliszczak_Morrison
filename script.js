let toDoList = [
    {
        tarea: "Hacer tarea de matematica",
        realizado: false,
        fechaCreacion: Date.now(),
        fechaRealizado: new Date
    },
    {
        tarea: "Leer Judia",
        realizado: false,
        fechaCreacion: Date.now(),
        fechaRealizado: new Date
    }
];

let input = document.getElementById("tarea");
let button = document.getElementById("enviar");
//button.onclick = agregarTarea(input.value);

const agregarTarea = nuevaTarea => {    
    toDoList.push({
        tarea: nuevaTarea,
        realizado: false,
        fechaCreacion: Date.now(),
        fechaRealizado: new Date
    })
};

let div = document.getElementById("toDoList");
div.innerHTML = toDoList.map(toDo => `<label><input type="checkbox"> ${toDo.tarea}</label><br>`).join("");

console.log(toDoList);