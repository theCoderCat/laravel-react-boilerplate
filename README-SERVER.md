# 1. Foreword

This project was created mainly for the frontend demonstration, the back-end side is here to provide API to work with front-end's axios setup. As new projects will require new backend technology, therefore I will keep the backend side as simple as possible.

# 2. Software requirements and installation

- Assume that your project is in `C:\Projects\react-laravel-sample-project`
- You can choose either **Docker** OR **XAMPP stack** below
  
## 2.1 Use Docker
- Download and install docker from [here](https://www.docker.com/)
- Open `cmd` and execute these commands to start Laravel server in a docker container

```
cd C:\Projects\react-laravel-sample-project
docker-compose up
```
- It's gonna take a while, when it's done, the server will be ready at `http://localhost:3000`


## 2.2 Use XAMPP stack

- Download xampp 8.1.4 from [here](https://www.apachefriends.org/xampp-files/8.1.4/xampp-windows-x64-8.1.4-1-VS16-installer.exe)
- Install xampp into `C:\xampp`
- Open `Explorer`, right click `This PC` -> `Properties` -> `Advanced system settings` -> `Environment Variables...` -> `Path` -> `New` -> enter `C:\xampp\php` value to add `php` into your path
- Open `cmd` and confirm it with `php -v`, it should show something like this
  
```
PHP 8.1.4 (cli) (built: Apr 28 2021 00:30:18) ( ZTS Visual C++ 2019 x64 )
Copyright (c) The PHP Group
Zend Engine v4.0.5, Copyright (c) Zend Technologies
```

- Download composer installer from [here](https://getcomposer.org/download/)

### 2.2.1 Start Mysql server

- Open Xampp Control Panel and start mysql server
- Open `.env` and change database settings to following values:

```
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=laravel
DB_USERNAME=root
DB_PASSWORD=
```

### 2.2.2 Use XAMPP and composer to serve PHP code

- Open `cmd` and execute these commands to start Laravel server

```
cd C:\Projects\react-laravel-sample-project\src
composer install
php artisan serve --port 3000
```
- Open browser, enter the address `http://localhost:3000`
