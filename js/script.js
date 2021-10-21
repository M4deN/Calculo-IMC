const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

const btn = document.querySelector('.btn');
const btnClean = document.querySelector('.btn-clean');
const msgError = document.querySelectorAll('.error');

const levels = document.querySelectorAll('.level');

const modal = document.querySelector('.modal');
const spanMsg = document.querySelector('.mensage');
const spanImc = document.querySelector('.imc');

function calcularIMC(){

  const pesoValor = parseFloat(inputPeso.value);
  const alturaValor = parseFloat(inputAltura.value.replace(',', '.'));
  const valorTotal = alturaValor*alturaValor;

  modal.classList.remove('active');

  modal.classList.remove('active');
  modal.classList.remove('abaixo-peso');
  modal.classList.remove('peso-normal');
  modal.classList.remove('sobrepeso');
  modal.classList.remove('obesidade-i');
  modal.classList.remove('obesidade-ii');
  modal.classList.remove('obesidade-iii');

  levels[0].classList.remove('abaixo-peso');
  levels[1].classList.remove('peso-normal');
  levels[2].classList.remove('sobrepeso');
  levels[3].classList.remove('obesidade-i');
  levels[4].classList.remove('obesidade-ii');
  levels[5].classList.remove('obesidade-iii');

  if (inputPeso.value === '') {
    msgError[0].classList.add('active');
  } else if (inputAltura.value === '') {
    msgError[1].classList.add('active');
  } else {
    modal.classList.add('active');
    
    let imc = pesoValor / valorTotal.toFixed(4);
    imc = imc.toFixed(2);

    if (imc <= 18.5) {
      levels[0].classList.add('abaixo-peso');
      modal.classList.add('abaixo-peso');
      spanMsg.innerHTML = 'Cuidado! '
      spanImc.innerHTML = imc + ' 🤨 ';
    
    } else if (imc >= 18.6 && imc <= 24.9) {
      levels[1].classList.add('peso-normal');
      modal.classList.add('peso-normal');
      spanMsg.innerHTML = 'Parabéns! '
      spanImc.innerHTML = imc + ' 👏 ';

    } else if (imc >= 25 && imc <= 29.9) {
      levels[2].classList.add('sobrepeso');
      modal.classList.add('sobrepeso');
      spanMsg.innerHTML = 'Tudo bem. 😐 '
      spanImc.innerHTML = imc;

    } else if (imc >= 30 && imc <= 34.9) {
      levels[3].classList.add('obesidade-i');
      modal.classList.add('obesidade-i');
      spanMsg.innerHTML = 'Atenção! '
      spanImc.innerHTML = imc + ' 😦 ';
      
    } else if (imc >= 35 && imc <= 39.9) {
      levels[4].classList.add('obesidade-ii');
      modal.classList.add('obesidade-ii');
      spanMsg.innerHTML = 'Alerta! '
      spanImc.innerHTML = imc + ' 😨 ';

    } else if (imc >= 40) {
      levels[5].classList.add('obesidade-iii');
      modal.classList.add('obesidade-iii');
      spanMsg.innerHTML = 'Procure um médico!!! '
      spanImc.innerHTML = imc + ' 😱 ';
      
    }

    msgError.forEach((error) => {
      error.classList.remove('active');
    })
  }
}

btn.addEventListener('click', calcularIMC);

function getPesoValue() {

  const regexp = /[a-zA-Z]/g;
  inputPeso.value = inputPeso.value.replace(regexp, '');
}

function getAlturaValue() {
  
  const regexp = /[a-zA-Z]/g;
  inputAltura.value = inputAltura.value.replace(regexp, '');  

  if (inputAltura.value >= 3) {
    const p1 = inputAltura.value.substring(0, 1);
    const p2 = inputAltura.value.substring(1);
    newValor = p1 + ',' + p2;

    inputAltura.value = newValor;
  }  
}

inputPeso.addEventListener('keyup', getPesoValue);
inputAltura.addEventListener('keyup', getAlturaValue);

function cleanValues(event){
  event.preventDefault();

  modal.classList.remove('active');
  modal.classList.remove('abaixo-peso');
  modal.classList.remove('peso-normal');
  modal.classList.remove('sobrepeso');
  modal.classList.remove('obesidade-i');
  modal.classList.remove('obesidade-ii');
  modal.classList.remove('obesidade-iii');

  inputAltura.value = '';
  inputPeso.value = '';

  spanMsg.innerHTML = ''
  spanImc.innerHTML = '';

  levels[0].classList.remove('abaixo-peso');
  levels[1].classList.remove('peso-normal');
  levels[2].classList.remove('sobrepeso');
  levels[3].classList.remove('obesidade-i');
  levels[4].classList.remove('obesidade-ii');
  levels[5].classList.remove('obesidade-iii');
}

btnClean.addEventListener('click', cleanValues);
