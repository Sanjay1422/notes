const container = document.getElementById("pdfContainer");
let pdfDoc = null;
let scale = 1.3;

function loadPDF(url) {
    container.innerHTML = "";

    pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfDoc = pdf;
        for (let i = 1; i <= pdf.numPages; i++) {
            renderPage(i);
        }
    });
}

function renderPage(num) {
    pdfDoc.getPage(num).then(page => {
        const viewport = page.getViewport({ scale });
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.height = viewport.height;
        canvas.width = viewport.width;
        canvas.style.marginBottom = "20px";

        container.appendChild(canvas);

        page.render({ canvasContext: ctx, viewport });
    });
}

/* Block everything */
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.ctrlKey || e.metaKey) {
        if (["s", "p", "u", "c", "x", "a"].includes(e.key.toLowerCase())) {
            e.preventDefault();
            alert("This action is disabled");
        }
    }
});
