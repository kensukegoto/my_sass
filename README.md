### 残作業
- 使いどころまとめ（何をまずは導入してく？）

### SCSSファイルを分割してimportしたい
_header.scssのようにファイル名の先頭に「_」を付けた上でimportする。importする際は、「_」と「.scss」の拡張子は不要。

### ネストインポートの使いどころ（使うかな？）
例えば、通常 modal.cssを使うところ、一部上書きしたい。上書き処理を _override.scssに書き、modal.scssの特定のブロック（ルールセット）内でimportする。
```css
@import "base":

#top {
  /*
  <div id="top">
    <h2> …
    …
  </div>
  */
  @import "top"; /* _top.scssの記述は全て#topで囲まれる */

}
```

### ミックスイン
- スコープは変数と同じ。
- font(,16px) のようには書けない。font($size:16px)のように書く。

### @extend
- 継承元のCSSの値（キー：バリュー）がインポートされる。
- メディアクエリの中から外の継承元（クラスやタグなど）は参照出来ない。メディアクエリの外と中で継承するセレクタを分ける。
- 継承元（ID、クラス、タグ、属性など）もCSSに書きだしたいかどうかで書き方が変わる。

### ミックスインと@extendの使い分け
- 親子関係になるもののみ@extend

### !default !global は使わない

### if文
- @if A { } @else if B { } @else { }
- and条件 A and B
- or条件 A or B
- 否定 not ($num === 0)

### インターポレーション
変数を文字列としてCSSに出力したいときに使う

（例１）
```css
@for $i from 0 to 2 {
  .mt#{$i * 5}{
    margin-top: 5px * $i;
  }
}

/* CSSは下記のようになる */
.mt0{
  margin-top:0;
}
.mt5{
  margin-top:5px;
}
.mt10{
  margin-top:10px;
}
```
（例２）
```css
$name: "kensuke";
##{$name}{
  font-size: 60px;
}

/* CSSは下記のようになる */
#kensuke{
  font-size: 60px;
}
```



### 組み込み関数
- ceil(100px / 3) , floor(100px / 3) , round(100px / 3)など
- 16進数をrgbaに変換してくれるrgba関数
```
rgba(#98ab8e , 0.3) → rgba(152, 171 , 142, 0.3)
```

### Sassフレームワークの有効活用
- Sassミックスイン集
  - Bourbon …「node-bourbon gulp」などで検索<br>
  [「Bourbon」API DOCUMENT](https://www.bourbon.io/docs/latest/)
- パーツ集
  - UIKit
- グリッド、レスポンシブなどレイアウト系
  - Neat
  - Susy
- 総合
  - Bootstrap
  - Foundation
  - Materialize … Google
  - PURE … Yahoo
  - Semantic UI