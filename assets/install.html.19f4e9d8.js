import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as r,c,a as s,b as i,e,d as n}from"./app.29a9c448.js";const t={},o=e('<h1 id="redis" tabindex="-1"><a class="header-anchor" href="#redis" aria-hidden="true">#</a> Redis</h1><h2 id="_1-redis\u7B80\u4ECB" tabindex="-1"><a class="header-anchor" href="#_1-redis\u7B80\u4ECB" aria-hidden="true">#</a> 1. Redis\u7B80\u4ECB</h2><ol><li><p>Redis\u662F\u4E00\u4E2A\u57FA\u4E8E\u5185\u5B58\u7684\u952E\u503C\u5BF9\u5B58\u50A8\u7CFB\u7EDF\uFF0C\u5E38\u7528\u4F5C\u6570\u636E\u5E93\u3001\u7F13\u5B58\u548C\u6D88\u606F\u4EE3\uF9E4 \u3002\u5B83\u652F\u6301\u5B57\u7B26\uF905\u3001\u5B57\u5178\u3001\uF99C\u8868\u3001\u96C6\u5408\u3001\u6709\u5E8F\u96C6\u5408\u3001\u4F4D\u56FE\uFF08Bitmaps\uFF09\u3001\u5730\uF9E4\u4F4D\u7F6E\u7B49\u591A\u79CD\u6570\u636E\u7ED3\u6784\uFF0C\u6240\u4EE5\u5E38\u5E38\u88AB\u79F0\u4E3A<strong>\u6570\u636E\u7ED3\u6784\u670D\u52A1\uFA38</strong>\u3002Redis\u652F\u6301\u4E8B\u52A1\u3001\u5206\u7247\u3001\u4E3B\u4ECE\u590D\u5236\uFF0C<strong>\u652F\u6301RDB</strong>\uFF08\u5C06\u5185\u5B58\u4E2D\u7684\u6570\u636E\u4FDD\u5B58\u5728\u6587\u4EF6\u4E2D\uFF09\u548CAOF\uFF08\u7C7B\u4F3C\u4E8EMySQL\u7684binlog\uFF09\u4E24\u79CD\u6301\u4E45\u5316\u65B9\u5F0F\uFF0C\u8FD8\u652F\u6301\u8BA2\u9605\u5206\u53D1\u3001Lua \u811A\u672C\u3001\u96C6\u7FA4\u7B49\u7279\u6027\u3002</p><ol><li>\u6570\u636E\u5B58\u653E\u5728\u5185\u5B58\u4E2D\uFF0C\u8BBF\u95EE\u901F\u5EA6\u5FEB</li><li>\u652F\u6301\u4E30\u5BCC\u7684\u6570\u636E\u7ED3\u6784\uFF1Astring,list, set, map...</li><li>\u539F\u5B50\u6027\u64CD\u4F5C\uFF0C\u5355\u7EBF\u7A0B\uFF0C\u5B89\u5168\uFF0C\u652F\u6301\u4E8B\u52A1(session)</li><li>\u53EF\u4EE5\u8BBE\u7F6E\u8FC7\u671F\u65F6\u95F4</li></ol></li><li><p>\u76F8\u5BF9\u4E8EMemcached\u7684\u4F18\u52BF</p><ol><li>redis\u53EF\u4EE5\u6301\u4E45\u5316\u6570\u636E Web\u5E94\u7528\u4E2D\u5E38\u9700\u8981\u5C06\u4E00\u4E9B\u91CD\u8981\u6570\u636E\u6301\u4E45\u5316\u5230\u786C\u76D8\uFF0C\u907F\u514D\u5B95\u673A\u7B49\u539F\u56E0\u5BFC\u81F4\u6570\u636E\u4E22\u5931\u3002Redis\u4F1A\u5468\u671F\u6027\u628A\uF901\u65B0\u7684\u6570\u636E\u5199\u5165\u78C1\u76D8\u6216\u8005\u8FFD\u52A0\u5230\u547D\u4EE4\u65E5\u5FD7\u4E2D\uFF0C\u5E76\u4E14\u5728\u6B64\u57FA\u7840\u4E0A\u5B9E\u73B0\uF9BA\u4E3B\u4ECE\u540C\u6B65\u3002\u800CMemcached\u5728\u8FDB\u7A0B\u5173\u95ED\u4E4B\u540E\u6570\u636E\u5C31\u4F1A\u4E22\u5931</li><li>memcached\u652F\u6301\u6570\u636E\u7C7B\u578B\u7B80\u5355 \u4E00\u4E9B\u4E1A\u52A1\u4E3A\uF9BA\u7B80\u5316\u5DE5\u4F5C\uFF0C\u9700\u8981\u4F7F\u7528\uF99C\u8868\u3001\u96C6\u5408\u8FD9\u6837\u53EA\u6709Redis\u624D\u652F\u6301\u7684\u6570\u636E\u7ED3\u6784\u3002\u76F8\u5BF9\u4E8EMemcahced\uFF0CRedis\u6709\uF901\u591A\u7684\u5E94\u7528\u573A\u666F</li><li>Redis\u901F\u5EA6\u5FEB\uFF0C\u5E76\u63D0\u4F9B\uF9BA\u4E30\u5BCC\u7684\u547D\u4EE4</li></ol></li><li><p>Redis\u5E94\u7528\u573A\u666F</p><ol><li>\u53D6Top N \u64CD\u4F5C</li><li>\u5B9E\u65F6\u7EDF\u8BA1</li><li>\u8BA1\u6570\u5668</li><li>\u663E\u793A\u6700\u65B0\u7684\u9879\u76EE\u5217\u8868</li><li>\u79D2\u6740\u6D3B\u52A8</li></ol></li></ol><h2 id="_2-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_2-\u5B89\u88C5" aria-hidden="true">#</a> 2. \u5B89\u88C5</h2>',4),p=s("li",null,[s("p",null,[n("ubuntu\u5B89\u88C5\u53EF\u4EE5\u4F7F\u7528"),s("code",null,"apt install redis-server"),n("\u4E00\u952E\u5B89\u88C5")])],-1),u=n("\u4EE5\u4E0B\u65B9\u6CD5\u7528\u4E8E\u5728aws ec2 \u4E0A\u5B89\u88C5 "),v={href:"https://medium.com/@andrewcbass/install-redis-v3-2-on-aws-ec2-instance-93259d40a3ce",target:"_blank",rel:"noopener noreferrer"},m=s("strong",null,"\u53C2\u8003\u6559\u7A0B",-1),b=n(":"),h=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">sudo</span> yum -y update 
$ <span class="token function">sudo</span> yum -y <span class="token function">install</span> gcc <span class="token function">make</span>  <span class="token comment"># \u5B89\u88C5gcc make\u7528\u6765\u7F16\u8BD1</span>

<span class="token comment"># \u4E0B\u8F7D\u6587\u4EF6</span>
<span class="token builtin class-name">cd</span> /usr/local/src 
<span class="token function">sudo</span> <span class="token function">wget</span> http://download.redis.io/releases/redis-4.0.11.tar.gz
<span class="token function">sudo</span> <span class="token function">tar</span> -xvzf redis-4.0.11.tar.gz 
<span class="token builtin class-name">cd</span> redis-stable
<span class="token function">make</span> <span class="token builtin class-name">test</span>  <span class="token comment"># \u53EF\u9009</span>
<span class="token comment"># \u7F16\u8BD1\u5B89\u88C5</span>
<span class="token function">make</span>  

<span class="token comment"># \u5B89\u88C5\u5230\u73AF\u5883\u53D8\u91CF</span>
<span class="token function">sudo</span> <span class="token function">make</span> <span class="token function">install</span>
<span class="token comment"># \u7B49\u4EF7\u4E8E: </span>
<span class="token function">sudo</span> <span class="token function">cp</span> src/redis-server /usr/local/bin/
<span class="token function">sudo</span> <span class="token function">cp</span> src/redis-cli /usr/local/bin/

<span class="token comment"># \u5B89\u88C5tcl</span>
<span class="token function">sudo</span> yum <span class="token function">install</span> -y tcl 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),k=s("h2",{id:"_3-\u914D\u7F6Eredis",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#_3-\u914D\u7F6Eredis","aria-hidden":"true"},"#"),n(" 3. \u914D\u7F6ERedis")],-1),g=n("\u53C2\u8003 "),f={href:"http://www.runoob.com/redis/redis-conf.html",target:"_blank",rel:"noopener noreferrer"},_=n("http://www.runoob.com/redis/redis-conf.html"),x=e(`<p>\u521D\u59CB\u914D\u7F6E\u6587\u4EF6\u4F4D\u4E8E\u89E3\u538B\u76EE\u5F55 <code>.../redis-stable/redis.conf</code></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ./redis-stable/redis.conf  
<span class="token function">sudo</span> <span class="token function">nano</span> redis.conf

    <span class="token builtin class-name">bind</span> <span class="token number">127.0</span>.0.1  <span class="token comment"># \u7ED1\u5B9A\u672C\u5730ip, \u8981\u60F3\u516C\u7F51\u8BBF\u95EE,\u6CE8\u91CA\u6389</span>
    requirepass xxx  <span class="token comment"># \u6DFB\u52A0\u94FE\u63A5\u5BC6\u7801, \u5728\u5141\u8BB8\u516C\u7F51\u8BBF\u95EE\u4E4B\u524D, \u5FC5\u987B\u8BBE\u7F6E\u5BC6\u7801</span>
    protected-mode  no  <span class="token comment"># \u7981\u7528\u4FDD\u62A4\u6A21\u5F0F, \u8FD9\u4E2A\u662F\u5728\u65E0\u5BC6\u7801\u65F6\u7981\u6B62\u516C\u7F51\u8BBF\u95EE\u4F7F\u7528\u7684                           </span>
    daemonize <span class="token function">yes</span>  <span class="token comment"># \u540E\u53F0\u8FD0\u884C                             </span>
    logfile <span class="token string">&quot;/var/log/redis_6379.log&quot;</span>             
    pidfile  /var/run/redis.pid 
    <span class="token function">dir</span> /var/redis/6379
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u79FB\u52A8\u914D\u7F6E\u6587\u4EF6:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cp</span> redis.conf /etc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_4-\u4F7F\u7528\u670D\u52A1\u65B9\u5F0F\u8FD0\u884Credis" tabindex="-1"><a class="header-anchor" href="#_4-\u4F7F\u7528\u670D\u52A1\u65B9\u5F0F\u8FD0\u884Credis" aria-hidden="true">#</a> 4. \u4F7F\u7528\u670D\u52A1\u65B9\u5F0F\u8FD0\u884Credis</h2><ol><li><p>\u7F16\u8F91\u914D\u7F6E\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">vim</span> /etc/systemd/system/redis.service
<span class="token comment"># \u6CE8\u610F\u6267\u884C\u547D\u4EE4\u548C\u914D\u7F6E\u6587\u4EF6\u7684\u8DEF\u5F84</span>

    <span class="token punctuation">[</span>unit<span class="token punctuation">]</span>
    <span class="token assign-left variable">Description</span><span class="token operator">=</span>The redis-server Process Manager
    <span class="token assign-left variable">After</span><span class="token operator">=</span>syslog.target network.target remote-fs.target nss-lookup.target
    
    <span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
    <span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
    <span class="token assign-left variable">PIDFile</span><span class="token operator">=</span>/var/run/redis.pid
    <span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/bin/redis-server /etc/redis.conf
    <span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/bin/kill -s HUP <span class="token variable">$MAINPID</span>
    <span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/bin/kill -s QUIT <span class="token variable">$MAINPID</span>
    <span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
    
    <span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
    <span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u91CD\u8F7Dsystemctl</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl daemon-reload 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u542F\u52A8\u91CD\u542F\u7B49\u64CD\u4F5C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl start/stop/restart/status redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>redis.server\u4FEE\u6539\u540E\u91CD\u542F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>systemctl <span class="token builtin class-name">enable</span> redis.service
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_5-\u4F7F\u7528service\u6765\u7BA1\u7406redis-server" tabindex="-1"><a class="header-anchor" href="#_5-\u4F7F\u7528service\u6765\u7BA1\u7406redis-server" aria-hidden="true">#</a> 5. \u4F7F\u7528service\u6765\u7BA1\u7406redis-server</h2><ol><li><p>\u4E0B\u8F7Dinit\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">wget</span> https://raw.githubusercontent.com/saxenap/install-redis-amazon-linux-centos/master/redis-server
<span class="token function">sudo</span> <span class="token function">mv</span> redis-server /etc/init.d
<span class="token function">sudo</span> <span class="token function">chmod</span> <span class="token number">755</span> /etc/init.d/redis-server

**/etc/init/ \u548C /etc/init.d \u4E24\u4E2A\u6587\u4EF6\u91CC\u7684\u811A\u672C, \u662F\u53EF\u4EE5\u4F7F\u7528service mmm start \u6765\u542F\u52A8\u67D0\u9879\u670D\u52A1\u7684**
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4FEE\u6539redis_server\u7684\u914D\u7F6E\u6587\u4EF6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/init.d/redis-server
    <span class="token comment"># \u7F16\u8F91\u6587\u4EF6\u4EE5\u5339\u914D\u914D\u7F6E\u6587\u4EF6</span>
    REDIS_CONF_FILE <span class="token operator">=</span>\u201C/etc/redis/6379.conf\u201D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BBE\u7F6Eredis\u670D\u52A1\u5668\u81EA\u542F\u52A8</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chkconfig</span> --add redis-server 
<span class="token function">sudo</span> <span class="token function">chkconfig</span> --level <span class="token number">345</span> redis-server on 
<span class="token function">sudo</span> <span class="token function">service</span> redis-server start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-\u6253\u5F00\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6-\u4FEE\u590Dredis\u5185\u5B58\u4F4E\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_6-\u6253\u5F00\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6-\u4FEE\u590Dredis\u5185\u5B58\u4F4E\u7684\u95EE\u9898" aria-hidden="true">#</a> 6. \u6253\u5F00\u7CFB\u7EDF\u914D\u7F6E\u6587\u4EF6, \u4FEE\u590Dredis\u5185\u5B58\u4F4E\u7684\u95EE\u9898</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">nano</span> /etc/sysctl.conf
      <span class="token comment">#confure redis background save issue </span>
      vm.overcommit_memory <span class="token operator">=</span> <span class="token number">1</span>
      systctl vm.overcommit_memory <span class="token operator">=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-\u6D4B\u8BD5redis\u670D\u52A1\u5668\u662F\u5426\u542F\u52A8\u6B63\u5E38" tabindex="-1"><a class="header-anchor" href="#_7-\u6D4B\u8BD5redis\u670D\u52A1\u5668\u662F\u5426\u542F\u52A8\u6B63\u5E38" aria-hidden="true">#</a> 7. \u6D4B\u8BD5redis\u670D\u52A1\u5668\u662F\u5426\u542F\u52A8\u6B63\u5E38</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-cli <span class="token function">ping</span>
    <span class="token comment"># \u54CD\u5E94\u4E3A PONG</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-\u5BA2\u6237\u7AEF\u8FDE\u63A5redis" tabindex="-1"><a class="header-anchor" href="#_8-\u5BA2\u6237\u7AEF\u8FDE\u63A5redis" aria-hidden="true">#</a> 8. \u5BA2\u6237\u7AEF\u8FDE\u63A5Redis</h2><ol><li><p>redis-cli # \u542F\u52A8redis\u5BA2\u6237\u7AEF</p></li><li><p>\u8FDE\u63A5\u5230\u672C\u5730redis \u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>  <span class="token comment"># \u8FDE\u63A5\u5230\u672C\u5730\u7684redis\u670D\u52A1\u5668 </span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u8FDE\u63A5\u5230\u8FDC\u7A0Bredis\u670D\u52A1\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>redis-cli -h <span class="token function">host</span> -p port -a password
<span class="token variable">$redis</span>-cli -h <span class="token number">127.0</span>.0.1 -p <span class="token number">6379</span> -a <span class="token string">&quot;mypass&quot;</span>
redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span>
redis <span class="token number">127.0</span>.0.1:637<span class="token operator"><span class="token file-descriptor important">9</span>&gt;</span> PING

PONG
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_9-\u53EF\u89C6\u5316redisdesktopmanager" tabindex="-1"><a class="header-anchor" href="#_9-\u53EF\u89C6\u5316redisdesktopmanager" aria-hidden="true">#</a> 9. \u53EF\u89C6\u5316RedisDesktopManager</h2>`,15);function y(w,R){const a=d("ExternalLinkIcon");return r(),c("div",null,[o,s("ol",null,[p,s("li",null,[s("p",null,[u,s("a",v,[m,b,i(a)])]),h])]),k,s("p",null,[g,s("a",f,[_,i(a)])]),x])}var P=l(t,[["render",y],["__file","install.html.vue"]]);export{P as default};
