document.addEventListener('DOMContentLoaded', () => {
    const refreshButton = document.getElementById('refreshButton');
    const acquistaButton = document.getElementById('acquistaButton');
    const usaButton = document.getElementById('usaButton');
    const infoButton = document.getElementById('infoButton');

    if (refreshButton) {
        refreshButton.addEventListener('click', () => {
            location.reload();  // Ricarica la pagina
        });
    }

    if (acquistaButton) {
        acquistaButton.addEventListener('click', () => {
            alert('Acquista un nuovo biglietto.');
        });
    }

    if (usaButton) {
        usaButton.addEventListener('click', () => {
            alert('Biglietto usato!');
        });
    }

    if (infoButton) {
        infoButton.addEventListener('click', () => {
            alert('Informazioni sul biglietto.');
        });
    }
});
