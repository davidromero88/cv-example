tailwind.config = {
  darkMode: "class",
};

const btn = document.getElementById("darkModeToggle");
const darkModeIcon = document.getElementById("darkModeIcon");
darkModeIcon.classList.add("fa-moon");
//btn.innerText = document.documentElement.classList[0] !== "dark" ? "dark" : "Light"
btn.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  darkModeIcon.classList.toggle("fa-moon");
  darkModeIcon.classList.toggle("fa-sun");
});
