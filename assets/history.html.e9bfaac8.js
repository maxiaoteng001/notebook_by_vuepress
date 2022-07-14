import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as r,c as t,a as e,b as a,d as i,e as d}from"./app.29a9c448.js";const o={},c=e("h1",{id:"history\u547D\u4EE4",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#history\u547D\u4EE4","aria-hidden":"true"},"#"),i(" history\u547D\u4EE4")],-1),v=i("\u53C2\u8003\uFF1A "),u={href:"https://linuxtoy.org/archives/history-command-usage-examples.html",target:"_blank",rel:"noopener noreferrer"},m=i("https://linuxtoy.org/archives/history-command-usage-examples.html"),h=d(`<ol><li>history # \u5217\u51FA\u6240\u6709\u7684\u5386\u53F2\u547D\u4EE4\uFF0C\u76F8\u5F53\u4E8Ecat\u4E86\u4E00\u4E2A\u6587\u4EF6</li><li>ctrl + R # \u5728\u5386\u53F2\u547D\u4EE4\u4E2D\u641C\u7D22\uFF0C enter\u76F4\u63A5\u6267\u884C\uFF0C\u65B9\u5411\u952E\u4F1A\u8FDB\u5165\u4FEE\u6539</li><li>\u6267\u884C\u4E0A\u4E00\u6761\u547D\u4EE4\u7684\u56DB\u79CD\u65B9\u6CD5\uFF1A <ol><li>\u2191</li><li>\uFF01\uFF01</li><li>\uFF01-1</li><li>Ctrl + P</li></ol></li><li>\u914D\u7F6E<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># vi ~/.bash_profile

# \u914D\u7F6E\u4FDD\u5B58\u5386\u53F2\u547D\u4EE4\u7684\u603B\u884C\u6570
HISTSIZE=450
HISTFILESIZE=450
# \u5386\u53F2\u547D\u4EE4\u7684\u6587\u4EF6\u4FDD\u5B58\u4F4D\u7F6E
HISTFILE=/root/.commandline_warrior

# \u5386\u53F2\u547D\u4EE4\u662F\u5426\u53BB\u91CD
HISTCONTROL=ignoredups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u7531\u4E8Ehistory\u76F8\u5F53\u4E8Ecat\u4E86\u4FDD\u5B58\u5386\u53F2\u547D\u4EE4\u7684\u6587\u4EF6\uFF0C\u6240\u4EE5\u53EF\u4EE5\u6267\u884C\u4E00\u4E9B\u5E38\u89C4\u7528\u6CD5<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. history | grep xx    # \u8FC7\u6EE4\u5236\u5B9A\u7684\u547D\u4EE4
2. history | tail -5    # \u663E\u793A\u6700\u540E5\u6761\u547D\u4EE4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u5254\u9664\u5386\u53F2\u6587\u4EF6\u4E2D\u91CD\u590D\u7684\u547D\u4EE4<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># export HISTCONTROL=erasedups
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>\u6E05\u695A\u5386\u53F2\u8BB0\u5F55<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># history -c
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol>`,1);function x(_,b){const n=l("ExternalLinkIcon");return r(),t("div",null,[c,e("p",null,[v,e("a",u,[m,a(n)])]),h])}var y=s(o,[["render",x],["__file","history.html.vue"]]);export{y as default};