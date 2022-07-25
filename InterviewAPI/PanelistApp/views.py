from pickle import GET
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from PanelistApp.models import Panels, Members
from PanelistApp.serializers import PanelSerializer, MemberSerializer 

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def panelApi(request, id=0):
    if request.method == 'GET':
        panels = Panels.objects.all()
        panels_serializer = PanelSerializer(panels,many=True)
        return JsonResponse(panels_serializer.data,safe=False)
    elif request.method == 'POST':
        panel_data = JSONParser().parse(request)
        panel_serializer = PanelSerializer(data=panel_data)
        if panel_serializer.is_valid():
            panel_serializer.save()
            return JsonResponse("Successfully added the posted panel data.", safe=False)
        return JsonResponse("Incorrect panel data", safe=False)

    elif request.method == 'PUT':
        panel_data = JSONParser().parse(request)
        panel = Panels.objects.get(PanelId=panel_data['PanelId'])
        panel_serializer = PanelSerializer(panel,data=panel_data)
        if panel_serializer.is_valid():
            panel_serializer.save()
            return JsonResponse("Panel data updated successfully.", safe=False)
        return JsonResponse("Incorrect Panel data.", safe=False)

    elif request.method == 'DELETE':
        panel = Panels.objects.get(PanelId=id)
        panel.delete()
        return JsonResponse("Panel record deleted successfully.", safe=False)
    return JsonResponse("Panel ID not found.", safe=False)

@csrf_exempt
def memberApi(request, id=0):
    if request.method == 'GET':
        members = Members.objects.all()
        members_serializer = MemberSerializer(members,many=True)
        return JsonResponse(members_serializer.data,safe=False)
    elif request.method == 'POST':
        member_data = JSONParser().parse(request)
        member_serializer = MemberSerializer(data=member_data)
        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse("Successfully added the posted member data.", safe=False)
        return JsonResponse("Incorrect member data", safe=False)

    elif request.method == 'PUT':
        member_data = JSONParser().parse(request)
        member = Members.objects.get(MemberId=member_data['MemberId'])
        member_serializer = MemberSerializer(member,data=member_data)
        if member_serializer.is_valid():
            member_serializer.save()
            return JsonResponse("Member data updated successfully.", safe=False)
        return JsonResponse("Incorrect Member data.", safe=False)

    elif request.method == 'DELETE':
        member = Members.objects.get(MemberId=id)
        member.delete()
        return JsonResponse("Member record deleted successfully.", safe=False)
    return JsonResponse("Member ID not found.", safe=False)

@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name,safe=False)