import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,o as p,c as o,a as n,b as i,d as s,e as c}from"./app.29a9c448.js";const l={},u={id:"setting-py",tabindex:"-1"},r=n("a",{class:"header-anchor",href:"#setting-py","aria-hidden":"true"},"#",-1),d=s(),k={href:"http://setting.py",target:"_blank",rel:"noopener noreferrer"},v=s("setting.py"),m=c(`<ul><li>\u8BBE\u7F6E\u8BED\u8A00</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>blogproject<span class="token operator">/</span>blogproject<span class="token operator">/</span>settings<span class="token punctuation">.</span>py
<span class="token comment">## \u5176\u5B83\u914D\u7F6E\u4EE3\u7801...</span>
LANGUAGE_CODE <span class="token operator">=</span> <span class="token string">&#39;en-us&#39;</span>  <span class="token comment"># &#39;zh-hans&#39;</span>
TIME_ZONE <span class="token operator">=</span> <span class="token string">&#39;UTC&#39;</span>  <span class="token comment"># &#39;Asia/beijing&#39;</span>
<span class="token comment">## \u5176\u5B83\u914D\u7F6E\u4EE3\u7801...</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u8BBE\u7F6E\u6A21\u677F\u8DEF\u5F84</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>TEMPLATES <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token string">&#39;BACKEND&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.template.backends.django.DjangoTemplates&#39;</span><span class="token punctuation">,</span>
        <span class="token comment"># \u91CD\u70B9\u662F\u8FD9\u53E5</span>
        <span class="token string">&#39;DIRS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;templates&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token string">&#39;APP_DIRS&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
        <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;context_processors&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span>
                <span class="token string">&#39;django.template.context_processors.debug&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.template.context_processors.request&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.contrib.auth.context_processors.auth&#39;</span><span class="token punctuation">,</span>
                <span class="token string">&#39;django.contrib.messages.context_processors.messages&#39;</span><span class="token punctuation">,</span>
            <span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9009\u62E9\u6570\u636E\u5E93\u7248\u672C</li><li>\u67E5\u770B\u9ED8\u8BA4\u8BBE\u7F6E</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># blogproject/settings.py</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.sqlite3&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>BASE_DIR<span class="token punctuation">,</span> <span class="token string">&#39;db.sqlite3&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4FEE\u6539MySql\u6570\u636E\u5E93</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>DEFAULT_CHARSET <span class="token operator">=</span> <span class="token string">&#39;utf8&#39;</span>
DATABASES <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;default&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;ENGINE&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;django.db.backends.mysql&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;NAME&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;labelme&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;USER&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;root&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PASSWORD&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;XXX&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;HOST&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;PORT&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;3306&#39;</span><span class="token punctuation">,</span>
        <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">{</span>
            <span class="token string">&#39;sql_mode&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;traditional&#39;</span><span class="token punctuation">,</span>
            <span class="token comment"># &quot;init_command&quot;: &quot;SET sql_mode=&#39;STRICT_TRANS_TABLES&#39;&quot;,</span>
            <span class="token string">&#39;charset&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;utf8&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8);function g(b,_){const a=e("ExternalLinkIcon");return p(),o("div",null,[n("h1",u,[r,d,n("a",k,[v,i(a)])]),m])}var S=t(l,[["render",g],["__file","settings.html.vue"]]);export{S as default};
