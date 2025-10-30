const form = document.getElementById("form");
const newsletter = document.getElementById("newsletter");
const successmesage = document.getElementById("successmessage");
const dismissBtn = document.getElementById("dismiss");
const errorMsg = document.getElementById("errormsg");
const mailTo = document.getElementById("mailto");
const input = document.getElementById("email");

const toRemoveClasses = () => {
  errorMsg.classList.remove("visible");
  input.classList.remove(
    "bg-(--red100)",
    "border-(--red)",
    "opacity-100",
    "text-(--red)",
    "focus:outline-(--red)"
  );
};

const handleChangeInput = () => {
  if (errorMsg.classList.contains("visible")) {
    toRemoveClasses();
  }
};

form.onsubmit = (e) => {
  e.preventDefault();

  const formDataEntries = new FormData(e.target);
  const data = Object.fromEntries(formDataEntries);
  const email = data.email;

  const emailRegex = /^[\w\d-.!]+@[\w\d-!]+(\.\w+)*\.[\w]{2,}$/gi;

  const validEmail = emailRegex.test(email);

  if (!validEmail) {
    errorMsg.classList.add("visible");
    input.classList.add(
      "bg-(--red100)",
      "border-(--red)",
      "opacity-100",
      "text-(--red)",
      "focus:outline-(--red)"
    );
    input.focus();
    return;
  }

  handleChangeInput();

  mailTo.innerHTML = email.toLowerCase();
  newsletter.classList.add("hidden");
  successmesage.classList.remove("hidden");
};

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();

  successmesage.classList.add("hidden");
  newsletter.classList.remove("hidden");
  input.value = "";
  input.focus();
});
