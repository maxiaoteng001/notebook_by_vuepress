import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o,c as i,a as n,b as p,d as s,e as l}from"./app.29a9c448.js";const c={},r=n("h1",{id:"apscheduler",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#apscheduler","aria-hidden":"true"},"#"),s(" apscheduler")],-1),u={href:"https://github.com/agronholm/apscheduler",target:"_blank",rel:"noopener noreferrer"},d=s("apscheduler"),m=s("\u662Fpython\u7684\u5B9A\u65F6\u4EFB\u52A1\u6846\u67B6\uFF0C \u53EF\u4EE5\u5C06\u5B9A\u65F6\u4EFB\u52A1\u6301\u4E45\u5316"),k=l(`<ol><li><p>\u4E09\u79CD\u89E6\u53D1\u6A21\u5F0F</p><ol><li>cron \u5B9A\u65F6\u4EFB\u52A1\u89E6\u53D1\u5668</li><li>interval \u5FAA\u73AF\u4EFB\u52A1\u89E6\u53D1\u5668</li><li>date \u4E00\u6B21\u6027\u4EFB\u52A1\u89E6\u53D1\u5668</li></ol></li><li><p>\u4F7F\u7528</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>from apscheduler.schedulers.blocking import BlockingScheduler
import time 

def print_time(x):
    time1 = time.strftime(&quot;%Y-%m-%d %H:%M:%S&quot;,time.localtime(time.time()))
    print(time1,&quot;\u6A21\u5F0F:{}&quot;.format(x))

def clear_job(job_id):
    scheduler.remove_job(job_id)
    print(&quot;{}\u4EFB\u52A1\u88AB\u5220\u9664\u4E86&quot;.format(job_id))

def cron_job():
    sched = BlockingScheduler()
    sched.add_job(func=print_time, args=(&#39;\u5B9A\u65F6\u4EFB\u52A1&#39;, ), trigger=&#39;cron&#39;, hour=&#39;*/2&#39;, minute=1, id=&#39;cron_job&#39;)
    sched.add_job(func=print_time, args=(&#39;\u5FAA\u73AF\u4EFB\u52A1&#39;, ), trigger=&#39;interval&#39;, seconds=3, minute=1, id=&#39;interval_job&#39;)
    sched.add_job(func=clear_job, args=(&#39;cron_job&#39;, ), trigger=&#39;date&#39;, next_run_time=&#39;2019-06-28 18:09:00&#39;, id=&#39;date_job&#39;)
    sched.start()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E00\u4E9B\u8BF4\u660E</p><ol><li><p>\u5B9A\u65F6\u4EFB\u52A1\u8BBE\u7F6Ehours</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token operator">*</span> \u8868\u793A\u6BCF
<span class="token operator">*</span> <span class="token operator">/</span><span class="token number">2</span> <span class="token comment"># \u5076\u6570</span>
x<span class="token punctuation">,</span>y<span class="token punctuation">,</span>z  <span class="token comment"># \u7EC4\u5408</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E00\u6B21\u4EFB\u52A1</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>next_run_time <span class="token operator">=</span> <span class="token string">&#39;2019-06-28 18:09:00&#39;</span>
next_run_time <span class="token operator">=</span> date<span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">06</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">)</span>
next_run_time <span class="token operator">=</span> datetime<span class="token punctuation">(</span><span class="token number">2019</span><span class="token punctuation">,</span> <span class="token number">06</span><span class="token punctuation">,</span> <span class="token number">28</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token comment"># \u672A\u6307\u5B9A\u65F6\u95F4\u5C06\u7ACB\u5373\u6267\u884C</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5468\u671F\u6267\u884C\u4EFB\u52A1</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>seconds <span class="token operator">=</span> <span class="token number">2</span>  <span class="token comment"># \u8868\u793A\u6BCF2s\u6267\u884C\u4E00\u6B21</span>
start_date<span class="token operator">=</span><span class="token string">&#39;2018-12-11 09:30:00&#39;</span><span class="token punctuation">,</span> end_date<span class="token operator">=</span><span class="token string">&#39;2018-12-15 11:00:00&#39;</span>  <span class="token comment"># \u4E5F\u53EF\u4EE5\u6DFB\u52A0\u5F00\u59CB\u505C\u6B62\u65F6\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>cron api</p><ul><li>year (int|str) \u2013 4-digit year</li><li>month (int|str) \u2013 month (1-12)</li><li>day (int|str) \u2013 day of the (1-31)</li><li>week (int|str) \u2013 ISO week (1-53)</li><li>day_of_week (int|str) \u2013 number or name of weekday (0-6 or mon,tue,wed,thu,fri,sat,sun), \u6BCF\u5468\u7B2C\u4E00\u5929\u662F\u661F\u671F\u4E00</li><li>hour (int|str) \u2013 hour (0-23)</li><li>minute (int|str) \u2013 minute (0-59)</li><li>second (int|str) \u2013 second (0-59)</li><li>start_date (datetime|str) \u2013 earliest possible date/time to trigger on (inclusive)</li><li>end_date (datetime|str) \u2013 latest possible date/time to trigger on (inclusive)</li><li>timezone (datetime.tzinfo|str) \u2013 time zone to use for the date/time calculations (defaults to scheduler timezone)</li><li>jitter (int|None) \u2013 advance or delay the job execution by jitter seconds at most.</li></ul></li><li><p>\u4EFB\u52A1\u6301\u4E45\u5316</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>schedulers<span class="token punctuation">.</span>background <span class="token keyword">import</span> BackgroundScheduler
    <span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>jobstores<span class="token punctuation">.</span>redis <span class="token keyword">import</span> RedisJobStore
    <span class="token keyword">from</span> apscheduler<span class="token punctuation">.</span>jobstores<span class="token punctuation">.</span>mongodb <span class="token keyword">import</span> MongoDBJobStore
    <span class="token comment"># \u914D\u7F6E</span>
    jobs_key <span class="token operator">=</span> <span class="token string">&#39;apscheduler.jobs&#39;</span>
    run_times_key <span class="token operator">=</span> <span class="token string">&#39;apscheduler.run_times&#39;</span>
    REDIS_CONF <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;host&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;port&quot;</span><span class="token punctuation">:</span> <span class="token number">6379</span><span class="token punctuation">,</span>
        <span class="token string">&quot;db&quot;</span><span class="token punctuation">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
    jobstores <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&#39;redis&#39;</span><span class="token punctuation">:</span> RedisJobStore<span class="token punctuation">(</span>jobs_key<span class="token operator">=</span>jobs_key<span class="token punctuation">,</span> run_times_key<span class="token operator">=</span>run_times_key<span class="token punctuation">,</span> <span class="token operator">**</span>REDIS_CONF<span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token string">&#39;mongo&#39;</span><span class="token punctuation">:</span> MongoDBJobStore<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">def</span> <span class="token function">add_job</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        sched <span class="token operator">=</span> BackgroundScheduler<span class="token punctuation">(</span>jobstores<span class="token operator">=</span>jobstores<span class="token punctuation">)</span>
        <span class="token comment"># \u7075\u6D3B\u6307\u5B9Ajobstore</span>
        sched<span class="token punctuation">.</span>add_job<span class="token punctuation">(</span>func<span class="token operator">=</span>some_job<span class="token punctuation">,</span> trigger<span class="token operator">=</span><span class="token string">&#39;cron&#39;</span><span class="token punctuation">,</span> minute<span class="token operator">=</span><span class="token string">&#39;*/10&#39;</span><span class="token punctuation">,</span> jobstore<span class="token operator">=</span><span class="token string">&#39;redis&#39;</span><span class="token punctuation">,</span> <span class="token builtin">id</span><span class="token operator">=</span><span class="token string">&#39;some_job&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,1);function v(b,h){const a=t("ExternalLinkIcon");return o(),i("div",null,[r,n("p",null,[n("a",u,[d,p(a)]),m]),k])}var y=e(c,[["render",v],["__file","apscheduler.html.vue"]]);export{y as default};