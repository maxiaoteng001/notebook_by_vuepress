import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.29a9c448.js";const a={},d=s(`<h1 id="aws-\u670D\u52A1\u5668\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#aws-\u670D\u52A1\u5668\u914D\u7F6E" aria-hidden="true">#</a> aws \u670D\u52A1\u5668\u914D\u7F6E</h1><h2 id="\u73AF\u5883" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883" aria-hidden="true">#</a> \u73AF\u5883</h2><p><strong>Red Hat Enterprise Linux (RHEL) 7</strong></p><h2 id="_1-yum\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_1-yum\u8BF4\u660E" aria-hidden="true">#</a> 1. yum\u8BF4\u660E</h2><p>Yum\uFF08\u5168\u79F0\u4E3A Yellow dog Updater, Modified\uFF09\u662F\u4E00\u4E2A\u5728Fedora\u548CRedHat\u4EE5\u53CACentOS\u4E2D\u7684Shell\u524D\u7AEF\u8F6F\u4EF6\u5305\u7BA1\u7406\u5668\u3002\u57FA\u4E8ERPM\u5305\u7BA1\u7406\uFF0C\u80FD\u591F\u4ECE\u6307\u5B9A\u7684\u670D\u52A1\u5668\u81EA\u52A8\u4E0B\u8F7DRPM\u5305\u5E76\u4E14\u5B89\u88C5\uFF0C\u53EF\u4EE5\u81EA\u52A8\u5904\u7406\u4F9D\u8D56\u6027\u5173\u7CFB\uFF0C\u5E76\u4E14\u4E00\u6B21\u5B89\u88C5\u6240\u6709\u4F9D\u8D56\u7684\u8F6F\u4EF6\u5305\uFF0C\u65E0\u987B\u7E41\u7410\u5730\u4E00\u6B21\u6B21\u4E0B\u8F7D\u3001\u5B89\u88C5</p><ul><li>\u5B89\u88C5\u5E76\u542F\u7528EPEL rpm\u8F6F\u4EF6\u5305 ELEP: Extra Packages for Enterprise Linux\u7684\u7B80\u79F0\uFF0C\u662F\u4E3A\u4F01\u4E1A\u7EA7Linux\u63D0\u4F9B\u7684\u4E00\u7EC4\u9AD8\u8D28\u91CF\u7684\u989D\u5916\u8F6F\u4EF6\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install \u2013y https://dl.fedoraproject.org/pub/epel/epel-release-latest-7.noarch.rpm
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5B89\u88C5\u8F6F\u4EF6\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install -y python36  # -y\u4E3A\u81EA\u52A8\u5E94\u7B54
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5347\u7EA7\u8F6F\u4EF6\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum check-update  # \u68C0\u67E5\u66F4\u65B0
sudo yum update  # \u5347\u7EA7\u6240\u6709
sudo yum update tomcat  # \u5347\u7EA7\u7279\u5B9A\u8F6F\u4EF6\u5305
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u5DF2\u5B89\u88C5\u8F6F\u4EF6</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum list installed
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u67E5\u770B\u8F6F\u4EF6\u5305\u7684\u63CF\u8FF0\u4FE1\u606F</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>yum info tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>\u5378\u8F7D\u8F6F\u4EF6\u5305</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum remove tomcat
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u57FA\u672C\u8F6F\u4EF6" tabindex="-1"><a class="header-anchor" href="#_2-\u57FA\u672C\u8F6F\u4EF6" aria-hidden="true">#</a> 2. \u57FA\u672C\u8F6F\u4EF6</h2><h3 id="\u5148\u67E5\u770B\u53EF\u5B89\u88C5\u5305-\u6BD4\u5982" tabindex="-1"><a class="header-anchor" href="#\u5148\u67E5\u770B\u53EF\u5B89\u88C5\u5305-\u6BD4\u5982" aria-hidden="true">#</a> - \u5148\u67E5\u770B\u53EF\u5B89\u88C5\u5305, \u6BD4\u5982:</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum list| grep python3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u5B89\u88C5python36-\u548C-pip" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5python36-\u548C-pip" aria-hidden="true">#</a> \u5B89\u88C5python36 \u548C pip</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install python36
# \u867D\u71363.4\u4E4B\u540E\u9ED8\u8BA4\u5305\u542Bpip, \u4F46\u6211\u7684\u7248\u672C\u592A\u7EAF\u51C0\u6CA1\u6709pip
python36 -m pip --version
&gt; /usr/bin/python36: No module named pip
# \u5B89\u88C5pip
sudo wget https://bootstrap.pypa.io/get-pip.py
sudo python3.6 get-pip.py

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="python34" tabindex="-1"><a class="header-anchor" href="#python34" aria-hidden="true">#</a> - python34</h3><p>\u53D1\u73B0\u53EF\u4EE5\u5B89\u88C5\u7684\u6700\u65B0\u7248\u672C\u662Fpython36, \u4F46\u662F\u6CA1\u6709python36-pip, \u4E0D\u4FBF\u4E8E\u7BA1\u7406, \u5B89\u88C5python34</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo yum install python34
$ type -a python34    //type \u547D\u4EE4\u67E5\u770B\u547D\u4EE4\u7684\u8DEF\u5F84
python34 is /usr/bin/python34
$ sudo ln /usr/bin/python34 /usr/bin/python3    //\u5EFA\u7ACB\u8F6F\u8FDE\u63A5, \u66F4\u4FBF\u4E8E\u8BBF\u95EE
$ type -a python3    
python3 is /usr/bin/python3

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5B89\u88C5-pip-requests-lxml-bs4" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-pip-requests-lxml-bs4" aria-hidden="true">#</a> - \u5B89\u88C5 pip, requests, lxml, bs4</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo yum install python34-pip
$ sudo pip install pip -U -q  # \u9759\u9ED8\u5B89\u88C5, \u5347\u7EA7
$ pip --version
$ sudo python3 -m pip install requests lxml bs4  //\u8981\u60F3\u4F7F\u7528\u8FD9\u79CD, \u9700\u8981\u5B89\u88C5

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E8C\u79CD\u65B9\u6CD5:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5982\u679C\u60F3\u5B89\u88C5setuptools, \u4F7F\u7528\u4EE5\u4E0B\u65B9\u6CD5:
$ sudo yum install python36-setuptools
$ sudo easy_install-3.6 pip
$ sudo pip3 install requests lxml bs4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29),l=[d];function t(r,u){return i(),n("div",null,l)}var c=e(a,[["render",t],["__file","aws.html.vue"]]);export{c as default};
