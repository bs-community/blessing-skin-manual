# Benchmarking

Here is [GPlane](https://github.com/g-plane) performance on its Arch Linux test running in VirtualBox.

## surroundings

- Linux kernel 5.4.2
- Nginx 1.16.1
- PHP 7.4.0
- MariaDB 10.4.10

In the configuration of Nginx, only level 5 gzip is enabled for CSS and JavaScript, and there are no other optimization measures.

Blessing Skin Version: 920d45a723d65e95bc561b0505cb4e97ecbcff56

## result

We use ApacheBench for testing. Since this is a virtual machine, QPS has no reference value, we only look at the parameters of the server `htop` program.

**The following results are for reference only, the actual performance shall prevail. **

### No-load status

![Snipaste_2019-12-12_11-17-01.png](https://i.loli.net/2019/12/12/wqbviKz6jUPNpGX.png)

### Access `/skinlib`

The test command is: `ab -n 1000 -c 1000 http://192.168.56.13/skinlib`.

![Snipaste_2019-12-12_11-09-15.png](https://i.loli.net/2019/12/12/TbKcdAxzfH3v1Ws.png)

### Access `/skinlib/data`

The test command is: `ab -n 1000 -c 1000 http://192.168.56.13/skinlib/data`.

![Snipaste_2019-12-12_11-10-01.png](https://i.loli.net/2019/12/12/R9Qol12seqx68fc.png)