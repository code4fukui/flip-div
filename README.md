# flip-div

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A simple, zero-dependency Web Component that creates a two-sided, flippable element on click.

## Demo

Check out the [live demo](https://js.sabae.cc/flip-div/) to see it in action.

## Features

-   **Click to Flip**: Toggles between front and back content with a click.
-   **Smooth Animation**: Uses CSS transitions for a smooth 3D flip effect.
-   **Easy to Style**: Unopinionated base styles allow for easy customization with standard CSS.
-   **No Build Step**: Import it directly as an ES module in the browser.

## Usage

### 1. Import the component

Add the module script to your HTML file. This will automatically register the `<flip-div>` custom element.

```html
<script type="module" src="https://js.sabae.cc/flip-div/flip-div.js"></script>
```

### 2. Add HTML

Place a `<flip-div>` element in your HTML with exactly two direct child elements. The first child is the front face, and the second is the back face.

```html
<flip-div>
  <!-- Front Content -->
  <div>
    <h2>Front Side</h2>
    <p>Click me to flip!</p>
  </div>
  
  <!-- Back Content -->
  <div>
    <h2>Back Side</h2>
    <p>Hello from the other side!</p>
  </div>
</flip-div>
```

## Customization

The component is designed to be styled externally. You can target the `<flip-div>` element and its children with standard CSS to match your design.

For example, to create a card with a fixed size and border:

**HTML:**

```html
<flip-div class="my-card">
  <div class="card-face card-front">Front</div>
  <div class="card-face card-back">Back</div>
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

## License

MIT License — see [LICENSE](LICENSE).