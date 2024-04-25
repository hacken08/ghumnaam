# importing time and threading 
import time 
import threading 
from pynput.mouse import Button, Controller 

# pynput.keyboard is used to watch events of 
# keyboard for start and stop of auto-clicker 
from pynput.keyboard import Listener, KeyCode 

class ClickMouse(threading.Thread): 
	
	def __init__(self, delay, button): 
		super(ClickMouse, self).__init__() 
		self.delay = delay 
		self.button = button 
		self.running = False
		self.program_running = True
		

rej_click = ClickMouse(5, button=Button.left)
print(rej_click)
