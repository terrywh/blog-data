+++

title = "Flame"
date  = 2017-09-27T12:22:37+08:00
tags  = []
cover = "/images/default-cover.png"
type = "post"

+++

`Flame` 是一个 基于 PHP 协程 `Generator` 实现的异步协程式网络开发框架（扩展）:

``` PHP
<?php
// 框架初始化（自动设置进程名称）
flame\init("http-server", [
	"worker" => 4, // 多进程服务
]);
// 启用一个协程作为入口
flame\go(function() {
	// 创建 http 服务器
	$server = new flame\http\server(":::7678");
	// 设置默认处理程序
	$server->before(function($req, $res, $match) {
		if($match) {
			$req->data["time"] = flame\time\now();
		}
	})->get("/hello", function($req, $res) {
		yield $res->write("hello ");
		yield $res->end(" world");
	})->after(function($req, $res, $match) {
		if($match) {
			flame\log\info("cost", flame\time\now() - $req->data["time"], "ms");
		}else{
			$res->status = 404;
			$res->body = "not found";
		}
	});
	// 启动并运行服务器
	yield $server->run();
});
// 框架调度执行
flame\run();
```

#### [https://github.com/terrywh/php-flame](https://github.com/terrywh/php-flame)
* [文档](https://terrywh.github.io/php-flame)
* [示例](https://github.com/terrywh/php-flame/blob/master/examples/http_server.php)
