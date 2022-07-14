import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.29a9c448.js";const t={},p=e(`<h1 id="celery" tabindex="-1"><a class="header-anchor" href="#celery" aria-hidden="true">#</a> Celery</h1><p>Distributed Task Queue</p><ol><li>Choosing a Broker <ol><li>Redis</li><li>Rebbit MQ</li></ol></li><li>Installing Celery<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>pip install celery
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>Application <ol><li>app\u7EBF\u7A0B\u5B89\u5168<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;pyamqp://guest@localhost//&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># redis, broker\u8BFB\u53D6\u4EFB\u52A1</span>
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>Keeping Results <ol><li>\u4E3A\u4E86\u8FFD\u8E2A\u4EFB\u52A1\u72B6\u6001, celery\u9700\u8981\u5B58\u50A8\u548C\u53D1\u9001\u4EFB\u52A1\u72B6\u6001, backend\u53EF\u9009( SQLAlchemy/Django ORM, MongoDB, Memcached, Redis, RPC (RabbitMQ/AMQP))</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> celery <span class="token keyword">import</span> Celery
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> backend<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;pyamqp://guest@localhost//&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># redis, broker\u8BFB\u53D6\u4EFB\u52A1, backend</span>
app <span class="token operator">=</span> Celery<span class="token punctuation">(</span><span class="token string">&#39;tasks&#39;</span><span class="token punctuation">,</span> backend<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">,</span> broker<span class="token operator">=</span><span class="token string">&#39;redis://localhost&#39;</span><span class="token punctuation">)</span>
<span class="token decorator annotation punctuation">@app<span class="token punctuation">.</span>task</span>
<span class="token keyword">def</span> <span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> x <span class="token operator">+</span> y
<span class="token comment"># \u5BF9\u4E8E\u7ED3\u679C\u8C03\u7528</span>
<span class="token comment"># delay\u8C03\u7528, \u8FD4\u56DE\u5F02\u6B65\u7ED3\u679C</span>
result <span class="token operator">=</span> add<span class="token punctuation">.</span>delay<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span><span class="token builtin">id</span>    <span class="token comment"># \u4EFB\u52A1id</span>
result<span class="token punctuation">.</span>ready<span class="token punctuation">(</span><span class="token punctuation">)</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span>timeout<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment"># \u5F02\u5E38\u5904\u7406, \u5982\u679C\u6709\u5F02\u5E38, \u8C03\u7528get\u4E5F\u4F1A\u8FD4\u56DE\u5F02\u5E38</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>    <span class="token comment"># \u76F4\u63A5\u629B\u51FA\u5F02\u5E38</span>
result<span class="token punctuation">.</span>get<span class="token punctuation">(</span>propagate<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span> <span class="token comment"># \u53EA\u8FD4\u56DE\u5F02\u5E38\u540D, \u4E0D\u8FD4\u56DE\u5B8C\u6574\u7684\u8C03\u7528\u6808</span>
result<span class="token punctuation">.</span>traceback    <span class="token comment"># \u67E5\u770B\u5B8C\u6574\u7684\u8C03\u7528\u6808</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Configuration <ol><li>\u786C\u7F16\u7801\u914D\u7F6E<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>app<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>task_serializer <span class="token operator">=</span> <span class="token string">&#39;json&#39;</span>
app<span class="token punctuation">.</span>conf<span class="token punctuation">.</span>update<span class="token punctuation">(</span>
    task_serializer<span class="token operator">=</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    accept_content<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>  <span class="token comment"># Ignore other content</span>
    result_serializer<span class="token operator">=</span><span class="token string">&#39;json&#39;</span><span class="token punctuation">,</span>
    timezone<span class="token operator">=</span><span class="token string">&#39;Europe/Oslo&#39;</span><span class="token punctuation">,</span>
    enable_utc<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u914D\u7F6E\u6587\u4EF6<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>app.config_from_object(&#39;celeryconfig&#39;)
# celeryconfig.py
broker_url = &#39;pyamqp://&#39;
result_backend = &#39;rpc://&#39;
task_serializer = &#39;json&#39;
result_serializer = &#39;json&#39;
accept_content = [&#39;json&#39;]
timezone = &#39;Europe/Oslo&#39;
enable_utc = True
# python -m celeryconfig.py \u68C0\u67E5\u914D\u7F6E\u6587\u4EF6\u51C6\u786E
# \u7279\u5B9A\u961F\u5217\u7684\u914D\u7F6E
task_routes = {
    &#39;tasks.add&#39;: &#39;low-priority&#39;,
    &#39;tasks.add&#39;: {&#39;rate_limit&#39;: &#39;10/m&#39;} # \u6BCF\u5206\u949F\u5904\u740610\u4E2A\u4EFB\u52A1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>\u542F\u52A8worker<div class="language-Shell ext-Shell line-numbers-mode"><pre class="language-Shell"><code>celery -A tasks worker --loglevel=INFO
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li>other</li></ol>`,3),l=[p];function o(i,c){return s(),a("div",null,l)}var d=n(t,[["render",o],["__file","celery.html.vue"]]);export{d as default};
