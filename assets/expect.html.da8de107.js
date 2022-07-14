import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.29a9c448.js";const d={},l=s(`<h1 id="expect" tabindex="-1"><a class="header-anchor" href="#expect" aria-hidden="true">#</a> expect</h1><p>\u548Cshell\u7C7B\u4F3C, \u4E3B\u8981\u7528\u4E8E\u5E26\u4EA4\u4E92\u7684\u547D\u4EE4\u811A\u672C, \u6BD4\u5982rsync\u6267\u884C\u65F6\u8F93\u5165\u5BC6\u7801:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/expect
set timeout 30
spawn rsync -rvptgo maxiaoteng@59.110.160.185:/home/maxiaoteng/crawler/news/data/ /root/crawler/news/data
expect &quot;password:&quot;
send &quot;XXXXXX\\r&quot;
interact
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/usr/bin/expect
set timeout 360
set host [lindex $argv 0]
set port [lindex $argv 1]
set username [lindex $argv 2]
set password [lindex $argv 3]
set src_file [lindex $argv 4]
set dest_file [lindex $argv 5]
#spawn scp $src_file $username@$host:$dest_file
spawn scp -P $port -r $username@$host:$src_file $dest_file
expect {
 &quot;(yes/no)?&quot; {
   send &quot;yes\\n&quot;
   expect &quot;*assword:&quot; { send &quot;$password\\n&quot;}
  }
  &quot;*assword:&quot; {
   send &quot;$password\\n&quot;
  }
}
expect &quot;100%&quot;
expect eof

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>#!/bin/sh
 
src_dir=/data/huiyzl/runtime/
dest_dir=/data/huiyzl/
host=219.135.214.146
port=60203
username=root
password=LENOVOap123
 
# \u76EE\u5F55\u4E0D\u5B58\u5728\uFF0C\u5219\u521B\u5EFA\uFF0C\u5982\u679C\u5B58\u5728\u5148\u5220\u9664\u518D\u521B\u5EFA
if [ ! -d $src_dir ]; then
  mkdir -p $src_dir
else
  rm -rf $src_dir
  mkdir -p $src_dir
fi
 
# \u5C06\u8FDC\u7A0B\u670D\u52A1\u5668\u4E0A\u7684\u6587\u4EF6\u62F7\u8D1D\u5230\u672C\u673A
./expect_scp $host $port $username $password $src_dir $dest_dir

echo &quot;end&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),r=[l];function a(v,t){return i(),n("div",null,r)}var m=e(d,[["render",a],["__file","expect.html.vue"]]);export{m as default};
