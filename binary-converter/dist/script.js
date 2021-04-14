var valorBinario = [];

var resultado = 0;

var testar = document.getElementsByName("selector");

function converter() {
  //var testar = document.getElementsByName("selector");

  if (testar[0].checked == true) {
    resultado = 0;

    var getBinario = document.querySelector("#valorBase");
    getBinario = getBinario.value;

    valorBinario = getBinario.split("");

    var j = valorBinario.length - 1;

    bloco_testaImprime: {
      for (i in valorBinario) {
        if (valorBinario[i] == 0 || valorBinario[i] == 1) {
          resultado += valorBinario[i] * Math.pow(2, j);
          j--;
        } else {
          imprimeErro(0);
          break bloco_testaImprime;
        }
      }
      imprimeResultado(1);
      if (resultado > 999999) {
        var imprime = document.querySelector("#resultado");
        imprime.style.height = "70px";
      }
    }
    resultado = 0;
  } else {
    if (testar[1].checked == true) {
      var decimal = document.querySelector("#valorBase");
      decimal = decimal.value;

      if (isNaN(decimal)) {
        imprimeErro(1);
      } else {
        var binario = [];

        while (decimal > 0) {
          binario.push(decimal % 2);
          decimal = parseInt(decimal / 2);
        }

        resultado = binario.reverse().join("");

        imprimeResultado(0);

        if (binario.length > 6) {
          var imprime = document.querySelector("#resultado");
          imprime.style.height = "70px";
        }
      }
    } else {
      var imprime = document.querySelector("#resultado");
      imprime.style.height = "70px";
      imprime.textContent = `Selecione o Tipo de valor`;
    }
  }
}

function imprimeResultado(i) {
  var imprime = document.querySelector("#resultado");
  imprime.style.height = "35px";
  imprime.textContent = `Valor ${testar[i].value} = ${resultado}`;
}

function imprimeErro(i) {
  var imprime = document.querySelector("#resultado");
  imprime.style.height = "70px";
  imprime.textContent = `Valor inserido não é ${testar[i].value}`;
}