+++

date = "2015-11-07"
draft = false
title = "Windows Shell 命令笔记"
image = "https://i-msdn.sec.s-msft.com/dynimg/IC816797.png"
description = "总结了一些 Windows 下挺实用的 Shell 命令，例如启用 Wifi 热点，清理 DNS 缓存等"
tags = ["Windows", "shell", "utility"]

+++

> 总结了一些 Windows 下挺实用的 Shell 命令，例如启用 Wifi 热点，清理 DNS 缓存等

Wifi HotSpot
``` bash
netsh wlan set hostednetwork mode=allow ssid={NETWORK_NAME} key={NETWORK_PASS}
netsh wlan start hostednetwork 
```

DNS flushCache

``` bash
ipconfig /flushdns
```