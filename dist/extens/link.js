(()=>{$el("t-link",[],i=>{a(i)},(i,s,c)=>{name=="t-options"&&c&&a(i)});function a(i){var s=i.options();s.class=s.class||["p{10px}","cr"],Array.isArray(s.class)||(s.class=s.class.split(" ").filter(n=>n)),s.class.push("bd{1px;solid;#ccc}","jcC","p10px","d{inline-flex}"),s.class=s.class.join(" ");var c="";s.icon&&(c=`<t-svg t-options='${JSON.stringify(s.icon)}'></t-svg>`,delete s.icon),i.innerHTML=`<a ${Object.keys(s).map(n=>`${n}="${s[n]}"`).join(" ")}>${c} ${s.title}</a>`}})();