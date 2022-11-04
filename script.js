 
var botaoAdic = document.querySelector(".caixa-botao");
botaoAdic.addEventListener("click",function(event){
    event.preventDefault();

    var form = document.querySelector("form");
    var trs = document.querySelector("ul")
    var tarefa = document.querySelector("#adiciona")



    
    var tarefas = form.texto.value;

    if(tarefas == "")return
    
    var tarefaul = document.createElement("ul")

    var tarefali = document.createElement("li")

    var del = document.createElement("button")

    var x = document.createElement("p")

    x = document.createTextNode("x")

    del.classList.add("delete")


    tarefali.textContent = tarefas;
    tarefali.classList.add("tarefas")


    trs.appendChild(tarefali)

    tarefali.appendChild(del)

    del.appendChild(x)

    tarefali.onclick = function (event) {
        if(event.target.classList.contains('delete')){
            if (confirm("Deseja deletar esse item?")){
                console.log("remove item")
                event.target.parentElement.remove()
            }

        }

    }

    

   
   



    
})

    


  
