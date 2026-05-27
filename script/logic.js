function enviarResena() {

    let mail = document.getElementById("mail").value.trim();
    let texto = document.getElementById("texto").value.trim();

    let estrellasSeleccionadas =
        document.querySelector("input[name='star']:checked");

    if (!mail || !texto || !estrellasSeleccionadas) {
        alert("Completá todos los campos.");
        return;
    }

    let cantidad = parseInt(estrellasSeleccionadas.value);

    let estrellas = "⭐".repeat(cantidad);

    let meses = [
        "ene.",
        "feb.",
        "mar.",
        "abr.",
        "may.",
        "jun.",
        "jul.",
        "ago.",
        "sep.",
        "oct.",
        "nov.",
        "dic."
    ];

    let hoy = new Date();

    let dia = String(hoy.getDate()).padStart(2, "0");
    let mes = meses[hoy.getMonth()];
    let anio = hoy.getFullYear();

    let fecha = dia + " " + mes + " " + anio;

    let div = document.createElement("div");

    div.classList.add("comentario");

    div.innerHTML = `
        <div class="estrellas">${estrellas}</div>
        <div class="fecha">${fecha}</div>
        <p>${texto}</p>
    `;

    let lista = document.getElementById("lista-resenas");

    lista.insertBefore(div, lista.firstChild);

    document.getElementById("mail").value = "";
    document.getElementById("texto").value = "";

    document
        .querySelectorAll("input[name='star']")
        .forEach(function(r){
            r.checked = false;
        });
}