FROM php:8.1-apache

# install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    zip \
    curl \
    unzip \
    apt-utils \
    libpng-dev \
    libonig-dev \
    libmcrypt-dev \
    zlib1g-dev \
    libxml2 \
    libzip-dev \
    procps

# timezone
RUN cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
    echo "Asia/Tokyo" > /etc/timezone

# install php extensions
RUN docker-php-ext-install pdo pdo_mysql mysqli gd zip opcache

# install latest composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# set working directory
WORKDIR /var/www/html

# install composer dependencies
COPY ./src/composer.* ./
RUN composer install --no-scripts --no-autoloader

# enable apache rewrite mode
RUN a2enmod rewrite

# copy sources to workdir
COPY ./src .

# copy config files
COPY ./php/php.ini /usr/local/etc/php/
COPY ./apache/apache2.conf /etc/apache2/apache2.conf
COPY ./apache/mpm_prefork.conf /etc/apache2/mods-enabled/mpm_prefork.conf
COPY ./apache/vhost.conf /etc/apache2/sites-enabled/000-default.conf

# load composer dependencies
RUN composer dump-autoload --optimize

# execute user
USER root

# change role for www-data
RUN usermod -u 1000 www-data \
    && groupmod -g 1000 www-data

# change owner to www-data
RUN chown -R www-data:www-data /var/www/html/storage/logs \
    /var/www/html/storage/framework/views \
    /var/www/html/storage/framework/cache \
    /var/www/html/storage/app

EXPOSE 80

CMD ["apache2-foreground"]