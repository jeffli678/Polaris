#encoding: utf-8
import eel

web_app_options = {
	'mode': "None", #or "chrome"
	'port': 9600,
}

eel.init('web')
eel.start('index.html', options = web_app_options)
