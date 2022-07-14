import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.29a9c448.js";const e={},p=t(`<h1 id="twisted" tabindex="-1"><a class="header-anchor" href="#twisted" aria-hidden="true">#</a> twisted</h1><ol><li><p>demo</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> time
<span class="token keyword">import</span> datetime
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet <span class="token keyword">import</span> task
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet <span class="token keyword">import</span> reactor
<span class="token keyword">from</span> twisted<span class="token punctuation">.</span>internet<span class="token punctuation">.</span>defer <span class="token keyword">import</span> inlineCallbacks
<span class="token keyword">from</span> bo_lib<span class="token punctuation">.</span>general<span class="token punctuation">.</span>redis_helper <span class="token keyword">import</span> RedisHelper
<span class="token keyword">from</span> bo_lib<span class="token punctuation">.</span>general<span class="token punctuation">.</span>slack_notifier <span class="token keyword">import</span> BONotifier
<span class="token keyword">from</span> notice <span class="token keyword">import</span> feishu
<span class="token keyword">import</span> logging


logger <span class="token operator">=</span> logging<span class="token punctuation">.</span>getLogger<span class="token punctuation">(</span>__name__<span class="token punctuation">)</span>


<span class="token keyword">class</span> <span class="token class-name">TestTwisted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>

    <span class="token decorator annotation punctuation">@inlineCallbacks</span>
    <span class="token keyword">def</span> <span class="token function">_task</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        a <span class="token operator">=</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> a<span class="token punctuation">)</span>
            <span class="token keyword">yield</span> self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;BotNotifier\u5F00\u59CB......&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task <span class="token operator">=</span> task<span class="token punctuation">.</span>LoopingCall<span class="token punctuation">(</span>self<span class="token punctuation">.</span>_task<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
        reactor<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">finish_run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        logger<span class="token punctuation">.</span>info<span class="token punctuation">(</span><span class="token string">&#39;BotNotifier\u9000\u51FA...&#39;</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>task<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        reactor<span class="token punctuation">.</span>stop<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">def</span> <span class="token function">sleep</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># Returns a deferred that calls do-nothing function</span>
        <span class="token comment"># after \`delay\` seconds</span>
        <span class="token keyword">return</span> task<span class="token punctuation">.</span>deferLater<span class="token punctuation">(</span>reactor<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> <span class="token keyword">lambda</span><span class="token punctuation">:</span> <span class="token boolean">None</span><span class="token punctuation">)</span>


    <span class="token decorator annotation punctuation">@inlineCallbacks</span>
    <span class="token keyword">def</span> <span class="token function">repeat_forever</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> message<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>
            <span class="token keyword">yield</span> self<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&#39;&#39;&#39;
    &#39;&#39;&#39;</span>
    bn <span class="token operator">=</span> TestTwisted<span class="token punctuation">(</span><span class="token punctuation">)</span>
    bn<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E00\u4E9B\u8BF4\u660E</p><ul><li><p>\u56E0\u4E3A\u4F7F\u7528\u4E86twisted, \u8981\u6C42\u8FD0\u884C\u5728\u4E3B\u7EBF\u7A0B, \u6240\u4EE5\u9700\u8981\u4F7F\u7528\u591A\u8FDB\u7A0B</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>t1 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>producter<span class="token punctuation">)</span>
t2 <span class="token operator">=</span> Process<span class="token punctuation">(</span>target<span class="token operator">=</span>customer<span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
t1<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
t2<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4EFB\u52A1\u963B\u585E\u53C2\u8003task.deferLater</p></li><li><p>\u5982\u679C\u4E0A\u4E00\u4E2A\u4EFB\u52A1\u8FD0\u884C, \u4F1A\u6301\u7EED, \u4E0D\u4F1A\u5F00\u59CB\u4E0B\u4E00\u4E2A</p></li></ul></li></ol>`,2),o=[p];function i(c,l){return s(),a("div",null,o)}var d=n(e,[["render",i],["__file","twisted.html.vue"]]);export{d as default};
