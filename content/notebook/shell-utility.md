+++

date = "2015-11-07"
draft = false
title = "Shell 命令笔记"
coverimage = "https://i-msdn.sec.s-msft.com/dynimg/IC816797.png"
tags = ["Windows", "shell", "utility"]
type = "post"

+++

> 总结了一些挺实用的 Shell 命令，例如启用 Wifi 热点，清理 DNS 缓存等

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

#### 通用

### SSH 通道
``` bash
plink -ssh {user}@{delegate_server_addr} -pw "{delegate_server_pass}" -P {delegate_server_port} -N -L {local_port}:{target_addr}:{target_port}
```
