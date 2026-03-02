# @fwkui/x-css

`@fwkui/x-css` là utility CSS engine siêu nhẹ, parse class theo cú pháp ngắn và sinh CSS runtime theo layer + media.

Mục tiêu của README này:
1. Người dùng có thể tích hợp ngay.
2. AI có thể suy luận đúng cú pháp để sinh class dùng được ngay.
3. QA có thể kiểm thử parser theo vector cố định.

![License](https://img.shields.io/npm/l/@fwkui/x-css)
![Version](https://img.shields.io/npm/v/@fwkui/x-css)

## Cài Đặt Nhanh

### 1) NPM

```bash
npm install @fwkui/x-css
```

### 2) Dùng trực tiếp qua URL (không cần bundler)

Lưu ý:
1. `dist/index.js` là CommonJS (Node).
2. Trình duyệt dùng `dist/index.mjs` hoặc `dist/index-auto.mjs`.

Option A: chủ động khởi tạo

```html
<script type="module">
  import xcss from 'https://unpkg.com/@fwkui/x-css@latest/dist/index.mjs';

  xcss.cssObserve(document, {
    dictionaryImport: true
  });
</script>
```

Option B: auto observe khi import

```html
<script type="module" src="https://unpkg.com/@fwkui/x-css@latest/dist/index-auto.mjs"></script>
```

CDN thay thế:
`https://cdn.jsdelivr.net/npm/@fwkui/x-css@latest/dist/index.mjs`

## Dùng Trong 60 Giây

```js
import xcss from '@fwkui/x-css';

xcss.cssObserve(document);
```

```html
<button class="dF aiC jcC p10px;16px bdN bdra8px bgc#0a64e8 cWhite">
  Đăng nhập
</button>
```

## Contract Cú Pháp

Mỗi utility class theo form:

`[Media]:[Layer][Property][Value][@Selector]`

Thứ tự parse bắt buộc:
1. `selector` (hậu tố `@...`, nằm ngoài `[]`).
2. `media` (tiền tố trước `:`).
3. `layer` (chuỗi số liên tiếp ở đầu).
4. `property`.
5. `value`.

Ý nghĩa từng phần:
1. `Media` (tùy chọn): key media như `sm`, `md`, `lg`, hoặc key custom.
2. `Layer` (tùy chọn): số ưu tiên cascade.
3. `Property` (bắt buộc): alias thuộc dictionary hoặc CSS property hợp lệ.
4. `Value` (bắt buộc với utility chuẩn): giá trị CSS, alias value hoặc arbitrary value.
5. `@Selector` (tùy chọn): ví dụ `@:hover`, `@::before`.

Ngoại lệ parser (special syntax):
1. `[AliasName]`: class group alias (không dùng value trực tiếp).
2. `&...`: nhánh selector đặc biệt theo parser hiện tại.

### Media Mặc Định Và Thứ Tự Nội Bộ

Engine nạp media theo thứ tự:

| Thứ tự | Key | Query |
| :--- | :--- | :--- |
| 1 | `default` | Không bọc `@media` |
| 2 | `xs` | `screen and (max-width: 575px)` |
| 3 | `sm` | `screen and (min-width: 576px)` |
| 4 | `md` | `screen and (min-width: 768px)` |
| 5 | `lg` | `screen and (min-width: 992px)` |
| 6 | `xl` | `screen and (min-width: 1200px)` |
| 7 | `2xl` | `screen and (min-width: 1400px)` |
| 8 | `sma` | `screen and (max-width: 768px)` |
| 9 | `mda` | `screen and (max-width: 992px)` |
| 10 | `lga` | `screen and (max-width: 1200px)` |
| 11 | `xla` | `screen and (max-width: 1400px)` |

Quy tắc custom breakpoint:
1. `breakpoints` được nối vào sau danh sách mặc định.
2. Nếu trùng key, key khai báo sau cùng ghi đè key trước (`last write wins`).

Ví dụ:

```js
xcss.cssObserve(document, {
  breakpoints: [
    { tablet: 'screen and (min-width: 768px)' }
  ]
});
```

Dùng class: `tablet:dB`.

### Layer Mặc Định

1. Nếu không khai báo layer, engine dùng `0`.
2. Engine tạo sẵn 24 layer: `l0 -> l23`.
3. Nên dùng dải `0-23` để giữ thứ tự ổn định.
4. Số layer lớn hơn có ưu tiên cascade cao hơn trong cùng media.

## Quy Tắc Điểm Ngắt Đầy Đủ (Theo Parser Hiện Tại)

Mục tiêu là tách class thành tuple:
`{ media, layer, property, value, selector }`

Thứ tự suy luận bắt buộc:
1. Tách `selector`: lấy phần sau ký tự `@` cuối cùng, chỉ khi `@` nằm ngoài `[]`.
2. Tách `media`: nếu còn `:` thì phần trước `:` là `media`.
3. Tách `layer`: đọc chuỗi số liên tiếp ở đầu phần còn lại.
4. Tách `property/value`: quét trái -> phải và dừng `property` theo bảng quyết định.
5. Nếu phần còn lại bắt đầu bằng `&` hoặc `[` thì đi vào nhánh special syntax.

### Bảng Quyết Định Khi Quét `property`

| Ký tự đang xét | Điều kiện | Hành động |
| :--- | :--- | :--- |
| `a-z` | luôn đúng | vẫn là `property` |
| `-` hoặc `.` | ký tự kế tiếp là số | dừng `property`, phần còn lại là `value` |
| `-` | gặp `--` và đã có ít nhất 1 ký tự property | dừng `property`, bắt đầu `value` (CSS variable) |
| `-` hoặc `.` | không rơi vào 2 điều kiện trên | vẫn là `property` |
| ký tự khác (`A-Z`, `0-9`, `#`, `!`, `[`, `(`, `%`, ...) | luôn đúng | dừng `property`, phần còn lại là `value` |

### Chuẩn Hóa `value` Sau Khi Tách

1. Value bắt đầu bằng `!` -> thêm hậu tố `!important`.
2. Value bắt đầu bằng `--` -> đổi thành `var(--...)`.
3. Value dạng `[...]` -> bỏ `[` `]`, rồi thay `;` thành khoảng trắng.
4. Ký tự `#` trong value giữ nguyên (hex color).

Pseudo-flow cho AI:

```text
class -> selector -> media -> layer -> property -> value
if value startsWith('!') => important
if value startsWith('--') => var(value)
if value is bracketed [..] => strip brackets + replace ';' with ' '
```

### Test Vector Mini (10 input -> expected tuple)

| # | Input | Expected tuple |
| :--- | :--- | :--- |
| 1 | `m10px` | `{ media: '', layer: '', property: 'm', value: '10px', selector: '' }` |
| 2 | `md:w100%` | `{ media: 'md', layer: '', property: 'w', value: '100%', selector: '' }` |
| 3 | `sm:3bgWhite` | `{ media: 'sm', layer: '3', property: 'bg', value: 'White', selector: '' }` |
| 4 | `cBlue@:hover` | `{ media: '', layer: '', property: 'c', value: 'Blue', selector: ':hover' }` |
| 5 | `m-10px` | `{ media: '', layer: '', property: 'm', value: '-10px', selector: '' }` |
| 6 | `opc0.8` | `{ media: '', layer: '', property: 'opc', value: '0.8', selector: '' }` |
| 7 | `bgc--brand` | `{ media: '', layer: '', property: 'bgc', value: '--brand', selector: '' }` |
| 8 | `c!#0a64e8` | `{ media: '', layer: '', property: 'c', value: '!#0a64e8', selector: '' }` |
| 9 | `w[calc(100%;-;10px)]` | `{ media: '', layer: '', property: 'w', value: '[calc(100%;-;10px)]', selector: '' }` |
| 10 | `[btnPrimary]` | `{ media: '', layer: '', property: '[btnPrimary]', value: '', selector: '' }` |

## Bảng Sai -> Đúng (Những Lỗi Gây Vỡ Parse)

| Sai | Đúng | Giải thích |
| :--- | :--- | :--- |
| `bdn` | `bdN` | Value viết tắt dạng chữ cái phải viết hoa ký tự đầu (`N` = none). |
| `df` | `dF` | `F` là value viết tắt của `flex`. |
| `posa` | `posA` | `A` là value viết tắt của `absolute`. |
| `tr0.2s` | `tran0.2s` | Property `transition` là `tran`, không phải `tr`. |
| `op0.8` | `opc0.8` | `op` là `object-position`; `opc` mới là `opacity`. |
| `3:bgWhite` | `3bgWhite` | Layer là số đứng liền trước property, không có `:` sau layer. |
| `hover:cRed` | `cRed@:hover` | Selector modifier dùng hậu tố `@Selector`. |
| `tablet:dB` (chưa khai báo) | `tablet:dB` + `breakpoints` config | Media custom phải được khai báo trước trong config. |
| `m--10px` | `m-10px` | Số âm dùng `-`; `--` dành cho CSS variable (`bgc--brand`). |
| `bgcbrand` | `bgcBrand` hoặc `bgc--brand` | Cần điểm ngắt rõ ràng để parser tách đúng value. |
| `wcalc(100%-10px)` | `w[calc(100%;-;10px)]` | Value phức tạp nên bọc `[]`, dùng `;` để biểu diễn khoảng trắng. |
| `!cRed` | `c!Red` | `!` phải đứng trong phần value (sau property), không đứng đầu class. |

## Ví Dụ Chính Xác Theo Dictionary

Danh sách đầy đủ alias xem tại [DICTIONARY.md](./DICTIONARY.md).

Một số alias dễ nhầm:
1. `op` = `object-position`
2. `opc` = `opacity`
3. `tran` = `transition`
4. `tr` = `transparent` (value alias, không phải property transition)

Ví dụ:

```html
<div class="dF aiC jcSB p12px;16px bdN bgcWhite"></div>
<div class="tran0.2s opc0.8@:hover"></div>
<div class="c!#0a64e8"></div>
<div class="w[calc(100%;-;10px)]"></div>
```

## Dùng Trong React / Component

```jsx
import { clsx } from '@fwkui/x-css';

export function Button({ primary, children }) {
  return (
    <button
      className={clsx(
        'dF aiC jcC p10px;16px bdN bdra8px tran0.2s',
        primary ? 'bgc#0a64e8 cWhite' : 'bgc#e5e7eb c#111827',
        'opc0.9@:hover'
      )}
    >
      {children}
    </button>
  );
}
```

## Cấu Hình

```js
import xcss from '@fwkui/x-css';

xcss.cssObserve(document, {
  theme: {
    brand: '#0a64e8',
    danger: '#ef4444'
  },
  breakpoints: [
    { tablet: 'screen and (min-width: 768px)' }
  ],
  base: 'body{margin:0;font-family:system-ui,sans-serif;}',
  prefix: 'fk-',
  excludePrefixes: ['bs-', 'rs-'],
  excludes: ['legacy-*'],
  dictionaryImport: true
});
```

Sau đó dùng class: `fk-cBrand fk-tablet:dB`.

Gợi ý tối ưu bỏ qua parse:
1. Dùng `prefix` nếu bạn kiểm soát được class framework (nhanh và sạch nhất).
2. Dùng `excludePrefixes` để bỏ qua nhanh theo tiền tố, ví dụ `bs-`, `rs-`.
3. Dùng `excludes` khi cần rule chính xác hoặc wildcard (`*`), ví dụ `legacy-*`, `tmp-debug`.

Ví dụ đầu vào cho `excludes`:

| Cấu hình | Input class | Kết quả mong đợi |
| :--- | :--- | :--- |
| `excludes: ['container']` | `container m10px` | `container` giữ nguyên; chỉ `m10px` được parse thành CSS |
| `excludes: ['bs-*']` | `bs-btn m10px` | `bs-btn` bị bỏ qua parse; `m10px` vẫn parse |
| `excludes: ['*-debug']` | `card-debug p8px` | `card-debug` bị bỏ qua parse; `p8px` vẫn parse |
| `excludes: ['tmp-*', 'legacy-*']` | `tmp-a legacy-card dF` | `tmp-a`, `legacy-card` bị bỏ qua; `dF` vẫn parse |
| `excludePrefixes: ['bs-', 'rs-']` | `bs-modal rs-open h100%` | `bs-modal`, `rs-open` bị bỏ qua nhanh; `h100%` vẫn parse |

Ví dụ output thực tế của `clsx`:

| Config | Gọi `clsx(...)` | Output | Ghi chú |
| :--- | :--- | :--- | :--- |
| `excludePrefixes: ['bs-'], excludes: ['abc*']` | `clsx('bs-a', 'abcde')` | `bs-a abcde` | Cả hai bị bỏ qua, giữ nguyên class gốc. |
| `excludePrefixes: ['bs-'], excludes: ['abc*']` | `clsx('bs-a', 'abcde', 'm10px')` | `bs-a abcde D0` | Chỉ `m10px` parse thành class hash. |
| `excludes: ['bs-', 'abc*']` | `clsx('bs-a', 'abcde', 'm10px')` | `bs-a abcde D0` | `bs-` là exact match nên không bắt `bs-a`; `bs-a` vẫn giữ nguyên vì token không sinh CSS hợp lệ. |
| `excludes: ['abc*def']` | `clsx('abcXYZdef', 'm10px')` | `abcXYZdef D0` | Wildcard giữa chuỗi hoạt động bình thường. |
| `excludes: ['*-abc']` | `clsx('foo-abc', 'm10px')` | `foo-abc D0` | Wildcard cuối chuỗi hoạt động bình thường. |

Lưu ý format output:
1. `clsx` trả chuỗi class phân tách bằng khoảng trắng, không dùng dấu phẩy.
2. Token không parse được hoặc bị exclude sẽ giữ nguyên ở output.

Lưu ý khi dùng cùng `prefix`:
1. Engine kiểm tra `prefix` trước, rồi mới kiểm tra `excludes`/`excludePrefixes`.
2. Nếu có `prefix: 'fk-'`, class không bắt đầu bằng `fk-` đã bị bỏ qua từ đầu.
3. Vì vậy pattern excludes nên viết theo class thực tế sau khi thêm prefix, ví dụ `excludes: ['fk-bs-*']`, `excludePrefixes: ['fk-rs-']`.
4. `exclude` vẫn được hỗ trợ để tương thích ngược, nhưng key khuyến nghị là `excludes`.

`dictionaryImport`:
1. `true` (mặc định): dùng dictionary tích hợp.
2. `false`: tắt dictionary mặc định.
3. `string` URL/path: import dictionary ngoài.

Nếu import dictionary ngoài:

```js
const engine = xcss.css({ dictionaryImport: 'https://cdn.example.com/xcss-dict.mjs' });
await engine.ready;
const { clsx, observe } = engine.buildCss(document);
observe();
```

Mẫu file để thay thế trực tiếp URL `https://cdn.example.com/xcss-dict.mjs`:

```js
// xcss-dict.mjs
// Có thể public lên CDN của bạn rồi truyền URL vào dictionaryImport

export const SHORT_PROPERTIES = {
  d: 'display',
  c: 'color',
  bgc: 'background-color',
  bd: 'border',
  w: 'width',
  h: 'height',
  p: 'padding',
  m: 'margin',
  tran: 'transition',
  opc: 'opacity'
};

export const COMMON_VALUES = {
  n: 'none',
  b: 'block',
  f: 'flex',
  t: 'transparent',
  i: 'inherit'
};

export const SPECIFIC_VALUES = {
  d: {
    f: 'flex',
    b: 'block',
    ib: 'inline-block'
  },
  bd: {
    n: 'none'
  },
  c: {
    pri: '#0a64e8',
    danger: '#ef4444'
  },
  bgc: {
    pri: '#0a64e8',
    soft: '#e8f1ff'
  }
};

export default {
  SHORT_PROPERTIES,
  COMMON_VALUES,
  SPECIFIC_VALUES
};
```

Quy trình thay link:
1. Tạo file `xcss-dict.mjs` theo mẫu trên.
2. Upload lên CDN/public URL của bạn.
3. Thay `dictionaryImport` bằng URL thật.
4. Chờ `await engine.ready` trước khi render class.

## SSR Và Static Extraction

SSR:

```js
import { getCss } from '@fwkui/x-css';

const styles = getCss();
// <style dangerouslySetInnerHTML={{ __html: styles }} />
```

Static extraction:

```js
import xcss from '@fwkui/x-css';
import fs from 'node:fs';

const { clsx, getCssString } = xcss.css({
  theme: { brand: '#0a64e8' }
}).buildCss();

clsx('m10px p20px cBrand dF');

fs.writeFileSync('./public/styles.css', getCssString());
```

## Prompt Mẫu Cho AI (Dùng Thẳng)

Bạn có thể đưa block này vào prompt system/project rules:

```markdown
You are using @fwkui/x-css.
Generate class names strictly with syntax: [Media]:[Layer][Property][Value][@Selector].

Rules:
1. Value is required for normal utility classes.
2. Layer must be numeric and placed directly before Property (e.g. 3bgWhite).
3. Selector must be suffix @Selector (e.g. cBlue@:hover).
4. Use dictionary aliases from DICTIONARY.md.
5. Keep abbreviation values capitalized when needed (bdN, dF, posA).
6. For complex CSS values, use bracket notation, and use ';' as space placeholder:
   w[calc(100%;-;10px)].
7. Use opc for opacity, tran for transition, op for object-position.

Before final answer:
- Validate each class can be parsed into {media, layer, property, value, selector}.
- Avoid invalid forms like bdn, tr0.2s, op0.8, 3:bgWhite, hover:cRed.
```

Template giao việc cho AI thiết kế UI:

```markdown
Thiết kế giao diện [màn hình] bằng @fwkui/x-css.
Yêu cầu:
1. Trả về HTML/JSX hoàn chỉnh.
2. Chỉ dùng class theo cú pháp [Media]:[Layer][Property][Value][@Selector].
3. Với value phức tạp, dùng [] và ';' thay cho khoảng trắng.
4. Không dùng class sai quy tắc (bdn, tr0.2s, op0.8, hover:cRed...).
5. Cuối câu trả lời thêm bảng kiểm:
   - class
   - parsed tuple {media, layer, property, value, selector}
   - css dự kiến
```

## Checklist QA Trước Khi Build

1. Không còn class sai viết hoa value (`bdn`, `df`, `posa`).
2. Không dùng nhầm alias (`op`/`opc`, `tr`/`tran`).
3. Các value phức tạp đều bọc `[]`.
4. Media custom đã khai báo trong `breakpoints`.
5. Không có dạng sai layer/selector (`3:bg`, `hover:cRed`).
6. Test parser với ít nhất bộ 10 test vector ở trên.

## Tài Liệu Liên Quan

1. Dictionary đầy đủ: [DICTIONARY.md](./DICTIONARY.md)
2. Source code: [https://github.com/dwork-dev/fwkui](https://github.com/dwork-dev/fwkui)

## License

Licensed under MIT. See [LICENSE](./LICENSE).

Updated: 2026-03-02
