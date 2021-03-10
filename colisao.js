function solucao(velocidade, aceleracao, distanciaObjeto) {
    //seu código aqui
      var distancia = - velocidade * velocidade / (2 * aceleracao);
  
      if (distanciaObjeto < distancia ) {
          console.log("COLISAO A FRENTE"); 
      } else if (distanciaObjeto === distancia) {
          console.log("NAO ACELERE"); 
      } else if (distanciaObjeto > distancia) {
          console.log("CAMINHO SEGURO"); 
      } 
  }
  