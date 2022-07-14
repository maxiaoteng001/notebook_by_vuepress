import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as s,e as n}from"./app.29a9c448.js";const l={},d=n(`<h1 id="views" tabindex="-1"><a class="header-anchor" href="#views" aria-hidden="true">#</a> views</h1><h2 id="_1-django-orm\u4E09\u79CD\u67E5\u8BE2\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_1-django-orm\u4E09\u79CD\u67E5\u8BE2\u65B9\u6CD5" aria-hidden="true">#</a> 1. django orm\u4E09\u79CD\u67E5\u8BE2\u65B9\u6CD5</h2><ol><li><p>\u76F4\u63A5\u5BFC\u5165\u6267\u884CSQL</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    from django.db import connection  

    cursor = connection.cursor()  
    cursor.execute(&quot;insert into hello_author(name) VALUES (&#39;\u90ED\u656C\u660E&#39;)&quot;)  
    cursor.execute(&quot;update hello_author set name=&#39;\u97E9\u5BD2&#39; WHERE name=&#39;\u90ED\u656C\u660E&#39;&quot;)  
    cursor.execute(&quot;delete from hello_author where name=&#39;\u97E9\u5BD2&#39;&quot;)  
    cursor.execute(&quot;select * from hello_author&quot;)  
    cursor.fetchone()  
    cursor.fetchall() 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528raw</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    books=Book.objects.raw(&#39;select * from hello_book&#39;)  
    for book in books:  
        print book  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u4F7F\u7528orm\u65B9\u6CD5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4F7F\u7528extra\uFF1A\u67E5\u8BE2\u4EBA\u6C11\u90AE\u7535\u51FA\u7248\u793E\u51FA\u7248\u5E76\u4E14\u4EF7\u683C\u5927\u4E8E50\u5143\u7684\u4E66\u7C4D
Book.objects.filter(publisher__name=&#39;\u4EBA\u6C11\u90AE\u7535\u51FA\u7248\u793E&#39;).extra(where=[&#39;price&gt;50&#39;]) 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-views\u4E09\u79CD\u8FD4\u56DE" tabindex="-1"><a class="header-anchor" href="#_2-views\u4E09\u79CD\u8FD4\u56DE" aria-hidden="true">#</a> 2. views\u4E09\u79CD\u8FD4\u56DE</h2><ol><li><p>HttpResponse()</p><ol><li>\u76F4\u63A5\u8FD4\u56DE<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    from django.http import HttpResponse

    def index(request):
        return HttpResponse(&quot;\u6B22\u8FCE\u8BBF\u95EE\u6211\u7684\u535A\u5BA2\u9996\u9875\uFF01&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>render<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    from django.shortcuts import render

    def index(request):
        post_list = Post.objects.all().order_by(&#39;-created_time&#39;)
        context = {
            &#39;post_list&#39;: post_list,
            &#39;title&#39;: &#39;\u535A\u5BA2\u9996\u9875&#39;,
            &#39;welcome&#39;: &#39;\u6B22\u8FCE\u8BBF\u95EE\u6211\u7684\u535A\u5BA2\u9996\u9875&#39;,
        }
        return render(request, &#39;blog/index.html&#39;, context=context)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>JsonResponse()</p></li><li><p>redirect(&#39;/other_url&#39;)</p></li></ol><h2 id="_3-\u5BF9cookie\u548Csession\u7684\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#_3-\u5BF9cookie\u548Csession\u7684\u5904\u7406" aria-hidden="true">#</a> 3. \u5BF9cookie\u548Csession\u7684\u5904\u7406</h2><ol><li><p>cookie</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>request.COOKIES.get(&#39;islogin&#39;)
response.set_cookie(&#39;islogin&#39;, &#39;yes&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>session</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u5728django\u2014session\u8868\u4E2D\u521B\u5EFA\u4E00\u6761\u8BB0\u5F55:
   session-key                                     session-data
   ltv8zy1kh5lxj1if1fcs2pqwodumr45t                  \u66F4\u65B0\u6570\u636E
else:
    1 \u751F\u6210\u968F\u673A\u5B57\u7B26\u4E32   ltv8zy1kh5lxj1if1fcs2pqwodumr45t
    2 response.set_cookie(&quot;sessionid&quot;,ltv8zy1kh5lxj1if1fcs2pqwodumr45t)
    3 \u5728django\u2014session\u8868\u4E2D\u521B\u5EFA\u4E00\u6761\u8BB0\u5F55:
    session-key                                     session-data
    ltv8zy1kh5lxj1if1fcs2pqwodumr45t       {&quot;is_login&quot;:True,&quot;username&quot;:&quot;yuan&quot;}


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_4-request\u7684\u51E0\u4E2A\u5C5E\u6027" tabindex="-1"><a class="header-anchor" href="#_4-request\u7684\u51E0\u4E2A\u5C5E\u6027" aria-hidden="true">#</a> 4. request\u7684\u51E0\u4E2A\u5C5E\u6027</h2><ol><li>Path</li><li>method</li><li>GET</li><li>COOKIES</li><li>POST <ol><li>\u7C7B\u4F3C\u5B57\u5178\u5BF9\u8C61, \u53EF\u4EE5\u901A\u8FC7<code>request.POST[&#39;choice&#39;]</code>\u6765\u83B7\u53D6post\u7684\u8BF7\u6C42\u53C2\u6570</li></ol></li></ol>`,9),r=[d];function t(o,a){return i(),s("div",null,r)}var v=e(l,[["render",t],["__file","views.html.vue"]]);export{v as default};
