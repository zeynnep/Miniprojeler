// Map methodunu kullanarak dizilerde işlemler yapmak  
  
const maaslar = [ 1100, 13000, 2500, 4500, 1500, 25000, 2000 ];
const yeniMaaslar = maaslar.map((e)=>{
    if(e > 3000)// eğer maaş 3000 üstündeyse
        return e * 1.15; // 1.15  lik zam
    else // değilse
        return e * 1.25; //1.25 lik zam
});

console.log( yeniMaaslar );