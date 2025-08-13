document.getElementById("whatsappBtn").addEventListener("click", function() {
    const phone = "526694036411"; // +52 para México
    const message = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
});