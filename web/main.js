eel.expose(show_qrcode);

window.onload = function(event){
  // show_qrcode();
  eel.update();
  document.onkeypress = function(e){
    if(e.keyCode == 13){
      update();
    }
  }
  document.getElementById('text').focus();
}

// function show_qrcode(text = "https://www.google.com")
function show_qrcode(text)
{
  document.getElementById("qrcode").innerHTML = '';
  document.getElementById("text").value = text;
  var qrcode = new QRCode("qrcode", {width : 512, height : 512});
  qrcode.clear();
  qrcode.makeCode(text);
  document.getElementById('text').focus();
  console.log(text)
}

function update()
{
  text = document.getElementById('text').value;
  eel.update(text);
  document.getElementById('text').focus();
}

function clear_text()
{
  document.getElementById('text').value = '';
}

function go()
{
  url = document.getElementById('text').value;
  link_a = document.getElementById('link');
  link_a.href = url;
  link_a.click();
}
