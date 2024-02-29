function loadSelects() {
    const selects = `
        <select class="form-select">
            <option value="NA">NA</option>
            <option value="MB">MB</option>
            <option value="B">B</option>
            <option value="R">R</option>
            <option value="I">I</option>
        </select>
    `
    
    const selectsElem = document.querySelectorAll(".mencaoSelect");
    selectsElem.forEach((e) => {
        e.innerHTML = selects;
    })
}

//limpar
function nettoyer() {
    const selectsElems = document.querySelectorAll(".mencaoSelect select");
    const outputs = {
        mb: document.querySelector("#mbCount"),
        b: document.querySelector("#bCount"),
        r: document.querySelector("#rCount"),
        i: document.querySelector("#iCount")
    }

    selectsElems.forEach((e) => {
        e.selectedIndex = 0;
    })

    outputs.mb.innerHTML = 0;
    outputs.b.innerHTML = 0;
    outputs.r.innerHTML = 0;
    outputs.i.innerHTML = 0;
}

//calcular
function berechnung() {
    const outputs = {
        mb: document.querySelector("#mbCount"),
        b: document.querySelector("#bCount"),
        r: document.querySelector("#rCount"),
        i: document.querySelector("#iCount")
    }
    const selectsElems = document.querySelectorAll(".mencaoSelect select");

    let mbs=0;
    let bs=0;
    let rs=0;
    let is=0;
    selectsElems.forEach((e) => {
        if (e.value === "MB") { mbs++; return;}
        if (e.value === "B") { bs++; return;}
        if (e.value === "R") { rs++; return;}
        if (e.value === "I") { is++; return;}
    })

    outputs.mb.innerHTML = mbs;
    outputs.b.innerHTML = bs;
    outputs.r.innerHTML = rs;
    outputs.i.innerHTML = is;
}

function load() {
    loadSelects();

    // Load buttons
    document.querySelector("#reset").addEventListener("click", nettoyer);
    document.querySelector("#calculate").addEventListener("click", berechnung);
}

load();