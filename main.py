#encoding: utf-8
import eel

global text
text = 'https://www.google.com'

web_app_options = {
	'mode': "None",
	'port': 9700,
    'host': '0.0.0.0'
}

@eel.expose
def update(new_text = ''):
    global text
    if new_text and new_text != text:
        text = new_text
        # print(new_text)
    eel.show_qrcode(text)

eel.init('web')
eel.start('index.html', options = web_app_options)
