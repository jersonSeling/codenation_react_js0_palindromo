const divGrid = document.querySelector('#grid');
const input = document.querySelector("input[type=text]");

function AdicionarItem(valor){

    if(!valor || valor.trim().length <= 0){
        //alert("Valor invalido")
        console.log("valor inválido");
        return
    } 

    const itemContainer = document.createElement('div');
    itemContainer.classList.add("container-item");

    const itemValor = document.createElement('div');
    itemValor.classList.add("item");
    itemValor.textContent = valor;

    const itemPalindromo = document.createElement('div');
    itemPalindromo.classList.add("item");
    itemPalindromo.textContent = EhPalindromo(valor);

    itemContainer.appendChild(itemValor);
    itemContainer.appendChild(itemPalindromo);
    divGrid.appendChild(itemContainer);
}

input.addEventListener("keyup", (event) =>{
    event.preventDefault()
    if(event.key === 'Enter'){
        AdicionarItem(input.value);
        input.value = "";
    }
})



//const teste = "Socorram-me, subi no ônibus em Marrocos";
//const teste = "A Rita, sobre vovô, verbos atira.";
//const teste = "Olé! Maracujá, caju, caramelo.";

