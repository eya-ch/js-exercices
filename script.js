// let h1 = document.querySelector("h1")
// h1.innerHTML="bnj"
let addBtn = document.querySelector("#sum")
let multBtn = document.querySelector("#multip")
let sousBtn = document.querySelector("#soust")
let divBtn = document.querySelector("#divis")
let powBtn = document.querySelector("#pow")
let restBtn = document.querySelector("#rest")
let h2 = document.querySelector("h2")

addBtn.onclick = add
multBtn.onclick = mult
sousBtn.onclick = sous
divBtn.onclick = div
powBtn.onclick = pow
restBtn.onclick = restdiv

function add() {
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    h2.innerHTML = (` resultat = ${(x + y)}`)
}
function mult() {
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    h2.innerHTML = (`Resultat = ${(x * y)} `)
}
function sous() {
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    h2.innerHTML = `Resultat = ${(x - y)} `
}
function div() {
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    h2.innerHTML = `Resultat = ${(x / y)} `
}
function pow() {
    let x = Number(document.querySelector("#x").value)
    let y = Number(document.querySelector("#y").value)
    h2.innerHTML = `Resultat = ${(x ** y)}`
}
function restdiv() 
{
    let x = Number(document.querySelector("x").value)
    let y = Number(document.querySelector("y").value)
    if (x % y == 0) {
        h2.innerHTML = "${(x)} est divisible par ${(y)} "
    }
    else if (x < y) {
        alert(erreur);

    }
    else {
        h2.innerHTML = `Resultat = ${(x % y)}
}