import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.29a9c448.js";const p={},o=e(`<h1 id="subprocess" tabindex="-1"><a class="header-anchor" href="#subprocess" aria-hidden="true">#</a> Subprocess</h1><blockquote><p>subprocess\u7684\u76EE\u7684\u5C31\u662F\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u8FDB\u7A0B\u5E76\u4E14\u4E0E\u4E4B\u901A\u4FE1\u3002 subprocess\u6A21\u5757\u4E2D\u53EA\u5B9A\u4E49\u4E86\u4E00\u4E2A\u7C7B: Popen\u3002\u53EF\u4EE5\u4F7F\u7528Popen\u6765\u521B\u5EFA\u8FDB\u7A0B\uFF0C\u5E76\u4E0E\u8FDB\u7A0B\u8FDB\u884C\u590D\u6742\u7684\u4EA4\u4E92\u3002\u5B83\u7684\u6784\u9020\u51FD\u6570\u5982\u4E0B\uFF1A The subprocess option:\u7528\u6765\u6267\u884C\u5176\u4ED6\u7684\u53EF\u6267\u884C\u7A0B\u5E8F\u7684\uFF0C\u5373\u6267\u884C\u5916\u90E8\u547D\u4EE4\u3002 \u4ED6\u662Fos.fork() \u548C os.execve() \u7684\u5C01\u88C5\u3002 \u4ED6\u542F\u52A8\u7684\u8FDB\u7A0B\u4E0D\u4F1A\u628A\u7236\u8FDB\u7A0B\u7684\u6A21\u5757\u52A0\u8F7D\u4E00\u904D\u3002\u4F7F\u7528subprocess\u7684\u901A\u4FE1\u673A\u5236\u6BD4\u8F83\u5C11\uFF0C\u901A\u8FC7\u7BA1\u9053\u6216\u8005\u4FE1\u53F7\u673A\u5236. The multiprocessing option:\u7528\u6765\u6267\u884Cpython\u7684\u51FD\u6570\uFF0C\u4ED6\u542F\u52A8\u7684\u8FDB\u7A0B\u4F1A\u91CD\u65B0\u52A0\u8F7D\u7236\u8FDB\u7A0B\u7684\u4EE3\u7801\u3002\u53EF\u4EE5\u901A\u8FC7Queue\u3001Array\u3001Value\u7B49\u5BF9\u8C61\u6765\u901A\u4FE1\u3002</p></blockquote><ul><li>\u5E76\u53D1\u4E0E\u5E76\u884C \u5E76\u53D1: \u4EA4\u9519\u4F7F\u7528cpu\u5B9E\u884C\u4EFB\u52A1\uFF0C\u672C\u8D28\u8FD8\u662F\u987A\u5E8F\u6267\u884C \u5E76\u884C: \u591A\u6838CPU\u540C\u65F6\u6267\u884C\uFF0C\u6548\u7387\u7FFB\u500D</li></ul><h2 id="\u7528subprocess\u6A21\u5757\u7BA1\u7406\u5B50\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u7528subprocess\u6A21\u5757\u7BA1\u7406\u5B50\u8FDB\u7A0B" aria-hidden="true">#</a> \u7528subprocess\u6A21\u5757\u7BA1\u7406\u5B50\u8FDB\u7A0B</h2><ol><li><p>Python\u542F\u52A8\u7684\u591A\u4E2A\u5B50\u8FDB\u7A0B\u662F\u53EF\u4EE5\u5E76\u884C\u8FD0\u884C\u7684\u3002\u5B50\u8FDB\u7A0B\u5C06\u4F1A\u72EC\u7ACB\u4E8E\u7236\u8FDB\u7A0B\u800C\u8FD0\u884C\uFF0C\u8FD9\u91CC\u7684\u7236\u8FDB\u7A0B\u6307\u7684Python\u89E3\u91CA\u5668\u3002</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import subprocess
proc = subprocess.Popen([&#39;echo&#39;, &#39;Hello subprocess&#39;], stdout=subprocess.PIPE)
out, err = proc.communicate()
print(out.decode(&#39;utf-8&#39;))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Python \u5B50\u8FDB\u7A0B\u4ECE\u7236\u8FDB\u7A0B\u4E2D\u89E3\u8026\uFF0C\u7236\u8FDB\u7A0B\u53EF\u4EE5\u8FD0\u884C\u8DDF\u591A\u6761\u5E73\u884C\u7684\u5B50\u8FDB\u7A0B</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import subprocess

def run_some():
    proc = subprocess.Popen([&#39;cmd&#39;],
                stdout=subprocess.PIPE,
                stdout=subprocess.PIPE)
    return proc

procs = []
for _ in range(10):
    proc = run_some(x)
    procs.append(proc)

for proc in procs:
    proc.communicate()  # \u901A\u8FC7comunicate\uFF0C\u7B49\u5F85\u8FD9\u4E9B\u5B50\u8FDB\u7A0B\u5B8C\u6210I/O\u5DE5\u4F5C\u5E76\u7EC8\u7ED3

# \u5982\u679C\u4E0D\u5E0C\u671B\u4EA4\u4E92\u64CD\u4F5C,\u4F7F\u7528shell\u6267\u884C
subpros = []
for _ in range(10):
    subpro = subprocess.Popen([&#39;cmd&#39;], shell=True)
    subpors.append(subpro)
for subpro in subpors:
    subpro.wait()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Python\u5411\u5B50\u8FDB\u7A0B\u8F93\u9001\u6570\u636E</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>import os
def run_openssl(data):
    env = os.environ.copy()
    env[&#39;password&#39;] = b&#39;\\xe24U&#39;
    proc = subprocess.Popen(
        [&#39;openssl&#39;, &#39;enc&#39;, &#39;-des3&#39;, &#39;-pass&#39;, &#39;env:password&#39;],
        env=env,
        stdin=subprocess.PIPE,
        stdout=subprocess.PIPE
    )
    proc.stdin.write(data)
    proc.stdin.flush() # \u786E\u4FDD\u5B50\u8FDB\u7A0B\u83B7\u5F97\u8F93\u5165
    return proc

procs = []
for _ in range(3):
    data = os.urandom(10)
    proc = run_openssl(data)
    procs.append(proc)
    other_proc = run_other(proc.stdout) # \u5C06\u524D\u4E00\u4E2A\u8FDB\u7A0B\u7684\u8F93\u51FA\u4E3A\u8F93\u5165
    other_procs.append(other_proc)

for proc in procs:
    out, error = proc.communicate()  # \u901A\u8FC7comunicate\uFF0C\u7B49\u5F85\u8FD9\u4E9B\u5B50\u8FDB\u7A0B\u5B8C\u6210I/O\u5DE5\u4F5C\u5E76\u7EC8\u7ED3
    print(out)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Python\u5B50\u8FDB\u7A0B\u8D85\u65F6\u8BBE\u7F6E</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>for proc in procs:
    try:
        proc.communicate(timeout=0.1)  # \u5982\u679C\u5B50\u8FDB\u7A0B\u57280.1s\u5185\u6CA1\u6709\u7ED3\u675F\uFF0C\u5C06\u629B\u51FA\u5F02\u5E38\uFF0C\u53EF\u4EE5\u5F3A\u884C\u7EC8\u6B62
    except subprocess.TimeoutExpired:
        proc.terminate()
        proc.wait()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="popen\u8BE6\u89E3" tabindex="-1"><a class="header-anchor" href="#popen\u8BE6\u89E3" aria-hidden="true">#</a> Popen\u8BE6\u89E3</h2><ol><li><p>\u521D\u59CB\u5316</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span>args<span class="token punctuation">,</span> bufsize<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">,</span> executable<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> stdin<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> stderr<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> preexec_fn<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> close_fds<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> cwd<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> env<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> universal_newlines<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span> startupinfo<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> creationflags<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    <span class="token comment"># \u53C2\u6570args\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6216\u8005\u5E8F\u5217\u7C7B\u578B\uFF08\u5982\uFF1Alist\uFF0C\u5143\u7EC4\uFF09\uFF0C\u7528\u4E8E\u6307\u5B9A\u8FDB\u7A0B\u7684\u53EF\u6267\u884C\u6587\u4EF6\u53CA\u5176\u53C2\u6570\u3002\u5982\u679C\u662F\u5E8F\u5217\u7C7B\u578B\uFF0C\u7B2C\u4E00\u4E2A\u5143\u7D20\u901A\u5E38\u662F\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002\u6211\u4EEC\u4E5F\u53EF\u4EE5\u663E\u5F0F\u7684\u4F7F\u7528executeable\u53C2\u6570\u6765\u6307\u5B9A\u53EF\u6267\u884C\u6587\u4EF6\u7684\u8DEF\u5F84\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u53C2\u6570</p><ol><li><p>\u53C2\u6570stdin, stdout, stderr\u5206\u522B\u8868\u793A\u7A0B\u5E8F\u7684\u6807\u51C6\u8F93\u5165\u3001\u8F93\u51FA\u3001\u9519\u8BEF\u53E5\u67C4\u3002\u4ED6\u4EEC\u53EF\u4EE5\u662FPIPE\uFF0C\u6587\u4EF6\u63CF\u8FF0\u7B26\u6216\u6587\u4EF6\u5BF9\u8C61\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u4E3ANone\uFF0C\u8868\u793A\u4ECE\u7236\u8FDB\u7A0B\u7EE7\u627F\u3002</p></li><li><p>\u5982\u679C\u53C2\u6570shell\u8BBE\u4E3Atrue\uFF0C\u7A0B\u5E8F\u5C06\u901A\u8FC7shell\u6765\u6267\u884C\u3002</p></li><li><p>\u53C2\u6570env\u662F\u5B57\u5178\u7C7B\u578B\uFF0C\u7528\u4E8E\u6307\u5B9A\u5B50\u8FDB\u7A0B\u7684\u73AF\u5883\u53D8\u91CF\u3002\u5982\u679Cenv = None\uFF0C\u5B50\u8FDB\u7A0B\u7684\u73AF\u5883\u53D8\u91CF\u5C06\u4ECE\u7236\u8FDB\u7A0B\u4E2D\u7EE7\u627F\u3002</p></li><li><p>subprocess.PIPE</p><blockquote><p>\u5728\u521B\u5EFAPopen\u5BF9\u8C61\u65F6\uFF0Csubprocess.PIPE\u53EF\u4EE5\u521D\u59CB\u5316stdin, stdout\u6216stderr\u53C2\u6570\u3002\u8868\u793A\u4E0E\u5B50\u8FDB\u7A0B\u901A\u4FE1\u7684\u6807\u51C6\u6D41\u3002</p></blockquote></li><li><p>subprocess.STDOUT</p><blockquote><p>\u521B\u5EFAPopen\u5BF9\u8C61\u65F6\uFF0C\u7528\u4E8E\u521D\u59CB\u5316stderr\u53C2\u6570\uFF0C\u8868\u793A\u5C06\u9519\u8BEF\u901A\u8FC7\u6807\u51C6\u8F93\u51FA\u6D41\u8F93\u51FA\u3002</p></blockquote></li></ol></li><li><p>Popen\u7684\u65B9\u6CD5</p><ol><li><p>Popen.poll() \u7528\u4E8E\u68C0\u67E5\u5B50\u8FDB\u7A0B\u662F\u5426\u5DF2\u7ECF\u7ED3\u675F\u3002\u8BBE\u7F6E\u5E76\u8FD4\u56DEreturncode\u5C5E\u6027\u3002</p></li><li><p>Popen.wait() \u7B49\u5F85\u5B50\u8FDB\u7A0B\u7ED3\u675F\u3002\u8BBE\u7F6E\u5E76\u8FD4\u56DEreturncode\u5C5E\u6027\u3002</p></li><li><p>Popen.communicate(input=None) \u4E0E\u5B50\u8FDB\u7A0B\u8FDB\u884C\u4EA4\u4E92\u3002\u5411stdin\u53D1\u9001\u6570\u636E\uFF0C\u6216\u4ECEstdout\u548Cstderr\u4E2D\u8BFB\u53D6\u6570\u636E\u3002\u53EF\u9009\u53C2\u6570input\u6307\u5B9A\u53D1\u9001\u5230\u5B50\u8FDB\u7A0B\u7684\u53C2\u6570\u3002Communicate()\u8FD4\u56DE\u4E00\u4E2A\u5143\u7EC4\uFF1A(stdoutdata, stderrdata)\u3002\u6CE8\u610F\uFF1A\u5982\u679C\u5E0C\u671B\u901A\u8FC7\u8FDB\u7A0B\u7684stdin\u5411\u5176\u53D1\u9001\u6570\u636E\uFF0C\u5728\u521B\u5EFAPopen\u5BF9\u8C61\u7684\u65F6\u5019\uFF0C\u53C2\u6570stdin\u5FC5\u987B\u88AB\u8BBE\u7F6E\u4E3APIPE\u3002\u540C\u6837\uFF0C\u5982\u679C\u5E0C\u671B\u4ECEstdout\u548Cstderr\u83B7\u53D6\u6570\u636E\uFF0C\u5FC5\u987B\u5C06stdout\u548Cstderr\u8BBE\u7F6E\u4E3APIPE\u3002</p></li><li><p>Popen.send_signal(signal) \u5411\u5B50\u8FDB\u7A0B\u53D1\u9001\u4FE1\u53F7\u3002</p></li><li><p>Popen.terminate() \u505C\u6B62(stop)\u5B50\u8FDB\u7A0B\u3002\u5728windows\u5E73\u53F0\u4E0B\uFF0C\u8BE5\u65B9\u6CD5\u5C06\u8C03\u7528Windows API TerminateProcess\uFF08\uFF09\u6765\u7ED3\u675F\u5B50\u8FDB\u7A0B\u3002</p></li><li><p>Popen.kill() \u6740\u6B7B\u5B50\u8FDB\u7A0B\u3002</p></li><li><p>Popen.stdin\uFF0CPopen.stdout \uFF0CPopen.stderr \uFF0C \u5B98\u65B9\u6587\u6863\u4E0A\u8FD9\u4E48\u8BF4\uFF1A</p><blockquote><p>stdin, stdout and stderr specify the executed programs\u2019 standard input, standard output and standard error file handles, respectively. Valid values are PIPE, an existing file descriptor (a positive integer), an existing file object, and None.</p></blockquote></li><li><p>Popen.pid \u83B7\u53D6\u5B50\u8FDB\u7A0B\u7684\u8FDB\u7A0BID\u3002</p></li><li><p>Popen.returncode \u83B7\u53D6\u8FDB\u7A0B\u7684\u8FD4\u56DE\u503C\u3002\u5982\u679C\u8FDB\u7A0B\u8FD8\u6CA1\u6709\u7ED3\u675F\uFF0C\u8FD4\u56DENone\u3002</p></li></ol></li><li><p>\u7B80\u5355\u7684\u7528\u6CD5</p><ol><li><p>\u6267\u884C</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>p<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&quot;dir&quot;</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>  
p<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span> 
<span class="token comment"># shell\u53C2\u6570\u6839\u636E\u4F60\u8981\u6267\u884C\u7684\u547D\u4EE4\u7684\u60C5\u51B5\u6765\u51B3\u5B9A\uFF0C\u4E0A\u9762\u662Fdir\u547D\u4EE4\uFF0C\u5C31\u4E00\u5B9A\u8981shell=True\u4E86\uFF0Cp.wait()\u53EF\u4EE5\u5F97\u5230\u547D\u4EE4\u7684\u8FD4\u56DE\u503C\u3002</span>
<span class="token comment"># \u5982\u679C\u4E0A\u9762\u5199\u6210a=p.wait()\uFF0Ca\u5C31\u662Freturncode\u3002\u90A3\u4E48\u8F93\u51FAa\u7684\u8BDD\uFF0C\u6709\u53EF\u80FD\u5C31\u662F0\u3010\u8868\u793A\u6267\u884C\u6210\u529F\u3011\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u7A0B\u901A\u8BAF</p><ol><li><p>\u5982\u679C\u60F3\u5F97\u5230\u8FDB\u7A0B\u7684\u8F93\u51FA\uFF0C\u7BA1\u9053\u662F\u4E2A\u5F88\u65B9\u4FBF\u7684\u65B9\u6CD5\uFF0C\u8FD9\u6837\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>p<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&#39;ls&#39;</span><span class="token punctuation">,</span>shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>
stdoutput<span class="token punctuation">,</span>erroutput <span class="token operator">=</span> p<span class="token punctuation">.</span>communicate<span class="token punctuation">(</span><span class="token string">&#39;/home/zoer&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span> stdoutput<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span> erroutput
<span class="token comment"># \u4E0A\u9762\u7684\u4F8B\u5B50\u901A\u8FC7communicate\u7ED9stdin\u53D1\u9001\u6570\u636E\uFF0C\u7136\u540E\u4F7F\u7528\u4E00\u4E2Atuple\u63A5\u6536\u547D\u4EE4\u7684\u6267\u884C\u7ED3\u679C\u3002</span>

<span class="token comment"># \u4E0A\u9762\uFF0C\u6807\u51C6\u8F93\u51FA\u548C\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u662F\u5206\u5F00\u7684\uFF0C\u4E5F\u53EF\u4EE5\u5408\u5E76\u8D77\u6765\uFF0C\u53EA\u9700\u8981\u5C06stderr\u53C2\u6570\u8BBE\u7F6E\u4E3Asubprocess.STDOUT\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD9\u6837\u5B50\uFF1A</span>
p<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&quot;dir&quot;</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">,</span> stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>  
<span class="token punctuation">(</span>stdoutput<span class="token punctuation">,</span>erroutput<span class="token punctuation">)</span> <span class="token operator">=</span> p<span class="token punctuation">.</span>communicate<span class="token punctuation">(</span><span class="token punctuation">)</span>  
p<span class="token punctuation">.</span>communicate\u4F1A\u4E00\u76F4\u7B49\u5230\u8FDB\u7A0B\u9000\u51FA\uFF0C\u5E76\u5C06\u6807\u51C6\u8F93\u51FA\u548C\u6807\u51C6\u9519\u8BEF\u8F93\u51FA\u8FD4\u56DE\uFF0C\u8FD9\u6837\u5C31\u53EF\u4EE5\u5F97\u5230\u5B50\u8FDB\u7A0B\u7684\u8F93\u51FA\u4E86\u3002

<span class="token comment"># \u5982\u679C\u4F60\u60F3\u4E00\u884C\u884C\u5904\u7406\u5B50\u8FDB\u7A0B\u7684\u8F93\u51FA\uFF0C\u4E5F\u6CA1\u6709\u95EE\u9898\uFF1A</span>
p<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&quot;dir&quot;</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">,</span> stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>STDOUT<span class="token punctuation">)</span>  
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  
    buff <span class="token operator">=</span> p<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">if</span> buff <span class="token operator">==</span> <span class="token string">&#39;&#39;</span> <span class="token keyword">and</span> p<span class="token punctuation">.</span>poll<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token boolean">None</span><span class="token punctuation">:</span>  
        <span class="token keyword">break</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li><p>\u6B7B\u9501</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u4F46\u662F\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u7BA1\u9053\uFF0C\u800C\u53C8\u4E0D\u53BB\u5904\u7406\u7BA1\u9053\u7684\u8F93\u51FA\uFF0C\u90A3\u4E48\u5C0F\u5FC3\u70B9\uFF0C\u5982\u679C\u5B50\u8FDB\u7A0B\u8F93\u51FA\u6570\u636E\u8FC7\u591A\uFF0C\u6B7B\u9501\u5C31\u4F1A\u53D1\u751F\u4E86\uFF0C\u6BD4\u5982\u4E0B\u9762\u7684\u7528\u6CD5\uFF1A</span>
p<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&quot;longprint&quot;</span><span class="token punctuation">,</span> shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span> stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">,</span> stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>STDOUT<span class="token punctuation">)</span>  
p<span class="token punctuation">.</span>wait<span class="token punctuation">(</span><span class="token punctuation">)</span>  
longprint\u662F\u4E00\u4E2A\u5047\u60F3\u7684\u6709\u5927\u91CF\u8F93\u51FA\u7684\u8FDB\u7A0B\uFF0C\u90A3\u4E48\u5728\u6211\u7684xp<span class="token punctuation">,</span> Python2<span class="token punctuation">.</span><span class="token number">5</span>\u7684\u73AF\u5883\u4E0B\uFF0C\u5F53\u8F93\u51FA\u8FBE\u5230<span class="token number">4096</span>\u65F6\uFF0C\u6B7B\u9501\u5C31\u53D1\u751F\u4E86\u3002\u5F53\u7136\uFF0C\u5982\u679C\u6211\u4EEC\u7528p<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>readline\u6216\u8005p<span class="token punctuation">.</span>communicate\u53BB\u6E05\u7406\u8F93\u51FA\uFF0C\u90A3\u4E48\u65E0\u8BBA\u8F93\u51FA\u591A\u5C11\uFF0C\u6B7B\u9501\u90FD\u662F\u4E0D\u4F1A\u53D1\u751F\u7684\u3002\u6216\u8005\u6211\u4EEC\u4E0D\u4F7F\u7528\u7BA1\u9053\uFF0C\u6BD4\u5982\u4E0D\u505A\u91CD\u5B9A\u5411\uFF0C\u6216\u8005\u91CD\u5B9A\u5411\u5230\u6587\u4EF6\uFF0C\u4E5F\u90FD\u662F\u53EF\u4EE5\u907F\u514D\u6B7B\u9501\u7684\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u7BA1\u9053\u8FDE\u63A5 subprocess\u8FD8\u53EF\u4EE5\u8FDE\u63A5\u8D77\u6765\u591A\u4E2A\u547D\u4EE4\u6765\u6267\u884C\u3002 \u5728shell\u4E2D\u6211\u4EEC\u77E5\u9053\uFF0C\u60F3\u8981\u8FDE\u63A5\u591A\u4E2A\u547D\u4EE4\u53EF\u4EE5\u4F7F\u7528\u7BA1\u9053\u3002 \u5728subprocess\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528\u4E0A\u4E00\u4E2A\u547D\u4EE4\u6267\u884C\u7684\u8F93\u51FA\u7ED3\u679C\u4F5C\u4E3A\u4E0B\u4E00\u6B21\u6267\u884C\u7684\u8F93\u5165\u3002\u4F8B\u5B50\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>p1<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&#39;cat ff&#39;</span><span class="token punctuation">,</span>shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>
p2<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>Popen<span class="token punctuation">(</span><span class="token string">&#39;tail -2&#39;</span><span class="token punctuation">,</span>shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>stdin<span class="token operator">=</span>p1<span class="token punctuation">.</span>stdout<span class="token punctuation">,</span>stdout<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>PIPE<span class="token punctuation">)</span>
<span class="token keyword">print</span> p2<span class="token punctuation">.</span>stdout
<span class="token keyword">print</span> p2<span class="token punctuation">.</span>stdout<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># \u4F8B\u5B50\u4E2D\uFF0Cp2\u4F7F\u7528\u4E86\u7B2C\u4E00\u6B21\u6267\u884C\u547D\u4EE4\u7684\u7ED3\u679Cp1\u7684stdout\u4F5C\u4E3A\u8F93\u5165\u6570\u636E\uFF0C\u7136\u540E\u6267\u884Ctail\u547D\u4EE4\u3002</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0B\u9762\u662F\u4E00\u4E2A\u66F4\u5927\u7684\u4F8B\u5B50\u3002\u7528\u6765ping\u4E00\u7CFB\u5217\u7684ip\u5730\u5740\uFF0C\u5E76\u8F93\u51FA\u662F\u5426\u8FD9\u4E9B\u5730\u5740\u7684\u4E3B\u673A\u662Falive\u7684\u3002\u4EE3\u7801\u53C2\u8003\u4E86python unix linux \u7CFB\u7EDF\u7BA1\u7406\u6307\u5357\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    <span class="token comment">#!/usr/bin/env python  </span>
    
    <span class="token keyword">from</span> threading <span class="token keyword">import</span> Thread  
    <span class="token keyword">import</span> subprocess  
    <span class="token keyword">from</span> Queue <span class="token keyword">import</span> Queue  
    
    num_threads<span class="token operator">=</span><span class="token number">3</span> 
    ips<span class="token operator">=</span><span class="token punctuation">[</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;116.56.148.187&#39;</span><span class="token punctuation">]</span>  
    q<span class="token operator">=</span>Queue<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    <span class="token keyword">def</span> <span class="token function">pingme</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>queue<span class="token punctuation">)</span><span class="token punctuation">:</span>  
        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>  
            ip<span class="token operator">=</span>queue<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token punctuation">)</span>  
            <span class="token keyword">print</span> <span class="token string">&#39;Thread %s pinging %s&#39;</span> <span class="token operator">%</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>ip<span class="token punctuation">)</span>  
            ret<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>call<span class="token punctuation">(</span><span class="token string">&#39;ping -c 1 %s&#39;</span> <span class="token operator">%</span> ip<span class="token punctuation">,</span>shell<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">,</span>stdout<span class="token operator">=</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;/dev/null&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>stderr<span class="token operator">=</span>subprocess<span class="token punctuation">.</span>STDOUT<span class="token punctuation">)</span>  
            <span class="token keyword">if</span> ret<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">:</span>  
                <span class="token keyword">print</span> <span class="token string">&#39;%s is alive!&#39;</span> <span class="token operator">%</span>ip  
            <span class="token keyword">elif</span> ret<span class="token operator">==</span><span class="token number">1</span><span class="token punctuation">:</span>  
                <span class="token keyword">print</span> <span class="token string">&#39;%s is down...&#39;</span><span class="token operator">%</span>ip  
            queue<span class="token punctuation">.</span>task_done<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    
    <span class="token comment">#start num_threads threads  </span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>num_threads<span class="token punctuation">)</span><span class="token punctuation">:</span>  
        t<span class="token operator">=</span>Thread<span class="token punctuation">(</span>target<span class="token operator">=</span>pingme<span class="token punctuation">,</span>args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span>q<span class="token punctuation">)</span><span class="token punctuation">)</span>  
        t<span class="token punctuation">.</span>setDaemon<span class="token punctuation">(</span><span class="token boolean">True</span><span class="token punctuation">)</span>  
        t<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>  
    
    <span class="token keyword">for</span> ip <span class="token keyword">in</span> ips<span class="token punctuation">:</span>  
        q<span class="token punctuation">.</span>put<span class="token punctuation">(</span>ip<span class="token punctuation">)</span>  
    <span class="token keyword">print</span> <span class="token string">&#39;main thread waiting...&#39;</span> 
    q<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token keyword">print</span> <span class="token string">&#39;Done&#39;</span> 
    \u5728\u4E0A\u9762\u4EE3\u7801\u4E2D\u4F7F\u7528subprocess\u7684\u4E3B\u8981\u597D\u5904\u662F\uFF0C\u4F7F\u7528\u591A\u4E2A\u7EBF\u7A0B\u6765\u6267\u884Cping\u547D\u4EE4\u4F1A\u8282\u7701\u5927\u91CF\u65F6\u95F4\u3002

    \u5047\u8BBE\u8BF4\u6211\u4EEC\u7528\u4E00\u4E2A\u7EBF\u7A0B\u6765\u5904\u7406\uFF0C\u90A3\u4E48\u6BCF\u4E2A ping\u90FD\u8981\u7B49\u5F85\u524D\u4E00\u4E2A\u7ED3\u675F\u4E4B\u540E\u518Dping\u5176\u4ED6\u5730\u5740\u3002\u90A3\u4E48\u5982\u679C\u6709<span class="token number">100</span>\u4E2A\u5730\u5740\uFF0C\u4E00\u5171\u9700\u8981\u7684\u65F6\u95F4<span class="token operator">=</span><span class="token number">100</span><span class="token operator">*</span>\u5E73\u5747\u65F6\u95F4\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F7F\u7528\u591A\u4E2A\u7EBF\u7A0B\uFF0C\u90A3\u4E48\u6700\u957F\u6267\u884C\u65F6\u95F4\u7684\u7EBF\u7A0B\u5C31\u662F\u6574\u4E2A\u7A0B\u5E8F\u8FD0\u884C\u7684\u603B\u65F6\u95F4\u3002\u3010\u65F6\u95F4\u6BD4\u5355\u4E2A\u7EBF\u7A0B\u8282\u7701\u591A\u4E86\u3011</p></li></ol></li></ol><h2 id="\u8FD9\u91CC\u8981\u6CE8\u610F\u4E00\u4E0Bqueue\u6A21\u5757\u7684\u5B66\u4E60" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u91CC\u8981\u6CE8\u610F\u4E00\u4E0Bqueue\u6A21\u5757\u7684\u5B66\u4E60" aria-hidden="true">#</a> \u8FD9\u91CC\u8981\u6CE8\u610F\u4E00\u4E0BQueue\u6A21\u5757\u7684\u5B66\u4E60</h2><p>pingme\u51FD\u6570\u7684\u6267\u884C\u662F\u8FD9\u6837\u7684\uFF1A<br> \u542F\u52A8\u7684\u7EBF\u7A0B\u4F1A\u53BB\u6267\u884Cpingme\u51FD\u6570\u3002<br> pingme\u51FD\u6570\u4F1A\u68C0\u6D4B\u961F\u5217\u4E2D\u662F\u5426\u6709\u5143\u7D20\u3002\u5982\u679C\u6709\u7684\u8BDD\uFF0C\u5219\u53D6\u51FA\u5E76\u6267\u884Cping\u547D\u4EE4\u3002<br> \u8FD9\u4E2A\u961F\u5217\u662F\u591A\u4E2A\u7EBF\u7A0B\u5171\u4EAB\u7684\u3002\u6240\u4EE5\u8FD9\u91CC\u6211\u4EEC\u4E0D\u4F7F\u7528\u5217\u8868\u3002\u3010\u5047\u8BBE\u5728\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528\u5217\u8868\uFF0C\u90A3\u4E48\u9700\u8981\u6211\u4EEC\u81EA\u5DF1\u6765\u8FDB\u884C\u540C\u6B65\u63A7\u5236\u3002Queue\u672C\u8EAB\u5DF2\u7ECF\u901A\u8FC7\u4FE1\u53F7\u91CF\u505A\u4E86\u540C\u6B65\u63A7\u5236\uFF0C\u8282\u7701\u4E86\u6211\u4EEC\u81EA\u5DF1\u505A\u540C\u6B65\u63A7\u5236\u7684\u5DE5\u4F5C=\u3002=\u3011</p><p>\u4EE3\u7801\u4E2Dq\u7684join\u51FD\u6570\u662F\u963B\u585E\u5F53\u524D\u7EBF\u7A0B\u3002\u4E0B\u9762\u662Fe\u6587\u6CE8\u91CA</p><blockquote><p>Queue.join()</p><p>Blocks until all items in the queue have been gotten and processed(task_done()). \u5B66\u4E60Processing\u6A21\u5757\u7684\u65F6\u5019\uFF0C\u9047\u5230\u4E86\u8FDB\u7A0B\u7684join\u51FD\u6570\u3002\u8FDB\u7A0B\u7684join\u51FD\u6570\u610F\u601D\u8BF4\uFF0C\u7B49\u5F85\u8FDB\u7A0B\u8FD0\u884C\u7ED3\u675F\u3002\u4E0E\u8FD9\u91CC\u7684Queue\u7684join\u6709\u5F02\u66F2\u540C\u5DE5\u4E4B\u5999\u554A\u3002processing\u6A21\u5757\u5B66\u4E60\u7684\u6587\u7AE0\u5728\u8FD9\u91CC\u3002</p></blockquote>`,11),t=[o];function i(l,c){return s(),a("div",null,t)}var d=n(p,[["render",i],["__file","subprocess.html.vue"]]);export{d as default};