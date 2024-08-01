const box = document.querySelector(".box");
const photos = [
  {
    img: "./img/frozen.jpg",
    id: 1,
  },
  {
    img: "./img/inside.jpg",
    id: 2,
  },
  {
    img: "./img/frozen.jpg",
    id: 1,
  },
  {
    img: "./img/inside.jpg",
    id: 2,
  },
  {
    img: "./img/maqquen.jpg",
    id: 3,
  },
  {
    img: "./img/big hero.jpg",
    id: 4,
  },
  {
    img: "./img/maqquen.jpg",
    id: 3,
  },
  {
    img: "./img/big hero.jpg",
    id: 4,
  },
  {
    img: "./img/rapunsel.jpg",
    id: 5,
  },
  {
    img: "./img/rapunsel.jpg",
    id: 5,
  }
];
const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const shuffledArray = shuffle(photos);

console.log(shuffledArray);
shuffledArray.map((item) => {
  const img = document.createElement("img");
  img.src = item.img;
  const big = document.createElement("div");
  const back = document.createElement("div");
  box.appendChild(big);
  big.appendChild(img);
  big.appendChild(back);
  
  big.id = item.id;
  
  big.setAttribute("data-opened", "false");
  
  big.classList = "big";
  
  back.classList = "back";
  
  big.addEventListener("click", (e) => {
    if (
      e.target.parentElement.classList.value == "big" &&
      e.target.parentElement.getAttribute("data-opened") === "false"
    ) {
      e.target.parentElement.classList.value = "hidden";
      e.target.parentElement.setAttribute("data-opened", "true");
    } else if (e.target.parentElement.classList.value == "hidden") {
      e.target.parentElement.classList.value = "big";
      e.target.parentElement.setAttribute("data-opened", "false");
    }
    const box1 = Array.from(box.children);
    let el = [];
    box1.map((element) => {
      if (element.classList.value === "hidden") {
        el.push(element);
        if (el.length < 3) {
          el.reduce((acc, value1) => {
            if (acc.id === value1.id) {
              acc.classList.value = "hidden active";
              value1.classList.value = "hidden active";
              el = [];
            } else {
              setTimeout(function hello() {
                acc.classList.value = "big";
                value1.classList.value = "big";
                acc.setAttribute("data-opened", "false");
                value1.setAttribute("data-opened", "false");
                el = [];
              }, 500);
            }
          });
        }
        console.log(el);
      }
    });
  });
});
