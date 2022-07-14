import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c as o,a as e,b as a,d as n,e as r}from"./app.29a9c448.js";const c={},d=e("h1",{id:"ocr-\u767E\u5EA6api\u8C03\u7528",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ocr-\u767E\u5EA6api\u8C03\u7528","aria-hidden":"true"},"#"),n(" OCR \u767E\u5EA6api\u8C03\u7528")],-1),u=e("p",null,"[TOC]",-1),p=n("\u6587\u6863 "),v={href:"https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h",target:"_blank",rel:"noopener noreferrer"},m=n("https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h"),_=n("\u6CE8\u518C "),b=r(`<li>\u63A7\u5236\u53F0\u9009\u62E9\u6587\u5B57\u8BC6\u522B --&gt; \u901A\u7528\u6587\u5B57\u8BC6\u522B --&gt; \u521B\u5EFA\u5E94\u7528 --&gt; \u83B7\u53D6\u5230api key \u548Csecrec key</li><li>\u83B7\u53D6access token, \u6709\u6548\u671F\u4E00\u4E2A\u6708<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token comment"># encoding:utf-8</span>
    <span class="token keyword">import</span> requests 

    <span class="token comment"># client_id \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684AK\uFF0C client_secret \u4E3A\u5B98\u7F51\u83B7\u53D6\u7684SK</span>
    host <span class="token operator">=</span> <span class="token string">&#39;https://aip.baidubce.com/oauth/2.0/token?grant_type=client_credentials&amp;client_id=\u3010\u5B98\u7F51\u83B7\u53D6\u7684AK\u3011&amp;client_secret=\u3010\u5B98\u7F51\u83B7\u53D6\u7684SK\u3011&#39;</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>host<span class="token punctuation">)</span>
    <span class="token keyword">if</span> response<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u53D1\u8BF7\u6C42<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def general_basic(pic_path):
    &#39;&#39;&#39;
    \u767E\u5EA6\u6587\u5B57\u8BC6\u522B\u63A5\u53E3
    \u901A\u7528\u6587\u5B57\u8BC6\u522B
    &#39;&#39;&#39;
    request_url = &quot;https://aip.baidubce.com/rest/2.0/ocr/v1/general_basic&quot;
    # \u4E8C\u8FDB\u5236\u65B9\u5F0F\u6253\u5F00\u56FE\u7247\u6587\u4EF6
    f = open(pic_path, &#39;rb&#39;)
    img = base64.b64encode(f.read())

    params = {&quot;image&quot;:img}
    access_token = &#39;------&#39;
    request_url = request_url + &quot;?access_token=&quot; + access_token
    headers = {&#39;content-type&#39;: &#39;application/x-www-form-urlencoded&#39;}
    response = requests.post(request_url, data=params, headers=headers)
    print(&#39;\u767E\u5EA6api\u8FD4\u56DE:{}&#39;.format(response.json()))
    if response:
        words = response.json().get(&#39;words_result&#39;)
        if words == []:
            return &#39;&#39;
        else:
            return words[0].get(&#39;words&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),h=n("\u8D39\u7528: "),k=e("li",null,"\u901A\u7528\u6587\u5B57\u6BCF\u59295w\u514D\u8D39",-1),f={href:"https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h",target:"_blank",rel:"noopener noreferrer"},g=n("https://ai.baidu.com/ai-doc/OCR/fk3h7xu7h");function x(q,w){const s=t("ExternalLinkIcon");return l(),o("div",null,[d,u,e("ol",null,[e("li",null,[p,e("a",v,[m,a(s)])]),e("li",null,[_,e("ol",null,[b,e("li",null,[h,e("ol",null,[k,e("li",null,[e("a",f,[g,a(s)])])])])])])])])}var O=i(c,[["render",x],["__file","ocr_baidu.html.vue"]]);export{O as default};
