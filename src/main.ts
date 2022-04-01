import "./style.css";

const startEl = document.querySelector<HTMLDivElement>("#start")!;
const wordsEl = document.querySelector<HTMLTextAreaElement>("#words")!;
const configEl = document.querySelector<HTMLDivElement>("#config")!;
const displayEl = document.querySelector<HTMLDivElement>("#display")!;
const saveEl = document.querySelector<HTMLDivElement>("#save")!;

wordsEl.value = localStorage.getItem("words") || "";

const update = () => {
  configEl.classList.add("hidden");
  displayEl.classList.remove("hidden");

  for (let i = displayEl.children.length - 1; i >= 0; i--) {
    displayEl.children[i].remove();
  } // for some reason displayEl.childNodes.forEach is broken, so we do this shit.

  const words = wordsEl.value
    .trim()
    .split("\n")
    .map((s) => s.trim())
    .filter((s) => s);

  for (let i = words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [words[i], words[j]] = [words[j], words[i]];
  }

  for (const word of words) {
    const wordEl = document.createElement("div");
    wordEl.classList.add(
      "flex",
      "items-center",
      "justify-center",
      "bg-gray-50",
      "border",
      "border-gray-100",
      "rounded-md"
    );
    const wordTextEl = document.createElement("p");
    wordTextEl.innerText = word;
    wordTextEl.classList.add("text-2xl");
    wordEl.appendChild(wordTextEl);
    displayEl.appendChild(wordEl);
  }

  displayEl.classList.forEach((s) => {
    if (s.startsWith("grid-cols")) {
      displayEl.classList.remove(s);
    }
  });

  if (words.length < 2) return;
  if (words.length < 6) return displayEl.classList.add("grid-cols-2");
  if (words.length < 10) return displayEl.classList.add("grid-cols-3");
  if (words.length < 20) return displayEl.classList.add("grid-cols-4");
  displayEl.classList.add("grid-cols-5"); //TODO: scale this properly.
};

startEl.addEventListener("click", () => {
  update();

  addEventListener("keypress", (e) => {
    console.log(e.key);

    if (e.key === " ") {
      update();
    }
  });
});

saveEl.addEventListener("click", () => {
  localStorage.setItem("words", wordsEl.value);
});

let i = 0;
