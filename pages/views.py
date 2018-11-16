from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.


def index(request):
    return render(request, 'pages/index.html.j2')


def about(request):
    return render(request, 'pages/about.html.j2')
