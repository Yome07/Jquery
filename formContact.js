let champOk = [];
let nomOk, prenomOk, emailOk, telephoneOk;
function verif(id, regex) {
    let test;
    if (id == "nom" || id == "prenom") {
        test = ($("#" + id).val());
    } else {
        test = regex.test($("#" + id).val());
    }

    if (!test) {
        $("#" + id + "Invalide").removeClass("d-none");
        $("#" + id + "Valide").addClass("d-none");
        $("#" + id).addClass("inputInvalid");
        $("#" + id).removeClass("inputValid");
        return false;
    } else {
        $("#" + id + "Invalide").addClass("d-none");
        $("#" + id + "Valide").removeClass("d-none");
        $("#" + id).addClass("inputValid");
        $("#" + id).removeClass("inputInvalid");
        return true;
    }
}

/* vérification nom */
$("#nom").keyup(function () {
    verif("nom");
    champOk[] = verif("nom");
});


/* vérification prénom */
$("#prenom").keyup(function () {
    verif("prenom");
    champOk[] = verif("prenom");
});

/* vérification email */
$("#email").keyup(function () {
    let regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    verif("email", regexemail);
    champOk[] = verif("email", regexemail);
});

/* vérification téléphone numéro français */
$("#telephone").keyup(function() {
    let regextelephone = /^(\d){10}$/;
    verif("telephone", regextelephone);
    champOk[] = verif("telephone", regextelephone);
});

/* vérification message */
$("#message").keyup(function () {
    let nombreCaracteres = $(this).val().length;
    let mots = $.trim($(this).val()).split(" ");
    mots = mots.filter(function(f) {return f != ""});
    $("#nombreCaracteres span").text(nombreCaracteres);
    $("#nombreMots span").text(mots.length);
    if (!$("#message").val()) {
        $("#nombreMots span").text("0");
    }
    if ($("#message").val()) {
        $("#messageInvalide").addClass("d-none");
    }
    champOk[] = !$("#message").val();
});

// $("#message").keypress(function () {
//     if($(this).val().length >= 200){
//         return false;
//     }

// })

    console.log(champOk);

/* soumission */
$("button").click(function(e) {
    e.preventDefault();
    console.log(champOk);
    if (!($("#message").val())) {
        $("#messageInvalide").removeClass("d-none");
    } 
    if (champOk) {
        $("form").addClass("d-none");
        $("#merci").removeClass("d-none");
        $("#merci span").text($("#prenom").val());
    }
});
