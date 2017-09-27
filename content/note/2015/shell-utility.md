+++

date = "2015-11-07"
draft = false
title = "Shell 命令笔记"
cover = "/images/2015/shell-utility-1.jpg"
tags = ["Windows", "Shell", "Utility"]
type = "post"

+++

> 总结了一些挺实用的 Shell 命令，Windows 和 Linux 的都有一些，如启用 Wifi 热点，清理 DNS 缓存，挂载共享等。

<!--more-->

#### Windows

Wifi HotSpot
``` bash
netsh wlan set hostednetwork mode=allow ssid={NETWORK_NAME} key={NETWORK_PASS}
netsh wlan start hostednetwork
```

DNS flushCache

``` bash
ipconfig /flushdns
```

#### Linux
挂载共享
``` bash
sudo mount -t cifs -o username=xxxxxx,uid=2017,gid=2017,cache=none,noperm,_netdev //xx.xx.xx.xx/xxxxxx /xxxx/xxxxxx
```

#### 通用

### SSH 通道
``` bash
plink -ssh {user}@{delegate_server_addr} -pw "{delegate_server_pass}" -P {delegate_server_port} -N -L {local_port}:{target_addr}:{target_port}
```
