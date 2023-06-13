function comprarTickets () {
    location.href='/TP/comprartickets';

const apuntadorABotonComprar = document.getElementById('comprartickets');

apuntadorABotonComprar.addEventListener('click',comprarTickets);

}

//variables
function Resumen() {
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const correo = document.getElementById("correo").value;
    const cantidad = parseInt(document.getElementById("cantidad").value);
    const categoria = document.getElementById("categoria").value;
    const precio = 200;
    var descuento;
  
    //descuentos por categoria
    if (categoria === "Estudiante") {
      descuento = 0.2;
    } else if (categoria === "Trainee") {
      descuento = 0.5;
    } else if (categoria === "Junior") {
      descuento = 0.85;
    }
  
    var total = cantidad * precio * descuento;
    document.getElementById("total").textContent = total.toFixed(2);
  
    //creamos objeto resumen con los datos ingresados
    var compraHTML = `
      <p><span>Nombre:</span> ${nombre}</p>
      <p><span>Apellido:</span> ${apellido}</p>
      <p><span>Correo electrónico:</span> ${correo}</p>
      <p><span>Cantidad:</span> ${cantidad}</p>
      <p><span>Categoría:</span> ${categoria}</p>
      <p><span>Total a Pagar: $${total.toFixed(2)}</span></p>
    `;
  
    //se muestran los datos
    document.getElementById("compra").innerHTML = compraHTML;
    document.getElementById("compraContainer").style.display = "block";
  }
  
  var btnAbrirPopUp = document.getElementById('btnresumen'),
    overlay = document.getElementById('overlay'),
    popup = document.getElementById('compraContainer'),
    btnCerrarPopUp = document.getElementById('btn-cerrar-popup');

    btnAbrirPopUp.addEventListener('click', function() {
        overlay.classList.add('active');
        
    });

    btnCerrarPopUp.addEventListener('click', function() {
        overlay.classList.remove('active');
    });

  