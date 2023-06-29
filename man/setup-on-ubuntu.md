# 在 Ubuntu 上安装

~~理论上只要一顿 CV 就能装好！~~

- 请先看看 [安装指南](./setup)
- **请知晓自己要执行的每条命令的意义！**

## 系统版本

`Ubuntu Server 22.04.2 LTS x86_64`

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

## 安装 PHP 及相关拓展

```sh
sudo apt install apache2 php php-gd php-mbstring php-xml php-zip php-pgsql -y
```

<details>
<summary>详情</summary>

```text
正在读取软件包列表... 完成
正在分析软件包的依赖关系树... 完成
正在读取状态信息... 完成
将会同时安装下列软件：
  apache2-bin apache2-data apache2-utils libapache2-mod-php8.1 libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap libgd3 liblua5.3-0 libonig5 libzip4 mailcap mime-support php-common php8.1
  php8.1-cli php8.1-common php8.1-gd php8.1-mbstring php8.1-opcache php8.1-readline php8.1-xml php8.1-zip ssl-cert
建议安装：
  apache2-doc apache2-suexec-pristine | apache2-suexec-custom php-pear libgd-tools
下列【新】软件包将被安装：
  apache2 apache2-bin apache2-data apache2-utils libapache2-mod-php8.1 libapr1 libaprutil1 libaprutil1-dbd-sqlite3 libaprutil1-ldap libgd3 liblua5.3-0 libonig5 libzip4 mailcap mime-support php php-common
  php-gd php-mbstring php-xml php-zip php8.1 php8.1-cli php8.1-common php8.1-gd php8.1-mbstring php8.1-opcache php8.1-readline php8.1-xml php8.1-zip ssl-cert
升级了 0 个软件包，新安装了 31 个软件包，要卸载 0 个软件包，有 0 个软件包未被升级。
需要下载 8,255 kB 的归档。
解压缩后会消耗 32.8 MB 的额外空间。
您希望继续执行吗？ [Y/n]
```

</details>

验证 PHP 版本：

```text {1}
ubuntu@10-60-84-53:~$ php -v
PHP 8.1.2-1ubuntu2.11 (cli) (built: Feb 22 2023 22:56:18) (NTS)
Copyright (c) The PHP Group
Zend Engine v4.1.2, Copyright (c) Zend Technologies
    with Zend OPcache v8.1.2-1ubuntu2.11, Copyright (c), by Zend Technologies
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

![](/安装向导-填写数据库信息.png)
