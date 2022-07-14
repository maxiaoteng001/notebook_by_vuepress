import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,e as d}from"./app.29a9c448.js";const s={},l=d(`<h1 id="pandas" tabindex="-1"><a class="header-anchor" href="#pandas" aria-hidden="true">#</a> Pandas</h1><p>[TOC]</p><h2 id="\u6570\u636E\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u7ED3\u6784" aria-hidden="true">#</a> \u6570\u636E\u7ED3\u6784</h2><p>\u4E24\u4E2A\u4E3B\u8981\u7684\u6570\u636E\u7ED3\u6784\uFF0CSeries\u548CDataFrame</p><h3 id="_1-series" tabindex="-1"><a class="header-anchor" href="#_1-series" aria-hidden="true">#</a> 1. Series</h3><p>\u7C7B\u4F3Carray\u548Cnumpy, \u4E00\u7EF4\u5E26\u6709\u6570\u636E\u6807\u7B7E</p><ol><li><p>\u57FA\u672C\u4F7F\u7528</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import pandas as pd
pa = pd.Series([1, 2, 3, 4, 5])
# \u81EA\u5B9A\u4E49\u7D22\u5F15
pa = pd.Series([1, 2, 3, 4, 5], index=[&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;, &#39;e&#39;])
# \u67E5\u770B\u7D22\u5F15
pa.index
# \u67E5\u770B\u6570\u636E
pa[&#39;a&#39;]
pa[[&#39;a&#39;, &#39;b&#39;]]

# \u81EA\u52A8\u89E3\u6790\u5B57\u5178
dd = {
    &#39;lulu&#39;: &#39;lluu&#39;,
    &#39;qinqin&#39;: &#39;qqiinn&#39;,
}
pdd = pd.Series(dd)
# \u4E5F\u53EF\u4EE5\u6307\u5B9A\u7D22\u5F15, \u4E0D\u5B58\u5728\u7684\u81EA\u52A8\u8868\u793ANan
pdd = pd.Series(dd, index={&#39;lulu&#39;, &#39;qinqin&#39;, &#39;c&#39;})

# to_frame()
df_lng.to_frame()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5176\u4ED6</p></li></ol><h3 id="_2-dataframe" tabindex="-1"><a class="header-anchor" href="#_2-dataframe" aria-hidden="true">#</a> 2. DataFrame</h3><p>\u7C7B\u4F3C\u8868\u683C\u7684\u6570\u636E\u7ED3\u6784, \u65E2\u6709\u884C\u7D22\u5F15, \u4E5F\u6709\u5217\u7D22\u5F15</p><ol><li><p>\u57FA\u672C\u4F7F\u7528</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># \u4F20\u5165\u5B57\u5178
dict = {
    &#39;name&#39;: [&#39;\u5F20\u4E09&#39;, &#39;\u674E\u56DB&#39;],
    &#39;sex&#39;: [&#39;\u7537&#39;, &#39;\u5973&#39;],
    &#39;age&#39;: [&#39;21&#39;, &#39;76&#39;],
}
df = pd.DataFrame(dict)
df.info()
df.head()
df.tail()

# \u589E\u52A0/\u4FEE\u6539\u8868\u5934
all_df.columns=[&#39;store&#39;, &#39;lat&#39;, &#39;lng&#39;, &#39;ts&#39;, &#39;cnt&#39;]


# \u7C7B\u578B\u8F6C\u6362
df.age = df.age.astype(&#39;str&#39;)
df[&#39;origin_lat&#39;] = df[&#39;origin_lat&#39;].astype(float, errors = &#39;raise&#39;)
df[&#39;a&#39;] = pd.to_numeric(df[&#39;a&#39;],errors = &#39;coerce&#39;)

# \u683C\u5F0F\u6E05\u6D17 other_key\u53EF\u9009\u53C2\u6570
def cut_word(word, other_key=None):
    return str(word)+&#39;_&#39;
df_duplicates.salary.apply(cut_word, other_key=1)

# \u751F\u6210\u65B0\u7684\u5217
df[&#39;B&#39;] = df[&#39;A&#39;].map(lambda a : 1 if a&gt;0 else 0)

# df\u9009\u53D6\u5217\u7684\u65B9\u5F0F
df[&#39;age&#39;]   # \u8FD4\u56DESeries
df[[&#39;age&#39;, &#39;name&#39;]]   # \u8FD4\u56DESeries
# \u9009\u53D6\u884C
df.ix[0]   
df.iloc[0]   
df.loc[0]   # \u7528\u4E8E\u901A\u8FC7\u6807\u7B7E\u9009\u53D6, \u6CA1\u6709\u6807\u7B7E\u7684df\u548Ciloc\u901A\u7528   
df[1:2]
# \u884C\u5217\u5171\u540C\u9009\u62E9
df.ix[&#39;a&#39;, &#39;age&#39;]
df.ix[[&#39;a&#39;, &#39;c&#39;], &#39;age&#39;]
df.ix[[&#39;a&#39;: &#39;c&#39;], &#39;age&#39;]

# \u4FEE\u6539\u548C\u65B0\u589E\u5217
df[&#39;age&#39;] = [1, 2]
df[&#39;age&#39;] = &#39;2&#39;
df.age = &#39;2&#39;

# \u5224\u65AD
df.sex == &#39;\u7537&#39;  # \u8FD4\u56DEseries, True or False
df[(df.sex==&#39;\u7537&#39;)]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u8BE2</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># \u7C7Bsql\u8BED\u53E5
df.query(&#39;(age==18 and sex==&quot;\u7537&quot;) &amp; (age&gt;18 and sex==&quot;\u5973&quot;)&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8BA1\u7B97</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code># distinct
df.age.unique()
len(df.age.unique())

# \u6392\u5E8F axis=0 \u6309column\u6392\u5E8F, axis=1\u6309index\u6392\u5E8F, inplace=True \u76F4\u63A5\u66FF\u6362
df_batch.sort_values(by=&#39;multiplier&#39;, axis=0)

# \u53BB\u91CD drop_duplicates
df_duplicates = df.drop_duplicates(subset=&#39;age&#39;, keep=&#39;first&#39;)


# \u5E73\u5747\u8BA1\u7B97/\u7EDF\u4E00\u884C\u7684\u591A\u5217\u8BA1\u7B97, axis=1\u8868\u793A\u7528\u5728\u884C
def avg_dup_colum(line):
    return (line.x + line.y)/2
df_duplicates[&#39;avg_data&#39;] = df_duplicates.apply(avg_dup_colum, axis=1)
# lambda\u51FD\u6570
df_duplicates[&#39;avg_data&#39;] = df_duplicates.apply(lambda x:(x.x+x.y)/2, axis=1)

# \u805A\u5408group by
# \u7B49\u4EF7 group by city, count(1), order by cnt desc
df.city.value_counts()

# \u805A\u5408\u5206\u7EC4\u8BA1\u7B97
df.groupby([&#39;market_shopNo&#39;])[&#39;origin_lat&#39;].median()    # \u7C7B\u578B\u4E3Aseries, \u9700\u8981\u6267\u884Cseries.to_frame()\u8F6C\u6362\u6210dataframe

# \u5408\u5E76df, join\u9ED8\u8BA4 
pd.concat([df_lat.to_frame(), df_lng.to_frame(), df_ts.to_frame()], axis=1, join=&quot;inner&quot;)

# index to column / column to index
df.set_index(&#39;ts&#39;)
df[&#39;index1&#39;] = df.index
df.reset_index(level=0, inplace=True)


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u8F7D\u5165\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u8F7D\u5165\u6570\u636E" aria-hidden="true">#</a> \u8F7D\u5165\u6570\u636E</h2><ol><li><p>read_csv</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>pd.read_csv(file_path, encoding=&#39;utf-8&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>read_excel</p></li><li><p>read_table</p></li><li><p>read_sql</p></li></ol>`,12),a=[l];function r(v,c){return e(),n("div",null,a)}var b=i(s,[["render",r],["__file","pandas.html.vue"]]);export{b as default};
