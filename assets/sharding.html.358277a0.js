import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{o as d,c as n,a as e,d as s}from"./app.29a9c448.js";const o={},h=e("h1",{id:"sharding",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#sharding","aria-hidden":"true"},"#"),s(" Sharding")],-1),_=e("p",null,"\u5F53\u5355\u8868\u6570\u636E\u91CF\u8F83\u5927\uFF08\u51E0\u5341GB\uFF09\u6216\u8BFB\u5199\u541E\u5410\u91CF\u5927\u7684\u65F6\u5019\uFF0C\u5FC5\u987B\u8FDB\u884C\u5206\u7247(Sharding)\u64CD\u4F5C\u3002MongoDB\u5206\u7247\u9700\u8981\u624B\u52A8\u6307\u5B9A\u7247\u952E\u3002\u597D\u7684\u7247\u952E\u9700\u8981\u5C3D\u91CF\u5E73\u6ED1\uFF0C\u5426\u5219\u4F1A\u51FA\u73B0\u6570\u636E\u5728\u591A\u4E2A\u8282\u70B9\u4E2D\u503E\u659C\uFF0C\u5BFC\u81F4\u96C6\u7FA4\u6027\u80FD\u4E0B\u964D\u3002\u76F4\u63A5\u7528 _id\u4F5C\u4E3A\u7247\u952E\u7684\u8BDD\uFF0C\u56E0\u4E3A _id\u662F\u5185\u542B\u65F6\u95F4\u6233\u7684\uFF0C\u6240\u4EE5\u4E0D\u662F\u6309\u6B21\u9012\u589E\u7684\uFF0C\u591A\u4E2A\u5E16\u5B50\u90FD\u4E0D\u5EFA\u8BAE\u4EE5 _id\u4F5C\u4E3A\u7247\u952E\u3002\u7136\u800C\uFF0Cmongodb\u57283.0(?)\u7248\u91CC\u65B0\u589E\u4E86\u54C8\u5E0C\u7D22\u5F15\u529F\u80FD\uFF0C\u54C8\u5E0C\u540E\u7684 _id\u662F\u5E73\u5747\u7684\uFF0C\u6240\u4EE5\u591A\u6570\u60C5\u51B5\u4E0B\uFF0C\u7528hashed_id\u4F5C\u4E3A\u7247\u952E\u662F\u597D\u7684\u9009\u62E9\u3002",-1),i=e("p",null,"\u4E0B\u9762\u7684sharding\u6D41\u7A0B\u6700\u597D\u5728\u8868\u4E3A\u7A7A\u7684\u65F6\u5019\u8FDB\u884C\uFF0C\u5426\u5219\u6709\u53EF\u80FD\u5F88\u6162\uFF1A",-1),t=e("pre",null,[e("code",null,`\`\`\`shell
# 1.\u9009\u62E9\u6570\u636E\u5E93
use kaola
# 2.\u6253\u5F00\u8BE5\u6570\u636E\u5E93\u5206\u7247\u529F\u80FD
sh.enableSharding("kaola") 
# 3.\u7247\u952E\u9700\u8981\u6307\u5B9A\u4E00\u4E2A\u7D22\u5F15\uFF0C\u6240\u4EE5\u9700\u8981\u521B\u5EFAhashed_id\u7D22\u5F15\u3002\u8FD9\u884C\u610F\u601D\u662F\u4EE5_id\u5B57\u6BB5\uFF0C\u5728\u80CC\u666F\u521B\u5EFA\u4E00\u4E2A\u540D\u53EB_id_hashed\u7684\u54C8\u5E0C\u503C\u7684\u7D22\u5F15\u3002\u8FD9\u4E00\u6B65\u6839\u636E\u8BE5\u8868\u6570\u636E\u91CF\u800C\u5B9A\uFF0C\u6709\u53EF\u80FD\u9700\u8981\u6570\u5C0F\u65F6
db.getCollection("kaola_page_detail").createIndex( { _id: "hashed" }, { name: "_id_hashed", background: true } )
# 4.\u6307\u5B9A\u8BE5\u7D22\u5F15\u4E3A\u7247\u952E
sh.shardCollection( "kaola.kaola_page_detail", { _id: "hashed" } )
# 5.\u4EE5\u4E0A\u547D\u4EE4\u8FD0\u884C\u6210\u529F\u540E\uFF0C\u53EF\u4EE5\u7528\u8FD9\u4E2A\u547D\u4EE4\u6765check\u73B0\u5728\u5206\u7247\u7684\u72B6\u6001
sh.status()
\`\`\`
`)],-1),r=[h,_,i,t];function l(c,g){return d(),n("div",null,r)}var p=a(o,[["render",l],["__file","sharding.html.vue"]]);export{p as default};