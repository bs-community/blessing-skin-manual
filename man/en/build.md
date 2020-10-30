# Manual Build

If you're going to contribute to our project, or you want to use unreleased features, you can deploy by using code at GitHub.

**We don't recommend users who aren't familiar with Shell to build from scratch.**

## Steps

Please make sure you have installed tools below:

- [Git](https://git-scm.org)
- [Node.js](https://nodejs.org)
- [Yarn](https://yarnpkg.com)
- [Composer](https://getcomposer.org)
- [PowerShell Core](https://github.com/PowerShell/PowerShell#get-powershell)

Run commands:

```bash
git clone https://github.com/bs-community/blessing-skin-server.git
cd blessing-skin-server
composer install
cp .env.example .env
php artisan key:generate
yarn
pwsh ./tools/build.ps1
```

If you pass the parameter `-Simple` to script `build.ps`, it will only run webpack to compile code without copying background image of home page and generating commit information.

Next, please follow [Setup](setup.md) to finish installation.
