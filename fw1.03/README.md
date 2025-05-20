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
[Tham khảo các class đã được định nghĩa](class-short.md)

**Các quy tắc css động**
<thuộc tính đầy đủ><giá trị đầy đủ> Ví dụ đều hợp lệ: colorRed; color#123456; color{#123456}; color!#123456;

## 3 Lưu ý Định nghĩa trong css
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

## 4 Sắp xếp ưu tiên theo layer theo công thức sau:
Chèn <layer><Tên thuộc tính><giá trị thuộc tính>   
Ví dụ
+ 1c#000000:
```css
 @layer l1{
   \31 c\#000000 {
    color: #000000;
  }
}
```
## 5 Sắp xếp ưu tiên theo thuộc tính !important
Chèn theo công thức: <Tên thuộc tính>!<Giá trị thuộc tính>   
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
## 6 Định nghĩa bố cục theo màn hình
Chèn theo công thức: Chèn ở vị trí đầu tiên của class có dạng sau: <MQ>:<class định nghĩa thuộc tính>
-  **MQ: là xs, sm, md, lg, xl, 2xl**
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

## 7 Kết hợp các thuộc tính với nhau khi chung selector hoặc Media Queries
- Có dạng công thức sau: [<MQ:>]<class1>&<class2>&...[@<selector>]
Ví dụ: xs:cRed&bgcGreen   
```css
@media screen and (max-width: 575px) {
  xs\:cRed\&bgcGreen {
    color: red;
    background-color:green;
  }
}
```
## 8 Sử dụng selector Khi kết hợp dấu @ phía trước
- Có dạng:  <class>@<selector>
Ví dụ:  cRed@:hover
```css
cRed\@\:hover:hover {
  color:red;
}
```
## 9 Cấu trúc class theo framework
```text
[<MQ>:][layer]<Thuộc tính>[selector]
```
- & Liên kết thuộc tính với nhau
- ; Thay cho dấu cách của các giá trị
- @ phân cách selector với tên class

### Diễn giải
-  **MQ:  xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px
	  + sm: min-width: 576px
	  + md: min-width: 768px
	  + lg: min-width: 992px
	  + xl: min-width: 1200px
	  + 2xl: min-width: 1400px

-  [layer:] <số> Trong đó số: 1-19, số càng cao sự ưu càng lớn. VD: 1c#000 => layer = 1

-  <Thuộc tính> Bắt buộc, Được định nghĩa theo cấu trúc:    

```text
    <Viết tắt tên thuộc tính>[Sự ưu tiên]<Giá trị>
```
	+  <Viết tắt tên thuộc tính>: là ký  thường được quy ước 
	+ [Sự ưu tiên>] !
	+ <Giá trị>    
		=> #<mã màu>   
		=> --<Tên biến>   
		=> {<Biểu thức>}    

  


