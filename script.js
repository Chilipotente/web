document.getElementById('yesButton').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

document.getElementById('noButton').addEventListener('click', function() {
    window.location.href = 'no.html';
});

// Redirigir a la página de razones
document.getElementById('razonesButton').addEventListener('click', function() {
    window.location.href = 'razones.html';
});

// Redirigir de vuelta a la página "Sí"
document.getElementById('volverButton').addEventListener('click', function() {
    window.location.href = 'yes.html';
});

document.body.style.overflow = "auto";
