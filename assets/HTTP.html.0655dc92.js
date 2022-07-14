import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as d}from"./app.29a9c448.js";const r={},s=d(`<h1 id="django-url" tabindex="-1"><a class="header-anchor" href="#django-url" aria-hidden="true">#</a> django url</h1><h2 id="app\u4E2D\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#app\u4E2D\u4FEE\u6539" aria-hidden="true">#</a> app\u4E2D\u4FEE\u6539</h2><ul><li>\u6DFB\u52A0urls</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># blog/urls.py
# url: \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u7A7A\u5B57\u7B26, index: views\u7684\u5185\u5BB9, name\u662Findex\u7684\u522B\u540D
from django.conf.urls import url
urlpatterns = [
    url(r&#39;^$&#39;, views.index, name=&#39;index&#39;),
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6DFB\u52A0views</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># blog/views.py
from django.http import HttpResponse
# render\u6839\u636E\u8FD4\u56DE\u7684\u5185\u5BB9\u6784\u9020httpResponse
from django.shortcuts import render  
# Create your views here.
def index(request):
    return HttpResponse(&quot;\u6B22\u8FCE\u8BBF\u95EE\u6211\u7684\u535A\u5BA2\u9996\u9875\uFF01&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u6CE8\u518C\u5230project\u4E2D" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u518C\u5230project\u4E2D" aria-hidden="true">#</a> \u6CE8\u518C\u5230project\u4E2D</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from django.urls import path, include
urlpatterns = [
    path(&#39;admin/&#39;, admin.site.urls),
    # \u6B64\u5904\u7684path, url\u6DFB\u52A0\u540E, \u53EF\u4EE5\u548C\u540E\u9762\u7684urls\u7EC4\u5408
    path(&#39;&#39;, include(&#39;blog.urls&#39;)),
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7F16\u8F91\u89C6\u56FE\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8F91\u89C6\u56FE\u51FD\u6570" aria-hidden="true">#</a> \u7F16\u8F91\u89C6\u56FE\u51FD\u6570</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from django.urls import get_object_or_404
# \u8FD4\u56DE\u6570\u636E\u5E93\u7684\u5BF9\u8C61, \u4E0D\u5B58\u5728\u8FD4\u56DE404
- ...
    post = get_object_or_404(Post, pk=pk)
  ... 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),a=[s];function l(t,u){return i(),n("div",null,a)}var o=e(r,[["render",l],["__file","HTTP.html.vue"]]);export{o as default};
