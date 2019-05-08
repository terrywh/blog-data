+++

title = "Server Initialization"
date = "2019-05-08"
cover = "/images/default-cover.png"
categories = "笔记"

+++

#### BASIC

``` Bash
apt update
apt upgrade
apt install aria2 build-essential cmake libpcre3-dev libssl-dev zlib1g-dev
mkdir -p /data/server/v2ray
```

#### NGINX

```
cd ~
wget http://nginx.org/download/nginx-1.15.12.tar.gz
tar xf nginx-1.15.12.tar.gz
cd nginx-1.15.12
./configure --with-http_ssl_module --without-select_module --with-http_v2_module --with-http_gzip_static_module --prefix=/data/server/nginx
make -j2
make install
```

#### V2RAY

```
cd ~
wget https://github.com/v2ray/v2ray-core/releases/download/v4.18.1/v2ray-linux-64.zip
cd /data/server/v2ray
unzip ~/v2ray-linux-64.zip
```

#### Certificate
```
mkdir -p /etc/letsencrypt/live/
scp -r root@source_host:/etc/letsencrypt/live/terrywh.net /etc/letsencrypt/live/
```

#### START

```
/data/server/nginx/sbin/nginx
aria2c --conf-path=/data/htdocs/downloads.terrywh.net/etc/aria2.conf
/data/server/v2ray/v2ray --config /data/server/v2ray/config.json &>/dev/null &
```
