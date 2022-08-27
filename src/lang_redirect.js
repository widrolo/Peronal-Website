var userlang = navigator.language;

if (userlang == "de" || userlang == "de-AT")
{
    window.location.href = 'de/home.html';
}
else
{
    window.location.href = 'en/home.html';
}