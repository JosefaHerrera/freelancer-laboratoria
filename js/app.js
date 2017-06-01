/*
 * Archivo principal de JS
 */


/*MODAL EJEMPLO BLANCA*/
(function main() {
	// Array.from para que reconozca la clase como un arreglo
    var boxes = Array.from(document.getElementsByClassName('col-4'));
    var modal = document.getElementById('col-4-modal');
    var bodyModal, close, img;
    boxes.forEach(function(box) {
        box.addEventListener('click', function() {
            // Borro todo lo que esta dentro del modal
            modal.innerHTML = '';
            bodyModal = document.createElement('div');
            bodyModal.classList.add('modal-body');
            bodyModal.innerHTML = box.innerHTML;

            modal.appendChild(bodyModal);
            modal.classList.remove('hide');

            close = document.createElement('div');
            close.classList.add('close');

            img = document.createElement('img');
            img.setAttribute('src', 'http://tojaeurope.com/gallery/Close-icon.png');

            
            title = document.createElement("h2");
                title.setAttribute("class", "title");
            text = document.createTextNode("PROYECT TITLE");
            

            
            
            


            bodyModal.appendChild(title);
            


            title.appendChild(text);
            close.appendChild(img);
            modal.appendChild(close);


            close.addEventListener('click', function() {
                modal.classList.add('hide');
            });

        });
    });

    var close = document.querySelector('#box-services-modal .close');
    close.addEventListener('click', function() {
        modal.classList.add('hide');
    });


})();



/********VALIDACIONES*********/


//validar nombre
		function validarNombre(){
		var nombre = document.getElementById('nombrecito').value; //valor ingresado al input en el id='name'
		     //validar que nombre no esté vacío
		if(nombre === "" || nombre === undefined || nombre.length === 0){
			alert("Error, debe ingresar nombre");
			//validar que 1° caracter sea mayúscula
		}else if(nombre.charAt(0) != nombre.charAt(0).toUpperCase()){
			alert("Error, el nombre debe comenzar con mayúscula");
			//validar que sean solo letras
		}else if(/[0-9]/.test(nombre)){
			alert("Error, no debe ingresar números")
		}else{
			console.log("Nombre ingresado correctamente")
		}
	}
	nombre();


//validar correo

	function validarCorreo(){
        var correo = document.getElementById('input-email').value;
        if(correo === null || correo.length === 0 || /^\s+$/.test(correo)){
            alert("campo obligatorio");
        }else if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(correo)){
            alert("Debe ingresar un Email válido");      
        }
    };
    validarCorreo();

//validar Telefono
	function validarPhone(){
		var num=document.getElementById("phone").value;
		if(num.length!=9){
			alert("Debe ingresar un número celular de 9 dígitos");
		}else{
			var text=document.getElementById("phone");
			alert("Numero ingresado");
		}
	};
	validarPhone();



