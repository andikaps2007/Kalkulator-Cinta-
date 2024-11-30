document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loveCalculator");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const yourName = document.getElementById("yourName").value.trim();
    const partnerName = document.getElementById("partnerName").value.trim();

    if (!yourName || !partnerName) {
      resultDiv.textContent = "Harap masukkan kedua nama!";
      return;
    }

    // Generate random love percentage
    const loveScore = Math.floor(Math.random() * 101);
    resultDiv.textContent = `Halo ${yourName}, tingkat kecocokanmu dengan ${partnerName} adalah ${loveScore}%.`;
  });
});