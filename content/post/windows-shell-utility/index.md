+++
Categories = ["Utility"]
date = "2015-11-07"
draft = false
title = "Windows 常用命令"

+++

Wifi HotSpot
``` bash
netsh wlan set hostednetwork mode=allow ssid={NETWORK_NAME} key={NETWORK_PASS}
netsh wlan start hostednetwork 
```

注意还需要在已有的 Internet 连接上设置共享网络给新启用的 Wifi 网络：

![共享网络连接](/post/windows-shell-utility/share_internet.jpg)


DNS flushCache

``` bash
ipconfig /flushdns
```