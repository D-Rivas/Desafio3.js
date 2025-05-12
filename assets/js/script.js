
// <script>
//function pintar(){
//ele.style.backgroundColor = 'yellow'
//}
//const ele = document.getElementById("ele1")
//ele.addEventListener("click", pintar);
//</script>

// Modifica el código anterior para poder pasarle un color como argumento a la
//función pintar. El color debe ser verde (green) por defecto, al hacer clic en el
//párrafo se debe pasar amarillo como color.

const pintar = (elemento, color = "green") => {
 elemento.style.backgroundColor = color;
};

const ele = document.getElementById("ele1");
ele.addEventListener("click", () => pintar(ele, "yellow"));
