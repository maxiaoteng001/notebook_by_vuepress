import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as a,c as i,e as n}from"./app.29a9c448.js";const s={},d=n(`<h1 id="base64" tabindex="-1"><a class="header-anchor" href="#base64" aria-hidden="true">#</a> base64</h1><p>base64 \u662F\u4E00\u79CD\u7528 64 \u4E2A\u5B57\u7B26\u6765\u8868\u793A\u4EFB\u610F\u4E8C\u8FDB\u5236\u6570\u636E\u7684\u65B9\u6CD5</p><ol><li>demo</li></ol><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import base64

def get_base64_code(file_path):
    with open(file_path, &#39;rb&#39;) as f:  # \u4EE5\u4E8C\u8FDB\u5236\u8BFB\u53D6\u56FE\u7247
        data = f.read()
        encodestr = base64.b64encode(data) # \u5F97\u5230 byte \u7F16\u7801\u7684\u6570\u636E
        return encodestr

def base64_decode(base64_code, file_path):
    with open(file_path, &#39;wb&#39;) as f:  # \u4EE5\u4E8C\u8FDB\u5236\u8BFB\u53D6\u56FE\u7247
        f.write(base64.b64decode(base64_code))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),l=[d];function r(c,t){return a(),i("div",null,l)}var v=e(s,[["render",r],["__file","base64.html.vue"]]);export{v as default};
