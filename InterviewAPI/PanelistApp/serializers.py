from rest_framework import serializers
from PanelistApp.models import Panels, Members

class PanelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Panels
        fields = ('PanelId',
                  'PanelName')

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Members
        fields = ('MemberId',
                  'MemberName',
                  'Panel',
                  'DateOfJoining',
                  'PhotoFileName')
