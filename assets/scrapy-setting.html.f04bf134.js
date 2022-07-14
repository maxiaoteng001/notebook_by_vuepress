import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as d,c as t,a as e,b as r,d as i,e as n}from"./app.29a9c448.js";const c={},v=e("h1",{id:"scrapy\u914D\u7F6E",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#scrapy\u914D\u7F6E","aria-hidden":"true"},"#"),i(" scrapy\u914D\u7F6E")],-1),o=e("h2",{id:"\u914D\u7F6E\u4F18\u5148\u7EA7",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u914D\u7F6E\u4F18\u5148\u7EA7","aria-hidden":"true"},"#"),i(" \u914D\u7F6E\u4F18\u5148\u7EA7")],-1),u=n(`<li><p>\u547D\u4EE4\u884C\u9009\u9879 -s \u6700\u9AD8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scrapy crawl myspider -s LOG_FILE=scrapy.log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u6BCF\u4E2Aspider\u7684custom_settings</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Spider(RedisSpider):
    name = &#39;spider_name&#39;
    redis_key = xxx
    custom_settings = {
        &#39;REDIRECT_ENABLED&#39;: True,
        &#39;COOKIES_ENABLED&#39;: True,
        }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),p={href:"http://settings.py",target:"_blank",rel:"noopener noreferrer"},m=i("settings.py"),b=e("li",null,[e("p",null,"\u6BCF\u4E2A\u547D\u4EE4\u7684\u9ED8\u8BA4setting")],-1),g=e("li",null,[e("p",null,"\u9ED8\u8BA4\u7684setting")],-1),_=n(`<h2 id="settings-py\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#settings-py\u914D\u7F6E" aria-hidden="true">#</a> settings.py\u914D\u7F6E</h2><ol><li><p>\u7F51\u7AD9\u722C\u866B\u89C4\u5219\uFF0C\u5173\u95EDrobots.txt\u9075\u5FAA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Obey robots.txt rules
ROBOTSTXT_OBEY = False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E0B\u8F7D\u5EF6\u8FDF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import random  
DOWNLOAD_DELAY = random.randint(1, 2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5E76\u53D1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>CONCURRENT_REQUESTS = 64

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u662F\u5426\u542F\u7528cookie</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># COOKIES_ENABLED = False # \u9ED8\u8BA4\u751F\u6548\u4E2D\uFF0C\u50CF\u6D4F\u89C8\u5668\u4E00\u6837\uFF0C\u4E00\u822C\u65E0\u9700\u7BA1\u7406  
COOKIES_ENABLED = True  # \u5982\u679C\u4F7F\u7528\u81EA\u5B9A\u4E49cookie\u5C31\u628ACOOKIES_ENABLED\u8BBE\u7F6E\u4E3ATrue  
COOKIES_ENABLED = False   # \u5982\u679C\u4F7F\u7528settings\u7684cookie\u5C31\u628ACOOKIES_ENABLED\u8BBE\u7F6E\u4E3AFalse  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>extensions</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>EXTENSIONS = {
    &#39;scrapy.extensions.telnet.TelnetConsole&#39;: None,
    # CloseSpiderRedis\u662F\u8BBE\u7F6Eredis\u6CA1\u6709\u4EFB\u52A1\u540E\u81EA\u52A8\u5173\u95ED\u7684\u6269\u5C55, \u5982\u679C\u4E0D\u7528bo_lib, \u9700\u8981\u624B\u52A8\u52A0\u5165(\u89C1[extensions.md](extensions.md))
    &#39;bo_lib.scrapy_tools.CloseSpiderRedis&#39;: 100,
}
CLOSE_SPIDER_AFTER_IDLE_TIMES = 5  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>ITEM\u7684\u5904\u7406(pipeline)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ITEM_PIPELINES = {
 # &#39;weapon.pipelines.WeaponPipeline&#39;: 300,
 # &#39;weapon.mongoPipeline.MongoPipeline&#39;: 301,
 &#39;weapon.mysql_pipelines.MySQLPipeline&#39;: 301,
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>} \`\`\`</p><ol start="5"><li><p>\u6587\u4EF6\u7F16\u7801<br> FEED_EXPORT_ENCODING = &#39;utf-8&#39;</p></li><li><p>LOG\u7684\u914D\u7F6E<br> LOG_ENCODING = &#39;UTF-8&#39;</p></li><li><p>\u6570\u636E\u5E93\u914D\u7F6E</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   MYSQL_HOST = &#39;localhost&#39;  
MYSQL_DATABASE = &#39;military&#39;  
MYSQL_POST = 3306  
MYSQL_USER = &#39;root&#39;  
# MYSQL_PASSWORD = &#39;&#39;  
MYSQL_PASSWORD = &#39;PnS_cDEZhMb4p8M3&#39;  
# mongodb\u914D\u7F6E  
MONGO_URI = &quot;localhost:27017&quot;  
MONGO_DATABASE = &#39;military&#39;  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="8"><li><p>\u914D\u7F6E\u6570\u636E\u7248\u672CVERSION</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>date = datetime.datetime.now().strftime(&quot;%Y-%m-%d&quot;)

VERSION = date
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6Eitem pipelines</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Configure item pipelines

ITEM_PIPELINES = {
   &#39;mangoplate_scrapy.pipelines.MangoplateScrapyPipeline&#39;: 300,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u81EA\u52A8\u9650\u901F</p><p>\u4E0B\u8F7D\u5EF6\u8FDF\u8BA1\u7B97: \u901A\u8FC7\u8BA1\u7B97\u5EFA\u7ACBTCP\u8FDE\u63A5\u5230\u63A5\u6536HTTP header\u4E4B\u95F4\u7684\u65F6\u95F4\u6765\u6D4B\u91CF\u7684.</p><p>\u81EA\u52A8\u8BA1\u7B97\u6765\u786E\u5B9A\u5408\u7406\u7684\u5EF6\u8FDF\u548C\u5E76\u53D1\u6570, \u6CE8\u610F:</p><ul><li>&#39;CONCURRENT_REQUESTS_PER_DOMAIN&#39; \u8BA1\u7B97\u51FA\u7684\u5E76\u53D1\u4E0D\u9AD8\u4E8E\u9884\u8BBE\u7F6E\u7684</li><li>&#39;CONCURRENT_REQUESTS_PER_IP&#39; \u8BA1\u7B97\u51FA\u7684\u5E76\u53D1\u4E0D\u9AD8\u4E8E\u9884\u8BBE\u7F6E\u7684</li><li>&#39;DOWNLOAD_DELAY&#39; \u8BA1\u7B97\u51FA\u7684\u5EF6\u8FDF\u4E0D\u4F1A\u4F4E\u4E8E\u9884\u8BBE\u7F6E\u7684</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
AUTOTHROTTLE_ENABLED = True  # \u542F\u7528\u81EA\u52A8\u9650\u901F\u6269\u5C55
# The initial download delay
AUTOTHROTTLE_START_DELAY = 5  # \u521D\u59CB\u4E0B\u8F7D\u5EF6\u8FDF
# The maximum download delay to be set in case of high latencies
AUTOTHROTTLE_MAX_DELAY = 60 # \u9AD8\u5EF6\u8FDF\u60C5\u51B5\u4E0B\u6700\u5927\u7684\u4E0B\u8F7D\u5EF6\u8FDF
# The average number of requests Scrapy should be sending in parallel to each remote server
AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0  # \u5F00\u542F\u65F6\u7684\u5E76\u53D1
# Enable showing throttling stats for every response received:
AUTOTHROTTLE_DEBUG = False  # debug\u6A21\u5F0F, true\u5C06\u4F1A\u5C55\u793A\u6BCF\u4E2A\u63A5\u6536\u5230\u7684response, \u53EF\u4EE5\u67E5\u770B\u9650\u901F\u53C2\u6570\u662F\u5982\u4F55\u8C03\u6574\u7684.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>log\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cur_dir = os.path.dirname(os.path.realpath(__file__))
logFilename = os.path.join(cur_dir, &#39;../../crawlerOutput/{}/log/roundmenu.log&#39;.format(VERSION))
logging.basicConfig(
  level=logging.ERROR,  # \u5B9A\u4E49\u8F93\u51FA\u5230\u6587\u4EF6\u7684log\u7EA7\u522B\uFF0C
  format=&#39;%(asctime)s  %(filename)s : %(levelname)s  %(message)s&#39;,  # \u5B9A\u4E49\u8F93\u51FAlog\u7684\u683C\u5F0F
  datefmt=&#39;%Y-%m-%d %A %H:%M:%S&#39;,  # \u65F6\u95F4
  filename=logFilename,  # log\u6587\u4EF6\u540D
  filemode=&#39;a&#39;)

FEED_EXPORT_ENCODING = &#39;UTF-8&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BF7\u6C42\u8D85\u65F6</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u8BBE\u7F6E\u8D85\u65F6\uFF0C\u9ED8\u8BA4180\u79D2</span>
DOWNLOAD_TIMEOUT <span class="token operator">=</span> <span class="token number">10</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5904\u7406HTTP\u9519\u8BEF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9ED8\u8BA4\u4E3A[], \u5373\u6240\u6709\u7684httperror\u8BF7\u6C42\u8C03\u7528errback, \u914D\u7F6E\u540E\u5BF9\u5E94\u7684\u54CD\u5E94\u5C06\u8C03\u7528callback
HTTPERROR_ALLOWED_CODES = [302, 404]

# \u9ED8\u8BA4False
HTTPERROR_ALLOW_ALL = TRUE

# spider\u4E2D\u53EF\u4EE5\u7528
handle_httpstatus_list = [404]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scrapy_redis</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># scrapy_redis \u9ED8\u8BA4\u6709 REDIS_PARAMS \u8FD9\u4E2A\u53C2\u6570\uFF0C\u4E14\u4F1A\u81EA\u52A8\u5C06\u4F60\u7684 REDIS_PARAMS \u7528\u4F60\u7684\u6307\u5B9A\u7684\u503C\u66F4\u65B0\u3002\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u8FD9\u6837\u5199</span>
REDIS_PARAMS <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&#39;db&#39;</span><span class="token punctuation">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
    <span class="token string">&#39;use_helper&#39;</span><span class="token punctuation">:</span> <span class="token boolean">True</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>retry\u91CD\u8BD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>RETRY_ENABLED: \u662F\u5426\u5F00\u542Fretry
RETRY_TIMES: \u91CD\u8BD5\u6B21\u6570
RETRY_HTTP_CODECS: \u9047\u5230\u4EC0\u4E48http code\u65F6\u9700\u8981\u91CD\u8BD5\uFF0C\u9ED8\u8BA4\u662F500,502,503,504,408\uFF0C\u5176\u4ED6\u7684\uFF0C\u7F51\u7EDC\u8FDE\u63A5\u8D85\u65F6\u7B49\u95EE\u9898\u4E5F\u4F1A\u81EA\u52A8retry\u7684
# 208\u9700\u8981\u91CD\u8BD5, twitchmetrics \u53D1\u73B0\u7684\u95EE\u9898
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6);function E(x,h){const s=a("ExternalLinkIcon");return d(),t("div",null,[v,o,e("ol",null,[u,e("li",null,[e("p",null,[e("a",p,[m,r(s)])])]),b,g]),_])}var S=l(c,[["render",E],["__file","scrapy-setting.html.vue"]]);export{S as default};
