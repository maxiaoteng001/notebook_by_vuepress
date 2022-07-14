import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as d}from"./app.29a9c448.js";const a={},l=d(`<h1 id="shell\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#shell\u547D\u4EE4" aria-hidden="true">#</a> Shell\u547D\u4EE4</h1><h2 id="\u5F00\u5934" tabindex="-1"><a class="header-anchor" href="#\u5F00\u5934" aria-hidden="true">#</a> \u5F00\u5934</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u811A\u672C\u4EE5.sh\u7ED3\u5C3E, \u5E76\u4E14\u8981\u4F7F\u7528<code>chmod +x filename.sh</code>\u6765\u4F7F\u6587\u4EF6\u4E3A\u53EF\u6267\u884C\u811A\u672C</p><h2 id="\u6CE8\u91CA" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u91CA" aria-hidden="true">#</a> \u6CE8\u91CA</h2><p>\u6CE8\u91CA\u4EE5&quot; # &quot; \u6765\u5F00\u59CB, \u5360\u636E\u4E00\u884C</p><h2 id="\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u53D8\u91CF" aria-hidden="true">#</a> \u53D8\u91CF</h2><ol><li><p>\u5B9A\u4E49\u53D8\u91CF\u65F6,\u53D8\u91CF\u540D\u4E0D\u52A0\u7F8E\u5143\u7B26\u53F7($)</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token assign-left variable">a</span><span class="token operator">=</span><span class="token string">&quot;shell&quot;</span> 
\u53D8\u91CF\u540D\u548C\u7B49\u53F7\u4E4B\u95F4\u4E0D\u80FD\u6709\u7A7A\u683C, \u9664\u4E86\u663E\u5F0F\u8D4B\u503C, \u8FD8\u53EF\u4EE5\u7528\u8BED\u53E5\u8D4B\u503C
<span class="token keyword">for</span> <span class="token for-or-select variable">file</span> <span class="token keyword">in</span> <span class="token string">&#39;ls /etc&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528\u53D8\u91CF\u7528\${}\u8868\u793A(\u82B1\u62EC\u53F7\u867D\u7136\u53EF\u4EE5\u4E0D\u7528, \u4F46\u5C3D\u91CF\u4F7F\u7528)</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>echo &quot;a is \${a}&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u7B49\u5F85sleep" tabindex="-1"><a class="header-anchor" href="#\u7B49\u5F85sleep" aria-hidden="true">#</a> \u7B49\u5F85sleep</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sleep 5  # \u9ED8\u8BA4\u4E3A\u79D2
sleep 5s
sleep 5m
sleep 5h
sleep 5d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5B57\u7B26\u4E32" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26\u4E32" aria-hidden="true">#</a> \u5B57\u7B26\u4E32</h2><p>\u5355\u5F15\u53F7\u7684\u53D8\u91CF\u548C\u8F6C\u4E49\u5B57\u7B26\u662F\u65E0\u6548\u7684, \u53EA\u4F1A\u539F\u6837\u8F93\u51FA</p><p>\u53CC\u5F15\u53F7\u53EF\u4EE5\u6709\u53D8\u91CF\u548C\u8F6C\u4E49\u5B57\u7B26, \u6BD4\u5982:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>your_name=&#39;qinjx&#39;
str=&quot;Hello, I know your are \\&quot;$your_name\\&quot;! \\n&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u73AF\u5883\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u53D8\u91CF" aria-hidden="true">#</a> \u73AF\u5883\u53D8\u91CF</h2><p>\u4F7F\u7528export\u5BFC\u5165\u73AF\u5883\u53D8\u91CF, \u547D\u4EE4\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u8FD0\u884C\u547D\u4EE4\u7684\u4E24\u79CD\u65B9\u6CD5

/usr/bin/python /XXX/xx.py

export

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="shell\u6D41\u7A0B\u63A7\u5236" tabindex="-1"><a class="header-anchor" href="#shell\u6D41\u7A0B\u63A7\u5236" aria-hidden="true">#</a> shell\u6D41\u7A0B\u63A7\u5236</h2><ol><li>if\u8BED\u53E5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>if condition
then
    comamnd1
    command2
    command3
elif condition2
    command4
else
    command5
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>for</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for var in item1 item2... itemn
do
    command1
    ...
    commandn
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>while</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>while condition
do 
    command
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5E76\u884C\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u5E76\u884C\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4" aria-hidden="true">#</a> \u5E76\u884C\u8FD0\u884C\u591A\u4E2A\u547D\u4EE4</h2><p>&amp;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
# \u542F\u52A8\u722C\u866B
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 0 &gt;/dev/null 2&gt;&amp;1 &amp;
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 1 &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u89E3\u91CA</strong>:</p><ul><li>\u6700\u540E\u7684 <code>&amp;</code>\u7B26\u53F7\u53EF\u4EE5\u4F7F\u547D\u4EE4\u5E76\u884C\u8FD0\u884C</li><li><code>&gt;</code>\u91CD\u5B9A\u5411\u7B26\u53F7</li><li><code>/dev/null</code> # \u4EE3\u8868\u7A7A\u8BBE\u5907\u6587\u4EF6</li><li><code>2&gt;</code> # \u4EE3\u8868stderr\u6807\u51C6\u9519\u8BEF</li><li><code>&amp;1</code> # \u4E2D\u7684&amp;\u8868\u793A\u7B49\u540C,\u5C31\u662F2\u7684\u8F93\u51FA\u7B49\u540C\u4E8E\u6807\u51C6\u8F93\u51FA</li><li><code>1</code> # \u8868\u793A\u7CFB\u7EDF\u6807\u51C6\u8F93\u51FA <code>&gt;/dev/null</code>\u7B49\u540C\u4E8E<code>1&gt;/dev/null</code></li><li><code>&gt;/dev/null 2&gt;&amp;1</code> # \u8868\u793A\u6B63\u5E38\u8F93\u51FA\u91CD\u5B9A\u5411\u5230null, \u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u52301, \u4E5F\u662Fnull</li><li><code>2&gt;&amp;1 &gt;/dev/null</code> # \u8868\u793A\u9519\u8BEF\u8F93\u51FA\u91CD\u5B9A\u5411\u52301, \u5373\u5C4F\u5E55, \u7136\u540E\u6B63\u786E\u8F93\u51FA\u91CD\u5B9A\u5411\u5230null</li></ul><h2 id="sh\u6837\u672C" tabindex="-1"><a class="header-anchor" href="#sh\u6837\u672C" aria-hidden="true">#</a> sh\u6837\u672C</h2><p>\u517C\u5BB9crontab\u7684\u8FD0\u884C, \u8BBE\u7F6E\u5168\u9762\u7684\u73AF\u5883\u53D8\u91CF\u548C\u8DEF\u5F84</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh  # \u6307\u5B9A\u811A\u672C\u89E3\u91CA\u5668

# \u751F\u6548\u5F53\u524D\u7528\u6237\u7684\u914D\u7F6E, \u901A\u5E38\u7528\u5728crontab\u4E2D
source ~/.bash_profile
source /etc/profile

# \u6DFB\u52A0\u73AF\u5883\u53D8\u91CF, \u6BD4\u5982scrapy\u521B\u5EFA\u5728\u4E86/usr/local/bin
# \u53EF\u4EE5\u901A\u8FC7echo $PATH\u6765\u6D4B\u8BD5\u662F\u5426\u6DFB\u52A0\u6210\u529F
SCRAPY_HOME=/usr/local/bin
export SCRAPY_HOME

PATH=$PATH:$SCRAPY_HOME
export PATH

# \u751F\u6548\u865A\u62DF\u73AF\u5883
source /data2/home/maxiaoteng/miniconda3/bin/activate /data2/home/maxiaoteng/miniconda3/envs/sjy_conda

# \u5207\u6362\u5230\u76EE\u5F55\u4E0B
cd /home/ec2-user/uber/crawler/python/zomato/
# \u542F\u52A8\u722C\u866B
/usr/bin/python3 zomato_apac.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
# \u542F\u52A8\u722C\u866B
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 0 &gt;/dev/null 2&gt;&amp;1 &amp;
/usr/bin/python3 /home/ec2-user/crawler/baemin/baeminApp3.0.py 1 &gt;/dev/null 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5BF9\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5BF9\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u5BF9\u76EE\u5F55\u548C\u6587\u4EF6\u7684\u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5224\u65AD\u64CD\u4F5C
#!/bin/bash
# \u5982\u679C\u6570\u636E\u6587\u4EF6\u5B58\u5728,\u5148\u5220\u9664
data_path=/home/maxiaoteng/ss.txt
if [ ! -f $data_path ];then
  echo \u4E0D\u5B58\u5728
else
  echo \u5B58\u5728, \u6211\u5220\u6389\u4E86
  rm -f $data_path
fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BF4\u660E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>-d # \u5224\u65AD\u76EE\u5F55\u662F\u5426\u5B58\u5728
-f # \u5224\u65AD\u6587\u4EF6\u662F\u5426\u5B58\u5728
-x # \u5224\u65AD\u8DEF\u5F84\u662F\u5426\u5B58\u5728\u5E76\u6709\u53EF\u6267\u884C\u6743\u9650
-n # \u5224\u65AD\u53D8\u91CF\u662F\u5426\u4E3A\u7A7A
    if [ ! -n $var ] ; then
        echo var \u53D8\u91CF\u4E3A\u7A7A
    fi
=  # \u5224\u65AD\u53D8\u91CF\u662F\u5426\u76F8\u7B49
    if [ $var1 = $var2 ]; then
        echo var1\u548Cvar2\u76F8\u7B49
    fi
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u9519\u8BEF" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF" aria-hidden="true">#</a> \u9519\u8BEF</h2><ul><li><code>syntax error: unexpected end of file</code>\u9519\u8BEF <ul><li>\u662F\u56E0\u4E3A<code>\\r\\n</code>\u4E0D\u517C\u5BB9\u5F15\u8D77\u7684</li><li>\u89E3\u51B3: <code>dos2unix file.sh</code></li></ul></li></ul>`,40),s=[l];function r(c,v){return i(),n("div",null,s)}var o=e(a,[["render",r],["__file","shell-command.html.vue"]]);export{o as default};
