/*
 * Archivo principal de JS
 */

// Array.from para que reconozca la clase como un arreglo
/*MODAL EJEMPLO BLANCA*/
(function main() {
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