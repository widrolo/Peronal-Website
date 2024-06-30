var userlang = navigator.language;

if (userlang == "de" || userlang == "de-AT")
{
    document.getElementById("sa1").innerHTML = "Startseite";
    document.getElementById("sa2").innerHTML = "Projekte";
    
    document.getElementById("head1").innerHTML = "Projekte";
    document.getElementById("p1").innerHTML = "Hier finden Sie alle Projekte die ich öffenlich stellte:";

    document.getElementById("head2").innerHTML = "Meine Spiele";
    document.getElementById("l1p2").innerHTML = "In diesem Spiel, bist du eine Maschiene die versucht zu entkommen!";
    document.getElementById("l1p4").innerHTML = "Alice, eine Frau, die nicht ermordet werden konnte, spukt nun an dem Ort, den sie einst ihr Zuhause nannte. Jetzt bist du in ihr Revier eingedrungen.";
    
    document.getElementById("head3").innerHTML = "Andere Projekte";
    document.getElementById("l2p2").innerHTML = "Diese Seite wird dir helfen, eine Idee für dein nächstes Spiel zu bekommen!";
    document.getElementById("l2p4").innerHTML = "CMD Tools die das Leben erleichtern!";
}
else if (userlang == "pl")
{
    document.getElementById("sa1").innerHTML = "Strona główna";
    document.getElementById("sa2").innerHTML = "Moje projekty";
    
    document.getElementById("head1").innerHTML = "Projekty";
    document.getElementById("p1").innerHTML = "Tu znajdziecie wszyskie projekty, które opublikowałem:";

    document.getElementById("head2").innerHTML = "Moje Gry";
    document.getElementById("l1p2").innerHTML = "W tej grzę jesteś maszyną, i prubujesz ucieknąć z niewolności!";
    document.getElementById("l1p4").innerHTML = "Alice, kobieta, której nie można było zamordować, nawiedza teraz miejsce, które kiedyś nazywała domem. Teraz wkroczyłeś na jej terytorium.";
    
    document.getElementById("head3").innerHTML = "Inne Projekty";
    document.getElementById("l2p2").innerHTML = "Ta strona ci pomoże dostać pomysł na twoja następną grę!";
    document.getElementById("l2p4").innerHTML = "Narzędzia CMD, które ułatwiają życie!";
}