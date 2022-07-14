import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as s,c as a,a as e,b as t,d as i,e as d}from"./app.29a9c448.js";const o={},u=e("h1",{id:"urllib",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#urllib","aria-hidden":"true"},"#"),i(" urllib")],-1),c={href:"https://stackoverflow.com/questions/41501638/attributeerror-module-urllib-has-no-attribute-parse",target:"_blank",rel:"noopener noreferrer"},v=i("AttributeError: module 'urllib' has no attribute 'parse'"),m=d(`<ol><li><p>\u6784\u9020\u8BF7\u6C42</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import urllib.parse
# &amp;\u540E\u9762\u7684\u7EC4\u5408\u751F\u6210
urllib.parse.urlencode(query_data, doseq=True)  # query_data\u662F\u4E00\u4E2Adict
# \u5982\u679C\u4E00\u4E2Akey\u4E2D\u662Flist\uFF0Cdoseq\u53EF\u4EE5\u786E\u4FDD\u6B63\u786E\u7684\u7F16\u7801

# \u5982\u679C\u9700\u8981\u6784\u9020cookie\u6216\u5176\u4ED6\u5185\u5BB9\uFF0C\u9700\u8981\u5BF9\u5355\u72EC\u7684str\u7F16\u7801
urllib.parse.quote(str)
# \u9ED8\u8BA4\u5C06\u7A7A\u683C\u8F6C\u7801\u6210%20\uFF0C \u5982\u679C\u9700\u8981\u8F6C\u6210\`+\`,\u4F7F\u7528\u4E0B\u9762\u7684  
urllib.parse.quote_plus(str)
[+\u548C%20\u7684\u533A\u522B](https://stackoverflow.com/questions/2678551/when-to-encode-space-to-plus-or-20/2678602)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u89E3\u6790\u8BF7\u6C42</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>urllib.parse.parse_qs(&#39;age=23&amp;name=%E5%BC%A0%E4%B8%89&#39;)
{&#39;age&#39;: [&#39;23&#39;], &#39;name&#39;: [&#39;\u5F20\u4E09&#39;]}

urllib.parse.parse_qsl(&#39;age=23&amp;name=%E5%BC%A0%E4%B8%89&#39;)
[(&#39;age&#39;, &#39;23&#39;), (&#39;name&#39;, &#39;\u5F20\u4E09&#39;)]

# \u89E3\u6790\u5B57\u7B26\u4E32
urllib.parse.unquote(query)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function b(p,_){const n=l("ExternalLinkIcon");return s(),a("div",null,[u,e("p",null,[e("a",c,[v,t(n)])]),m])}var f=r(o,[["render",b],["__file","urllib.html.vue"]]);export{f as default};
