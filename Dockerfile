FROM 200.0.1.1:5000/httpd  

COPY dist/Test /usr/local/apache2/htdocs/

EXPOSE 4200

CMD apachectl -D FOREGROUND
