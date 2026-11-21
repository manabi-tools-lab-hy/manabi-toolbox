/* ツール一覧：新しいツールは末尾に1件追加してください。 */
const TOOLS = [
  {id:'timer',name:'授業タイマー',description:'活動時間を大きな数字で表示。話し合いや作業時間の管理に便利です。',category:'授業支援',icon:'⏱️',builtIn:'timer',featured:true,updated:'2026-11-21',audience:'先生向け'},
  {id:'picker',name:'ランダム指名ツール',description:'出席番号などをランダムに1つ選びます。名前を登録する必要はありません。',category:'授業支援',icon:'🎲',builtIn:'picker',updated:'2026-11-21',audience:'先生向け'},
  {id:'quiz',name:'かけ算チャレンジ',description:'ランダムに出題される九九の問題にチャレンジ！くり返し練習できます。',category:'算数',icon:'✖️',builtIn:'quiz',featured:true,updated:'2026-11-21',audience:'児童向け'},
  {id:'reflection',name:'学習ふりかえりカード',description:'今日の学習で分かったこと、がんばったこと、次の目標を整理できます。',category:'授業支援',icon:'📝',external:'./apps/teacher/reflection/',updated:'2026-11-21',audience:'児童・先生向け'}
];
