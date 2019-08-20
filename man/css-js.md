# 自定义 CSS、JavaScript

Blessing Skin 后台的「个性化」配置页面提供了「自定义 CSS JavaScript」功能，可以将自定义代码插入每一个页面中，可以方便快捷地修改皮肤站的默认样式、实现某些特殊的功能等等。

这个功能比较简单，原理就是直接将自定义的 CSS、JavaScript 代码插入到每个页面中的 `<style>` 与 `<script>` 标签中。想要实现更加复杂的功能的话，你可以为 Blessing Skin 写一个插件。

## 自定义登录/注册页背景图片

CSS（自行按需修改）：

```css
/* 修改成自己的图片地址 */
.login-page {
    background-image: url("http://i2.muimg.com/1949/e560362e63a9080e.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
}
```

## 自定义首页顶栏文字颜色

配合上一条使用，使用深色背景图片时会用到。

```css
.transparent .container .navbar-header a,
.transparent .container .navbar-collapse a,
.transparent .container a.dropdown-toggle,
.transparent .container span {
    /* 自行修改这里的颜色 */
    color: #f1f1f1 !important;
}
```

## 为 3D 皮肤预览中的模型添加阴影

CSS（其中参数自行调整，详见 [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow)）：

```css
.previewer-3d canvas {
  filter: drop-shadow(-5px 5px 10px rgba(0, 0, 0, 0.3));
}
```

![Snipaste_2018-02-24_16-15-45.png](https://i.loli.net/2018/02/24/5a911f3c7f130.png)

## 自定义关闭注册后首页的按钮文字

JavaScript:

```js
// 自定义注册按钮文字
$('#btn-close-register').text('好看吗').prop('href', 'http://baidu.com');
```

CSS:

```css
/* 自定义按钮颜色的 CSS */
#btn-close-register {
    background-color: #0089ff;
    color: #ff1c00;
}
```

## 添加首页导航链接

如果需要添加多个链接，请按照实际情况修改 `links` 数组。

JavaScript:

```js
(function($) {
    // 需要添加的链接
    var links = [
        '<li><a href="http://baidu.com">这是第一个链接</a></li>',
        '<li><a href="https://prinzeugen.net">这是第二个链接</a></li>'
    ];

    // 0 为从「首页」开始添加，1 为从「皮肤库」开始，以此类推
    var offset = 1;

    var dom = $($($('ul.nav.navbar-nav')[0]).children()[offset]);

    links.forEach(function(link) {
        dom.after(link);
    });
})(jQuery);
```

## 添加自定义 JavaScript 脚本引用

默认后台「自定义 JavaScript」里填写的是 `<script>` 标签里面的内容，所以你无法直接在其中直接使用 `<script src="">` 引用外部 JavaScript 脚本。但是，你可以使用某些神秘的技巧来达成这一目的（其实就是 XSS 攻击的原理啦）。

```html
</script><!-- 在这里关闭原来的 script 标签 -->

<!-- 添加你自己想要的脚本引用（不如说任意 HTML 标签都 OK） -->
<script type="text/javascript" src="test.wtf.js"></script>

<!-- 打开新的 script 标签 -->
<script type="text/javascript">
```

添加自定义 CSS 样式引用也是一样的道理，这里就不多赘述。使用这种方法也可以添加其他任意 HTML 标签。需要注意的是，这个技巧的原理其实就是 XSS 攻击，如果被恶意利用，可能对你的用户造成某些不可逆的损失。所以不要在这里随便填其他人给的代码哦（笑）
