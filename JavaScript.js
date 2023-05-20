

// scroll payiti website o'zini qanday tutishi

let qisim = document.querySelector('section');
let menyuLinklari = document.querySelector('header nav a ');

window.onscroll = () =>{

    qisim.forEach(funksiyanomibu =>{
    let yuqori = window.scrollY;
    let offset = funksiyanomibu.offsetTop - 100;
    let balandlik = funksiyanomibu.offsetHeight;
    let id = funksiyanomibu.getAttribute('id');

    if (yuqori >= offset && yuqori < offset + balandlik ){

        menyuLinklari.forEach(linklarningFunksiyasi => {
            linklarningFunksiyasi.classList.remove('active');
            document.querySelector('header nav a[href*='  +  id  +']').classList.add('active');
        });
    }

});
    // scrol payiti menyu qismini orqasiga fon qo'shish;

    let menyuqismi = document.querySelector('header');
    menyuqismi.classList.toggle('fon',  window.scrollY > 100);
}


// qisim.forEach(funksiyanomibu =>{
//     let yuqori = window.scrollY;
//     let offset = funksiyanomibu.offsetTop - 100;
//     let balandlik = funksiyanomibu.offsetHeight;
//     let id = funksiyanomibu.getAttribute('id');

//     if (yuqori >= offset && yuqori < offset + balandlik ){

//         menyuLinklari.forEach(linklarningFunksiyasi => {
//             linklarningFunksiyasi.classList.remove('active');
//             document.querySelector('header nav a[href*='  +  id  +']').classList.add('active');
//         });
//     }

// });


