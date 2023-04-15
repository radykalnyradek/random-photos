const imageContainer = document.querySelector(".image-container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  for (i = 0; i < 3; i++) {
    const img = document.createElement("img");
    const random = Math.floor(Math.random() * 2000);
    img.src = "https://picsum.photos/300?random=" + random;
    imageContainer.appendChild(img);
  }
});
