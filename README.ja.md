# flip-div

クリックで裏返すことができる、シンプルで依存関係のないWebコンポーネント。

## デモ

[ライブデモ](https://js.sabae.cc/flip-div/)で実際の動作を確認できます。

## 特徴

- **クリックでフリップ**: クリックで表面と裏面のコンテンツを切り替えます。
- **スムーズなアニメーション**: CSSトランジションを使用して、スムーズな3Dフリップ効果を実現します。
- **スタイルのカスタマイズが簡単**: 特定のスタイルを強制しないベーススタイルにより、標準のCSSで簡単にカスタマイズできます。
- **ビルドステップ不要**: ブラウザで直接ESモジュールとしてインポート可能です。

## 使い方

### 1. コンポーネントのインポート

HTMLファイルにモジュールスクリプトを追加します。これにより `<flip-div>` カスタム要素が自動的に登録されます。

```html
<script type="module" src="https://js.sabae.cc/flip-div/flip-div.js"></script>
```

### 2. HTMLの追加

HTML内に、直接の子要素をちょうど2つ持つ `<flip-div>` 要素を配置します。1つ目の子要素が表面、2つ目の子要素が裏面になります。

```html
<flip-div>
  <!-- 表のコンテンツ -->
  <div>
    <h2>表</h2>
    <p>クリックして裏返してください！</p>
  </div>
  
  <!-- 裏のコンテンツ -->
  <div>
    <h2>裏</h2>
    <p>反対側からのこんにちは！</p>
  </div>
</flip-div>
```

## カスタマイズ

このコンポーネントは外部からスタイルを適用できるように設計されています。標準のCSSで `<flip-div>` 要素とその子要素をターゲットにすることで、デザインに合わせてカスタマイズできます。

たとえば、固定サイズとボーダーを持つカードを作成するには：

**HTML:**

```html
<flip-div class="my-card">
  <div class="card-face card-front">表</div>
  <div class="card-face card-back">裏</div>
</flip-div>
```

**CSS:**

```css
.my-card {
  width: 300px;
  height: 180px;
}

.card-face {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  font-size: 1.5rem;
}

.card-front {
  background-color: #fafafa;
}

.card-back {
  background-color: #eef;
}
```

## ライセンス

MIT License — 詳細は [LICENSE](LICENSE) をご覧ください。
