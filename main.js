const researchButton = document.getElementById("research")
const pdfList = document.getElementById("pdfList")

researchButton.addEventListener("click", (ev) => {
  console.log("g")
  if (pdfList.style.display == "none") {
    pdfList.style.display = "block"
  } else {
    pdfList.style.display = "none"
  }
})