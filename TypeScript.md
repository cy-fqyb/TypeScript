# TypeScript 学习笔记

> [尚硅谷 TypeScript 教程](https://www.bilibili.com/video/BV1Xy4y1v7S2/)

## 什么是 TypeScript

- Ts 是微软出的一门基于 JavaScript 的编程语言
- 它是 Js 的超集，相当于 Js 的 plus 版本

## TypeScript 环境安装

- 首先需要安装 nodejs
- 其次安装好 nodejs 后,通过使用 npm 或者其它包管理工具如 yarn 全局安装即可，命令如下

```shell
    npm i -g typescript

    yarn global add typescript
```

- 验证安装:在命令行终端输入`tsc -v`后运行，如果出现相应的版本则代表安装成功
  - 注意如果使用的yarn来安装可能会出现全局安装成功，但无法使用命令的情况，这是因为没在环境变量中添加相应的路径。
  - 解决方法:使用npm来安装全局的包即可，或者手动将路径添加到环境变量中即可。
- 安装成功后输入:tsc **ts文件名** 运行后即可将ts文件编译为js文件
- 使用小技巧:
  - 推荐使用ts前使用命令`tsc init` 用来生成ts的配置文件
  - vscode的ts自动编译:`终端->运行任务->typescript->监视`这样即可在ts文件发生更改且保存后即可自动编译为Js

