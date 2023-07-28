const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
 event.preventDefault();

 btn.value = 'Sending...';

 const serviceID = 'Escribe aqui tu informacion';
 const templateID = 'Escribe aqui tu informacion';

 emailjs.sendForm(serviceID, templateID, this)
  .then(() => {
    //btn.value = 'Send Email';
    //alert('Sent!');
  }, (err) => {
    btn.value = 'Hay un error en la consulta, favor de comunicarse con soporte de XY Booster';
    alert(JSON.stringify(err));
  });
});

function calcularSimulacion(event) {
  event.preventDefault();

  const monto = parseFloat(document.getElementById("monto").value);
  const plazo = parseInt(document.getElementById("plazo").value);
  const tasaFija = 0.40;

  // Verifica si el monto está dentro del rango permitido
  if (monto < 3000 || monto > 20000) {
    alert("El monto debe estar entre $3,000 y $20,000.");
    return;
  }

  const cuotaMensual = calcularCuotaMensual(monto, plazo, tasaFija);
  const totalIntereses = cuotaMensual * plazo - monto;

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = `
    <h2>Resultado de la simulaci\u00F3n:</h2>
    <p>Monto del pr\u00E9stamo: $${monto.toFixed(2)}</p>
    <p>Plazo en meses: ${plazo} meses</p>
    <p>Tasa de inter\u00E9s fija: ${tasaFija * 100}%</p>
    <p>Cuota mensual: $${cuotaMensual.toFixed(2)}</p>
    <p>Total a pagar: $${(cuotaMensual * plazo).toFixed(2)}</p>
    <p>Total intereses pagados: $${totalIntereses.toFixed(2)}</p>
  `;
      // Muestra el botón de redireccionamiento
      const resultadoDIV = document.getElementById("resultado");
      resultadoDIV.style.display = "block";
    // Muestra el botón de redireccionamiento
    const redireccionarBtn = document.getElementById("redireccionar");
    redireccionarBtn.style.display = "block";

// Envía el correo electrónico de consulta
enviarCorreoConsulta();


}



function enviarCorreoConsulta() {
  // Agrega aquí cualquier lógica adicional que desees antes de enviar el correo
  console.log('Enviando correo electrónico de consulta...');
}

function calcularCuotaMensual(monto, plazo, tasaFija) {
  const tasaMensual = tasaFija / 12;
  const cuota = (monto * tasaMensual) / (1 - Math.pow(1 + tasaMensual, -plazo));
  return cuota;
}

function redireccionar() {
  // Aquí puedes redireccionar a la URL deseada
  window.location.href = 'Escribe aqui tu informacion';
}



