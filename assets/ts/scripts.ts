var editor = document.querySelector(".editor");
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
