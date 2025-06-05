# Hướng dẫn sử dụng framework css + javascript (fwkuijs)
## I. CSS
#### Cấu trúc tự sinh class css 
```text
[<MQ>:][<layer>]<pvCSS>[<selector>]
```
### 1. Những ký tự đặc biệt:
+ & Liên kết thuộc tính với nhau. Ví dụ: cRed&bgcGreen
+ ; Thay cho dấu cách của các giá trị. Ví dụ: calc(100vw;-;10px), @;.PLINE (sẽ có tác dụng những thẻ có chứa class PLINE)
+ @ phân cách selector với tên class. Ví dụ: @:hover
+ ! Sự tiên của thuộc tính: ví dụ: c!red, cGreen. c!red sẽ ưu tiên hơn cGreen.



### 2. Diễn giải
- [] có thể có hoặc không.
-  **MQ:  xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px
	  + sm: min-width: 576px
	  + md: min-width: 768px
	  + lg: min-width: 992px
	  + xl: min-width: 1200px
	  + 2xl: min-width: 1400px
     	  + xsi: mi -width: 576px
	  + sma: max-width: 768px
	  + mda: max-width: 992px
	  + lga: max-width: 1200px
	  + xla: max-width: 1400px
	

-  layer:  Số có giá trị từ 1-19, số càng cao sự ưu càng lớn. VD: 1c#000 => layer = 1
CSS tự động sinh theo thư tự sau
```css
@layer l0,l1,l2,...l19
```

-  pvCSS:  Bắt buộc, Được định nghĩa theo cấu trúc:    

```text
    <pCSS>[!]<vCSS>
```
	+  <pCSS>: là ký  thường được quy ước ví dụ: Tham khảo Viết tắt [Tham khảo các class đã được định nghĩa](css-class.md) hoặc viết đầy đủ: color, background-color, padding, margin, display,...
	+ [!] có thể có, đánh dấu sự ưu tiên của thuộc tính
	+ <vCSS> có biểu thức sau: 
```txt
    - #<Mã màu>: #123456, #222222,..
    - --<Tên biến> Ví dụ: --color-green; --color-red
    - {Biểu thức, giá trị} Ví dụ: {red}, {calc(10rem;-;2px)}
    - ký tự đầu viết hoa: Ví dụ:  Red (R viết hoa); Calc(10rem;-;2px)
    - Ký tự là số: Ví dụ:  -10px, 10px, .5rem, 0.5rem, -0.5rem
```  
- selector có dạng sau: @<selector>   
+ <selector> theo quy tắc của selector, nếu là dấu cách thì sẽ được thanh thế thành dấu ;  
Ví dụ: @:hover, @:hover+;.ul>li
  

## 2. Cách sử dụng
### 1 Chèn vào thẻ cuối thẻ body
- Sử dụng link :https://unpkg.com/fwkuijs@1.0.6/fw.js
```html
  <!-- ... ->
  <body>
  <!-- Thẻ của bạn -->
   <script type="module">
        import $ from "https://unpkg.com/fwkuijs@1.0.6/fw.js";
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


### 2 Định nghĩa class của css
[Tham khảo các class đã được định nghĩa](class-short.md)

**Các quy tắc css động**
<pCSS>[!]<vCSS> Ví dụ đều hợp lệ: colorRed; color#123456; color{#123456}; color!#123456;



### 3 Lưu ý Định nghĩa trong css
vCss: Giá trị của thuộc tính: Có các cách viết sau (tham khảo phần **2 Định nghĩa class của css**)
- Cách viết 1: Sử dụng dấu {Chèn giá trị thuộc tính vào đây}
  + c{red} , c{#000000}, c{var(--red)}
```css
c\{red\} {
  color: red;
}
c\{\#000000\} {
  color: #000000;
}

c\{var\(--red\)\} {
  color: var(--red);
}
```
- Cách viết 2: Sử dụng ký tự đặc biệt Số, Ký tự đầu viết hoa, ký tự # (nếu là màu), -- (biến), ! (sự ưu tiên)
  + cRed, c#000000,c--red
```css
cRed {
  color: red;
}
c\#000000 {
  color: #000000;
}

c--red {
  color: var(--red);
}
```

### 4 Sắp xếp ưu tiên theo layer theo công thức sau:
Chèn <layer><pvCSS>
Ví dụ
+ 1c#000000:
```css
 @layer l1{
   \31 c\#000000 {
    color: #000000;
  }
}
```
### 5 Sắp xếp ưu tiên theo thuộc tính !important
Chèn theo công thức: <pCSS>!<vCSS>   
Ví dụ:    
+ c!red, c!Red, c!#000000
```css
  c\!red {
      color: red!important;
  }
c\!Red {
  color: red!important;
}
```
### 6 Định nghĩa bố cục theo màn hình
Chèn theo công thức: Chèn ở vị trí đầu tiên của class có dạng sau: [<MQ>:][<layer>]<pvCSS>@<selector>
-  **<MQ>: là xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px
	  + sm: min-width: 576px
	  + md: min-width: 768px
	  + lg: min-width: 992px
	  + xl: min-width: 1200px
	  + 2xl: min-width: 1400px

Ví dụ:   
- xs:cRed   
```css
@media screen and (max-width: 575px) {
  xs\:cRed {
  color: red;
}
}
```

### 7 Kết hợp các thuộc tính với nhau khi chung selector hoặc Media Queries
- Có dạng công thức sau: [<MQ>:]<pvCSS>&<pvCSS>&...[@<selector>]
Ví dụ: xs:cRed&bgcGreen   
```css
@media screen and (max-width: 575px) {
  xs\:cRed\&bgcGreen {
    color: red;
    background-color:green;
  }
}
```
### 8 Sử dụng selector Khi kết hợp dấu @ phía trước
- Có dạng: [<MQ>:][<layer>]<pvCSS>@<selector>
Ví dụ:  cRed@:hover
```css
cRed\@\:hover:hover {
  color:red;
}
```
## II. JAVASCRIPT
### 1. Hàm cơ bản
- stateValue: Tạo trạng thái giá trị.
  + Khởi tạo state var: state = stateValue(initValue);
  + Gán giá trị: state.value = <giá trị>
  + Lấy giá trị. state.value => Giá trị
- stateValueObject: Tạo giá trị state từng giá trị trong object, hàm gán hay khởi tạo trạng thái stateObject: replaceStateObject.
  + Khởi tạo state object: var stateObject = stateValueObject(initObject)
  + Gán một giá trị vào thuộc tính: stateObject.<thuộc tính> = value
  + Lấy giá trị: stateObject.<thuộc tính>
  + Gán toàn bộ giá trị: sử dụng hàm replaceStateObject: replaceStateObject(stateObject, obj). Không thể gán trực tiếp được, nếu gán trực tiếp thì sẽ bị mất trạng thái quản lý object
  + Đối với mảng đều sử dụng được các thuộc tính của mảng
- effect:   Hàm này dùng để quản lý dẫn xuất tương tác phụ.
  + khởi tạo: effect(f) => Tạo một trạng thái tương tác dẫn xuất phụ, f là hàm có thể có giá trị trả về.
  + Ví dụ: effect(()=> {console.log(state_a)})
 
- listObjectDom: Hàm tạo danh sách dom.
  + Khởi tạo: listObjectDom(container, items, itemFunc) . Trong đó: container là thẻ dom, items: là danh sách stateObject, itemFunc: có cấu trúc (value, key, delFn). delFn là hàm xoá gọi delFn();
  + Ví dụ: listObjectDom(div, \[1,2,3,5\], (value,key, del) => span(value, span({onclick: del},"xoa")))
