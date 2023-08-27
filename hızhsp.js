//  Bir yarış pistinde iki yarışmacı aynı anda start alıyor. İlk yarışmacı saatte 15 km hızla, ikinci yarışmacı ise saatte 20 km hızla koşuyor. İkinci yarışmacı kaç saat sonra ilk yarışmacıyı yakalar?
// Bu problemi çözen kodu yazmanı istiyorum




function yakalamaZamani(hiz1, hiz2) {
    // İlk yarışmacının hızı hiz1, ikinci yarışmacının hızı hiz2
    // İkinci yarışmacının ilk yarışmacıyı yakalayabilmesi için
    // aradaki mesafeyi hız farkına böleriz.
    // Yani: Mesafe = Hız * Zaman
    // Zaman = Mesafe / Hız Farkı

    var hizFarki = hiz2 - hiz1;
    var yakalamaZamani = 0;

    // Eğer hız farkı 0 veya negatifse, ikinci yarışmacı ilk yarışmacıyı hiçbir zaman yakalayamaz.
    if (hizFarki <= 0) {
        return "İkinci yarışmacı ilk yarışmacıyı yakalayamaz.";
    } else {
        yakalamaZamani = hiz1 / hizFarki;
        return yakalamaZamani;
    }
}

var ilkYarismaciHizi = 15; // km/saat
var ikinciYarismaciHizi = 20; // km/saat

var sonuc = yakalamaZamani(ilkYarismaciHizi, ikinciYarismaciHizi);
if (typeof sonuc === "number") {
    console.log("İkinci yarışmacı ilk yarışmacıyı " + sonuc + " saat sonra yakalar.");
} else {
    console.log(sonuc);
}