from django.shortcuts import render
from django.conf import settings
from django.core.mail import send_mail
from django.http import HttpResponse, HttpResponseRedirect

# Create your views here.
def index(request):
    return render(request, 'index.html')

def submail(request):
    if request.method == "POST":
        email = request.POST.get('email')
        name = request.POST.get('name')
        subject = request.POST.get('subject')
        message = request.POST.get('message')
        send_mail(subject, message + '\n\n Sent by: ' + "\n\nName: " + name + "\n\nEmail: " + email, email, ['literarycouncil.dpssbangalore@gmail.com'], fail_silently=False)
        return HttpResponseRedirect('/')