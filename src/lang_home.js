var userlang = navigator.language;

if (userlang == "de" || userlang == "de-AT")
{
    document.getElementById("sa1").innerHTML = "Startseite";
    document.getElementById("sa2").innerHTML = "Projekt";
    
    document.getElementById("head1").innerHTML = "Willkommen";

    document.getElementById("p1").innerHTML = "Auf dieser Seite können Sie alles wichtige über mich finden.";
    document.getElementById("p2").innerHTML = "Klicken Sie auf \"Projekte\" um alle meine öffentlichen Projekte zu sehen.";
}
else if (userlang == "pl")
{
    document.getElementById("sa1").innerHTML = "Strona główna";
    document.getElementById("sa2").innerHTML = "Moje projekty";
    
    document.getElementById("head1").innerHTML = "Cześć!";

    document.getElementById("p1").innerHTML = "Na tej stronię znajdziecie wszystko ważne o mnie.";
    document.getElementById("p2").innerHTML = "Wciśnij na \"Moje projekty\" żeby zobaczyć wżystkie moje publiczne projekty.";
}