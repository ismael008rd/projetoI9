button=document.getElementById('btnSoma')

button.addEventListener("click", function somar(){
  const credito = parseFloat(document.getElementById('credito').value)
  const debito = parseFloat(document.getElementById('debito').value)
   const somar = debito + credito
 document.getElementById('result').value= somar

 

  
})


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function calcularQuantidadeFinalComDesconto(total, preco) {
  if (total <= 0 || preco <= 0) {
      return 0;
  }
  

  var quantidadeFinal = Math.ceil(total / preco);
  var valorTotalFinal = quantidadeFinal * preco;
  var desconto = valorTotalFinal - total;

  quantidadeFinal = Number(quantidadeFinal.toFixed(0));
  desconto = Number(desconto.toFixed(2));

  return { quantidadeFinal, desconto };
}

function exibirResultados() {
     
  var total = parseFloat(document.getElementById('total').value);

  var preco = parseFloat(document.getElementById('preco').value);

  var resultado = calcularQuantidadeFinalComDesconto(total, preco);

  document.getElementById('quantidadeFinal').textContent = "Quantidade Final: " + resultado.quantidadeFinal;
  document.getElementById('desconto').textContent = "Desconto: " + resultado.desconto;
}

var botaoAd = document.getElementById('bora')

botaoAd.addEventListener("click",function adicionarValor(){
  
  const credito = parseFloat(document.getElementById('credito').value)
  const debito = parseFloat(document.getElementById('debito').value)
   const somar = debito + credito
  var inputElement = document.getElementById('total')
  var valorAtual = parseFloat(inputElement.value=0)
  var valorASerAcionado = somar
  var novoValor= valorAtual+valorASerAcionado
  
  inputElement.value = novoValor
})



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////deu Nan

// function calcularQuantidadeFinalComDesconto(total, preco) {
//   total = parseFloat(total);
//   preco = parseFloat(preco);

//   if (isNaN(total) || isNaN(preco) || total <= 0 || preco <= 0) {
//       return { quantidadeFinal: 0, desconto: 0 };
//   }

//   var quantidadeFinal = Math.ceil(total / preco);
//   var valorTotalFinal = quantidadeFinal * preco;
//   var desconto = valorTotalFinal - total;

//   quantidadeFinal = Number(quantidadeFinal.toFixed(0));
//   desconto = Number(desconto.toFixed(2));

//   return { quantidadeFinal, desconto };
// }

// function exibirResultados() {
//   var total = document.getElementById('total').value;
//   var preco = document.getElementById('preco').value;

//   var resultado = calcularQuantidadeFinalComDesconto(total, preco);

//   document.getElementById('quantidadeFinal').textContent = "Quantidade Final: " + resultado.quantidadeFinal;
//   document.getElementById('desconto').textContent = "Desconto: " + resultado.desconto;
// }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

