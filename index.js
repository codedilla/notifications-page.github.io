const mark = document.querySelector(".mark-all");
const notRead = document.querySelectorAll(".noti");
const bg = document.querySelectorAll(".unread");
let count = document.querySelector(".spandiel");
let counted = false;

function read() {
  for (let i = 0; i < notRead.length; i++) {
    notRead[i].classList.toggle("noti");
    bg[i].classList.toggle("unread");
    count.textContent = 3;
  }
}

function counter() {
  if (!counted) {
    count.textContent = 0;
    counted = true;
  } else {
    count.textContent = 3;
    counted = false;
  }
}

mark.addEventListener("click", () => {
  read();
  counter();
});
