from django.db import connections
from django.http import JsonResponse
from django.db.utils import OperationalError

# Create your views here.


def health_check(request):
    db_status = "ok"

    try:
        connections["default"].cursor()
    except OperationalError:
        db_status = "error"

    status_code = 200 if db_status == "ok" else 503

    return JsonResponse({"db_status": db_status}, status=status_code)
