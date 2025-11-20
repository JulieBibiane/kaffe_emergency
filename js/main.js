// Modal functionality
const openButtons = document.querySelectorAll(".open-modal");
const closeButtons = document.querySelectorAll(".close-modal");
const modals = document.querySelectorAll(".modal");

// Open modal
openButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modalId = button.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    modal.classList.add("show");
  });
});

// Close modal with X button
closeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.closest(".modal").classList.remove("show");
  });
});

// Close modal when clicking outside
modals.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });
});

// Close modal with Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    modals.forEach((modal) => {
      modal.classList.remove("show");
    });
  }
});
