
((dk)=>{
  var _user;
  var _domain=location.host.split(".").slice(-2).join(".");
  window.dk=new SDK();
  function SDK(url,method,$token){
    var $dk=this;
    var _method=method||"POST";
    var _url=url||"https://dw.beta.fwkui.com";
    var _token="dk_token",_token_out=2*24*60*60*1000;
    var __token=$token;
    $dk.init=(url,method)=>{
      return new SDK(url,method);
    }
    $dk.Unit=Unit;
    $dk.User=User;
    $dk.App=App;
    $dk.Resource=Resource;
    $dk.Doc=Doc;
    $dk.ResourceFile=ResourceFile;
    $dk.get=getDataForm;
    $dk.set=setDataForm;
    $dk.post=post;
    $dk.cookie=cookie;
    $dk.token=token;
    $dk.uid=()=>{
      return Math.random().toString(36).slice(2,8)+Date.now().toString(36);
    }
    function cookie(key, value, expire){
      var ckey = '__cookie_data__';
      var keys = key;
      if(typeof keys=="string"){
        keys=keys.split('.');
      }
      key = keys.shift();
      var data = localStorage.getItem(ckey) || {};
      if(typeof data == 'string'){
        if(data.substr(0,1) == '{' && data.substr(data.length-1)=='}'){
          data = JSON.parse(data);
        }else{
          data = {};
        }
      }
      if(typeof value == 'undefined'){
        var d=(data[key]||[]);
        if(!d.length){
          return;
        }
        if(d[1]&&d[2]){
          if(d[1]<Date.now()){
            return;
          }
        }
        if(!keys.length){
          return d[0];
        }
        var rs;
        try{
          eval(`rs=d[0].${keys.join(".")}`);
          return rs;
        }catch(e){
          return rs;
        }
      }else{
        data[key] = [value];
        if(typeof expire == 'number'){
          if(expire == 0){
            data[key][1] = Date.now();
          }else if(expire > 0){
            data[key][1] = Date.now()+expire;
            data[key][2] = expire;
          }
        }
        localStorage.setItem(ckey, JSON.stringify(data));
      }
    }
    async function token(value,expire){
      value=value||((await cookieStore.get(_token))||{}).value;
      if(value){
        await cookieStore.set({
          name: _token,
          value,
          expires: typeof expire=="undefined"?Date.now()+_token_out:expire,
          domain: _domain
        })
      }
      return value;
    }
    function post (url,params,callback,callbackerror,sync){
      params=params||{};
      if(typeof params=="string"){
        eval(`params=${params};`);
      }
      if(typeof params=="object" && typeof params.deleted=="undefined"){
        params.deleted=dk.cookie("deleted")||0;
      }
      typeof params!="string"&&(params=JSON.stringify(params));
      const req = new XMLHttpRequest();
      return new Promise(async (resolve)=>{
        req.addEventListener("load", async(event)=>{
          var rs=JSON.parse(event.target.response);
          if(url.includes("os/login") && rs.data && rs.status_code==200){
            $dk.token(rs.data[_token]);
          }else if(url.includes("os/out")&&!url.includes("os/out_all")){
            $dk.token("",0);
          }
          typeof callback=="function"&&callback(rs);
          resolve(rs);
        });
        req.open(_method, url,sync);
        req.setRequestHeader("Content-Type", "application/json");
        var t = __token || (await $dk.token());
        //console.log("url,t",url,t)
        if(t){
          req.setRequestHeader("token", t);
        }
        if(params.app){
          req.setRequestHeader("id_app", params.app);
        }
        req.send(params);
      })
    }
    function getDataForm(el){
      if(el){
        if(typeof el=="string"){
          el=document.querySelector(el);
        }
      }
      var p = {};
      var __CKE = [];
      if(Array.isArray(window.cke)) __CKE = window.cke;
      if(window.CKEDITOR) __CKE = CKEDITOR.instances;
      el.querySelectorAll('*[name]').forEach(a=>{
        if(!a.name){return}
        if(a.code && typeof a.code.getValue=="function"){
          return p[a.name] = a.code.getValue();
        }
        if(a.id && __CKE[a.id]){
          p[a.name] = __CKE[a.id].getData();
          return;
        }
        if(a.type === 'checkbox'){
          var val = a.checked?1:0;
          if(typeof p[a.name]!="undefined" && !Array.isArray(p[a.name])){
            p[a.name]=[p[a.name]];
          }
          if(Array.isArray(p[a.name])){
            p[a.name].push(val);
          }else{          
            p[a.name] = val;
          }
        }else if(a.type === 'radio'){
          var val = a.value||'';
          if(!p[a.name] && el.querySelectorAll(`[name=${a.name}]`).length>1){
            p[a.name]=[];
          }
          if(Array.isArray(p[a.name])){
            p[a.name].push(val);
          }else{
            p[a.name]=val;
          }
        }else{
          if(typeof p[a.name]!="undefined" && !Array.isArray(p[a.name])){
            p[a.name]=[p[a.name]];
          }
          if(Array.isArray(p[a.name])){
            p[a.name].push(a.value || '');
          }else{          
            p[a.name] = a.value || '';
          }
        }
      });
      return p;
    }
    function setDataForm(el, data, callback){
      if(el){
        if(typeof el=="string"){
          el=document.querySelector(el);
        }
      }
      data || (data={});
      var p = {};
      var __CKE = [];
      if(Array.isArray(window.cke)) __CKE = window.cke;
      if(window.CKEDITOR) __CKE = CKEDITOR.instances;
      Object.keys(data).forEach(k=>{
        try{
          var els=el.querySelectorAll(`[name="${k}"]`);
          if(els.length){
            if(Array.isArray(data[k])){
              data[k].forEach((v,i)=>{
                setVal(els[i],v);
              })
            }else{
              setVal(els[0],data[k]);
            }
          }
        }catch(e){console.log("setDataForm err",e)}
      });
      function setVal(a,val){
        if(!a){return}
        if(a.code && typeof a.code.setValue=="function"){
          a.code.setValue(data[a.name]);
        }else if(a.id && __CKE[a.id]){
          __CKE[a.id].setData(data[a.name]);
        }else if(a.type=="checkbox"){
          if(!a.getAttribute("value")){
            a.setAttribute("value",1)
          }
          a.checked=(a.value==val?true:false);
        }else if(a.type=="radio"){
          a.checked=(a.value==val);
        }else{
          a.value=val;
        }
      }
    }
    function Unit(){
      var self=this;
      self.get=(zid,callback)=>{
        return $dk.post(_url+"/company/get",{zid},callback);
      }
      self.gets=(filter,callback)=>{
        return $dk.post(_url+"/company/gets",{filter},callback);
      }
      self.add=(data,callback)=>{
        return $dk.post(_url+"/company/add",{data},callback);
      }
      self.edit=(data,callback)=>{
        return $dk.post(_url+"/company/edit",{data},callback);
      }
      self.acl=(zid,data,callback)=>{
        return $dk.post(_url+"/company/acl",{zid,data},callback);
      }
      self.groupGet=(company,zid,callback)=>{
        return $dk.post(_url+"/group/get",{company,zid},callback);
      }
      self.groupGets=(company,filter,callback)=>{
        return $dk.post(_url+"/group/gets",{company,filter},callback);
      }
      self.groupAdd=(company,data,callback)=>{
        if(data.zid){
          return $dk.post(_url+"/group/edit",{company,zid: data.zid,data},callback)
        }else{
          return $dk.post(_url+"/group/add",{company,data},callback)
        }
      }
      self.groupDel=(company,zid,callback)=>{
        return $dk.post(_url+"/group/del",{company,zid},callback);
      }
      self.groupAddUser=(company,zid,users,callback)=>{
        return $dk.post(_url+"/group/add-user",{company,zid,users},callback);
      }
      self.groupDelUser=(company,zid,users,callback)=>{
        return $dk.post(_url+"/group/del-user",{company,zid,users},callback);
      }
      self.byTax=(taxCode,callback)=>{
        return new Promise(async rls=>{
          await fetch("https://api.vietqr.io/v2/business/"+taxCode).then(r=>r.json()).then(r=>{
            rls(r);
            typeof callback=="function" && callback(r);
          })
        })
      }
    }
    function App(company){
      var self=this;
      //self.company=company;
      self.get=(zid,callback)=>{
        return $dk.post(_url+"/app/get",{company,zid},callback);
      }
      self.gets=(filter,callback)=>{
        return $dk.post(_url+"/app/gets",{company,filter},callback);
      }
      self.add=(data,callback)=>{
        return $dk.post(_url+"/app/add",{company,data},callback);
      }
      self.edit=(data,callback)=>{
        return $dk.post(_url+"/app/edit",{company,data},callback);
      }
      self.setACL=(zid,data,callback)=>{
        return $dk.post(_url+"/app/acl",{company,zid, data},callback);
      }
      self.addDomain=(app,domain,callback)=>{
        return $dk.post(_url+"/domain/add",{company,app,domain},callback);
      }
      self.delDomain=(domain,callback)=>{
        return $dk.post(_url+"/domain/del",{company,domain},callback);
      }
      self.getDomain=(filter,callback)=>{
        return $dk.post(_url+"/domain/get",{company,filter},callback);
      }
      self.roleAdd=(app,data,callback)=>{
        if(data.zid){
          return $dk.post(_url+"/role/edit",{company,data,app},callback)
        }else{
          return $dk.post(_url+"/role/add",{company,data,app},callback)
        }
      }
      self.roleDel=(app,zid,callback)=>{
        return $dk.post(_url+"/role/del",{company,app,zid},callback);
      }
      self.roleAddUser=(app,zid,users_groups,callback)=>{
        return $dk.post(_url+"/role/add-user",{company,app,zid,users_groups},callback);
      }
      self.roleDelUser=(app,zid,users_groups,callback)=>{
        return $dk.post(_url+"/role/del-user",{company,app,zid,users_groups},callback);
      }
      self.roleGet=(app,zid,callback)=>{
        return $dk.post(_url+"/role/get",{company,app,zid},callback);
      }
      self.roleGets=(app,filter,callback)=>{
        return $dk.post(_url+"/role/gets",{company,app,filter},callback);
      }
    }
    function Resource(app){
      var self=this;
      //self.company=company;
      self.get=(zid,callback)=>{
        return $dk.post(_url+"/resource/get",{app,zid},callback);
      }
      self.gets=(filter,callback)=>{
        return $dk.post(_url+"/resource/gets",{app,filter},callback);
      }
      self.add=(data,callback)=>{
        return $dk.post(_url+"/resource/add",{app,data},callback);
      }
      self.edit=(data,callback)=>{
        return $dk.post(_url+"/resource/edit",{app,data},callback);
      }
      self.setACL=(zid,data,callback)=>{
        return $dk.post(_url+"/resource/acl",{zid,app,data},callback);
      }
    }
    function ResourceFile(app){
      var self=this;
      //self.company=company;
      self.get=(zid,callback)=>{
        return $dk.post(_url+"/resource-file/get",{app,zid},callback);
      }
      self.gets=(filter,callback)=>{
        return $dk.post(_url+"/resource-file/gets",{app,filter},callback);
      }
      self.add=(data,callback)=>{
        return $dk.post(_url+"/resource-file/add",{app,data},callback);
      }
      self.edit=(data,callback)=>{
        return $dk.post(_url+"/resource-file/edit",{app,data},callback);
      }
      self.setACL=(zid,data,callback)=>{
        return $dk.post(_url+"/resource-file/acl",{zid,app,data},callback);
      }
    }
    function Doc(app,resource){
      var self=this;
      //self.company=company;
      self.get=(zid, callback)=>{
        return $dk.post(_url+"/doc/get",{app,resource,zid},callback);
      }
      self.gets=(filter,callback)=>{
        return $dk.post(_url+"/doc/gets",{app,resource,filter},callback);
      }
      self.add=(data,callback)=>{
        return $dk.post(_url+"/doc/add",{app,resource,data},callback);
      }
      self.edit=(zid,data,callback)=>{
        return $dk.post(_url+"/doc/edit",{app,resource,zid,data},callback);
      }
      self.acl=(zid,data,callback)=>{
        return $dk.post(_url+"/doc/acl",{app,resource,zid,data},callback);
      }
      self.del=(zid,callback)=>{
        return $dk.post(_url+"/doc/del",{app,resource,zid},callback);
      }
    }
    function File(app,resource){
      var self=this;
      //self.company=company;
      self.get=(path, callback)=>{
        return $dk.post(_url+"/file/get",{data:{path}},callback);
      }
      self.gets=(path,callback)=>{
        return $dk.post(_url+"/file/gets",{data:{path}},callback);
      }
      self.save=(path,filename,content,callback)=>{
        return $dk.post(_url+"/file/save",{data: {path,filename,content}},callback);
      }
      self.acl=(zid,data,callback)=>{
        return $dk.post(_url+"/doc/acl",{app,resource,zid,data},callback);
      }
      self.del=(zid,callback)=>{
        return $dk.post(_url+"/doc/del",{app,resource,zid},callback);
      }
    }
    function User(callback){
      var self=this;
      self.set=(user)=>{
        _user = user;
      }
      self.get=(callback)=>{
        return $dk.post(_url+"/os/user",{},callback)
      }
      self.login=(username,password,captcha,callback)=>{
        return $dk.post(_url+"/os/login",{data: {username,password,captcha},_token},callback)
      }
      self.logout=(callback)=>{
        return $dk.post(_url+"/os/out",{},callback);
      }
      self.reg=(data,callback)=>{
        return $dk.post(_url+"/os/reg",{data},callback);
      }
      self.update=(data,callback)=>{
        return $dk.post(_url+"/user/update",{data},callback);
      }
      self.info=(callback)=>{
        return $dk.post(_url+"/user/info",{},callback);
      }
      self.changepass=(old_password,password,re_password,callback)=>{
        return $dk.post(_url+"/user/changepass",{data:{old_password,password,re_password}},callback);
      }
      self.regF=(cb)=>{
        $dlg.form({
          title:'Đăng nhập',
          url: `/control/reg.html`,
          width: '400',
          onshown: frm=>{
            frm.querySelector('.registor').onclick=()=>{
			self.reg(frm.get(),rs=>{
                 if(rs.status_code==200){
                   $dlg.message();
                   frm.close();
                 }
                 $dlg.error(rs)
               });
            }
          }
        });
      }
      self.loginF=(cb)=>{
        $dlg.form({
          title:'Đăng nhập',
          template:`<t-login><t-login>`,
          width: '400',
          onshown: frm=>{
            if(_user && _user.token){
              frm.getBody().innerHTML=`<div class="">
            <div class="dF">
            <div class=""></div>
            <div class="">${_user.fullname||_user.username}</div>
            </div>
            <div class="dF">
            	<x-button t-options="name:'btn_signout',title:'Logout'"></x-button>
            </div>
            </div>`;
              frm.el('[name="btn_signout"]').onclick=()=>{
                self.logout(rs=>{
                  if(rs.status_code==200){
                    location.reload();
                  }
                  $dlg.error(rs)
                });
              }
            }else{
              frm.getBody().innerHTML=`<div class="">
    	<div class="dG gtc{80px;auto} aic p5px">
     	<div class="">
     		Tài khoản
     	</div>
          <div class="">
     		<input name="username" class:"w100% p{3px;5px}">
     	</div>
     </div>
     <div class="dG gtc{80px;auto} aic p5px">
     	<div class="">
     		Mật khẩu
     	</div>
          <div class="">
     		<input name="password" class:"w100% p{3px;5px}" type="password">
     	</div>
     </div>
    </div>
    <div class="df jcC p10px">
     	<div class="">
     		<x-button t-options="title:'Đăng nhập',class:['p{5px;10px}','bd','cr','btn_send']"></x-button>
     		<x-button t-options="title:'Đăng nhập & tải lại',class:['p{5px;10px}','bd','cr','btn_sendr']"></x-button>
     	</div>
     </div>`;
              setTimeout(()=>{
                frm.els(".btn_send,.btn_sendr").forEach(el=>{
                  el.onclick=()=>{
                    self.login(frm.el('[name="username"]').value,frm.el('[name="password"]').value,"",rs=>{
                      if(rs.status_code == 200){
                        frm.close();
                        _user={
                          token: rs.data[_token],
                          ...rs.data.user
                        };
                        //location.reload();
                      }
                      $dlg.error(rs);
                    });
                  }
                })
              },1000);
            }
          }
        });
      }
    }
  }
})(window.dk=window.dk||{});
