import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,e as s}from"./app.29a9c448.js";const t={},a=s(`<h1 id="tesserocr-ocr\u56FE\u7247\u8BC6\u522B\u6587\u5B57" tabindex="-1"><a class="header-anchor" href="#tesserocr-ocr\u56FE\u7247\u8BC6\u522B\u6587\u5B57" aria-hidden="true">#</a> tesserocr OCR\u56FE\u7247\u8BC6\u522B\u6587\u5B57</h1><ol><li>install tesseract <ol><li>linux <ol><li>yum install -y tesseract</li></ol></li><li>macos <ol><li>brew install imagemagick</li><li>brew install tesseract</li><li>brew install tesseract-lang</li></ol></li><li>\u67E5\u770B\u652F\u6301\u8BED\u8A00 <ol><li>tesseract --list-langs</li></ol></li><li>\u6D4B\u8BD5 <ol><li>tesseract image.png result -l eng &amp;&amp; cat result.txt</li></ol></li></ol></li><li>install pytesseract <ol><li><blockquote><p>pip3.6 install pillow \u56FE\u7247\u5DE5\u5177</p></blockquote></li><li><blockquote><p>CFLAGS=&#39;-stdlib=libc++ -mmacosx-version-min=10.7&#39; pip3.6 install pytesseract</p></blockquote></li></ol></li><li>demo<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import pytesseract
    from PIL import Image
    image = Image.open(&#39;ocr_demo_eng.jpg&#39;)
    print(tesserocr.image_to_string(image, lang=&#39;eng&#39;, config=&#39;-psm 7 digits&#39;))
    # \u914D\u7F6E\u7528\u6765\u9650\u5B9A\u8BC6\u522B\u6570\u5B57
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,2),r=[a];function o(n,c){return l(),i("div",null,r)}var p=e(t,[["render",o],["__file","pytesseract.html.vue"]]);export{p as default};