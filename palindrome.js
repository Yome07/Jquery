function palindrome() {
    let testPalindrome = $("#palindrome").val();
    let chaineInverse = testPalindrome.split("").reverse().join("");
    if ($("p").text != "") {
        $("p").removeClass("estPalindrome nestpasPalindrome");
        $("p").text("");
    }
    if (testPalindrome == chaineInverse) {
        $("p").append(testPalindrome + " est un palindrome !");
        $("p").addClass("estPalindrome");
    } else {
        $("p").append(testPalindrome + " n'est pas un palindrome !");
        $("p").addClass("nestpasPalindrome");
    }
}

$('input[type="button"]').click(function () {
    palindrome();
});

$('input[type="text"]').keypress(function(e){
    if( e.which == 13 ){
        palindrome();
    }
});
