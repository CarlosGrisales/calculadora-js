const display = document.querySelector("#display");
const button = document.querySelectorAll("button");

button.forEach((items)=>{
    items.onclick=()=>{
        if(items.id == "clear"){
            display.innerText = "";
        } else if(items.id == "backspace"){
            // toString convierte a cadenas de texto
            let string = display.innerText.toString();
            // substr cuenta los caracteres de una cadena de texto
            display.innerText = string.substr(0, string.length-1);
        } else if(display.innerText !="" && items.id == "equal"){
            // eval realiza las operaciones matematicas
            display.innerText = eval(display.innerText);
        } else if(display.innerText == "" && items.id == "equal"){
            display.innerText = "NULL";
            setTimeout(()=>(display.innerText = ""), 2000);
        } else{display.innerText += items.id}

    }
});


