const box = document.querySelector(".box");
const photos = [
  {
    img: "./img/html.png",
  },
  {
    img: "./img/html.png",
  },
  {
    img: "./img/js.png",
  },
];
photos.map((item) => {
  const img = document.createElement("img");
  img.src = item.img;
  const big = document.createElement('div')
  const back = document.createElement('div')
  box.appendChild(big);
  big.appendChild(img);
  big.appendChild(back);

  big.classList = 'big'
  back.classList = 'back'
  big.addEventListener('click' , (e)=>{
    if(e.target.parentElement.classList.value == 'big'){
        e.target.parentElement.classList.value = 'hidden'
    }
    else if(e.target.parentElement.classList.value == 'hidden'){
       e.target.parentElement.classList.value = 'big'
    }
    console.log(e.target.parentElement.classList);
  })
});
const box1 = Array.from(box.children)
box1.map((e)=>console.log(e))
console.log(box1.length);
