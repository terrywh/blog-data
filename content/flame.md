+++

title = "Flame"
date  = 2017-09-27T12:22:37+08:00
tags  = []
cover = "/images/default-cover.png"
type = "post"

+++

`Flame` 是一个 基于 PHP 协程 `Generator` 实现的异步协程式框架（扩展）:

``` PHP
<?php
// 框架初始化（自动设置进程名称）
flame\init("http-server", [
	"worker" => 4, // 多进程服务
]);
// 启用一个协程作为入口
flame\go(function() {
	// 创建 http 处理器
	$handler = new flame\net\http\handler();
	// 设置默认处理程序
	$handler->handle(function($req, $res) {
		yield $res->write_header(404);
		yield flame\time\sleep(2000);
		yield $res->end("not found");
	})->get("/hello", function($req, $res) {
		yield $res->end("hello world");
	});
	// 创建网络服务器（这里使用 TCP 服务器）
	$server = new flame\net\tcp_server();
	// 指定处理程序
	$server->handle($handler);
	// 绑定地址（支持 IPv6）
	$server->bind("::", 19001);
	yield $server->run();
});
// 框架调度执行
flame\run();
```

#### [https://github.com/terrywh/php-flame](https://github.com/terrywh/php-flame)
* [文档](https://terrywh.github.io/php-flame)
* [示例](https://github.com/terrywh/php-flame/blob/master/examples/http_server.php)
