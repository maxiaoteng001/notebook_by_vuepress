import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.29a9c448.js";const l={},d=s(`<h1 id="\u9875\u9762\u4EA4\u4E92" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u4EA4\u4E92" aria-hidden="true">#</a> \u9875\u9762\u4EA4\u4E92</h1><h2 id="_1-\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> 1. \u57FA\u672C\u64CD\u4F5C</h2><p>\u9009\u4E2D\u5143\u7D20\u540E, \u53EF\u4EE5\u5BF9\u5143\u7D20\u64CD\u4F5C\u5982\u4E0B:</p><ol><li>\u6A21\u62DF\u6309\u952E send_keys()</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.send_keys(&#39;some text&#39;, keys.ARROW_DOWN)  # \u53D1\u9001\u5185\u5BB9, \u6A21\u62DF\u6309\u952E
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u6E05\u7406<code>input</code>\u6216<code>textarea</code>\u7684\u5185\u5BB9</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.clear()    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u70B9\u51FB</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.click()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="_2-\u586B\u5199\u8868\u683C" tabindex="-1"><a class="header-anchor" href="#_2-\u586B\u5199\u8868\u683C" aria-hidden="true">#</a> 2. \u586B\u5199\u8868\u683C</h2><ol><li>\u9009\u62E9\u4E0B\u62C9\u5217\u8868</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from selenium.webdriver.support.ui import Select

select = Select(driver.find_element_by_name(&#39;name&#39;))
select.select_by_index(index)  # \u6309\u7D22\u5F15\u9009\u62E9
select.select_by_visible_text(&#39;text&#39;)  # \u6309\u663E\u793A\u5185\u5BB9\u9009\u62E9
select.select_by_value(value)  # \u6309value\u9009\u62E9

# \u53D6\u6D88\u9009\u62E9
select.deselect_all()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u63D0\u4EA4\u8868\u5355</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>element.click()

# webdriver\u5BF9\u6BCF\u4E2A\u5143\u7D20\u90FD\u6709submit()\u7684\u65B9\u6CD5, \u5982\u679C\u5BF9\u8868\u5355\u67D0\u4E2A\u5143\u7D20\u4F7F\u7528, \u5C06\u627E\u5230\u6700\u8FD1\u7684form\u5E76\u63D0\u4EA4, \u5982\u679C\u4E0D\u518D\u8868\u5355\u5185, \u5C06\u629B\u51FA\u5F02\u5E38
element.submit()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u4E00\u4E9Bjs\u811A\u672C" tabindex="-1"><a class="header-anchor" href="#_3-\u4E00\u4E9Bjs\u811A\u672C" aria-hidden="true">#</a> 3. \u4E00\u4E9Bjs\u811A\u672C</h2><ol><li>\u6267\u884Cjs\u811A\u672C\u7684\u65B9\u6CD5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>driver.execute_script(&quot;script.js&quot;)
driver.execute_script(&quot;arguments[0].value = &#39;\u4F60\u731C\u4E00\u4E0B&#39;;&quot;, search_button)  #\u5E26\u53C2\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u6BD4\u5982:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u79FB\u9664\u67D0\u4E2A\u6807\u7B7Eclass\u7684hide\u90E8\u5206
driver.execute_script(&quot;$(&#39;.button.load-more.hide&#39;).removeClass(&#39;hide&#39;)&quot;)
# \u79FB\u9664\u6574\u4E2Adom\u6807\u7B7E
driver.execute_script(&quot;$(&#39;#menuContent&#39;).remove()&quot;)
# \u4E0B\u62C9\u5230\u5E95\u90E8
driver.execute_script(&quot;window.scrollTo(0, document.body.scrollHeight);&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>\u4FEE\u6539element\u7684\u5C5E\u6027, \u4E00\u822C\u4F7F\u7528js\u5C31\u53EF\u4EE5</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>new_class_name = &#39;new_class&#39;
driver.execute_script(&quot;$(&#39;.ratingcontent&#39;).class=argument[0]&quot;, new_class_name)
driver.execute_script(&quot;$(&#39;.ratingcontent&#39;).class=&#39;new_class&#39;&quot;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u5224\u65AD\u662F\u5426\u53EF\u89C1-\u6700\u597D\u7528attribute\u5224\u65AD-\u800C\u4E0D\u662Fis-displayed" tabindex="-1"><a class="header-anchor" href="#_4-\u5224\u65AD\u662F\u5426\u53EF\u89C1-\u6700\u597D\u7528attribute\u5224\u65AD-\u800C\u4E0D\u662Fis-displayed" aria-hidden="true">#</a> 4. \u5224\u65AD\u662F\u5426\u53EF\u89C1, \u6700\u597D\u7528attribute\u5224\u65AD, \u800C\u4E0D\u662Fis_displayed()</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u4E60\u60EF\u505A\u6CD5
if element.get_attribute(&#39;style&#39;) == &#39;display: none;&#39;:
    print(&#39;\u90A3\u4E48\u8BE5\u5143\u7D20\u5728\u9875\u9762\u4E0A\u770B\u4E0D\u5230&#39;)
# \u4E4B\u524D\u7684\u505A\u6CD5
result = element.is_displayed()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),a=[d];function t(r,c){return i(),n("div",null,a)}var o=e(l,[["render",t],["__file","ye-mian-jiao-hu.html.vue"]]);export{o as default};
