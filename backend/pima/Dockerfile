FROM python:2.7
EXPOSE 8000
RUN mkdir /code
WORKDIR /code
ADD requirements.txt /code/
RUN pip install -r requirements.txt
ADD . /code/
RUN ./manage.py migrate
CMD ["./manage.py", "runserver", "0.0.0.0:8000"]