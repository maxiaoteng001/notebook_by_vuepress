import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as l,c,a as n,b as o,d as s,e}from"./app.29a9c448.js";const r={},d=n("h1",{id:"tmux-\u547D\u4EE4",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#tmux-\u547D\u4EE4","aria-hidden":"true"},"#"),s(" tmux \u547D\u4EE4")],-1),u=n("p",null,"tmux \u91C7\u7528c/s\u6A21\u578B\uFF0C\u8F93\u5165tmux\u547D\u4EE4\uFF0C \u76F8\u5F53\u4E8E\u5F00\u542F\u4E86\u4E00\u4E2A\u670D\u52A1\u5668\uFF08server\uFF09\uFF0C\u9ED8\u8BA4\u65B0\u5EFA\u4E00\u4E2A\u4F1A\u8BDD\uFF08session\uFF09,\u4F1A\u8BDD\u4E2D\u9ED8\u8BA4\u65B0\u5EFA\u4E00\u4E2A\u7A97\u53E3\uFF08window\uFF09\uFF0C\u7A97\u53E3\u4E2D\u9ED8\u8BA4\u65B0\u5EFA\u4E00\u4E2A\u9762\u677F\uFF08pane\uFF09\u3002",-1),p=e(`<li><p>\u57FA\u672C\u547D\u4EE4</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u65B0\u5EFA\u4E00\u4E2Asession</span>
tmux <span class="token punctuation">[</span>new -s \u4F1A\u8BDD\u540D -n \u7A97\u53E3\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u9ED8\u8BA4\u8FDB\u5165\u7B2C\u4E00\u4E2Asession</span>
tmux at <span class="token punctuation">[</span>-t \u4F1A\u8BDD\u540D<span class="token punctuation">]</span>
<span class="token comment"># \u5217\u51FA\u6240\u6709\u4F1A\u8BDD</span>
tmux <span class="token function">ls</span>
<span class="token comment"># \u5173\u95ED\u6307\u5B9A\u4F1A\u8BDD\uFF0C \u8FD8\u6709kill-server\uFF0C kill-window\uFF0C kill-pane</span>
tmux kill-session -t \u4F1A\u8BDD\u540D
<span class="token comment"># \u6309\u4E0B ctr+b\u4EE5\u540E</span>
    s  \u5217\u51FA\u6240\u6709\u4F1A\u8BDD
    c  \u521B\u5EFA\u7A97\u53E3
    w  \u5217\u51FA\u6240\u6709\u7A97\u53E3
    <span class="token punctuation">[</span>  \u5C4F\u5E55\u5185\u6EDA\u52A8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,1),m=s("\u914D\u7F6E"),v={href:"https://serverok.in/tmux-create-new-window-on-current-directory",target:"_blank",rel:"noopener noreferrer"},b=s("tmux create new window on current directory"),_=e(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># vi ~/.tmux.conf</span>
<span class="token builtin class-name">bind</span> c new-window -c <span class="token string">&quot;#{pane_current_path}&quot;</span>
<span class="token builtin class-name">bind</span> <span class="token string">&#39;&quot;&#39;</span> split-window -c <span class="token string">&quot;#{pane_current_path}&quot;</span>
<span class="token builtin class-name">bind</span> % split-window -h -c <span class="token string">&quot;#{pane_current_path}&quot;</span>

<span class="token comment"># \u751F\u6548\u6587\u4EF6</span>
tmux source-file ~/.tmux.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1);function k(h,x){const a=t("ExternalLinkIcon");return l(),c("div",null,[d,u,n("ol",null,[p,n("li",null,[n("p",null,[m,n("a",v,[b,o(a)])]),_])])])}var g=i(r,[["render",k],["__file","tmux.html.vue"]]);export{g as default};
