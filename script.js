document.getElementById("loan-form").addEventListener("submit", function (e) {
  e.preventDefault(); // zapobiega przeładowaniu strony

  // Pobierz dane z formularza
  const amount = parseFloat(document.getElementById("amount").value);
  const interest = parseFloat(document.getElementById("interest").value) / 100 / 12; // miesięczne oprocentowanie
  const years = parseInt(document.getElementById("years").value);
  const payments = years * 12; // liczba miesięcznych rat

  // Wzór na ratę annuitetową (raty równe)
  const x = Math.pow(1 + interest, payments);
  const monthly = (amount * interest * x) / (x - 1);

  const results = document.getElementById("results");

  if (isFinite(monthly)) {
    const totalPayment = monthly * payments;
    const totalInterest = totalPayment - amount;

    document.getElementById("monthly-payment").textContent = monthly.toFixed(2) + " zł";
    document.getElementById("total-payment").textContent = totalPayment.toFixed(2) + " zł";
    document.getElementById("total-interest").textContent = totalInterest.toFixed(2) + " zł";

    results.classList.remove("hidden");
  } else {
    alert("Proszę wprowadzić poprawne dane.");
    results.classList.add("hidden");
  }
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("loan-form").reset();
  document.getElementById("results").classList.add("hidden");
});

const toggle = document.getElementById("dark-toggle");
const toggleText = document.querySelector(".toggle-text");

toggle.addEventListener("change", function () {
  document.body.classList.toggle("dark-mode");

  if (toggle.checked) {
    toggleText.textContent = "☀️ Tryb jasny";
  } else {
    toggleText.textContent = "🌙 Tryb ciemny";
  }
});