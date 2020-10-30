# 手动构建

如果您想为此项目作贡献，或者抢先尝试未发布的新功能，您可以先用 GitHub 上的代码部署。

**不推荐不熟悉 shell 操作以及不想折腾的用户使用。**

## 步骤

请先确保您安装好以下工具：

- [Git](https://git-scm.org)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Composer](https://getcomposer.org)
- [PowerShell Core](https://github.com/PowerShell/PowerShell#get-powershell)

然后执行以下命令来拉取代码：

```bash
git clone https://github.com/bs-community/blessing-skin-server.git
cd blessing-skin-server
composer install
cp .env.example .env
php artisan key:generate
yarn
pwsh ./tools/build.ps1
```

如果传递 `-Simple` 参数给 `build.ps1` 脚本，则只会运行 webpack 来编译代码，而不会复制首页背景以及生成 commit 信息。

接下来按照 [安装指南](setup.md) 中的后续步骤去完成安装即可。

## 订阅我们的频道

如果您有在使用 Blessing Skin 的开发版（即仓库中 dev 分支的代码），建议您订阅我们的 [Blessing Skin News](https://t.me/blessing_skin_news)。当有新的代码被推送时，我们的机器人将会在频道内发送一条消息来提示您能否拉取最新代码，以及拉取后应该做什么。
