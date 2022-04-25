$("input[type=button]").click( function(){
    $("#afficheIMC").text("");
    $("#afficheNorme").text("");
    $("#afficheIMC").removeClass("text-success");
    $("#afficheNorme").removeClass("text-success");
    $("#afficheIMC").removeClass("text-danger");
    $("#afficheNorme").removeClass("text-danger");

    let taille = parseInt($("#taille").val());
    let poids = parseInt($("#poids").val());
    imc = poids / Math.pow((taille/100), 2);
    imcFr = imc.toLocaleString("fr-FR", {maximumFractionDigits: 2});
    $("#resultat").removeClass("d-none");
    $("#afficheIMC").append(imcFr);
    switch (true) {
        case imc < 18.5:
            $("#afficheIMC").addClass("text-danger");
            $("#afficheNorme").addClass("text-danger");
            $("#afficheNorme").text("IMC < 18,5 : insuffisance pondérale");
            break;
        case imc < 25:
            $("#afficheIMC").addClass("text-success");
            $("#afficheNorme").addClass("text-success");
            $("#afficheNorme").text("18,5 < IMC < 25 : corpulence normale");
            break;
        case imc < 30:
            $("#afficheIMC").addClass("text-danger");
            $("#afficheNorme").addClass("text-danger");
            $("#afficheNorme").text("25 < IMC < 30 : surpoids");
            break;
        default:
            $("#afficheIMC").addClass("text-danger");
            $("#afficheNorme").addClass("text-danger");
            $("#afficheNorme").text("IMC > 30 : obésité !");
            break;
    }
});



