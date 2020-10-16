from django.shortcuts import render
from django.http import HttpResponse
from django.http import Http404
from django.template import loader

# Create your views here.
def index(request):
    context = {
        
    }

    return render(request, 'material/index.html', context)

def vue(request):
    context = {
        
    }

    return render(request, 'material/vue.html', context)

def balm(request):
    context = {
        
    }

    return render(request, 'material/balm.html', context)    