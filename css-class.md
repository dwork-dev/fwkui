# 1. Các class mặc định được đinh nghĩa viết tắt
## Chú ý
***Sử dụng vCSS***
- Chứa trong {<là hàm, giá trị, biểu thức>} Ví dụ: w{10px}, w{calc(100vh;-;30px)}
- Bắt đầu là một số, một ký tự đầu viết hoa, dấu chấm than (!): Ví dụ w!100px, w100px; wCalc(100vh;-;30px)
- Dấu # sau là mã màu: ví dụ: c#123456, #123456 là mã màu
 
# 2. Các class đã được định nghĩa
**- Thuộc tính: -webkit-line-clamp** viết tắt là: **wlc**
```css
wlc<vCSS> {-webkit-line-clamp:<vCSS>; } 
 ```
            
**- Thuộc tính: -webkit-text-fill-color** viết tắt là: **wtfc**
```css
wtfc<vCSS> {-webkit-text-fill-color:<vCSS>; } 
 ```
            
**- Thuộc tính: -webkit-text-stroke** viết tắt là: **wts**
```css
wts<vCSS> {-webkit-text-stroke:<vCSS>; } 
 ```
            
**- Thuộc tính: -webkit-text-stroke-color** viết tắt là: **wtsc**
```css
wtsc<vCSS> {-webkit-text-stroke-color:<vCSS>; } 
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
a<vCSS> {all:<vCSS>; } 
 ```
            
**- Thuộc tính: animation** viết tắt là: **ani**
```css
ani<vCSS> {animation:<vCSS>; } 
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
anide<vCSS> {animation-delay:<vCSS>; } 
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
anidu<vCSS> {animation-duration:<vCSS>; } 
 ```
            
**- Thuộc tính: animation-fill-mode** viết tắt là: **anifm**
```css 
anifmN {animation-fill-mode:none;}
anifmF {animation-fill-mode:forwards;}
anifmB {animation-fill-mode:backwards;}
anifmNb {animation-fill-mode:none, backwards;}
anifmFbn {animation-fill-mode:both, forwards, none;} 
 ```
            
**- Thuộc tính: animation-iteration-count** viết tắt là: **aniic**
```css
aniic<vCSS> {animation-iteration-count:<vCSS>; } 
 ```
            
**- Thuộc tính: animation-name** viết tắt là: **anin**
```css 
aninN {animation-name:None;}
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
apN {appearance:none;}
apMb {appearance:menulist-button;}
apTf {appearance:textfield;}
apB {appearance:button;}
apC {appearance:checkbox;} 
 ```
            
**- Thuộc tính: aspect-ratio** viết tắt là: **ar**
```css 
arA {aspect-ratio:auto;}
arS {aspect-ratio:1 / 1;}
arV {aspect-ratio:16 / 9;} 
 ```
            
**- Thuộc tính: backdrop-filter** viết tắt là: **bkdf**
```css
bkdf<vCSS> {backdrop-filter:<vCSS>; } 
 ```
            
**- Thuộc tính: backface-visibility** viết tắt là: **bkfv**
```css 
bkfvH {backface-visibility:hidden;} 
 ```
            
**- Thuộc tính: background** viết tắt là: **bg**
```css
bg<vCSS> {background:<vCSS>; } 
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
bgiN {background-image:none;} 
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
bgsA {background-size:auto;}
bgsC {background-size:contain;} 
 ```
            
**- Thuộc tính: block-size** viết tắt là: **blks**
```css
blks<vCSS> {block-size:<vCSS>; } 
 ```
            
**- Thuộc tính: border** viết tắt là: **bd**
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
            
**- Thuộc tính: border-block** viết tắt là: **bdblk**
```css
bdblk<vCSS> {border-block:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-color** viết tắt là: **bdblc**
```css
bdblc<vCSS> {border-block-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-end** viết tắt là: **bdble**
```css
bdble<vCSS> {border-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-end-color** viết tắt là: **bdblec**
```css
bdblec<vCSS> {border-block-end-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-end-style** viết tắt là: **bdbles**
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
            
**- Thuộc tính: border-block-end-width** viết tắt là: **bdblew**
```css
bdblew<vCSS> {border-block-end-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-start** viết tắt là: **bdbls**
```css
bdbls<vCSS> {border-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-start-color** viết tắt là: **bdblsc**
```css
bdblsc<vCSS> {border-block-start-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-start-style** viết tắt là: **bdblss**
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
            
**- Thuộc tính: border-block-start-width** viết tắt là: **bdblsw**
```css
bdblsw<vCSS> {border-block-start-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-block-style** viết tắt là: **bdblst**
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
            
**- Thuộc tính: border-block-width** viết tắt là: **bdblwi**
```css
bdblwi<vCSS> {border-block-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-bottom** viết tắt là: **bdb**
```css
bdb<vCSS> {border-bottom:<vCSS>; } 
 ```
            
**- Thuộc tính: border-bottom-color** viết tắt là: **bdbc**
```css
bdbc<vCSS> {border-bottom-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-bottom-left-radius** viết tắt là: **bdblr**
```css
bdblr<vCSS> {border-bottom-left-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-bottom-right-radius** viết tắt là: **bdbrr**
```css
bdbrr<vCSS> {border-bottom-right-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-bottom-style** viết tắt là: **bdbst**
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
bdc<vCSS> {border-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-end-end-radius** viết tắt là: **bdeer**
```css
bdeer<vCSS> {border-end-end-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-end-start-radius** viết tắt là: **bdesr**
```css
bdesr<vCSS> {border-end-start-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-image** viết tắt là: **bdimg**
```css
bdimg<vCSS> {border-image:<vCSS>; } 
 ```
            
**- Thuộc tính: border-image-outset** viết tắt là: **bdio**
```css
bdio<vCSS> {border-image-outset:<vCSS>; } 
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
bdis<vCSS> {border-image-slice:<vCSS>; } 
 ```
            
**- Thuộc tính: border-image-source** viết tắt là: **bdisrc**
```css
bdisrc<vCSS> {border-image-source:<vCSS>; } 
 ```
            
**- Thuộc tính: border-image-width** viết tắt là: **bdiw**
```css
bdiw<vCSS> {border-image-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline** viết tắt là: **bdi**
```css
bdi<vCSS> {border-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-color** viết tắt là: **bdic**
```css
bdic<vCSS> {border-inline-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-end** viết tắt là: **bdie**
```css
bdie<vCSS> {border-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-end-color** viết tắt là: **bdiec**
```css
bdiec<vCSS> {border-inline-end-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-end-style** viết tắt là: **bdies**
```css
bdies<vCSS> {border-inline-end-style:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-end-width** viết tắt là: **bdiew**
```css
bdiew<vCSS> {border-inline-end-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-start** viết tắt là: **bdista**
```css
bdista<vCSS> {border-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-start-color** viết tắt là: **bdisc**
```css
bdisc<vCSS> {border-inline-start-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-start-style** viết tắt là: **bdiss**
```css
bdiss<vCSS> {border-inline-start-style:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-start-width** viết tắt là: **bdisw**
```css
bdisw<vCSS> {border-inline-start-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-style** viết tắt là: **bdistl**
```css
bdistl<vCSS> {border-inline-style:<vCSS>; } 
 ```
            
**- Thuộc tính: border-inline-width** viết tắt là: **bdinw**
```css
bdinw<vCSS> {border-inline-width:<vCSS>; } 
 ```
            
**- Thuộc tính: border-left** viết tắt là: **bdl**
```css 
bdlN {border-left:none;} 
 ```
            
**- Thuộc tính: border-left-color** viết tắt là: **bdlc**
```css
bdlc<vCSS> {border-left-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-left-style** viết tắt là: **bdls**
```css
bdls<vCSS> {border-left-style:<vCSS>; } 
 ```
            
**- Thuộc tính: border-left-width** viết tắt là: **bdlw**
```css 
bdlwT {border-left-width:thin;}
bdlwM {border-left-width:medium;}
bdlwTh {border-left-width:thick;} 
 ```
            
**- Thuộc tính: border-radius** viết tắt là: **bda**
```css
bda<vCSS> {border-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-right** viết tắt là: **bdr**
```css 
bdrN {border-right:none;} 
 ```
            
**- Thuộc tính: border-right-color** viết tắt là: **bdrc**
```css
bdrc<vCSS> {border-right-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-right-style** viết tắt là: **bdrs**
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
            
**- Thuộc tính: border-right-width** viết tắt là: **bdrw**
```css 
bdrwT {border-right-width:thin;}
bdrwM {border-right-width:medium;}
bdrwTh {border-right-width:thick;} 
 ```
            
**- Thuộc tính: border-spacing** viết tắt là: **bdsp**
```css
bdsp<vCSS> {border-spacing:<vCSS>; } 
 ```
            
**- Thuộc tính: border-start-end-radius** viết tắt là: **bdser**
```css
bdser<vCSS> {border-start-end-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-start-start-radius** viết tắt là: **bdssr**
```css
bdssr<vCSS> {border-start-start-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-style** viết tắt là: **bds**
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
            
**- Thuộc tính: border-top** viết tắt là: **bdt**
```css 
bdtN {border-top:none;} 
 ```
            
**- Thuộc tính: border-top-color** viết tắt là: **bdtc**
```css
bdtc<vCSS> {border-top-color:<vCSS>; } 
 ```
            
**- Thuộc tính: border-top-left-radius** viết tắt là: **bdtlr**
```css
bdtlr<vCSS> {border-top-left-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-top-right-radius** viết tắt là: **bdtrr**
```css
bdtrr<vCSS> {border-top-right-radius:<vCSS>; } 
 ```
            
**- Thuộc tính: border-top-style** viết tắt là: **bdts**
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
bA {bottom:auto;} 
 ```
            
**- Thuộc tính: box-decoration-break** viết tắt là: **bdbr**
```css 
bdbrC {box-decoration-break:clone;}
bdbrS {box-decoration-break:slice;} 
 ```
            
**- Thuộc tính: box-shadow** viết tắt là: **bxshd**
```css
bxshd<vCSS> {box-shadow:<vCSS>; } 
 ```
            
**- Thuộc tính: box-sizing** viết tắt là: **bxsz**
```css
bxsz<vCSS> {box-sizing:<vCSS>; } 
 ```
            
**- Thuộc tính: break-after** viết tắt là: **brka**
```css
brka<vCSS> {break-after:<vCSS>; } 
 ```
            
**- Thuộc tính: break-before** viết tắt là: **brkb**
```css
brkb<vCSS> {break-before:<vCSS>; } 
 ```
            
**- Thuộc tính: break-inside** viết tắt là: **brki**
```css
brki<vCSS> {break-inside:<vCSS>; } 
 ```
            
**- Thuộc tính: caption-side** viết tắt là: **caps**
```css
caps<vCSS> {caption-side:<vCSS>; } 
 ```
            
**- Thuộc tính: caret-color** viết tắt là: **crtc**
```css
crtc<vCSS> {caret-color:<vCSS>; } 
 ```
            
**- Thuộc tính: clear** viết tắt là: **clr**
```css
clr<vCSS> {clear:<vCSS>; } 
 ```
            
**- Thuộc tính: clip-path** viết tắt là: **clpp**
```css
clpp<vCSS> {clip-path:<vCSS>; } 
 ```
            
**- Thuộc tính: color** viết tắt là: **c**
```css 
cI {color:inherit;}
cT {color:transparent;} 
 ```
            
**- Thuộc tính: color-interpolation** viết tắt là: **cip**
```css
cip<vCSS> {color-interpolation:<vCSS>; } 
 ```
            
**- Thuộc tính: color-scheme** viết tắt là: **csch**
```css
csch<vCSS> {color-scheme:<vCSS>; } 
 ```
            
**- Thuộc tính: column-count** viết tắt là: **colc**
```css
colc<vCSS> {column-count:<vCSS>; } 
 ```
            
**- Thuộc tính: column-fill** viết tắt là: **colf**
```css
colf<vCSS> {column-fill:<vCSS>; } 
 ```
            
**- Thuộc tính: column-gap** viết tắt là: **colg**
```css
colg<vCSS> {column-gap:<vCSS>; } 
 ```
            
**- Thuộc tính: column-rule** viết tắt là: **colr**
```css
colr<vCSS> {column-rule:<vCSS>; } 
 ```
            
**- Thuộc tính: column-rule-color** viết tắt là: **colrc**
```css
colrc<vCSS> {column-rule-color:<vCSS>; } 
 ```
            
**- Thuộc tính: column-rule-style** viết tắt là: **colrs**
```css
colrs<vCSS> {column-rule-style:<vCSS>; } 
 ```
            
**- Thuộc tính: column-rule-width** viết tắt là: **colrw**
```css
colrw<vCSS> {column-rule-width:<vCSS>; } 
 ```
            
**- Thuộc tính: column-span** viết tắt là: **cols**
```css
cols<vCSS> {column-span:<vCSS>; } 
 ```
            
**- Thuộc tính: column-width** viết tắt là: **colw**
```css
colw<vCSS> {column-width:<vCSS>; } 
 ```
            
**- Thuộc tính: columns** viết tắt là: **col**
```css 
colA {columns:auto;} 
 ```
            
**- Thuộc tính: contain** viết tắt là: **cnt**
```css
cnt<vCSS> {contain:<vCSS>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-block-size** viết tắt là: **cntibs**
```css
cntibs<vCSS> {contain-intrinsic-block-size:<vCSS>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-height** viết tắt là: **cntih**
```css
cntih<vCSS> {contain-intrinsic-height:<vCSS>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-inline-size** viết tắt là: **cntiis**
```css
cntiis<vCSS> {contain-intrinsic-inline-size:<vCSS>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-size** viết tắt là: **cntis**
```css
cntis<vCSS> {contain-intrinsic-size:<vCSS>; } 
 ```
            
**- Thuộc tính: contain-intrinsic-width** viết tắt là: **ciw**
```css
ciw<vCSS> {contain-intrinsic-width:<vCSS>; } 
 ```
            
**- Thuộc tính: container** viết tắt là: **ctr**
```css
ctr<vCSS> {container:<vCSS>; } 
 ```
            
**- Thuộc tính: container-name** viết tắt là: **ctrn**
```css
ctrn<vCSS> {container-name:<vCSS>; } 
 ```
            
**- Thuộc tính: container-type** viết tắt là: **ctrt**
```css
ctrt<vCSS> {container-type:<vCSS>; } 
 ```
            
**- Thuộc tính: content** viết tắt là: **ctt**
```css
ctt<vCSS> {content:<vCSS>; } 
 ```
            
**- Thuộc tính: counter-increment** viết tắt là: **cntri**
```css
cntri<vCSS> {counter-increment:<vCSS>; } 
 ```
            
**- Thuộc tính: counter-reset** viết tắt là: **cntrr**
```css
cntrr<vCSS> {counter-reset:<vCSS>; } 
 ```
            
**- Thuộc tính: counter-set** viết tắt là: **cntrs**
```css
cntrs<vCSS> {counter-set:<vCSS>; } 
 ```
            
**- Thuộc tính: cursor** viết tắt là: **cr**
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
            
**- Thuộc tính: direction** viết tắt là: **dir**
```css
dir<vCSS> {direction:<vCSS>; } 
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
dN {display:none;} 
 ```
            
**- Thuộc tính: empty-cells** viết tắt là: **empc**
```css
empc<vCSS> {empty-cells:<vCSS>; } 
 ```
            
**- Thuộc tính: filter** viết tắt là: **flt**
```css 
fltN {filter:none;} 
 ```
            
**- Thuộc tính: flex** viết tắt là: **fx**
```css 
fxN {flex:none;}
fxI {flex:0 1 auto;}
fxA {flex:1 1 auto;} 
 ```
            
**- Thuộc tính: flex-basis** viết tắt là: **fxb**
```css 
fxbA {flex-basis:auto;} 
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
fxf<vCSS> {flex-flow:<vCSS>; } 
 ```
            
**- Thuộc tính: flex-grow** viết tắt là: **fxg**
```css
fxg<vCSS> {flex-grow:<vCSS>; } 
 ```
            
**- Thuộc tính: flex-shrink** viết tắt là: **fxs**
```css
fxs<vCSS> {flex-shrink:<vCSS>; } 
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
flN {float:none;} 
 ```
            
**- Thuộc tính: font** viết tắt là: **fn**
```css
fn<vCSS> {font:<vCSS>; } 
 ```
            
**- Thuộc tính: font-family** viết tắt là: **ff**
```css 
ffA {font-family:ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';}
ffS {font-family:ui-serif, Georgia, Cambria, 'Times New Roman', Times, serif;}
ffM {font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace;} 
 ```
            
**- Thuộc tính: font-feature-settings** viết tắt là: **fnfs**
```css
fnfs<vCSS> {font-feature-settings:<vCSS>; } 
 ```
            
**- Thuộc tính: font-kerning** viết tắt là: **fnk**
```css
fnk<vCSS> {font-kerning:<vCSS>; } 
 ```
            
**- Thuộc tính: font-language-override** viết tắt là: **fnlo**
```css
fnlo<vCSS> {font-language-override:<vCSS>; } 
 ```
            
**- Thuộc tính: font-optical-sizing** viết tắt là: **fnos**
```css
fnos<vCSS> {font-optical-sizing:<vCSS>; } 
 ```
            
**- Thuộc tính: font-palette** viết tắt là: **fnp**
```css
fnp<vCSS> {font-palette:<vCSS>; } 
 ```
            
**- Thuộc tính: font-size** viết tắt là: **fns**
```css
fns<vCSS> {font-size:<vCSS>; } 
 ```
            
**- Thuộc tính: font-size-adjust** viết tắt là: **fnsa**
```css
fnsa<vCSS> {font-size-adjust:<vCSS>; } 
 ```
            
**- Thuộc tính: font-stretch** viết tắt là: **fnstr**
```css
fnstr<vCSS> {font-stretch:<vCSS>; } 
 ```
            
**- Thuộc tính: font-style** viết tắt là: **fnsty**
```css
fnsty<vCSS> {font-style:<vCSS>; } 
 ```
            
**- Thuộc tính: font-synthesis** viết tắt là: **fnsyn**
```css
fnsyn<vCSS> {font-synthesis:<vCSS>; } 
 ```
            
**- Thuộc tính: font-synthesis-position** viết tắt là: **fnsp**
```css
fnsp<vCSS> {font-synthesis-position:<vCSS>; } 
 ```
            
**- Thuộc tính: font-synthesis-small-caps** viết tắt là: **fnssc**
```css
fnssc<vCSS> {font-synthesis-small-caps:<vCSS>; } 
 ```
            
**- Thuộc tính: font-synthesis-style** viết tắt là: **fnss**
```css
fnss<vCSS> {font-synthesis-style:<vCSS>; } 
 ```
            
**- Thuộc tính: font-synthesis-weight** viết tắt là: **fnsw**
```css
fnsw<vCSS> {font-synthesis-weight:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant** viết tắt là: **fnv**
```css
fnv<vCSS> {font-variant:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-alternates** viết tắt là: **fnva**
```css
fnva<vCSS> {font-variant-alternates:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-caps** viết tắt là: **fnvc**
```css
fnvc<vCSS> {font-variant-caps:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-east-asian** viết tắt là: **fnvea**
```css
fnvea<vCSS> {font-variant-east-asian:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-emoji** viết tắt là: **fnve**
```css
fnve<vCSS> {font-variant-emoji:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-ligatures** viết tắt là: **fnvl**
```css
fnvl<vCSS> {font-variant-ligatures:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-numeric** viết tắt là: **fnvn**
```css
fnvn<vCSS> {font-variant-numeric:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variant-position** viết tắt là: **fnvp**
```css
fnvp<vCSS> {font-variant-position:<vCSS>; } 
 ```
            
**- Thuộc tính: font-variation-settings** viết tắt là: **fnvs**
```css
fnvs<vCSS> {font-variation-settings:<vCSS>; } 
 ```
            
**- Thuộc tính: font-weight** viết tắt là: **fw**
```css
fw<vCSS> {font-weight:<vCSS>; } 
 ```
            
**- Thuộc tính: forced-color-adjust** viết tắt là: **fca**
```css
fca<vCSS> {forced-color-adjust:<vCSS>; } 
 ```
            
**- Thuộc tính: gap** viết tắt là: **gap**
```css
gap<vCSS> {gap:<vCSS>; } 
 ```
            
**- Thuộc tính: grid** viết tắt là: **g**
```css
g<vCSS> {grid:<vCSS>; } 
 ```
            
**- Thuộc tính: grid-area** viết tắt là: **ga**
```css
ga<vCSS> {grid-area:<vCSS>; } 
 ```
            
**- Thuộc tính: grid-auto-columns** viết tắt là: **gac**
```css 
gacA {grid-auto-columns:auto;}
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
garA {grid-auto-rows:auto;}
garMic {grid-auto-rows:min-content;}
garMac {grid-auto-rows:max-content;}
garMm {grid-auto-rows:minmax(0, 1fr);} 
 ```
            
**- Thuộc tính: grid-column** viết tắt là: **gc**
```css 
gcA {grid-column:auto;}
gcF {grid-column:1 / -1;} 
 ```
            
**- Thuộc tính: grid-column-end** viết tắt là: **gce**
```css 
gceA {grid-column-end:auto;} 
 ```
            
**- Thuộc tính: grid-column-start** viết tắt là: **gcs**
```css 
gcsA {grid-column-start:auto;} 
 ```
            
**- Thuộc tính: grid-row** viết tắt là: **gr**
```css 
grA {grid-row:auto;}
grF {grid-row:1 / -1;} 
 ```
            
**- Thuộc tính: grid-row-end** viết tắt là: **gre**
```css 
greA {grid-row-end:auto;} 
 ```
            
**- Thuộc tính: grid-row-start** viết tắt là: **grs**
```css 
grsA {grid-row-start:auto;} 
 ```
            
**- Thuộc tính: grid-template** viết tắt là: **gt**
```css
gt<vCSS> {grid-template:<vCSS>; } 
 ```
            
**- Thuộc tính: grid-template-areas** viết tắt là: **gta**
```css
gta<vCSS> {grid-template-areas:<vCSS>; } 
 ```
            
**- Thuộc tính: grid-template-columns** viết tắt là: **gtc**
```css 
gtcN {grid-template-columns:none;}
gtcS {grid-template-columns:subgrid;} 
 ```
            
**- Thuộc tính: grid-template-rows** viết tắt là: **gtr**
```css 
gtrN {grid-template-rows:none;}
gtrS {grid-template-rows:subgrid;} 
 ```
            
**- Thuộc tính: hanging-punctuation** viết tắt là: **hp**
```css
hp<vCSS> {hanging-punctuation:<vCSS>; } 
 ```
            
**- Thuộc tính: height** viết tắt là: **h**
```css 
hA {height:auto;}
hMic {height:min-content;}
hMac {height:max-content;}
hFc {height:fit-content;} 
 ```
            
**- Thuộc tính: hyphenate-character** viết tắt là: **hc**
```css
hc<vCSS> {hyphenate-character:<vCSS>; } 
 ```
            
**- Thuộc tính: hyphenate-limit-chars** viết tắt là: **hlc**
```css
hlc<vCSS> {hyphenate-limit-chars:<vCSS>; } 
 ```
            
**- Thuộc tính: hyphens** viết tắt là: **hyp**
```css 
hypA {hyphens:auto;}
hypN {hyphens:none;}
hypM {hyphens:manual;} 
 ```
            
**- Thuộc tính: image-orientation** viết tắt là: **imgo**
```css
imgo<vCSS> {image-orientation:<vCSS>; } 
 ```
            
**- Thuộc tính: image-rendering** viết tắt là: **imgr**
```css
imgr<vCSS> {image-rendering:<vCSS>; } 
 ```
            
**- Thuộc tính: inline-size** viết tắt là: **ins**
```css
ins<vCSS> {inline-size:<vCSS>; } 
 ```
            
**- Thuộc tính: inset** viết tắt là: **i**
```css
i<vCSS> {inset:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-block** viết tắt là: **iblk**
```css
iblk<vCSS> {inset-block:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-block-end** viết tắt là: **ibe**
```css
ibe<vCSS> {inset-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-block-start** viết tắt là: **ibsta**
```css
ibsta<vCSS> {inset-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-inline** viết tắt là: **ii**
```css
ii<vCSS> {inset-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-inline-end** viết tắt là: **iie**
```css
iie<vCSS> {inset-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: inset-inline-start** viết tắt là: **iis**
```css
iis<vCSS> {inset-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: isolation** viết tắt là: **is**
```css 
isI {isolation:isolate;}
isA {isolation:auto;} 
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
            
**- Thuộc tính: left** viết tắt là: **l**
```css
l<vCSS> {left:<vCSS>; } 
 ```
            
**- Thuộc tính: letter-spacing** viết tắt là: **lts**
```css 
ltsN {letter-spacing:normal;} 
 ```
            
**- Thuộc tính: line-break** viết tắt là: **lbrk**
```css
lbrk<vCSS> {line-break:<vCSS>; } 
 ```
            
**- Thuộc tính: line-height** viết tắt là: **lh**
```css
lh<vCSS> {line-height:<vCSS>; } 
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
lsi<vCSS> {list-style-image:<vCSS>; } 
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
m<vCSS> {margin:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-block** viết tắt là: **mblk**
```css
mblk<vCSS> {margin-block:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-block-end** viết tắt là: **mbe**
```css
mbe<vCSS> {margin-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-block-start** viết tắt là: **mbsta**
```css
mbsta<vCSS> {margin-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-bottom** viết tắt là: **mb**
```css 
mbA {margin-bottom:auto;} 
 ```
            
**- Thuộc tính: margin-inline** viết tắt là: **min**
```css
min<vCSS> {margin-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-inline-end** viết tắt là: **mie**
```css
mie<vCSS> {margin-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-inline-start** viết tắt là: **mista**
```css
mista<vCSS> {margin-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: margin-left** viết tắt là: **ml**
```css 
mlA {margin-left:auto;} 
 ```
            
**- Thuộc tính: margin-right** viết tắt là: **mr**
```css 
mrA {margin-right:auto;} 
 ```
            
**- Thuộc tính: margin-top** viết tắt là: **mt**
```css 
mtA {margin-top:auto;} 
 ```
            
**- Thuộc tính: mask** viết tắt là: **msk**
```css
msk<vCSS> {mask:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border** viết tắt là: **mskb**
```css
mskb<vCSS> {mask-border:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-mode** viết tắt là: **mskbm**
```css
mskbm<vCSS> {mask-border-mode:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-outset** viết tắt là: **mskbo**
```css
mskbo<vCSS> {mask-border-outset:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-repeat** viết tắt là: **mskbr**
```css
mskbr<vCSS> {mask-border-repeat:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-slice** viết tắt là: **mskbs**
```css
mskbs<vCSS> {mask-border-slice:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-source** viết tắt là: **mskbsrc**
```css
mskbsrc<vCSS> {mask-border-source:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-border-width** viết tắt là: **mskbw**
```css
mskbw<vCSS> {mask-border-width:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-clip** viết tắt là: **mskc**
```css
mskc<vCSS> {mask-clip:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-composite** viết tắt là: **mskcp**
```css
mskcp<vCSS> {mask-composite:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-image** viết tắt là: **mski**
```css
mski<vCSS> {mask-image:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-mode** viết tắt là: **mskm**
```css
mskm<vCSS> {mask-mode:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-origin** viết tắt là: **msko**
```css
msko<vCSS> {mask-origin:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-position** viết tắt là: **mskp**
```css
mskp<vCSS> {mask-position:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-repeat** viết tắt là: **mskr**
```css
mskr<vCSS> {mask-repeat:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-size** viết tắt là: **msks**
```css
msks<vCSS> {mask-size:<vCSS>; } 
 ```
            
**- Thuộc tính: mask-type** viết tắt là: **mskt**
```css
mskt<vCSS> {mask-type:<vCSS>; } 
 ```
            
**- Thuộc tính: math-depth** viết tắt là: **mtd**
```css
mtd<vCSS> {math-depth:<vCSS>; } 
 ```
            
**- Thuộc tính: math-style** viết tắt là: **mts**
```css
mts<vCSS> {math-style:<vCSS>; } 
 ```
            
**- Thuộc tính: max-block-size** viết tắt là: **mbs**
```css
mbs<vCSS> {max-block-size:<vCSS>; } 
 ```
            
**- Thuộc tính: max-height** viết tắt là: **mh**
```css
mh<vCSS> {max-height:<vCSS>; } 
 ```
            
**- Thuộc tính: max-inline-size** viết tắt là: **mis**
```css
mis<vCSS> {max-inline-size:<vCSS>; } 
 ```
            
**- Thuộc tính: max-width** viết tắt là: **mw**
```css
mw<vCSS> {max-width:<vCSS>; } 
 ```
            
**- Thuộc tính: min-block-size** viết tắt là: **mibs**
```css
mibs<vCSS> {min-block-size:<vCSS>; } 
 ```
            
**- Thuộc tính: min-height** viết tắt là: **mih**
```css 
mihA {min-height:auto;}
mihF {min-height:100%;}
mihMic {min-height:min-content;}
mihMac {min-height:max-content;}
mihFc {min-height:fit-content;} 
 ```
            
**- Thuộc tính: min-inline-size** viết tắt là: **misz**
```css
misz<vCSS> {min-inline-size:<vCSS>; } 
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
ofN {object-fit:none;}
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
ofs<vCSS> {offset:<vCSS>; } 
 ```
            
**- Thuộc tính: offset-anchor** viết tắt là: **ofa**
```css
ofa<vCSS> {offset-anchor:<vCSS>; } 
 ```
            
**- Thuộc tính: offset-distance** viết tắt là: **ofd**
```css
ofd<vCSS> {offset-distance:<vCSS>; } 
 ```
            
**- Thuộc tính: offset-path** viết tắt là: **ofp**
```css
ofp<vCSS> {offset-path:<vCSS>; } 
 ```
            
**- Thuộc tính: offset-position** viết tắt là: **ofpo**
```css
ofpo<vCSS> {offset-position:<vCSS>; } 
 ```
            
**- Thuộc tính: offset-rotate** viết tắt là: **ofr**
```css
ofr<vCSS> {offset-rotate:<vCSS>; } 
 ```
            
**- Thuộc tính: opacity** viết tắt là: **opc**
```css
opc<vCSS> {opacity:<vCSS>; } 
 ```
            
**- Thuộc tính: order** viết tắt là: **ord**
```css
ord<vCSS> {order:<vCSS>; } 
 ```
            
**- Thuộc tính: orphans** viết tắt là: **orp**
```css
orp<vCSS> {orphans:<vCSS>; } 
 ```
            
**- Thuộc tính: outline** viết tắt là: **oli**
```css
oli<vCSS> {outline:<vCSS>; } 
 ```
            
**- Thuộc tính: outline-color** viết tắt là: **olc**
```css 
olcI {outline-color:inherit;}
olcC {outline-color:currentColor;}
olcT {outline-color:transparent;} 
 ```
            
**- Thuộc tính: outline-offset** viết tắt là: **olo**
```css
olo<vCSS> {outline-offset:<vCSS>; } 
 ```
            
**- Thuộc tính: outline-style** viết tắt là: **ols**
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
            
**- Thuộc tính: outline-width** viết tắt là: **olw**
```css 
olwT {outline-width:thin;}
olwM {outline-width:medium;}
olwTh {outline-width:thick;} 
 ```
            
**- Thuộc tính: overflow** viết tắt là: **ofl**
```css
ofl<vCSS> {overflow:<vCSS>; } 
 ```
            
**- Thuộc tính: overflow-anchor** viết tắt là: **ofla**
```css
ofla<vCSS> {overflow-anchor:<vCSS>; } 
 ```
            
**- Thuộc tính: overflow-block** viết tắt là: **oflb**
```css
oflb<vCSS> {overflow-block:<vCSS>; } 
 ```
            
**- Thuộc tính: overflow-clip-margin** viết tắt là: **oflcm**
```css
oflcm<vCSS> {overflow-clip-margin:<vCSS>; } 
 ```
            
**- Thuộc tính: overflow-inline** viết tắt là: **ofli**
```css
ofli<vCSS> {overflow-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: overflow-wrap** viết tắt là: **oflw**
```css 
oflwA {overflow-wrap:auto;}
oflwH {overflow-wrap:hidden;}
oflwC {overflow-wrap:clip;}
oflwV {overflow-wrap:visible;}
oflwS {overflow-wrap:scroll;} 
 ```
            
**- Thuộc tính: overflow-x** viết tắt là: **oflx**
```css 
oflxA {overflow-x:auto;}
oflxH {overflow-x:hidden;}
oflxC {overflow-x:clip;}
oflxV {overflow-x:visible;}
oflxS {overflow-x:scroll;} 
 ```
            
**- Thuộc tính: overflow-y** viết tắt là: **ofly**
```css 
oflyA {overflow-y:auto;}
oflyH {overflow-y:hidden;}
oflyC {overflow-y:clip;}
oflyV {overflow-y:visible;}
oflyS {overflow-y:scroll;} 
 ```
            
**- Thuộc tính: overscroll-behavior** viết tắt là: **osrbh**
```css 
osrbhA {overscroll-behavior:auto;}
osrbhC {overscroll-behavior:contain;}
osrbhN {overscroll-behavior:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-block** viết tắt là: **osrbb**
```css 
osrbbA {overscroll-behavior-block:auto;}
osrbbC {overscroll-behavior-block:contain;}
osrbbN {overscroll-behavior-block:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-inline** viết tắt là: **osrbi**
```css 
osrbiA {overscroll-behavior-inline:auto;}
osrbiC {overscroll-behavior-inline:contain;}
osrbiN {overscroll-behavior-inline:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-x** viết tắt là: **osrbx**
```css 
osrbxA {overscroll-behavior-x:auto;}
osrbxC {overscroll-behavior-x:contain;}
osrbxN {overscroll-behavior-x:none;} 
 ```
            
**- Thuộc tính: overscroll-behavior-y** viết tắt là: **orsby**
```css 
orsbyA {overscroll-behavior-y:auto;}
orsbyC {overscroll-behavior-y:contain;}
orsbyN {overscroll-behavior-y:none;} 
 ```
            
**- Thuộc tính: padding** viết tắt là: **p**
```css
p<vCSS> {padding:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-block** viết tắt là: **pblk**
```css
pblk<vCSS> {padding-block:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-block-end** viết tắt là: **pbe**
```css
pbe<vCSS> {padding-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-block-start** viết tắt là: **pbs**
```css
pbs<vCSS> {padding-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-bottom** viết tắt là: **pb**
```css 
pbA {padding-bottom:auto;} 
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
pie<vCSS> {padding-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-inline-start** viết tắt là: **pis**
```css
pis<vCSS> {padding-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: padding-left** viết tắt là: **pl**
```css 
plA {padding-left:auto;} 
 ```
            
**- Thuộc tính: padding-right** viết tắt là: **pr**
```css 
prA {padding-right:auto;} 
 ```
            
**- Thuộc tính: padding-top** viết tắt là: **pt**
```css 
ptA {padding-top:auto;} 
 ```
            
**- Thuộc tính: page** viết tắt là: **pg**
```css
pg<vCSS> {page:<vCSS>; } 
 ```
            
**- Thuộc tính: page-break-after** viết tắt là: **pgba**
```css
pgba<vCSS> {page-break-after:<vCSS>; } 
 ```
            
**- Thuộc tính: page-break-before** viết tắt là: **pgbb**
```css
pgbb<vCSS> {page-break-before:<vCSS>; } 
 ```
            
**- Thuộc tính: page-break-inside** viết tắt là: **pgbi**
```css
pgbi<vCSS> {page-break-inside:<vCSS>; } 
 ```
            
**- Thuộc tính: paint-order** viết tắt là: **pto**
```css
pto<vCSS> {paint-order:<vCSS>; } 
 ```
            
**- Thuộc tính: perspective** viết tắt là: **psp**
```css
psp<vCSS> {perspective:<vCSS>; } 
 ```
            
**- Thuộc tính: perspective-origin** viết tắt là: **pso**
```css
pso<vCSS> {perspective-origin:<vCSS>; } 
 ```
            
**- Thuộc tính: place-content** viết tắt là: **plc**
```css
plc<vCSS> {place-content:<vCSS>; } 
 ```
            
**- Thuộc tính: place-items** viết tắt là: **pli**
```css
pli<vCSS> {place-items:<vCSS>; } 
 ```
            
**- Thuộc tính: place-self** viết tắt là: **pls**
```css
pls<vCSS> {place-self:<vCSS>; } 
 ```
            
**- Thuộc tính: pointer-events** viết tắt là: **pe**
```css 
peA {pointer-events:auto;}
peN {pointer-events:none;} 
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
prca<vCSS> {print-color-adjust:<vCSS>; } 
 ```
            
**- Thuộc tính: quotes** viết tắt là: **qts**
```css
qts<vCSS> {quotes:<vCSS>; } 
 ```
            
**- Thuộc tính: resize** viết tắt là: **rsz**
```css 
rszN {resize:none;}
rszB {resize:both;}
rszH {resize:horizontal;}
rszV {resize:vertical;} 
 ```
            
**- Thuộc tính: right** viết tắt là: **r**
```css
r<vCSS> {right:<vCSS>; } 
 ```
            
**- Thuộc tính: rotate** viết tắt là: **rot**
```css
rot<vCSS> {rotate:<vCSS>; } 
 ```
            
**- Thuộc tính: row-gap** viết tắt là: **rgap**
```css
rgap<vCSS> {row-gap:<vCSS>; } 
 ```
            
**- Thuộc tính: ruby-position** viết tắt là: **rbp**
```css
rbp<vCSS> {ruby-position:<vCSS>; } 
 ```
            
**- Thuộc tính: scale** viết tắt là: **s**
```css
s<vCSS> {scale:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-behavior** viết tắt là: **scrb**
```css
scrb<vCSS> {scroll-behavior:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin** viết tắt là: **scrm**
```css
scrm<vCSS> {scroll-margin:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-block** viết tắt là: **scrmblk**
```css
scrmblk<vCSS> {scroll-margin-block:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-block-end** viết tắt là: **scrmbe**
```css
scrmbe<vCSS> {scroll-margin-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-block-start** viết tắt là: **scrmbs**
```css
scrmbs<vCSS> {scroll-margin-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-bottom** viết tắt là: **scrmb**
```css
scrmb<vCSS> {scroll-margin-bottom:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline** viết tắt là: **scrmi**
```css
scrmi<vCSS> {scroll-margin-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline-end** viết tắt là: **scrmie**
```css
scrmie<vCSS> {scroll-margin-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-inline-start** viết tắt là: **scrmis**
```css
scrmis<vCSS> {scroll-margin-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-left** viết tắt là: **scrml**
```css
scrml<vCSS> {scroll-margin-left:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-right** viết tắt là: **scrmr**
```css
scrmr<vCSS> {scroll-margin-right:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-margin-top** viết tắt là: **scrmt**
```css
scrmt<vCSS> {scroll-margin-top:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding** viết tắt là: **scrp**
```css
scrp<vCSS> {scroll-padding:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-block** viết tắt là: **scrpblk**
```css
scrpblk<vCSS> {scroll-padding-block:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-block-end** viết tắt là: **srcpbe**
```css
srcpbe<vCSS> {scroll-padding-block-end:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-block-start** viết tắt là: **scrpbs**
```css
scrpbs<vCSS> {scroll-padding-block-start:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-bottom** viết tắt là: **scrpb**
```css
scrpb<vCSS> {scroll-padding-bottom:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline** viết tắt là: **scrpi**
```css
scrpi<vCSS> {scroll-padding-inline:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline-end** viết tắt là: **scrpie**
```css
scrpie<vCSS> {scroll-padding-inline-end:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-inline-start** viết tắt là: **scrpis**
```css
scrpis<vCSS> {scroll-padding-inline-start:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-left** viết tắt là: **scrpl**
```css
scrpl<vCSS> {scroll-padding-left:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-right** viết tắt là: **scrpr**
```css
scrpr<vCSS> {scroll-padding-right:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-padding-top** viết tắt là: **scrpt**
```css
scrpt<vCSS> {scroll-padding-top:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-snap-align** viết tắt là: **scrsa**
```css
scrsa<vCSS> {scroll-snap-align:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-snap-stop** viết tắt là: **scrss**
```css
scrss<vCSS> {scroll-snap-stop:<vCSS>; } 
 ```
            
**- Thuộc tính: scroll-snap-type** viết tắt là: **scrst**
```css
scrst<vCSS> {scroll-snap-type:<vCSS>; } 
 ```
            
**- Thuộc tính: scrollbar-color** viết tắt là: **sbc**
```css
sbc<vCSS> {scrollbar-color:<vCSS>; } 
 ```
            
**- Thuộc tính: scrollbar-gutter** viết tắt là: **sbg**
```css
sbg<vCSS> {scrollbar-gutter:<vCSS>; } 
 ```
            
**- Thuộc tính: scrollbar-width** viết tắt là: **sbw**
```css
sbw<vCSS> {scrollbar-width:<vCSS>; } 
 ```
            
**- Thuộc tính: tab-size** viết tắt là: **tbs**
```css
tbs<vCSS> {tab-size:<vCSS>; } 
 ```
            
**- Thuộc tính: shape-image-threshold** viết tắt là: **shit**
```css
shit<vCSS> {shape-image-threshold:<vCSS>; } 
 ```
            
**- Thuộc tính: shape-margin** viết tắt là: **shm**
```css
shm<vCSS> {shape-margin:<vCSS>; } 
 ```
            
**- Thuộc tính: shape-outside** viết tắt là: **sho**
```css
sho<vCSS> {shape-outside:<vCSS>; } 
 ```
            
**- Thuộc tính: transform** viết tắt là: **tra**
```css
tra<vCSS> {transform:<vCSS>; } 
 ```
            
**- Thuộc tính: transform-box** viết tắt là: **trab**
```css
trab<vCSS> {transform-box:<vCSS>; } 
 ```
            
**- Thuộc tính: transform-origin** viết tắt là: **trao**
```css
trao<vCSS> {transform-origin:<vCSS>; } 
 ```
            
**- Thuộc tính: transform-style** viết tắt là: **tras**
```css
tras<vCSS> {transform-style:<vCSS>; } 
 ```
            
**- Thuộc tính: transition** viết tắt là: **tran**
```css
tran<vCSS> {transition:<vCSS>; } 
 ```
            
**- Thuộc tính: transition-behavior** viết tắt là: **tranb**
```css
tranb<vCSS> {transition-behavior:<vCSS>; } 
 ```
            
**- Thuộc tính: transition-delay** viết tắt là: **trand**
```css
trand<vCSS> {transition-delay:<vCSS>; } 
 ```
            
**- Thuộc tính: transition-duration** viết tắt là: **trandur**
```css
trandur<vCSS> {transition-duration:<vCSS>; } 
 ```
            
**- Thuộc tính: transition-property** viết tắt là: **tranp**
```css
tranp<vCSS> {transition-property:<vCSS>; } 
 ```
            
**- Thuộc tính: transition-timing-function** viết tắt là: **trantf**
```css
trantf<vCSS> {transition-timing-function:<vCSS>; } 
 ```
            
**- Thuộc tính: table-layout** viết tắt là: **tbl**
```css
tbl<vCSS> {table-layout:<vCSS>; } 
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
talA {text-align-last:auto;}
talS {text-align-last:start;}
talE {text-align-last:end;}
talL {text-align-last:left;}
talR {text-align-last:right;}
talC {text-align-last:center;}
talJ {text-align-last:justify;} 
 ```
            
**- Thuộc tính: text-combine-upright** viết tắt là: **tcu**
```css
tcu<vCSS> {text-combine-upright:<vCSS>; } 
 ```
            
**- Thuộc tính: text-decoration** viết tắt là: **td**
```css 
tdN {text-decoration:none;}
tdU {text-decoration:underline;} 
 ```
            
**- Thuộc tính: text-decoration-color** viết tắt là: **tdc**
```css
tdc<vCSS> {text-decoration-color:<vCSS>; } 
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
tdsi<vCSS> {text-decoration-skip-ink:<vCSS>; } 
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
teph<vCSS> {text-emphasis:<vCSS>; } 
 ```
            
**- Thuộc tính: text-emphasis-color** viết tắt là: **tec**
```css
tec<vCSS> {text-emphasis-color:<vCSS>; } 
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
tesN {text-emphasis-style:none;} 
 ```
            
**- Thuộc tính: text-indent** viết tắt là: **ti**
```css
ti<vCSS> {text-indent:<vCSS>; } 
 ```
            
**- Thuộc tính: text-justify** viết tắt là: **tj**
```css 
tjN {text-justify:none;}
tjA {text-justify:auto;}
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
trdA {text-rendering:auto;}
trdOp {text-rendering:optimizeSpeed;}
trdOl {text-rendering:optimizeLegibility;}
trdG {text-rendering:geometricPrecision;} 
 ```
            
**- Thuộc tính: text-shadow** viết tắt là: **tsh**
```css
tsh<vCSS> {text-shadow:<vCSS>; } 
 ```
            
**- Thuộc tính: text-transform** viết tắt là: **ttr**
```css 
ttrN {text-transform:none;}
ttrC {text-transform:capitalize;}
ttrU {text-transform:uppercase;}
ttrL {text-transform:lowercase;}
ttrFw {text-transform:full-width;}
ttrFsk {text-transform:full-size-kana;} 
 ```
            
**- Thuộc tính: text-underline-offset** viết tắt là: **tuo**
```css
tuo<vCSS> {text-underline-offset:<vCSS>; } 
 ```
            
**- Thuộc tính: text-underline-position** viết tắt là: **tup**
```css 
tupA {text-underline-position:auto;}
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
t<vCSS> {top:<vCSS>; } 
 ```
            
**- Thuộc tính: touch-action** viết tắt là: **toa**
```css 
toaA {touch-action:auto;}
toaN {touch-action:none;}
toaP {touch-action:pan-x;}
toaPy {touch-action:pan-y;}
toaPm {touch-action:pan-x pan-y;}
toaPi {touch-action:pinch-zoom;} 
 ```
            
**- Thuộc tính: translate** viết tắt là: **trl**
```css
trl<vCSS> {translate:<vCSS>; } 
 ```
            
**- Thuộc tính: unicode-bidi** viết tắt là: **unib**
```css
unib<vCSS> {unicode-bidi:<vCSS>; } 
 ```
            
**- Thuộc tính: user-select** viết tắt là: **us**
```css 
usA {user-select:auto;}
usN {user-select:none;}
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
vH {visibility:hidden;}
vC {visibility:collapse;} 
 ```
            
**- Thuộc tính: white-space** viết tắt là: **ws**
```css
ws<vCSS> {white-space:<vCSS>; } 
 ```
            
**- Thuộc tính: white-space-collapse** viết tắt là: **wsc**
```css
wsc<vCSS> {white-space-collapse:<vCSS>; } 
 ```
            
**- Thuộc tính: widows** viết tắt là: **wd**
```css
wd<vCSS> {widows:<vCSS>; } 
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
wcA {will-change:auto;}
wcSp {will-change:scroll-position;}
wcC {will-change:contents;}
wcT {will-change:transform;} 
 ```
            
**- Thuộc tính: word-break** viết tắt là: **wrb**
```css
wrb<vCSS> {word-break:<vCSS>; } 
 ```
            
**- Thuộc tính: word-spacing** viết tắt là: **wrs**
```css
wrs<vCSS> {word-spacing:<vCSS>; } 
 ```
            
**- Thuộc tính: writing-mode** viết tắt là: **wrtm**
```css
wrtm<vCSS> {writing-mode:<vCSS>; } 
 ```
            
**- Thuộc tính: z-index** viết tắt là: **z**
```css
z<vCSS> {z-index:<vCSS>; } 
 ```
            
**- Thuộc tính: zoom** viết tắt là: **zo**
```css
zo<vCSS> {zoom:<vCSS>; } 
 ```
            
**- Thuộc tính: margin căn đều theo trái phải** viết tắt là: **mx**
```css
mx<vCSS>{margin-left:<vCSS>; margin-right:<vCSS>;}
 ```
**- Thuộc tính: margin căn đều theo trên dưới** viết tắt là: **my**
```css
mx<vCSS>{margin-top:<vCSS>; margin-bottom:<vCSS>;}
 ```
**- Thuộc tính: padding căn đều theo trái phải** viết tắt là: **px**
```css
px<vCSS>{padding-left:<vCSS>; padding-right:<vCSS>;}
 ```
**- Thuộc tính: padding căn đều theo trái phải** viết tắt là: **py**
```css
py<vCSS>{padding-top:<vCSS>; padding-bottom:<vCSS>;}
 ```
