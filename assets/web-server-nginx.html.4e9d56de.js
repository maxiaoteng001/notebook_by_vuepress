import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,e as l}from"./app.29a9c448.js";const s={},d=l(`<h1 id="web\u670D\u52A1\u5668nginx" tabindex="-1"><a class="header-anchor" href="#web\u670D\u52A1\u5668nginx" aria-hidden="true">#</a> WEB\u670D\u52A1\u5668Nginx</h1><h2 id="_1-\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#_1-\u6982\u8FF0" aria-hidden="true">#</a> 1. \u6982\u8FF0</h2><ol><li><p>web\u670D\u52A1\u5668\u548C\u5E94\u7528\u670D\u52A1\u5668\u7684\u533A\u522B</p><ul><li>web\u670D\u52A1\u5668\u8D1F\u8D23\u5904\u7406HTTP\u534F\u8BAE</li><li>web\u670D\u52A1\u5668\u7528\u4E8E\u5904\u7406\u9759\u6001\u9875\u9762\u7684\u5185\u5BB9, \u5BF9\u4E8Epython\u4EA7\u751F\u7684\u52A8\u6001\u5185\u5BB9,\u901A\u8FC7WSGI\u63A5\u53E3\u4EA4\u7ED9\u5E94\u7528\u670D\u52A1\u5668\u6765\u5904\u7406</li><li>\u4E00\u822C\u5E94\u7528\u670D\u52A1\u5668\u90FD\u96C6\u6210\u4E86web\u670D\u52A1\u5668</li></ul><p>\u5C3D\u7BA1\u96C6\u6210\u4E86web\u670D\u52A1\u5668, \u4F46\u5927\u90E8\u5206\u7528\u6765\u505A\u8C03\u8BD5, \u51FA\u4E8E\u6027\u80FD\u548C\u7A33\u5B9A\u6027\u7684\u8003\u8651,\u5E76\u4E0D\u80FD\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528.</p></li><li><p>\u4E3A\u4EC0\u4E48\u9009\u62E9Nginx</p><ul><li>\u5904\u7406\u9759\u6001\u6587\u4EF6,\u7D22\u5F15\u6587\u4EF6\u6548\u7387\u975E\u5E38\u9AD8</li><li>\u9AD8\u5E76\u53D1\u8FDE\u63A5</li><li>\u4F4E\u7684\u5185\u5B58\u635F\u8017</li><li>\u5F3A\u5927\u7684\u53CD\u54CD\u4EE3\u7406\u548C\u8D1F\u8F7D\u5747\u8861\u529F\u80FD,\u5E73\u8861\u96C6\u7FA4\u4E2D\u5404\u4E2A\u670D\u52A1\u5668\u7684\u8D1F\u8F7D\u538B\u529B</li></ul></li></ol><h2 id="_2-\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_2-\u4F7F\u7528" aria-hidden="true">#</a> 2. \u4F7F\u7528</h2><ol><li><p>\u5B89\u88C5</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo yum install nginx
sudo systemctl status nginx # \u67E5\u770B\u5F53\u524D\u72B6\u6001
sudo systemctl start nginx # \u67E5\u770B\u5F53\u524D\u72B6\u6001
sudo systemctl stop nginx # \u67E5\u770B\u5F53\u524D\u72B6\u6001
sudo systemctl enable nginx  # \u8BBE\u7F6E\u5F00\u673A\u81EA\u542F\u52A8
sudo systemctl restart nginx  # \u91CD\u542Fnginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u597D\u7684\u4E60\u60EF\u662F\u5148\u68C0\u67E5\u914D\u7F6E\u6587\u4EF6,\u518D\u91CD\u542F\u670D\u52A1\u5668
sudo nginx -t  # \u9A8C\u8BC1Nginx\u914D\u7F6E\u662F\u5426\u6B63\u786E

# \u4FEE\u6539\u914D\u7F6E\u6587\u4EF6\u540E\u7684\u91CD\u8F7D
sudo nginx -s reload
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u914D\u7F6E\u6587\u4EF6</p><ol><li>\u914D\u7F6E\u76EE\u5F55<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u67E5\u627E\u4E3B\u914D\u7F6E\u6587\u4EF6, \u91CC\u9762\u5305\u542B\u65E5\u5FD7\u6587\u4EF6\u8DEF\u5F84\u548C\u5B50\u914D\u7F6E\u6587\u4EF6\u8DEF\u5F84
# \u4F18\u5148\u914D\u7F6E\u65B9\u6848\u53C2\u8003https://serverfault.com/questions/527630/what-is-the-different-usages-for-sites-available-vs-the-conf-d-directory-for-ngi
find / -name nginx.conf
# \u5B50\u8DEF\u5F84\u914D\u7F6E\u6587\u4EF6
/etc/nginx/conf.d/*.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u914D\u7F6E\u6587\u4EF6demo<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># nginx.conf
user root;
worker_processes  1;
error_log  /var/log/nginx/error.log warn;
pid        /var/run/nginx.pid;
events {
    worker_connections  1024;
}
http {
    include       /etc/nginx/mime.types;
    default_type  application/octet-stream;

    log_format  main  &#39;$remote_addr - $remote_user [$time_local] &quot;$request&quot; &#39;
                    &#39;$status $body_bytes_sent &quot;$http_referer&quot; &#39;
                    &#39;&quot;$http_user_agent&quot; &quot;$http_x_forwarded_for&quot;&#39;;

    access_log  /var/log/nginx/access.log  main;

    sendfile        on;
    #tcp_nopush     on;

    keepalive_timeout  65;

    #gzip  on;

    include /etc/nginx/conf.d/*.conf;
}
# \u5B50\u914D\u7F6E\u6587\u4EF6
server {
    charset utf-8;
    listen 80;
    server_name book.maxiaoteng.xyz;
    server_name book.maxiaoteng.tk;

    # \u91CD\u5B9A\u5411
    rewrite  ^/(.*)$  https://maxiaoteng001.github.io/maxiaoteng-book/$1 permanent;

    # \u4EE3\u7406
    location /static {
        alias /var/www/mxt_blogs_project/static; 
    }
    location / {
        proxy_pass http://localhost:4000;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>\u65E5\u5FD7\u4F4D\u7F6E</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>/var/log/nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol><h2 id="_3-\u5176\u4ED6" tabindex="-1"><a class="header-anchor" href="#_3-\u5176\u4ED6" aria-hidden="true">#</a> 3. \u5176\u4ED6</h2><ol><li><p>\u4EC0\u4E48\u65F6\u5019\u9009\u62E9\u6E90\u7801\u5B89\u88C5\uFF1F\u4E8C\u8FDB\u5236\u5305\u5B89\u88C5\u548C\u6E90\u7801\u5B89\u88C5\u5E94\u7528\u573A\u666F:</p><ul><li>\u5BF9\u8F6F\u4EF6\u7CBE\u7B80\u5EA6\u6709\u8981\u6C42, \u6027\u80FD\u975E\u5E38\u9AD8\u7684\u8981\u6C42</li><li>\u6E90\u7801\u5B89\u88C5\u81EA\u7531\u5EA6\u9AD8</li><li>\u5BF9\u8F6F\u4EF6\u6253\u8FC7\u8865\u4E01</li><li>\u6E90\u7801\u5B89\u88C5\u63D0\u4F9B\u4E86\u7EDF\u4E00\u7684\u5B89\u88C5\u65B9\u5F0F,\u53EF\u4EE5\u8DE8\u5E73\u53F0\u5E94\u7528</li></ul></li><li><p>\u53CD\u5411\u4EE3\u7406\u548C\u6B63\u5411\u4EE3\u7406<br> \u901A\u5E38\u90E8\u7F72web\u5E94\u7528\u7684\u65F6\u5019, \u90FD\u4F1A\u9009\u62E9\u4E00\u4E2A\u53EB\u505AWSGI\u7684\u5E94\u7528\u670D\u52A1\u5668,\u642D\u914DNginx\u6765\u4F7F\u7528</p><ul><li>\u6B63\u5411\u4EE3\u7406: \u4F5C\u4E3A\u4E00\u4E2A\u5A92\u4ECB\u5C06\u4E92\u8054\u7F51\u83B7\u53D6\u7684\u8D44\u6E90\u8FD4\u56DE\u7ED9\u76F8\u5173\u8054\u7684\u5BA2\u6237\u7AEF, \u4EE3\u7406\u548C\u5BA2\u6237\u7AEF\u5728\u4E00\u4E2A\u5C40\u57DF\u7F51,\u5BF9\u4E8E\u670D\u52A1\u7AEF\u662F\u900F\u660E\u7684</li><li>\u53CD\u5411\u4EE3\u7406: \u6839\u636E\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42, \u4ECE\u540E\u7AEF\u7684\u670D\u52A1\u5668\u4E0A\u83B7\u53D6\u8D44\u6E90, \u7136\u540E\u518D\u5C06\u8FD9\u4E9B\u8D44\u6E90\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF. \u4EE3\u7406\u548C\u670D\u52A1\u5668\u5728\u4E00\u4E2A\u5C40\u57DF\u7F51,\u5BF9\u5BA2\u6237\u7AEF\u662F\u900F\u660E\u7684.</li></ul></li><li><p>\u53CD\u5411\u4EE3\u7406\u7684\u4F5C\u7528</p><ul><li>\u63D0\u9AD8\u52A8\u6001\u8BED\u8A00\u7684I/O\u5904\u7406\u80FD\u529B</li><li>\u52A0\u5BC6\u548CSSL\u52A0\u901F</li><li>\u5B89\u5168</li><li>\u8D1F\u8F7D\u5747\u8861</li><li>\u7F13\u5B58\u9759\u6001\u5185\u5BB9</li><li>\u652F\u6301\u538B\u7F29</li></ul></li><li><p>\u8D1F\u8F7D\u5747\u8861\u7B97\u6CD5</p><ol><li>round-robin # \u6309\u8BF7\u6C42\u987A\u5E8F\u4F9D\u6B21\u5206\u914D, \u5982\u679C\u67D0\u53F0\u670D\u52A1\u5668\u81EA\u52A8\u5B95\u673A,\u81EA\u52A8\u5254\u9664</li><li>least_conn # \u8BF7\u6C42\u53D1\u9001\u5230\u6D3B\u8DC3\u8FDE\u63A5\u6700\u5C11\u7684\u670D\u52A1\u5668\u4E0A</li><li>ip_hash # \u6309ip\u7684hash\u503C\u5206\u914D</li><li>hash</li></ol></li><li><p>\u901A\u8FC7Gunicorn\u542F\u52A8Flask\u5E94\u7528</p></li><li><p>nginx\u4EE3\u7406\u51FA\u73B0502</p><ol><li>\u68C0\u67E5\u65E5\u5FD7\u53D1\u73B0<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># log\u6587\u4EF6\u663E\u793A
15 connect() to 127.0.0.1:2018 failed (13: Permission denied) while connecting to upstream
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u89E3\u51B3\u529E\u6CD5: <ul><li>\u5173\u95EDselinux</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo vim /etc/selinux/config
# \u5C06SELINUX=enforcing\u6539\u4E3ASELINUX=disabled
\u91CD\u542F\u5373\u53EF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u4E34\u65F6\u89E3\u51B3:</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>setenforce 0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li></ol></li></ol>`,7),a=[d];function r(t,v){return e(),n("div",null,a)}var o=i(s,[["render",r],["__file","web-server-nginx.html.vue"]]);export{o as default};
