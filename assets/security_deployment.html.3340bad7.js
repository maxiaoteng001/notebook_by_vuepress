import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as t,c as a,a as e,b as l,d as n,e as u}from"./app.29a9c448.js";const r={},o=e("h1",{id:"\u5B89\u5168\u8BBE\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u5168\u8BBE\u7F6E","aria-hidden":"true"},"#"),n(" \u5B89\u5168\u8BBE\u7F6E")],-1),v=n("\u5BF9\u4E8Emongodb\u7684\u5B89\u5168\u90E8\u7F72, \u53EF\u4EE5\u53C2\u8003\u4E00\u7BC7\u6587\u7AE0: "),c={href:"http://www.mongoing.com/archives/631",target:"_blank",rel:"noopener noreferrer"},m=n("\u5B89\u5168\u90E8\u7F72MongoDB\u6700\u4F73\u5B9E\u8DF5"),b=u(`<h2 id="\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237" aria-hidden="true">#</a> \u521B\u5EFA\u7BA1\u7406\u5458\u7528\u6237</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ mongo  # \u8FDB\u5165mongodb shell

&gt; use admin # \u8FDB\u5165admin \u6570\u636E\u5E93

&gt; db.createUser({user:&quot;maxiaoteng&quot;,pwd:&quot;******&quot;,roles:[{role:&quot;root&quot;,db:&quot;admin&quot;}]})
  # admin\u662F\u7528\u6237\u7684\u8EAB\u4EFD\u9A8C\u8BC1\u6570\u636E\u5E93, \u7528\u6237\u5728\u5F53\u524D\u6570\u636E\u5E93\u8FDB\u884C\u9A8C\u8BC1, \u4F46\u4E5F\u53EF\u4EE5\u5728\u5176\u4ED6\u6570\u636E\u5E93\u6709\u89D2\u8272

&gt; exit

  Successfully added user: {
	&quot;user&quot; : &quot;maxiaoteng&quot;,
	&quot;roles&quot; : [
		{
			&quot;role&quot; : &quot;root&quot;,
			&quot;db&quot; : &quot;admin&quot;
		}
	]
  }

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E\u542F\u52A8\u5B89\u5168\u8BA4\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u542F\u52A8\u5B89\u5168\u8BA4\u8BC1" aria-hidden="true">#</a> \u914D\u7F6E\u542F\u52A8\u5B89\u5168\u8BA4\u8BC1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo nano /etc/mongod.conf

# \u66F4\u6539\u9ED8\u8BA4\u7AEF\u53E3\u4E3A27010
port : 27010

# \u751F\u6548\u8BA4\u8BC1
# 2.6 3.2 3.6 \u4EE5\u4E0A\u7248\u672C\u7528\u6CD5
security:
  authorization: enabled

# \u91CD\u542F\u751F\u6548
sudo service mongod restart
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9A8C\u8BC1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mongo --port=27010  # \u8FDB\u5165mongo shell

show dbs  

# \u663E\u793A\u7ED3\u679C
2018-09-11T08:27:32.759+0000 E QUERY    [js] Error: listDatabases failed:{
	&quot;ok&quot; : 0,
	&quot;errmsg&quot; : &quot;command listDatabases requires authentication&quot;,
	&quot;code&quot; : 13,
	&quot;codeName&quot; : &quot;Unauthorized&quot;
} :
# \u8BF4\u660E\u767B\u9646\u5931\u8D25, 

db.auth(&quot;username&quot;,&quot;password&quot;)
# \u8FD4\u56DE1 \u8BF4\u660E\u767B\u9646\u6210\u529F

**\u6CE8\u610F: \u767B\u9646\u8BA4\u8BC1\u67D0\u4E2A\u6570\u636E\u5E93\u65F6, \u8981\u5148\`use db\`, \u7136\u540E\u518D\u6267\u884Cauth**
use admin
db.auth(&quot;username&quot;,&quot;password&quot;)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237" aria-hidden="true">#</a> \u6DFB\u52A0\u6570\u636E\u5E93\u7528\u6237</h2><p>\u7528\u6237\u53EF\u4EE5\u8BBF\u95EE\u7279\u5B9A\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># mongo shell\u4E0B
&gt; use ifood
&gt; db.createUser({user: &quot;testdb1u1&quot;, pwd: &quot;xyz123&quot;, roles: [{ role: &quot;dbOwner&quot;, db: &quot;testdb1&quot; }]})

###\u663E\u793A:
Successfully added user: {
	&quot;user&quot; : &quot;yunfutech&quot;,
	&quot;roles&quot; : [
		{
			&quot;role&quot; : &quot;dbOwner&quot;,
			&quot;db&quot; : &quot;ifood&quot;
		}
	]
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="pymongo\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#pymongo\u8FDE\u63A5" aria-hidden="true">#</a> pymongo\u8FDE\u63A5</h2><p>\u89C1pymongo</p>`,11);function q(h,g){const i=s("ExternalLinkIcon");return t(),a("div",null,[o,e("p",null,[v,e("a",c,[m,l(i)])]),b])}var _=d(r,[["render",q],["__file","security_deployment.html.vue"]]);export{_ as default};
