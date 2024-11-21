window.onload=init;
function init()
{
    console.log("window loaded");
}

let state = {
    kclothes: 0,
    khair: 0,
    kshoes: 0,

    bclothes: 0,
    bhair: 0,
    bshoes: 0
};


// Nakiki Functions

function nextkkhair() {
    console.log("inside next kkhair", state.khair)
    let hair = document.querySelector("#kkhair")
    if(state.khair<2){
        state.khair++;
        console.log("updated khair",state.khair)
        console.log(state.khair)
        hair.setAttribute("class", `kkhair${state.khair}`)
        console.log(hair.getAttribute("class"))
    }
    else if (state.khair == 2){
        console.log("reset khair",state.khair)
        state.khair = 0
        hair.setAttribute("class", "nakey")
    }
}

function nextkkshoes() {
    console.log("inside next kkshoes")
    console.log(state.kshoes)
    let shoes = document.getElementById("kkshoes")
    if(state.kshoes<2){
        state.kshoes++;
        console.log(state.kshoes)
        shoes.setAttribute("class", `kkshoes${state.kshoes}`)
    }
    else if(state.kshoes == 2){
        state.kshoes = 0
        shoes.setAttribute("class", "nakey")
    }
}

function nextkkclothes() {
    console.log("inside next kkclothes")
    console.log(state.kclothes)
    let clothes = document.getElementById("kkclothes")
    if(state.kclothes<2){
        state.kclothes++;
        console.log(state.kclothes)
        clothes.setAttribute("class", `kkclothes${state.kclothes}`)
    }
    else if(state.kclothes == 2){
        state.kclothes = 0
        clothes.setAttribute("class", "nakey")
    }
}

// Byung Ho Functions

function nextbhhair() {
    console.log("inside next bhhair", state.bhair)
    let hair = document.querySelector("#bhhair")
    if(state.bhair<2){
        state.bhair++;
        console.log("updated bhhair",state.bhair)
        console.log(state.bhair)
        hair.setAttribute("class", `bhhair${state.bhair}`)
        console.log(hair.getAttribute("class"))
    }
    else if (state.bhair == 2){
        console.log("reset bhhair",state.bhair)
        state.bhair = 0
        hair.setAttribute("class", "nakey")
    }
}

function nextbhshoes() {
    console.log("inside next bhshoes")
    console.log(state.kshoes)
    let shoes = document.getElementById("bhshoes")
    if(state.bshoes<2){
        state.bshoes++;
        console.log(state.bshoes)
        shoes.setAttribute("class", `bhshoes${state.bshoes}`)
    }
    else if(state.bshoes == 2){
        state.bshoes = 0
        shoes.setAttribute("class", "nakey")
    }
}

function nextbhclothes() {
    console.log("inside next bhclothes")
    console.log(state.bclothes)
    let clothes = document.getElementById("bhclothes")
    if(state.bclothes<2){
        state.bclothes++;
        console.log(state.bclothes)
        clothes.setAttribute("class", `bhclothes${state.bclothes}`)
    }
    else if(state.bclothes == 2){
        state.bclothes = 0
        clothes.setAttribute("class", "nakey")
    }
}