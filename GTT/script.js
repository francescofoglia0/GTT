document.getElementById('refreshButton').addEventListener('click', function() {
    location.reload();  // Ricarica la pagina
});

document.getElementById('usaButton').addEventListener('click', function() {
    alert('Biglietto usato!');
});

document.getElementById('infoButton').addEventListener('click', function() {
    alert('Informazioni sul biglietto.');
});

document.getElementById('acquistaButton').addEventListener('click', function() {
    alert('Acquista un nuovo biglietto.');
});
