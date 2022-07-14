import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as i,e as n}from"./app.29a9c448.js";const a={},d=n(`<h1 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h1><h2 id="_1-\u8BF7\u6C42\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u8BF7\u6C42\u53C2\u6570" aria-hidden="true">#</a> 1. \u8BF7\u6C42\u53C2\u6570</h2><ol><li><p>headers</p></li><li><p>proxies</p></li><li><p>get\u8BF7\u6C42\u7684\u53C2\u6570dict</p></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>params = {}
res = requests.get(params=params)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>cookies \u53C2\u6570,dict</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cookies = {
    XX
    ...
}
res = requests.get(cookies=cookies)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>post\u8BF7\u6C42\u7684data\u53C2\u6570, dict</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>body = {}
res = requests.post(data=body)  #\u5982\u679C\u662Fjson,\u5219\u4F7F\u7528json.dumps()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><pre><code>- \u6709\u4E2A\u95EE\u9898, \u5982\u679C\u9700\u8981\u53D1\u9001\u7684body\u91CC\u9762\u6709\u4E2D\u6587, \u5219\u4F1A\u88AB\u7F16\u7801
</code></pre><h2 id="_2-cookies\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-cookies\u7684\u4F7F\u7528" aria-hidden="true">#</a> 2. cookies\u7684\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    cookies = response.cookies   # cookies\u7C7B\u578B: &lt;class &#39;requests.cookies.RequestsCookieJar&#39;&gt;
    cookies = response.cookies.get_dict()   # cookies \u8FD4\u56DE, &lt;class &#39;dict&#39;&gt;
    cookies[&#39;sig&#39;] = tmp_cookies.get(&#39;sig&#39;) # \u53EF\u4EE5\u4F7F\u7528get\u62FF\u53D6\u9700\u8981\u7684cookie
    res = requests.post(url=post_url, data=data, cookies=cookies)   # \u5305\u542Bcookies\u8BBF\u95EE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-session\u7684\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_3-session\u7684\u4F7F\u7528" aria-hidden="true">#</a> 3. session\u7684\u4F7F\u7528</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    session = requests.Session()
    response = session.get(&#39;url&#39;)
    session_dict = session.json()  # \u8FD4\u56DE\uFF1A {&#39;cookies&#39;: {&quot;abc&quot;: &#39;123&#39;}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-response" tabindex="-1"><a class="header-anchor" href="#_4-response" aria-hidden="true">#</a> 4. response</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>r = requests.get(&#39;url&#39;)
    1. r.text   # \u8FD4\u56DE\u7684\u6587\u672C 
    2. r.json() # \u8FD4\u56DE\u7684\u7ED3\u679C\u8F6C\u6210JSON\u683C\u5F0F
    3. r.status_code
    4. r.url
    5. r.request    # \u8BF7\u6C42\u5BF9\u8C61 
    5. r.request.headers[&#39;User-Agent&#39;]  # \u67E5\u770B\u8BF7\u6C42\u5934
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),r=[d];function t(l,o){return s(),i("div",null,r)}var v=e(a,[["render",t],["__file","requests.html.vue"]]);export{v as default};
