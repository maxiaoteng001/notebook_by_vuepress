import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.29a9c448.js";const t={},i=e(`<h1 id="pyexecjs-python\u6267\u884Cjs\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#pyexecjs-python\u6267\u884Cjs\u4EE3\u7801" aria-hidden="true">#</a> PyExecJS python\u6267\u884Cjs\u4EE3\u7801</h1><ol><li><p>install</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>pip <span class="token function">install</span> PyExecJS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>demo</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token keyword">import</span> execjs
    js_str <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;
        function re(){
            var fo = new Fingerprint()
            return fo.getCanvasFingerprint()
    }
    &quot;&quot;&quot;</span>
    ctx <span class="token operator">=</span> execjs<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span>js_str<span class="token punctuation">)</span>
    t <span class="token operator">=</span> ctx<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&#39;re&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),p=[i];function c(o,l){return s(),a("div",null,p)}var d=n(t,[["render",c],["__file","pyexecjs.html.vue"]]);export{d as default};
