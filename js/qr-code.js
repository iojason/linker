const linkerURL = document.URL;
let btnCopyLinkerUrl = document.getElementById("copy-linker-url");
let btnDisplayShareDialog = document.querySelector(".display-qr-code");
let dialogQRcode = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog.qr-code'));
dialogQRcode.autoStackButtons = false;


function copyLinkerUrl() {
    let labelCopyUrl = document.getElementById("copy-linker-url-label");

    navigator.clipboard.writeText(linkerURL);
    labelCopyUrl.innerHTML = "Copied!";

    setTimeout(() => {
        labelCopyUrl.innerHTML = "Share with link!";
    }, 3000);
}

function generateQRCode(url) {
    let qrcode = new QRCode(document.getElementById("qr-code-image"), {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
generateQRCode(linkerURL);

btnCopyLinkerUrl.addEventListener("click", copyLinkerUrl);
btnDisplayShareDialog.addEventListener("click", () => { dialogQRcode.open() });