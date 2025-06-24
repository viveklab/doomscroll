const imageFolder = "images/";
const imageList = [
  "pic1.jpg","pic2.jpg","pic3.jpg","pic4.jpg","pic5.jpg",
  "pic6.jpg","pic7.jpg","pic8.jpg","pic9.jpg","pic10.jpg"
];

let current = 0, last = null, shuffled = [];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function nextImg() {
  if (current >= shuffled.length) {
    shuffled = shuffle(imageList);
    if (shuffled[0] === last) {
      [shuffled[0], shuffled[1]] = [shuffled[1], shuffled[0]];
    }
    current = 0;
  }
  last = shuffled[current];
  return shuffled[current++];
}

function loadImg() {
  const img = document.createElement("img");
  img.src = imageFolder + nextImg();
  document.getElementById("feed").appendChild(img);
}

for (let i = 0; i < 5; i++) loadImg();

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100) {
    loadImg();
  }
});
