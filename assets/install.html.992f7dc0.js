import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,o,c as a,a as e,b as l,d as n,e as r}from"./app.29a9c448.js";const t={},c=e("h1",{id:"\u5B89\u88C5",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u5B89\u88C5","aria-hidden":"true"},"#"),n(" \u5B89\u88C5")],-1),m=n("\u53C2\u8003: "),u={href:"https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/",target:"_blank",rel:"noopener noreferrer"},v=n("https://docs.mongodb.com/manual/tutorial/install-mongodb-on-amazon/"),b=e("br",null,null,-1),g=n(" \u53EF\u4EE5\u9009\u62E9\u591A\u5E73\u53F0\u7684\u5B89\u88C5, \u672C\u6B21\u5B89\u88C5\u73AF\u5883: Amazon linux"),h=r(`<h2 id="yum\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#yum\u5B89\u88C5" aria-hidden="true">#</a> yum\u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo nano /etc/yum.repos.d/mongodb-org-4.0.repo
    paste:
        [mongodb-org-4.0]
        name=MongoDB Repository
        baseurl=https://repo.mongodb.org/yum/amazon/2013.03/mongodb-org/4.0/x86_64/
        gpgcheck=1
        enabled=1
        gpgkey=https://www.mongodb.org/static/pgp/server-4.0.asc

$ sudo yum install -y mongodb-org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u8FD0\u884C" tabindex="-1"><a class="header-anchor" href="#\u8FD0\u884C" aria-hidden="true">#</a> \u8FD0\u884C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u542F\u52A8\u670D\u52A1
sudo service mongod start  
systemctl start mongod

sudo tail /var/log/mongodb/mongod.log   # \u9A8C\u8BC1\u662F\u5426\u8FD0\u884C

# \u5C06\u5728\u7CFB\u7EDF\u91CD\u542F\u540E\u81EA\u542F
sudo chkconfig mongod on
sudo systemctl ennable mongod

sudo service mongod stop  # \u505C\u6B62\u670D\u52A1
sudo service mongod restart  # \u91CD\u542F\u670D\u52A1
kill -15 mongo_id  # \u4F7F\u7528-15\u6740mongod\u8FDB\u7A0B\u907F\u514D\u9501\u6B7B
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><p>yum\u5B89\u88C5\u540E\u7684mongdb<br> mongod.conf \u7684\u4F4D\u7F6E: /etc/</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ sudo nano /etc/mongod.conf

/var/lib/mongod  # \u9ED8\u8BA4\u5B58\u50A8\u4F4D\u7F6E
/var/log/mongodb/mongod.log  # \u9ED8\u8BA4log\u4F4D\u7F6E
port: 27017
bindIp: 127.0.0.1  \u2192  0.0.0.0  # \u9ED8\u8BA4\u53EA\u5141\u8BB8\u672C\u5730\u8BBF\u95EE, \u4FEE\u6539\u540E\u5BF9\u4E92\u8054\u7F51\u5F00\u653E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5378\u8F7D" tabindex="-1"><a class="header-anchor" href="#\u5378\u8F7D" aria-hidden="true">#</a> \u5378\u8F7D</h2><ol><li>\u5173\u95EDmongod</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo service mongod stop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u5220\u9664\u5B89\u88C5\u5305</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum erase $(rpm -qa | grep mongodb-org)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u5220\u9664\u6570\u636E\u6587\u4EF6</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo rm -r /var/log/mongodb
sudo rm -r /var/lib/mongo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h1 id="\u4F7F\u7528robo-3t-\u901A\u8FC7ssh\u8FDE\u63A5mongodb" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528robo-3t-\u901A\u8FC7ssh\u8FDE\u63A5mongodb" aria-hidden="true">#</a> \u4F7F\u7528Robo 3T \u901A\u8FC7ssh\u8FDE\u63A5mongodb</h1><ol><li>AWS\u5B89\u5168\u7EC4\u8BBE\u7F6E, \u6DFB\u52A0\u5165\u7AD9\u7AEF\u53E3 27017</li><li>Robo 3T\u6DFB\u52A0\u94FE\u63A5, \u4F7F\u7528ssh\u9A8C\u8BC1</li></ol>`,16);function p(x,_){const i=s("ExternalLinkIcon");return o(),a("div",null,[c,e("p",null,[m,e("a",u,[v,l(i)]),b,g]),h])}var k=d(t,[["render",p],["__file","install.html.vue"]]);export{k as default};
