import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as l,c,a as s,b as e,e as t,d as n}from"./app.29a9c448.js";const p={},r=t(`<h1 id="\u4EE3\u7406\u670D\u52A1\u5668-proxy-server" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7406\u670D\u52A1\u5668-proxy-server" aria-hidden="true">#</a> \u4EE3\u7406\u670D\u52A1\u5668\uFF08Proxy server\uFF09</h1><p>[TOC]</p><h2 id="_1-\u4F7F\u7528squid\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668" tabindex="-1"><a class="header-anchor" href="#_1-\u4F7F\u7528squid\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668" aria-hidden="true">#</a> 1. \u4F7F\u7528Squid\u914D\u7F6E\u4EE3\u7406\u670D\u52A1\u5668</h2><p>\u7CFB\u7EDF\u4E3ACentOS</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># yum \u5B89\u88C5squid</span>
sudo yum <span class="token operator">-</span>y install squid
<span class="token comment"># \u8BBE\u7F6E\u5F00\u673A\u542F\u52A8</span>
sudo chkconfig <span class="token operator">-</span><span class="token operator">-</span>level <span class="token number">35</span> squid on  <span class="token comment"># \u572835\u7EA7\u522B\u4E0A\u81EA\u52A8\u8FD0\u884Csquid\u670D\u52A1</span>
<span class="token comment"># \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6</span>
sudo vi <span class="token operator">/</span>etc<span class="token operator">/</span>squid<span class="token operator">/</span>squid<span class="token punctuation">.</span>conf
    http_access allow !Safe_ports    <span class="token comment">#deny\u6539\u6210allow</span>
    http_access allow CONNECT !SSL_ports  <span class="token comment">#deny\u6539\u6210allow</span>
    http_access allow <span class="token builtin">all</span>  <span class="token comment">#deny\u6539\u6210allow</span>
    http_port <span class="token number">27233</span>  <span class="token comment"># \u9ED8\u8BA43128</span>
<span class="token comment"># \u542F\u52A8Squid</span>
sudo service squid start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u722C\u866B\u4F7F\u7528\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_2-\u722C\u866B\u4F7F\u7528\u4EE3\u7406" aria-hidden="true">#</a> 2. \u722C\u866B\u4F7F\u7528\u4EE3\u7406</h2><ol><li><p>requests\u4F7F\u7528\u4EE3\u7406</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import requests
proxies = {
    &quot;http&quot;: &quot;http://53.53.171.25:27233&quot;,
    &quot;https&quot;: &quot;http://52.56.161.222:27233&quot;,
    }
url = &#39;http://ip.filefab.com/index.php&#39;
res = requests.get(url, proxies=proxies)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>scrapy\u4F7F\u7528\u4EE3\u7406</p><ol><li>\u7B2C\u4E00\u79CD\uFF0C\u5728spier\u7684Request\u4E2D\u6DFB\u52A0</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u521D\u59CB\u5316start_requests</span>
<span class="token keyword">def</span> <span class="token function">start_requests</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    proxies <span class="token operator">=</span> <span class="token punctuation">{</span>
        <span class="token string">&quot;http&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://53.53.171.25:27233&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;https&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;http://52.56.161.222:27233&quot;</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span>
    url <span class="token operator">=</span> <span class="token string">&#39;http://ip.filefab.com/index.php&#39;</span>
    request <span class="token operator">=</span> scrapy<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>url<span class="token punctuation">,</span> callback<span class="token operator">=</span>self<span class="token punctuation">.</span>parse<span class="token punctuation">)</span>
    <span class="token keyword">if</span> url<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;http://&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&#39;proxy&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxies<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">)</span>          <span class="token comment"># http\u4EE3\u7406</span>
    <span class="token keyword">elif</span> url<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;https://&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        request<span class="token punctuation">.</span>meta<span class="token punctuation">[</span><span class="token string">&#39;proxy&#39;</span><span class="token punctuation">]</span><span class="token operator">=</span> proxies<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">yield</span> request
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u7B2C\u4E8C\u79CD\uFF0Cscrapy\u4EE3\u7406\u4F7F\u7528\u4E2D\u95F4\u4EF6((\u53C2\u8003dianping\u7684\u914D\u7F6E) <ol><li>\u5728\u4E2D\u95F4\u4EF6\u4E2D\u521B\u5EFAproxy\uFF0C\u4E0B\u9762\u5C55\u793A\u4E86\u63A5\u5165\u963F\u5E03\u4E91\u4EE3\u7406\u7684\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5728middlewares.py\u4E2D\u589E\u52A0\u4E00\u4E2A\u7C7B\uFF0C\u53D6\u540D\uFF1AProxyMiddleware\u5373\u4EE3\u7406\u4E2D\u95F4\u4EF6
    # \u6DFB\u52A0\u963F\u5E03\u4E91\u4EE3\u7406
    import base64
    # \u4EE3\u7406\u670D\u52A1\u5668
    proxyServer = &quot;http://http-dyn.abuyun.com:9020&quot;
    # \u4EE3\u7406\u96A7\u9053\u9A8C\u8BC1\u4FE1\u606F
    proxyUser = &quot;HUxxGD&quot;
    proxyPass = &quot;60xx35&quot;
    # for Python2
    # proxyAuth = &quot;Basic &quot; + base64.b64encode(proxyUser + &quot;:&quot; + proxyPass)
    # for Python3
    proxyAuth = &quot;Basic &quot; + base64.urlsafe_b64encode(bytes((proxyUser + &quot;:&quot; + proxyPass), &quot;ascii&quot;)).decode(&quot;utf8&quot;)
    class ProxyMiddleware(object):
        def process_request(self, request, spider):
            request.meta[&quot;proxy&quot;] = proxyServer
            request.headers[&quot;Proxy-Authorization&quot;] = proxyAuth
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>settings.py\u4E2D\u751F\u6548\u914D\u7F6E\u7684\u4E2D\u95F4\u4EF6\u5373\u53EF</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    DOWNLOADER_MIDDLEWARES = {
        &#39;dianping.middlewares.UAMiddleware&#39;: 545,
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h1 id="\u642D\u5EFA4g\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#\u642D\u5EFA4g\u4EE3\u7406" aria-hidden="true">#</a> \u642D\u5EFA4G\u4EE3\u7406</h1>`,8),d=n("\u53C2\u8003: 1. "),u={href:"https://cuiqingcai.com/7540.html",target:"_blank",rel:"noopener noreferrer"},v=n("https://cuiqingcai.com/7540.html"),m=n(" 2. "),k={href:"https://blog.csdn.net/u012731379/article/details/78744757",target:"_blank",rel:"noopener noreferrer"},b=n("https://blog.csdn.net/u012731379/article/details/78744757"),h=t(`<h2 id="_1-\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#_1-\u5DE5\u5177" aria-hidden="true">#</a> 1. \u5DE5\u5177:</h2><ol><li>4G\u4E0A\u7F51\u5361()</li><li>\u5BBF\u4E3B\u673Alinux</li><li>docker, centos7</li></ol><h2 id="_2-docker\u914D\u7F6E-\u5355\u4E2Adocker\u5BB9\u5668\u5B9E\u73B0\u4E00\u4E2A\u7F51\u5361\u7684\u4EE3\u7406" tabindex="-1"><a class="header-anchor" href="#_2-docker\u914D\u7F6E-\u5355\u4E2Adocker\u5BB9\u5668\u5B9E\u73B0\u4E00\u4E2A\u7F51\u5361\u7684\u4EE3\u7406" aria-hidden="true">#</a> 2. docker\u914D\u7F6E, \u5355\u4E2Adocker\u5BB9\u5668\u5B9E\u73B0\u4E00\u4E2A\u7F51\u5361\u7684\u4EE3\u7406</h2><ol><li>\u542F\u52A8demo<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u542F\u52A8\u5BB9\u5668</span>
<span class="token function">docker</span> run -it -d --name demo --privileged -p <span class="token number">3128</span>:3128 -v /dev/bus/usb:/dev/bus/usb centos:7 <span class="token function">bash</span>
<span class="token comment"># - v \u6620\u5C04\u5BBF\u4E3B\u673Ausb\u5230\u5BB9\u5668, \u5176\u5B9E\u5F00\u4E86\u7279\u6743\u6A21\u5F0F\u5C31\u4E0D\u9700\u8981\u4E86</span>
<span class="token comment"># \u8FDB\u5165\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> -it demo <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u914D\u7F6E<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment">## docker</span>
<span class="token comment"># \u5220\u6389 -net 0.0.0.0 eth0 \u7684\u8DEF\u7531, \u4E0D\u7136\u62E8\u53F7\u4E4B\u540E\u65E0\u6CD5\u4E0A\u7F51</span>
route del -net <span class="token number">0.0</span>.0.0 eth0
<span class="token comment"># \u5B89\u88C5\u5FC5\u8981\u7684\u670D\u52A1</span>
<span class="token function">apt</span> <span class="token function">install</span>  net-tools wvdial squid <span class="token function">vim</span>
<span class="token comment"># \u4E0D\u662F\u5FC5\u8981\u7684\u670D\u52A1</span>
<span class="token function">apt</span> <span class="token function">install</span> iputils-ping

<span class="token comment"># \u914D\u7F6E wvdial: vim /etc/wvdial.conf</span>
    <span class="token comment"># \u53EF\u4EE5\u65B0\u52A0\u4E00\u7EC4\u914D\u7F6E, [Dialer SG75-01]</span>
    <span class="token punctuation">[</span>Dialer SG75-01<span class="token punctuation">]</span>
    Init1 <span class="token operator">=</span> ATZ
    Init2 <span class="token operator">=</span> ATQ V1 E1 <span class="token assign-left variable">S0</span><span class="token operator">=</span><span class="token number">0</span> <span class="token operator">&amp;</span>C1 <span class="token operator">&amp;</span>D2 +FCLASS<span class="token operator">=</span><span class="token number">0</span>
    Init3 <span class="token operator">=</span> ATE0V1
    Init4 <span class="token operator">=</span> <span class="token assign-left variable">ATS0</span><span class="token operator">=</span><span class="token number">0</span>
    Init5 <span class="token operator">=</span> AT+CGDCONT<span class="token operator">=</span><span class="token number">1</span>, <span class="token string">&quot;IP&quot;</span>, <span class="token string">&quot;3GNET&quot;</span>
    <span class="token comment"># \u8FD9\u91CC APN Init5\u4E2D\u7684 3GNET, \u6240\u4EE5\u53EF\u4EE5\u4E0D\u586B</span>
    <span class="token comment"># APN = 3GNET</span>
    Init6 <span class="token operator">=</span> AT+CFUN<span class="token operator">=</span><span class="token number">1</span>
    Modem Type <span class="token operator">=</span> Analog Modem
    <span class="token comment"># \u6CE2\u7279\u7387\u5E38\u89C1\u662F 9600, 115200, 460800</span>
    Baud <span class="token operator">=</span> <span class="token number">115200</span>
    New PPPD <span class="token operator">=</span> <span class="token function">yes</span>
    <span class="token comment"># Modem \u4E00\u822C\u4E3A\u4E00\u7EC4 ttyUSB* \u4E2D\u7684\u7B2C\u4E00\u4E2A</span>
    Modem <span class="token operator">=</span> /dev/ttyUSB0
    ISDN <span class="token operator">=</span> <span class="token number">0</span>
    Phone <span class="token operator">=</span> *99<span class="token comment">#</span>
    <span class="token comment"># \u7528\u6237\u540D, \u5BC6\u7801\u53EF\u4EE5\u4E0D\u586B</span>
    Username <span class="token operator">=</span> username
    Password <span class="token operator">=</span> password
    Stupid Mode <span class="token operator">=</span> <span class="token number">1</span>
<span class="token comment"># wvdial\u62E8\u53F7, \u53EF\u4EE5\u914D\u7F6E\u591A\u7EC4</span>
wvdial SG75-01

<span class="token comment"># \u914D\u7F6E squid</span>
<span class="token comment"># \u4EE3\u7406\u8BBF\u95EE\u6388\u6743</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;http_access allow all&quot;</span> <span class="token operator">&gt;</span> /etc/squid/squid.conf.tmp
<span class="token function">cat</span> /etc/squid/squid.conf <span class="token operator">&gt;&gt;</span> etc/squid/squid.conf
<span class="token function">mv</span> /etc/squid/squid.conf.tmp /etc/squid/squid.conf
<span class="token comment"># \u5173\u95ED\u4E00\u4E9B header</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;via off&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;forwarded_for delete&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token comment"># \u7B49\u540C\u4E0B\u9762\u7684\u65B9\u5F0F</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_header_access Via deny all&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_header_access X-Forwarded-For deny all&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token comment"># \u8BBE\u7F6E\u8D85\u65F6</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;request_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;write_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;read_timeout 2 minutes&quot;</span> <span class="token operator">&gt;&gt;</span> /etc/squid/squid.conf
<span class="token comment"># \u5173\u95ED\u65E5\u5FD7/\u7F13\u5B58</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;access_log none&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_store_log none&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_log /dev/null&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;logfile_rotate 0&quot;</span> <span class="token operator">&gt;&gt;</span>  /dev/squid/squid.conf
<span class="token comment"># \u4E0B\u9762\u4E24\u4E2A\u914D\u7F6E\u9AD8\u7248\u672C\u4E0D\u517C\u5BB9, \u4F4E\u7248\u672C\u53EF\u4EE5\u7528</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_dir no-store &quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf
<span class="token builtin class-name">echo</span> <span class="token string">&quot;cache_mem 0MB&quot;</span> <span class="token operator">&gt;&gt;</span> /dev/squid/squid.conf

<span class="token comment"># \u66F4\u6539\u9ED8\u8BA4\u8DEF\u7531, \u9ED8\u8BA4\u4F7F\u75284G\u7684\u7F51\u5361\u4E0A\u7F51</span>
<span class="token comment"># \u5982\u679C\u6CA1\u6709\u6539\u9ED8\u8BA4\u8DEF\u7531\u7684\u8BDD\uFF0C\u5728\u4E0D\u6307\u5B9A\u7F51\u5361\u7684\u60C5\u51B5\u4E0B\uFF0C4G \u7F51\u5361\u5E76\u4E0D\u4F1A\u88AB\u4F7F\u7528\u5230\uFF0C\u56E0\u4E3A\u9ED8\u8BA4\u8DEF\u7531\u6307\u5411\u7684\u662F Docker \u81EA\u8EAB\u7684\u865A\u62DF\u7F51\u5361\uFF0C\u90A3\u4E2A\u7F51\u5361\u901A\u5411\u4F60\u539F\u672C\u7684\u5185\u7F51\u73AF\u5883\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0CIP \u4E0D\u4F1A\u53D8</span>
route del -net <span class="token number">0.0</span>.0.0 eth0
route <span class="token function">add</span> -net <span class="token number">0.0</span>.0.0 ppp0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u6253\u5305<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5217\u51FA\u5728\u8FD0\u884C\u7684\u5BB9\u5668</span>
<span class="token function">docker</span> <span class="token function">ps</span> 
<span class="token comment"># \u628A\u8FD0\u884C\u4E2D\u7684 docker \u505A\u7684\u4FEE\u6539, \u63D0\u4EA4\u6210\u4E00\u4E2A\u955C\u50CF</span>
<span class="token function">docker</span> commit -m<span class="token operator">=</span><span class="token string">&#39;wvdial_4G_centos&#39;</span> --author<span class="token operator">=</span><span class="token string">&#39;xiaoteng&#39;</span> d5e87290836d xiaoteng/wvdial_4g:v1
<span class="token comment"># \u4F7F\u7528\u81EA\u5B9A\u4E49\u63D0\u4EA4\u7684\u955C\u50CF\u8FD0\u884C\u5BB9\u5668</span>
<span class="token function">docker</span> run -it -d --name for_4g_1 -privileged xiaoteng/wvdial_4g:v1 <span class="token function">bash</span>
<span class="token comment"># \u5982\u679C\u9700\u8981\u5728\u522B\u7684\u673A\u5668\u4E0A\u8FD0\u884C, \u53EF\u4EE5\u76F4\u63A5\u5BFC\u51FA\u955C\u50CF\u6587\u4EF6</span>
<span class="token comment"># \u5BFC\u51FA\u955C\u50CF</span>
<span class="token function">docker</span> <span class="token builtin class-name">export</span> 82xxxxx <span class="token operator">&gt;</span> wvdial_4G_v1.image
<span class="token comment"># \u5BFC\u5165\u955C\u50CF\u6587\u4EF6</span>
<span class="token function">docker</span> <span class="token function">import</span> wvdial_4G_v1.image zhipeng/wvidal:v1
<span class="token comment"># \u6216\u8005\u4FDD\u5B58\u955C\u50CF</span>
<span class="token function">docker</span> save 82xxxxx <span class="token operator">&gt;</span> wvdial_4G_v1.image
<span class="token function">docker</span> load wvdial_4G_v1.image
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u542F\u52A8\u6D41\u7A0B</li></ol><h2 id="_3-\u76F4\u63A5\u4ECEpython\u811A\u672C\u5B9E\u73B0\u968F\u673A\u9009\u62E9\u7F51\u5361" tabindex="-1"><a class="header-anchor" href="#_3-\u76F4\u63A5\u4ECEpython\u811A\u672C\u5B9E\u73B0\u968F\u673A\u9009\u62E9\u7F51\u5361" aria-hidden="true">#</a> 3. \u76F4\u63A5\u4ECEpython\u811A\u672C\u5B9E\u73B0\u968F\u673A\u9009\u62E9\u7F51\u5361</h2>`,5),q=n("\u53C2\u8003 "),g={href:"https://stackoverflow.com/questions/12585317/requests-bind-to-an-ip",target:"_blank",rel:"noopener noreferrer"},_=n("https://stackoverflow.com/questions/12585317/requests-bind-to-an-ip"),f={href:"https://blog.csdn.net/u012731379/article/details/78711549",target:"_blank",rel:"noopener noreferrer"},x=n("https://blog.csdn.net/u012731379/article/details/78711549");function y(w,S){const a=o("ExternalLinkIcon");return l(),c("div",null,[r,s("p",null,[d,s("a",u,[v,e(a)]),m,s("a",k,[b,e(a)])]),h,s("ol",null,[s("li",null,[q,s("ol",null,[s("li",null,[s("a",g,[_,e(a)])]),s("li",null,[s("a",f,[x,e(a)])])])])])])}var G=i(p,[["render",y],["__file","proxy_server.html.vue"]]);export{G as default};
