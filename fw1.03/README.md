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
**- Thuộc tính: -webkit-line-clamp**
```css
wlc<vCss> {-webkit-line-clamp:<vCss>; } 
 ```
            
**- Thuộc tính: -webkit-text-fill-color**
```css
wtfc<vCss> {-webkit-text-fill-color:<vCss>; } 
 ```
            
**- Thuộc tính: -webkit-text-stroke**
```css
wts<vCss> {-webkit-text-stroke:<vCss>; } 
 ```
            
**- Thuộc tính: -webkit-text-stroke-color**
```css
wtsc<vCss> {-webkit-text-stroke-color:<vCss>; } 
 ```
            
**- Thuộc tính: -webkit-text-stroke-width**
```css 
wtswM {-webkit-text-stroke-width:medium;}
wtswT {-webkit-text-stroke-width:thick;} 
 ```
            
**- Thuộc tính: accent-color**
```css 
accU {accent-color:unset;} 
 ```
            
**- Thuộc tính: align-content**
```css 
acS {align-content:start;}
acE {align-content:end;}
acFs {align-content:flex-start;}
acFe {align-content:flex-end;}
acN {align-content:normal;}
acB {align-content:baseline;}
acFb {align-content:first baseline;}
acLb {align-content:last baseline;}
acSp {align-content:space-between;}
acSa {align-content:space-around;}
acSe {align-content:space-evenly;}
acSt {align-content:stretch;}
acSc {align-content:safe center;}
acUc {align-content:unsafe center;} 
 ```
            
**- Thuộc tính: align-items**
```css 
aiN {align-items:normal;}
aiC {align-items:center;}
aiS {align-items:start;}
aiE {align-items:end;}
aiFs {align-items:flex-start;}
aiFe {align-items:flex-end;}
aiSs {align-items:self-start;}
aiSe {align-items:self-end;}
aiB {align-items:baseline;}
aiFb {align-items:first baseline;}
aiLb {align-items:last baseline;}
aiSc {align-items:safe center;}
aiUc {align-items:unsafe center;} 
 ```
            
**- Thuộc tính: align-self**
```css 
asN {align-self:normal;}
asC {align-self:center;}
asS {align-self:start;}
asE {align-self:end;}
asSs {align-self:self-start;}
asSe {align-self:self-end;}
asFs {align-self:flex-start;}
asFe {align-self:flex-end;}
asB {align-self:baseline;}
asFb {align-self:first baseline;}
asLb {align-self:last baseline;}
asSt {align-self:stretch;}
asSc {align-self:safe center;}
asUc {align-self:unsafe center;} 
 ```
            
**- Thuộc tính: all**
```css
a<vCss> {all:<vCss>; } 
 ```
            
**- Thuộc tính: animation**
```css
ani<vCss> {animation:<vCss>; } 
 ```
            
**- Thuộc tính: animation-composition**
```css 
anicR {animation-composition:replace;}
anicA {animation-composition:add;}
anicAc {animation-composition:accumulate;}
anicRa {animation-composition:replace, add;}
anicAac {animation-composition:add, accumulate;}
anicRaac {animation-composition:replace, add, accumulate;} 
 ```
            
**- Thuộc tính: animation-delay**
```css
anide<vCss> {animation-delay:<vCss>; } 
 ```
            
**- Thuộc tính: animation-direction**
```css 
anidiR {animation-direction:reverse;}
anidiA {animation-direction:alternate;}
anidiAr {animation-direction:alternate-reverse;}
anidiNr {animation-direction:normal, reverse;}
anidiArn {animation-direction:alternate, reverse, normal;} 
 ```
            
**- Thuộc tính: animation-duration**
```css
anidu<vCss> {animation-duration:<vCss>; } 
 ```
            
**- Thuộc tính: animation-fill-mode**
```css 
anifmN {animation-fill-mode:none;}
anifmF {animation-fill-mode:forwards;}
anifmB {animation-fill-mode:backwards;}
anifmNb {animation-fill-mode:none, backwards;}
anifmFbn {animation-fill-mode:both, forwards, none;} 
 ```
            
**- Thuộc tính: animation-iteration-count**
```css
aniic<vCss> {animation-iteration-count:<vCss>; } 
 ```
            
**- Thuộc tính: animation-name**
```css 
aninN {animation-name:None;}
aninS {animation-name:slide;} 
 ```
            
**- Thuộc tính: animation-play-state**
```css 
anipsP {animation-play-state:paused;}
anipsR {animation-play-state:running;} 
 ```
            
**- Thuộc tính: animation-timing-function**
```css 
anitfEi {animation-timing-function:ease-in;}
anitfEo {animation-timing-function:ease-out;}
anitfEio {animation-timing-function:ease-in-out;}
anitfL {animation-timing-function:linear;}
anitfSs {animation-timing-function:step-start;}
anitfSe {animation-timing-function:step-end;} 
 ```
            
**- Thuộc tính: appearance**
```css 
apN {appearance:none;}
apMb {appearance:menulist-button;}
apTf {appearance:textfield;}
apB {appearance:button;}
apC {appearance:checkbox;} 
 ```
            
**- Thuộc tính: aspect-ratio**
```css 
arA {aspect-ratio:auto;}
arS {aspect-ratio:1 / 1;}
arV {aspect-ratio:16 / 9;} 
 ```
            
**- Thuộc tính: backdrop-filter**
```css
bkdf<vCss> {backdrop-filter:<vCss>; } 
 ```
            
**- Thuộc tính: backface-visibility**
```css 
bkfvH {backface-visibility:hidden;} 
 ```
            
**- Thuộc tính: background**
```css
bg<vCss> {background:<vCss>; } 
 ```
            
**- Thuộc tính: background-attachment**
```css 
bgaS {background-attachment:scroll;}
bgaF {background-attachment:fixed;}
bgaL {background-attachment:local;} 
 ```
            
**- Thuộc tính: background-blend-mode**
```css 
bgbmN {background-blend-mode:normal;}
bgbmM {background-blend-mode:multiply;}
bgbmS {background-blend-mode:screen;}
bgbmO {background-blend-mode:overlay;}
bgbmD {background-blend-mode:darken;}
bgbmL {background-blend-mode:lighten;}
bgbmCd {background-blend-mode:color-dodge;}
bgbmI {background-blend-mode:color-burn;}
bgbmHl {background-blend-mode:hard-light;}
bgbmSl {background-blend-mode:soft-light;}
bgbmDi {background-blend-mode:difference;}
bgbmE {background-blend-mode:exclusion;}
bgbmH {background-blend-mode:hue;}
bgbmSa {background-blend-mode:saturation;}
bgbmC {background-blend-mode:color;}
bgbmLu {background-blend-mode:luminosity;} 
 ```
            
**- Thuộc tính: background-clip**
```css 
bgclBb {background-clip:border-box;}
bgclPb {background-clip:padding-box;}
bgclCb {background-clip:content-box;}
bgclT {background-clip:text;} 
 ```
            
**- Thuộc tính: background-color**
```css 
bgcT {background-color:transparent;}
bgcC {background-color:currentcolor;} 
 ```
            
**- Thuộc tính: background-image**
```css 
bgiN {background-image:none;} 
 ```
            
**- Thuộc tính: background-origin**
```css 
bgoBb {background-origin:border-box;}
bgoPb {background-origin:padding-box;}
bgoCb {background-origin:content-box;} 
 ```
            
**- Thuộc tính: background-position**
```css 
bgpT {background-position:top;}
bgpB {background-position:bottom;}
bgpL {background-position:left;}
bgpR {background-position:right;}
bgpC {background-position:center;}
bgpLt {background-position:left top;}
bgpCt {background-position:center top;}
bgpRt {background-position:right top;}
bgpLc {background-position:left center;}
bgpCc {background-position:center center;}
bgpRc {background-position:right center;}
bgpLb {background-position:left bottom;}
bgpCb {background-position:center bottom;}
bgpRb {background-position:right bottom;} 
 ```
            
**- Thuộc tính: background-position-x**
```css 
bgpxL {background-position-x:left;}
bgpxR {background-position-x:right;}
bgpxC {background-position-x:center;} 
 ```
            
**- Thuộc tính: background-position-y**
```css 
bgpyT {background-position-y:top;}
bgpyB {background-position-y:bottom;}
bgpyC {background-position-y:center;} 
 ```
            
**- Thuộc tính: background-repeat**
```css 
bgrR {background-repeat:repeat;}
bgrX {background-repeat:repeat-x;}
bgrY {background-repeat:repeat-y;}
bgrS {background-repeat:space;}
bgrRn {background-repeat:round;}
bgrN {background-repeat:no-repeat;}
bgrRs {background-repeat: repeat space;}
bgrRr {background-repeat:repeat repeat;}
bgrNr {background-repeat:no-repeat round;} 
 ```
            
**- Thuộc tính: background-size**
```css 
bgsA {background-size:auto;}
bgsC {background-size:contain;} 
 ```
            
**- Thuộc tính: block-size**
```css
blks<vCss> {block-size:<vCss>; } 
 ```
            
**- Thuộc tính: border**
```css 
bdN {border:none;}
bdH {border:hidden;}
bdD {border:dotted;}
bdDs {border:dashed;}
bdDb {border:double;}
bdG {border:groove;}
bdR {border:ridge;}
bdI {border:inset;}
bdO {border:outset;} 
 ```
            
**- Thuộc tính: border-block**
```css
bdblk<vCss> {border-block:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-color**
```css
bdblc<vCss> {border-block-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-end**
```css
bdble<vCss> {border-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-end-color**
```css
bdblec<vCss> {border-block-end-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-end-style**
```css 
bdblesN {border-block-end-style:none;}
bdblesH {border-block-end-style:hidden;}
bdblesD {border-block-end-style:dotted;}
bdblesDs {border-block-end-style:dashed;}
bdblesDb {border-block-end-style:double;}
bdblesG {border-block-end-style:groove;}
bdblesR {border-block-end-style:ridge;}
bdblesI {border-block-end-style:inset;}
bdblesO {border-block-end-style:outset;} 
 ```
            
**- Thuộc tính: border-block-end-width**
```css
bdblew<vCss> {border-block-end-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-start**
```css
bdbls<vCss> {border-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-start-color**
```css
bdblsc<vCss> {border-block-start-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-start-style**
```css 
bdblssN {border-block-start-style:none;}
bdblssH {border-block-start-style:hidden;}
bdblssD {border-block-start-style:dotted;}
bdblssDs {border-block-start-style:dashed;}
bdblssDb {border-block-start-style:double;}
bdblssG {border-block-start-style:groove;}
bdblssR {border-block-start-style:ridge;}
bdblssI {border-block-start-style:inset;}
bdblssO {border-block-start-style:outset;} 
 ```
            
**- Thuộc tính: border-block-start-width**
```css
bdblsw<vCss> {border-block-start-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-block-style**
```css 
bdblstN {border-block-style:none;}
bdblstH {border-block-style:hidden;}
bdblstD {border-block-style:dotted;}
bdblstDs {border-block-style:dashed;}
bdblstDb {border-block-style:double;}
bdblstG {border-block-style:groove;}
bdblstR {border-block-style:ridge;}
bdblstI {border-block-style:inset;}
bdblstO {border-block-style:outset;} 
 ```
            
**- Thuộc tính: border-block-width**
```css
bdblwi<vCss> {border-block-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-bottom**
```css
bdb<vCss> {border-bottom:<vCss>; } 
 ```
            
**- Thuộc tính: border-bottom-color**
```css
bdbc<vCss> {border-bottom-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-bottom-left-radius**
```css
bdblr<vCss> {border-bottom-left-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-bottom-right-radius**
```css
bdbrr<vCss> {border-bottom-right-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-bottom-style**
```css 
bdbstN {border-bottom-style:none;}
bdbstH {border-bottom-style:hidden;}
bdbstD {border-bottom-style:dotted;}
bdbstDs {border-bottom-style:dashed;}
bdbstDb {border-bottom-style:double;}
bdbstG {border-bottom-style:groove;}
bdbstR {border-bottom-style:ridge;}
bdbstI {border-bottom-style:inset;}
bdbstO {border-bottom-style:outset;} 
 ```
            
**- Thuộc tính: border-bottom-width**
```css 
bdbwT {border-bottom-width:thin;}
bdbwM {border-bottom-width:medium;}
bdbwTh {border-bottom-width:thick;} 
 ```
            
**- Thuộc tính: border-collapse**
```css 
bdclS {border-collapse:separate;}
bdclC {border-collapse:collapse;} 
 ```
            
**- Thuộc tính: border-color**
```css
bdc<vCss> {border-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-end-end-radius**
```css
bdeer<vCss> {border-end-end-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-end-start-radius**
```css
bdesr<vCss> {border-end-start-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-image**
```css
bdimg<vCss> {border-image:<vCss>; } 
 ```
            
**- Thuộc tính: border-image-outset**
```css
bdio<vCss> {border-image-outset:<vCss>; } 
 ```
            
**- Thuộc tính: border-image-repeat**
```css 
bdirSt {border-image-repeat:stretch;}
bdirR {border-image-repeat:repeat;}
bdirRn {border-image-repeat:round;}
bdirS {border-image-repeat:space;} 
 ```
            
**- Thuộc tính: border-image-slice**
```css
bdis<vCss> {border-image-slice:<vCss>; } 
 ```
            
**- Thuộc tính: border-image-source**
```css
bdisrc<vCss> {border-image-source:<vCss>; } 
 ```
            
**- Thuộc tính: border-image-width**
```css
bdiw<vCss> {border-image-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline**
```css
bdi<vCss> {border-inline:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-color**
```css
bdic<vCss> {border-inline-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-end**
```css
bdie<vCss> {border-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-end-color**
```css
bdiec<vCss> {border-inline-end-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-end-style**
```css
bdies<vCss> {border-inline-end-style:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-end-width**
```css
bdiew<vCss> {border-inline-end-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-start**
```css
bdista<vCss> {border-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-start-color**
```css
bdisc<vCss> {border-inline-start-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-start-style**
```css
bdiss<vCss> {border-inline-start-style:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-start-width**
```css
bdisw<vCss> {border-inline-start-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-style**
```css
bdistl<vCss> {border-inline-style:<vCss>; } 
 ```
            
**- Thuộc tính: border-inline-width**
```css
bdinw<vCss> {border-inline-width:<vCss>; } 
 ```
            
**- Thuộc tính: border-left**
```css 
bdlN {border-left:none;} 
 ```
            
**- Thuộc tính: border-left-color**
```css
bdlc<vCss> {border-left-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-left-style**
```css
bdls<vCss> {border-left-style:<vCss>; } 
 ```
            
**- Thuộc tính: border-left-width**
```css 
bdlwT {border-left-width:thin;}
bdlwM {border-left-width:medium;}
bdlwTh {border-left-width:thick;} 
 ```
            
**- Thuộc tính: border-radius**
```css
bda<vCss> {border-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-right**
```css 
bdrN {border-right:none;} 
 ```
            
**- Thuộc tính: border-right-color**
```css
bdrc<vCss> {border-right-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-right-style**
```css 
bdrsN {border-right-style:none;}
bdrsH {border-right-style:hidden;}
bdrsDt {border-right-style:dotted;}
bdrsDs {border-right-style:dashed;}
bdrsS {border-right-style:solid;}
bdrsDb {border-right-style:double;}
bdrsG {border-right-style:groove;}
bdrsR {border-right-style:ridge;}
bdrsIn {border-right-style:inset;}
bdrsOut {border-right-style:outset;} 
 ```
            
**- Thuộc tính: border-right-width**
```css 
bdrwT {border-right-width:thin;}
bdrwM {border-right-width:medium;}
bdrwTh {border-right-width:thick;} 
 ```
            
**- Thuộc tính: border-spacing**
```css
bdsp<vCss> {border-spacing:<vCss>; } 
 ```
            
**- Thuộc tính: border-start-end-radius**
```css
bdser<vCss> {border-start-end-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-start-start-radius**
```css
bdssr<vCss> {border-start-start-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-style**
```css 
bdsN {border-style:none;}
bdsH {border-style:hidden;}
bdsDt {border-style:dotted;}
bdsDs {border-style:dashed;}
bdsS {border-style:solid;}
bdsDb {border-style:double;}
bdsG {border-style:groove;}
bdsR {border-style:ridge;}
bdsIn {border-style:inset;}
bdsOut {border-style:outset;} 
 ```
            
**- Thuộc tính: border-top**
```css 
bdtN {border-top:none;} 
 ```
            
**- Thuộc tính: border-top-color**
```css
bdtc<vCss> {border-top-color:<vCss>; } 
 ```
            
**- Thuộc tính: border-top-left-radius**
```css
bdtlr<vCss> {border-top-left-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-top-right-radius**
```css
bdtrr<vCss> {border-top-right-radius:<vCss>; } 
 ```
            
**- Thuộc tính: border-top-style**
```css 
bdtsN {border-top-style:none;}
bdtsH {border-top-style:hidden;}
bdtsDt {border-top-style:dotted;}
bdtsDs {border-top-style:dashed;}
bdtsS {border-top-style:solid;}
bdtsDb {border-top-style:double;}
bdtsG {border-top-style:groove;}
bdtsR {border-top-style:ridge;}
bdtsIn {border-top-style:inset;}
bdtsOut {border-top-style:outset;} 
 ```
            
**- Thuộc tính: border-top-width**
```css 
bdtwT {border-top-width:thin;}
bdtwM {border-top-width:medium;}
bdtwTh {border-top-width:thick;} 
 ```
            
**- Thuộc tính: border-width**
```css 
bdwT {border-width:thin;}
bdwM {border-width:medium;}
bdwTh {border-width:thick;} 
 ```
            
**- Thuộc tính: bottom**
```css 
bA {bottom:auto;} 
 ```
            
**- Thuộc tính: box-decoration-break**
```css 
bdbrC {box-decoration-break:clone;}
bdbrS {box-decoration-break:slice;} 
 ```
            
**- Thuộc tính: box-shadow**
```css
bxshd<vCss> {box-shadow:<vCss>; } 
 ```
            
**- Thuộc tính: box-sizing**
```css
bxsz<vCss> {box-sizing:<vCss>; } 
 ```
            
**- Thuộc tính: break-after**
```css
brka<vCss> {break-after:<vCss>; } 
 ```
            
**- Thuộc tính: break-before**
```css
brkb<vCss> {break-before:<vCss>; } 
 ```
            
**- Thuộc tính: break-inside**
```css
brki<vCss> {break-inside:<vCss>; } 
 ```
            
**- Thuộc tính: caption-side**
```css
caps<vCss> {caption-side:<vCss>; } 
 ```
            
**- Thuộc tính: caret-color**
```css
crtc<vCss> {caret-color:<vCss>; } 
 ```
            
**- Thuộc tính: clear**
```css
clr<vCss> {clear:<vCss>; } 
 ```
            
**- Thuộc tính: clip-path**
```css
clpp<vCss> {clip-path:<vCss>; } 
 ```
            
**- Thuộc tính: color**
```css 
cI {color:inherit;}
cT {color:transparent;} 
 ```
            
**- Thuộc tính: color-interpolation**
```css
cip<vCss> {color-interpolation:<vCss>; } 
 ```
            
**- Thuộc tính: color-scheme**
```css
csch<vCss> {color-scheme:<vCss>; } 
 ```
            
**- Thuộc tính: column-count**
```css
colc<vCss> {column-count:<vCss>; } 
 ```
            
**- Thuộc tính: column-fill**
```css
colf<vCss> {column-fill:<vCss>; } 
 ```
            
**- Thuộc tính: column-gap**
```css
colg<vCss> {column-gap:<vCss>; } 
 ```
            
**- Thuộc tính: column-rule**
```css
colr<vCss> {column-rule:<vCss>; } 
 ```
            
**- Thuộc tính: column-rule-color**
```css
colrc<vCss> {column-rule-color:<vCss>; } 
 ```
            
**- Thuộc tính: column-rule-style**
```css
colrs<vCss> {column-rule-style:<vCss>; } 
 ```
            
**- Thuộc tính: column-rule-width**
```css
colrw<vCss> {column-rule-width:<vCss>; } 
 ```
            
**- Thuộc tính: column-span**
```css
cols<vCss> {column-span:<vCss>; } 
 ```
            
**- Thuộc tính: column-width**
```css
colw<vCss> {column-width:<vCss>; } 
 ```
            
**- Thuộc tính: columns**
```css 
colA {columns:auto;} 
 ```
            
**- Thuộc tính: contain**
```css
cnt<vCss> {contain:<vCss>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-block-size**
```css
cntibs<vCss> {contain-intrinsic-block-size:<vCss>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-height**
```css
cntih<vCss> {contain-intrinsic-height:<vCss>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-inline-size**
```css
cntiis<vCss> {contain-intrinsic-inline-size:<vCss>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-size**
```css
cntis<vCss> {contain-intrinsic-size:<vCss>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-width**
```css
ciw<vCss> {contain-intrinsic-width:<vCss>; } 
 ```
            
**- Thuộc tính: container**
```css
ctr<vCss> {container:<vCss>; } 
 ```
            
**- Thuộc tính: container-name**
```css
ctrn<vCss> {container-name:<vCss>; } 
 ```
            
**- Thuộc tính: container-type**
```css
ctrt<vCss> {container-type:<vCss>; } 
 ```
            
**- Thuộc tính: content**
```css
ctt<vCss> {content:<vCss>; } 
 ```
            
**- Thuộc tính: counter-increment**
```css
cntri<vCss> {counter-increment:<vCss>; } 
 ```
            
**- Thuộc tính: counter-reset**
```css
cntrr<vCss> {counter-reset:<vCss>; } 
 ```
            
**- Thuộc tính: counter-set**
```css
cntrs<vCss> {counter-set:<vCss>; } 
 ```
            
**- Thuộc tính: cursor**
```css 
crP {cursor:pointer;}
crA {cursor:auto;}
crD {cursor:default;}
crN {cursor:none;}
crCm {cursor:context-menu;}
crH {cursor:help;}
crPg {cursor:progress;}
crW {cursor:wait;}
crC {cursor:cell;}
crT {cursor:text;}
crVt {cursor:vertical-text;}
crAl {cursor:alias;}
crCp {cursor:copy;}
crMo {cursor:move;}
crNd {cursor:no-drop;}
crNa {cursor:not-allowed;}
crGr {cursor:grab;}
crGb {cursor:grabbing;}
crAs {cursor:all-scroll;}
crColr {cursor:col-resize;}
crRr {cursor:row-resize;}
crNr {cursor:n-resize;}
crEr {cursor:e-resize;}
crSr {cursor:s-resize;}
crWr {cursor:w-resize;}
crNer {cursor:ne-resize;}
crSer {cursor:se-resize;}
crSwr {cursor:sw-resize;}
crEwr {cursor:ew-resize;}
crNsr {cursor:ns-resize;}
crNesw {cursor:nesw-resize;}
crNwse {cursor:nwse-resize;}
crZi {cursor:zoom-in;}
crZo {cursor:zoom-out;} 
 ```
            
**- Thuộc tính: direction**
```css
dir<vCss> {direction:<vCss>; } 
 ```
            
**- Thuộc tính: display**
```css 
dB {display:block;}
dIb {display:inline-block;}
dI {display:inline;}
dF {display:flex;}
dIf {display:inline-flex;}
dT {display:table;}
dIt {display:inline-table;}
dTcp {display:table-caption;}
dTcell {display:table-cell;}
dTcol {display:table-column;}
dTcolg {display:table-column-group;}
dTfg {display:table-footer-group;}
dThg {display:table-header-group;}
dTrg {display:table-row-group;}
dTr {display:table-row;}
dFr {display:flow-root;}
dG {display:grid;}
dIg {display:inline-grid;}
dC {display:contents;}
dLi {display:list-item;}
dN {display:none;} 
 ```
            
**- Thuộc tính: empty-cells**
```css
empc<vCss> {empty-cells:<vCss>; } 
 ```
            
**- Thuộc tính: filter**
```css 
fltN {filter:none;} 
 ```
            
**- Thuộc tính: flex**
```css 
fxN {flex:none;}
fxI {flex:0 1 auto;}
fxA {flex:1 1 auto;} 
 ```
            
**- Thuộc tính: flex-basis**
```css 
fxbA {flex-basis:auto;} 
 ```
            
**- Thuộc tính: flex-direction**
```css 
fxdR {flex-direction:row;}
fxdRr {flex-direction:row-reverse;}
fxdC {flex-direction:column;}
fxdCr {flex-direction:column-reverse;} 
 ```
            
**- Thuộc tính: flex-flow**
```css
fxf<vCss> {flex-flow:<vCss>; } 
 ```
            
**- Thuộc tính: flex-grow**
```css
fxg<vCss> {flex-grow:<vCss>; } 
 ```
            
**- Thuộc tính: flex-shrink**
```css
fxs<vCss> {flex-shrink:<vCss>; } 
 ```
            
**- Thuộc tính: flex-wrap**
```css 
fxwW {flex-wrap:wrap;}
fxwWr {flex-wrap:wrap-reverse;}
fxwN {flex-wrap:nowrap;} 
 ```
            
**- Thuộc tính: float**
```css 
flIs {float:inline-start;}
flIe {float:inline-end;}
flR {float:right;}
flL {float:left;}
flN {float:none;} 
 ```
            
**- Thuộc tính: font**
```css
fn<vCss> {font:<vCss>; } 
 ```
            
**- Thuộc tính: font-family**
```css 
ffA {font-family:ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}
ffS {font-family:ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;}
ffM {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;} 
 ```
            
**- Thuộc tính: font-feature-settings**
```css
fnfs<vCss> {font-feature-settings:<vCss>; } 
 ```
            
**- Thuộc tính: font-kerning**
```css
fnk<vCss> {font-kerning:<vCss>; } 
 ```
            
**- Thuộc tính: font-language-override**
```css
fnlo<vCss> {font-language-override:<vCss>; } 
 ```
            
**- Thuộc tính: font-optical-sizing**
```css
fnos<vCss> {font-optical-sizing:<vCss>; } 
 ```
            
**- Thuộc tính: font-palette**
```css
fnp<vCss> {font-palette:<vCss>; } 
 ```
            
**- Thuộc tính: font-size**
```css
fns<vCss> {font-size:<vCss>; } 
 ```
            
**- Thuộc tính: font-size-adjust**
```css
fnsa<vCss> {font-size-adjust:<vCss>; } 
 ```
            
**- Thuộc tính: font-stretch**
```css
fnstr<vCss> {font-stretch:<vCss>; } 
 ```
            
**- Thuộc tính: font-style**
```css
fnsty<vCss> {font-style:<vCss>; } 
 ```
            
**- Thuộc tính: font-synthesis**
```css
fnsyn<vCss> {font-synthesis:<vCss>; } 
 ```
            
**- Thuộc tính: font-synthesis-position**
```css
fnsp<vCss> {font-synthesis-position:<vCss>; } 
 ```
            
**- Thuộc tính: font-synthesis-small-caps**
```css
fnssc<vCss> {font-synthesis-small-caps:<vCss>; } 
 ```
            
**- Thuộc tính: font-synthesis-style**
```css
fnss<vCss> {font-synthesis-style:<vCss>; } 
 ```
            
**- Thuộc tính: font-synthesis-weight**
```css
fnsw<vCss> {font-synthesis-weight:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant**
```css
fnv<vCss> {font-variant:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-alternates**
```css
fnva<vCss> {font-variant-alternates:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-caps**
```css
fnvc<vCss> {font-variant-caps:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-east-asian**
```css
fnvea<vCss> {font-variant-east-asian:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-emoji**
```css
fnve<vCss> {font-variant-emoji:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-ligatures**
```css
fnvl<vCss> {font-variant-ligatures:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-numeric**
```css
fnvn<vCss> {font-variant-numeric:<vCss>; } 
 ```
            
**- Thuộc tính: font-variant-position**
```css
fnvp<vCss> {font-variant-position:<vCss>; } 
 ```
            
**- Thuộc tính: font-variation-settings**
```css
fnvs<vCss> {font-variation-settings:<vCss>; } 
 ```
            
**- Thuộc tính: font-weight**
```css
fw<vCss> {font-weight:<vCss>; } 
 ```
            
**- Thuộc tính: forced-color-adjust**
```css
fca<vCss> {forced-color-adjust:<vCss>; } 
 ```
            
**- Thuộc tính: gap**
```css
gap<vCss> {gap:<vCss>; } 
 ```
            
**- Thuộc tính: grid**
```css
g<vCss> {grid:<vCss>; } 
 ```
            
**- Thuộc tính: grid-area**
```css
ga<vCss> {grid-area:<vCss>; } 
 ```
            
**- Thuộc tính: grid-auto-columns**
```css 
gacA {grid-auto-columns:auto;}
gacMic {grid-auto-columns:min-content;}
gacMac {grid-auto-columns:max-content;}
gacMm {grid-auto-columns:minmax(0, 1fr);} 
 ```
            
**- Thuộc tính: grid-auto-flow**
```css 
gafR {grid-auto-flow:row;}
gafC {grid-auto-flow:column;}
gafD {grid-auto-flow:dense;}
gafRd {grid-auto-flow:row dense;}
gafCd {grid-auto-flow:column dense;} 
 ```
            
**- Thuộc tính: grid-auto-rows**
```css 
garA {grid-auto-rows:auto;}
garMic {grid-auto-rows:min-content;}
garMac {grid-auto-rows:max-content;}
garMm {grid-auto-rows:minmax(0, 1fr);} 
 ```
            
**- Thuộc tính: grid-column**
```css 
gcA {grid-column:auto;}
gcF {grid-column:1 / -1;} 
 ```
            
**- Thuộc tính: grid-column-end**
```css 
gceA {grid-column-end:auto;} 
 ```
            
**- Thuộc tính: grid-column-start**
```css 
gcsA {grid-column-start:auto;} 
 ```
            
**- Thuộc tính: grid-row**
```css 
grA {grid-row:auto;}
grF {grid-row:1 / -1;} 
 ```
            
**- Thuộc tính: grid-row-end**
```css 
greA {grid-row-end:auto;} 
 ```
            
**- Thuộc tính: grid-row-start**
```css 
grsA {grid-row-start:auto;} 
 ```
            
**- Thuộc tính: grid-template**
```css
gt<vCss> {grid-template:<vCss>; } 
 ```
            
**- Thuộc tính: grid-template-areas**
```css
gta<vCss> {grid-template-areas:<vCss>; } 
 ```
            
**- Thuộc tính: grid-template-columns**
```css 
gtcN {grid-template-columns:none;}
gtcS {grid-template-columns:subgrid;} 
 ```
            
**- Thuộc tính: grid-template-rows**
```css 
gtrN {grid-template-rows:none;}
gtrS {grid-template-rows:subgrid;} 
 ```
            
**- Thuộc tính: hanging-punctuation**
```css
hp<vCss> {hanging-punctuation:<vCss>; } 
 ```
            
**- Thuộc tính: height**
```css 
hA {height:auto;}
hMic {height:min-content;}
hMac {height:max-content;}
hFc {height:fit-content;} 
 ```
            
**- Thuộc tính: hyphenate-character**
```css
hc<vCss> {hyphenate-character:<vCss>; } 
 ```
            
**- Thuộc tính: hyphenate-limit-chars**
```css
hlc<vCss> {hyphenate-limit-chars:<vCss>; } 
 ```
            
**- Thuộc tính: hyphens**
```css 
hypA {hyphens:auto;}
hypN {hyphens:none;}
hypM {hyphens:manual;} 
 ```
            
**- Thuộc tính: image-orientation**
```css
imgo<vCss> {image-orientation:<vCss>; } 
 ```
            
**- Thuộc tính: image-rendering**
```css
imgr<vCss> {image-rendering:<vCss>; } 
 ```
            
**- Thuộc tính: inline-size**
```css
ins<vCss> {inline-size:<vCss>; } 
 ```
            
**- Thuộc tính: inset**
```css
i<vCss> {inset:<vCss>; } 
 ```
            
**- Thuộc tính: inset-block**
```css
iblk<vCss> {inset-block:<vCss>; } 
 ```
            
**- Thuộc tính: inset-block-end**
```css
ibe<vCss> {inset-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: inset-block-start**
```css
ibsta<vCss> {inset-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: inset-inline**
```css
ii<vCss> {inset-inline:<vCss>; } 
 ```
            
**- Thuộc tính: inset-inline-end**
```css
iie<vCss> {inset-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: inset-inline-start**
```css
iis<vCss> {inset-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: isolation**
```css 
isI {isolation:isolate;}
isA {isolation:auto;} 
 ```
            
**- Thuộc tính: justify-content**
```css 
jcC {justify-content:center;}
jcS {justify-content:start;}
jcE {justify-content:end;}
jcFs {justify-content:flex-start;}
jcFe {justify-content:flex-end;}
jcL {justify-content:left;}
jcR {justify-content:right;}
jcN {justify-content:normal;}
jcSp {justify-content:space-between;}
jcSa {justify-content:space-around;}
jcSe {justify-content:space-evenly;}
jcSt {justify-content:stretch;}
jcSc {justify-content:safe center;}
jcUc {justify-content:unsafe center;} 
 ```
            
**- Thuộc tính: justify-items**
```css 
jiN {justify-items:normal;}
jiSt {justify-items:stretch;}
jiC {justify-items:center;}
jiS {justify-items:start;}
jiE {justify-items:end;}
jiFs {justify-items:flex-start;}
jiFe {justify-items:flex-end;}
jiSs {justify-items:self-start;}
jiSe {justify-items:self-end;}
jiL {justify-items:left;}
jiR {justify-items:right;}
jiB {justify-items:baseline;}
jiFb {justify-items:first baseline;}
jiLb {justify-items:last baseline;}
jiLr {justify-items:legacy right;}
jiLl {justify-items:legacy left;}
jiLc {justify-items:legacy center;}
jiSc {justify-items:safe center;}
jiUc {justify-items:unsafe center;} 
 ```
            
**- Thuộc tính: justify-self**
```css 
jsA {justify-self:auto;}
jsN {justify-self:normal;}
jsSt {justify-self:stretch;}
jsC {justify-self:center;}
jsS {justify-self:start;}
jsE {justify-self:end;}
jsFs {justify-self:flex-start;}
jsFe {justify-self:flex-end;}
jsSs {justify-self:self-start;}
jsSe {justify-self:self-end;}
jsL {justify-self:left;}
jsR {justify-self:right;}
jsB {justify-self:baseline;}
jsSc {justify-self:safe center;}
jsUc {justify-self:unsafe center;} 
 ```
            
**- Thuộc tính: left**
```css
l<vCss> {left:<vCss>; } 
 ```
            
**- Thuộc tính: letter-spacing**
```css 
ltsN {letter-spacing:normal;} 
 ```
            
**- Thuộc tính: line-break**
```css
lbrk<vCss> {line-break:<vCss>; } 
 ```
            
**- Thuộc tính: line-height**
```css
lh<vCss> {line-height:<vCss>; } 
 ```
            
**- Thuộc tính: list-style**
```css 
lsI {list-style:inside;}
lsDi {list-style:disc;}
lsC {list-style:circle;}
lsS {list-style:square;}
lsDe {list-style:decimal;}
lsG {list-style:georgian;}
lsTci {list-style:trad-chinese-informal;}
lsK {list-style:kannada;} 
 ```
            
**- Thuộc tính: list-style-image**
```css
lsi<vCss> {list-style-image:<vCss>; } 
 ```
            
**- Thuộc tính: list-style-position**
```css 
lispI {list-style-position:inside;}
lispO {list-style-position:outside;} 
 ```
            
**- Thuộc tính: list-style-type**
```css 
lstDi {list-style-type:disc;}
lstC {list-style-type:circle;}
lstS {list-style-type:square;}
lstDe {list-style-type:decimal;}
lstG {list-style-type:georgian;}
lstTci {list-style-type:trad-chinese-informal;}
lstK {list-style-type:kannada;} 
 ```
            
**- Thuộc tính: margin**
```css
m<vCss> {margin:<vCss>; } 
 ```
            
**- Thuộc tính: margin-block**
```css
mblk<vCss> {margin-block:<vCss>; } 
 ```
            
**- Thuộc tính: margin-block-end**
```css
mbe<vCss> {margin-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: margin-block-start**
```css
mbsta<vCss> {margin-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: margin-bottom**
```css 
mbA {margin-bottom:auto;} 
 ```
            
**- Thuộc tính: margin-inline**
```css
min<vCss> {margin-inline:<vCss>; } 
 ```
            
**- Thuộc tính: margin-inline-end**
```css
mie<vCss> {margin-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: margin-inline-start**
```css
mista<vCss> {margin-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: margin-left**
```css 
mlA {margin-left:auto;} 
 ```
            
**- Thuộc tính: margin-right**
```css 
mrA {margin-right:auto;} 
 ```
            
**- Thuộc tính: margin-top**
```css 
mtA {margin-top:auto;} 
 ```
            
**- Thuộc tính: mask**
```css
msk<vCss> {mask:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border**
```css
mskb<vCss> {mask-border:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-mode**
```css
mskbm<vCss> {mask-border-mode:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-outset**
```css
mskbo<vCss> {mask-border-outset:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-repeat**
```css
mskbr<vCss> {mask-border-repeat:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-slice**
```css
mskbs<vCss> {mask-border-slice:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-source**
```css
mskbsrc<vCss> {mask-border-source:<vCss>; } 
 ```
            
**- Thuộc tính: mask-border-width**
```css
mskbw<vCss> {mask-border-width:<vCss>; } 
 ```
            
**- Thuộc tính: mask-clip**
```css
mskc<vCss> {mask-clip:<vCss>; } 
 ```
            
**- Thuộc tính: mask-composite**
```css
mskcp<vCss> {mask-composite:<vCss>; } 
 ```
            
**- Thuộc tính: mask-image**
```css
mski<vCss> {mask-image:<vCss>; } 
 ```
            
**- Thuộc tính: mask-mode**
```css
mskm<vCss> {mask-mode:<vCss>; } 
 ```
            
**- Thuộc tính: mask-origin**
```css
msko<vCss> {mask-origin:<vCss>; } 
 ```
            
**- Thuộc tính: mask-position**
```css
mskp<vCss> {mask-position:<vCss>; } 
 ```
            
**- Thuộc tính: mask-repeat**
```css
mskr<vCss> {mask-repeat:<vCss>; } 
 ```
            
**- Thuộc tính: mask-size**
```css
msks<vCss> {mask-size:<vCss>; } 
 ```
            
**- Thuộc tính: mask-type**
```css
mskt<vCss> {mask-type:<vCss>; } 
 ```
            
**- Thuộc tính: math-depth**
```css
mtd<vCss> {math-depth:<vCss>; } 
 ```
            
**- Thuộc tính: math-style**
```css
mts<vCss> {math-style:<vCss>; } 
 ```
            
**- Thuộc tính: max-block-size**
```css
mbs<vCss> {max-block-size:<vCss>; } 
 ```
            
**- Thuộc tính: max-height**
```css
mh<vCss> {max-height:<vCss>; } 
 ```
            
**- Thuộc tính: max-inline-size**
```css
mis<vCss> {max-inline-size:<vCss>; } 
 ```
            
**- Thuộc tính: max-width**
```css
mw<vCss> {max-width:<vCss>; } 
 ```
            
**- Thuộc tính: min-block-size**
```css
mibs<vCss> {min-block-size:<vCss>; } 
 ```
            
**- Thuộc tính: min-height**
```css 
mihA {min-height:auto;}
mihF {min-height:100%;}
mihMic {min-height:min-content;}
mihMac {min-height:max-content;}
mihFc {min-height:fit-content;} 
 ```
            
**- Thuộc tính: min-inline-size**
```css
misz<vCss> {min-inline-size:<vCss>; } 
 ```
            
**- Thuộc tính: min-width**
```css 
miwF {min-width:100%;}
miwMic {min-width:min-content;}
miwMac {min-width:max-content;}
miwFc {min-width:fit-content;} 
 ```
            
**- Thuộc tính: mix-blend-mode**
```css 
mbdN {mix-blend-mode:normal;}
mbdM {mix-blend-mode:multiply;}
mbdS {mix-blend-mode:screen;}
mbdO {mix-blend-mode:overlay;}
mbdD {mix-blend-mode:darken;}
mbdL {mix-blend-mode:lighten;}
mbdCd {mix-blend-mode:color-dodge;}
mbdI {mix-blend-mode:color-burn;}
mbdHl {mix-blend-mode:hard-light;}
mbdSl {mix-blend-mode:soft-light;}
mbdDi {mix-blend-mode:difference;}
mbdE {mix-blend-mode:exclusion;}
mbdH {mix-blend-mode:hue;}
mbdSa {mix-blend-mode:saturation;}
mbdC {mix-blend-mode:color;}
mbdLu {mix-blend-mode:luminosity;} 
 ```
            
**- Thuộc tính: object-fit**
```css 
ofC {object-fit:contain;}
ofCv {object-fit:cover;}
ofF {object-fit:fill;}
ofN {object-fit:none;}
ofSd {object-fit:scale-down;} 
 ```
            
**- Thuộc tính: object-position**
```css 
opB {object-position:bottom;}
opC {object-position:center;}
opL {object-position:left;}
opR {object-position:right;}
opT {object-position:top;}
opLb {object-position:left bottom;}
opLt {object-position:left top;}
opRb {object-position:right bottom;}
opRt {object-position:right top;} 
 ```
            
**- Thuộc tính: offset**
```css
ofs<vCss> {offset:<vCss>; } 
 ```
            
**- Thuộc tính: offset-anchor**
```css
ofa<vCss> {offset-anchor:<vCss>; } 
 ```
            
**- Thuộc tính: offset-distance**
```css
ofd<vCss> {offset-distance:<vCss>; } 
 ```
            
**- Thuộc tính: offset-path**
```css
ofp<vCss> {offset-path:<vCss>; } 
 ```
            
**- Thuộc tính: offset-position**
```css
ofpo<vCss> {offset-position:<vCss>; } 
 ```
            
**- Thuộc tính: offset-rotate**
```css
ofr<vCss> {offset-rotate:<vCss>; } 
 ```
            
**- Thuộc tính: opacity**
```css
opc<vCss> {opacity:<vCss>; } 
 ```
            
**- Thuộc tính: order**
```css
ord<vCss> {order:<vCss>; } 
 ```
            
**- Thuộc tính: orphans**
```css
orp<vCss> {orphans:<vCss>; } 
 ```
            
**- Thuộc tính: outline**
```css
oli<vCss> {outline:<vCss>; } 
 ```
            
**- Thuộc tính: outline-color**
```css 
olcI {outline-color:inherit;}
olcC {outline-color:currentColor;}
olcT {outline-color:transparent;} 
 ```
            
**- Thuộc tính: outline-offset**
```css
olo<vCss> {outline-offset:<vCss>; } 
 ```
            
**- Thuộc tính: outline-style**
```css 
olsN {outline-style:none;}
olsH {outline-style:hidden;}
olsDt {outline-style:dotted;}
olsDs {outline-style:dashed;}
olsS {outline-style:solid;}
olsDb {outline-style:double;}
olsG {outline-style:groove;}
olsR {outline-style:ridge;}
olsIn {outline-style:inset;}
olsOut {outline-style:outset;} 
 ```
            
**- Thuộc tính: outline-width**
```css 
olwT {outline-width:thin;}
olwM {outline-width:medium;}
olwTh {outline-width:thick;} 
 ```
            
**- Thuộc tính: overflow**
```css
ofl<vCss> {overflow:<vCss>; } 
 ```
            
**- Thuộc tính: overflow-anchor**
```css
ofla<vCss> {overflow-anchor:<vCss>; } 
 ```
            
**- Thuộc tính: overflow-block**
```css
oflb<vCss> {overflow-block:<vCss>; } 
 ```
            
**- Thuộc tính: overflow-clip-margin**
```css
oflcm<vCss> {overflow-clip-margin:<vCss>; } 
 ```
            
**- Thuộc tính: overflow-inline**
```css
ofli<vCss> {overflow-inline:<vCss>; } 
 ```
            
**- Thuộc tính: overflow-wrap**
```css 
oflwA {overflow-wrap:auto;}
oflwH {overflow-wrap:hidden;}
oflwC {overflow-wrap:clip;}
oflwV {overflow-wrap:visible;}
oflwS {overflow-wrap:scroll;} 
 ```
            
**- Thuộc tính: overflow-x**
```css 
oflxA {overflow-x:auto;}
oflxH {overflow-x:hidden;}
oflxC {overflow-x:clip;}
oflxV {overflow-x:visible;}
oflxS {overflow-x:scroll;} 
 ```
            
**- Thuộc tính: overflow-y**
```css 
oflyA {overflow-y:auto;}
oflyH {overflow-y:hidden;}
oflyC {overflow-y:clip;}
oflyV {overflow-y:visible;}
oflyS {overflow-y:scroll;} 
 ```
            
**- Thuộc tính: overscroll-behavior**
```css 
osrbhA {overscroll-behavior:auto;}
osrbhC {overscroll-behavior:contain;}
osrbhN {overscroll-behavior:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-block**
```css 
osrbbA {overscroll-behavior-block:auto;}
osrbbC {overscroll-behavior-block:contain;}
osrbbN {overscroll-behavior-block:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-inline**
```css 
osrbiA {overscroll-behavior-inline:auto;}
osrbiC {overscroll-behavior-inline:contain;}
osrbiN {overscroll-behavior-inline:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-x**
```css 
osrbxA {overscroll-behavior-x:auto;}
osrbxC {overscroll-behavior-x:contain;}
osrbxN {overscroll-behavior-x:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-y**
```css 
orsbyA {overscroll-behavior-y:auto;}
orsbyC {overscroll-behavior-y:contain;}
orsbyN {overscroll-behavior-y:none;} 
 ```
            
**- Thuộc tính: padding**
```css
p<vCss> {padding:<vCss>; } 
 ```
            
**- Thuộc tính: padding-block**
```css
pblk<vCss> {padding-block:<vCss>; } 
 ```
            
**- Thuộc tính: padding-block-end**
```css
pbe<vCss> {padding-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: padding-block-start**
```css
pbs<vCss> {padding-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: padding-bottom**
```css 
pbA {padding-bottom:auto;} 
 ```
            
**- Thuộc tính: padding-inline**
```css 
piS {padding-inline:start;}
piC {padding-inline:center;}
piE {padding-inline:end;}
piB {padding-inline:baseline;}
piSt {padding-inline:stretch;} 
 ```
            
**- Thuộc tính: padding-inline-end**
```css
pie<vCss> {padding-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: padding-inline-start**
```css
pis<vCss> {padding-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: padding-left**
```css 
plA {padding-left:auto;} 
 ```
            
**- Thuộc tính: padding-right**
```css 
prA {padding-right:auto;} 
 ```
            
**- Thuộc tính: padding-top**
```css 
ptA {padding-top:auto;} 
 ```
            
**- Thuộc tính: page**
```css
pg<vCss> {page:<vCss>; } 
 ```
            
**- Thuộc tính: page-break-after**
```css
pgba<vCss> {page-break-after:<vCss>; } 
 ```
            
**- Thuộc tính: page-break-before**
```css
pgbb<vCss> {page-break-before:<vCss>; } 
 ```
            
**- Thuộc tính: page-break-inside**
```css
pgbi<vCss> {page-break-inside:<vCss>; } 
 ```
            
**- Thuộc tính: paint-order**
```css
pto<vCss> {paint-order:<vCss>; } 
 ```
            
**- Thuộc tính: perspective**
```css
psp<vCss> {perspective:<vCss>; } 
 ```
            
**- Thuộc tính: perspective-origin**
```css
pso<vCss> {perspective-origin:<vCss>; } 
 ```
            
**- Thuộc tính: place-content**
```css
plc<vCss> {place-content:<vCss>; } 
 ```
            
**- Thuộc tính: place-items**
```css
pli<vCss> {place-items:<vCss>; } 
 ```
            
**- Thuộc tính: place-self**
```css
pls<vCss> {place-self:<vCss>; } 
 ```
            
**- Thuộc tính: pointer-events**
```css 
peA {pointer-events:auto;}
peN {pointer-events:none;} 
 ```
            
**- Thuộc tính: position**
```css 
posS {position:static;}
posF {position:fixed;}
posA {position:absolute;}
posR {position:relative;}
posSt {position:sticky;} 
 ```
            
**- Thuộc tính: print-color-adjust**
```css
prca<vCss> {print-color-adjust:<vCss>; } 
 ```
            
**- Thuộc tính: quotes**
```css
qts<vCss> {quotes:<vCss>; } 
 ```
            
**- Thuộc tính: resize**
```css 
rszN {resize:none;}
rszB {resize:both;}
rszH {resize:horizontal;}
rszV {resize:vertical;} 
 ```
            
**- Thuộc tính: right**
```css
r<vCss> {right:<vCss>; } 
 ```
            
**- Thuộc tính: rotate**
```css
rot<vCss> {rotate:<vCss>; } 
 ```
            
**- Thuộc tính: row-gap**
```css
rgap<vCss> {row-gap:<vCss>; } 
 ```
            
**- Thuộc tính: ruby-position**
```css
rbp<vCss> {ruby-position:<vCss>; } 
 ```
            
**- Thuộc tính: scale**
```css
s<vCss> {scale:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-behavior**
```css
scrb<vCss> {scroll-behavior:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin**
```css
scrm<vCss> {scroll-margin:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-block**
```css
scrmblk<vCss> {scroll-margin-block:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-block-end**
```css
scrmbe<vCss> {scroll-margin-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-block-start**
```css
scrmbs<vCss> {scroll-margin-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-bottom**
```css
scrmb<vCss> {scroll-margin-bottom:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline**
```css
scrmi<vCss> {scroll-margin-inline:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline-end**
```css
scrmie<vCss> {scroll-margin-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline-start**
```css
scrmis<vCss> {scroll-margin-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-left**
```css
scrml<vCss> {scroll-margin-left:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-right**
```css
scrmr<vCss> {scroll-margin-right:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-margin-top**
```css
scrmt<vCss> {scroll-margin-top:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding**
```css
scrp<vCss> {scroll-padding:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-block**
```css
scrpblk<vCss> {scroll-padding-block:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-block-end**
```css
srcpbe<vCss> {scroll-padding-block-end:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-block-start**
```css
scrpbs<vCss> {scroll-padding-block-start:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-bottom**
```css
scrpb<vCss> {scroll-padding-bottom:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline**
```css
scrpi<vCss> {scroll-padding-inline:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline-end**
```css
scrpie<vCss> {scroll-padding-inline-end:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline-start**
```css
scrpis<vCss> {scroll-padding-inline-start:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-left**
```css
scrpl<vCss> {scroll-padding-left:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-right**
```css
scrpr<vCss> {scroll-padding-right:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-padding-top**
```css
scrpt<vCss> {scroll-padding-top:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-snap-align**
```css
scrsa<vCss> {scroll-snap-align:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-snap-stop**
```css
scrss<vCss> {scroll-snap-stop:<vCss>; } 
 ```
            
**- Thuộc tính: scroll-snap-type**
```css
scrst<vCss> {scroll-snap-type:<vCss>; } 
 ```
            
**- Thuộc tính: scrollbar-color**
```css
sbc<vCss> {scrollbar-color:<vCss>; } 
 ```
            
**- Thuộc tính: scrollbar-gutter**
```css
sbg<vCss> {scrollbar-gutter:<vCss>; } 
 ```
            
**- Thuộc tính: scrollbar-width**
```css
sbw<vCss> {scrollbar-width:<vCss>; } 
 ```
            
**- Thuộc tính: tab-size**
```css
tbs<vCss> {tab-size:<vCss>; } 
 ```
            
**- Thuộc tính: shape-image-threshold**
```css
shit<vCss> {shape-image-threshold:<vCss>; } 
 ```
            
**- Thuộc tính: shape-margin**
```css
shm<vCss> {shape-margin:<vCss>; } 
 ```
            
**- Thuộc tính: shape-outside**
```css
sho<vCss> {shape-outside:<vCss>; } 
 ```
            
**- Thuộc tính: transform**
```css
tra<vCss> {transform:<vCss>; } 
 ```
            
**- Thuộc tính: transform-box**
```css
trab<vCss> {transform-box:<vCss>; } 
 ```
            
**- Thuộc tính: transform-origin**
```css
trao<vCss> {transform-origin:<vCss>; } 
 ```
            
**- Thuộc tính: transform-style**
```css
tras<vCss> {transform-style:<vCss>; } 
 ```
            
**- Thuộc tính: transition**
```css
tran<vCss> {transition:<vCss>; } 
 ```
            
**- Thuộc tính: transition-behavior**
```css
tranb<vCss> {transition-behavior:<vCss>; } 
 ```
            
**- Thuộc tính: transition-delay**
```css
trand<vCss> {transition-delay:<vCss>; } 
 ```
            
**- Thuộc tính: transition-duration**
```css
trandur<vCss> {transition-duration:<vCss>; } 
 ```
            
**- Thuộc tính: transition-property**
```css
tranp<vCss> {transition-property:<vCss>; } 
 ```
            
**- Thuộc tính: transition-timing-function**
```css
trantf<vCss> {transition-timing-function:<vCss>; } 
 ```
            
**- Thuộc tính: table-layout**
```css
tbl<vCss> {table-layout:<vCss>; } 
 ```
            
**- Thuộc tính: text-align**
```css 
taS {text-align:start;}
taE {text-align:end;}
taL {text-align:left;}
taR {text-align:right;}
taC {text-align:center;}
taJ {text-align:justify;}
taMp {text-align:match-parent;}
taMc {text-align:-moz-center;}
taWc {text-align:-webkit-center;} 
 ```
            
**- Thuộc tính: text-align-last**
```css 
talA {text-align-last:auto;}
talS {text-align-last:start;}
talE {text-align-last:end;}
talL {text-align-last:left;}
talR {text-align-last:right;}
talC {text-align-last:center;}
talJ {text-align-last:justify;} 
 ```
            
**- Thuộc tính: text-combine-upright**
```css
tcu<vCss> {text-combine-upright:<vCss>; } 
 ```
            
**- Thuộc tính: text-decoration**
```css 
tdN {text-decoration:none;}
tdU {text-decoration:underline;} 
 ```
            
**- Thuộc tính: text-decoration-color**
```css
tdc<vCss> {text-decoration-color:<vCss>; } 
 ```
            
**- Thuộc tính: text-decoration-line**
```css 
tdlU {text-decoration-line:underline;}
tdlO {text-decoration-line:overline;}
tdlLt {text-decoration-line:line-through;}
tdlB {text-decoration-line:blink;} 
 ```
            
**- Thuộc tính: text-decoration-skip-ink**
```css
tdsi<vCss> {text-decoration-skip-ink:<vCss>; } 
 ```
            
**- Thuộc tính: text-decoration-style**
```css 
tdsDb {text-decoration-style:double;}
tdsDt {text-decoration-style:dotted;}
tdsDs {text-decoration-style:dashed;}
tdsW {text-decoration-style:wavy;} 
 ```
            
**- Thuộc tính: text-decoration-thickness**
```css 
tdtFf {text-decoration-thickness:from-font;} 
 ```
            
**- Thuộc tính: text-emphasis**
```css
teph<vCss> {text-emphasis:<vCss>; } 
 ```
            
**- Thuộc tính: text-emphasis-color**
```css
tec<vCss> {text-emphasis-color:<vCss>; } 
 ```
            
**- Thuộc tính: text-emphasis-position**
```css 
tepOr {text-emphasis-position:over right;}
tepOl {text-emphasis-position:over left;}
tepUr {text-emphasis-position:under right;}
tepUl {text-emphasis-position:under left;}
tepLo {text-emphasis-position:left over;}
tepRu {text-emphasis-position:right under;}
tepLu {text-emphasis-position:left under;} 
 ```
            
**- Thuộc tính: text-emphasis-style**
```css 
tesN {text-emphasis-style:none;} 
 ```
            
**- Thuộc tính: text-indent**
```css
ti<vCss> {text-indent:<vCss>; } 
 ```
            
**- Thuộc tính: text-justify**
```css 
tjN {text-justify:none;}
tjA {text-justify:auto;}
tjIw {text-justify:inter-word;}
tjIc {text-justify:inter-character;}
tjD {text-justify:distribute;} 
 ```
            
**- Thuộc tính: text-orientation**
```css 
torM {text-orientation:mixed;}
torU {text-orientation:upright;}
torSr {text-orientation:sideways-right;}
torSl {text-orientation:sideways-left;}
torS {text-orientation:sideways;}
torUgo {text-orientation:use-glyph-orientation;} 
 ```
            
**- Thuộc tính: text-overflow**
```css 
tolC {text-overflow:clip;}
tolE {text-overflow:ellipsis;} 
 ```
            
**- Thuộc tính: text-rendering**
```css 
trdA {text-rendering:auto;}
trdOp {text-rendering:optimizeSpeed;}
trdOl {text-rendering:optimizeLegibility;}
trdG {text-rendering:geometricPrecision;} 
 ```
            
**- Thuộc tính: text-shadow**
```css
tsh<vCss> {text-shadow:<vCss>; } 
 ```
            
**- Thuộc tính: text-transform**
```css 
ttrN {text-transform:none;}
ttrC {text-transform:capitalize;}
ttrU {text-transform:uppercase;}
ttrL {text-transform:lowercase;}
ttrFw {text-transform:full-width;}
ttrFsk {text-transform:full-size-kana;} 
 ```
            
**- Thuộc tính: text-underline-offset**
```css
tuo<vCss> {text-underline-offset:<vCss>; } 
 ```
            
**- Thuộc tính: text-underline-position**
```css 
tupA {text-underline-position:auto;}
tupU {text-underline-position:under;}
tupL {text-underline-position:left;}
tupR {text-underline-position:right;}
tupUl {text-underline-position:under left;}
tupRu {text-underline-position:right under;} 
 ```
            
**- Thuộc tính: text-wrap**
```css 
twW {text-wrap:wrap;}
twN {text-wrap:nowrap;}
twB {text-wrap:balance;}
twP {text-wrap:pretty;} 
 ```
            
**- Thuộc tính: top**
```css
t<vCss> {top:<vCss>; } 
 ```
            
**- Thuộc tính: touch-action**
```css 
toaA {touch-action:auto;}
toaN {touch-action:none;}
toaP {touch-action:pan-x;}
toaPy {touch-action:pan-y;}
toaPm {touch-action:pan-x pan-y;}
toaPi {touch-action:pinch-zoom;} 
 ```
            
**- Thuộc tính: translate**
```css
trl<vCss> {translate:<vCss>; } 
 ```
            
**- Thuộc tính: unicode-bidi**
```css
unib<vCss> {unicode-bidi:<vCss>; } 
 ```
            
**- Thuộc tính: user-select**
```css 
usA {user-select:auto;}
usN {user-select:none;}
usT {user-select:text;}
usAll {user-select:all;}
usC {user-select:contain;} 
 ```
            
**- Thuộc tính: vertical-align**
```css 
vaBl {vertical-align:baseline;}
vaT {vertical-align:top;}
vaM {vertical-align:middle;}
vaB {vertical-align:bottom;}
vaTt {vertical-align:text-top;}
vaTb {vertical-align:text-bottom;}
vaSb {vertical-align:sub;}
vaSp {vertical-align:super;} 
 ```
            
**- Thuộc tính: visibility**
```css 
vH {visibility:hidden;}
vC {visibility:collapse;} 
 ```
            
**- Thuộc tính: white-space**
```css
ws<vCss> {white-space:<vCss>; } 
 ```
            
**- Thuộc tính: white-space-collapse**
```css
wsc<vCss> {white-space-collapse:<vCss>; } 
 ```
            
**- Thuộc tính: widows**
```css
wd<vCss> {widows:<vCss>; } 
 ```
            
**- Thuộc tính: width**
```css 
wMic {width:min-content;}
wMac {width:max-content;}
wFc {width:fit-content;}
wF {width:100%;} 
 ```
            
**- Thuộc tính: will-change**
```css 
wcA {will-change:auto;}
wcSp {will-change:scroll-position;}
wcC {will-change:contents;}
wcT {will-change:transform;} 
 ```
            
**- Thuộc tính: word-break**
```css
wrb<vCss> {word-break:<vCss>; } 
 ```
            
**- Thuộc tính: word-spacing**
```css
wrs<vCss> {word-spacing:<vCss>; } 
 ```
            
**- Thuộc tính: writing-mode**
```css
wrtm<vCss> {writing-mode:<vCss>; } 
 ```
            
**- Thuộc tính: z-index**
```css
z<vCss> {z-index:<vCss>; } 
 ```
            
**- Thuộc tính: zoom**
```css
zo<vCss> {zoom:<vCss>; } 
 ```
## 3 Lưu ý Định nghĩa trong css
vCss: Giá trị của thuộc tính: Có các cách viết sau   
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
- Cách viết 2: Sử dụng ký tự đặc biệt Số, Ký tự đầu viết hoa, ký tự # (nếu là màu), -- (biến)
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
  


