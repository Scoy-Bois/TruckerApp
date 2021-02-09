FROM python:3.7-alpine
ENV PYTHONBUFFERED=1
WORKDIR /code
COPY requirements.txt /code/
EXPOSE 8000
RUN pip install -r requirements.txt
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/main' >> /etc/apk/repositories
RUN echo 'http://dl-cdn.alpinelinux.org/alpine/v3.6/community' >> /etc/apk/repositories
RUN apk update
RUN apk add mongodb
COPY . /code/
