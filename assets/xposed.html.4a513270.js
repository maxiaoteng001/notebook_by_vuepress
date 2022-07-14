import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as l,c as i,a as n,b as t,e as s,d as a}from"./app.29a9c448.js";const c={},u=s('<h1 id="xposed" tabindex="-1"><a class="header-anchor" href="#xposed" aria-hidden="true">#</a> Xposed</h1><h2 id="_1-\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#_1-\u5B89\u88C5" aria-hidden="true">#</a> 1.\u5B89\u88C5</h2><h2 id="_2-\u9879\u76EE\u7F16\u5199\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#_2-\u9879\u76EE\u7F16\u5199\u8BF4\u660E" aria-hidden="true">#</a> 2. \u9879\u76EE\u7F16\u5199\u8BF4\u660E</h2>',3),r={href:"https://github.com/maxiaoteng001/xposeds",target:"_blank",rel:"noopener noreferrer"},d=a("\u89C1\u9879\u76EExposeds"),k=n("br",null,null,-1),m={href:"https://github.com/maxiaoteng001/xiaoteng_demo.git",target:"_blank",rel:"noopener noreferrer"},v=a("demo\u89C1\u9879\u76EExposed_demo"),h=s(`<li><p>Android studio\u5F00\u59CB\u4E00\u4E2Aandroid\u9879\u76EE</p></li><li><p>\u6DFB\u52A0xposed api <code>app/build.gradle</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>repositories <span class="token punctuation">{</span>
    <span class="token function">jcenter</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
dependencies <span class="token punctuation">{</span>
    compileOnly &#39;de<span class="token punctuation">.</span>robv<span class="token punctuation">.</span>android<span class="token punctuation">.</span>xposed<span class="token operator">:</span>api<span class="token operator">:</span><span class="token number">82</span>&#39;
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BBE\u7F6E\u5C5E\u6027<code>app/mainfests/AndroidManifest.xml</code></p><div class="language-xml ext-xml line-numbers-mode"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>application</span>
<span class="token attr-name"><span class="token namespace">android:</span>icon</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@drawable/ic_launcher<span class="token punctuation">&quot;</span></span>
<span class="token attr-name"><span class="token namespace">android:</span>label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>@string/app_name<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span>

<span class="token comment">&lt;!-- \u8865\u5145\u5982\u4E0B --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span>
    <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xposedmodule<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span>
    <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xposeddescription<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>Easy example which makes the status bar clock red and adds a smiley<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta-data</span>
    <span class="token attr-name"><span class="token namespace">android:</span>name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xposedminversion<span class="token punctuation">&quot;</span></span>
    <span class="token attr-name"><span class="token namespace">android:</span>value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>53<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,3),b=n("p",null,"hook demo",-1),_=n("li",null,[a("input\u548Coutput\u89C1"),n("code",null,"app/src/main/java/com/example/xposed_demo/HookNineBot.java")],-1),g=a("hook \u8C03\u7528so, \u8003\u8651\u96C6\u6210"),x={href:"https://github.com/virjar/sekiro",target:"_blank",rel:"noopener noreferrer"},f=a("sekiro"),q=a(", demo\u89C1"),E=n("code",null,"app/src/main/java/com/example/xposed_demo/HookNineBotSekiro.java",-1),j=n("ol",null,[n("li",null,[a("\u670D\u52A1\u7AEF\u76F4\u63A5\u542F\u52A8\u5373\u53EF, \u8BF7\u6C42\u53C2\u8003: "),n("code",null,"http://192.168.2.141:5601/asyncInvoke?group=ninebot&action=checkcode&query=origin_str")]),n("li",null,"\u5728\u914D\u7F6Esekiro\u670D\u52A1\u65F6, \u5C3D\u91CF\u4F7F\u7528post\u8BF7\u6C42\u53D1\u9001\u53C2\u6570(get\u53C2\u6570\u53EF\u80FD\u6709\u7F16\u7801\u548C\u957F\u5EA6\u9650\u5236\u95EE\u9898, post\u4E5F\u66F4\u76F4\u89C2, sekiro\u5BF9post\u548Cget\u53C2\u6570\u505A\u4E86\u805A\u5408, \u53EF\u4EE5\u76F4\u63A5\u63D0\u53D6), \u53C2\u8003QQmusicSekiro")],-1),N=s(`<li>\u5173\u4E8Esekiro\u66F4\u65B0 <ol><li><p>\u5B98\u65B9\u66F4\u65B0\u4E86\u65B0\u7684demo, \u73AF\u5883\u5F85\u786E\u8BA4</p></li><li><p>\u65E7\u670D\u52A1\u4F7F\u7528\u65B9\u5F0F:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/virjar/sekiro
<span class="token function">git</span> checkout 87a244f93878e587aeee3c05cd61c82dce73e82b
<span class="token comment"># \u5C06runProd.sh\u4E2D\u66F4\u65B0\u4EE3\u7801\u90E8\u5206\u6CE8\u91CA\u6389</span>
<span class="token builtin class-name">cd</span> /<span class="token punctuation">..</span>/sekiro <span class="token operator">&amp;&amp;</span> <span class="token function">sh</span> runProd.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li>`,1),I=n("li",null,[n("p",null,"\u6307\u5B9A\u751F\u6548\u7684Xposed\u6A21\u5757"),n("ol",null,[n("li",null,[a("\u521B\u5EFA\u6587\u4EF6"),n("code",null,"app/src/main/images/xposed_init")]),n("li",null,[a("\u5185\u5BB9"),n("code",null,"com.example.xposedhook.HookNineBot")]),n("li",null,"\u4E00\u4E2Aapp\u53EF\u4EE5\u652F\u6301\u591A\u4E2A\u6A21\u5757, \u76F4\u63A5\u5728\u4E0B\u65B9\u8FFD\u52A0\u5373\u53EF")])],-1),S=n("p",null,"\u8865\u5145",-1),w=s(`<li><p>\u4F7F\u7528<code>import com.alibaba.fastjson.JSON;</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> app<span class="token operator">/</span>build<span class="token punctuation">.</span>gradle <span class="token operator">--</span><span class="token operator">&gt;</span>
implementation &#39;com<span class="token punctuation">.</span>alibaba<span class="token operator">:</span>fastjson<span class="token operator">:</span><span class="token number">1.1</span><span class="token number">.54</span><span class="token punctuation">.</span>android&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>app\u7684\u4E00\u4E9B\u5C5E\u6027\u4FEE\u6539<code>app/src/main/res/values/strings.xml</code></p></li>`,2),y=n("p",null,[a("\u62A5\u9519"),n("code",null,"More than one file was found with OS independent path 'META-INF/LICENSE'")],-1),M=a("\u53C2\u8003: "),T={href:"https://stackoverflow.com/questions/44342455/more-than-one-file-was-found-with-os-independent-path-meta-inf-license",target:"_blank",rel:"noopener noreferrer"},A=a("More than one file was found with OS independent path 'META-INF/LICENSE"),F=s(`<li><p><code>app/build.gradle</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code>buildTypes <span class="token punctuation">{</span>
    release <span class="token punctuation">{</span>
        minifyEnabled <span class="token boolean">false</span>
        proguardFiles <span class="token function">getDefaultProguardFile</span><span class="token punctuation">(</span>&#39;proguard<span class="token operator">-</span>android<span class="token operator">-</span>optimize<span class="token punctuation">.</span>txt<span class="token char">&#39;), &#39;</span>proguard<span class="token operator">-</span>rules<span class="token punctuation">.</span>pro&#39;
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> \u6DFB\u52A0\u4EE5\u4E0B <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>
packagingOptions <span class="token punctuation">{</span>
    exclude &#39;META<span class="token operator">-</span>INF<span class="token operator">/</span>DEPENDENCIES&#39;
    exclude &#39;META<span class="token operator">-</span>INF<span class="token operator">/</span>INDEX<span class="token punctuation">.</span>LIST&#39;
    exclude <span class="token punctuation">(</span>&#39;META<span class="token operator">-</span>INF<span class="token operator">/</span>io<span class="token punctuation">.</span>netty<span class="token punctuation">.</span>versions<span class="token punctuation">.</span>properties&#39;<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1);function B(L,O){const e=p("ExternalLinkIcon");return l(),i("div",null,[u,n("p",null,[n("a",r,[d,t(e)]),k,n("a",m,[v,t(e)])]),n("ol",null,[h,n("li",null,[b,n("ol",null,[_,n("li",null,[g,n("a",x,[f,t(e)]),q,E,j]),N])]),I,n("li",null,[S,n("ol",null,[w,n("li",null,[y,n("ol",null,[n("li",null,[n("p",null,[M,n("a",T,[A,t(e)])])]),F])])])])])])}var P=o(c,[["render",B],["__file","xposed.html.vue"]]);export{P as default};
