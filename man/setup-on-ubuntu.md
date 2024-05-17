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
::: tip 提示
由于6.0.2不支持php8.2 请安装pip8.1
例如此教程(以下的参考)：https://www.kjnotes.com/devtools/82
注:Debian和Ubuntu在储存库上有差异，以下仅针对于Ubuntu，请知晓
另请注意，Ondřej Surý只维护LTS（https://github.com/oerdnj/deb.sury.org/issues/1662）
:::



```sh
sudo apt-get install python-software-properties
sudo apt-get install software-properties-common
sudo add-apt-repository ppa:ondrej/php
## LC_ALL=C.UTF-8 add-apt-repository ppa:ondrej/php
#最后更新
sudo apt-get update
```


```sh
sudo apt install php8.1  -y
sudo apt install  php8.1-gd php8.1-mbstring php8.1-xml php8.1-zip php8.1-pgsql -y
sudo apt install apache2 -y
```


验证 PHP 版本：

```sh
php -vOutput
```
::: 切换PHP版本
##### 命令行PHP
```sh
sudo update-alternatives --config php
```
选择pip8.1
```sh
有 4 个候选项可用于替换 php (提供 /usr/bin/php)。

  选择       路径                优先级  状态
------------------------------------------------------------
* 0            /usr/bin/php.default   100       自动模式
  1            /usr/bin/php.default   100       手动模式
  2            /usr/bin/php8.1        81        手动模式
  3            /usr/bin/php8.2        82        手动模式
  4            /usr/bin/php8.3        83        手动模式

要维持当前值[*]请按<回车键>，或者键入选择的编号：2
```

##### Apache PHP
禁用你原来的PHP(以8.3为例)
```sh
sudo a2dismod php8.3
sudo systemctl restart apache2
```

启用PHP 8.1
```sh
sudo a2enmod php8.1
sudo systemctl restart apache2
```
(来自https://news.sangniao.com/p/1366233398)
:::



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
!请逐行输入
```sh
sudo apt install postgresql -y
sudo su postgres
psql
\password
CREATE DATABASE blessingskin;
\q
```
su回原账户

<br>


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
