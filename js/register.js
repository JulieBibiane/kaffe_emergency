console.log("Added register.js");

const form = document.getElementById("Nødforanstaltninger form");
const outputContent = document.getElementById("output-content");

const measureOutput = document.getElementById("measure-output");
const effectivenessOutput = document.getElementById("effectiveness-output");
const productivityOutput = document.getElementById("productivity-output");
const sideEffectsOutput = document.getElementById("side-effects-output");
const timeOutput = document.getElementById("time-output");
const commentsOutput = document.getElementById("comments-output");
const consentOutput = document.getElementById("consent-output");

function cancelPopup(event) {
  event.preventDefault();
  const invalidElement = form.querySelector(":user-invalid");
  if (invalidElement) {
    invalidElement.focus();
  }
}

function handleSubmit(event) {
  event.preventDefault();

  const formData = new FormData(form);

  const measure = form.querySelector("#measure");
  measureOutput.textContent = measure.options[measure.selectedIndex].text;

  const effectiveness = formData.get("effectiveness");
  const effectivenessLabels = {
    disaster: "En katastrofe",
    poor: "Virkede slet ikke",
    neutral: "Ingen ændring",
    good: "Virkede lidt",
    miracle: "Mit liv er forandet (på en god måde)",
  };
  effectivenessOutput.textContent = effectivenessLabels[effectiveness];

  const productivity = form.querySelector("#productivity");
  productivityOutput.textContent =
    productivity.options[productivity.selectedIndex].text;

  const sideEffects = formData.getAll("side_effects");
  if (sideEffects.length > 0) {
    const sideEffectLabels = {
      rystelser: "Rystelser",
      hovedpine: "Hovedpine",
      træthed: "Træthed",
      irritation: "Irritation",
      "eksistentiel krise": "Eksistentiel krise",
      bedre: "Har det faktisk bedre",
      ingen: "Ingen",
    };
    sideEffectsOutput.textContent = sideEffects
      .map((effect) => sideEffectLabels[effect])
      .join(", ");
  } else {
    sideEffectsOutput.textContent = "Ikke angivet";
  }

  const time = formData.get("time");
  timeOutput.textContent = time + " timer";

  const comments = formData.get("comments");
  commentsOutput.textContent = comments || "Ingen yderligere kommentarer";

  const consent = formData.get("consent");
  consentOutput.textContent =
    consent === "yes" ? "✓ Samtykke givet" : "Ikke givet";

  outputContent.classList.add("show");

  if (window.innerWidth < 768) {
    outputContent.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

form.addEventListener("submit", handleSubmit);
form.addEventListener("invalid", cancelPopup, true);
