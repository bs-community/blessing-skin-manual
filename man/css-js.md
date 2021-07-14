# 自定义 CSS、JavaScript

Blessing Skin 后台的「个性化」配置页面提供了「自定义 CSS JavaScript」功能，可以将自定义代码插入每一个页面中，可以方便快捷地修改皮肤站的默认样式、实现某些特殊的功能等等。

这个功能比较简单，原理就是直接将自定义的 CSS、JavaScript 代码插入到每个页面中的 `<style>` 与 `<script>` 标签中。想要实现更加复杂的功能的话，你可以为 Blessing Skin 写一个插件。

## 自定义登录/注册页背景图片

CSS：

```css
/* 修改成自己的图片地址 */
.login-page {
    background-image: url("http://i2.muimg.com/1949/e560362e63a9080e.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
}
```

## 为 3D 皮肤预览中的模型添加阴影

CSS（其中参数自行调整，详见 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)）：

```css
#previewer canvas {
  filter: drop-shadow(-5px 5px 10px rgba(0, 0, 0, 0.3));
}
```

![Screenshot_20200628_101205.png](https://i.loli.net/2020/06/28/sZVIqLtxUA5SwYR.png)

## 自定义关闭注册后首页的按钮文字

JavaScript:

```js
document.querySelector('.main-button').textContent = 'xxx'
```

## 添加首页导航链接

JavaScript:

```js
const navL = document.querySelector('.collapse > ul:nth-child(1)') // 导航栏左侧
const navR = document.querySelector('.navbar-custom-menu > ul:nth-child(1)') // 导航栏右侧

const item = document.createElement('li')
item.className = 'nav-item'

const link = document.createElement('a')
link.className = 'nav-link'
link.href = 'https://localhost/'
link.textContent = 'Home'
item.appendChild(link)

navL.appendChild(item)
```
