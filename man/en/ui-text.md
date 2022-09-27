# Customizing UI Text

Starting from Blessing Skin 5.0.0, you can customize the UI text on the Blessing Skin (and also the message text returned by the backend) on the "Internationalization" page in the admin panel.

## Understand concepts

For each text, there are three attributes, namely "group", "key", "text".

Take the text about the introduction of the score system in the user dashboard as an example. Inside the Blessing Skin, this text is obtained by calling `trans('user.score-intro.introduction')`.

### Grouping

The entire `user.score-intro.introduction` above can be divided into three segments by a decimal point, the first of which is the "grouping". Taking the text just now as an example, the grouping here is `user`.

In fact, it is the file name (without extension, `.yml') under `resources/lang/{xxx}/` (where `xxx` is the language, such as `en` or `zh_CN`) in the Blessing Skin directory `).
For example, the text mentioned above is in the `resources/lang/{xxx}/user.yml` file.
There are also `admin.yml`, `skinlib.yml` and other files in this directory, so correspondingly, their "groups" are `admin`, `skinlib`, and so on.

### Keys

Again, take `user.score-intro.introduction` as an example. The key is what is left after the "grouping".
So for this text, its key is `score-intro.introduction`.

But it should be noted that in the language file (YAML file), the file structure is not a flat structure like this key, but a tree structure, which is nested.
Open the `resources/lang/{xxx}/user.yml` file, we can find that this text is located in the `introduction` section of the `score-intro` block.

### Value (Text)

is the specific text content of the entry. In most cases, the text content can only be a single line.

## Add New Entry

In the form on the right side of the page, you can add a new entry, fill in the "group", "key", "text" and submit it, if the text has been defined in Blessing Skin, then refresh the page to take effect.

Take, for example, modifying the text of the "Sign In" button. The grouping of the text is `front-end`, the key is `user.sign`, and the text is written as you like, such as "click here to get points".
After submitting, refresh the `/user` page to see the button text updated.

If you need to modify the text in other languages, please switch the site language first. For example, if you want to modify a text in English, you need to switch to the English page first, and then modify it.
Just modifying the text in one language will not affect the content in other languages.

## Modify Existing Entry

In the list on the "Internationalization" page, select the item you want to modify, and click the "Modify" button to modify the text content in the pop-up prompt window.

If you need to modify the text in other languages, please switch the site language first.

Note that only the text content of the entry can be modified, not the grouping or the key.

## Delete Entry

When you want to restore a text to the default value of Blessing Skin, just delete the entry.

::: warning
When an entry is deleted, it will be deleted in all languages at the same time.
:::

## Text rendered by JavaScript

Since many front-end pages of Blessing Skin are rendered in the browser based on JavaScript, they cannot directly obtain the content of language files such as `admin.yml`, `user.yml`, `skinlib.yml`, etc.
For this part of the language text, they are in `front-end.yml`. This is the case with the "Sign In" button mentioned above.

## A Little Trick

Due to the large amount of text in Blessing Skin, it is difficult for most users to know what the grouping and key of a certain text are.

Here's a trick: you want to modify a piece of text, and then search the content of the text globally to see what key it is under which group.
Sometimes you will encounter the same text content, but different groups or keys. At this time, you can take these different groups and keys and try several times.