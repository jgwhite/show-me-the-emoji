let express = require('express');
let app = express();
let port = process.env.PORT || 3000;

const EMOJI = [
  '😀', '😁', '😂', '🤣', '😃', '😄', '😅', '😆', '😉', '😊',
  '😋', '😎', '😍', '😘', '😗', '😙', '😚', '🙂', '🤗', '🤩',
  '🤔', '🤨', '😐', '😑', '😶', '🙄', '😏', '😣', '😥', '😮',
  '🤐', '😯', '😪', '😫', '😴', '😌', '😛', '😜', '😝', '🤤',
  '😒', '😓', '😔', '😕', '🙃', '🤑', '😲', '🙁', '😖', '😞',
  '😟', '😤', '😢', '😭', '😦', '😧', '😨', '😩', '🤯', '😬',
  '😰', '😱', '😳', '🤪', '😵', '😡', '😠', '🤬', '😷', '🤒',
  '🤕', '🤢', '🤮', '🤧', '😇', '🤠', '🤡', '🤥', '🤫', '🤭',
  '🧐', '🤓', '😈', '👿', '👹', '👺', '💀', '👻', '👽', '🤖',
  '💩', '😺', '😸', '😹', '😻', '😼', '😽', '🙀', '😿', '😾'
];

function pickEmoji() {
  return EMOJI[Math.floor(Math.random() * EMOJI.length)];
}

function renderEmoji() {
  let emoji = pickEmoji();

  return `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Emoji</title>
        <style>
          html, body {
            height: 100%;
            margin: 0;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 50vh;
          }
        </style>
      </head>
      <body>
        ${emoji}
      </body>
    </html>
  `;
}

app.get('/', (_, res) => res.send(renderEmoji()));

app.listen(port);
