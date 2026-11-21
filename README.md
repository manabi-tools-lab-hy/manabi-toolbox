# まなびツールBOX

生成AIを使って作成した教育ツールをまとめるための、GitHub Pages対応ホームページです。
HTMLファイル1つで動きます。外部サービスの登録や有料ライブラリは必要ありません。

## まず試す
`index.html` をダブルクリックし、ブラウザで開いてください。

## GitHub Pages で公開する
1. GitHub にログインし、右上の `+` → `New repository` を押します。
2. Repository name を `manabi-toolbox` などに設定します。
3. `Public` を選び、`Create repository` を押します。無料プランでは原則公開リポジトリでPagesを使います。
4. `Add file` → `Upload files` から `index.html` をアップロードし、`Commit changes` します。ZIPファイルをそのままアップロードしないでください。
5. リポジトリの `Settings` → `Pages` を開きます。
6. `Build and deployment` の `Source` を `Deploy from a branch` にします。
7. `Branch: main`、フォルダー `/(root)` を選び `Save` します。
8. 表示されたURLへアクセスします。`https://ユーザー名.github.io/manabi-toolbox/` のようなURLです。

## 後からツールを追加する
GitHubの `index.html` を開き鉛筆アイコン（Edit this file）から編集します。
下部の `const TOOLS = [` を探し、次の1行を末尾の `]` の直前に追加します。

```js
,{id:'social1',name:'社会科クイズ',description:'都道府県を楽しく復習できます。',category:'社会',icon:'🗾',external:'https://example.com/'}
```

`https://example.com/` を、ご自身が公開した実際のツールURLに置き換えます。
既存ツールの最終行の末尾にカンマを付けるか、上の例のように行頭にカンマを付けてください。
`id` は他のツールと重複しない英数字を指定してください。編集後 `Commit changes` を押すと公開内容が更新されます。

## 既にHTMLで作ったAIツールを登録したい場合
別のリポジトリでGitHub Pagesとして公開し、そのURLを `external` に登録すると管理が簡単です。
このサイト内のサブフォルダーに直接HTMLを追加してリンクする方法もあります。

## 注意
- お気に入り情報は**各端末のブラウザ内だけ**に保存され、他の端末と同期されません。
- 学習ツールの入力内容はこのサイトから送信しません。ただし外部URLを追加した場合、その外部サイトのデータ取扱いは別です。
- 児童の氏名、顔写真、成績などの個人情報、秘密のAPIキー・パスワードを公開リポジトリに入れないでください。
- 学校で利用する場合は学校・教育委員会の情報セキュリティ規程を確認してください。
- AI APIをブラウザから直接呼ぶ場合、APIキーが公開される構成にしないでください。安全なサーバー側の仕組みが必要です。
