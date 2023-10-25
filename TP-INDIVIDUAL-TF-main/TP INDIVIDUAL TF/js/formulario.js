const form = document.getElementById("form")
form.addEventListener('submit', function(event){
	event.preventDefault

	const customername = document.getElementById('customername').value.trim();
	const customerage = document.getElementById('customerage').value;
	const customerid = document.getElementById('customerid').value;
	const customermail = document.getElementById('customermail').value.trim();
	const customeradress = document.getElementById('customeradress').value.trim();
	const customerarea = document.getElementById('customerarea').value.trim();
	const customertel = document.getElementById('customertel').value;

	if(customername == " "){
		alert("Ingrese su nombre y apellido")
		return
	}

	if(!customername.includes(" ")){
		alert("Ingrese su nombre y apellido")
		return
	}

	if(customerage<18){
		alert("Debe ser mayor de edad para poder suscribirse")
		return
	}

	if(!customermail.includes("@")){
		alert("Ingrese una direccion valida")
		return
	}

	const Updates = {
		name: customername,
		age: customerage,
		id: customerid,
		email: customermail,
		adress: customeradress,
		area: customerarea,
		number: customertel,
	}

	console.log(Updates)

})