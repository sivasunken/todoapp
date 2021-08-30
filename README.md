# Todo App

 Sample ToDo App

MySQL Docker Container

```powershell

docker run -p3306:3306 --name mysql1 -e MYSQL_ROOT_PASSWORD=W@C60^vKRCSB -d mysql:5.7 

docker exec -it mysql1 mysql -uroot -p

SELECT host, user FROM mysql.user;

create database tododb;

show databases;

```
