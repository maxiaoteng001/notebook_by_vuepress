import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as a,c as o,a as n,b as t,d as e,e as u}from"./app.29a9c448.js";const d={},c=n("h1",{id:"python-logging",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-logging","aria-hidden":"true"},"#"),e(" python logging")],-1),r=n("p",null,"logging\u53EF\u4EE5\u53D1\u9001\u5230\u63A7\u5236\u53F0, \u6587\u4EF6, \u7F51\u7EDC",-1),v=n("h2",{id:"_1-\u7B49\u7EA7",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u7B49\u7EA7","aria-hidden":"true"},"#"),e(" 1. \u7B49\u7EA7")],-1),p=n("li",null,"a. logging.CRITICAL",-1),g=n("li",null,"b. logging.ERROR",-1),m=n("li",null,"c. logging.WARNING",-1),b=e("d. "),q={href:"http://logging.INFO",target:"_blank",rel:"noopener noreferrer"},_=e("logging.INFO"),h=n("li",null,"e. logging.DEBUG",-1),k=u(`<h2 id="_2-\u5B9E\u8DF5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B9E\u8DF5" aria-hidden="true">#</a> 2. \u5B9E\u8DF5</h2><ol><li><p>\u4F7F\u7528<code>__name__</code>\u4F5C\u4E3Alogger\u7684\u540D\u79F0</p><ul><li>\u4FBF\u4E8E\u77E5\u9053\u65E5\u5FD7\u6765\u81EA\u54EA\u4E2A\u6A21\u5757</li></ul></li><li><p>\u5F02\u5E38\u6355\u6349\u65F6\u4F7F\u7528<code>traceback</code>\u8BB0\u5F55</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  logger.error(&#39;Failed to open file&#39;, exc_info=True)   
  logger.exception(&#39;Failed to open file&#39;)   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4E0D\u8981\u5728\u6A21\u5757\u5C42\u6B21\u521B\u5EFAlogger \u56E0\u4E3A\u5728\u6A21\u5757\u5C42\u9762\u83B7\u5F97\u7684logger\uFF0C\u5728\u52A0\u8F7D\u4E86\u914D\u7F6E\u6587\u4EF6\u540E\u90FD\u5C06\u5931\u6548<br> \u800C\u5E94\u8BE5\u5728\u4F7F\u7528\u65F6\u83B7\u5F97</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import logging
    
    def foo():
        logger = logging.getLogger(__name__)
        logger.info(&#39;Hi, foo&#39;)
    
    class Bar(object):
        def __init__(self, logger=None):
            self.logger = logger or logging.getLogger(__name__)
    
        def bar(self):
            self.logger.info(&#39;Hi, bar&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528json\u6216YAML\u8BB0\u5F55\u914D\u7F6E</p><ol><li>logging.json<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    {
        &quot;version&quot;: 1,
        &quot;disable_existing_loggers&quot;: false,  # \u5982\u679C\u4E3ATrue,\u5219\u6A21\u5757\u5C42\u9762\u83B7\u53D6\u7684logger\u90FD\u5931\u6548
        &quot;formatters&quot;: {
            &quot;simple&quot;: {
                &quot;format&quot;: &quot;%(asctime)s - %(name)s - %(levelname)s - %(message)s&quot;
            }
        },
    
        &quot;handlers&quot;: {
            &quot;console&quot;: {
                &quot;class&quot;: &quot;logging.StreamHandler&quot;,
                &quot;level&quot;: &quot;DEBUG&quot;,
                &quot;formatter&quot;: &quot;simple&quot;,
                &quot;stream&quot;: &quot;ext://sys.stdout&quot;
            },
    
            &quot;info_file_handler&quot;: {
                &quot;class&quot;: &quot;logging.handlers.RotatingFileHandler&quot;,
                &quot;level&quot;: &quot;INFO&quot;,
                &quot;formatter&quot;: &quot;simple&quot;,
                &quot;filename&quot;: &quot;info.log&quot;,
                &quot;maxBytes&quot;: 10485760,
                &quot;backupCount&quot;: 20,
                &quot;encoding&quot;: &quot;utf8&quot;
            },
    
            &quot;error_file_handler&quot;: {
                &quot;class&quot;: &quot;logging.handlers.RotatingFileHandler&quot;,
                &quot;level&quot;: &quot;ERROR&quot;,
                &quot;formatter&quot;: &quot;simple&quot;,
                &quot;filename&quot;: &quot;errors.log&quot;,
                &quot;maxBytes&quot;: 10485760,
                &quot;backupCount&quot;: 20,
                &quot;encoding&quot;: &quot;utf8&quot;
            }
        },
    
        &quot;loggers&quot;: {
            &quot;my_module&quot;: {
                &quot;level&quot;: &quot;ERROR&quot;,
                &quot;handlers&quot;: [&quot;console&quot;],
                &quot;propagate&quot;: &quot;no&quot;
            }
        },
    
        &quot;root&quot;: {
            &quot;level&quot;: &quot;INFO&quot;,
            &quot;handlers&quot;: [&quot;console&quot;, &quot;info_file_handler&quot;, &quot;error_file_handler&quot;]
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u8BFB\u53D6json\u914D\u7F6E<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import json
    import logging.config
    
    def setup_logging(
        default_path=&#39;logging.json&#39;, 
        default_level=logging.INFO,
        env_key=&#39;LOG_CFG&#39;
    ):
        &quot;&quot;&quot;Setup logging configuration
    
        &quot;&quot;&quot;
        path = default_path
        value = os.getenv(env_key, None)
        if value:
            path = value
        if os.path.exists(path):
            with open(path, &#39;rt&#39;) as f:
                config = json.load(f)
            logging.config.dictConfig(config)
        else:
            logging.basicConfig(level=default_level)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="_2-\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#_2-\u914D\u7F6E" aria-hidden="true">#</a> 2. \u914D\u7F6E</h2><ol><li>\u57FA\u7840\u914D\u7F6E<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> logging

logFilename <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>dirname<span class="token punctuation">(</span>os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>abspath<span class="token punctuation">(</span>__file__<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;../log/ele.log&#39;</span><span class="token punctuation">)</span>

log_dir <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>split<span class="token punctuation">(</span>logFilename<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> <span class="token keyword">not</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>exists<span class="token punctuation">(</span>log_dir<span class="token punctuation">)</span><span class="token punctuation">:</span>
    os<span class="token punctuation">.</span>makedirs<span class="token punctuation">(</span>log_dir<span class="token punctuation">)</span>
logging<span class="token punctuation">.</span>basicConfig<span class="token punctuation">(</span>
    level <span class="token operator">=</span> logging<span class="token punctuation">.</span>DEBUG<span class="token punctuation">,</span>  <span class="token comment"># \u5B9A\u4E49\u8F93\u51FA\u5230\u6587\u4EF6\u7684log\u7EA7\u522B\uFF0C</span>
    <span class="token builtin">format</span> <span class="token operator">=</span> <span class="token string">&#39;%(asctime)s  %(filename)s : %(levelname)s  %(message)s&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u5B9A\u4E49\u8F93\u51FAlog\u7684\u683C\u5F0F</span>
    datefmt<span class="token operator">=</span> <span class="token string">&#39;%Y-%m-%d %A %H:%M:%S&#39;</span><span class="token punctuation">,</span>  <span class="token comment"># \u65F6\u95F4</span>
    filename <span class="token operator">=</span> logFilename<span class="token punctuation">,</span>  <span class="token comment"># log\u6587\u4EF6\u540D</span>
    filemode <span class="token operator">=</span> <span class="token string">&#39;w&#39;</span>
<span class="token punctuation">)</span>   
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u65E5\u5FD7\u662F\u7EBF\u7A0B\u5B89\u5168\u7684\uFF0C\u4F46\u662F\u591A\u8FDB\u7A0B\u4F1A\u6709\u95EE\u9898\uFF0C\u901A\u5E38\u89E3\u51B3\u601D\u8DEF\uFF1A <ol><li>\u6BCF\u4E2A\u8FDB\u7A0B\u5355\u72EC\u5199\u4E00\u4E2A\u6587\u4EF6</li><li>\u4F7F\u7528socketHandler\uFF0C\u542F\u4E00\u4E2A\u7EBF\u7A0B\u6216\u8FDB\u7A0B\u5355\u72EC\u5904\u7406</li><li>\u591A\u8FDB\u7A0Bmulitprocessing\u4E2D\u7684Queue\u961F\u5217\u5B58\u50A8\u65E5\u5FD7\uFF0C\u5355\u72EC\u4E00\u4E2A\u8FDB\u7A0B\u5904\u7406</li></ol></li></ol><h2 id="_3-\u9047\u5230\u7684bug" tabindex="-1"><a class="header-anchor" href="#_3-\u9047\u5230\u7684bug" aria-hidden="true">#</a> 3. \u9047\u5230\u7684bug</h2><pre><code>1. [\u591A\u8FDB\u7A0B+ \u591A\u7EBF\u7A0B + logging\u9047\u5230\u7684\u95EE\u9898](https://mozillazg.com/2016/09/python-threading-multiprocessing-logging-equal-deadlock.html)
    1. \u4E3B\u8981\u95EE\u9898\u662F\u521B\u5EFA\u5B50\u8FDB\u7A0B\u65F6, \u5982\u679C\u4F7F\u7528multiprocessing, \u4F1Afork\u7236\u8FDB\u7A0B\u7684\u6240\u6709\u7684\u72B6\u6001, \u6B64\u65F6\u5982\u679C\u67D0\u4E2A\u7EBF\u7A0B\u6B63\u5728\u5199\u65E5\u5FD7, logging\u7684\u9501\u5C06\u88ABfork\u5230\u5B50\u8FDB\u7A0B\u4E2D, \u5BFC\u81F4\u5B50\u8FDB\u7A0Blogging\u9501\u65E0\u6CD5\u91CA,\u4EA7\u751F\u6B7B\u9501
    2. \u89E3\u51B3\u529E\u6CD5: \u4F7F\u7528subprocess, \u6216\u53EA\u4F7F\u7528\u591A\u8FDB\u7A0B+logging
</code></pre>`,6);function f(x,y){const s=l("ExternalLinkIcon");return a(),o("div",null,[c,r,v,n("ul",null,[p,g,m,n("li",null,[b,n("a",q,[_,t(s)])]),h]),k])}var R=i(d,[["render",f],["__file","logging.html.vue"]]);export{R as default};
