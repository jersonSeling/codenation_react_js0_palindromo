const resultado = document.querySelector("#resultado");

//const teste = "Socorram-me, subi no ônibus em Marrocos";
//const teste = "A Rita, sobre vovô, verbos atira.";
const teste = "Olé! Maracujá, caju, caramelo.";

function retirarAcento(palavra)
{  
  const com_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  const sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  let nova = '';
  for(let i = 0; i < palavra.length; i++) {

	const caracter = palavra.charAt(i);
	
  //cuidado ao usar string.search, ela usa regex!
  //https://stackoverflow.com/questions/39823619/javascript-check-if-string-contains-a-full-stop
    
    if (com_acento.indexOf(caracter) >= 0) {
      nova += sem_acento.charAt(com_acento.indexOf(caracter));	  
    }
    else {
      nova += caracter;
    }
	// console.log(nova);
  }
  return nova;
}

function retirarPontuacao(palavra)
{
  const pontuacao = ".,;:!?-";

  let nova = '';
  
  for(let i = 0; i < palavra.length; i++) {
    const caracter = palavra.charAt(i);
    if (pontuacao.indexOf(caracter) < 0) {
      nova += caracter;
    }
  }
  return nova;
}


const EhPalindromo = (valor) => {  

  const valMinusculo = valor.toLowerCase();
  
  const valSemPontuacao = retirarPontuacao(valMinusculo);
  
  const valSemAcento = retirarAcento(valSemPontuacao);
  
  const valArray = [...valSemAcento];
        
  const valArraySemEspaco = valArray.filter(el => (el !== " "));  
  
  const valFormatado = valArraySemEspaco.join("");  
  
  valArraySemEspaco.reverse();
  
  const valFormatadoReverso = valArraySemEspaco.join("");
   
  //return (v3 === v4) + " "+ v3 + " " + v4;
  
  if (valFormatado === valFormatadoReverso) {
    return "sim"
  } 
  else {
    return "não"
  };
}


resultado.textContent = EhPalindromo(teste);
