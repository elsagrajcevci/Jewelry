let shporta = [];
let totali = 0;

function shtoNeShporte(emriProduktit, cmimiProduktit) {
    shporta.push({ emri: emriProduktit, cmimi: cmimiProduktit });
    totali += cmimiProduktit;

    // Rifresko shfaqjen e shportës
    shfaqShporten();
}

function shfaqShporten() {
    let shportaLista = document.getElementById("shporta-lista");
    let totaliSpan = document.getElementById("totali");

    // Fshij të dhënat ekzistuese në shportë
    shportaLista.innerHTML = "";

    // Shto produkte të reja në shportë
    shporta.forEach(function (produkt) {
        let produktItem = document.createElement("li");
        produktItem.textContent = produkt.emri + " - $" + produkt.cmimi;
        shportaLista.appendChild(produktItem);
    })

    totaliSpan.textContent = totali;
}

function perfundoPorosine() {
    // Këtu mund të shtoni logjikën për përfundimin e porosisë
    alert("Porosia është përfunduar me sukses!");
    
    // Pastaj mund të bëni gjëra tjera, si të pastrohen produktet në shportë, të rifreskohet faqja, etj.
}