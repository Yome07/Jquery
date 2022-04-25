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
    if (imc > 18.5 && imc < 25) {
        $("#afficheIMC").addClass("text-success");
        $("#afficheNorme").addClass("text-success");
        $("#afficheNorme").text("18,5 < IMC < 25 : corpulence normale");
    } else {
        $("#afficheIMC").addClass("text-danger");
        $("#afficheNorme").addClass("text-danger");
        if (imc < 18.5) {
            $("#afficheNorme").text("IMC < 18,5 : insuffisance pondérale");
        } else {
            if (imc < 30) {
                $("#afficheNorme").text("25 < IMC < 30 : surpoids");
            } else {
                $("#afficheNorme").text("IMC > 30 : obésité !");
            }
        }
    }
});



