import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o,c,a as s,b as l,d as a,e as p}from"./app.29a9c448.js";const i={},r=s("h1",{id:"\u9759\u6001\u6587\u4EF6",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#\u9759\u6001\u6587\u4EF6","aria-hidden":"true"},"#"),a(" \u9759\u6001\u6587\u4EF6")],-1),u={href:"https://docs.djangoproject.com/en/2.2/howto/static-files/",target:"_blank",rel:"noopener noreferrer"},d=a("\u5B98\u65B9\u6587\u6863"),k=p(`<h2 id="_1-\u5F00\u53D1\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_1-\u5F00\u53D1\u4F7F\u7528" aria-hidden="true">#</a> 1. \u5F00\u53D1\u4F7F\u7528</h2><ol><li>\u4F4D\u7F6E: \u5B58\u653E\u5728\u5BF9\u5E94\u7684\u5E94\u7528\u4E0B,django\u9759\u6001\u670D\u52A1\u5668\u4F1A\u6536\u96C6\u6240\u6709static\u76EE\u5F55\u4E0B\u7684\u6587\u4EF6</li><li>\u9ED8\u8BA4app<code>django.contrib.staticfiles</code>\u4F1A\u5BFB\u627E<code>INSTALLED_APPS</code>\u4E0B\u6240\u6709app\u7684static\u6587\u4EF6, \u6BD4\u5982<code>/polls/static/polls/style.css</code>,</li><li><code>/blog/static/blog/js</code>or <code>/blog/static/blog/css</code></li><li>settings \u4E2D\u914D\u7F6E <code>STATIC_URL = &#39;/static/&#39;</code></li><li>\u5F15\u7528<div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code>{\\% load staticfiles \\%}
<span class="token comment">&lt;!-- \u76F8\u5F53\u4E8E\u6E32\u67D3\uFF1A/static/blog/css/bootstrap.min.css --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\\% static <span class="token punctuation">&#39;</span>blog/css/bootstrap.min.css<span class="token punctuation">&#39;</span> \\%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{\\% static <span class="token punctuation">&#39;</span>blog/js/modernizr.custom.js<span class="token punctuation">&#39;</span> \\%}<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u90E8\u7F72\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u90E8\u7F72\u4F7F\u7528" aria-hidden="true">#</a> 2. \u90E8\u7F72\u4F7F\u7528</h2>`,3);function h(_,m){const n=e("ExternalLinkIcon");return o(),c("div",null,[r,s("p",null,[s("a",u,[d,l(n)])]),k])}var f=t(i,[["render",h],["__file","static_files.html.vue"]]);export{f as default};
