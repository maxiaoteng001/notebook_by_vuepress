import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as l,o as t,c as p,a as n,b as c,d as s,e as a}from"./app.29a9c448.js";const o={},d=n("h1",{id:"\u5305\u7BA1\u7406\u548C\u865A\u62DF\u73AF\u5883",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5305\u7BA1\u7406\u548C\u865A\u62DF\u73AF\u5883","aria-hidden":"true"},"#"),s(" \u5305\u7BA1\u7406\u548C\u865A\u62DF\u73AF\u5883")],-1),r=n("ul",null,[n("li",null,"\u5305\u5B89\u88C5\u65B9\u6CD5 \u901A\u8FC7Python\u793E\u533A\u5F00\u53D1\u7684pip, easy_install\u7B49\u5DE5\u5177 \u4F7F\u7528\u7CFB\u7EDF\u672C\u8EAB\u81EA\u5E26\u7684\u5305\u7BA1\u7406\u5668(yum, apt-get) \u901A\u8FC7\u6E90\u7801\u5B89\u88C5")],-1),v=n("h2",{id:"_1-\u5B89\u88C5",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u5B89\u88C5","aria-hidden":"true"},"#"),s(" 1. \u5B89\u88C5")],-1),u=n("p",null,"\u865A\u62DF\u73AF\u5883\u7684\u5305\u662F\u5BF9\u771F\u5B9E\u73AF\u5883\u5305\u7684\u4E00\u4E2A\u590D\u5236",-1),m=n("p",null,"virtualenv\u662Fpython2\u4F7F\u7528\u7684, python3.3\u5F15\u5165\u4E86venv, \u4F5C\u4E3A\u81EA\u5E26\u6A21\u5757",-1),h=s("\u53C2\u8003 "),b={href:"https://docs.python.org/3.6/library/venv.html",target:"_blank",rel:"noopener noreferrer"},k=s("https://docs.python.org/3.6/library/venv.html"),g=s(" The pyvenv script has been deprecated as of Python 3.6 in favor of using python3 -m venv to help prevent any potential confusion as to which Python interpreter a virtual environment will be based on."),f=a(`<li><p>virtualenv\u9ED8\u8BA4\u6709python\u53EF\u6267\u884C\u6587\u4EF6, \u5E38\u7528\u6807\u51C6\u5E93\u7B49.</p><ol><li><p>python2</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> virtualenv  <span class="token comment"># \u5B89\u88C5virtualenv</span>
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2Aproject</span>
<span class="token function">mkdir</span> project
<span class="token builtin class-name">cd</span> project
virtualenv venv  <span class="token comment"># \u542F\u52A8\u4E00\u4E2A\u865A\u62DF\u73AF\u5883(\u540D\u4E3A:venv, \u4E5F\u53EF\u4EE5\u5E26\u4E00\u4E9B\u8DEF\u5F84, \u9ED8\u8BA4\u5F53\u524D\u6587\u4EF6\u5939), \u9ED8\u8BA4\u590D\u5236\u7CFB\u7EDF\u6240\u6709\u7684\u7B2C\u4E09\u65B9\u5305</span>
virtualenv --no-site-packages venv  <span class="token comment"># \u542F\u52A8\u4E00\u4E2A\u865A\u62DF\u73AF\u5883</span>
virtualenv venv --python<span class="token operator">=</span>python3.6
,\u4E0D\u5305\u542B\u4EFB\u4F55\u7B2C\u4E09\u65B9\u5305
<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># \u751F\u6548\u4E00\u4E2A\u865A\u62DF\u73AF\u5883</span>
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python
<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># \u9000\u51FA\u865A\u62DF\u73AF\u5883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>python3.3+</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python3 -m venv
    positional arguments:
        ENV_DIR               A directory to create the environment in.
    optional arguments:
        -h, --help            show this <span class="token builtin class-name">help</span> message and <span class="token builtin class-name">exit</span>
        --system-site-packages
                                Give the virtual environment access to the system
                                site-packages dir.
        --symlinks            Try to use symlinks rather than copies, when symlinks
                                are not the default <span class="token keyword">for</span> the platform.
        --copies              Try to use copies rather than symlinks, even when
                                symlinks are the default <span class="token keyword">for</span> the platform.
        --clear               Delete the contents of the environment directory <span class="token keyword">if</span> it
                                already exists, before environment creation.
        --upgrade             Upgrade the environment directory to use this version
                                of Python, assuming Python has been upgraded in-place.
        --without-pip         Skips installing or upgrading pip <span class="token keyword">in</span> the virtual
                                environment <span class="token punctuation">(</span>pip is bootstrapped by default<span class="token punctuation">)</span>
<span class="token comment"># \u542F\u52A8\u4E00\u4E2A\u865A\u62DF\u73AF\u5883(\u540D\u4E3A:env_name, \u4E5F\u53EF\u4EE5\u5E26\u4E00\u4E9B\u8DEF\u5F84, \u9ED8\u8BA4\u5F53\u524D\u6587\u4EF6\u5939), \u9ED8\u8BA4\u590D\u5236\u7CFB\u7EDF\u6240\u6709\u7684\u7B2C\u4E09\u65B9\u5305</span>
python3 -m venv ./path/env_name
<span class="token comment"># \u521B\u5EFA\u4E00\u4E2Aproject</span>
<span class="token builtin class-name">source</span> venv/bin/activate  <span class="token comment"># \u751F\u6548\u4E00\u4E2A\u865A\u62DF\u73AF\u5883</span>
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>which python
<span class="token operator">&gt;</span> /home<span class="token punctuation">..</span>./bin/python
<span class="token punctuation">(</span>venv<span class="token punctuation">)</span><span class="token operator">&gt;</span>deactivate  <span class="token comment"># \u9000\u51FA\u865A\u62DF\u73AF\u5883</span>
<span class="token comment"># \u5B89\u88C5\u4F9D\u8D56\u5305</span>
<span class="token function">sudo</span> pip <span class="token function">install</span> -r requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>windows\u542F\u52A8\u865A\u62DF\u73AF\u5883</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u76F4\u63A5\u547D\u4EE4\u884C\u8FD0\u884Cactive\u6587\u4EF6\u6267\u884C</span>
C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>task<span class="token punctuation">\\</span>mxt_blogs<span class="token punctuation">\\</span>Scripts<span class="token punctuation">\\</span>activate
<span class="token punctuation">(</span>mxt_blogs<span class="token punctuation">)</span> C:<span class="token punctuation">\\</span>Users<span class="token punctuation">\\</span>jizhu<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),y=a(`<h2 id="_2-pip-\u5305\u7BA1\u7406" tabindex="-1"><a class="header-anchor" href="#_2-pip-\u5305\u7BA1\u7406" aria-hidden="true">#</a> 2. pip \u5305\u7BA1\u7406</h2><ol><li><p>\u8BF4\u660E</p></li><li><p>\u4F7F\u7528</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token comment"># \u5217\u51FA</span>
    pip list  <span class="token comment"># \u5217\u51FA\u6240\u6709\u7684\u7B2C\u4E09\u65B9\u5305</span>
    pip freeze <span class="token operator">&gt;</span> requirement.txt  <span class="token comment"># \u5BFC\u51FA\u5F53\u524D\u73AF\u5883\u4E0B\u7684\u6240\u6709\u7B2C\u4E09\u65B9\u5305</span>
    
    <span class="token comment"># \u5B89\u88C5</span>
    pip <span class="token function">install</span> requests  <span class="token comment"># \u5B89\u88C5\u5305 </span>
        -i https://pypi.tuna.tsinghua.edu.cn/simple
    pip <span class="token function">install</span> <span class="token assign-left variable">requests</span><span class="token operator">==</span><span class="token number">3.6</span>.0  
    pip <span class="token function">install</span> -r requirement.txt  <span class="token comment"># \u6839\u636E\u914D\u7F6E\u6587\u4EF6\u751F\u6210\u76F8\u540C\u7684\u73AF\u5883</span>
    pip <span class="token function">install</span> git+https://github.com/xxx  <span class="token comment"># \u5B89\u88C5github\u4ED3\u5E93\u7684\u5305</span>
    
    <span class="token comment"># \u5347\u7EA7</span>
    pip <span class="token function">install</span> -U requests  
    pip <span class="token function">install</span> -U pip  <span class="token comment"># \u5347\u7EA7pip</span>

    <span class="token comment"># \u5378\u8F7D</span>
    pip uninstall requests 
    pip uninstall -r requirements.txt

    <span class="token comment"># \u663E\u793A\u5305\u6240\u5728\u76EE\u5F55</span>
    pip show -f requests

    <span class="token comment"># \u641C\u7D22\u5305</span>
    pip search <span class="token operator">&lt;</span>\u641C\u7D22\u5173\u952E\u5B57<span class="token operator">&gt;</span>

    <span class="token comment"># \u67E5\u8BE2\u53EF\u5347\u7EA7\u7684\u5305</span>
    pip list -o

    <span class="token comment"># \u4E0B\u8F7D\u5305\u800C\u4E0D\u5B89\u88C5</span>
    pip <span class="token function">install</span> <span class="token operator">&lt;</span>\u5305\u540D<span class="token operator">&gt;</span> -d <span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span>
    pip <span class="token function">install</span> -d <span class="token operator">&lt;</span>\u76EE\u5F55<span class="token operator">&gt;</span> -r requirements.txt

    <span class="token comment"># \u6253\u5305</span>
    pip wheel <span class="token operator">&lt;</span>\u5305\u540D<span class="token operator">&gt;</span>

    <span class="token comment"># zsh\u9519\u8BEF\u5339\u914D</span>
    <span class="token comment"># https://stackoverflow.com/questions/30539798/zsh-no-matches-found-requestssecurity</span>
    pip3 <span class="token function">install</span> <span class="token string">&#39;httpx[http2]&#39;</span>

    python setup.py <span class="token function">install</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6709\u7684\u73AF\u5883\u4E2D, python3/2\u4E0Epip\u6CA1\u6709\u7ED1\u5B9A, \u7528pip/pip3 \u6216python -m pip</p></li><li><p>\u6307\u5B9A\u5B89\u88C5\u6E90</p><ol><li><p>\u5355\u6B21\u5B89\u88C5\u6E90</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    pip <span class="token function">install</span> <span class="token operator">&lt;</span>\u5305\u540D<span class="token operator">&gt;</span> -i http://pypi.douban.com/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>\u5168\u5C40\u4FEE\u6539</p><ol><li>unix\u548Cmacos: $HOME/.pip/pip.conf</li><li>windows: %HOME%\\pip\\pip.ini</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>    <span class="token punctuation">[</span>global<span class="token punctuation">]</span>
    <span class="token function">timeout</span> <span class="token operator">=</span> <span class="token number">6000</span>
    index-url <span class="token operator">=</span> http://pypi.douban.com/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li></ol><h2 id="_3-pipenv" tabindex="-1"><a class="header-anchor" href="#_3-pipenv" aria-hidden="true">#</a> 3. pipenv</h2><p>\u662Fpython\u9879\u76EE\u7684\u4F9D\u8D56\u7BA1\u7406\u5668</p><ul><li>\u6839\u636Epipfile\u81EA\u52A8\u5BFB\u627E\u9879\u76EE\u6839\u76EE\u5F55</li><li>\u5982\u679C\u4E0D\u5B58\u5728,\u81EA\u52A8\u751F\u6210pipfile\u548Cpipfile.lock</li><li>\u81EA\u52A8\u5728\u9879\u76EE\u76EE\u5F55\u7684.venv\u76EE\u5F55\u521B\u5EFA\u865A\u62DF\u73AF\u5883.</li><li>\u81EA\u52A8\u7BA1\u7406pipfile\u65B0\u5B89\u88C5\u548C\u5220\u9664\u7684\u5305</li><li>\u81EA\u52A8\u66F4\u65B0pip</li></ul><p>\u4F7F\u7528pipenv\u4EE3\u66FFpip\u5B89\u88C5\u5305</p><h2 id="_4-pipenv-\u548Cautoenv\u7684\u7EC4\u5408" tabindex="-1"><a class="header-anchor" href="#_4-pipenv-\u548Cautoenv\u7684\u7EC4\u5408" aria-hidden="true">#</a> 4. pipenv \u548Cautoenv\u7684\u7EC4\u5408</h2><p>autoenv\u53EF\u4EE5\u5728\u5207\u6362\u6587\u4EF6\u76EE\u5F55\u7684\u540C\u65F6, \u81EA\u52A8\u5B8C\u6210\u6FC0\u6D3B\u865A\u62DF\u73AF\u5883 <strong>\u7528\u6CD5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> pip <span class="token function">install</span> autoenv
<span class="token builtin class-name">source</span> /usr/local/bin/activate.sh

<span class="token function">mkdir</span> <span class="token builtin class-name">test</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>
<span class="token function">touch</span> .env
<span class="token builtin class-name">echo</span> <span class="token string">&#39;source /home/xx/venv/bin/activate&#39;</span> <span class="token operator">&gt;</span> .env
<span class="token builtin class-name">cd</span>
<span class="token builtin class-name">cd</span> <span class="token builtin class-name">test</span>  <span class="token comment"># \u5C31\u4F1A\u81EA\u52A8\u6FC0\u6D3B\u865A\u62DF\u73AF\u5883</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-conda" tabindex="-1"><a class="header-anchor" href="#_5-conda" aria-hidden="true">#</a> 5. conda</h2><ol><li><p>\u5B89\u88C5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># miniconda</span>
<span class="token function">wget</span> https://repo.continuum.io/miniconda/Miniconda3-latest-Linux-x86_64.sh
<span class="token function">bash</span> Miniconda3-latest-Linux-x86_64.sh

<span class="token comment"># conda</span>
<span class="token function">wget</span> https://repo.continuum.io/miniconda/Anaconda-latest-Linux-x86_64.sh
<span class="token function">bash</span> Anaconda-latest-Linux-x86_64.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="\u5B66\u4E60emacs" tabindex="-1"><a class="header-anchor" href="#\u5B66\u4E60emacs" aria-hidden="true">#</a> \u5B66\u4E60Emacs</h2><ul><li><p>\u5B89\u88C5</p></li><li><p>\u4E24\u79CD\u6A21\u5F0F</p></li><li><p>GUI\u6A21\u5F0F</p></li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>emacs  <span class="token comment"># \u9ED8\u8BA4\u542F\u52A8GUI</span>
emacd -nw FILE  <span class="token comment"># \u7EC8\u7AEF\u4E2D\u542F\u52A8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>Daemon\u6A21\u5F0F</p></li><li><p>\u5B66\u4E60lisp</p></li></ul><h2 id="pycharm\u5B89\u88C5\u548C\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#pycharm\u5B89\u88C5\u548C\u4F7F\u7528" aria-hidden="true">#</a> Pycharm\u5B89\u88C5\u548C\u4F7F\u7528</h2><h2 id="\u4F7F\u7528ipython" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528ipython" aria-hidden="true">#</a> \u4F7F\u7528IPython</h2><h2 id="web\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#web\u5F00\u53D1\u73AF\u5883\u914D\u7F6E" aria-hidden="true">#</a> Web\u5F00\u53D1\u73AF\u5883\u914D\u7F6E</h2><p>\u865A\u62DF\u73AF\u5883\u76EE\u5F55\u53C2\u8003:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>python3 -m venv /data/xiaoteng_venv

<span class="token builtin class-name">source</span> /data/xiaoteng_venv/bin/activate

pip freeze <span class="token operator">&gt;</span> /data/requirements.txt

pip <span class="token function">install</span> -r /data/requirements.txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20);function _(x,w){const e=l("ExternalLinkIcon");return t(),p("div",null,[d,r,v,u,n("ol",null,[n("li",null,[m,n("blockquote",null,[n("p",null,[h,n("a",b,[k,c(e)]),g])])]),f]),y])}var I=i(o,[["render",_],["__file","venv.html.vue"]]);export{I as default};
