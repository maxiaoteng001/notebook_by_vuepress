import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o as a,c as r,a as e,b as l,e as d,d as o}from"./app.29a9c448.js";const t={},c=d(`<h1 id="multiprocessing" tabindex="-1"><a class="header-anchor" href="#multiprocessing" aria-hidden="true">#</a> multiprocessing</h1><p>\u7528\u6765\u6267\u884Cpython\u7684\u51FD\u6570\uFF0C\u4ED6\u542F\u52A8\u7684\u8FDB\u7A0B\u4F1A\u91CD\u65B0\u52A0\u8F7D\u7236\u8FDB\u7A0B\u7684\u4EE3\u7801\u3002\u53EF\u4EE5\u901A\u8FC7Queue\u3001Array\u3001Value\u7B49\u5BF9\u8C61\u6765\u901A\u4FE1\u3002</p><h2 id="\u7528\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u7528\u6CD5" aria-hidden="true">#</a> \u7528\u6CD5</h2><ol><li><p>\u666E\u901A\u7528\u6CD5</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>from multiprocessing import Process

def p_job(x):
    ...

pros = []
for i in range(5):
    p = Process(target=p_job, args=(i,))
    p.start()
    pros.append(p)
# \u5148\u542F\u52A8\u5B50\u8FDB\u7A0B\uFF0C\u518Djoin\uFF0C\u7236\u8FDB\u7A0B\u7B49\u5F85
for pro in pros:
    pro.join()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u7A0B\u6C60 Pool</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>from multiprocessing import Pool
import os, time, random

def long_time_task(name):
    print(&#39;Run task %s (%s)...&#39; % (name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print(&#39;Task %s runs %0.2f seconds.&#39; % (name, (end - start)))

if __name__==&#39;__main__&#39;:
    print(&#39;Parent process %s.&#39; % os.getpid())
    p = Pool(4)
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print(&#39;Waiting for all subprocesses done...&#39;)
    p.close()
    p.join()
    print(&#39;All subprocesses done.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u591A\u8FDB\u7A0B\u8D85\u65F6\u9000\u51FA\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_2-\u591A\u8FDB\u7A0B\u8D85\u65F6\u9000\u51FA\u95EE\u9898" aria-hidden="true">#</a> 2. \u591A\u8FDB\u7A0B\u8D85\u65F6\u9000\u51FA\u95EE\u9898</h2>`,5),m={href:"https://stackoverflow.com/questions/29494001/how-can-i-abort-a-task-in-a-multiprocessing-pool-after-a-timeout#",target:"_blank",rel:"noopener noreferrer"},v=o("https://stackoverflow.com/questions/29494001/how-can-i-abort-a-task-in-a-multiprocessing-pool-after-a-timeout#");function u(p,b){const n=s("ExternalLinkIcon");return a(),r("div",null,[c,e("p",null,[e("a",m,[v,l(n)])])])}var g=i(t,[["render",u],["__file","multiprocessing.html.vue"]]);export{g as default};
