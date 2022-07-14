import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as a,e as n}from"./app.29a9c448.js";const l={},s=n(`<h1 id="gerapy\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#gerapy\u5B89\u88C5" aria-hidden="true">#</a> Gerapy\u5B89\u88C5</h1><ul><li>\u5728aws\u4E0A\u5B89\u88C5 \u7CFB\u7EDFamazon linux, python\u7248\u672C:python36</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo python3 -m pip install gerapy 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u51FA\u73B0\u9519\u8BEF</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gcc -pthread -Wno-unused-result -Wsign-compare -DDYNAMIC_ANNOTATIONS_ENABLED=1 -DNDEBUG -O2 -g -pipe -Wall -Wp,-D_FORTIFY_SOURCE=2 -fexceptions -fstack-protector --param=ssp-buffer-size=4 -m64 -mtune=generic -D_GNU_SOURCE -fPIC -fwrapv -fPIC -I/usr/include/python3.6m -c src/twisted/test/raiser.c -o build/temp.linux-x86_64-3.6/src/twisted/test/raiser.o
    src/twisted/test/raiser.c:4:20: fatal error: Python.h: No such file or directory
     #include &quot;Python.h&quot;
                        ^
    compilation terminated.
**error: command &#39;gcc&#39; failed with exit status 1**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u89E3\u51B3\u65B9\u6848:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install python36-devel libxml2-devel libxslt-devel
sudo yum install gcc
**\u6CE8\u610F: \u5B89\u88C5python-devel\u9700\u8981\u6307\u5B9A\u7248\u672C, \u53EF\u89E3\u51B3\u95EE\u9898**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u9A8C\u8BC1\u6210\u529F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gerapy 
\u663E\u793A:
&gt; Usage:
  gerapy init [--folder=&lt;folder&gt;]
  gerapy migrate
  gerapy createsuperuser
  gerapy runserver [&lt;host:port&gt;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h2><ol><li>\u521D\u59CB\u5316</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gerapy init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u6267\u884C\u5B8C\u6BD5\u540E, \u672C\u5730\u751F\u6210gerapy\u6587\u4EF6\u5939, \u8FDB\u5165\u540E, \u770B\u5230projects\u6587\u4EF6\u5939</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cd gerapy
gerapy migrate  # \u5C06\u4F1A\u751F\u6210\u4E00\u4E2ASQLite\u6570\u636E\u5E93, \u540C\u65F6\u5EFA\u7ACB\u6570\u636E\u5E93\u8868
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u542F\u52A8\u670D\u52A1, gerapy\u5C06\u4F1A\u8FD0\u884C\u57286800\u7AEF\u53E3</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>gerapy runserver
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h2><p>gerapy\u5176\u5B9E\u662F\u7528\u6765\u7BA1\u7406\u591A\u4E2Ascrapyd\u7684\u670D\u52A1\u5668, \u6240\u4EE5\u6CA1\u5FC5\u8981\u8FD0\u884C\u5728\u591A\u4E2A\u670D\u52A1\u5668\u4E0A, \u6211\u53EF\u4EE5\u8FD0\u884C\u5728\u5DF4\u897F1 \u6216\u8005\u672C\u5730\u90FD\u53EF\u4EE5.</p>`,18),r=[s];function d(t,c){return i(),a("div",null,r)}var v=e(l,[["render",d],["__file","gerapy.html.vue"]]);export{v as default};
