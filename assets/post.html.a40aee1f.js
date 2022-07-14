import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.29a9c448.js";const l={},d=s(`<h1 id="post" tabindex="-1"><a class="header-anchor" href="#post" aria-hidden="true">#</a> POST</h1><p>HTTP\u534F\u8BAE\u4E2D\u7684post\u8BF7\u6C42\uFF0C\u7531\u72B6\u6001\u884C\u3001\u8BF7\u6C42\u5934(headers)\u548C\u6D88\u606F\u4E3B\u4F53(entity-body)\u7EC4\u6210<br> post\u7684\u6D88\u606F\u4E3B\u4F53\uFF08entity-body\uFF09\u7684\u8BF4\u660E \u6D88\u606F\u4E3B\u4F53(entity-body)\u662F\u5728HTTP\u534F\u8BAE\u4E2D\u89C4\u5B9A\uFF0C\u4EE5ASCII\u7801\u4F20\u8F93\uFF0C\u4F46\u534F\u8BAE\u6CA1\u6709\u89C4\u5B9A\u4F7F\u7528\u4F55\u79CD\u7F16\u7801\uFF0C\u6240\u4EE5POST\u8BF7\u6C42\u5305\u542B\u4E86Content-Type(\u7F16\u7801\u8BF4\u660E)\u548Centity-body(\u6D88\u606F\u4E3B\u4F53)\u4E24\u90E8\u5206</p><p>Content-Type\u6837\u5F0F\uFF1A</p><ul><li><p>x-www-form-urlencoded</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># headers\u6837\u5F0F
# \u6D88\u606F\u4E3B\u4F53\u53D1\u9001\u6D4F\u89C8\u5668form\u8868\u5355\uFF0C\u6D88\u606F\u4E3B\u4F53\u8FDB\u884Curl\u7F16\u7801
headers = {
    &#39;Content-Type&#39;:&#39;application/x-www-form-urlencoded&#39;
}
# url\u7F16\u7801\u540E\u7684\u6837\u5F0F
title=test&amp;sub%5B%5D=1&amp;sub%5B%5D=2&amp;sub%5B%5D=3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>requests\u6837\u5F0F<div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import requests
payload = {}  # \u4E00\u4E2A\u5B57\u5178\uFF0Crequests\u5728\u53D1\u9001\u65F6\u4F1A\u81EA\u52A8\u7F16\u7801
res = requests.post(url=url, data=payload)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>requests\u53D1\u9001list<div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>payload = ((&#39;key1&#39;, &#39;value1&#39;), (&#39;key1&#39;, &#39;value2&#39;))
r = requests.post(&#39;http://httpbin.org/post&#39;, data=payload)
&gt;&quot;form&quot;: {
&gt;    &quot;key1&quot;: [
&gt;      &quot;value1&quot;,
&gt;      &quot;value2&quot;
&gt;    ]
&gt;  },
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>application/json</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># headers\u6837\u5F0F
# \u6D88\u606F\u4E3B\u9898\u662F\u5E8F\u5217\u5316\u540E\u7684JSON\u5B57\u7B26\u4E32
headers = {
    &#39;Content-Type&#39;:&#39;application/json&#39;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>requests\u6837\u5F0F<div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import requests
payload = {}  # \u4E00\u4E2A\u5B57\u5178\uFF0Crequests\u5728\u53D1\u9001\u65F6\u4F1A\u81EA\u52A8\u7F16\u7801
r = requests.post(url, data=json.dumps(payload))        
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>multipart/form-data</p></li><li><p>text/xml</p></li></ul>`,4),a=[d];function t(r,u){return i(),n("div",null,a)}var c=e(l,[["render",t],["__file","post.html.vue"]]);export{c as default};
