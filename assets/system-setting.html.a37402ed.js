import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.29a9c448.js";const d={},l=s(`<h1 id="\u7CFB\u7EDF\u8BBE\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF\u8BBE\u7F6E" aria-hidden="true">#</a> \u7CFB\u7EDF\u8BBE\u7F6E</h1><h2 id="_1-\u4FEE\u6539dns" tabindex="-1"><a class="header-anchor" href="#_1-\u4FEE\u6539dns" aria-hidden="true">#</a> 1. \u4FEE\u6539dns</h2><pre><code>\`\`\`
vim /etc/resolv.conf
nameserver 172.24.73.130
nameserver 172.24.73.131
\`\`\`
</code></pre><ul><li>centos7\u5F15\u5165\u65B0\u7684\u673A\u5236 \u91CD\u542F\u670D\u52A1</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u8BE2 
nmcli connection show
    &gt; \u663E\u793A:
    NAME    UUID    TYPE    DEVICE
    em1 5fb06bd0-0bb0-7ffb-45f1-d6edd65f3e03    802-3-ethernet  em1

# \u6DFB\u52A0\u914D\u7F6E
nmcli con mod em01 ipv4.dns &quot;114.114.114.114 8.8.8.8&quot;

# \u91CD\u542F\u670D\u52A1
nmcli con up em1

## \u6CE8\u610F: em1\u5BF9\u5E94show\u547D\u4EE4\u67E5\u8BE2\u7684name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Ubuntu\u4FEE\u6539\u65B9\u5F0F:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo vim /etc/resolvconf/resolv.conf.d/base
    # \u6DFB\u52A0\u591A\u6761
    nameserver 8.8.8.8
    nameserver 8.8.8.8
# \u6267\u884C\u5982\u4E0B, /etc/resolv.conf \u4FBF\u53D1\u751F\u4E86\u66F4\u6539
resolvconf -u
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u65B9\u6CD5\u4E09, \u7B80\u5355\u7C97\u66B4</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5C06\u6587\u4EF6\u53D8\u6210\u53EA\u8BFB, \u4FEE\u6539\u6210\u81EA\u5DF1\u671F\u671B\u7684\u5373\u53EF
chattr +i /etc/resolv.conf
chattr -i /etc/resolv.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u81EA\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#_2-\u81EA\u542F\u52A8" aria-hidden="true">#</a> 2. \u81EA\u542F\u52A8</h2><ol><li><p>chkconfig \u67E5\u770B\u81EA\u542F\u52A8\u7684\u670D\u52A1</p></li><li><p>\u751F\u6548\u7981\u7528</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo systemctl disable/enable squid.service
# \u7981\u7528\u8F93\u51FA Removed symlink /etc/systemd/system/multi-user.target.wants/squid.service.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),a=[l];function r(c,t){return n(),i("div",null,a)}var m=e(d,[["render",r],["__file","system-setting.html.vue"]]);export{m as default};
