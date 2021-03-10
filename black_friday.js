function solucao(produtos, valorMaximo, avaliacaoMinima) {
// seu código aqui
   var presentes = produtos.filter(function(obj) {
      return obj.valor <= valorMaximo && obj.avaliacao >= avaliacaoMinima} )
      console.log(presentes);
}
