import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as t,e as n}from"./app.29a9c448.js";const m={},s=n(`<h1 id="time-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#time-\u6A21\u5757" aria-hidden="true">#</a> time \u6A21\u5757</h1><p>time\u5F52\u7C7B\u5728<code>Generic Operating System Services</code>\u4E2D\uFF0C\u662F\u56F4\u7ED5\u7740 Unix Timestamp \u8FDB\u884C\u7684\uFF0C\u5176\u6240\u80FD\u8868\u8FF0\u7684\u65E5\u671F\u8303\u56F4\u88AB\u9650\u5B9A\u5728 1970 - 2038 \u4E4B\u95F4\u3002</p><ol><li><p>time.time()</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # \u8FD4\u56DEfloat\u7C7B\u578B\u7684\u65F6\u95F4
    now_time = time.time()
    print(now_time)   // \u2192  1532328411.9794893
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>int(time.time())</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    \u8FD4\u56DEint\u7684\u65F6\u95F4\uFF0C\u901A\u5E38\u505A\u65F6\u95F4\u6233

    print(int(time.time())   // \u2192  1532328411
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.localtime(time.time())</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    \u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61time.structtime, \u53EF\u4EE5\u7528 localtime.year \u5F97\u5230\u5F53\u524D\u65F6\u95F4\u7684\u5E74

    local_time = time.localtime(time.time())
    
    print(localtime)    // \u2192 time.structtime(tmyear=2018, tmmon=7, tmmday=23, tmhour=14, tmmin=46, tmsec=51, tmwday=0, tmyday=204, tm_isdst=0)

    print(type(localtime)  // \u2192 &lt;class &#39;time.structtime&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.strftime(formate, value)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    \u683C\u5F0F\u5316\u65F6\u95F4
    format = &#39;%Y - %m - %d - %H - %M - %S&#39;   // month\u548Cday\u8981\u5C0F\u5199
    dt = time.strftime(format, value)    // \u2192  2018 - 07 - 23 - 15 - 16 - 19
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>time.strptime()</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # \u53CD\u683C\u5F0F\u5316\u65F6\u95F4
    nowtime = time.strptime(strtime, format)
    // \u2192 \u8FD4\u56DEtime.structtime\u7C7B\u578B\u7684\u5BF9\u8C61
    print(nowtime)  // \u2192 time.structtime(tmyear=2018, tmmon=7, tmmday=23, tmhour=15, tmmin=16, tmsec=19, tmwday=0, tmyday=204, tmisdst=-1)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,3),l=[s];function a(d,r){return i(),t("div",null,l)}var u=e(m,[["render",a],["__file","time.html.vue"]]);export{u as default};
