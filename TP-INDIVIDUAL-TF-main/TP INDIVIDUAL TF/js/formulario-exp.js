const form = document.getElementById("form")
form.addEventListener('submit', function(event){
	event.preventDefault

	const sucursal = document.getElementById('sucursal').value;

	const sellername = document.getElementById('sellername').value.trim();


	const comments = document.getElementById('comments').value.trim();

	if(!sellername.includes(" ")){
		alert("Ingrese el nombre y apellido del vendedor")
		return
	}



    let selectedopcion
    if(document.querySelector('input[name="opcion"]:checked') == null){
        selectedopcion = "No seleccionado"
    }else{
        selectedopcion = document.querySelector('input[name="opcion"]:checked').value
    }



    const punt = [];
    document.querySelectorAll('input[name="punt"]:checked').forEach(function(checkbox) {
        punt.push(checkbox.value);
    });

    const puntgl = [];
    document.querySelectorAll('input[name="puntgl"]:checked').forEach(function(checkbox) {
        punt.push(checkbox.value);
    });






	const Experience = {
		local: sucursal,
		satisfaccion: selectedopcion,
		vendedor: sellername,
		puntaje_vendedor: punt,
		puntaje_tienda: puntgl,
		comentarios: comments,
	}

	console.log(Experience)

})