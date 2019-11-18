 #!/bin/bash
 
 if [ $(docker container ls -q --filter name=my_app_container ) != '' ];then
  docker container stop my_app_container
  docker container rm my_app_container
 fi
 if [ $(docker image ls -q --filter reference=my_app) != '' ];then
 docker image rm my_app
 fi
  docker build -t my_app .
 
 docker run -itd -p 8000:4200 --name my_app_container my_app
                           