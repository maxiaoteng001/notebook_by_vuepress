import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as i,e as a}from"./app.29a9c448.js";const s={},l=a(`<h1 id="numpy" tabindex="-1"><a class="header-anchor" href="#numpy" aria-hidden="true">#</a> numpy</h1><p>n\u7EF4\u7684\u6570\u7EC4\u5BF9\u8C61</p><ol><li><p>\u57FA\u672C\u64CD\u4F5C</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import numpy as np
na = np.array([1, 2, 3])
# \u53EF\u4EE5\u8F6C\u6362\u591A\u7EF4\u6570\u7EC4
na.dtype # \u67E5\u770B\u5143\u7D20\u7C7B\u578B, \u6240\u4EE5\u6240\u6709\u5143\u7D20\u7C7B\u578B\u8981\u4E00\u81F4
na1 = na.astype(&#39;str&#39;) # \u8F6C\u6362\u7C7B\u578B
# \u6279\u91CF\u8BA1\u7B97
na+1
na*na
na*2
# \u7D22\u5F15\u53D6\u503C\u548C\u8D4B\u503C, 0\u5F00\u59CB
na[2]
na[:-1]
na[2] = 1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>reshape, T\u8F6C\u7F6E, ufunc\u3001sort</p></li></ol>`,3),d=[l];function r(c,v){return e(),i("div",null,d)}var m=n(s,[["render",r],["__file","numpy.html.vue"]]);export{m as default};
