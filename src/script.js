const resultado = document.querySelector("#resultado");

const teste = "Socorram-me, subi no ônibus em Marrocos";
//const teste = "A Rita, sobre vovô, verbos atira.";
//const teste = "Olé! Maracujá, caju, caramelo.";

function retiraAcento(palavra)
{
  const com_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
  const sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
  let nova = '';
  for(let i = 0; i < palavra.length; i++) {
    //const caracter = palavra.substr(i, 1);
	const caracter = palavra.charAt(i);
	
	if (caracter == "."){
	  console.log(caracter);
	  console.log(com_acento.search(caracter));
	}
	
    if (com_acento.search(caracter) >= 0) {
      nova += sem_acento.charAt(com_acento.search(caracter));	  
    }
    else {
      nova += caracter;
    }
	console.log(nova);
  }
  return nova;
}

function retiraPontuacao(palavra)
{
  const pontuacao = ".,;:!?-";

  let nova = '';
  
  for(let i = 0; i < palavra.length; i++) {
    const caracter = palavra.substr(i, 1);
    if (pontuacao.search(caracter) < 0) {
      nova += caracter;
    }
  }
  return nova;
}


const EhPalindromo = (valor) => {
  
  //remover as pontuações primeiro por causa disto:
  //https://stackoverflow.com/questions/39823619/javascript-check-if-string-contains-a-full-stop
  const v0 = retiraPontuacao(valor);
  
  const v01 = retiraAcento(v0).toLowerCase();
  //return v01;
  
  const v1 = [...v01]
        
  const v2 = v1.filter(el => (el !== " "));  
  
  const v3 = v2.join("");  
  
  v2.reverse();
  
  const v4 = v2.join("");
   
  return (v3 === v4) + " "+ v3 + " " + v4;
  
  if (v3 === v4) {
    return "sim"
  } 
  else {
    return "não"
  };
}


resultado.textContent = EhPalindromo(teste);
