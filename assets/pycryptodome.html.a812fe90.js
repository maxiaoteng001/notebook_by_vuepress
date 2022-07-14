import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as p,c as o,a as n,b as c,d as s,e as i}from"./app.29a9c448.js";const l={},r=n("h1",{id:"pycryptodome-\u6A21\u5757",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#pycryptodome-\u6A21\u5757","aria-hidden":"true"},"#"),s(" pycryptodome \u6A21\u5757")],-1),u=n("h2",{id:"\u7B80\u4ECB",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7B80\u4ECB","aria-hidden":"true"},"#"),s(" \u7B80\u4ECB")],-1),d={href:"https://blog.sqreen.com/stop-using-pycrypto-use-pycryptodome/",target:"_blank",rel:"noopener noreferrer"},k=s("pycrypto to pycryptodome"),v=i(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u7248\u672C\u5F71\u54CD\u4F7F\u7528
sudo pip install pycryptodome==3.9.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-aes" tabindex="-1"><a class="header-anchor" href="#_1-aes" aria-hidden="true">#</a> 1. AES</h2><ol><li>demo<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> Crypto<span class="token punctuation">.</span>Cipher <span class="token keyword">import</span> AES
<span class="token keyword">import</span> base64

<span class="token keyword">def</span> <span class="token function">decode_ecs_nio</span><span class="token punctuation">(</span>res<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> key<span class="token operator">=</span><span class="token string">&#39;kcc$[41_fpqxxxxx&#39;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># \u5982\u679Ckey\u4F4D\u6570\u4E0D\u591F, \u8865\u9F50</span>
    <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span> <span class="token operator">%</span> <span class="token number">16</span> <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        key <span class="token operator">+=</span> <span class="token string">&#39;\\0&#39;</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>key<span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_ECB<span class="token punctuation">)</span>
    result <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>res<span class="token punctuation">)</span>
    res_text <span class="token operator">=</span> cipher<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res_text
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>AES/CBC/PKCS5Padding\u52A0\u5BC6, CBC\u52A0\u5BC6\u9700\u8981\u4E00\u4E2A\u5341\u516D\u4F4D\u7684key(\u5BC6\u94A5)\u548C\u4E00\u4E2A\u5341\u516D\u4F4Div(\u504F\u79FB\u91CF) <ol><li>Java\u5B9E\u73B0<div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code># \u53EF\u4EE5\u53D1\u73B0\u52A0\u5BC6\u7C7B\u578B, \u9700\u8981\u6570\u636E\u5757/\u5BC6\u7801/\u504F\u79FB\u91CF/\u6570\u636E\u5B57\u7B26\u96C6 \u53C2\u8003nio
# Cipher instance = Cipher.getInstance(&quot;AES/CBC/PKCS5Padding&quot;);
public static final String a(String str, String str2, String str3) {
    Intrinsics.b(str2, &quot;key&quot;);
    Intrinsics.b(str3, &quot;ivValue&quot;);
    try {
        byte[] bytes = str2.getBytes(b);
        Intrinsics.a((Object) bytes, &quot;(this as java.lang.String).getBytes(charset)&quot;);
        SecretKeySpec secretKeySpec = new SecretKeySpec(bytes, &quot;AES&quot;);
        Cipher instance = Cipher.getInstance(&quot;AES/CBC/PKCS5Padding&quot;);
        byte[] bytes2 = str3.getBytes(b);
        Intrinsics.a((Object) bytes2, &quot;(this as java.lang.String).getBytes(charset)&quot;);
        instance.init(2, secretKeySpec, new IvParameterSpec(bytes2));
        byte[] decode = Base64.decode(str, 0);
        Intrinsics.a((Object) decode, &quot;Base64.decode(str,Base64.DEFAULT)&quot;);
        byte[] doFinal = instance.doFinal(decode);
        Intrinsics.a((Object) doFinal, &quot;cipherByte&quot;);
        return new String(doFinal, b);
    } catch (Exception e) {
        return &quot;&quot;;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>Python<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> base64
<span class="token keyword">from</span> Crypto<span class="token punctuation">.</span>Cipher <span class="token keyword">import</span> AES
<span class="token keyword">from</span> Crypto <span class="token keyword">import</span> Random

<span class="token keyword">def</span> <span class="token function">encrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pad <span class="token operator">=</span> <span class="token keyword">lambda</span> s<span class="token punctuation">:</span> s <span class="token operator">+</span> <span class="token punctuation">(</span>bs <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">%</span> bs<span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token builtin">chr</span><span class="token punctuation">(</span>bs <span class="token operator">-</span> <span class="token builtin">len</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token operator">%</span> bs<span class="token punctuation">)</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>key<span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_CBC<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>
    data <span class="token operator">=</span> cipher<span class="token punctuation">.</span>encrypt<span class="token punctuation">(</span>pad<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    data <span class="token operator">=</span> iv <span class="token operator">+</span> data
    <span class="token keyword">return</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">decrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> key<span class="token punctuation">,</span> iv<span class="token punctuation">)</span><span class="token punctuation">:</span>
    bs <span class="token operator">=</span> AES<span class="token punctuation">.</span>block_size
    <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token operator">&lt;=</span> bs<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token punctuation">(</span>data<span class="token punctuation">)</span>
    unpad <span class="token operator">=</span> <span class="token keyword">lambda</span> s <span class="token punctuation">:</span> s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token builtin">ord</span><span class="token punctuation">(</span>s<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    cipher <span class="token operator">=</span> AES<span class="token punctuation">.</span>new<span class="token punctuation">(</span>data<span class="token punctuation">,</span> AES<span class="token punctuation">.</span>MODE_CBC<span class="token punctuation">,</span> iv<span class="token punctuation">)</span>
    data  <span class="token operator">=</span> unpad<span class="token punctuation">(</span>cipher<span class="token punctuation">.</span>decrypt<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> data

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    data <span class="token operator">=</span> <span class="token string">&#39;d437814d9185a290af20514d9341b710&#39;</span>
    password <span class="token operator">=</span> <span class="token string">&#39;78f40f2c57eee727a4be179049cecf89&#39;</span> <span class="token comment">#16,24,32\u4F4D\u957F\u7684\u5BC6\u7801</span>
    encrypt_data <span class="token operator">=</span> encrypt<span class="token punctuation">(</span>data<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    encrypt_data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64encode<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;encrypt_data:&#39;</span><span class="token punctuation">,</span> encrypt_data<span class="token punctuation">)</span>


    encrypt_data <span class="token operator">=</span> base64<span class="token punctuation">.</span>b64decode<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">)</span>
    decrypt_data <span class="token operator">=</span> decrypt<span class="token punctuation">(</span>encrypt_data<span class="token punctuation">,</span> password<span class="token punctuation">)</span>
    <span class="token keyword">print</span> <span class="token punctuation">(</span><span class="token string">&#39;decrypt_data:&#39;</span><span class="token punctuation">,</span> decrypt_data<span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol>`,4);function b(m,y){const a=t("ExternalLinkIcon");return p(),o("div",null,[r,u,n("p",null,[n("a",d,[k,c(a)])]),v])}var g=e(l,[["render",b],["__file","pycryptodome.html.vue"]]);export{g as default};
