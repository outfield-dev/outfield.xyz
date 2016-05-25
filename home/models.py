from __future__ import unicode_literals

from django.db import models
from django.core.mail import send_mail

# Create your models here.
class Email(models.Model):

	### Properties
	date_created = models.DateTimeField(auto_now_add=True)
	name = models.CharField(max_length=255)
	email = models.CharField(max_length=255)
	message = models.TextField(default='')

	def send(self):
		send_mail(
			'[DJANGO] Contact Form',
			self.message,
			self.email,
			['outfield.url@gmail.com'],
		)

class Impression(models.Model):

	### Properties
	date_created = models.DateTimeField(auto_now_add=True)
	page = models.CharField(max_length=255)
