var editor = document.querySelector(".editor");
// Typescript will throw an error here because it doesn't know about
// CodeMirror but this line will work at runtime because we loaded
// the CodeMirror script in the HTML file.
// @ts-ignore
CodeMirror(editor, {
  lineNumbers: true,
  mode: "htmlmixed",
  theme: "dracula",
  value: `<head>
  <title>CodeMirror Demo</title>
  <link
    href="https://cdn.jsdelivr.net/npm/codemirror@5.63.3/lib/codemirror.css"
    rel="stylesheet"
  />
  <!-- The link above loaded the core css -->
  <link
    href="https://cdn.jsdelivr.net/npm/codemirror@5.63.3/theme/dracula.css"
    rel="stylesheet"
  />
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/codemirror@5.63.3/lib/codemirror.js"
  ></script>
  <!-- The script above loaded the core editor -->

  <script
    defer
    src="https://cdn.jsdelivr.net/npm/codemirror@5.63.3/mode/xml/xml.js"
  ></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/codemirror@5.63.3/mode/htmlmixed/htmlmixed.js"
  ></script>
  <!-- The script above loaded the highlighting for JavaScript -->

  <script defer src="./dist/scripts.js"></script>
</head>
<body>
  <div class="editor"></div>
</body>
`,
});
