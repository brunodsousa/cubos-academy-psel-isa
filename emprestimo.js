function solucao(ganhos, serasaScore, mesesParaPagar) {
    //seu código aqui
      
      var juros = 0;
  
      if (serasaScore < 300) {
          var juros = 3;
      } else if (serasaScore < 700) {
          var juros = 9;
      } else {
          var juros = 15;
      } 
  
      var parcela = (ganhos * 3 + (ganhos * (juros / 100))) / mesesParaPagar;
  
      console.log(parcela);
  }
