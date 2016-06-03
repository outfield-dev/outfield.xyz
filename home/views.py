from django.shortcuts import render
from django.views.generic import View
from django.http import JsonResponse
from home.models import Email, Impression

# Create your views here.
class HomeView(View):
	def get(self, request):
		Impression.objects.create(page='home')
		return render(request, 'home/home.html', {})

class ServicesView(View):
	def get(self, request):
		Impression.objects.create(page='services')
		return render(request, 'home/services.html', {})

class MappingServicesView(View):
	def get(self, request):
		Impression.objects.create(page='services')
		return render(request, 'home/s_mapping.html', {})

class MarginServicesView(View):
	def get(self, request):
		Impression.objects.create(page='services')
		return render(request, 'home/s_margins.html', {})

class WeedServicesView(View):
	def get(self, request):
		Impression.objects.create(page='services')
		return render(request, 'home/s_weeds.html', {})

class AboutView(View):
	def get(self, request):
		Impression.objects.create(page='about')
		return render(request, 'home/about.html', {})

def send_email(request):

	name = request.POST['name']
	email = request.POST['email']
	message = request.POST['message']

	email = Email.objects.create(name=name, email=email, message=message)
	email.send()

	return JsonResponse({'success': True})
