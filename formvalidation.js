console.log("test")

let form = document.querySelector("#form");

form.onsubmit = function (event) {
    event.preventDefault();
    // nom lezmou ikoun >= 3 lettre
    let nom = document.querySelector("#nom");
    if (nom.value.length < 3) {
        nom.style.border = "1px solid red"
        document.querySelector("#nom-error").innerHTML = "le nom doit contenir au moins 3 lettres";
    } else {
        nom.style.border = "1px solid black"
        document.querySelector("#nom-error").innerHTML = "";

    }


    console.log()

    function validerEmail() {
        let mail = String(document.querySelector("#email").value)
        for (let i = 0; i < mail.length; i++) {
            if (mail.charAt(i) != "@") {
                document.querySelector("#email").innerHTML = "l'email doit comporter @";
                (document.querySelector("#email")).style.border = "1px solid red"
            }

            else if (mail.charAt(i) != ".fr") {
                document.querySelector("#email").innerHTML = "l'email doit comporter un nom de domaine";
                mail.style.border = "1px solid red"

            }
            else if (mail == "") {
                document.querySelector("#email").innerHTML = "Ce champ est obligatoire";
            }
        }
    }
    function validerPhone() {
        let p = document.querySelector("#phone").value
        if (p.length != 8) {
            p.style.border = "1px solid red ";
            document.querySelector("#phone").innerHTML = "le num de tel doit comporter 8 chiffres";
        }
        else {
            document.querySelector("#phone").innerHTML = "Ce champ est obligatoire";
        }

    }
    function verifCin() {
        let c = document.querySelector("#cin").value
        if (c.length != 8) {
            c.style.border = "1px solid red ";
            document.querySelector("#cin").innerHTML = "le num de cin doit comporter 8 chiffres";
        }
        else {
            document.querySelector("#cin").innerHTML = "Ce champ est obligatoire";
        }
    }
}