# Custom CSS, JavaScript

The "Personalization" configuration page in the background of Blessing Skin provides the "custom CSS JavaScript" function, which can insert custom code into each page, which can easily and quickly modify the default style of the skin station, realize some special functions, etc. .

This function is relatively simple. The principle is to directly insert custom CSS and JavaScript code into the `<style>` and `<script>` tags in each page. For more complex functionality, you can write a plugin for Blessing Skin.

## Custom login/registration page background image

CSS:

````css
/* Modify to your own image address */
.login-page {
    background-image: url("http://i2.muimg.com/1949/e560362e63a9080e.png");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center 0;
}
````

## Add shadow to model in 3D skin preview

CSS (in which the parameters are adjusted by themselves, see [MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/filter-function/drop-shadow) for details):

````css
#previewer canvas {
  filter: drop-shadow(-5px 5px 10px rgba(0, 0, 0, 0.3));
}
````

![Screenshot_20200628_101205.png](https://i.loli.net/2020/06/28/sZVIqLtxUA5SwYR.png)

## Customize the button text of the home page after closing the registration

JavaScript:

````js
document.querySelector('.main-button').textContent = 'xxx'
````

## Add homepage navigation link

JavaScript:

Add to the left of the navigation bar

````js
const navL = document.querySelector('.navbar-header') // left side of navigation bar

const link = document.createElement('a')
link.href = 'https://localhost/'
link.className = 'navbar-brand'
link.textContent = 'Home'

navL.appendChild(link)
````

Add to the right of the navigation bar

````js
const navR = document.querySelector('.navbar-custom-menu > ul:nth-child(1)') // right side of navigation bar

const item = document.createElement('li')
item.className = 'nav-item'

const link = document.createElement('a')
link.className = 'nav-link'
link.href = 'https://localhost/'
link.textContent = 'Home'
item.appendChild(link)

navL.appendChild(item)
````