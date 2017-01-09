+++

date = "2015-11-06"
draft = false
title = "Hugo 静态站使用 Git 钩子配置部署"
tags = ["git", "hugo", "hook"]
description = "使用 Hugo 生成静态站点，并通过 Gogs 的 Git 服务，将站点更新（部署）到服务器"
coverimage = "/note/hugo-git-hook/hugo.png"

+++

blog.terrywh.net

迁移到 [DigitalOcean](https://www.digitalocean.com) 并重新部署，使用 [Hugo](http://gohugo.io/) 生成静态站点。 
整个站点内容的 markdown 文件保存在 Git 仓库中。同时使用 Git 钩子自动更新，编写一个脚本文件 `regenerate.sh`：

``` bash
#!/bin/bash
GIT_DIR=.git
# 等待 Git 完成更新
sleep 3
# Git 拉取新内容
cd /data/htdocs/blog.terrywh.net/content
git pull origin master
git log --oneline > version
cd /data/htdocs/blog.terrywh.net
/data/server/hugo
# 恢复
GIT_DIR=.
```

并在 git post-receive hook 中调用上述脚本文件：

``` bash
/data/htdocs/blog.terrywh.net/regenerate.sh &>/dev/null &
echo hugo regenreate in 3...
```
