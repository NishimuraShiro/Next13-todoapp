# Next13-todoapp
## "json-server": "json-server --watch src/app/data/todos.json --port 3001"
- --watch：サーバーを更新するために自動的に更新してくれる修飾子のようなもの
- package.json内で記述する
- ターミナルで` npm run json-server `とすると起動する
- ` http://localhost:3001/tasks ` で確認

## uuidとは
「Universally Unique Identifier」の略で、ランダムに生成されるユニークなIDのことである。
### uuidのインストール
` npm i uuid `
### typescriptに適したuuidインストール
` npm i --save-dev @types/uuid `
