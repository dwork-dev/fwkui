# 1. Các class mặc định được đinh nghĩa viết tắt
## Quy tắc viết class: 
***Sử dụng vCSS***
- Chứa trong {<là hàm, giá trị, biểu thức>} Ví dụ: w{10px}, w{calc(100vh;-;30px)}
- Bắt đầu là một số, một ký tự đầu viết hoa, dấu chấm than (!): Ví dụ w!100px, w100px; wCalc(100vh;-;30px)
- Dấu # sau là mã màu: ví dụ: c#123456, #123456 là mã màu
- Chú ý:
   +  Giá trị của css sẽ được phân biệt qua: {}, ký tự viết Hoa, số (có thể có dấu - đại diện số âm), #. Trong thuộc tính xuất hiện ; thì sẽ hiểu là dấu cách (khoảng trống).
   +  Giá trị sẽ so sánh với bộ viết tắt giá trị để hiểu, nếu không tìm thấy cụm viết tắt tức chính bản thân sẽ là giá trị đầy đủ.
 
# 2. Các class đã được định nghĩa
**- Thuộc tính: -webkit-line-clamp** viết tắt là: **wlc**
```css
wlc<vCss> {-webkit-line-clamp:<vCss>; } 
 ```
                
**- Thuộc tính: -webkit-text-fill-color** viết tắt là: **wtfc**
```css
wtfc<vCss> {-webkit-text-fill-color:<vCss>; } 
 ```
                
**- Thuộc tính: -webkit-text-stroke** viết tắt là: **wts**
```css
wts<vCss> {-webkit-text-stroke:<vCss>; } 
 ```
                
**- Thuộc tính: -webkit-text-stroke-color** viết tắt là: **wtsc**
```css
wtsc<vCss> {-webkit-text-stroke-color:<vCss>; } 
 ```
                
**- Thuộc tính: -webkit-text-stroke-width** viết tắt là: **wtsw**
```css 
wtswM {-webkit-text-stroke-width:medium;}
wtswT {-webkit-text-stroke-width:thick;} 
 ```
                
**- Thuộc tính: accent-color** viết tắt là: **acc**
```css 
accU {accent-color:unset;} 
 ```
                
**- Thuộc tính: align-content** viết tắt là: **ac**
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
                
**- Thuộc tính: align-items** viết tắt là: **ai**
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
                
**- Thuộc tính: align-self** viết tắt là: **as**
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
                
**- Thuộc tính: all** viết tắt là: **a**
```css
a<vCss> {all:<vCss>; } 
 ```
                
**- Thuộc tính: animation** viết tắt là: **ani**
```css
ani<vCss> {animation:<vCss>; } 
 ```
                
**- Thuộc tính: animation-composition** viết tắt là: **anic**
```css 
anicR {animation-composition:replace;}
anicA {animation-composition:add;}
anicAc {animation-composition:accumulate;}
anicRa {animation-composition:replace, add;}
anicAac {animation-composition:add, accumulate;}
anicRaac {animation-composition:replace, add, accumulate;} 
 ```
                
**- Thuộc tính: animation-delay** viết tắt là: **anide**
```css
anide<vCss> {animation-delay:<vCss>; } 
 ```
                
**- Thuộc tính: animation-direction** viết tắt là: **anidi**
```css 
anidiR {animation-direction:reverse;}
anidiA {animation-direction:alternate;}
anidiAr {animation-direction:alternate-reverse;}
anidiNr {animation-direction:normal, reverse;}
anidiArn {animation-direction:alternate, reverse, normal;} 
 ```
                
**- Thuộc tính: animation-duration** viết tắt là: **anidu**
```css
anidu<vCss> {animation-duration:<vCss>; } 
 ```
                
**- Thuộc tính: animation-fill-mode** viết tắt là: **anifm**
```css 
anifmF {animation-fill-mode:forwards;}
anifmB {animation-fill-mode:backwards;}
anifmNb {animation-fill-mode:none, backwards;}
anifmFbn {animation-fill-mode:both, forwards, none;} 
 ```
                
**- Thuộc tính: animation-iteration-count** viết tắt là: **aniic**
```css
aniic<vCss> {animation-iteration-count:<vCss>; } 
 ```
                
**- Thuộc tính: animation-name** viết tắt là: **anin**
```css 
aninS {animation-name:slide;} 
 ```
                
**- Thuộc tính: animation-play-state** viết tắt là: **anips**
```css 
anipsP {animation-play-state:paused;}
anipsR {animation-play-state:running;} 
 ```
                
**- Thuộc tính: animation-timing-function** viết tắt là: **anitf**
```css 
anitfEi {animation-timing-function:ease-in;}
anitfEo {animation-timing-function:ease-out;}
anitfEio {animation-timing-function:ease-in-out;}
anitfL {animation-timing-function:linear;}
anitfSs {animation-timing-function:step-start;}
anitfSe {animation-timing-function:step-end;} 
 ```
                
**- Thuộc tính: appearance** viết tắt là: **ap**
```css 
apMb {appearance:menulist-button;}
apTf {appearance:textfield;}
apB {appearance:button;}
apC {appearance:checkbox;} 
 ```
                
**- Thuộc tính: aspect-ratio** viết tắt là: **ar**
```css 
arS {aspect-ratio:1 / 1;}
arV {aspect-ratio:16 / 9;} 
 ```
                
**- Thuộc tính: backdrop-filter** viết tắt là: **bkdf**
```css
bkdf<vCss> {backdrop-filter:<vCss>; } 
 ```
                
**- Thuộc tính: backface-visibility** viết tắt là: **bkfv**
```css
bkfv<vCss> {backface-visibility:<vCss>; } 
 ```
                
**- Thuộc tính: background** viết tắt là: **bg**
```css
bg<vCss> {background:<vCss>; } 
 ```
                
**- Thuộc tính: background-attachment** viết tắt là: **bga**
```css 
bgaS {background-attachment:scroll;}
bgaF {background-attachment:fixed;}
bgaL {background-attachment:local;} 
 ```
                
**- Thuộc tính: background-blend-mode** viết tắt là: **bgbm**
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
                
**- Thuộc tính: background-clip** viết tắt là: **bgcl**
```css 
bgclBb {background-clip:border-box;}
bgclPb {background-clip:padding-box;}
bgclCb {background-clip:content-box;}
bgclT {background-clip:text;} 
 ```
                
**- Thuộc tính: background-color** viết tắt là: **bgc**
```css 
bgcT {background-color:transparent;}
bgcC {background-color:currentcolor;} 
 ```
                
**- Thuộc tính: background-image** viết tắt là: **bgi**
```css
bgi<vCss> {background-image:<vCss>; } 
 ```
                
**- Thuộc tính: background-origin** viết tắt là: **bgo**
```css 
bgoBb {background-origin:border-box;}
bgoPb {background-origin:padding-box;}
bgoCb {background-origin:content-box;} 
 ```
                
**- Thuộc tính: background-position** viết tắt là: **bgp**
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
                
**- Thuộc tính: background-position-x** viết tắt là: **bgpx**
```css 
bgpxL {background-position-x:left;}
bgpxR {background-position-x:right;}
bgpxC {background-position-x:center;} 
 ```
                
**- Thuộc tính: background-position-y** viết tắt là: **bgpy**
```css 
bgpyT {background-position-y:top;}
bgpyB {background-position-y:bottom;}
bgpyC {background-position-y:center;} 
 ```
                
**- Thuộc tính: background-repeat** viết tắt là: **bgr**
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
                
**- Thuộc tính: background-size** viết tắt là: **bgs**
```css 
bgsC {background-size:contain;} 
 ```
                
**- Thuộc tính: block-size** viết tắt là: **blks**
```css
blks<vCss> {block-size:<vCss>; } 
 ```
                
**- Thuộc tính: border** viết tắt là: **bd**
```css 
bdD {border:dotted;}
bdDs {border:dashed;}
bdDb {border:double;}
bdG {border:groove;}
bdR {border:ridge;}
bdI {border:inset;}
bdO {border:outset;} 
 ```
                
**- Thuộc tính: border-block** viết tắt là: **bdblk**
```css
bdblk<vCss> {border-block:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-color** viết tắt là: **bdblc**
```css
bdblc<vCss> {border-block-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-end** viết tắt là: **bdble**
```css
bdble<vCss> {border-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-end-color** viết tắt là: **bdblec**
```css
bdblec<vCss> {border-block-end-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-end-style** viết tắt là: **bdbles**
```css 
bdblesD {border-block-end-style:dotted;}
bdblesDs {border-block-end-style:dashed;}
bdblesDb {border-block-end-style:double;}
bdblesG {border-block-end-style:groove;}
bdblesR {border-block-end-style:ridge;}
bdblesI {border-block-end-style:inset;}
bdblesO {border-block-end-style:outset;} 
 ```
                
**- Thuộc tính: border-block-end-width** viết tắt là: **bdblew**
```css
bdblew<vCss> {border-block-end-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-start** viết tắt là: **bdbls**
```css
bdbls<vCss> {border-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-start-color** viết tắt là: **bdblsc**
```css
bdblsc<vCss> {border-block-start-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-start-style** viết tắt là: **bdblss**
```css 
bdblssD {border-block-start-style:dotted;}
bdblssDs {border-block-start-style:dashed;}
bdblssDb {border-block-start-style:double;}
bdblssG {border-block-start-style:groove;}
bdblssR {border-block-start-style:ridge;}
bdblssI {border-block-start-style:inset;}
bdblssO {border-block-start-style:outset;} 
 ```
                
**- Thuộc tính: border-block-start-width** viết tắt là: **bdblsw**
```css
bdblsw<vCss> {border-block-start-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-block-style** viết tắt là: **bdblst**
```css 
bdblstD {border-block-style:dotted;}
bdblstDs {border-block-style:dashed;}
bdblstDb {border-block-style:double;}
bdblstG {border-block-style:groove;}
bdblstR {border-block-style:ridge;}
bdblstI {border-block-style:inset;}
bdblstO {border-block-style:outset;} 
 ```
                
**- Thuộc tính: border-block-width** viết tắt là: **bdblwi**
```css
bdblwi<vCss> {border-block-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-bottom** viết tắt là: **bdb**
```css
bdb<vCss> {border-bottom:<vCss>; } 
 ```
                
**- Thuộc tính: border-bottom-color** viết tắt là: **bdbc**
```css
bdbc<vCss> {border-bottom-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-bottom-left-radius** viết tắt là: **bdblr**
```css
bdblr<vCss> {border-bottom-left-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-bottom-right-radius** viết tắt là: **bdbrr**
```css
bdbrr<vCss> {border-bottom-right-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-bottom-style** viết tắt là: **bdbst**
```css 
bdbstD {border-bottom-style:dotted;}
bdbstDs {border-bottom-style:dashed;}
bdbstDb {border-bottom-style:double;}
bdbstG {border-bottom-style:groove;}
bdbstR {border-bottom-style:ridge;}
bdbstI {border-bottom-style:inset;}
bdbstO {border-bottom-style:outset;} 
 ```
                
**- Thuộc tính: border-bottom-width** viết tắt là: **bdbw**
```css 
bdbwT {border-bottom-width:thin;}
bdbwM {border-bottom-width:medium;}
bdbwTh {border-bottom-width:thick;} 
 ```
                
**- Thuộc tính: border-collapse** viết tắt là: **bdcl**
```css 
bdclS {border-collapse:separate;}
bdclC {border-collapse:collapse;} 
 ```
                
**- Thuộc tính: border-color** viết tắt là: **bdc**
```css
bdc<vCss> {border-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-end-end-radius** viết tắt là: **bdeer**
```css
bdeer<vCss> {border-end-end-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-end-start-radius** viết tắt là: **bdesr**
```css
bdesr<vCss> {border-end-start-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-image** viết tắt là: **bdimg**
```css
bdimg<vCss> {border-image:<vCss>; } 
 ```
                
**- Thuộc tính: border-image-outset** viết tắt là: **bdio**
```css
bdio<vCss> {border-image-outset:<vCss>; } 
 ```
                
**- Thuộc tính: border-image-repeat** viết tắt là: **bdir**
```css 
bdirSt {border-image-repeat:stretch;}
bdirR {border-image-repeat:repeat;}
bdirRn {border-image-repeat:round;}
bdirS {border-image-repeat:space;} 
 ```
                
**- Thuộc tính: border-image-slice** viết tắt là: **bdis**
```css
bdis<vCss> {border-image-slice:<vCss>; } 
 ```
                
**- Thuộc tính: border-image-source** viết tắt là: **bdisrc**
```css
bdisrc<vCss> {border-image-source:<vCss>; } 
 ```
                
**- Thuộc tính: border-image-width** viết tắt là: **bdiw**
```css
bdiw<vCss> {border-image-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline** viết tắt là: **bdi**
```css
bdi<vCss> {border-inline:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-color** viết tắt là: **bdic**
```css
bdic<vCss> {border-inline-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-end** viết tắt là: **bdie**
```css
bdie<vCss> {border-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-end-color** viết tắt là: **bdiec**
```css
bdiec<vCss> {border-inline-end-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-end-style** viết tắt là: **bdies**
```css
bdies<vCss> {border-inline-end-style:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-end-width** viết tắt là: **bdiew**
```css
bdiew<vCss> {border-inline-end-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-start** viết tắt là: **bdista**
```css
bdista<vCss> {border-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-start-color** viết tắt là: **bdisc**
```css
bdisc<vCss> {border-inline-start-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-start-style** viết tắt là: **bdiss**
```css
bdiss<vCss> {border-inline-start-style:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-start-width** viết tắt là: **bdisw**
```css
bdisw<vCss> {border-inline-start-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-style** viết tắt là: **bdistl**
```css
bdistl<vCss> {border-inline-style:<vCss>; } 
 ```
                
**- Thuộc tính: border-inline-width** viết tắt là: **bdinw**
```css
bdinw<vCss> {border-inline-width:<vCss>; } 
 ```
                
**- Thuộc tính: border-left** viết tắt là: **bdl**
```css
bdl<vCss> {border-left:<vCss>; } 
 ```
                
**- Thuộc tính: border-left-color** viết tắt là: **bdlc**
```css
bdlc<vCss> {border-left-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-left-style** viết tắt là: **bdls**
```css
bdls<vCss> {border-left-style:<vCss>; } 
 ```
                
**- Thuộc tính: border-left-width** viết tắt là: **bdlw**
```css 
bdlwT {border-left-width:thin;}
bdlwM {border-left-width:medium;}
bdlwTh {border-left-width:thick;} 
 ```
                
**- Thuộc tính: border-radius** viết tắt là: **bda**
```css
bda<vCss> {border-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-right** viết tắt là: **bdr**
```css
bdr<vCss> {border-right:<vCss>; } 
 ```
                
**- Thuộc tính: border-right-color** viết tắt là: **bdrc**
```css
bdrc<vCss> {border-right-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-right-style** viết tắt là: **bdrs**
```css 
bdrsDt {border-right-style:dotted;}
bdrsDs {border-right-style:dashed;}
bdrsS {border-right-style:solid;}
bdrsDb {border-right-style:double;}
bdrsG {border-right-style:groove;}
bdrsR {border-right-style:ridge;}
bdrsIn {border-right-style:inset;}
bdrsOut {border-right-style:outset;} 
 ```
                
**- Thuộc tính: border-right-width** viết tắt là: **bdrw**
```css 
bdrwT {border-right-width:thin;}
bdrwM {border-right-width:medium;}
bdrwTh {border-right-width:thick;} 
 ```
                
**- Thuộc tính: border-spacing** viết tắt là: **bdsp**
```css
bdsp<vCss> {border-spacing:<vCss>; } 
 ```
                
**- Thuộc tính: border-start-end-radius** viết tắt là: **bdser**
```css
bdser<vCss> {border-start-end-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-start-start-radius** viết tắt là: **bdssr**
```css
bdssr<vCss> {border-start-start-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-style** viết tắt là: **bds**
```css 
bdsDt {border-style:dotted;}
bdsDs {border-style:dashed;}
bdsS {border-style:solid;}
bdsDb {border-style:double;}
bdsG {border-style:groove;}
bdsR {border-style:ridge;}
bdsIn {border-style:inset;}
bdsOut {border-style:outset;} 
 ```
                
**- Thuộc tính: border-top** viết tắt là: **bdt**
```css
bdt<vCss> {border-top:<vCss>; } 
 ```
                
**- Thuộc tính: border-top-color** viết tắt là: **bdtc**
```css
bdtc<vCss> {border-top-color:<vCss>; } 
 ```
                
**- Thuộc tính: border-top-left-radius** viết tắt là: **bdtlr**
```css
bdtlr<vCss> {border-top-left-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-top-right-radius** viết tắt là: **bdtrr**
```css
bdtrr<vCss> {border-top-right-radius:<vCss>; } 
 ```
                
**- Thuộc tính: border-top-style** viết tắt là: **bdts**
```css 
bdtsDt {border-top-style:dotted;}
bdtsDs {border-top-style:dashed;}
bdtsS {border-top-style:solid;}
bdtsDb {border-top-style:double;}
bdtsG {border-top-style:groove;}
bdtsR {border-top-style:ridge;}
bdtsIn {border-top-style:inset;}
bdtsOut {border-top-style:outset;} 
 ```
                
**- Thuộc tính: border-top-width** viết tắt là: **bdtw**
```css 
bdtwT {border-top-width:thin;}
bdtwM {border-top-width:medium;}
bdtwTh {border-top-width:thick;} 
 ```
                
**- Thuộc tính: border-width** viết tắt là: **bdw**
```css 
bdwT {border-width:thin;}
bdwM {border-width:medium;}
bdwTh {border-width:thick;} 
 ```
                
**- Thuộc tính: bottom** viết tắt là: **b**
```css
b<vCss> {bottom:<vCss>; } 
 ```
                
**- Thuộc tính: box-decoration-break** viết tắt là: **bdbr**
```css 
bdbrC {box-decoration-break:clone;}
bdbrS {box-decoration-break:slice;} 
 ```
                
**- Thuộc tính: box-shadow** viết tắt là: **bxshd**
```css
bxshd<vCss> {box-shadow:<vCss>; } 
 ```
                
**- Thuộc tính: box-sizing** viết tắt là: **bxsz**
```css
bxsz<vCss> {box-sizing:<vCss>; } 
 ```
                
**- Thuộc tính: break-after** viết tắt là: **brka**
```css
brka<vCss> {break-after:<vCss>; } 
 ```
                
**- Thuộc tính: break-before** viết tắt là: **brkb**
```css
brkb<vCss> {break-before:<vCss>; } 
 ```
                
**- Thuộc tính: break-inside** viết tắt là: **brki**
```css
brki<vCss> {break-inside:<vCss>; } 
 ```
                
**- Thuộc tính: caption-side** viết tắt là: **caps**
```css
caps<vCss> {caption-side:<vCss>; } 
 ```
                
**- Thuộc tính: caret-color** viết tắt là: **crtc**
```css
crtc<vCss> {caret-color:<vCss>; } 
 ```
                
**- Thuộc tính: clear** viết tắt là: **clr**
```css
clr<vCss> {clear:<vCss>; } 
 ```
                
**- Thuộc tính: clip-path** viết tắt là: **clpp**
```css
clpp<vCss> {clip-path:<vCss>; } 
 ```
                
**- Thuộc tính: color** viết tắt là: **c**
```css 
cI {color:inherit;}
cT {color:transparent;} 
 ```
                
**- Thuộc tính: color-interpolation** viết tắt là: **cip**
```css
cip<vCss> {color-interpolation:<vCss>; } 
 ```
                
**- Thuộc tính: color-scheme** viết tắt là: **csch**
```css
csch<vCss> {color-scheme:<vCss>; } 
 ```
                
**- Thuộc tính: column-count** viết tắt là: **colc**
```css
colc<vCss> {column-count:<vCss>; } 
 ```
                
**- Thuộc tính: column-fill** viết tắt là: **colf**
```css
colf<vCss> {column-fill:<vCss>; } 
 ```
                
**- Thuộc tính: column-gap** viết tắt là: **colg**
```css
colg<vCss> {column-gap:<vCss>; } 
 ```
                
**- Thuộc tính: column-rule** viết tắt là: **colr**
```css
colr<vCss> {column-rule:<vCss>; } 
 ```
                
**- Thuộc tính: column-rule-color** viết tắt là: **colrc**
```css
colrc<vCss> {column-rule-color:<vCss>; } 
 ```
                
**- Thuộc tính: column-rule-style** viết tắt là: **colrs**
```css
colrs<vCss> {column-rule-style:<vCss>; } 
 ```
                
**- Thuộc tính: column-rule-width** viết tắt là: **colrw**
```css
colrw<vCss> {column-rule-width:<vCss>; } 
 ```
                
**- Thuộc tính: column-span** viết tắt là: **cols**
```css
cols<vCss> {column-span:<vCss>; } 
 ```
                
**- Thuộc tính: column-width** viết tắt là: **colw**
```css
colw<vCss> {column-width:<vCss>; } 
 ```
                
**- Thuộc tính: columns** viết tắt là: **col**
```css
col<vCss> {columns:<vCss>; } 
 ```
                
**- Thuộc tính: contain** viết tắt là: **cnt**
```css
cnt<vCss> {contain:<vCss>; } 
 ```
                
**- Thuộc tính: contain-intrinsic-block-size** viết tắt là: **cntibs**
```css
cntibs<vCss> {contain-intrinsic-block-size:<vCss>; } 
 ```
                
**- Thuộc tính: contain-intrinsic-height** viết tắt là: **cntih**
```css
cntih<vCss> {contain-intrinsic-height:<vCss>; } 
 ```
                
**- Thuộc tính: contain-intrinsic-inline-size** viết tắt là: **cntiis**
```css
cntiis<vCss> {contain-intrinsic-inline-size:<vCss>; } 
 ```
                
**- Thuộc tính: contain-intrinsic-size** viết tắt là: **cntis**
```css
cntis<vCss> {contain-intrinsic-size:<vCss>; } 
 ```
                
**- Thuộc tính: contain-intrinsic-width** viết tắt là: **ciw**
```css
ciw<vCss> {contain-intrinsic-width:<vCss>; } 
 ```
                
**- Thuộc tính: container** viết tắt là: **ctr**
```css
ctr<vCss> {container:<vCss>; } 
 ```
                
**- Thuộc tính: container-name** viết tắt là: **ctrn**
```css
ctrn<vCss> {container-name:<vCss>; } 
 ```
                
**- Thuộc tính: container-type** viết tắt là: **ctrt**
```css
ctrt<vCss> {container-type:<vCss>; } 
 ```
                
**- Thuộc tính: content** viết tắt là: **ctt**
```css
ctt<vCss> {content:<vCss>; } 
 ```
                
**- Thuộc tính: counter-increment** viết tắt là: **cntri**
```css
cntri<vCss> {counter-increment:<vCss>; } 
 ```
                
**- Thuộc tính: counter-reset** viết tắt là: **cntrr**
```css
cntrr<vCss> {counter-reset:<vCss>; } 
 ```
                
**- Thuộc tính: counter-set** viết tắt là: **cntrs**
```css
cntrs<vCss> {counter-set:<vCss>; } 
 ```
                
**- Thuộc tính: cursor** viết tắt là: **cr**
```css 
crP {cursor:pointer;}
crD {cursor:default;}
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
                
**- Thuộc tính: direction** viết tắt là: **dir**
```css
dir<vCss> {direction:<vCss>; } 
 ```
                
**- Thuộc tính: display** viết tắt là: **d**
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
 ```
                
**- Thuộc tính: empty-cells** viết tắt là: **empc**
```css
empc<vCss> {empty-cells:<vCss>; } 
 ```
                
**- Thuộc tính: filter** viết tắt là: **flt**
```css
flt<vCss> {filter:<vCss>; } 
 ```
                
**- Thuộc tính: flex** viết tắt là: **fx**
```css 
fxI {flex:0 1 auto;}
fxA {flex:1 1 auto;} 
 ```
                
**- Thuộc tính: flex-basis** viết tắt là: **fxb**
```css
fxb<vCss> {flex-basis:<vCss>; } 
 ```
                
**- Thuộc tính: flex-direction** viết tắt là: **fxd**
```css 
fxdR {flex-direction:row;}
fxdRr {flex-direction:row-reverse;}
fxdC {flex-direction:column;}
fxdCr {flex-direction:column-reverse;} 
 ```
                
**- Thuộc tính: flex-flow** viết tắt là: **fxf**
```css
fxf<vCss> {flex-flow:<vCss>; } 
 ```
                
**- Thuộc tính: flex-grow** viết tắt là: **fxg**
```css
fxg<vCss> {flex-grow:<vCss>; } 
 ```
                
**- Thuộc tính: flex-shrink** viết tắt là: **fxs**
```css
fxs<vCss> {flex-shrink:<vCss>; } 
 ```
                
**- Thuộc tính: flex-wrap** viết tắt là: **fxw**
```css 
fxwW {flex-wrap:wrap;}
fxwWr {flex-wrap:wrap-reverse;}
fxwN {flex-wrap:nowrap;} 
 ```
                
**- Thuộc tính: float** viết tắt là: **fl**
```css 
flIs {float:inline-start;}
flIe {float:inline-end;}
flR {float:right;}
flL {float:left;} 
 ```
                
**- Thuộc tính: font** viết tắt là: **fn**
```css
fn<vCss> {font:<vCss>; } 
 ```
                
**- Thuộc tính: font-family** viết tắt là: **ff**
```css 
ffA {font-family:ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}
ffS {font-family:ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;}
ffM {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;} 
 ```
                
**- Thuộc tính: font-feature-settings** viết tắt là: **fnfs**
```css
fnfs<vCss> {font-feature-settings:<vCss>; } 
 ```
                
**- Thuộc tính: font-kerning** viết tắt là: **fnk**
```css
fnk<vCss> {font-kerning:<vCss>; } 
 ```
                
**- Thuộc tính: font-language-override** viết tắt là: **fnlo**
```css
fnlo<vCss> {font-language-override:<vCss>; } 
 ```
                
**- Thuộc tính: font-optical-sizing** viết tắt là: **fnos**
```css
fnos<vCss> {font-optical-sizing:<vCss>; } 
 ```
                
**- Thuộc tính: font-palette** viết tắt là: **fnp**
```css
fnp<vCss> {font-palette:<vCss>; } 
 ```
                
**- Thuộc tính: font-size** viết tắt là: **fns**
```css
fns<vCss> {font-size:<vCss>; } 
 ```
                
**- Thuộc tính: font-size-adjust** viết tắt là: **fnsa**
```css
fnsa<vCss> {font-size-adjust:<vCss>; } 
 ```
                
**- Thuộc tính: font-stretch** viết tắt là: **fnstr**
```css
fnstr<vCss> {font-stretch:<vCss>; } 
 ```
                
**- Thuộc tính: font-style** viết tắt là: **fnsty**
```css
fnsty<vCss> {font-style:<vCss>; } 
 ```
                
**- Thuộc tính: font-synthesis** viết tắt là: **fnsyn**
```css
fnsyn<vCss> {font-synthesis:<vCss>; } 
 ```
                
**- Thuộc tính: font-synthesis-position** viết tắt là: **fnsp**
```css
fnsp<vCss> {font-synthesis-position:<vCss>; } 
 ```
                
**- Thuộc tính: font-synthesis-small-caps** viết tắt là: **fnssc**
```css
fnssc<vCss> {font-synthesis-small-caps:<vCss>; } 
 ```
                
**- Thuộc tính: font-synthesis-style** viết tắt là: **fnss**
```css
fnss<vCss> {font-synthesis-style:<vCss>; } 
 ```
                
**- Thuộc tính: font-synthesis-weight** viết tắt là: **fnsw**
```css
fnsw<vCss> {font-synthesis-weight:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant** viết tắt là: **fnv**
```css
fnv<vCss> {font-variant:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-alternates** viết tắt là: **fnva**
```css
fnva<vCss> {font-variant-alternates:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-caps** viết tắt là: **fnvc**
```css
fnvc<vCss> {font-variant-caps:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-east-asian** viết tắt là: **fnvea**
```css
fnvea<vCss> {font-variant-east-asian:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-emoji** viết tắt là: **fnve**
```css
fnve<vCss> {font-variant-emoji:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-ligatures** viết tắt là: **fnvl**
```css
fnvl<vCss> {font-variant-ligatures:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-numeric** viết tắt là: **fnvn**
```css
fnvn<vCss> {font-variant-numeric:<vCss>; } 
 ```
                
**- Thuộc tính: font-variant-position** viết tắt là: **fnvp**
```css
fnvp<vCss> {font-variant-position:<vCss>; } 
 ```
                
**- Thuộc tính: font-variation-settings** viết tắt là: **fnvs**
```css
fnvs<vCss> {font-variation-settings:<vCss>; } 
 ```
                
**- Thuộc tính: font-weight** viết tắt là: **fw**
```css
fw<vCss> {font-weight:<vCss>; } 
 ```
                
**- Thuộc tính: forced-color-adjust** viết tắt là: **fca**
```css
fca<vCss> {forced-color-adjust:<vCss>; } 
 ```
                
**- Thuộc tính: gap** viết tắt là: **gap**
```css
gap<vCss> {gap:<vCss>; } 
 ```
                
**- Thuộc tính: grid** viết tắt là: **g**
```css
g<vCss> {grid:<vCss>; } 
 ```
                
**- Thuộc tính: grid-area** viết tắt là: **ga**
```css
ga<vCss> {grid-area:<vCss>; } 
 ```
                
**- Thuộc tính: grid-auto-columns** viết tắt là: **gac**
```css 
gacMic {grid-auto-columns:min-content;}
gacMac {grid-auto-columns:max-content;}
gacMm {grid-auto-columns:minmax(0, 1fr);} 
 ```
                
**- Thuộc tính: grid-auto-flow** viết tắt là: **gaf**
```css 
gafR {grid-auto-flow:row;}
gafC {grid-auto-flow:column;}
gafD {grid-auto-flow:dense;}
gafRd {grid-auto-flow:row dense;}
gafCd {grid-auto-flow:column dense;} 
 ```
                
**- Thuộc tính: grid-auto-rows** viết tắt là: **gar**
```css 
garMic {grid-auto-rows:min-content;}
garMac {grid-auto-rows:max-content;}
garMm {grid-auto-rows:minmax(0, 1fr);} 
 ```
                
**- Thuộc tính: grid-column** viết tắt là: **gc**
```css 
gcF {grid-column:1 / -1;} 
 ```
                
**- Thuộc tính: grid-column-end** viết tắt là: **gce**
```css
gce<vCss> {grid-column-end:<vCss>; } 
 ```
                
**- Thuộc tính: grid-column-start** viết tắt là: **gcs**
```css
gcs<vCss> {grid-column-start:<vCss>; } 
 ```
                
**- Thuộc tính: grid-row** viết tắt là: **gr**
```css 
grF {grid-row:1 / -1;} 
 ```
                
**- Thuộc tính: grid-row-end** viết tắt là: **gre**
```css
gre<vCss> {grid-row-end:<vCss>; } 
 ```
                
**- Thuộc tính: grid-row-start** viết tắt là: **grs**
```css
grs<vCss> {grid-row-start:<vCss>; } 
 ```
                
**- Thuộc tính: grid-template** viết tắt là: **gt**
```css
gt<vCss> {grid-template:<vCss>; } 
 ```
                
**- Thuộc tính: grid-template-areas** viết tắt là: **gta**
```css
gta<vCss> {grid-template-areas:<vCss>; } 
 ```
                
**- Thuộc tính: grid-template-columns** viết tắt là: **gtc**
```css 
gtcS {grid-template-columns:subgrid;} 
 ```
                
**- Thuộc tính: grid-template-rows** viết tắt là: **gtr**
```css 
gtrS {grid-template-rows:subgrid;} 
 ```
                
**- Thuộc tính: hanging-punctuation** viết tắt là: **hp**
```css
hp<vCss> {hanging-punctuation:<vCss>; } 
 ```
                
**- Thuộc tính: height** viết tắt là: **h**
```css 
hMic {height:min-content;}
hMac {height:max-content;}
hFc {height:fit-content;} 
 ```
                
**- Thuộc tính: hyphenate-character** viết tắt là: **hc**
```css
hc<vCss> {hyphenate-character:<vCss>; } 
 ```
                
**- Thuộc tính: hyphenate-limit-chars** viết tắt là: **hlc**
```css
hlc<vCss> {hyphenate-limit-chars:<vCss>; } 
 ```
                
**- Thuộc tính: hyphens** viết tắt là: **hyp**
```css 
hypM {hyphens:manual;} 
 ```
                
**- Thuộc tính: image-orientation** viết tắt là: **imgo**
```css
imgo<vCss> {image-orientation:<vCss>; } 
 ```
                
**- Thuộc tính: image-rendering** viết tắt là: **imgr**
```css
imgr<vCss> {image-rendering:<vCss>; } 
 ```
                
**- Thuộc tính: inline-size** viết tắt là: **ins**
```css
ins<vCss> {inline-size:<vCss>; } 
 ```
                
**- Thuộc tính: inset** viết tắt là: **i**
```css
i<vCss> {inset:<vCss>; } 
 ```
                
**- Thuộc tính: inset-block** viết tắt là: **iblk**
```css
iblk<vCss> {inset-block:<vCss>; } 
 ```
                
**- Thuộc tính: inset-block-end** viết tắt là: **ibe**
```css
ibe<vCss> {inset-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: inset-block-start** viết tắt là: **ibsta**
```css
ibsta<vCss> {inset-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: inset-inline** viết tắt là: **ii**
```css
ii<vCss> {inset-inline:<vCss>; } 
 ```
                
**- Thuộc tính: inset-inline-end** viết tắt là: **iie**
```css
iie<vCss> {inset-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: inset-inline-start** viết tắt là: **iis**
```css
iis<vCss> {inset-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: isolation** viết tắt là: **is**
```css 
isI {isolation:isolate;} 
 ```
                
**- Thuộc tính: justify-content** viết tắt là: **jc**
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
                
**- Thuộc tính: justify-items** viết tắt là: **ji**
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
                
**- Thuộc tính: justify-self** viết tắt là: **js**
```css 
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
                
**- Thuộc tính: left** viết tắt là: **l**
```css
l<vCss> {left:<vCss>; } 
 ```
                
**- Thuộc tính: letter-spacing** viết tắt là: **lts**
```css 
ltsN {letter-spacing:normal;} 
 ```
                
**- Thuộc tính: line-break** viết tắt là: **lbrk**
```css
lbrk<vCss> {line-break:<vCss>; } 
 ```
                
**- Thuộc tính: line-height** viết tắt là: **lh**
```css
lh<vCss> {line-height:<vCss>; } 
 ```
                
**- Thuộc tính: list-style** viết tắt là: **ls**
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
                
**- Thuộc tính: list-style-image** viết tắt là: **lsi**
```css
lsi<vCss> {list-style-image:<vCss>; } 
 ```
                
**- Thuộc tính: list-style-position** viết tắt là: **lisp**
```css 
lispI {list-style-position:inside;}
lispO {list-style-position:outside;} 
 ```
                
**- Thuộc tính: list-style-type** viết tắt là: **lst**
```css 
lstDi {list-style-type:disc;}
lstC {list-style-type:circle;}
lstS {list-style-type:square;}
lstDe {list-style-type:decimal;}
lstG {list-style-type:georgian;}
lstTci {list-style-type:trad-chinese-informal;}
lstK {list-style-type:kannada;} 
 ```
                
**- Thuộc tính: margin** viết tắt là: **m**
```css
m<vCss> {margin:<vCss>; } 
 ```
                
**- Thuộc tính: margin-block** viết tắt là: **mblk**
```css
mblk<vCss> {margin-block:<vCss>; } 
 ```
                
**- Thuộc tính: margin-block-end** viết tắt là: **mbe**
```css
mbe<vCss> {margin-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: margin-block-start** viết tắt là: **mbsta**
```css
mbsta<vCss> {margin-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: margin-bottom** viết tắt là: **mb**
```css
mb<vCss> {margin-bottom:<vCss>; } 
 ```
                
**- Thuộc tính: margin-inline** viết tắt là: **min**
```css
min<vCss> {margin-inline:<vCss>; } 
 ```
                
**- Thuộc tính: margin-inline-end** viết tắt là: **mie**
```css
mie<vCss> {margin-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: margin-inline-start** viết tắt là: **mista**
```css
mista<vCss> {margin-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: margin-left** viết tắt là: **ml**
```css
ml<vCss> {margin-left:<vCss>; } 
 ```
                
**- Thuộc tính: margin-right** viết tắt là: **mr**
```css
mr<vCss> {margin-right:<vCss>; } 
 ```
                
**- Thuộc tính: margin-top** viết tắt là: **mt**
```css
mt<vCss> {margin-top:<vCss>; } 
 ```
                
**- Thuộc tính: mask** viết tắt là: **msk**
```css
msk<vCss> {mask:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border** viết tắt là: **mskb**
```css
mskb<vCss> {mask-border:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-mode** viết tắt là: **mskbm**
```css
mskbm<vCss> {mask-border-mode:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-outset** viết tắt là: **mskbo**
```css
mskbo<vCss> {mask-border-outset:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-repeat** viết tắt là: **mskbr**
```css
mskbr<vCss> {mask-border-repeat:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-slice** viết tắt là: **mskbs**
```css
mskbs<vCss> {mask-border-slice:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-source** viết tắt là: **mskbsrc**
```css
mskbsrc<vCss> {mask-border-source:<vCss>; } 
 ```
                
**- Thuộc tính: mask-border-width** viết tắt là: **mskbw**
```css
mskbw<vCss> {mask-border-width:<vCss>; } 
 ```
                
**- Thuộc tính: mask-clip** viết tắt là: **mskc**
```css
mskc<vCss> {mask-clip:<vCss>; } 
 ```
                
**- Thuộc tính: mask-composite** viết tắt là: **mskcp**
```css
mskcp<vCss> {mask-composite:<vCss>; } 
 ```
                
**- Thuộc tính: mask-image** viết tắt là: **mski**
```css
mski<vCss> {mask-image:<vCss>; } 
 ```
                
**- Thuộc tính: mask-mode** viết tắt là: **mskm**
```css
mskm<vCss> {mask-mode:<vCss>; } 
 ```
                
**- Thuộc tính: mask-origin** viết tắt là: **msko**
```css
msko<vCss> {mask-origin:<vCss>; } 
 ```
                
**- Thuộc tính: mask-position** viết tắt là: **mskp**
```css
mskp<vCss> {mask-position:<vCss>; } 
 ```
                
**- Thuộc tính: mask-repeat** viết tắt là: **mskr**
```css
mskr<vCss> {mask-repeat:<vCss>; } 
 ```
                
**- Thuộc tính: mask-size** viết tắt là: **msks**
```css
msks<vCss> {mask-size:<vCss>; } 
 ```
                
**- Thuộc tính: mask-type** viết tắt là: **mskt**
```css
mskt<vCss> {mask-type:<vCss>; } 
 ```
                
**- Thuộc tính: math-depth** viết tắt là: **mtd**
```css
mtd<vCss> {math-depth:<vCss>; } 
 ```
                
**- Thuộc tính: math-style** viết tắt là: **mts**
```css
mts<vCss> {math-style:<vCss>; } 
 ```
                
**- Thuộc tính: max-block-size** viết tắt là: **mbs**
```css
mbs<vCss> {max-block-size:<vCss>; } 
 ```
                
**- Thuộc tính: max-height** viết tắt là: **mh**
```css
mh<vCss> {max-height:<vCss>; } 
 ```
                
**- Thuộc tính: max-inline-size** viết tắt là: **mis**
```css
mis<vCss> {max-inline-size:<vCss>; } 
 ```
                
**- Thuộc tính: max-width** viết tắt là: **mw**
```css
mw<vCss> {max-width:<vCss>; } 
 ```
                
**- Thuộc tính: min-block-size** viết tắt là: **mibs**
```css
mibs<vCss> {min-block-size:<vCss>; } 
 ```
                
**- Thuộc tính: min-height** viết tắt là: **mih**
```css 
mihF {min-height:100%;}
mihMic {min-height:min-content;}
mihMac {min-height:max-content;}
mihFc {min-height:fit-content;} 
 ```
                
**- Thuộc tính: min-inline-size** viết tắt là: **misz**
```css
misz<vCss> {min-inline-size:<vCss>; } 
 ```
                
**- Thuộc tính: min-width** viết tắt là: **miw**
```css 
miwF {min-width:100%;}
miwMic {min-width:min-content;}
miwMac {min-width:max-content;}
miwFc {min-width:fit-content;} 
 ```
                
**- Thuộc tính: mix-blend-mode** viết tắt là: **mbd**
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
                
**- Thuộc tính: object-fit** viết tắt là: **of**
```css 
ofC {object-fit:contain;}
ofCv {object-fit:cover;}
ofF {object-fit:fill;}
ofSd {object-fit:scale-down;} 
 ```
                
**- Thuộc tính: object-position** viết tắt là: **op**
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
                
**- Thuộc tính: offset** viết tắt là: **ofs**
```css
ofs<vCss> {offset:<vCss>; } 
 ```
                
**- Thuộc tính: offset-anchor** viết tắt là: **ofa**
```css
ofa<vCss> {offset-anchor:<vCss>; } 
 ```
                
**- Thuộc tính: offset-distance** viết tắt là: **ofd**
```css
ofd<vCss> {offset-distance:<vCss>; } 
 ```
                
**- Thuộc tính: offset-path** viết tắt là: **ofp**
```css
ofp<vCss> {offset-path:<vCss>; } 
 ```
                
**- Thuộc tính: offset-position** viết tắt là: **ofpo**
```css
ofpo<vCss> {offset-position:<vCss>; } 
 ```
                
**- Thuộc tính: offset-rotate** viết tắt là: **ofr**
```css
ofr<vCss> {offset-rotate:<vCss>; } 
 ```
                
**- Thuộc tính: opacity** viết tắt là: **opc**
```css
opc<vCss> {opacity:<vCss>; } 
 ```
                
**- Thuộc tính: order** viết tắt là: **ord**
```css
ord<vCss> {order:<vCss>; } 
 ```
                
**- Thuộc tính: orphans** viết tắt là: **orp**
```css
orp<vCss> {orphans:<vCss>; } 
 ```
                
**- Thuộc tính: outline** viết tắt là: **oli**
```css
oli<vCss> {outline:<vCss>; } 
 ```
                
**- Thuộc tính: outline-color** viết tắt là: **olc**
```css 
olcI {outline-color:inherit;}
olcC {outline-color:currentColor;}
olcT {outline-color:transparent;} 
 ```
                
**- Thuộc tính: outline-offset** viết tắt là: **olo**
```css
olo<vCss> {outline-offset:<vCss>; } 
 ```
                
**- Thuộc tính: outline-style** viết tắt là: **ols**
```css 
olsDt {outline-style:dotted;}
olsDs {outline-style:dashed;}
olsS {outline-style:solid;}
olsDb {outline-style:double;}
olsG {outline-style:groove;}
olsR {outline-style:ridge;}
olsIn {outline-style:inset;}
olsOut {outline-style:outset;} 
 ```
                
**- Thuộc tính: outline-width** viết tắt là: **olw**
```css 
olwT {outline-width:thin;}
olwM {outline-width:medium;}
olwTh {outline-width:thick;} 
 ```
                
**- Thuộc tính: overflow** viết tắt là: **ofl**
```css
ofl<vCss> {overflow:<vCss>; } 
 ```
                
**- Thuộc tính: overflow-anchor** viết tắt là: **ofla**
```css
ofla<vCss> {overflow-anchor:<vCss>; } 
 ```
                
**- Thuộc tính: overflow-block** viết tắt là: **oflb**
```css
oflb<vCss> {overflow-block:<vCss>; } 
 ```
                
**- Thuộc tính: overflow-clip-margin** viết tắt là: **oflcm**
```css
oflcm<vCss> {overflow-clip-margin:<vCss>; } 
 ```
                
**- Thuộc tính: overflow-inline** viết tắt là: **ofli**
```css
ofli<vCss> {overflow-inline:<vCss>; } 
 ```
                
**- Thuộc tính: overflow-wrap** viết tắt là: **oflw**
```css 
oflwC {overflow-wrap:clip;}
oflwS {overflow-wrap:scroll;} 
 ```
                
**- Thuộc tính: overflow-x** viết tắt là: **oflx**
```css 
oflxC {overflow-x:clip;}
oflxS {overflow-x:scroll;} 
 ```
                
**- Thuộc tính: overflow-y** viết tắt là: **ofly**
```css 
oflyC {overflow-y:clip;}
oflyS {overflow-y:scroll;} 
 ```
                
**- Thuộc tính: overscroll-behavior** viết tắt là: **osrbh**
```css 
osrbhC {overscroll-behavior:contain;} 
 ```
                
**- Thuộc tính: overscroll-behavior-block** viết tắt là: **osrbb**
```css 
osrbbC {overscroll-behavior-block:contain;} 
 ```
                
**- Thuộc tính: overscroll-behavior-inline** viết tắt là: **osrbi**
```css 
osrbiC {overscroll-behavior-inline:contain;} 
 ```
                
**- Thuộc tính: overscroll-behavior-x** viết tắt là: **osrbx**
```css 
osrbxC {overscroll-behavior-x:contain;} 
 ```
                
**- Thuộc tính: overscroll-behavior-y** viết tắt là: **orsby**
```css 
orsbyC {overscroll-behavior-y:contain;} 
 ```
                
**- Thuộc tính: padding** viết tắt là: **p**
```css
p<vCss> {padding:<vCss>; } 
 ```
                
**- Thuộc tính: padding-block** viết tắt là: **pblk**
```css
pblk<vCss> {padding-block:<vCss>; } 
 ```
                
**- Thuộc tính: padding-block-end** viết tắt là: **pbe**
```css
pbe<vCss> {padding-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: padding-block-start** viết tắt là: **pbs**
```css
pbs<vCss> {padding-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: padding-bottom** viết tắt là: **pb**
```css
pb<vCss> {padding-bottom:<vCss>; } 
 ```
                
**- Thuộc tính: padding-inline** viết tắt là: **pi**
```css 
piS {padding-inline:start;}
piC {padding-inline:center;}
piE {padding-inline:end;}
piB {padding-inline:baseline;}
piSt {padding-inline:stretch;} 
 ```
                
**- Thuộc tính: padding-inline-end** viết tắt là: **pie**
```css
pie<vCss> {padding-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: padding-inline-start** viết tắt là: **pis**
```css
pis<vCss> {padding-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: padding-left** viết tắt là: **pl**
```css
pl<vCss> {padding-left:<vCss>; } 
 ```
                
**- Thuộc tính: padding-right** viết tắt là: **pr**
```css
pr<vCss> {padding-right:<vCss>; } 
 ```
                
**- Thuộc tính: padding-top** viết tắt là: **pt**
```css
pt<vCss> {padding-top:<vCss>; } 
 ```
                
**- Thuộc tính: page** viết tắt là: **pg**
```css
pg<vCss> {page:<vCss>; } 
 ```
                
**- Thuộc tính: page-break-after** viết tắt là: **pgba**
```css
pgba<vCss> {page-break-after:<vCss>; } 
 ```
                
**- Thuộc tính: page-break-before** viết tắt là: **pgbb**
```css
pgbb<vCss> {page-break-before:<vCss>; } 
 ```
                
**- Thuộc tính: page-break-inside** viết tắt là: **pgbi**
```css
pgbi<vCss> {page-break-inside:<vCss>; } 
 ```
                
**- Thuộc tính: paint-order** viết tắt là: **pto**
```css
pto<vCss> {paint-order:<vCss>; } 
 ```
                
**- Thuộc tính: perspective** viết tắt là: **psp**
```css
psp<vCss> {perspective:<vCss>; } 
 ```
                
**- Thuộc tính: perspective-origin** viết tắt là: **pso**
```css
pso<vCss> {perspective-origin:<vCss>; } 
 ```
                
**- Thuộc tính: place-content** viết tắt là: **plc**
```css
plc<vCss> {place-content:<vCss>; } 
 ```
                
**- Thuộc tính: place-items** viết tắt là: **pli**
```css
pli<vCss> {place-items:<vCss>; } 
 ```
                
**- Thuộc tính: place-self** viết tắt là: **pls**
```css
pls<vCss> {place-self:<vCss>; } 
 ```
                
**- Thuộc tính: pointer-events** viết tắt là: **pe**
```css
pe<vCss> {pointer-events:<vCss>; } 
 ```
                
**- Thuộc tính: position** viết tắt là: **pos**
```css 
posS {position:static;}
posF {position:fixed;}
posA {position:absolute;}
posR {position:relative;}
posSt {position:sticky;} 
 ```
                
**- Thuộc tính: print-color-adjust** viết tắt là: **prca**
```css
prca<vCss> {print-color-adjust:<vCss>; } 
 ```
                
**- Thuộc tính: quotes** viết tắt là: **qts**
```css
qts<vCss> {quotes:<vCss>; } 
 ```
                
**- Thuộc tính: resize** viết tắt là: **rsz**
```css 
rszB {resize:both;}
rszH {resize:horizontal;}
rszV {resize:vertical;} 
 ```
                
**- Thuộc tính: right** viết tắt là: **r**
```css
r<vCss> {right:<vCss>; } 
 ```
                
**- Thuộc tính: rotate** viết tắt là: **rot**
```css
rot<vCss> {rotate:<vCss>; } 
 ```
                
**- Thuộc tính: row-gap** viết tắt là: **rgap**
```css
rgap<vCss> {row-gap:<vCss>; } 
 ```
                
**- Thuộc tính: ruby-position** viết tắt là: **rbp**
```css
rbp<vCss> {ruby-position:<vCss>; } 
 ```
                
**- Thuộc tính: scale** viết tắt là: **s**
```css
s<vCss> {scale:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-behavior** viết tắt là: **scrb**
```css
scrb<vCss> {scroll-behavior:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin** viết tắt là: **scrm**
```css
scrm<vCss> {scroll-margin:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-block** viết tắt là: **scrmblk**
```css
scrmblk<vCss> {scroll-margin-block:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-block-end** viết tắt là: **scrmbe**
```css
scrmbe<vCss> {scroll-margin-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-block-start** viết tắt là: **scrmbs**
```css
scrmbs<vCss> {scroll-margin-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-bottom** viết tắt là: **scrmb**
```css
scrmb<vCss> {scroll-margin-bottom:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-inline** viết tắt là: **scrmi**
```css
scrmi<vCss> {scroll-margin-inline:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-inline-end** viết tắt là: **scrmie**
```css
scrmie<vCss> {scroll-margin-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-inline-start** viết tắt là: **scrmis**
```css
scrmis<vCss> {scroll-margin-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-left** viết tắt là: **scrml**
```css
scrml<vCss> {scroll-margin-left:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-right** viết tắt là: **scrmr**
```css
scrmr<vCss> {scroll-margin-right:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-margin-top** viết tắt là: **scrmt**
```css
scrmt<vCss> {scroll-margin-top:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding** viết tắt là: **scrp**
```css
scrp<vCss> {scroll-padding:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-block** viết tắt là: **scrpblk**
```css
scrpblk<vCss> {scroll-padding-block:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-block-end** viết tắt là: **srcpbe**
```css
srcpbe<vCss> {scroll-padding-block-end:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-block-start** viết tắt là: **scrpbs**
```css
scrpbs<vCss> {scroll-padding-block-start:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-bottom** viết tắt là: **scrpb**
```css
scrpb<vCss> {scroll-padding-bottom:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-inline** viết tắt là: **scrpi**
```css
scrpi<vCss> {scroll-padding-inline:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-inline-end** viết tắt là: **scrpie**
```css
scrpie<vCss> {scroll-padding-inline-end:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-inline-start** viết tắt là: **scrpis**
```css
scrpis<vCss> {scroll-padding-inline-start:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-left** viết tắt là: **scrpl**
```css
scrpl<vCss> {scroll-padding-left:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-right** viết tắt là: **scrpr**
```css
scrpr<vCss> {scroll-padding-right:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-padding-top** viết tắt là: **scrpt**
```css
scrpt<vCss> {scroll-padding-top:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-snap-align** viết tắt là: **scrsa**
```css
scrsa<vCss> {scroll-snap-align:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-snap-stop** viết tắt là: **scrss**
```css
scrss<vCss> {scroll-snap-stop:<vCss>; } 
 ```
                
**- Thuộc tính: scroll-snap-type** viết tắt là: **scrst**
```css
scrst<vCss> {scroll-snap-type:<vCss>; } 
 ```
                
**- Thuộc tính: scrollbar-color** viết tắt là: **sbc**
```css
sbc<vCss> {scrollbar-color:<vCss>; } 
 ```
                
**- Thuộc tính: scrollbar-gutter** viết tắt là: **sbg**
```css
sbg<vCss> {scrollbar-gutter:<vCss>; } 
 ```
                
**- Thuộc tính: scrollbar-width** viết tắt là: **sbw**
```css
sbw<vCss> {scrollbar-width:<vCss>; } 
 ```
                
**- Thuộc tính: tab-size** viết tắt là: **tbs**
```css
tbs<vCss> {tab-size:<vCss>; } 
 ```
                
**- Thuộc tính: shape-image-threshold** viết tắt là: **shit**
```css
shit<vCss> {shape-image-threshold:<vCss>; } 
 ```
                
**- Thuộc tính: shape-margin** viết tắt là: **shm**
```css
shm<vCss> {shape-margin:<vCss>; } 
 ```
                
**- Thuộc tính: shape-outside** viết tắt là: **sho**
```css
sho<vCss> {shape-outside:<vCss>; } 
 ```
                
**- Thuộc tính: transform** viết tắt là: **tra**
```css
tra<vCss> {transform:<vCss>; } 
 ```
                
**- Thuộc tính: transform-box** viết tắt là: **trab**
```css
trab<vCss> {transform-box:<vCss>; } 
 ```
                
**- Thuộc tính: transform-origin** viết tắt là: **trao**
```css
trao<vCss> {transform-origin:<vCss>; } 
 ```
                
**- Thuộc tính: transform-style** viết tắt là: **tras**
```css
tras<vCss> {transform-style:<vCss>; } 
 ```
                
**- Thuộc tính: transition** viết tắt là: **tran**
```css
tran<vCss> {transition:<vCss>; } 
 ```
                
**- Thuộc tính: transition-behavior** viết tắt là: **tranb**
```css
tranb<vCss> {transition-behavior:<vCss>; } 
 ```
                
**- Thuộc tính: transition-delay** viết tắt là: **trand**
```css
trand<vCss> {transition-delay:<vCss>; } 
 ```
                
**- Thuộc tính: transition-duration** viết tắt là: **trandur**
```css
trandur<vCss> {transition-duration:<vCss>; } 
 ```
                
**- Thuộc tính: transition-property** viết tắt là: **tranp**
```css
tranp<vCss> {transition-property:<vCss>; } 
 ```
                
**- Thuộc tính: transition-timing-function** viết tắt là: **trantf**
```css
trantf<vCss> {transition-timing-function:<vCss>; } 
 ```
                
**- Thuộc tính: table-layout** viết tắt là: **tbl**
```css
tbl<vCss> {table-layout:<vCss>; } 
 ```
                
**- Thuộc tính: text-align** viết tắt là: **ta**
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
                
**- Thuộc tính: text-align-last** viết tắt là: **tal**
```css 
talS {text-align-last:start;}
talE {text-align-last:end;}
talL {text-align-last:left;}
talR {text-align-last:right;}
talC {text-align-last:center;}
talJ {text-align-last:justify;} 
 ```
                
**- Thuộc tính: text-combine-upright** viết tắt là: **tcu**
```css
tcu<vCss> {text-combine-upright:<vCss>; } 
 ```
                
**- Thuộc tính: text-decoration** viết tắt là: **td**
```css 
tdU {text-decoration:underline;} 
 ```
                
**- Thuộc tính: text-decoration-color** viết tắt là: **tdc**
```css
tdc<vCss> {text-decoration-color:<vCss>; } 
 ```
                
**- Thuộc tính: text-decoration-line** viết tắt là: **tdl**
```css 
tdlU {text-decoration-line:underline;}
tdlO {text-decoration-line:overline;}
tdlLt {text-decoration-line:line-through;}
tdlB {text-decoration-line:blink;} 
 ```
                
**- Thuộc tính: text-decoration-skip-ink** viết tắt là: **tdsi**
```css
tdsi<vCss> {text-decoration-skip-ink:<vCss>; } 
 ```
                
**- Thuộc tính: text-decoration-style** viết tắt là: **tds**
```css 
tdsDb {text-decoration-style:double;}
tdsDt {text-decoration-style:dotted;}
tdsDs {text-decoration-style:dashed;}
tdsW {text-decoration-style:wavy;} 
 ```
                
**- Thuộc tính: text-decoration-thickness** viết tắt là: **tdt**
```css 
tdtFf {text-decoration-thickness:from-font;} 
 ```
                
**- Thuộc tính: text-emphasis** viết tắt là: **teph**
```css
teph<vCss> {text-emphasis:<vCss>; } 
 ```
                
**- Thuộc tính: text-emphasis-color** viết tắt là: **tec**
```css
tec<vCss> {text-emphasis-color:<vCss>; } 
 ```
                
**- Thuộc tính: text-emphasis-position** viết tắt là: **tep**
```css 
tepOr {text-emphasis-position:over right;}
tepOl {text-emphasis-position:over left;}
tepUr {text-emphasis-position:under right;}
tepUl {text-emphasis-position:under left;}
tepLo {text-emphasis-position:left over;}
tepRu {text-emphasis-position:right under;}
tepLu {text-emphasis-position:left under;} 
 ```
                
**- Thuộc tính: text-emphasis-style** viết tắt là: **tes**
```css
tes<vCss> {text-emphasis-style:<vCss>; } 
 ```
                
**- Thuộc tính: text-indent** viết tắt là: **ti**
```css
ti<vCss> {text-indent:<vCss>; } 
 ```
                
**- Thuộc tính: text-justify** viết tắt là: **tj**
```css 
tjIw {text-justify:inter-word;}
tjIc {text-justify:inter-character;}
tjD {text-justify:distribute;} 
 ```
                
**- Thuộc tính: text-orientation** viết tắt là: **tor**
```css 
torM {text-orientation:mixed;}
torU {text-orientation:upright;}
torSr {text-orientation:sideways-right;}
torSl {text-orientation:sideways-left;}
torS {text-orientation:sideways;}
torUgo {text-orientation:use-glyph-orientation;} 
 ```
                
**- Thuộc tính: text-overflow** viết tắt là: **tol**
```css 
tolC {text-overflow:clip;}
tolE {text-overflow:ellipsis;} 
 ```
                
**- Thuộc tính: text-rendering** viết tắt là: **trd**
```css 
trdOp {text-rendering:optimizeSpeed;}
trdOl {text-rendering:optimizeLegibility;}
trdG {text-rendering:geometricPrecision;} 
 ```
                
**- Thuộc tính: text-shadow** viết tắt là: **tsh**
```css
tsh<vCss> {text-shadow:<vCss>; } 
 ```
                
**- Thuộc tính: text-transform** viết tắt là: **ttr**
```css 
ttrC {text-transform:capitalize;}
ttrU {text-transform:uppercase;}
ttrL {text-transform:lowercase;}
ttrFw {text-transform:full-width;}
ttrFsk {text-transform:full-size-kana;} 
 ```
                
**- Thuộc tính: text-underline-offset** viết tắt là: **tuo**
```css
tuo<vCss> {text-underline-offset:<vCss>; } 
 ```
                
**- Thuộc tính: text-underline-position** viết tắt là: **tup**
```css 
tupU {text-underline-position:under;}
tupL {text-underline-position:left;}
tupR {text-underline-position:right;}
tupUl {text-underline-position:under left;}
tupRu {text-underline-position:right under;} 
 ```
                
**- Thuộc tính: text-wrap** viết tắt là: **tw**
```css 
twW {text-wrap:wrap;}
twN {text-wrap:nowrap;}
twB {text-wrap:balance;}
twP {text-wrap:pretty;} 
 ```
                
**- Thuộc tính: top** viết tắt là: **t**
```css
t<vCss> {top:<vCss>; } 
 ```
                
**- Thuộc tính: touch-action** viết tắt là: **toa**
```css 
toaP {touch-action:pan-x;}
toaPy {touch-action:pan-y;}
toaPm {touch-action:pan-x pan-y;}
toaPi {touch-action:pinch-zoom;} 
 ```
                
**- Thuộc tính: translate** viết tắt là: **trl**
```css
trl<vCss> {translate:<vCss>; } 
 ```
                
**- Thuộc tính: unicode-bidi** viết tắt là: **unib**
```css
unib<vCss> {unicode-bidi:<vCss>; } 
 ```
                
**- Thuộc tính: user-select** viết tắt là: **us**
```css 
usT {user-select:text;}
usAll {user-select:all;}
usC {user-select:contain;} 
 ```
                
**- Thuộc tính: vertical-align** viết tắt là: **va**
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
                
**- Thuộc tính: visibility** viết tắt là: **v**
```css 
vC {visibility:collapse;} 
 ```
                
**- Thuộc tính: white-space** viết tắt là: **ws**
```css
ws<vCss> {white-space:<vCss>; } 
 ```
                
**- Thuộc tính: white-space-collapse** viết tắt là: **wsc**
```css
wsc<vCss> {white-space-collapse:<vCss>; } 
 ```
                
**- Thuộc tính: widows** viết tắt là: **wd**
```css
wd<vCss> {widows:<vCss>; } 
 ```
                
**- Thuộc tính: width** viết tắt là: **w**
```css 
wMic {width:min-content;}
wMac {width:max-content;}
wFc {width:fit-content;}
wF {width:100%;} 
 ```
                
**- Thuộc tính: will-change** viết tắt là: **wc**
```css 
wcSp {will-change:scroll-position;}
wcC {will-change:contents;}
wcT {will-change:transform;} 
 ```
                
**- Thuộc tính: word-break** viết tắt là: **wrb**
```css
wrb<vCss> {word-break:<vCss>; } 
 ```
                
**- Thuộc tính: word-spacing** viết tắt là: **wrs**
```css
wrs<vCss> {word-spacing:<vCss>; } 
 ```
                
**- Thuộc tính: writing-mode** viết tắt là: **wrtm**
```css
wrtm<vCss> {writing-mode:<vCss>; } 
 ```
                
**- Thuộc tính: z-index** viết tắt là: **z**
```css
z<vCss> {z-index:<vCss>; } 
 ```
                
**- Thuộc tính: zoom** viết tắt là: **zo**
```css
zo<vCss> {zoom:<vCss>; } 
 ```
                
**- Thuộc tính: margin căn đều theo trái phải** viết tắt là: **mx**
```css
mx<vCss>{margin-left:<vCss>; margin-right:<vCss>;}
 ```
**- Thuộc tính: margin căn đều theo trên dưới** viết tắt là: **my**
```css
mx<vCss>{margin-top:<vCss>; margin-bottom:<vCss>;}
 ```
**- Thuộc tính: padding căn đều theo trái phải** viết tắt là: **px**
```css
px<vCss>{padding-left:<vCss>; padding-right:<vCss>;}
 ```
**- Thuộc tính: padding căn đều theo trái phải** viết tắt là: **py**
```css
py<vCss>{padding-top:<vCss>; padding-bottom:<vCss>;}
 ```
