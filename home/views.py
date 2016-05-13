from django.shortcuts import render
from django.views.generic import View

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
