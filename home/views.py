from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from home.models import Email

# Create your views here.
class HomeView(View):
	def get(self, request):
		return render(request, 'home/home.html', {})

class ServicesView(View):
	def get(self, request):
		return render(request, 'home/services.html', {})

class AboutView(View):
	def get(self, request):
		return render(request, 'home/about.html', {})

def send_email(request):

	name = request.POST['name']
	email = request.POST['email']
	message = request.POST['message']

	email = Email.objects.create(name=name, email=email, message=message)
	email.send()

	return JsonResponse({'success': True})
