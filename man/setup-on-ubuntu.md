# 在 Ubuntu 上安装

- 请先看看 [安装指南](./setup)
- 请知晓自己要执行的每条命令的意义

## 系统版本

Ubuntu Server 22.04.2 LTS x86_64

## 系统更新

```sh
# 更新软件源 && 更新软件包 && 删除旧软件包
sudo apt update && sudo apt upgrade -y && sudo apt autoremove -y
```

## 安装系统中文语言包（可选）

```sh
# 安装系统中文语言包
sudo apt install language-pack-zh-hans manpages-zh -y

# 设置默认中文语言（要输入密码）
localectl set-locale LANG=zh_CN.UTF-8 LANGUAGE=zh_CN.UTF-8

# 重启主机生效
sudo reboot
```

## 安装一些小工具

```sh
sudo apt install vim git zip -y
```

## 安装 PHP 及相关扩展

```sh
sudo apt install apache2 php php-gd php-mbstring php-xml php-zip php-pgsql -y
```

验证 PHP 版本：

```sh
php -v
```

## 下载 blessing-skin-server

请到 [GitHub Releases](https://github.com/bs-community/blessing-skin-server/releases) 页面确认最新版的下载链接。

```sh
wget https://github.com/bs-community/blessing-skin-server/releases/download/6.0.2/blessing-skin-server-6.0.2.zip
```

## 解压缩

```sh
sudo mkdir /var/www/blessing-skin
sudo unzip blessing-skin-server-6.0.2.zip -d /var/www/blessing-skin/
```

## 修改文件权限

```sh
sudo chown -R www-data:www-data /var/www/blessing-skin
```

## 生成密钥

```sh
cd /var/www/blessing-skin/
sudo cp .env.example .env
sudo php artisan key:generate
```

## 配置 Apache

### 编写配置文件

```sh
sudo vim /etc/apache2/sites-available/blessing-skin.conf
```

```conf
<VirtualHost *:80>
  ServerAdmin webmaster@localhost
  DocumentRoot /var/www/blessing-skin/public

  <Directory /var/www/blessing-skin/public>
    AllowOverride All
  </Directory>

  ErrorLog ${APACHE_LOG_DIR}/error.log
  CustomLog ${APACHE_LOG_DIR}/access.log combined
</VirtualHost>

# vim: syntax=apache ts=4 sw=4 sts=4 sr noet
```

### 配置 SSL 证书（HTTPS）（推荐）

在云主机服务商可以申请一年免费的 SSL 证书。
申请到了一般会有 `ca.crt`、`private.key`、`public.crt` 三个文件。
把这三个文件上传到云主机的 `/var/www/blessing-skin/ssl/` 目录中，然后执行以下操作：

1.  修改文件权限：

    ```sh
    sudo chown www-data:www-data -R /var/www/blessing-skin/ssl
    ```

2.  启用 Apache2 的 SSL 模块：

    ```sh
    sudo a2enmod ssl
    ```

3.  编辑 `/etc/apache2/sites-available/blessing-skin.conf` 配置文件：

    ```conf
    <IfModule mod_ssl.c>
      <VirtualHost *:80>
        RewriteEngine On
        RewriteCond %{HTTPS} off
        RewriteRule (.*) https://%{HTTP_HOST}%{REQUEST_URI}
      </VirtualHost>
      <VirtualHost *:443>
        ServerAdmin webmaster@localhost
        DocumentRoot /var/www/blessing-skin/public

        ServerName skin.mc.yue.zone
        SSLCertificateFile /var/www/blessing-skin/ssl/public.crt
        SSLCertificateKeyFile /var/www/blessing-skin/ssl/private.key
        SSLCertificateChainFile /var/www/blessing-skin/ssl/ca.crt

        <Directory /var/www/blessing-skin/public>
          AllowOverride All
        </Directory>

        ErrorLog ${APACHE_LOG_DIR}/error.log
        CustomLog ${APACHE_LOG_DIR}/access.log combined
      </VirtualHost>
    </IfModule>

    # vim: syntax=apache ts=4 sw=4 sts=4 sr noet
    ```

4.  重启 Apache2 服务使配置生效：
    ```sh
    sudo systemctl restart apache2.service
    ```

### 配置站点

```sh
# 禁用默认站点
sudo a2dissite 000-default.conf

# 启用 blessing-skin 站点
sudo a2ensite blessing-skin.conf

# 启用 rewrite 模块
sudo a2enmod rewrite

# 重新加载 Apache 服务使配置生效
sudo systemctl restart apache2.service
```

## 安装配置 PostgreSQL

```sh
sudo apt install postgresql -y
sudo su postgres
psql
\password
CREATE DATABASE blessingskin;
```

修改 `/etc/postgresql/14/main/postgresql.conf` 文件第 60 行取消注释，允许本地登入数据库。

```conf
listen_addresses = 'localhost'          # what IP address(es) to listen on;
```

重启服务使配置生效：

```sh
sudo systemctl restart postgresql.service
```

## 安装 Redis

```sh
sudo apt install redis php-redis
```

配置请参考 [配置文件介绍 - Redis 相关](https://blessing.netlify.app/env.html#%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E5%AD%97%E6%AE%B5%E8%AF%A6%E8%A7%A3)

## 运行安装向导

现在访问主机 IP 可以看到欢迎页面了，请在选择数据库类型为 PostgreSQL：

![](/setup-database.png)
