import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,e as n}from"./app.29a9c448.js";const d={},l=n(`<h1 id="\u6587\u4EF6\u53CA\u76EE\u5F55\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u53CA\u76EE\u5F55\u7BA1\u7406" aria-hidden="true">#</a> \u6587\u4EF6\u53CA\u76EE\u5F55\u7BA1\u7406</h1><h2 id="\u521B\u5EFA\u548C\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u548C\u5220\u9664" aria-hidden="true">#</a> \u521B\u5EFA\u548C\u5220\u9664</h2><ul><li>\u521B\u5EFA: mkdir</li><li>\u5220\u9664: rm</li><li>\u5220\u9664\u975E\u7A7A\u76EE\u5F55: rm -r file_name</li><li>\u5220\u9664\u65E5\u5FD7: rm *log</li><li>\u79FB\u52A8: mv</li><li>\u590D\u5236: cp</li><li>\u590D\u5236\u76EE\u5F55: cp -r</li></ul><p>\u67E5\u770B\u5F53\u4E0B\u76EE\u5F55\u6587\u4EF6\u4E2A\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find ./ |wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u590D\u5236\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cp -r source_dir dest_dir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u76EE\u5F55\u5207\u6362" tabindex="-1"><a class="header-anchor" href="#\u76EE\u5F55\u5207\u6362" aria-hidden="true">#</a> \u76EE\u5F55\u5207\u6362</h2><ul><li>\u5207\u6362\u4F4D\u7F6E: cd</li><li>\u5207\u6362\u4E0A\u4E00\u7EA7: cd .. \u6216: cd -</li><li>\u5207\u6362\u5230home: cd ~ or cd</li><li>\u663E\u793A\u5F53\u524D\u8DEF\u5F84: pwd</li><li>\u66F4\u6539\u5F53\u524D\u5DE5\u4F5C\u8DEF\u5F84\u4E3Apath: cd path</li></ul><h2 id="\u5217\u51FA\u76EE\u5F55\u9879" tabindex="-1"><a class="header-anchor" href="#\u5217\u51FA\u76EE\u5F55\u9879" aria-hidden="true">#</a> \u5217\u51FA\u76EE\u5F55\u9879</h2><ul><li>ls</li><li>\u6309\u65F6\u95F4\u6392\u5E8F, \u4EE5\u5217\u8868\u65B9\u5F0F\u663E\u793A: ls -lrt</li></ul><h2 id="\u67E5\u627E\u76EE\u5F55\u548C\u6587\u4EF6-find-location" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u76EE\u5F55\u548C\u6587\u4EF6-find-location" aria-hidden="true">#</a> \u67E5\u627E\u76EE\u5F55\u548C\u6587\u4EF6 find/location</h2><p>\u641C\u5BFB\u6587\u4EF6\u6216\u76EE\u5F55:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find ./ -name &#39;core*&#39; | xargs file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u67E5\u627E\u76EE\u6807\u6587\u4EF6\u5939\u662F\u5426\u6709obj\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find ./ -name &#39;*.o&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u9012\u5F52\u5220\u9664\u76EE\u5F55\u53CA\u5B50\u76EE\u5F55\u7684.o\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>find ./ -name &#39;*.o&#39; -exec rm {} \\
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>find</strong>\u662F\u5B9E\u65F6\u67E5\u627E, \u8981\u60F3\u66F4\u5FEB, \u53EF\u4EE5\u4F7F\u7528location<br><strong>location</strong>\u4E3A\u6587\u4EF6\u7CFB\u7EDF\u5EFA\u7ACB\u7D22\u5F15\u6570\u636E\u5E93, \u9700\u8981\u5B9A\u671F\u66F4\u65B0</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>location string   # \u5BFB\u627E\u5305\u542Bstring\u7684\u8DEF\u5F84
updatedb  # \u66F4\u65B0\u7D22\u5F15
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6587\u4EF6\u5185\u5BB9" aria-hidden="true">#</a> \u67E5\u770B\u6587\u4EF6\u5185\u5BB9</h2><p><strong>cat, vi, head, tail, more</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat -n  # \u663E\u793A\u7684\u540C\u65F6\u663E\u793A\u884C\u53F7

ls -al | more  # \u6309\u9875\u663E\u793A\u5217\u8868\u5185\u5BB9

# \u67E5\u770B\u524D10\u884C
head -10 file_name

# \u663E\u793A\u6587\u4EF6\u7B2C\u4E00\u884C
head -1 file_name

# \u67E5\u770B\u6587\u4EF6\u5DEE\u8DDD:
diff file1 file2

# \u67E5\u770B\u540E10\u884C
tail -10 file_name

# \u52A8\u6001\u663E\u793A\u6587\u672C\u66F4\u65B0
tail -f file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6539\u53D8\u6587\u4EF6\u548C\u76EE\u5F55\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u6539\u53D8\u6587\u4EF6\u548C\u76EE\u5F55\u6743\u9650" aria-hidden="true">#</a> \u6539\u53D8\u6587\u4EF6\u548C\u76EE\u5F55\u6743\u9650</h2><ul><li>chmod \u6539\u53D8\u6587\u4EF6\u8BFB\u5199\u6267\u884C\u5C5E\u6027</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>chmod a+x myscript

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6587\u4EF6\u521B\u5EFA\u522B\u540D-\u521B\u5EFA\u8F6F\u94FE\u63A5-\u786C\u94FE\u63A5" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u521B\u5EFA\u522B\u540D-\u521B\u5EFA\u8F6F\u94FE\u63A5-\u786C\u94FE\u63A5" aria-hidden="true">#</a> \u6587\u4EF6\u521B\u5EFA\u522B\u540D, \u521B\u5EFA\u8F6F\u94FE\u63A5/\u786C\u94FE\u63A5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ln cc ccAgain : \u786C\u94FE\u63A5, \u5220\u9664\u4E00\u4E2A, \u53E6\u4E00\u4E2A\u4ECD\u80FD\u627E\u5230
ln -s cc ccNew : \u8F6F\u94FE\u63A5, \u5220\u9664\u6E90, \u53E6\u4E00\u4E2A\u65E0\u6CD5\u4F7F\u7528 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7BA1\u9053\u548C\u91CD\u5B9A\u5411" tabindex="-1"><a class="header-anchor" href="#\u7BA1\u9053\u548C\u91CD\u5B9A\u5411" aria-hidden="true">#</a> \u7BA1\u9053\u548C\u91CD\u5B9A\u5411</h2><ul><li>\u6279\u5904\u7406\u547D\u4EE4\u8FDE\u63A5\u6267\u884C\u4F7F\u7528<code>|</code></li><li>\u4E32\u8054\u4F7F\u7528\u5206\u53F7<code>;</code></li><li>\u524D\u9762\u6210\u529F\u624D\u6267\u884C,\u5426\u5219\u4E0D\u6267\u884C\u4F7F\u7528<code>&amp;&amp;</code></li><li>\u524D\u9762\u5931\u8D25, \u540E\u9762\u624D\u6267\u884C\u4F7F\u7528<code>||</code></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls /etc &amp;&amp; echo suss! || echo failed.

\u7B49\u4EF7:
if ls /etc; then echo suss; else echo fail; fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u91CD\u5B9A\u5411</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>ls /etc &gt; list 2&gt; &amp;1  # \u5C06\u6807\u51C6\u8F93\u51FA\u548C\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u5230\u540C\u4E00\u6587\u4EF6

\u7B49\u4EF7:
ls /etc &amp;&gt; list

echo aa &gt;&gt; a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6E05\u7A7A\u6587\u4EF6:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>: &gt; a.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u8BBE\u7F6E\u73AF\u5883\u53D8\u91CF</h2><p>.profile\u6587\u4EF6</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>PATH=$APPDIR:/opt/app/soft/bin:$PATH:/usr/local/bin:$TUXDIR/bin:$ORACLE_HOME/bin;export PATH
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5E94\u7528\u4E3E\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u5E94\u7528\u4E3E\u4F8B" aria-hidden="true">#</a> \u5E94\u7528\u4E3E\u4F8B</h2><p>\u67E5\u770B\u6587\u4EF6\u4E2D\u5305\u542BAAA \u4E0D\u5305\u542BBBB \u7684\u6587\u4EF6\u884C\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cat log.log |grep AAA | grep -v BBB | wc -l
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,41),s=[l];function r(c,t){return i(),a("div",null,s)}var o=e(d,[["render",r],["__file","wen-jian-ji-mu-lu-guan-li.html.vue"]]);export{o as default};
