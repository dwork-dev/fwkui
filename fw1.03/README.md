# Hướng dẫn sử dụng framework css + javascript (fwkuijs)
## 1 Chèn vào thẻ cuối thẻ body
- Sử dụng link https://unpkg.com/fwkuijs@1.0.3/fw.js
```html
  <!-- ... ->
  <body>
  <!-- Thẻ của bạn -->
   <script type="module">
        import $ from "https://unpkg.com/fwkuijs@1.0.3/fw.js";
        window.$ = $;
        $.start();
        // Code của bạn viết tại đây
    </script>
  </body>
<!-- .... -->
```
- Tải về máy đặt vào thư mục assets
```html
  <!-- ... ->
  <body>
  <!-- Thẻ của bạn -->
   <script type="module">
        import $ from "/assets/fw.js";
        window.$ = $;
        $.start();
         // Code của bạn viết tại đây
    </script>
  </body>
<!-- .... -->
```

## 2 Định nghĩa class của css

