function cambiarFondo() {
  const hora = new Date().getHours();
  if (hora >= 6 && hora < 18) {
    document.body.style.backgroundColor = "#FFD700"; // Amarillo
    console.log("Es de día");
  } else {
    document.body.style.backgroundColor = "#2F4F4F"; // Gris oscuro
    console.log("Es de noche");
  }
}