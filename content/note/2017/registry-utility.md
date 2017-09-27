+++

date = "2017-08-01"
draft = false
title = "注册表常用设置"
cover = "/images/2017/registry-utility-1.png"
tags = ["Windows", "Registry", "Utility"]
type = "post"

+++

> 从网络上各处收集到的各种调整 Windows 配置相关的注册表项，记录以备不时之需~
<!--more-->

| 键值 | 类型 | 值  | 说明 |
| ---  | ---  | --- | ---  |
| HKEY_CURRENT_USER\Software\Microsoft\ <br/>Windows\CurrentVersion\Explorer\Advanced\ <br/>DisabledHotkeys | REG_EXPAND_SZ | SA | 禁用 `Win + S/A` 快捷键 |
| HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\ <br/>Control\Power\PowerSettings\ <br/>7516b95f-f776-4464-8c53-06167f40cc99\ <br/>8EC4B3A5-6868-48c2-BE75-4F3044BE88A7 | REG_DWORD | 0x00000002 | 开启额外的电源设置 “控制台锁定后显示关闭超时” |
