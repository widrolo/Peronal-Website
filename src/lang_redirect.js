var userlang = navigator.language;

if (userlang == "de" || userlang == "de-AT")
{
    window.location.href = 'de/home.html';
}
else if (userlang == "pl")
{
    window.location.href = 'pl/home.html';
}
else
{
    window.location.href = 'en/home.html';
}