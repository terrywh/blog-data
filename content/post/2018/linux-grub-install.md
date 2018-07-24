+++

title = "Linux 闹腾的双启动 Grub"
date = "2018-07-23"
tags = ["linux", "deepin", "grub","启动","引导", "archlinux"]
cover = "/images/default-cover.png"
categories = "笔记"

+++

尝试在 Linux 下工作了一段时间，安装了 N 多个种类发行版本，最终本着“不折腾”原则停留在了 Deepin，比较一下安装的几个版本感觉：
* Ubuntu
安装过程很流畅，完成后简单换了下安装源，Gnome 尝试了几个开发工具写了些代码，大概持续了 4 天，实在搞不定 QQ / TIM （使用 Wine 能启动，要么无法输入，要么一堆框框，要么字体太丑）；很几个工具出现输入法相关的问题，换 fcitx 后有缓解，但还有无法输出的应用。

* Archlinux
从头安装一般人搞不了：安装过程查了各种“教程”，由衷的感觉自己对 Linux 底层了解还是太少，很多操作根本不知到干什么；当然，结果 OK 还是装上了，安装桌面环境尝试了 KDE 和 XFCE，最终觉得安装走的太糊涂，而且实在需要配置太多东西，遂放弃。

* Antegros
基于 Archlinux 的发行版本，官网感觉比下面这个漂亮点，结果这个最搞笑；重启、重试安装了 N 多回，每次在所有配置完毕开始安装的时候提示“请稍候...”，然后就，没有然后了...

* Manjaro
对这个抱着希望最大，安装、初期使用都很不错，碰到的诡异问题在网上搜索到的结果都是1年前：网卡断开后无法重连；我需要配置 802.1 安全协议，做配置就要断开，断开就连不回来；后来以为网卡驱动问题，尝试良久未果，一度导致完全无法联网，放弃。

* Deepin
本来选择 Arch 系列就是奔着移植的 Deepin 版本的 QQ/TIM 去的，所以想着干脆回到本家试试；尝试感受不错，各种东西都稳定，碰到一点点小问题，使用自带的驱动管理器安装闭源版本驱动失败（重启提示无法启动 Display 然后恢复开源驱动），但是关闭桌面，从纯命令行安装后一切正常；目前装了 Linux 版本 Steam 的 Dota2 来国服合同事来了两把没碰到问题。

在安装过程中经常碰到 Grub 无法正确引导的情况，大部分使用下面命令解决：
```
# 确认启动 boot 分区位置
ls
ls (hd1,gpt4)
# 设置启动目标参数
set root=(hd1,gpt4)
set prefix=(hd1,gpt4)/boot/grub
# 启动
insmod normal
normal
```
实际在进入 Linux 后需要重新安装或配置 GRUB 这里一般是：
```
# 确认启动分区 /boot 挂载
df
# 安装更新
grub-install --efi-directory=/boot/efi
update-grub
```

由于我删除了 EFI 分区中不断安装系统残留的信息，导致 Deepin 的 Grub 也不正确引导，搜索很久发现：Deepin 的 Grub 配置文件需要放在 ubuntu 文件夹中（貌似是移植的不够彻底造成的）才能生效。算是个小坑，有碰到的同学可以自行调整，类似：`cp /boot/efi/Deepin/grub.cfg /boot/efi/ubuntu/` 即可。
