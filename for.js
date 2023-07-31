// FOR DÖNGÜSÜ

// for (BaşlangıçAtaması; Koşulİfadesi; döngüSonundaÇalışacakİfade) {"Koşul sağlanıyorsa(true) çalışmasını istediğim komutlar."
// }; 
// "Koşul sağlanmazsa(false) döngüden çıkılır."

// ÖRNEK 
// for(var i = 1; i < 5; i++) {
//    console.log(i);  
// };  İlk olarak değeri 1 olan i adında bir değişken tanımladık.

// Daha sonra bu i değişkeninin 5 sayısından küçük olduğu sürece döngü içerisine girip çalışmasını istedik.

// Son olarak eğer koşulu sağlıyor ise ++ ifadesini kullanarak değerinin birer birer artmasını istedim.


for(var i = 1; i < 5; i++) {
    console.log(i);
};

for (var i = 10; i >= 0; i--) {
    console.log(i);
};

for (var i =20; i <=40; i++){
    console.log(i);
};


//0 ve 50 sayıları arasından çift olanları konsola yazdıralım
for (var i = 0; i < 50; i++) {
    if (i % 2 == 0) {
        console.log(i);
    };
};