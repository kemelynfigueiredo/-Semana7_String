function createList(){
  var lista = document.getElementById('MinhaLista');
  //lista.innerHTML = '';
  var quant = document.getElementById('quant'); 
  var texto = document.getElementById('text');
  for(var i=1;i<=quant.value;i++){
    if(texto.value == ''){
      window.alert("Campo do texto está vazio!")
    }
    else{
      var item = document.createElement("li");
    var textoItem = document.createTextNode(texto.value+' '+(i));
    item.append(textoItem);
    document.getElementById("MinhaLista").appendChild(item);
    lista.append(item)   
    }
  }
}
