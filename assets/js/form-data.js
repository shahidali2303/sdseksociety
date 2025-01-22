const scriptURL =
  "https://script.google.com/macros/s/AKfycbyfdB-QMNK0d16TX3wU_VTA05LEg0SyVxdNOENWSp5BgAgwGTUOalZ-gKiOzexMiwE/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thank you! Form is submitted"))
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
