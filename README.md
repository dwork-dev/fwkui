# @fwkui/x-css 🚀

**@fwkui/x-css** là một thư viện CSS-in-JS siêu nhẹ, hiệu năng cao, kế thừa tinh hoa từ `fwxcss` với cú pháp Emmet-like. Nó giúp bạn viết mã CSS nhanh hơn bằng cách sử dụng các lớp atomic ngắn gọn, hỗ trợ đầy đủ TypeScript, SSR và khả năng mở rộng mạnh mẽ.

![License](https://img.shields.io/npm/l/@fwkui/x-css)
![Version](https://img.shields.io/npm/v/@fwkui/x-css)

---

## 📖 Hướng dẫn Cơ bản

### 1. Cú pháp Cốt lõi
Mỗi class trong @fwkui/x-css được cấu tạo theo công thức:
`[Media]:[Layer][Property][Value][@Selector]`

**Ví dụ:**
- `m10px` ⮕ `margin: 10px`
- `cRed` ⮕ `color: red`
- `sm:p20px` ⮕ `@media (min-width: 576px) { padding: 20px }`
- `3bgWhite` ⮕ `@layer l3 { background: white }`
- `cBlue@:hover` ⮕ `.class:hover { color: blue }`

### 2. Nguyên lý Parser (Scan & Slice) 🧠
Thư viện quét class từ trái sang phải và tự động cắt Property/Value dựa trên các điểm ngắt (Số, Chữ Hoa, Ký tự đặc biệt...), giúp tốc độ xử lý nhanh hơn ~1.6x so với Regex truyền thống.

| Loại điểm ngắt | Ví dụ Class | Phân tích (Prop \| Value) |
| :--- | :--- | :--- |
| **Số (0-9)** | `w100px` | `w` (width) \| `100px` |
| **Chữ Hoa (A-Z)** | `dFlex` | `d` (display) \| `Flex` |
| **Dấu gạch ngang + Số** | `m-10px` | `m` (margin) \| `-10px` |

> [!IMPORTANT]
> **Lưu ý về CamelCase**: Sử dụng `mt10px` hoặc `margin-top-10px`, tránh `marginTop10px` để đảm bảo parser hoạt động chính xác.

---

## 📚 Bộ Từ điển (Dictionary)
Danh sách đầy đủ các từ viết tắt được cập nhật liên tục tại [DICTIONARY.md](./DICTIONARY.md).

### Một số Alias phổ biến:
- **Layout**: `d` (display), `pos` (position), `z` (z-index), `fl` (float).
- **Flexbox**: `fx` (flex), `ai` (align-items), `jc` (justify-content).
- **Spacing**: `m` (margin), `p` (padding), `w` (width), `h` (height).
- **Styling**: `c` (color), `bg` (background), `bd` (border), `op` (opacity).
- **Typography**: `fz` (font-size), `fw` (font-weight), `ta` (text-align).

---

Bạn có thể tải thư viện hoặc xem mã nguồn tại: [https://github.com/dwork-dev/fwkui](https://github.com/dwork-dev/fwkui)

## 📦 Cài đặt

### Cách 1: Dùng qua CDN (Khuyên dùng cho thử nghiệm nhanh)
Thêm thẻ script sau vào `index.html`:
```html
<script src="https://unpkg.com/@fwkui/x-css@1.0.8/dist/index.js"></script>
```

### Cách 2: Cài đặt qua NPM
```bash
npm install @fwkui/x-css
```

---

## 🚀 Hướng dẫn Sử dụng

### 1. Vanilla JavaScript (Tự động)

Để tự động scan và apply style cho toàn bộ document:

```javascript
import xcss from '@fwkui/x-css';

// Khởi tạo và lắng nghe thay đổi DOM
xcss.cssObserve(document);
```

Sử dụng trong HTML:
```html
<div class="dFlex cRed m20px">Hello World</div>
```

### 2. React / Components (`clsx`)

Sử dụng `clsx` để kết hợp class động và tối ưu việc gom nhóm string (tương tự `classnames` nhưng tích hợp sẵn parser engine):

```jsx
import { clsx } from '@fwkui/x-css';

function Button({ primary, children }) {
  return (
    <button 
      className={clsx(
        'p10px;20px',    // padding: 10px 20px
        'bdn bdra4px',   // border: none, border-radius: 4px
        'tr0.2s',        // transition: 0.2s
        'cWhite',        // color: white
        primary ? 'bgBlue' : 'bgGray',
        'op0.8@:hover'   // Opacity 0.8 on hover
      )}
    >
      {children}
    </button>
  );
}
```

### 3. Cấu hình (Configuration)

Bạn có thể truyền object config khi khởi tạo:

```javascript
import xcss from '@fwkui/x-css';

xcss.cssObserve(document, {
  // Thêm màu sắc hoặc giá trị custom
  theme: {
    brand: '#ff5722',
    dark: '#333333'
  },
  // Thêm breakpoint tùy chỉnh
  breakpoints: [
    { tablet: 'screen and (min-width: 768px)' }
  ],
  // Base CSS
  base: 'body { margin: 0; font-family: sans-serif; }',

  // [New] Thêm tiền tố (Prefix) để tránh xung đột
  prefix: 'fk-' // Chỉ xử lý các class bắt đầu bằng 'fk-'
});
```

Sau đó sử dụng: `fk-cBrand`, `fk-tablet:dBlock`.
Các class không có tiền tố (ví dụ `m10px`) sẽ bị **bỏ qua**.

### 4. Server-Side Rendering (SSR)

Để hỗ trợ SSR (Next.js, Remix...), bạn cần inject CSS sinh ra từ server vào thẻ `<head>`:

```javascript
import { getCss } from '@fwkui/x-css';

// Trong file layout/server entry
const styles = getCss();

// Inject HTML
// Inject HTML
// <style dangerouslySetInnerHTML={{ __html: styles }} />
```

### 5. Xuất File CSS (Static Extraction)

Nếu bạn muốn tạo file `.css` tĩnh (dành cho Static Site Generation hoặc Cache build), bạn có thể dùng script sau:

```javascript
// build-css.js
const fs = require('fs');
const xcss = require('@fwkui/x-css');

// 1. Giả lập quá trình Render để thu thập class
// (Bạn có thể import App và renderToString nếu dùng React/Vue)
// Ở đây ví dụ gọi thủ công:
const { clsx, getCssString } = xcss({
    theme: { brand: '#ff0000' } // Cấu hình (nếu có)
}).buildCss();

// Gọi clsx với các class bạn sử dụng trong project
clsx('m10px p20px cBrand dFlex');

// 2. Lấy nội dung CSS đã sinh
const cssContent = getCssString();

// 3. Ghi ra file
fs.writeFileSync('./public/styles.css', cssContent);
console.log('✅ CSS file generated!');
```

> [!NOTE]
> **Custom Config SSR**: Nếu dự án dùng config tùy chỉnh (Theme, Prefix...), hãy đảm bảo khởi tạo `xcss(config)` và truyền instance đó xuống các component (qua Context/Props) thay vì dùng `import { clsx }` mặc định. Điều này đảm bảo Server và Client đồng bộ hash.

### 5. Zero-FOUC (Hybrid Cache) ⚡

Để tăng tốc độ hiển thị và ngăn chặn FOUC (Flash of Unstyled Content) hoàn toàn, bạn hãy thêm đoạn script Bootloader này vào thẻ `<head>` của `index.html` (đặt **trước** tất cả các thẻ style/script khác):

```html
<script>
  // @fwkui/x-css Bootloader
  (function(){try{if(typeof window==='undefined')return;var d=localStorage.getItem('xcss_cache_v1');if(!d)return;var j=JSON.parse(d);if(!j||!j.cssText)return;var s=document.getElementById('fwkui');if(!s){s=document.createElement('style');s.id='fwkui';document.head.appendChild(s)}var c='';if(j.cssText.root)c+=j.cssText.root+'\n';for(var k in j.cssText){if(k!=='root')c+=j.cssText[k]+'\n'}s.textContent=c}catch(e){}})()
</script>
```

**Cơ chế hoạt động:**
1. **Lần đầu truy cập**: Thư viện load bình thường, sinh CSS và tự động lưu vào `localStorage`.
2. **Lần sau (F5/Revisit)**: Script trên sẽ chạy ngay lập tức (10-50ms), đọc CSS từ cache và inject vào trang trước khi bất kỳ nội dung nào được render.
3. **Tự động Invalidate**: Nếu bạn thay đổi config (Theme/Breakpoints), cache cũ sẽ tự động bị xóa để tránh lỗi giao diện.

> [!TIP]
> **Lưu ý về Theme Custom**: 
> Parser dựa vào ký tự viết hoa để tách Property và Value.
> - `theme: { brandColor: '...' }` ⮕ Class: `cBrandColor` (Khuyên dùng).
> - `theme: { 'brand-color': '...' }` ⮕ Class: `cBrand-color` (Vẫn hỗ trợ, chữ `B` làm điểm ngắt).
> 
> Tuyệt đối tránh viết thường toàn bộ (ví dụ `cbrandcolor`) vì thư viện sẽ không thể phân tách đúng.

---

## ⚙️ Hỗ trợ AI Coding

Để AI (Cursor, Copilot) code chính xác với cú pháp của @fwkui/x-css, hãy thêm rule sau vào `.cursorrules` hoặc prompt:

```markdown
You are using @fwkui/x-css. Follow these rules:
1. Syntax: `[Media]:[Layer][Property][Value][@Selector]`
2. Layer prefix: `3bgWhite` (NOT `3:bgWhite`).
3. Selector suffix: `cRed@:hover` (NOT `hover:cRed`).
4. Value capitalization: `dFlex`, `posAbs`.
5. Use aliases from DICTIONARY.md (e.g., `m` for margin, `d` for display).
```

---

*Verified & Updated at 2026-01-27*
