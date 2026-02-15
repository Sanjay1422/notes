function loadPDF(file) {
    document.getElementById("pdfFrame").src =
        file + "#toolbar=0&navpanes=0&scrollbar=0";
}

const pdfFrame = document.getElementById("pdfFrame");

/* Block right click ONLY on the PDF */
pdfFrame.addEventListener("contextmenu", function (e) {
    e.preventDefault();
});

/* Block Save & Print only */
document.addEventListener("keydown", function (e) {
    if (
        (e.ctrlKey && e.key.toLowerCase() === "s") ||
        (e.ctrlKey && e.key.toLowerCase() === "p")
    ) {
        e.preventDefault();
        alert("This action is disabled");
    }
});
