let shporta = [];
let totali = 0;

function shtoNeShporte(emriProduktit, cmimiProduktit) {
    shporta.push({ emri: emriProduktit, cmimi: cmimiProduktit });
    totali += cmimiProduktit;

    
    shfaqShporten();
}

function shfaqShporten() {
    let shportaLista = document.getElementById("shporta-lista");
    let totaliSpan = document.getElementById("totali");

    
    shportaLista.innerHTML = "";


    shporta.forEach(function (produkt) {
        let produktItem = document.createElement("li");
        produktItem.textContent = produkt.emri + " - $" + produkt.cmimi;
        shportaLista.appendChild(produktItem);
    })

    totaliSpan.textContent = totali;
}

function perfundoPorosine() {
    alert("Porosia është përfunduar me sukses!");
    

}