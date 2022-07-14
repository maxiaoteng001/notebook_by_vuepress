import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as a,c as t,a as e,b as n,e as d,d as i}from"./app.29a9c448.js";const v={},c=d(`<h2 id="scrapy-redis" tabindex="-1"><a class="header-anchor" href="#scrapy-redis" aria-hidden="true">#</a> Scrapy-Redis</h2><h2 id="\u8BBE\u7F6E\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u8BF4\u660E" aria-hidden="true">#</a> \u8BBE\u7F6E\u8BF4\u660E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>   ## \u4EE5\u4E0B\u662Fredis\u914D\u7F6E
   
   # \u542F\u7528Redis\u8C03\u5EA6\u5B58\u50A8\u8BF7\u6C42\u961F\u5217
   SCHEDULER = &quot;scrapy_redis.scheduler.Scheduler&quot;
   
   # \u786E\u4FDD\u6240\u6709\u7684\u722C\u866B\u901A\u8FC7Redis\u53BB\u91CD
   DUPEFILTER_CLASS = &#39;scrapy_redis.dupefilter.RFPDupeFilter&#39;
   
   # \u8BF7\u6C42\u5E8F\u5217\u5316\u5668
   SCHEDULER_SERIALIZER = &quot;scrapy_redis.picklecompat&quot;
   
   # \u4E0D\u6E05\u7A7ARedis\u961F\u5217, \u53EF\u4EE5\u6682\u505C/\u6062\u590D\u722C\u866B
   SCHEDULER_PERSIST = True
   
   #\u4F7F\u7528\u4F18\u5148\u7EA7\u8C03\u5EA6\u8BF7\u6C42\u961F\u5217 \uFF08\u9ED8\u8BA4\u4F7F\u7528\uFF09
   SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.PriorityQueue&#39;
   #\u53EF\u9009\u7528\u7684\u5176\u5B83\u961F\u5217
   #SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.FifoQueue&#39;
   #SCHEDULER_QUEUE_CLASS = &#39;scrapy_redis.queue.LifoQueue&#39;
   
   # \u8BBE\u7F6E\u6700\u5927\u7B49\u5F85\u65F6\u95F4\u6765\u907F\u514D\u722C\u866B\u5173\u95ED, \u53EA\u6709\u5728\u961F\u5217\u662FSpiderQueue\u548CSpiderStack\u662F\u624D\u6709\u6548
   SCHEDULER_IDLE_BEFORE_CLOSE = 10
   
   # \u5728redis\u4E2D\u5B58\u50A8\u722C\u53D6\u7684item, \u4EE5\u4FBF\u4E8E\u540E\u7EED\u5904\u7406
   ITEM_PIPELINES = {
      &#39;scrapy_redis.pipelines.RedisPipeline&#39;: 300,
   }
   
   # item\u5E8F\u5217\u5316\u5E76\u4FDD\u5B58\u8FD9\u4E9Bitem\u5728\u6B64redis \u952E\u4E2D
   REDIS_ITEMS_KEY = &#39;%(spider)s:items&#39;
   
   # item\u5E8F\u5217\u5316\u9ED8\u8BA4\u4F7F\u7528ScrapyJSONEncoder. \u4F60\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6
   REDIS_ITEMS_SERIALIZER = &#39;json.dumps&#39;
   
   # \u6307\u5B9Aredis\u7684\u4E3B\u673A\u548C\u7AEF\u53E3
   REDIS_HOST = &#39;localhost&#39;
   REDIS_PORT = 6379
   
   # \u6307\u5B9A\u5B8C\u6574\u7684redis\u8FDE\u63A5\u53C2\u6570,\u6BD4\u5982: \u8D85\u65F6\u7B49
   #REDIS_PARAMS  = {}
   # Use custom redis client class.
   #REDIS_PARAMS[&#39;redis_cls&#39;] = &#39;myproject.RedisClient&#39;
   
   # \u5982\u679C\u4E3Atrue, \u5C06\u4F7F\u7528redis\u7684spop\u64CD\u4F5C,\u4F60\u5FC5\u987B\u4F7F\u7528sadd\u547D\u4EE4\u6765\u589E\u52A0urls\u5230redis\u961F\u5217. 
   # \u5982\u679C\u4F60\u60F3\u5728start urls\u7684\u5217\u8868\u907F\u514D\u91CD\u590D, \u5E76\u4E14\u987A\u5E8F\u4E0D\u91CD\u8981\u662F\u53EF\u4EE5\u4F7F\u7528
   REDIS_START_URLS_AS_SET = False
   
   # \u9ED8\u8BA4redis urls\u7684\u952E\u7528\u4E8ERedisSpider\u548CRedisCrawlSpider
   REDIS_START_URLS_KEY = &#39;%(name)s:start_urls&#39;
   
   # \u4E3Aredis\u4F7F\u7528\u5176\u4ED6\u7F16\u7801, \u9ED8\u8BA4utf-8
   # REDIS_ENCODING = &#39;latin1&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="spider\u90E8\u5206" tabindex="-1"><a class="header-anchor" href="#spider\u90E8\u5206" aria-hidden="true">#</a> spider\u90E8\u5206</h2><ul><li>spider\u7EE7\u627FRedisSpider\u7C7B</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from scrapy_redis.spiders import RedisCrawlSpider  # \u53EF\u4EE5\u81EA\u5B9A\u4E49\u5730\u5740\u8FC7\u6EE4, \u6682\u4E0D\u8003\u8651
from scrapy_redis.spiders import RedisSpider
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>start_urls</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># start_urls \u6765\u81EAredis, \u4F4D\u7F6E\u7531redis_key\u51B3\u5B9A, \u4E00\u822C\u4E3A spider_name:start_urls
redis_key = &#39;douban_spider_redis:start_urls&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>pipelines</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># item\u9ED8\u8BA4\u8F93\u51FA\u5230redis\u4E00\u4EFD, \u4F4D\u7F6E: spider_name:items
# \u53EF\u4EE5\u6539\u5199process_item\u65B9\u6CD5\u6765\u5C06item\u8F93\u51FA\u6210\u591A\u4E2A\u683C\u5F0F, \u4E5F\u53EF\u4EE5\u722C\u5B8C\u4E4B\u540E\u518D\u4ECEredis\u83B7\u53D6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u53EF\u4EE5\u6307\u5B9Aredis\u6570\u636E\u5E93\u5230\u5176\u4ED6\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u53EF\u4EE5\u6307\u5B9Aredis\u6570\u636E\u5E93\u5230\u5176\u4ED6\u4F4D\u7F6E" aria-hidden="true">#</a> \u53EF\u4EE5\u6307\u5B9Aredis\u6570\u636E\u5E93\u5230\u5176\u4ED6\u4F4D\u7F6E</h2>`,11),u={href:"https://blog.csdn.net/Bone_ACE/article/details/54139500",target:"_blank",rel:"noopener noreferrer"},m=i("\u53C2\u8003\u4F4D\u7F6E:https://blog.csdn.net/Bone_ACE/article/details/54139500"),_=i(" \u539F\u7406: \u91CD\u5199scrapy_redis\u7684\u8C03\u5EA6\u5668: scheduler.py\u4E0B\u7684from_settings()\u65B9\u6CD5\u8C03\u7528"),b={href:"http://xn--settings-q86n.xn--pyschedulerOverwrite-ce45a5gm0a66m563btn3df9b617e47am655abb3b.py",target:"_blank",rel:"noopener noreferrer"},o=i("\u5728settings.py\u540C\u7EA7\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6schedulerOverwrite.py"),E=i("\uFF0C\u586B\u5165\u4E0B\u9762\u7684\u4EE3\u7801\u3002\u7136\u540E\u5728settings.py\u8BBE\u7F6ESCHEDULER=schedulerOverwrite.SchedulerSon\uFF0C\u4E4B\u540E\u5728settings.py\u4E2D\u8BBE\u7F6EREDIS_DB=XXX\u5373\u53EF\u6307\u5B9Adb\u3002"),p=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import redis
from scrapy_redis.scheduler import Scheduler
from scrapy.utils.misc import load_object
# default values
SCHEDULER_PERSIST = False
QUEUE_KEY = &#39;%(spider)s:requests&#39;
QUEUE_CLASS = &#39;scrapy_redis.queue.SpiderPriorityQueue&#39;
DUPEFILTER_KEY = &#39;%(spider)s:dupefilter&#39;
IDLE_BEFORE_CLOSE = 0
 
REDIS_URL = None
REDIS_HOST = &#39;localhost&#39;
REDIS_PORT = 6379
REDIS_DB = 0
 
 
def from_settings(settings):
    url = settings.get(&#39;REDIS_URL&#39;, REDIS_URL)
    host = settings.get(&#39;REDIS_HOST&#39;, REDIS_HOST)
    port = settings.get(&#39;REDIS_PORT&#39;, REDIS_PORT)
    db = settings.get(&#39;REDIS_DB&#39;, REDIS_DB)

    # REDIS_URL takes precedence over host/port specification.
    if url:
        return redis.from_url(url)
    else:
        return redis.Redis(host=host, port=port, db=db)
 
 
class SchedulerSon(Scheduler):
    @classmethod
    def from_settings(cls, settings):
        persist = settings.get(&#39;SCHEDULER_PERSIST&#39;, SCHEDULER_PERSIST)
        queue_key = settings.get(&#39;SCHEDULER_QUEUE_KEY&#39;, QUEUE_KEY)
        queue_cls = load_object(settings.get(&#39;SCHEDULER_QUEUE_CLASS&#39;, QUEUE_CLASS))
        dupefilter_key = settings.get(&#39;DUPEFILTER_KEY&#39;, DUPEFILTER_KEY)
        idle_before_close = settings.get(&#39;SCHEDULER_IDLE_BEFORE_CLOSE&#39;, IDLE_BEFORE_CLOSE)
        server = from_settings(settings)
        return cls(server, persist, queue_key, queue_cls, dupefilter_key, idle_before_close)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function S(R,h){const s=l("ExternalLinkIcon");return a(),t("div",null,[c,e("p",null,[e("a",u,[m,n(s)]),_]),e("p",null,[e("a",b,[o,n(s)]),E]),p])}var I=r(v,[["render",S],["__file","scrapy-redis.html.vue"]]);export{I as default};
