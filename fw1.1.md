# I. CSS 
```text
[<MQ>:][layer:]<Thuộc tính>[selector]
```
- @ Phần phân cách giá trị và selector
- ; Thay cho dấu cách
- & Liên kết thuộc tính với nhau
## 1. Diễn giải
-  **[ < MQ > : ]: xs, sm, md, lg, xl, 2xl**
	  + xs: max-width: 575px Ví dụ: @media screen and (max-width: 575px) {}
	  + sm: min-width: 576px Ví dụ: @media screen and (min-width: 576px) {}
	  + md: min-width: 768px Ví dụ: @media screen and (min-width: 768px) {}
	  + lg: min-width: 992px Ví dụ: @media screen and (min-width: 992px) {}
	  + xl: min-width: 1200px Ví dụ: @media screen and (min-width: 1200px) {}
	  + 2xl: min-width: 1400px Ví dụ: @media screen and (min-width: 1400px) {}

-  [layer:] <số> Trong đó số: 1-19, số càng cao sự ưu càng lớn. VD: 1c#000 => @layer l1{ ... }

-  <Thuộc tính> Bắt buộc, Được định nghĩa theo cấu trúc:    

    ```text
    <Viết tắt tên thuộc tính hoặc đầy đủ>[Sự ưu tiên]<Giá trị>
    ```
	+  <Viết tắt tên thuộc tính>: là ký  thường được quy ước 
	+ [Sự ưu tiên>] ! Ví dụ: c!red => color: red !important;
	+ <Giá trị>    
		=> #<mã màu>    Ví dụ: c#000; => color: #000;  
		=> --<Tên biến> chỉ áp dụng nó đứng đầu tiên   Ví dụ: c--red => color: var(--red);  ví dụ bxsh{bd1px;solid;var(--c-q-black)} hợp lệ, bxsh{bd1px;solid;--c-q-black} không hợp lệ.   
		=> {<Biểu thức>}    Ví dụ: c{red} => color:red;    
		=> Chuỗi ký tự (Có một ký tự đầu Viết Hoa), đại diện cho từ tắt của giá trị hoặc đầy đủ (Phải tên không có ký tự -, dấu cách).        
		Ví dụ:    
		 - dF => d: display, F: flex => dF {display: flex;}  
		 - d!F => d: display, F: flex, ! ưu tiên => d!F {display: flex!importan;}   
		 - dFlex => d: display, Flex : flex => dFlex{display: flex}
   -  Sử dụng selector: Bắt đầu từ @ ví dụ: cRed@:hover => Tên class: cRed\\@\\:hover:hover, thuộc tính của class: color:red;
## 2. Thuộc tính CSS
color:c   
font-size:fs   
font-family:ff   
font-weight:fw   
font-style:fst   
text-align:ta   
text-decoration:td   
line-height:lh   
letter-spacing:ls   
word-spacing:ws   
vertical-align:va   
background:bg   
background-color:bgc   
background-image:bgi   
background-position:bgp   
background-repeat:bgr   
background-size:bgs   
background-origin:bgo   
background-clip:bgcl   
background-attachment:bga   
opacity:o   
display:d   
position:pos   
top:t   
right:r   
bottom:b   
left:l   
float:fl   
clear:cl   
z-index:z   
width:w   
height:h   
min-width:minw   
min-height:minh   
max-width:maxw   
max-height:maxh   
margin:m   
margin-top:mt   
margin-right:mr   
margin-bottom:mb   
margin-left:ml   
padding:p   
padding-top:pt   
padding-right:pr   
padding-bottom:pb   
padding-left:pl   
border:bd   
border-top:bdt   
border-right:bdr   
border-bottom:bdb   
border-left:bdl   
border-width:bdw   
border-style:bds   
border-color:bdc   
border-radius:bdra   
flex:fx   
flex-direction:fxd   
flex-wrap:fxw   
justify-content:jc   
align-items:ai   
align-content:ac   
align-self:as   
flex-grow:fxg   
flex-shrink:fxs   
flex-basis:fxb   
order:or   
grid-template-columns:gtc   
grid-template-rows:gtr   
grid-auto-columns:gac   
grid-auto-rows:gar   
grid-column:gc   
grid-row:gr   
gap:g   
transform:tf   
transition:ts   
box-sizing:bxs   
box-shadow:bxsh   
filter:ft   
animation:an   
cursor:cr   
overflow:ov   
visibility:v   
pointer-events:pte
## 3. Một số giá trị của thuộc tính
transparent:t   
currentColor:cc   
inherit:i   
auto:a   
none:n   
start:s   
end:e   
center:c   
baseline:ba   
stretch:st   
space-between:sb   
space-around:sa   
stretch:ss   
block:b   
inline:in   
inline-block:inb   
flex:f   
grid:g   
left:l   
right:r   
justify:j   
underline:u   
overline:ovl   
line-through:lt   
scroll:sc   
hidden:h   
visible:v   
no-repeat:nrep   
repeat:rep   
repeat-x:repx   
repeat-y:repy   
repeat no-repeat:repn
### 4. Một số thuộc tính giá trị css theo cụm từ viết tắt của thuộc tính
```js
	{
		pos: {
	            s: "static",
	            r: "relative",
	            a: "absolute",
	            f: "fixed",
	        },
	        fxd: {
	            c: "column",
	            cr: "column-reverse",
	            r: "row",
	            rr: "row-reverse",
	        },
	        fxw: {
	            n: "nowrap",
	            w: "wrap",
	            wr: "wrap-reverse",
	        }
	}
```
# II. frameword javascript
