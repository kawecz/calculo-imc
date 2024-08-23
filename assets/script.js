
   function imc() {
        let altura = document.getElementById('number1')
        let peso = document.getElementById('number2')
        let resposta = document.getElementById('res')
        let imc = Number(peso.value) / (Number(altura.value) * Number(altura.value))
        let status = document.getElementById('status')
       
        if(altura.value.length == 0 || peso.value.length == 0 || altura.value < 0 && peso.value < 0) {
            alert('Preencha os dados corretamente!')
        } else {
            resposta.innerHTML = ''
            status.innerHTML = ''
            resposta.innerHTML += `<br> O seu IMC é de: ${imc.toFixed(2)}`
            
        } if ( imc < 16.9) {
            status.innerHTML += `<br>Muito abaixo do peso!`
            status.style.color = 'red'
        }  else if (imc > 16.9 && imc < 18.4) {
            status.innerHTML += `Muito abaixo do peso`
            status.style.color += 'orange'
        } else if (imc > 18.4 && imc < 24.9) {
            status.innerHTML += `Peso normal`
            status.style.color = 'green'
        } else if (imc > 24.9 && imc < 29.9) {
            status.innerHTML += `Acima do peso`
            status.style.color = 'orange'
        } else if (imc > 29.9 && imc < 34.9) {
            status.innerHTML += `Obesidade grau I`
            status.style.color = 'red' 
        } else if (imc > 34.9 && imc < 40) {
            status.innerHTML += `Obesidade grau II`
            status.style.color = 'red'
        } else if (imc > 40) {
            status.innerHTML += `Obesidade grau III`
            status.style.color = 'red'
        }
            altura.value = ''
            peso.value = ''
            altura.focus()
          
    }