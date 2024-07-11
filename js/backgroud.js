// const wrap = document.querySelector("#wrap");
// const images = [
//     "mountain.jpg", "cactus.jpg"
// ];
// const chosenImage = images[Math.floor(Math.random() * images.length)];

// const bgImage = document.createElement("img");
// bgImage.src = `img/${chosenImage}`;
// // console.log(bgImage); //<img src="img/0cat.jpg">

// document.body.style.backgroundImage = bgImage;

const images = [
    "mountain.jpg", "cactus.jpg", "Albuquerque.jpg", "mountain2.jpg", "mountain3.jpg",
    "sheep1.jpg", "sheep2.jpg", "cow1.jpg", "desert1.jpg", "penguin1.jpg",
    "sky1.jpg", "cat1.jpg", "cat2.jpg", "cat3.jpg", "cat4.jpg", "cat6.jpg", "cat7.jpg"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.backgroundImage = `url('../img/${chosenImage}')`;




// const images = [
//     "../img/cactus.jpg",
//     "../img/Albuquerque.jpg",
//     "../img/mountain.jpg",
//     "../img/mountain2.jpg",
//     "../img/mountain3.jpg",
//     "../img/sheep1.jpg",   
//     "../img/sheep2.jpg",   
//     "../img/cow1.jpg",   
//     "../img/desert1.jpg",   
//     "../img/penguin1.jpg",   
//     "../img/sky1.jpg",   
//     "../img/cat1.jpg",   
//     "../img/cat2.jpg",   
//     "../img/cat3.jpg",   
//     "../img/cat4.jpg",   
//     "../img/cat6.jpg",   
//     "../img/cat7.jpg",   
//     // "mountain.jpg", "cactus.jpg"
// ];

// const chosenImage = images[Math.floor(Math.random() * images.length)];

// document.body.style.backgroundImage = `url('${chosenImage}')`;
