# 基准

这里是 [GPlane](https://github.com/g-plane) 在其运行于 VirtualBox 中的 Arch Linux 测试表现。

## 环境

- Linux kernel 5.4.2
- Nginx 1.16.1
- PHP 7.4.0
- MariaDB 10.4.10

Nginx 的配置中仅对 CSS 和 JavaScript 开启 level 5 的 gzip，除此以外无其它优化措施。

Blessing Skin 版本：920d45a723d65e95bc561b0505cb4e97ecbcff56

## 结果

我们使用 ApacheBench 进行测试。由于这里是虚拟机，因此 QPS 没有参考价值，我们仅看服务器 `htop` 程序的参数。

**以下结果仅供参考，具体性能表现请以实际为准。**

### 空载状态

![Snipaste_2019-12-12_11-17-01.png](https://i.loli.net/2019/12/12/wqbviKz6jUPNpGX.png)

### 访问 `/skinlib`

测试命令为：`ab -n 1000 -c 1000 http://192.168.56.13/skinlib`。

![Snipaste_2019-12-12_11-09-15.png](https://i.loli.net/2019/12/12/TbKcdAxzfH3v1Ws.png)

### 访问 `/skinlib/data`

测试命令为：`ab -n 1000 -c 1000 http://192.168.56.13/skinlib/data`。

![Snipaste_2019-12-12_11-10-01.png](https://i.loli.net/2019/12/12/R9Qol12seqx68fc.png)
