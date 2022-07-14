import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as l}from"./app.29a9c448.js";const s={},c=l(`<h1 id="windows7-\u5B89\u88C5mysql" tabindex="-1"><a class="header-anchor" href="#windows7-\u5B89\u88C5mysql" aria-hidden="true">#</a> windows7 \u5B89\u88C5mysql</h1><p>\u542F\u52A8: \u670D\u52A1\u4E2D\u627E\u5230mysql, \u70B9\u51FB\u542F\u52A8\u5373\u53EF</p><ul><li><p>char</p></li><li><p>varchar</p><blockquote><blockquote><p>char(n)\u548Cvarchar(n)\u7684n\u8868\u793A\u5B57\u7B26\u7684\u4E2A\u6570, \u4E0D\u8868\u793A\u5B57\u8282\u6570, char\u4E0D\u7BA1\u5B9E\u9645\u503C\u90FD\u4F1A\u5360\u7528n\u4E2A\u7A7A\u95F4, \u800Cvarchar\u5360\u7528\u5B9E\u9645\u5B57\u7B26+1&lt;=n, \u8D85\u8FC7n\u7684\u4E0A\u9650\u5C31\u4F1A\u88AB\u622A\u65AD, char\u4E0A\u9650255\u5B57\u8282, varchar\u4E0A\u965065535\u5B57\u8282,text\u4E0A\u965065535</p></blockquote></blockquote></li><li><p>text</p><blockquote><blockquote><p>char\u5B58\u50A8\u65F6\u4F1A\u622A\u65AD\u5C3E\u90E8\u7A7A\u683C, varchar\u548Ctext\u4E0D\u4F1A</p></blockquote></blockquote><ul><li>varchar <ul><li><blockquote><p>255 tinytext</p></blockquote></li><li><blockquote><p>500 text</p></blockquote></li><li><blockquote><p>20000 mediumtext</p></blockquote></li></ul></li></ul></li><li><p>blob</p></li></ul><h2 id="pymysql\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#pymysql\u67E5\u8BE2" aria-hidden="true">#</a> pymysql\u67E5\u8BE2</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5EFA\u7ACB\u6570\u636E\u5E93, \u6570\u636E\u6765\u81EA\u4E09\u6C5F\u6E90\u5728\u963F\u91CC\u4E91\u7684\u670D\u52A1\u5668
    connect = pymysql.connect(
        host=&#39;39.107.95.132&#39;,
        db=&#39;sanjiangyuan&#39;,
        user=&#39;root&#39;,
        passwd=&#39;jAqFum_sMusIE6E8&#39;,
        charset=&#39;utf8&#39;,
        use_unicode=True
    )
    # \u5982\u679C\u4E0D\u4F7F\u7528Dict, \u8FD4\u56DE\u7684\u662Flist, \u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u5143\u7956
    cursor = connect.cursor(cursor=pymysql.cursors.DictCursor)
    try:
        cursor.execute(
            &quot;select * from yunfu_crawler_news where created_at &gt;= &#39;{}&#39;&quot;.format(yesterday)
        )
        data = cursor.fetchall()
        connect.commit()
        return data
    except Exception as e:
        print(str(e))
        logging.info(str(e))
    finally:
        connect.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[c];function a(t,d){return i(),n("div",null,r)}var v=e(s,[["render",a],["__file","mysql.html.vue"]]);export{v as default};
