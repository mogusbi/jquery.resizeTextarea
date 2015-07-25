# jQuery Resize Textarea plugin
> Resize a textarea as you type.

## Getting started
### NPM
Install package with NPM and add it to your dependencies:
`npm install @mogusbi/jquery.resizetextarea --save`

## Introducing it to your page
Include jQuery, [CopyCSS](https://github.com/moagrius/copycss) and the plugin to your page. Select the textareas you wish have resize as you type with the `resizeTextarea` method.

```html
<!doctype html>
<html>
  <head>
    ...
  </head>
  <body>
    <textarea></textarea>

    <script src="jquery.js"></script>
    <script src="jquery.copycss.js"></script>
    <script src="jquery.resizetextarea.js"></script>
    <script>
      $('textarea').resizeTextarea();
    </script>
  </body>
</html>
```

It is also recommended to apply these styles to your textarea

```css
textarea {
  overflow: hidden;
  resize: none;
}
```

## License
Copyright &copy; Mo Gusbi.
Licensed under the MIT license.