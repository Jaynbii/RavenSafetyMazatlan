document.getElementById("whatsappBtn").addEventListener("click", function() {
    const phone = "526694036411"; // +52 para México
    const message = encodeURIComponent("Hola, me gustaría saber más sobre sus servicios.");
    window.open(`https://wa.me/${phone}?text=${message}`, "_blank");

});

// Abrir imagen en modal
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

document.querySelectorAll(".galeria img").forEach(img => {
  img.addEventListener("click", () => {
    modal.style.display = "flex";
    modalImg.src = img.src;
  });
});

// Cerrar modal al hacer click en cualquier parte
modal.addEventListener("click", () => {
  modal.style.display = "none";
});
