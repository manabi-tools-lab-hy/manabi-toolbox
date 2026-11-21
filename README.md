# まなびツールBOX 第2版

生成AIで作った学習・授業支援ツールをまとめるHPです。GitHub Pagesで公開できます。

## 第2版の改善内容
- トップページを新しいデザインに変更（パソコン・スマホ対応）
- キーワード検索、カテゴリ絞り込み、お気に入りを継続
- 「おすすめ」表示、並び順の切り替え、教員向け・児童向けの目安を追加
- 授業タイマー、ランダム指名、かけ算チャレンジの3ツールを継続

## GitHub Pagesの更新手順
1. GitHubの `manabi-toolbox` リポジトリを開きます。
2. **Add file → Upload files** を選択します。
3. このZIPを解凍して取り出した **index.html** と **README.md** をアップロードします。ZIPファイル自体はアップロードしません。
4. 既存ファイルを上書きする変更内容を確認し、**Commit changes** を押します。
5. **Settings → Pages** の公開URLを開き、反映を確認します。反映に時間がかかる場合は再読み込みしてください。

※ ファイルはリポジトリの最上位（root）に置いてください。既存の index.html を消してから追加する必要はありません。

## 新しいツールの追加方法
`index.html` をGitHub上で開き、鉛筆アイコンで編集します。`const TOOLS = [` を検索します。既存ツールの最後の行の末尾にカンマをつけ、次の1行を加えます。

```javascript
{id:'kanji01',name:'漢字練習',description:'漢字の読みを楽しく練習しよう。',category:'国語',icon:'✏️',external:'https://example.com/',audience:'児童向け',updated:'2026-11-21',featured:false}
```

- `id`：ほかのツールと重複しない英数字
- `name`：カードに表示する名前
- `description`：説明文
- `category`：例「国語」「算数」「社会」「理科」「授業支援」
- `icon`：絵文字
- `external`：ツールの公開URL。例のURLは必ず実物に変更してください。
- `audience`：例「児童向け」「先生向け」
- `updated`：`YYYY-MM-DD` 形式の日付
- `featured`：`true` ならおすすめ表示、`false` なら通常表示

保存には **Commit changes** を使います。公開が反映されれば自動でカードが増えます。

### GitHub内に学習アプリを置く場合
例えば `apps/kanji/index.html` を追加すると、公開先は通常
`https://ユーザー名.github.io/manabi-toolbox/apps/kanji/` になります。
この場合、トップページの `external` に `./apps/kanji/` を指定することもできます。

## 注意点
- GitHub Pagesの公開リポジトリには、個人情報・秘密情報を置かないでください。
- お気に入りは端末ごとのブラウザ内保存です。端末間で同期されません。
- 外部URLがある場合、そのサイト側の利用条件や個人情報の扱いも確認してください。
- 動作にはJavaScriptを有効にしたブラウザが必要です。
