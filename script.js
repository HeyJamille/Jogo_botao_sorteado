  var cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 
  13, 14, 15, 16, 17, 18, 19, 20];
  var correto = Math.floor(Math.random() * cartas.length);
              
  for (let k = 1; k<=20; k++){
    const botao = document.createElement("button");
    botao.classList.add('classBotao');
    botao.value = [k];
    botao.innerHTML = [k];
    
  count = 0;
  botao.addEventListener("click", function(){
    if(botao.value == correto){
      this.style.backgroundColor = "green";
      count = count + 1;
      entrada.innerHTML = "";
      jogo.innerHTML = "";
      resultado.innerHTML = "";
      resultado1.innerHTML = "Parabéns, você encontrou o botão sorteado!"+"<br>"+"O total de vezes clicados foram: "+count+"&nbsp"+"vezes.";
    }
    else{
      this.style.backgroundColor = "red";
      count = count + 1;
      count1 = count;
      resultado.innerHTML = "<br>"+"Ops, você não encontrou o botão sorteado, tente novamente."+"("+count1+")";
      //alert("Ops, você não encontrou o botão sorteado, tente novamente.");
      botao.disabled = true;
    } 
  });

  botao.addEventListener("mouseover", function() {
    this.style.border = "3px solid orange";
  });  
            
  botao.addEventListener("mouseout", function() {
    this.style.border = "1px solid black";
  });  
            
  const jogo = document.querySelector("#jogo");
  jogo.appendChild(botao);

  }

  btnReiniciar = document.querySelector("#idBtn");
  idBtn.addEventListener("click", function() {
    alert("O jogo será reiniciado.");
    location.reload();
  });
