eel.expose(show_qrcode);

window.onload = function(event){
  show_qrcode();
}

function show_qrcode(text = "https://www.google.com")
{
  document.getElementById("qrcode").innerHTML = '';
  document.getElementById("text").value = text;
  var qrcode = new QRCode("qrcode", {width : 512, height : 512});
  qrcode.clear();
  qrcode.makeCode(text);
}

function update()
{
  text = document.getElementById('text').value;
  eel.update(text);
}
