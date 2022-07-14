import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as l}from"./app.29a9c448.js";const s={},d=l(`<h1 id="mongo-shell" tabindex="-1"><a class="header-anchor" href="#mongo-shell" aria-hidden="true">#</a> Mongo Shell</h1><ol><li><p>\u8FDB\u5165shell</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>mongo  # \u76F4\u63A5\u8FDB\u5165, \u9ED8\u8BA4\u7AEF\u53E327017\u7684\u6570\u636E\u5E93
mongo --port=27010  # \u6307\u5B9A\u7AEF\u53E3\u7684\u6570\u636E\u5E93
mongo host:port/admin -u root -p password
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u57FA\u672C\u64CD\u4F5C</p></li></ol><ul><li><p>\u67E5\u770B\u7248\u672C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.version()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u767B\u9646</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use db_name  # \u767B\u9646admin, use admin
db.auth(&quot;username&quot;,&quot;password&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u64CD\u4F5C\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.help()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u6570\u636E\u5E93\u5217\u8868</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u6216\u521B\u5EFA\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>use db_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u663E\u793A\u6240\u6709\u7528\u6237</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show users
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u663E\u793A\u5F53\u524D\u6570\u636E\u5E93\u7684\u96C6\u5408</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>show collections
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u663E\u793A\u96C6\u5408\u64CD\u4F5C\u547D\u4EE4</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.yourCollection.help()
# \u6BD4\u5982
db.readme.help()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u663E\u793A\u5F53\u524D\u6240\u7528\u7684\u6570\u636E\u5E93</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; db
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5176\u4ED6\u64CD\u4F5C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.collection.find()
db.collection.find().count
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u9000\u51FA</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt; exit
bye
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><ol start="3"><li>\u6570\u636E\u5BFC\u51FA\u5BFC\u5165<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5BFC\u51FAcsv
mongoexport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts --csv --out CtripRoomCounts.csv --fields &#39;hotelId,address,city,lat,lng,name,room_counts&#39;

# \u5BFC\u51FA\u5176\u4ED6\u6587\u4EF6
mongoexport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts -o co.dat

# \u5BFC\u5165
mongoimport --host xx --port xx -u root -p xx --authenticationDatabase admin --db HotelRoomCounts --collection CtripRoomCounts --upsert file_name
# \u53D1\u73B0\u5176\u5B9E\u8FD9\u79CD\u5BFC\u5165\u6709\u4E9B\u95EE\u9898\uFF0C\u63A8\u8350\u4F7F\u7528python\u624B\u52A8\u5BFC\u5165\uFF0C\u8D77\u56E0\u662F\u6211\u901A\u8FC7\u5BFC\u51FA\u6DFB\u52A0\u552F\u4E00\u7D22\u5F15\u518D\u5BFC\u5165\u53BB\u91CD\uFF0C\u80FD\u591F\u5C06\u6EE1\u8DB3\u8981\u6C42\u7684\u5BFC\u5165\uFF0C\u5176\u4ED6\u7684\u6570\u636E\u4F1A\u505C\u5728\u5916\u9762\uFF0C\u8FDB\u7A0B\u4E5F\u4E0D\u7ED3\u675F\u3002
# \u800C\u4E14Python\u5BFC\u5165\u4E5F\u66F4\u5FEB\u4E00\u4E9B\uFF0C 4w\u6761insert_many
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,4),a=[d];function t(o,r){return i(),n("div",null,a)}var v=e(s,[["render",t],["__file","mongo_shell.html.vue"]]);export{v as default};
