FROM 200.0.1.1:5000/httpd  

COPY dist/Test /usr/local/apache2/htdocs/

EXPOSE 80

CMD apachectl -D FOREGROUND