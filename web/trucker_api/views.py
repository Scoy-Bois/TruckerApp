from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view

@api_view(["GET"])
def login(request):
    test = "hello"
    test2 = [1,2,3]
    return Response(status=status.HTTP_200_OK, data={"a":test, "b":test2})
