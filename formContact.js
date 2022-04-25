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
        $("#email").removeClass("inputValid");
    } else {
        $("#" + id + "Invalide").addClass("d-none");
        $("#" + id + "Valide").removeClass("d-none");
        $("#" + id).addClass("inputValid");
        $("#" + id).removeClass("inputInvalid");
    }
}

/* vérification nom */
$("#nom").keyup(function () {
    verif("nom");
});


/* vérification prénom */
$("#prenom").keyup(function () {
    verif("prenom");
});

/* vérification email */
$("#email").keyup(function () {
    let regexemail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/;
    verif("email", regexemail);

});

/* vérification téléphone numéro français */
$("#telephone").keyup(function() {
    let regextelephone = /^(\d){10}$/;
    verif("telephone", regextelephone);
});

/* vérification message */
$("#message").keyup(function () {
    let texte = $(this).val();
    let nombreMots = $.trim(texte).split(" ");
    $("#nombreCaracteres span").text(texte.length);
    $("#nombreMots span").text(nombreMots.length);
    if (!$("#message").val()) {
        $("#nombreMots span").text("0");
    }
    if ($("#message").val()) {
        $("#messageInvalide").addClass("d-none");
    }
});

$("#message").keypress(function () {
    if($(this).val().length >= 200){
            return false;
    }
})

/* soumission */
$("button").click(function(e) {
    e.preventDefault();
    if (!($("#message").val())) {
        $("#messageInvalide").removeClass("d-none");
    } 
    if ($("#nom").val() && $("#prenom").val() && $("#emailInvalide").hasClass("d-none") && $("#telephoneInvalide").hasClass("d-none") && $("#message").val()) {
        $("form").addClass("d-none");
        $("#merci").removeClass("d-none");
        $("#merci span").text($("#prenom").val());
    }
});
