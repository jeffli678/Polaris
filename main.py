#encoding: utf-8
import eel

global text

web_app_options = {
	'mode': "None", #or "chrome"
	'port': 9600,
}

@eel.expose
def update(new_text):
    text = new_text
    # print(new_text)
    eel.show_qrcode(text)

eel.init('web')
eel.start('index.html', options = web_app_options)
