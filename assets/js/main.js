
document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("copyBibtex");
  const bibtex = document.getElementById("bibtex");
  if (button && bibtex) {
    button.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(bibtex.innerText);
        const original = button.textContent;
        button.textContent = "Copied";
        setTimeout(() => (button.textContent = original), 1400);
      } catch (err) {
        button.textContent = "Copy failed";
      }
    });
  }
});
