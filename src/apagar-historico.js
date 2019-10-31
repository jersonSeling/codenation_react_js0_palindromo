const buttonApagar = document.querySelector("#button-apagar");


function excluirEvent(event){
    event.preventDefault();

    const itemsHistorico = document.querySelectorAll('.container-item');
    itemsHistorico.forEach(el => el.remove());    
}

buttonApagar.addEventListener("click", excluirEvent);