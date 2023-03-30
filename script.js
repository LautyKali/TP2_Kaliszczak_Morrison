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
    ul.innerHTML = "";
    toDoList.forEach(element => {
        let li = document.createElement("li");
        if (element.realizado) {
            li.innerHTML = `<label id="label"><input id="check" value="${element.tarea}" type="checkbox" checked>${element.tarea}<button id="borrar" type="button" class="btn-close btn-sm" aria-label="Close"></button></label>`;
            li.firstChild.style.textDecoration = "line-through";
        } else {
            li.innerHTML = `<label id="label"><input id="check" value="${element.tarea}" type="checkbox">${element.tarea}<button id="borrar" type="button" class="btn-close btn-sm" aria-label="Close"></button></label>`;
            li.firstChild.style.textDecoration = "none";
        }
        ul.appendChild(li);
    });
    let inputs = document.querySelectorAll(`input[type="checkbox"]`);
    inputs.forEach(element => {
        element.onclick = (e) => {
            if (e.target.checked) {
                let index = busquedaLineal(e.target.value);
                toDoList[index].realizado = true;
                toDoList[index].fechaRealizado = new Date;
                e.target.parentElement.style.textDecoration = "line-through";
            }
            else {
                let index = busquedaLineal(e.target.value);
                toDoList[index].realizado = false;
                toDoList[index].fechaRealizado = null;
                e.target.parentElement.style.textDecoration = "none";
            }
        };
    });
    let borrar = document.querySelectorAll("#borrar");
    borrar.forEach(element => {
        element.onclick = (e) => {
            let index = busquedaLineal(e.target.parentElement.innerText);
            console.log(e.target.parentElement.innerText);
            toDoList.splice(index, 1);
            console.log(toDoList);
            mostrarList();
        };
    });
}

mostrarList();

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
            fechaCreacion: new Date,
            fechaRealizado: null
        });
        mostrarList();
        input.style.border = "1px solid black";
        input.value = "";
    }

    console.log(toDoList);
};

let horaMax = document.getElementById("horaMax");
let p = document.createElement("p");
document.body.appendChild(p);
horaMax.onclick = (e) => {
    let tiempoEnRealizar = [];
    toDoList.forEach(element => {
        if (element.realizado) {
            tiempoEnRealizar.push({
                tiempo: element.fechaRealizado - element.fechaCreacion,
                tarea: element.tarea
            });
        }
    });
    let arrayOrdenado = tiempoEnRealizar.sort((e1, e2) => e1.tiempo - e2.tiempo);
    p.innerHTML = `La tarea que se realizo mas rapido fue: ${arrayOrdenado[0].tarea}`;
    p.setAttribute("class", "display-4");
}

const busquedaLineal = tarea => {
    let i = 0;
    let pos = -1;
    while (i < toDoList.length && pos === -1) {
        if (toDoList[i].tarea === tarea) {
            pos = i;
        } else {
            i++;
        }
    }
    return pos;
}