import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as l,e as n}from"./app.29a9c448.js";const s={},a=n(`<h1 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h1><ol><li>debian ubuntu\u5B89\u88C5<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo apt update
echo &#39;\u5B89\u88C5\u89E3\u538B\u7F29\u8F6F\u4EF6&#39;
apt-get install aptitude -y
aptitude install bzip2 tar xz-utils gcc -y
echo &#39;\u5B89\u88C5\u4F9D\u8D56&#39;
sudo aptitude install build-essential zlib1g-dev libncurses5-dev libgdbm-dev libnss3-dev libssl-dev libsqlite3-dev libreadline-dev libffi-dev curl libbz2-dev -y
curl -O https://www.python.org/ftp/python/3.8.2/Python-3.8.2.tar.xz
tar -xf Python-3.8.2.tar.xz
cd Python-3.8.2 &amp;&amp; ./configure --enable-optimizations
make -j 4
sudo make altinstall
echo &#39;install success&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>centos</li></ol>`,2),t=[a];function d(c,r){return i(),l("div",null,t)}var o=e(s,[["render",d],["__file","install.html.vue"]]);export{o as default};
