// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const trigger = document.querySelectorAll("a");
const highlight = document.createElement("span");
highlight.classList.add("highlight");
document.body.appendChild(highlight);
function highlighLink() {
  const linkCord = this.getBoundingClientRect();
  const coords = {
    width: linkCord.width,
    height: linkCord.height,
    left: linkCord.left + window.scrollX,
    top: linkCord.top + window.scrollY,
  };
  console.log(linkCord);
  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px,${coords.top}px)`;
}
trigger.forEach((a) => a.addEventListener("mouseenter", highlighLink));
