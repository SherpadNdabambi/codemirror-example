var editor = document.querySelector(".editor");
// Typescript will throw an error here because it doesn't know about
// CodeMirror but this line will work at runtime because we loaded
// the CodeMirror script in the HTML file.
// @ts-ignore
CodeMirror(editor, {
    lineNumbers: true,
    mode: "htmlmixed",
    theme: "dracula",
    value: "<head>\n  <title>CodeMirror Demo</title>\n  <link\n    href=\"https://cdn.jsdelivr.net/npm/codemirror@5.63.3/lib/codemirror.css\"\n    rel=\"stylesheet\"\n  />\n  <!-- The link above loaded the core css -->\n  <link\n    href=\"https://cdn.jsdelivr.net/npm/codemirror@5.63.3/theme/dracula.css\"\n    rel=\"stylesheet\"\n  />\n  <script\n    defer\n    src=\"https://cdn.jsdelivr.net/npm/codemirror@5.63.3/lib/codemirror.js\"\n  ></script>\n  <!-- The script above loaded the core editor -->\n\n  <script\n    defer\n    src=\"https://cdn.jsdelivr.net/npm/codemirror@5.63.3/mode/xml/xml.js\"\n  ></script>\n  <script\n    defer\n    src=\"https://cdn.jsdelivr.net/npm/codemirror@5.63.3/mode/htmlmixed/htmlmixed.js\"\n  ></script>\n  <!-- The script above loaded the highlighting for JavaScript -->\n\n  <script defer src=\"./dist/scripts.js\"></script>\n</head>\n<body>\n  <div class=\"editor\"></div>\n</body>\n",
});
