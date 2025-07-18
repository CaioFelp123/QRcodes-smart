function gerarQRCode() {
  const texto = document.getElementById("qrText").value;
  const qrcodeDiv = document.getElementById("qrcode");
  qrcodeDiv.innerHTML = ""; // limpa QR anterior

  new QRCode(qrcodeDiv, {
    text: texto,
    width: 200,
    height: 200,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
}


