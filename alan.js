// Javascript ile alan hesaplama 

// DİKDÖRTGEN ALANI HESAPLAMAM /// 
// Sayıları kendi istediğimiz şekilde değiştirebiliriz.

const K = 4;
function  dkdrtguzun(U)
{
    var islemSonucu=K*U;
    return islemSonucu;
}

var donenSonuc= dkdrtguzun(6);
console.log(donenSonuc);


// İKİZKENAR DİK üçgen  ALANI HESAPLAMA  //
// Sayıları kendi istediğimiz şekilde değiştirebiliriz.
 function dküçgennalanı (  kk , bölü=2 ){
    return kk*kk/bölü;
 }
  var donenSonuc =dküçgennalanı(6) ;
  console.log(donenSonuc);


// Daire alanı hesaplama  
  const PI = 3.14; // Formülde kullandığımız sabit sayı pi'yi bu şekilde alabiliriz.
function daireAlaniHesaplama (r) // Fonksiyonumuz, r parametresini alıyor. 
{
    var islemSonucu = PI*r*r; // Dairenin alanını hesaplayacak işlemimiz.
    return islemSonucu;		 // return ifadesiyle sonucu dönüyoruz.
}

var donenSonuc = daireAlaniHesaplama(3); // Argüman olarak, alanını hesaplamak istediğimiz herhangi bir dairenin yarıçapı için 3 rakamı verildi. 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.


function daireAlaniHesaplama (r, PI = 3.14) { 
    return PI*r*r;		
}
var donenSonuc = daireAlaniHesaplama(3); 
console.log(donenSonuc); // 28.25999999 sonucunu göreceğiz.

function daireAlaniHesaplama (r, PI = 3.14) { 
    return PI*r*r;		
}
  //  

  
function carpma (a1, a2) {
    return a1*a2;
}

var alan1 = daireAlaniHesaplama(5); // 5 ve 6 argümanları için dairelerin alanları hesaplandı.
var alan2 = daireAlaniHesaplama(6); 
var donenSonuc = carpma(alan1, alan2); // Hesaplanan alanlar argüman olarak verildi.
console.log(donenSonuc);  			  // 354.9456 olarak hesaplandı.