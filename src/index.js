import "./styles.css";

const container = document.querySelector(".container");
let open = false;

container.addEventListener("click", () => {
  if (!open) {
    container.children[0].style.transform = `rotate(70deg) translateX(30%)`;
    container.children[1].style.opacity = `0`;
    container.children[2].style.transform = `rotate(-70deg) translateX(30%)`;
    open = !open;
  } else {
    container.children[0].style.transform = `none`;
    container.children[1].style.opacity = `1`;
    container.children[2].style.transform = `none`;
    open = !open;
  }
});
