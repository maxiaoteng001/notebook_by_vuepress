import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as a}from"./app.29a9c448.js";const r={},s=a(`<h1 id="decorators-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#decorators-\u88C5\u9970\u5668" aria-hidden="true">#</a> Decorators \u88C5\u9970\u5668</h1><p>\u4E3B\u8981\u8FD8\u662F\u5229\u7528\u4E86Python\u80FD\u591F\u63A5\u6536\u548C\u8FD4\u56DE\u51FD\u6570\u7684\u529F\u80FD</p><h2 id="_1-\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#_1-\u95ED\u5305" aria-hidden="true">#</a> 1. \u95ED\u5305</h2><ol><li>\u5B9E\u4F8B<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    def zoo(acount):
        def _inner():
            print(acount)

        return _inner
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u88C5\u9970\u5668" tabindex="-1"><a class="header-anchor" href="#_2-\u88C5\u9970\u5668" aria-hidden="true">#</a> 2. \u88C5\u9970\u5668</h2><ol><li>\u5B9E\u4F8B<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    ## \u5B9A\u4E49\u4E00\u4E2A\u88C5\u9970\u5668, \u5C06\u539F\u6765\u51FD\u6570\u7684\u53C2\u6570\u8F93\u51FA\u4E00\u4E0B, \u5C31\u7528\u5230\u4E86\u6240\u6709\u60C5\u51B5
    def demo(func):
        def _warpper(*args, **kwargs):
            print(&#39;\u6211\u662F\u88C5\u9970\u5668demo\u7684\u529F\u80FD&#39;)
            print(&#39;\u8F93\u51FA\u7684args\u548Ckwargs\u6765\u81EA\u88AB\u88C5\u9970\u51FD\u6570, args:{},kwargs: {} &#39;.format(args, kwargs))
            func(*args, **kwargs)

        return _warpper

    # \u4F7F\u7528
    @demo
    def func(*args, **kwargs):
        print(&#39;\u6765\u81EA\u539F\u59CB\u51FD\u6570&#39;, args, kwargs)

    # \u6D4B\u8BD5
    func(2, 3, 5, name=&#39;mm&#39;, **{&quot;age&quot;: 8})
    &gt;&gt;  \u6211\u662F\u88C5\u9970\u5668demo\u7684\u529F\u80FD
        \u8F93\u51FA\u7684args\u548Ckwargs\u6765\u81EA\u88AB\u88C5\u9970\u51FD\u6570, args:(2, 3, 5),kwargs: {&#39;name&#39;: &#39;mm&#39;, &#39;age&#39;: 8}
        \u6765\u81EA\u539F\u59CB\u51FD\u6570 (2, 3, 5) {&#39;name&#39;: &#39;mm&#39;, &#39;age&#39;: 8}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,6),d=[s];function l(c,t){return n(),i("div",null,d)}var o=e(r,[["render",l],["__file","decorators.html.vue"]]);export{o as default};
