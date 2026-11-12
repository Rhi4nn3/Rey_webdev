const msg = document.getElementById("msg");
const btn = document.getElementById("btn");
const date = document.getElementById("date");
const save = document.getElementById("save");
const deleteButton = document.getElementById("deleteButton");
const status = document.getElementById("status");
const output = document.getElementById("output");

function LoadCapsule() {
  const data = JSON.parse(localStorage.getItem("capsule"));
  if (!data) return;
  const now = new Date();
  const unlock = new Date(data.date);
  if (now >= unlock) {
    status.innertext = "Your time capsule is unlocked!";
    output.innerHTML = data.msg;
  }

  else {
    status.innertext = "Your time capsule is locked!";
    unlock.toDateString();
  }
}

save.onclick = () => {
    if (!msg.value || !date.value) {
        localStorage.setItem("capsule", JSON.stringify({ msg: msg.value, date: date.value }));
    }

    msg.value = "";
    date.value = "";
    loadCapsule();
}

loadCapsule();