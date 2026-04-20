const serviceItems = document.querySelectorAll(".service-item");

serviceItems.forEach((item) => {
  const button = item.querySelector(".service-toggle");
  const panel = item.querySelector(".service-panel");

  if (!button || !panel) {
    return;
  }

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("is-open");
    button.setAttribute("aria-expanded", String(isOpen));
    panel.style.maxHeight = isOpen ? `${panel.scrollHeight}px` : "0px";
  });
});

const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

const contactRoot = document.querySelector("[data-contact-root]");
const contactForm = document.querySelector("[data-contact-form]");
const contactSuccess = document.querySelector("[data-contact-success]");
const submitButton = document.querySelector("[data-submit-button]");

if (contactRoot && contactForm && contactSuccess && submitButton) {
  const defaultLabel = submitButton.querySelector(".submit-default");
  const loadingLabel = submitButton.querySelector(".submit-loading");

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) {
      return;
    }

    submitButton.disabled = true;
    if (defaultLabel) defaultLabel.hidden = true;
    if (loadingLabel) loadingLabel.hidden = false;

    window.setTimeout(() => {
      const copy = contactRoot.querySelector(".contact-copy");

      if (copy) {
        copy.hidden = true;
      }

      contactForm.hidden = true;
      contactSuccess.hidden = false;
    }, 1000);
  });
}
