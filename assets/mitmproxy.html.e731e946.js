import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.29a9c448.js";const l={},r=s(`<h1 id="mitmproxy" tabindex="-1"><a class="header-anchor" href="#mitmproxy" aria-hidden="true">#</a> mitmproxy</h1><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1. \u5B89\u88C5</h2><ol><li><p>mac</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>brew <span class="token function">install</span> mitmproxy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>docker</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>https://hub.docker.com/r/mitmproxy/mitmproxy/

<span class="token comment"># docker\u542F\u52A8</span>
<span class="token function">docker</span> run --rm -it -p <span class="token number">8080</span>:8080 mitmproxy/mitmproxy mitmdump

<span class="token comment"># \u83B7\u53D6ca\u8BC1\u4E66\u53EF\u4EE5\u6302\u8F7D\u78C1\u76D8</span>
<span class="token function">docker</span> run --rm -it -v ~/.mitmproxy:/home/mitmproxy/.mitmproxy -p <span class="token number">8080</span>:8080 mitmproxy/mitmproxy mitmdump

<span class="token comment"># \u542F\u52A8mitmweb</span>
<span class="token function">docker</span> run --rm -it -p <span class="token number">8080</span>:8080 -p <span class="token number">127.0</span>.0.1:8081:8081 mitmproxy/mitmproxy mitmweb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528" aria-hidden="true">#</a> 2. \u4F7F\u7528</h2><ol><li><p>\u5BA2\u6237\u7AEF\u9700\u4FE1\u4EFBCA\u8BC1\u4E66</p><ul><li><p>\u8BC1\u4E66\u4F4D\u4E8E ./mitmproxy</p></li><li><p>mitmproxy-ca.pem # PEM\u683C\u5F0F\u7684\u8BC1\u4E66\u79C1\u94A5</p></li><li><p>mitmproxy-ca-cert.p12 # PKCS12\u683C\u5F0F\u7684\u8BC1\u4E66\uFF0C\u9002\u7528\u4E8EWindows\u5E73\u53F0</p></li><li><p>mitmproxy-ca-cert.pem # PEM\u683C\u5F0F\u8BC1\u4E66\uFF0C\u9002\u7528\u4E8E\u5927\u591A\u6570\u975EWindows\u5E73\u53F0</p></li><li><p>mitmproxy-ca-cert.cer # \u4E0Emitmproxy-ca-cert.pem\u76F8\u540C\uFF0C\u53EA\u662F\u6539\u53D8\u4E86\u540E\u7F00\uFF0C\u9002\u7528\u4E8E\u90E8\u5206Android\u5E73\u53F0</p></li><li><p>mitmproxy-dhparam.pem # PEM\u683C\u5F0F\u7684\u79D8\u94A5\u6587\u4EF6\uFF0C\u7528\u4E8E\u589E\u5F3ASSL\u5B89\u5168\u6027</p></li><li><p>linux\u4FE1\u4EFB\u8BC1\u4E66</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> .mitmproxy/
openssl x509 -inform PEM -in mitmproxy-ca-cert.pem -out ./mitmproxy-ca-cert.crt
<span class="token function">sudo</span> <span class="token function">cp</span> mitmproxy-ca-cert.crt /usr/share/ca-certificates/extra/
<span class="token function">sudo</span> dpkg-reconfigure ca-certificates
<span class="token function">sudo</span> update-ca-certificates
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u811A\u672C\u5185\u5BB9</p><ul><li><p>script.py\u5B9E\u8DF5</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import mitmproxy.http
from mitmproxy import ctx
from mitmproxy.http import HTTPFlow as flow
                
class Ctrip:
    def __init__(self):
        self.num = 0
    
    def request(self, flow: mitmproxy.http.HTTPFlow):
        # \u4FEE\u6539request\u8BF7\u6C42\uFF0Cheaders\u6216\u8005\u4EE3\u7406
        if &quot;xx.com&quot; in flow.request.url:
            flow.request.headers[&quot;User-Agent&quot;] = &#39;Mozilla/5.0 (Linux; Android 6.0; Nexus 5 Build/MRA58N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/73.0.3683.103 Mobile Safari/537.36&#39;
            return

    def response(self, flow: mitmproxy.http.HTTPFlow):
        # \u4FEE\u6539\u54CD\u5E94
        if &quot;page/brands/&quot; in flow.request.url:
            # \u5C06js\u4EE3\u7801\u6CE8\u5165\u5230\u6D4F\u89C8\u5668\u9996\u9875\uFF0C\u9632\u6B62\u65E0\u5934\u6D4F\u89C8\u5668\u88AB\u68C0\u6D4B
            # \u6240\u9700\u6CE8\u5165\u7684js\u4EE3\u7801
            injected_javascript = &#39;&#39;&#39;
                // overwrite the \`languages\` property to use a custom getter
                Object.defineProperty(navigator, &quot;languages&quot;, {
                get: function() {
                    return [&quot;zh-CN&quot;,&quot;zh&quot;,&quot;zh-TW&quot;,&quot;en-US&quot;,&quot;en&quot;];
                }
                });

                // Overwrite the \`plugins\` property to use a custom getter.
                Object.defineProperty(navigator, &#39;plugins&#39;, {
                get: () =&gt; [1, 2, 3, 4, 5],
                });

                // Pass the Webdriver test
                Object.defineProperty(navigator, &#39;webdriver&#39;, {
                get: () =&gt; false,
                });


                // Pass the Chrome Test.
                // We can mock this in as much depth as we need for the test.
                window.navigator.chrome = {
                runtime: {},
                // etc.
                };

                // Pass the Permissions Test.
                const originalQuery = window.navigator.permissions.query;
                window.navigator.permissions.query = (parameters) =&gt; (
                parameters.name === &#39;notifications&#39; ?
                    Promise.resolve({ state: Notification.permission }) :
                    originalQuery(parameters)
                );
            &#39;&#39;&#39;
            html = flow.response.text
            html = html.replace(&#39;&lt;head&gt;&#39;, &#39;&lt;head&gt;&lt;script&gt;%s&lt;/script&gt;&#39; % injected_javascript)
            flow.response.text = str(html)

        # \u5904\u7406\u54CD\u5E94
        if &quot;xx&quot; in flow.request.url:
            # http api
            host = flow.request.host
            sort = flow.request.query.get(&#39;sort&#39;)
            resp = flow.response.text
            headers = flow.request.headers
            # post\u65B9\u6CD5\u7684body
            content = flow.request.get_content()
            josn_post_data= json.loads(flow.request.get_content().decode(&#39;utf-8&#39;))
    
    # \u76F4\u63A5\u62E6\u622A, \u4E0D\u63E1\u624B
    def http_connect(self, flow: mitmproxy.http.HTTPFlow):
        if flow.request.host == &quot;www.google.com&quot;:
            flow.response = http.HTTPResponse.make(404)

addons = [Ctrip()]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li><li><p>\u547D\u4EE4\u884C\u542F\u52A8\u811A\u672C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>mitmdump -s script.py

<span class="token comment"># \u975E\u767B\u9646\u4EE3\u7406</span>
mitmdump --mode upstream:http://127.0.0.1:7890 -s mitm_for_script.py

<span class="token comment"># \u4F7F\u7528\u963F\u5E03\u4E91\u4EE3\u7406, -p\u4E3A\u6307\u5B9A\u4EE3\u7406\u7AEF\u53E3</span>
mitmdump --mode upstream:http-dyn.abuyun.com:9020 --upstream-auth username:password -s mitm_for_script.py -p <span class="token number">8090</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,5),a=[r];function d(t,m){return i(),n("div",null,a)}var u=e(l,[["render",d],["__file","mitmproxy.html.vue"]]);export{u as default};
