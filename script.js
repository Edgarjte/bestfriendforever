const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");

noButton.addEventListener("mouseover", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;
  noButton.style.transform = `translate(${x}px, ${y}px)`;
});

yesButton.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
      font-family:Arial;
      background:#fbd3e9;
      text-align:center;">
      <h1>💖 YAY 💖<br>You just made my day.</h1>
    </div>
  `;
});
