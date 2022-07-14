import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as d,o as a,c as t,a as e,b as s,d as n,e as r}from"./app.29a9c448.js";const o={},c=e("h1",{id:"\u8FDB\u7A0B-\u7EBF\u7A0B-\u548C-\u534F\u7A0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u8FDB\u7A0B-\u7EBF\u7A0B-\u548C-\u534F\u7A0B","aria-hidden":"true"},"#"),n(" \u8FDB\u7A0B \u7EBF\u7A0B \u548C \u534F\u7A0B")],-1),u=e("p",null,[n("Process Thread Coroutine \u7EBF\u7A0B\u662F\u6700\u5C0F\u7684\u6267\u884C\u5355\u5143, \u8FDB\u7A0B\u7531\u81F3\u5C11\u4E00\u4E2A\u7EBF\u7A0B\u7EC4\u6210."),e("br"),n(" \u8FDB\u7A0B\u548C\u7EBF\u7A0B\u7684\u8C03\u5EA6\u5B8C\u5168\u7531\u64CD\u4F5C\u7CFB\u7EDF\u8C03\u5EA6")],-1),v=e("h2",{id:"_1-process-\u8FDB\u7A0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-process-\u8FDB\u7A0B","aria-hidden":"true"},"#"),n(" 1. Process \u8FDB\u7A0B")],-1),m=e("li",null,[n("os\u6A21\u5757\u5C01\u88C5\u4E86\u5E38\u89C1\u7684\u7CFB\u7EDF\u8C03\u7528, "),e("ol",null,[e("li",null,"fork()\u8C03\u7528\u4E00\u6B21,\u8FD4\u56DE\u4E24\u6B21.\u56E0\u4E3A\u7236\u8FDB\u7A0B\u53EF\u4EE5fork\u591A\u4E2A\u5B50\u8FDB\u7A0B"),e("li",null,"\u7236\u8FDB\u7A0B\u8FD4\u56DE\u5B50\u8FDB\u7A0B\u7684pid"),e("li",null,"\u5B50\u8FDB\u7A0B\u8FD4\u56DE0,\u5B50\u8FDB\u7A0B.getppid()\u8FD4\u56DE\u7236\u8FDB\u7A0B\u7684pid")])],-1),p=n("\u5982\u4F55\u9009\u62E9 "),b=n("\u53C2\u8003 "),h={href:"https://stackoverflow.com/questions/2629680/deciding-among-subprocess-multiprocessing-and-thread-in-python",target:"_blank",rel:"noopener noreferrer"},_=n("https://stackoverflow.com/questions/2629680/deciding-among-subprocess-multiprocessing-and-thread-in-python"),g={href:"https://stackoverflow.com/questions/13606867/what-is-the-difference-between-multiprocessing-and-subprocess",target:"_blank",rel:"noopener noreferrer"},f=n("https://stackoverflow.com/questions/13606867/what-is-the-difference-between-multiprocessing-and-subprocess"),x=e("li",null,"multiprocessing\u8C03\u7528\u4EFB\u52A1\u901A\u5E38\u662Fpython\u7F16\u5199\u7684, \u800Csubprocess\u53EF\u4EE5\u8FD0\u884C\u548C\u63A7\u5236\u5176\u4ED6\u7A0B\u5E8F",-1),P=r(`<li>multiprocessing <ol><li><p>\u6A21\u5757\u63D0\u4F9B\u4E86Process\u7C7B\u6765\u4EE3\u8868\u4E00\u4E2A\u8FDB\u7A0B\u5BF9\u8C61</p></li><li><p>\u542F\u52A8\u4E00\u4E2A\u8FDB\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from multiprocessing import Process
import os

# \u5B50\u8FDB\u7A0B\u8981\u6267\u884C\u7684\u4EE3\u7801
def run_proc(name):
    print(&#39;Run child process %s (%s)...&#39; % (name, os.getpid()))

if __name__==&#39;__main__&#39;:
    print(&#39;Parent process %s.&#39; % os.getpid())
    p = Process(target=run_proc, args=(&#39;test&#39;,))
    print(&#39;Child process will start.&#39;)
    p.start()
    p.join()
    print(&#39;Child process end.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u7A0B\u6C60 Pool</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>from multiprocessing import Pool
import os, time, random

def long_time_task(name):
    print(&#39;Run task %s (%s)...&#39; % (name, os.getpid()))
    start = time.time()
    time.sleep(random.random() * 3)
    end = time.time()
    print(&#39;Task %s runs %0.2f seconds.&#39; % (name, (end - start)))

if __name__==&#39;__main__&#39;:
    print(&#39;Parent process %s.&#39; % os.getpid())
    p = Pool(4)
    for i in range(5):
        p.apply_async(long_time_task, args=(i,))
    print(&#39;Waiting for all subprocesses done...&#39;)
    p.close()
    p.join()
    print(&#39;All subprocesses done.&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>SubProcess \u5F88\u591A\u65F6\u5019,\u5B50\u8FDB\u7A0B\u5E76\u4E0D\u662F\u81EA\u8EAB,\u800C\u662F\u4E00\u4E2A\u5916\u90E8\u8FDB\u7A0B,\u6211\u4EEC\u521B\u5EFA\u5B50\u8FDB\u7A0B\u8FD8\u9700\u8981\u63A7\u5236\u8F93\u5165\u548C\u8F93\u51FA. \u4E0B\u9762\u6F14\u793A\u4E86\u5728\u8FDB\u7A0B\u4E2D\u8FD0\u884C\u547D\u4EE4\u884C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import subprocess

    print(&#39;$ nslookup www.python.org&#39;)
    r = subprocess.call([&#39;nslookup&#39;, &#39;www.python.org&#39;])
    print(&#39;Exit code:&#39;, r)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5B50\u8FDB\u7A0B\u7684\u8F93\u5165 \u76F8\u5F53\u4E8E\u5148\u8F93\u5165\u547D\u4EE4<code>nslookup</code>,\u7136\u540E\u8F93\u5165\u5185\u5BB9</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import subprocess

    print(&#39;$ nslookup&#39;)
    p = subprocess.Popen([&#39;nslookup&#39;], stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    output, err = p.communicate(b&#39;set q=mx\\npython.org\\nexit\\n&#39;)
    print(output.decode(&#39;utf-8&#39;))
    print(&#39;Exit code:&#39;, p.returncode)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u8FDB\u7A0B\u95F4\u901A\u4FE1</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    from multiprocessing import Process, Queue
    import os, time, random

    # \u5199\u6570\u636E\u8FDB\u7A0B\u6267\u884C\u7684\u4EE3\u7801:
    def write(q):
        print(&#39;Process to write: %s&#39; % os.getpid())
        for value in [&#39;A&#39;, &#39;B&#39;, &#39;C&#39;]:
            print(&#39;Put %s to queue...&#39; % value)
            q.put(value)
            time.sleep(random.random())

        # \u8BFB\u6570\u636E\u8FDB\u7A0B\u6267\u884C\u7684\u4EE3\u7801:
    def read(q):
        print(&#39;Process to read: %s&#39; % os.getpid())
        while True:
            value = q.get(True)
            print(&#39;Get %s from queue.&#39; % value)

    if __name__==&#39;__main__&#39;:
        # \u7236\u8FDB\u7A0B\u521B\u5EFAQueue\uFF0C\u5E76\u4F20\u7ED9\u5404\u4E2A\u5B50\u8FDB\u7A0B\uFF1A
        q = Queue()
        pw = Process(target=write, args=(q,))
        pr = Process(target=read, args=(q,))
        # \u542F\u52A8\u5B50\u8FDB\u7A0Bpw\uFF0C\u5199\u5165:
        pw.start()
        # \u542F\u52A8\u5B50\u8FDB\u7A0Bpr\uFF0C\u8BFB\u53D6:
        pr.start()
        # \u7B49\u5F85pw\u7ED3\u675F:
        pw.join()
        # pr\u8FDB\u7A0B\u91CC\u662F\u6B7B\u5FAA\u73AF\uFF0C\u65E0\u6CD5\u7B49\u5F85\u5176\u7ED3\u675F\uFF0C\u53EA\u80FD\u5F3A\u884C\u7EC8\u6B62:
        pr.terminate()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li>`,1),k=r(`<h2 id="_2-thread-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_2-thread-\u7EBF\u7A0B" aria-hidden="true">#</a> 2. Thread \u7EBF\u7A0B</h2><p>\u5E38\u7528\u6A21\u5757threading, \u5C01\u88C5\u4E86(_thread)</p><ol><li><p>\u542F\u52A8\u4E00\u4E2A\u7EBF\u7A0B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    import time, threading

    # \u65B0\u7EBF\u7A0B\u6267\u884C\u7684\u4EE3\u7801:
    def loop():
        print(&#39;thread %s is running...&#39; % threading.current_thread().name)
        n = 0
        while n &lt; 5:
            n = n + 1
            print(&#39;thread %s &gt;&gt;&gt; %s&#39; % (threading.current_thread().name, n))
            time.sleep(1)
        print(&#39;thread %s ended.&#39; % threading.current_thread().name)

    print(&#39;thread %s is running...&#39; % threading.current_thread().name)
    t = threading.Thread(target=loop, name=&#39;LoopThread&#39;)
    t.start()
    t.join()
    print(&#39;thread %s ended.&#39; % threading.current_thread().name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Lock</p></li></ol><blockquote><p>\u591A\u7EBF\u7A0B\u548C\u591A\u8FDB\u7A0B\u6700\u5927\u7684\u4E0D\u540C\u5728\u4E8E:</p><ul><li>\u591A\u8FDB\u7A0B\u4E2D\uFF0C\u540C\u4E00\u4E2A\u53D8\u91CF\uFF0C\u5404\u81EA\u6709\u4E00\u4EFD\u62F7\u8D1D\u5B58\u5728\u4E8E\u6BCF\u4E2A\u8FDB\u7A0B\u4E2D\uFF0C\u4E92\u4E0D\u5F71\u54CD\uFF0C</li><li>\u591A\u7EBF\u7A0B\u4E2D\uFF0C\u6240\u6709\u53D8\u91CF\u90FD\u7531\u6240\u6709\u7EBF\u7A0B\u5171\u4EAB\uFF0C\u6240\u4EE5\uFF0C\u4EFB\u4F55\u4E00\u4E2A\u53D8\u91CF\u90FD\u53EF\u4EE5\u88AB\u4EFB\u4F55\u4E00\u4E2A\u7EBF\u7A0B\u4FEE\u6539\uFF0C\u56E0\u6B64\uFF0C\u7EBF\u7A0B\u4E4B\u95F4\u5171\u4EAB\u6570\u636E\u6700\u5927\u7684\u5371\u9669\u5728\u4E8E\u591A\u4E2A\u7EBF\u7A0B\u540C\u65F6\u6539\u4E00\u4E2A\u53D8\u91CF\uFF0C\u628A\u5185\u5BB9\u7ED9\u6539\u4E71\u4E86\u3002 \`\`\` import time, threading</li></ul></blockquote><pre><code>    # \u5047\u5B9A\u8FD9\u662F\u4F60\u7684\u94F6\u884C\u5B58\u6B3E:
    balance = 0

    def change_it(n):
        # \u5148\u5B58\u540E\u53D6\uFF0C\u7ED3\u679C\u5E94\u8BE5\u4E3A0:
        global balance
        balance = balance + n
        balance = balance - n

    def run_thread(n):
        for i in range(100000):
            # \u5148\u8981\u83B7\u53D6\u9501:
            lock.acquire()
            try:
                # \u653E\u5FC3\u5730\u6539\u5427:
                change_it(n)
            finally:
                # \u6539\u5B8C\u4E86\u4E00\u5B9A\u8981\u91CA\u653E\u9501:
                lock.release()

    t1 = threading.Thread(target=run_thread, args=(5,))
    t2 = threading.Thread(target=run_thread, args=(8,))
    t1.start()
    t2.start()
    t1.join()
    t2.join()
    print(balance)
\`\`\`
</code></pre><ol start="3"><li>\u7531\u4E8EPython\u7684GIL\u9501(Global Interpreter Lock),\u591A\u7EBF\u7A0B\u53EA\u80FD\u5360\u75281\u6838,\u4EA4\u66FF\u8DD1,\u8981\u60F3\u5B9E\u73B0\u591A\u6838\u591A\u4EFB\u52A1\u7684\u7A0B\u5E8F,\u9700\u8981\u4F7F\u7528<code>\u591A\u8FDB\u7A0B</code>\u5B9E\u73B0.</li></ol><h2 id="_3-threadlocal" tabindex="-1"><a class="header-anchor" href="#_3-threadlocal" aria-hidden="true">#</a> 3. ThreadLocal</h2><p>\u4E00\u4E2AThreadLocal\u53D8\u91CF\u867D\u7136\u662F\u5168\u5C40\u53D8\u91CF\uFF0C\u4F46\u6BCF\u4E2A\u7EBF\u7A0B\u90FD\u53EA\u80FD\u8BFB\u5199\u81EA\u5DF1\u7EBF\u7A0B\u7684\u72EC\u7ACB\u526F\u672C\uFF0C\u4E92\u4E0D\u5E72\u6270\u3002ThreadLocal\u89E3\u51B3\u4E86\u53C2\u6570\u5728\u4E00\u4E2A\u7EBF\u7A0B\u4E2D\u5404\u4E2A\u51FD\u6570\u4E4B\u95F4\u4E92\u76F8\u4F20\u9012\u7684\u95EE\u9898\u3002 \`\`\` import threading</p><pre><code>    # \u521B\u5EFA\u5168\u5C40ThreadLocal\u5BF9\u8C61:
    local_school = threading.local()

    def process_student():
        # \u83B7\u53D6\u5F53\u524D\u7EBF\u7A0B\u5173\u8054\u7684student:
        std = local_school.student
        print(&#39;Hello, %s (in %s)&#39; % (std, threading.current_thread().name))

    def process_thread(name):
        # \u7ED1\u5B9AThreadLocal\u7684student:
        local_school.student = name
        process_student()

    t1 = threading.Thread(target= process_thread, args=(&#39;Alice&#39;,), name=&#39;Thread-A&#39;)
    t2 = threading.Thread(target= process_thread, args=(&#39;Bob&#39;,), name=&#39;Thread-B&#39;)
    t1.start()
    t2.start()
    t1.join()
    t2.join()
\`\`\`
</code></pre><h2 id="_4-\u8FDB\u7A0B-vs-\u7EBF\u7A0B" tabindex="-1"><a class="header-anchor" href="#_4-\u8FDB\u7A0B-vs-\u7EBF\u7A0B" aria-hidden="true">#</a> 4. \u8FDB\u7A0B VS \u7EBF\u7A0B</h2><ol><li><p>\u5B9E\u73B0\u591A\u4EFB\u52A1,\u901A\u5E38\u6211\u4EEC\u4F1A\u8BBE\u8BA1Master-Worker\u6A21\u5F0F,Master\u8D1F\u8D23\u5206\u914D\u4EFB\u52A1,Worker\u8D1F\u8D23\u6267\u884C\u4EFB\u52A1.</p></li><li><p>\u591A\u8FDB\u7A0B\u7A33\u5B9A\u4F46\u5360\u7528\u8D44\u6E90\u591A, \u591A\u7EBF\u7A0B\u5360\u7528\u8D44\u6E90\u5C11\u4F46\u6613\u5D29\u6E83. \u800C\u4E14\u7EBF\u7A0B\u5207\u6362\u5F71\u54CD\u6548\u7387</p></li><li><p>\u8BA1\u7B97\u5BC6\u96C6\u578B\u4EFB\u52A1\u9002\u5408C\u8BED\u8A00\u5F00\u53D1,\u5207\u6362\u4EFB\u52A1\u4F1A\u5360\u7528CPU\u4F7F\u7528\u65F6\u95F4, IO\u5BC6\u96C6\u578B\u4EFB\u52A1\u5219\u662F\u5F00\u53D1\u6548\u7387\u9AD8\u6700\u597D.</p></li><li><p>\u5F02\u6B65IO</p></li></ol><h2 id="_5-\u5206\u5E03\u5F0F\u8FDB\u7A0B" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u5E03\u5F0F\u8FDB\u7A0B" aria-hidden="true">#</a> 5. \u5206\u5E03\u5F0F\u8FDB\u7A0B</h2><h2 id="_6-coroutine-\u534F\u7A0B" tabindex="-1"><a class="header-anchor" href="#_6-coroutine-\u534F\u7A0B" aria-hidden="true">#</a> 6. Coroutine \u534F\u7A0B</h2><p>\u751F\u6210\u5668\u4E3A\u6211\u4EEC\u5F15\u5165\u4E86\u6682\u505C\u51FD\u6570\u6267\u884C\uFF08yield\uFF09\u7684\u529F\u80FD\u3002\u5F53\u6709\u4E86\u6682\u505C\u7684\u529F\u80FD\u4E4B\u540E\uFF0C\u4EBA\u4EEC\u5C31\u60F3\u80FD\u4E0D\u80FD\u5728\u751F\u6210\u5668\u6682\u505C\u7684\u65F6\u5019\u5411\u5176\u53D1\u9001\u4E00\u70B9\u4E1C\u897F\uFF08\u5176\u5B9E\u4E0A\u9762\u4E5F\u6709\u63D0\u53CA\uFF1Asend(None)\uFF09\u3002\u8FD9\u79CD\u5411\u6682\u505C\u7684\u751F\u6210\u5668\u53D1\u9001\u4FE1\u606F\u7684\u529F\u80FD\u901A\u8FC7 PEP 342 \u8FDB\u5165 Python 2.5 \u4E2D\uFF0C\u5E76\u50AC\u751F\u4E86 Python \u4E2D\u534F\u7A0B\u7684\u8BDE\u751F\u3002\u6839\u636E wikipedia \u4E2D\u7684\u5B9A\u4E49<br><code>\u534F\u7A0B\u662F\u4E3A\u975E\u62A2\u5360\u5F0F\u591A\u4EFB\u52A1\u4EA7\u751F\u5B50\u7A0B\u5E8F\u7684\u8BA1\u7B97\u673A\u7A0B\u5E8F\u7EC4\u4EF6\uFF0C\u534F\u7A0B\u5141\u8BB8\u4E0D\u540C\u5165\u53E3\u70B9\u5728\u4E0D\u540C\u4F4D\u7F6E\u6682\u505C\u6216\u5F00\u59CB\u6267\u884C\u7A0B\u5E8F\u3002</code> - \u6CE8\u610F\u4ECE\u672C\u8D28\u4E0A\u800C\u8A00\uFF0C\u534F\u7A0B\u5E76\u4E0D\u5C5E\u4E8E\u8BED\u8A00\u4E2D\u7684\u6982\u5FF5\uFF0C\u800C\u662F\u7F16\u7A0B\u6A21\u578B\u4E0A\u7684\u6982\u5FF5\u3002 - \u5B50\u7A0B\u5E8F\u8C03\u7528\u662F\u901A\u8FC7\u6808\u5B9E\u73B0\u7684\uFF0C\u4E00\u4E2A\u7EBF\u7A0B\u5C31\u662F\u6267\u884C\u4E00\u4E2A\u5B50\u7A0B\u5E8F\u3002</p><ol><li>\u4F18\u52BF <ol><li>\u5B50\u7A0B\u5E8F\u5207\u6362\u4E0D\u662F\u7EBF\u7A0B\u5207\u6362,\u7531\u7A0B\u5E8F\u81EA\u8EAB\u63A7\u5236,\u6CA1\u6709\u7EBF\u7A0B\u5207\u6362\u7684\u5F00\u9500</li><li>\u4E0D\u9700\u8981\u591A\u7EBF\u7A0B\u7684\u9501\u673A\u5236,\u6548\u7387\u9AD8</li><li>\u4F7F\u7528\u591A\u6838CPU\u53EF\u4EE5 \u591A\u8FDB\u7A0B+ \u534F\u7A0B</li></ol></li><li>\u7528\u6CD5<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    def jumping_range(N):
        index = 0
        while index &lt; N:
            # \u901A\u8FC7send()\u53D1\u9001\u7684\u4FE1\u606F\u5C06\u8D4B\u503C\u7ED9jump
            jump = yield index
            if jump is None:
                jump = 1
            index += jump

    if __name__ == &#39;__main__&#39;:
        itr = jumping_range(5)
        print(next(itr))
        print(itr.send(2))
        print(next(itr))
        print(itr.send(-1))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>\u91CD\u70B9\u662Fjump = yield index\u8FD9\u4E2A\u8BED\u53E5\u3002\u5206\u6210\u4E24\u90E8\u5206\uFF1A <ul><li>yield index \u662F\u5C06index return\u7ED9\u5916\u90E8\u8C03\u7528\u7A0B\u5E8F\u3002</li><li>jump = yield \u53EF\u4EE5\u63A5\u6536\u5916\u90E8\u7A0B\u5E8F\u901A\u8FC7send()\u53D1\u9001\u7684\u4FE1\u606F\uFF0C\u5E76\u8D4B\u503C\u7ED9jump</li></ul></li></ol></li></ol>`,15);function w(T,j){const i=d("ExternalLinkIcon");return a(),t("div",null,[c,u,v,e("ol",null,[m,e("li",null,[p,e("ol",null,[e("li",null,[b,e("ol",null,[e("li",null,[e("a",h,[_,s(i)])]),e("li",null,[e("a",g,[f,s(i)])])])]),x])]),P]),k])}var L=l(o,[["render",w],["__file","process_thread_coroutine.html.vue"]]);export{L as default};
