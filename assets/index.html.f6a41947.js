import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.29a9c448.js";const i={},l=a(`<h1 id="svn-git-\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#svn-git-\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> svn - git \u57FA\u672C\u64CD\u4F5C</h1><h2 id="_1-\u529F\u80FD" tabindex="-1"><a class="header-anchor" href="#_1-\u529F\u80FD" aria-hidden="true">#</a> 1. \u529F\u80FD</h2><ol><li><p><strong>\u521D\u59CB\u5316\u4ED3\u5E93</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>\u68C0\u51FA\u4EE3\u7801\u5230\u672C\u5730</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> clone git_url

<span class="token comment"># svn</span>
svn checkout svn_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u5C06\u6587\u4EF6\u6DFB\u52A0\u5230\u7248\u672C\u5E93</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>  <span class="token comment"># \u6DFB\u52A0\u6240\u6709\u5185\u5BB9\u5230\u7248\u672C\u5E93</span>
<span class="token function">git</span> <span class="token function">add</span> file_name  <span class="token comment"># \u6DFB\u52A0\u6307\u5B9A\u6587\u4EF6\u5230\u7248\u672C\u5E93</span>

<span class="token comment"># svn</span>
svn <span class="token function">add</span> new_file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u63D0\u4EA4\u66F4\u6539</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;\u66F4\u6539\u8BF4\u660E&#39;</span>  <span class="token comment"># \u63D0\u4EA4\u66F4\u6539\u5230\u672C\u5730\u7248\u672C\u5E93</span>
<span class="token function">git</span> push  <span class="token comment"># \u63A8\u9001\u4EE3\u7801\u5230\u9ED8\u8BA4\u7EBF\u4E0A\u4ED3\u5E93</span>
<span class="token function">git</span> push gitlab master  <span class="token comment"># \u63A8\u9001\u4EE3\u7801\u5230\u6307\u5B9A\u7684\u7EBF\u4E0A\u4ED3\u5E93</span>

<span class="token function">git</span> push -u github master  <span class="token comment"># \u5C06\u4F1A\u4FEE\u6539\u8BBE\u7F6E\u9ED8\u8BA4\u7684\u63A8\u9001\u6D41</span>

<span class="token comment"># svn</span>
svn commit -m <span class="token string">&#39;\u66F4\u6539\u8BF4\u660E&#39;</span>  <span class="token comment"># \u63D0\u4EA4\u66F4\u6539\u5230\u7248\u672C\u5E93, \u5E76\u63A8\u9001\u5230\u7EBF\u4E0A</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u91CD\u7F6E\u6682\u5B58\u533A</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p><strong>\u663E\u793A\u63D0\u4EA4\u8BB0\u5F55</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> log  <span class="token comment"># \u663E\u793Acommit\u8BB0\u5F55</span>
<span class="token function">git</span> log --graph --oneline firstbranch_name secondbranch_name  <span class="token comment"># \u6309\u56FE\u5F62\u663E\u793A</span>
<span class="token function">git</span> log -1 -- <span class="token punctuation">[</span>file path<span class="token punctuation">]</span>   <span class="token comment"># \u67E5\u770B\u6307\u5B9A\u6587\u4EF6\u7684\u8BB0\u5F55, \u5373\u65F6\u5220\u9664\u4E86\u4E5F\u652F\u6301</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u68C0\u51FA\u67D0\u4E00\u7248\u672C</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout commit_id  <span class="token comment"># \u68C0\u51FA\u67D0\u4E00id\u7684\u72B6\u6001</span>
<span class="token function">git</span> checkout branch_name  <span class="token comment"># \u68C0\u51FA\u6307\u5B9A\u5206\u652F\u7684\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u66F4\u65B0\u672C\u5730\u4EE3\u7801</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> pull
<span class="token function">git</span> pull remote_name branch_name 
<span class="token comment"># svn</span>
svn update
svn update -r m svn_path  <span class="token comment"># \u66F4\u65B0\u6307\u5B9A\u7248\u672C\u7684\u4EE3\u7801</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u67E5\u770B\u5F53\u524D\u72B6\u6001</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> status
<span class="token comment"># svn</span>
svn status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u67E5\u770B\u4EE3\u7801\u5E93\u7684\u4FE1\u606F</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> remote -v  <span class="token comment"># \u663E\u793A\u8FDC\u7A0B\u4ED3\u5E93\u7684\u94FE\u63A5</span>
<span class="token comment"># svn</span>
svn info  <span class="token comment"># \u663E\u793A\u4ED3\u5E93\u6240\u6709\u4FE1\u606F</span>
svn info <span class="token operator">|</span><span class="token function">grep</span> URL/http  
<span class="token function">cat</span> .svn/entries <span class="token operator">|</span><span class="token function">grep</span> http  
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u4EE3\u7801\u5E93\u7684\u5DEE\u5F02</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> <span class="token function">diff</span>  <span class="token comment"># \u6BD4\u8F83\u5DE5\u4F5C\u533A\u548C\u6682\u5B58\u533A\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> commit_1 commit_2  <span class="token comment"># \u6BD4\u8F83\u4E24\u6B21\u63D0\u4EA4\u7684\u5DEE\u5F02</span>
<span class="token function">git</span> <span class="token function">diff</span> --staged  <span class="token comment"># \u6BD4\u8F83\u6682\u5B58\u533A\u548C\u4EE3\u7801\u5E93\u7684\u5DEE\u5F02</span>
<span class="token comment"># svn</span>
svn <span class="token function">diff</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>remote \u7BA1\u7406</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># 1. \u67E5\u770Bremote</span>
<span class="token function">git</span> remote -v
<span class="token comment"># 2. \u589E\u52A0\u65B0\u7684remote** </span>
<span class="token function">git</span> remote <span class="token function">add</span> gitlab git_url
<span class="token function">git</span> push gitlab master
<span class="token comment"># 3. \u4FEE\u6539remote\u7684url**</span>
<span class="token function">git</span> remote set-url gitlab git_url
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>rm \u64A4\u9500\u5DF2\u52A0\u5165\u8FFD\u8E2A\u7684\u6587\u4EF6</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5220\u9664\u672C\u5730\u548C\u4ED3\u5E93</span>
<span class="token function">git</span> <span class="token function">rm</span> file_name
<span class="token function">git</span> <span class="token function">rm</span> -r directory/
<span class="token comment"># \u53EA\u5220\u9664\u4ED3\u5E93, \u4FDD\u7559\u672C\u5730\u6587\u4EF6</span>
<span class="token function">git</span> <span class="token function">rm</span> --cached file_name
<span class="token comment"># svn</span>
svn <span class="token function">rm</span> --keep-local my_important_file  <span class="token comment"># \u5C06\u53EA\u5220\u9664\u7248\u672C\u5E93\u7684\u6587\u4EF6\uFF0C\u800C\u4E0D\u5220\u9664\u672C\u5730</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_2-\u64A4\u9500\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_2-\u64A4\u9500\u4FEE\u6539" aria-hidden="true">#</a> 2. \u64A4\u9500\u4FEE\u6539</h2><ol><li>\u9996\u5148\u4E86\u89E3\u4E00\u4E0B,git\u6709\u4E09\u4E2A\u6982\u5FF5(\u5DE5\u4F5C\u533A, \u6682\u5B58\u533A \u548C \u4ED3\u5E93\u533A)</li><li>\u901A\u5E38\u6709\u51E0\u79CD\u60C5\u51B5: <ol><li><p>\u64A4\u9500\u5DE5\u4F5C\u533A\u7684\u4FEE\u6539, \u8FD8\u6CA1\u6709add\u5230\u7248\u672C\u5E93</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># git</span>
<span class="token function">git</span> checkout <span class="token builtin class-name">.</span>  <span class="token comment"># \u64A4\u9500\u5168\u90E8\u66F4\u6539</span>
<span class="token function">git</span> checkout XX.file  <span class="token comment"># \u64A4\u9500\u7279\u5B9A\u6587\u4EF6</span>
<span class="token comment"># svn</span>
svn revert -r path_name  <span class="token comment"># \u4E22\u5F03\u672A\u63D0\u4EA4\u7684\u4EE3\u7801 </span>
svn revert file_name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u64A4\u9500\u6682\u5B58\u533A\u7684\u4FEE\u6539, add\u5230\u4E86\u6682\u5B58\u533A,\u8FD8\u6CA1\u6709commit</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard
<span class="token function">git</span> reset HEAD //\u64A4\u9500add\u7684\u6240\u6709\u66F4\u6539
<span class="token function">git</span> reset HEAD XX.file //\u64A4\u9500XX.file\u7684\u6DFB\u52A0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u64A4\u9500\u7248\u672C\u5E93\u91CC\u9762\u7684\u4FEE\u6539</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> revert HEAD //\u64A4\u9500\u4E4B\u524D\u7684commit
<span class="token function">git</span> revert HEAD^ //\u64A4\u9500\u524D\u524D\u4E00\u6B21\u7684commit
<span class="token function">git</span> revert commit-id //\u64A4\u9500\u6307\u5B9A\u7248\u672C, \u4E5F\u4F1A\u4F5C\u4E3A\u4E00\u6B21\u63D0\u4EA4commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u6CE8\u610F: git revert\u662F\u6062\u590D\u6307\u5B9A\u7248\u672C\u7684\u4FEE\u6539, \u4F5C\u4E3A\u4E00\u6B21\u65B0\u63D0\u4EA4\u4E0A\u4F20,\u7248\u672C\u4F1A\u9012\u589E</strong></p></li></ol></li></ol><h2 id="_3-\u914D\u7F6Egit" tabindex="-1"><a class="header-anchor" href="#_3-\u914D\u7F6Egit" aria-hidden="true">#</a> 3. \u914D\u7F6Egit</h2><ol><li><p><strong>git config --list \u67E5\u770B\u914D\u7F6E</strong></p></li><li><p><strong>\u5168\u5C40\u4FEE\u6539\uFF0C\u5EFA\u8BAE\u5C06\u6700\u5E38\u7528\u7684\u8D26\u53F7\u914D\u7F6E\u5230globle\u4E2D</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name xxx
<span class="token function">git</span> config --global user.email xxx@xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u5F53\u524D\u9879\u76EE</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config user.name xxx
<span class="token function">git</span> config user.email xxx@xxx.xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u89E3\u51B3\u6BCF\u6B21git pull/push\u90FD\u8981\u8F93\u5165\u5BC6\u7801\u7684\u95EE\u9898</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name maxiaoteng
<span class="token function">git</span> config --global user.email maxiaoteng@yunfutech.com
<span class="token function">git</span> config --global credential.helper store
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_5-\u8FDC\u7A0B\u4EE3\u7801\u5E93\u56DE\u6EDA" tabindex="-1"><a class="header-anchor" href="#_5-\u8FDC\u7A0B\u4EE3\u7801\u5E93\u56DE\u6EDA" aria-hidden="true">#</a> 5. \u8FDC\u7A0B\u4EE3\u7801\u5E93\u56DE\u6EDA</h2><ol><li><p>\u672C\u5730\u4EE3\u7801\u5E93\u56DE\u6EDA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> reset --hard commit-id :\u56DE\u6EDA\u5230commit-id\uFF0C\u8BB2commit-id\u4E4B\u540E\u63D0\u4EA4\u7684commit\u90FD\u53BB\u9664
<span class="token function">git</span> reset --hard HEAD~3\uFF1A\u5C06\u6700\u8FD13\u6B21\u7684\u63D0\u4EA4\u56DE\u6EDA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDC\u7A0B\u4EE3\u7801\u5E93\u56DE\u6EDA</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout the_branch
<span class="token function">git</span> pull
<span class="token function">git</span> branch the_branch_backup //\u5907\u4EFD\u4E00\u4E0B\u8FD9\u4E2A\u5206\u652F\u5F53\u524D\u7684\u60C5\u51B5
<span class="token function">git</span> reset --hard the_commit_id //\u628Athe_branch\u672C\u5730\u56DE\u6EDA\u5230the_commit_id
<span class="token function">git</span> push origin :the_branch //\u5220\u9664\u8FDC\u7A0B the_branch
<span class="token function">git</span> push origin the_branch //\u7528\u56DE\u6EDA\u540E\u7684\u672C\u5730\u5206\u652F\u91CD\u65B0\u5EFA\u7ACB\u8FDC\u7A0B\u5206\u652F
<span class="token function">git</span> push origin :the_branch_backup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_6-\u5206\u652F\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_6-\u5206\u652F\u64CD\u4F5C" aria-hidden="true">#</a> 6. \u5206\u652F\u64CD\u4F5C</h2><ol><li><p>\u65B0\u5EFA\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout -b iss53

<span class="token comment"># \u5C06\u4F1A\u65B0\u5EFA\u4E00\u4E2A\u7A7A\u767D\u5206\u652F, \u6240\u6709\u6587\u4EF6\u5904\u4E8E\u5F85\u63D0\u4EA4\u72B6\u6001</span>
<span class="token function">git</span> checkout --orphan iss53

<span class="token comment"># \u76F8\u5F53\u4E8E</span>
<span class="token function">git</span> branch iss53
<span class="token function">git</span> checkout iss53
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5207\u6362\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token comment"># \u6CE8\u610F\u5207\u6362\u5206\u652F\u7684\u65F6\u5019\u6700\u597D\u4FDD\u6301\u4E00\u4E2A\u6E05\u6D01\u7684\u5DE5\u4F5C\u533A\u57DF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5408\u5E76\u5230master</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> checkout master
<span class="token function">git</span> merge hotfix

<span class="token comment"># \u5982\u679Cmaster\u4FEE\u6539\u4E86\u5F71\u54CD\u5F00\u53D1\u5206\u652F\u7684\u5185\u5BB9\uFF0C\u53EF\u4EE5</span>
<span class="token function">git</span> merge master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch -d hotfix
<span class="token comment"># \u5408\u5E76\u4E4B\u540E\uFF0C\u65E7\u7684\u5206\u652F\u4E0D\u518D\u6709\u7528\uFF0C\u53EF\u4EE5\u5220\u9664</span>

<span class="token function">git</span> branch -D hotfix
<span class="token comment"># \u672A\u5408\u5E76\u8FC7\u7684\u5206\u652F\u5982\u679C\u5220\u9664\u4F1A\u63D0\u9192\uFF0C\u7528D\u5F3A\u5236\u5220\u9664</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u51B2\u7A81\u89E3\u51B3</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u51B2\u7A81\u7684\u6587\u4EF6\u4F1A\u4FDD\u7559\u5728\u5DE5\u4F5C\u533A\uFF0C\u4FEE\u6539\u540E\u4F7F\u7528git add</span>
<span class="token comment"># \u4E00\u65E6\u6682\u5B58\uFF0C\u8868\u793A\u51B2\u7A81\u89E3\u51B3\uFF0C\u7136\u540Egit status\uFF0Cgit commit \u6765\u63D0\u4EA4\u5373\u53EF</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u67E5\u770B\u5F53\u524D\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> branch
<span class="token function">git</span> branch -v   <span class="token comment"># \u67E5\u770B\u5404\u5206\u652F\u5F53\u524D\u7684\u6700\u65B0\u7248\u672C</span>
<span class="token function">git</span> branch --merged <span class="token comment"># \u67E5\u770B\u5408\u5E76\u5230\u5F53\u524D\u5206\u652F\u7684\u5176\u4ED6\u5206\u652F</span>
<span class="token function">git</span> branch --no-merged <span class="token comment"># \u67E5\u770B\u672A\u5408\u5E76\u7684\u5206\u652F</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_7-clone-\u6307\u5B9A\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#_7-clone-\u6307\u5B9A\u5206\u652F" aria-hidden="true">#</a> 7. clone \u6307\u5B9A\u5206\u652F</h2><ol><li><p>clone\u6307\u5B9A\u5206\u652F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u9ED8\u8BA4clone master</span>
<span class="token function">git</span> clone XXX.git
<span class="token comment"># \u5236\u5B9A</span>
<span class="token function">git</span> clone -b branch-name XXX.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5982\u679Cclone\u4E86master\uFF0C\u5176\u4ED6\u5206\u652F\u9690\u85CF</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u67E5\u770B</span>
<span class="token function">git</span> branch -a

<span class="token comment"># \u5FEB\u901F\u68C0\u51FA\u5206\u652F</span>
<span class="token comment"># detached Head\uFF0C \u6240\u505A\u4FEE\u6539\u4E0D\u4F1A\u63D0\u4EA4\u5230\u4EFB\u4F55\u5206\u652F</span>
<span class="token function">git</span> checkout origin/feature 

<span class="token comment"># \u5FEB\u901F\u521B\u5EFA\u4E00\u4E2A\u672C\u5730\u5206\u652F</span>
<span class="token function">git</span> checkout -b feature origin/feature
<span class="token function">git</span> checkout -t origin/feature  <span class="token comment">#\u4F1A\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u548C\u8FDC\u7A0B\u5206\u652F\u540C\u540D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="_8-\u5176\u4ED6\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#_8-\u5176\u4ED6\u95EE\u9898" aria-hidden="true">#</a> 8. \u5176\u4ED6\u95EE\u9898</h2><ol><li><p>\u5220\u9664\u5386\u53F2\u7684\u67D0\u6761\u5206\u652F</p><p>\u5728\u4FEE\u6539scrapy\u8FC7\u7A0B\u4E2D, <code>git push</code>\u62A5\u9519<code>error in commit b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5: badEmail: invalid author/committer line - bad email</code>, \u67E5\u770B\u662F2010\u5E74\u7684\u63D0\u4EA4, email\u683C\u5F0F\u6709\u95EE\u9898, \u76F4\u63A5\u5220\u9664\u8FD9\u6761commit\u4E0D\u5F71\u54CD\u5176\u4ED6</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u5F85\u5220\u9664commit b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5</span>
<span class="token comment"># \u524D\u4E00\u6761 2067bcd8d0c8af3738948da65c34456813f77c51</span>
<span class="token function">git</span> checkout b3a65d3313724ab2dc9f3dca0c0b0a025ed68fe5
<span class="token function">git</span> rebase
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol>`,15),c=[l];function t(d,o){return s(),e("div",null,c)}var m=n(i,[["render",t],["__file","index.html.vue"]]);export{m as default};
