import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as d}from"./app.29a9c448.js";const s={},l=d(`<h1 id="\u7F16\u7801\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u7F16\u7801\u95EE\u9898" aria-hidden="true">#</a> \u7F16\u7801\u95EE\u9898</h1><ol><li><p>Python3\u6709\u4E24\u79CD\u8868\u793A\u5B57\u7B26\u5E8F\u5217\u7684\u7C7B:bytes \u548C str\u3002 bytes\u7684\u5B9E\u4F8B\u5305\u542B8\u4E2A\u4E8C\u8FDB\u5236\u4F4D\uFF0Cstr\u7684\u5B9E\u4F8B\u5305\u542BUnicode\u5B57\u7B26\u3002</p></li><li><p>\u8F6C\u6362\u65F6\u5FC5\u987B\u4F7F\u7528encode\u548Cdecode\u64CD\u4F5C</p></li><li><p>\u7F16\u5199\u7A0B\u5E8F\u65F6\uFF0C\u901A\u5E38\u5C06\u7F16\u7801\u548C\u89E3\u7801\u653E\u5728\u6700\u5916\u56F4\u51FD\u6570\uFF0C\u7A0B\u5E8F\u7684\u6838\u5FC3\u4EE3\u7801\u5E94\u8BE5\u4F7F\u7528Unicode\u5B57\u7B26\u7C7B\u578B\uFF0C\u800C\u4E14\u4E0D\u8981\u5BF9\u5B57\u7B26\u7F16\u7801\u505A\u4EFB\u4F55\u5047\u8BBE\u3002</p><ol><li>\u8FD9\u6837\u7A0B\u5E8F\u53EF\u4EE5\u63A5\u53D7\u591A\u79CD\u7C7B\u578B\u7684\u6587\u672C\u7F16\u7801\uFF0C\u53C8\u4FDD\u8BC1\u8F93\u51FA\u7684\u6587\u672C\u4FE1\u606F\u53EA\u91C7\u7528\u4E00\u79CD\u7F16\u7801\u5F62\u5F0F</li><li>(\u6765\u81EAEffective Python)</li></ol></li></ol><h2 id="_1-\u8F85\u52A9\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_1-\u8F85\u52A9\u51FD\u6570" aria-hidden="true">#</a> 1. \u8F85\u52A9\u51FD\u6570</h2><ol><li>to_str<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    def to_str(bytes_or_str):
        if isInstance(bytes_or_str, bytes):
            value = bytes_or_str.decode(&#39;utf-8&#39;)
        else:
            value = bytes_or_str
        return value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>to_bytes<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    def to_bytes(bytes_or_str):
        if isInstance(bytes_or_str, str):
            value = bytes_or_str.encode(&#39;utf-8&#39;)
        else:
            value = bytes_or_str
        return value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u9ED8\u8BA4\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u9ED8\u8BA4\u7F16\u7801" aria-hidden="true">#</a> 2. \u9ED8\u8BA4\u7F16\u7801</h2><ol><li>python3 \u9ED8\u8BA4utf-8 \u4EC5\u9002\u7528\u4E8E\u8F6C\u5B57\u7B26\u4E32, \u6587\u4EF6open()\u6839\u636E\u7CFB\u7EDF\u786E\u5B9A\u9ED8\u8BA4\u7684\u7F16\u7801\u683C\u5F0F</li><li>python3\u7684open\u51FD\u6570\u6DFB\u52A0\u4E86encoding\uFF0C\u8981\u6C42\u64CD\u4F5C\u63A5\u53D7str\u5B9E\u4F8B\uFF0C\u5982\u679C\u8BFB\u5199bytes\uFF0C\u4F7F\u7528<code>rb</code>\u6216<code>wb</code></li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>s1 = b&#39;test&#39;
s2 = s1.decode(&#39;utf-8&#39;)
type(s1) 
&gt;&gt; &lt;class &#39;bytes&#39;&gt; &lt;class &#39;str&#39;&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-html\u89E3\u6790\u7F16\u7801\u4F9D\u636E" tabindex="-1"><a class="header-anchor" href="#_3-html\u89E3\u6790\u7F16\u7801\u4F9D\u636E" aria-hidden="true">#</a> 3. html\u89E3\u6790\u7F16\u7801\u4F9D\u636E</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&lt;head&gt;
    &lt;meta charset=&quot;UTF-8&quot;&gt;
&lt;/head&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u7F16\u7801\u5224\u65AD" tabindex="-1"><a class="header-anchor" href="#_4-\u7F16\u7801\u5224\u65AD" aria-hidden="true">#</a> 4. \u7F16\u7801\u5224\u65AD</h2><ol><li><p>\u5B57\u7B26\u4E32</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import chardet
    body = b&#39;...xxtestxx...&#39;
    encode_info = chardet.detect(body)  # body\u662Fbytes\u7C7B\u578B
    encode_str = encode_info.get(&#39;encoding&#39;)
    print(encode_info, encode_str)
        &gt;&gt; {&#39;encoding&#39;: &#39;ascii&#39;, &#39;confidence&#39;: 1.0, &#39;language&#39;: &#39;&#39;}
    item[&#39;body&#39;] = body.decode(encode_str)  # \u6B63\u786E\u89E3\u7801\u4E3Astr
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5224\u65AD\u6587\u4EF6\u7684\u7F16\u7801</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import chardet
    
    # \u83B7\u53D6\u6587\u4EF6\u7F16\u7801\u7C7B\u578B
    def get_encoding(file):
        # \u4E8C\u8FDB\u5236\u65B9\u5F0F\u8BFB\u53D6\uFF0C\u83B7\u53D6\u5B57\u8282\u6570\u636E\uFF0C\u68C0\u6D4B\u7C7B\u578B
        with open(file, &#39;rb&#39;) as f:
            # \u5BF9\u4E8E\u5927\u6587\u4EF6,\u6700\u597D\u4F7F\u7528readline
            return chardet.detect(f.readline())[&#39;encoding&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,11),t=[l];function a(r,c){return i(),n("div",null,t)}var u=e(s,[["render",a],["__file","encode.html.vue"]]);export{u as default};
