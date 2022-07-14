import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as e,e as s}from"./app.29a9c448.js";const n={},r=s(`<h1 id="process-status-ps\u8FDB\u7A0B\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#process-status-ps\u8FDB\u7A0B\u67E5\u770B" aria-hidden="true">#</a> Process Status -- ps\u8FDB\u7A0B\u67E5\u770B</h1><p>ps\u663E\u793A\u8FDB\u7A0B\u5FEB\u7167\uFF0C\u4F7F\u7528top\u52A8\u6001\u7684\u663E\u793A\u8FDB\u7A0B\u4FE1\u606F</p><h2 id="_1" tabindex="-1"><a class="header-anchor" href="#_1" aria-hidden="true">#</a> 1.</h2><ol><li><p>linux\u4E0A\u8FDB\u7A0B\u6709\u4E94\u79CD\u72B6\u6001</p><ul><li>\u8FD0\u884C(\u6B63\u5728\u8FD0\u884C\u6216\u5728\u8FD0\u884C\u961F\u5217\u4E2D\u7B49\u5F85)</li><li>\u4E2D\u65AD(\u4F11\u7720\u4E2D, \u53D7\u963B, \u5728\u7B49\u5F85\u67D0\u4E2A\u6761\u4EF6\u7684\u5F62\u6210\u6216\u63A5\u53D7\u5230\u4FE1\u53F7)</li><li>\u4E0D\u53EF\u4E2D\u65AD(\u6536\u5230\u4FE1\u53F7\u4E0D\u5524\u9192\u548C\u4E0D\u53EF\u8FD0\u884C, \u8FDB\u7A0B\u5FC5\u987B\u7B49\u5F85\u76F4\u5230\u6709\u4E2D\u65AD\u53D1\u751F)</li><li>\u50F5\u6B7B(\u8FDB\u7A0B\u5DF2\u7EC8\u6B62, \u4F46\u8FDB\u7A0B\u63CF\u8FF0\u7B26\u5B58\u5728, \u76F4\u5230\u7236\u8FDB\u7A0B\u8C03\u7528wait4()\u7CFB\u7EDF\u8C03\u7528\u540E\u91CA\u653E)</li><li>\u505C\u6B62(\u8FDB\u7A0B\u6536\u5230SIGSTOP, SIGTSTP, SIGTTIN, SIGTTOU\u4FE1\u53F7\u540E\u505C\u6B62\u8FD0\u884C\u8FD0\u884C)</li></ul></li><li><p>ps\u5DE5\u5177\u8868\u793A\u8FDB\u7A0B\u7684\u4E94\u79CD\u72B6\u6001</p><ul><li>D \u4E0D\u53EF\u4E2D\u65AD uninterruptible sleep (usually IO)</li><li>R \u8FD0\u884C runnable (on run queue)</li><li>S \u4E2D\u65AD sleeping</li><li>T \u505C\u6B62 traced or stopped</li><li>Z \u50F5\u6B7B a defunct (\u201Dzombie\u201D) process</li></ul></li><li><p>\u547D\u4EE4\u53C2\u6570</p><ul><li>a \u663E\u793A\u6240\u6709\u8FDB\u7A0B</li><li>-a \u663E\u793A\u540C\u4E00\u7EC8\u7AEF\u4E0B\u7684\u6240\u6709\u7A0B\u5E8F</li><li>-A \u663E\u793A\u6240\u6709\u8FDB\u7A0B</li><li>c \u663E\u793A\u8FDB\u7A0B\u7684\u771F\u5B9E\u540D\u79F0</li><li>-N \u53CD\u5411\u9009\u62E9</li><li>-e \u7B49\u4E8E\u201C-A\u201D</li><li>e \u663E\u793A\u73AF\u5883\u53D8\u91CF</li><li>f \u663E\u793A\u7A0B\u5E8F\u95F4\u7684\u5173\u7CFB</li><li>-H \u663E\u793A\u6811\u72B6\u7ED3\u6784</li><li>r \u663E\u793A\u5F53\u524D\u7EC8\u7AEF\u7684\u8FDB\u7A0B</li><li>T \u663E\u793A\u5F53\u524D\u7EC8\u7AEF\u7684\u6240\u6709\u7A0B\u5E8F</li><li>u \u6307\u5B9A\u7528\u6237\u7684\u6240\u6709\u8FDB\u7A0B</li><li>-au \u663E\u793A\u8F83\u8BE6\u7EC6\u7684\u8D44\u8BAF</li><li>-aux \u663E\u793A\u6240\u6709\u5305\u542B\u5176\u4ED6\u4F7F\u7528\u8005\u7684\u884C\u7A0B</li><li>-C&lt;\u547D\u4EE4&gt; \u5217\u51FA\u6307\u5B9A\u547D\u4EE4\u7684\u72B6\u51B5</li><li>\u2013lines&lt;\u884C\u6570&gt; \u6BCF\u9875\u663E\u793A\u7684\u884C\u6570</li><li>\u2013width&lt;\u5B57\u7B26\u6570&gt; \u6BCF\u9875\u663E\u793A\u7684\u5B57\u7B26\u6570</li><li>\u2013help \u663E\u793A\u5E2E\u52A9\u4FE1\u606F</li><li>\u2013version \u663E\u793A\u7248\u672C\u663E\u793A</li></ul></li><li><p>\u8F93\u51FA\u5217\u7684\u542B\u4E49</p><ul><li>F \u4EE3\u8868\u8FD9\u4E2A\u7A0B\u5E8F\u7684\u65D7\u6807 (flag)\uFF0C 4 \u4EE3\u8868\u4F7F\u7528\u8005\u4E3A super user</li><li>S \u4EE3\u8868\u8FD9\u4E2A\u7A0B\u5E8F\u7684\u72B6\u6001 (STAT)\uFF0C\u5173\u4E8E\u5404 STAT \u7684\u610F\u4E49\u5C06\u5728\u5185\u6587\u4ECB\u7ECD</li><li>UID \u7A0B\u5E8F\u88AB\u8BE5 UID \u6240\u62E5\u6709</li><li>PID \u8FDB\u7A0B\u7684ID</li><li>PPID \u5219\u662F\u5176\u4E0A\u7EA7\u7236\u7A0B\u5E8F\u7684ID</li><li>C CPU \u4F7F\u7528\u7684\u8D44\u6E90\u767E\u5206\u6BD4</li><li>PRI \u8FD9\u4E2A\u662F Priority (\u4F18\u5148\u6267\u884C\u5E8F) \u7684\u7F29\u5199\uFF0C\u8BE6\u7EC6\u540E\u9762\u4ECB\u7ECD</li><li>NI \u8FD9\u4E2A\u662F Nice \u503C\uFF0C\u5728\u4E0B\u4E00\u5C0F\u8282\u6211\u4EEC\u4F1A\u6301\u7EED\u4ECB\u7ECD</li><li>ADDR \u8FD9\u4E2A\u662F kernel function\uFF0C\u6307\u51FA\u8BE5\u7A0B\u5E8F\u5728\u5185\u5B58\u7684\u90A3\u4E2A\u90E8\u5206\u3002\u5982\u679C\u662F\u4E2A running\u7684\u7A0B\u5E8F\uFF0C\u4E00\u822C\u5C31\u662F \u201C-\u201C</li><li>SZ \u4F7F\u7528\u6389\u7684\u5185\u5B58\u5927\u5C0F</li><li>WCHAN \u76EE\u524D\u8FD9\u4E2A\u7A0B\u5E8F\u662F\u5426\u6B63\u5728\u8FD0\u4F5C\u5F53\u4E2D\uFF0C\u82E5\u4E3A - \u8868\u793A\u6B63\u5728\u8FD0\u4F5C</li><li>TTY \u767B\u5165\u8005\u7684\u7EC8\u7AEF\u673A\u4F4D\u7F6E</li><li>TIME \u4F7F\u7528\u6389\u7684 CPU \u65F6\u95F4\u3002</li><li>CMD \u6240\u4E0B\u8FBE\u7684\u6307\u4EE4\u4E3A\u4F55</li></ul></li><li><p>\u5E38\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    # \u663E\u793A\u6240\u6709\u8FDB\u7A0B
    ps -A
    # \u663E\u793A\u6307\u5B9A\u7528\u6237
    ps -u root

    # \u663E\u793A\u6240\u6709\u8FDB\u7A0B\uFF0C\u8FDE\u540C\u547D\u4EE4\u884C
    ps -ef

    # ps grep \u7EC4\u5408
    ps -ef|grep ssh

    # \u5217\u51FA\u6240\u6709\u6B63\u5728\u5185\u5B58\u4E2D\u7684\u7A0B\u5E8F
    ps aux
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),a=[r];function d(t,u){return l(),e("div",null,a)}var o=i(n,[["render",d],["__file","ps.html.vue"]]);export{o as default};
