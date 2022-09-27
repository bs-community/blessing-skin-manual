# Correct posture for reporting problems

Nothing can always be perfect, and the same goes for Blessing Skin.

Therefore, when you encounter problems in the way of using Blessing Skin (including but not limited to: errors, bugs, security vulnerabilities that you cannot solve by yourself), don't be impatient, please follow the rules below to submit a bug report to the developer.

## I have a problem, what should I do?

First of all, you should determine whether this is the fault of Blessing Skin: machine downtime, network problems, or even an error in your browser will prevent you from using it normally. Therefore, before reporting a problem to the developer, you should first judge from your own experience whether this is the fault of Blessing Skin. If you can't judge for yourself, just search the internet, _Google is your friend_.

Second, you should read the [FAQ](/en/faq.md) carefully and make sure your question is not listed here. In many cases, the problems you have encountered have also pitted many people, and they have summed up the solutions: why don't you take a look?

Once you've confirmed that the problem you're encountering isn't one of them, you can start preparing a bug report.

:::tip
**Recommended reading: ["How To Ask Questions The Smart Way"](http://www.catb.org/~esr/faqs/smart-questions.html)**

Fully understanding this article can help you ask better questions and receive responses and correct answers faster (no matter when and where). But please note that the creative team of "How To Ask Questions The Smart Way" is only providing this article to guide you on how to ask questions correctly, and they do not provide any technical support for any questions. **Don't be an idiot. **
:::

## Developers are not gods

Developers can't locate the problem with just a few words of yours!

Therefore, when reporting a problem, don't throw the sentence "The skin station can't be used anymore" and then there is no more text. Without the aid of logs, error screenshots, etc., I **impossible** to know what happened to you.

## What information should I provide to the developer to help with debugging?

This also depends on the specific situation, I will mention a few general ones here.

### Error screenshot

If it is a problem with the Blessing Skin program, there should be an error message prompt, please send me a screenshot of this prompt.

::: tip:
Please set the value of `APP_DEBUG` in the `.env` configuration file to `true` before giving feedback, so that more debugging information can be displayed.
:::

### log

Error logs are a developer's best friend, so bring them with you when reporting a problem:

1. Skin station log (located in `storage/logs/laravel.log`);

If the in-game skin cannot be displayed, etc., you also need to bring your skin mod log. For example, the log for CustomSkinLoader (located at `.minecraft/CustomSkinLoader/CustomSkinLoader.log`).

If it is a Yggdrasil external login problem:

- All logs from game server start-up
- All logs of the game client since launch

### Your operating environment information

- What is your PHP version?
- What web server are you using? Nginx/Apache?
- What database are you using? What is the version?
- What browser are you using to access the program?
- What was the URL on the browser's address bar when the problem occurred?

and many more……

## How do I contact the developer?

- GitHub Issues
- Join the Telegram group [@blessing_skin](https://t.me/blessing_skin)

<iframe src="https://discord.com/widget?id=761226550921658380&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups -to-escape-sandbox allow-same-origin allow-scripts"></iframe>