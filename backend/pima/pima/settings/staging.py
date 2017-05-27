from .base import *

DEBUG = False
ALLOWED_HOSTS = ['207.154.204.214:8000', '207.154.204.214']
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'postgres',
        'USER': 'postgres',
        'HOST': 'db',
        'PORT': 5432,
    }
}

CHANNEL_LAYERS = {
    'default': {
        'BACKEND': 'asgi_redis.RedisChannelLayer',
        'CONFIG': {
            'hosts': [('redis', 6379)],
        },
        'ROUTING': 'devices.routing.channel_routing',
    }
}
