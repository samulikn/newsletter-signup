const form = document.getElementById("form");
const newsletter = document.getElementById("newsletter");
const successMsg = document.getElementById("successmessage");
const dismissBtn = document.getElementById("dismiss");
const errorMsg = document.getElementById("errormessage");
const mailTo = document.getElementById("mailto");
const input = document.getElementById("email");

const showError = () => {
  errorMsg.textContent = "Valid email required";
  errorMsg.removeAttribute("aria-hidden");

  input.classList.remove("focus:border-(--blue800)");
  input.classList.add("bg-(--red100)", "border-(--red)", "text-(--red)");
};

const clearError = () => {
  errorMsg.textContent = "";
  errorMsg.setAttribute("aria-hidden", "true");

  input.classList.remove("bg-(--red100)", "border-(--red)", "text-(--red)");
  input.classList.add("focus:border-(--blue800)");
};

const handleChangeInput = () => {
  const isHidden = errorMsg.getAttribute("aria-hidden");
  if (!isHidden || isHidden === "false") {
    clearError();
  }
};

form.onsubmit = (e) => {
  e.preventDefault();

  const formDataEntries = new FormData(e.target);
  const data = Object.fromEntries(formDataEntries);
  const email = data.email;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/gi;

  const validEmail = emailRegex.test(email);

  if (!validEmail) {
    showError();
    input.focus();
    return;
  }

  clearError();
  mailTo.textContent = email.toLowerCase();
  newsletter.classList.add("hidden");
  successMsg.classList.remove("hidden");
};

dismissBtn.addEventListener("click", (e) => {
  e.preventDefault();

  successMsg.classList.add("hidden");
  newsletter.classList.remove("hidden");
  input.value = "";
});

input.addEventListener("change", () => {
  handleChangeInput();
})
