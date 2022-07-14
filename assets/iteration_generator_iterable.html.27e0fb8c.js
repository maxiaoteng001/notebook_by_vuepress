import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as l}from"./app.29a9c448.js";const d={},s=l(`<h1 id="\u8FED\u4EE3\u5668-\u751F\u6210\u5668-\u53EF\u8FED\u4EE3\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u8FED\u4EE3\u5668-\u751F\u6210\u5668-\u53EF\u8FED\u4EE3\u5BF9\u8C61" aria-hidden="true">#</a> \u8FED\u4EE3\u5668 \u751F\u6210\u5668 \u53EF\u8FED\u4EE3\u5BF9\u8C61</h1><p>Iteration Generator Iterable</p><ol><li><p>Iterator</p><ul><li>\u53EF\u8FED\u4EE3\u5BF9\u8C61\u6709 <code>__iter__</code> \u65B9\u6CD5</li><li>\u8FED\u4EE3\u5668\u662F\u5728\u53EF\u8FED\u4EE3\u5BF9\u8C61\u57FA\u7840\u4E0A, \u52A0<code>__next__</code> \u65B9\u6CD5</li><li>Python\u4E2D string, list, dict, tuple, deque\u90FD\u662F\u53EF\u8FED\u4EE3\u64CD\u4F5C\u7684, \u4F46\u4E0D\u662F\u8FED\u4EE3\u5668</li></ul></li><li><p>Generator</p><ol><li>\u5217\u8868\u751F\u6210\u5668 set\uFF0Clist\uFF0C dict\u90FD\u9002\u7528<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    a = [1, 2, 3, 4, 5, 6]
    squares = [x ** 2 for x in a]
    even_squares = [x ** 2 for x in a if x % 2 == 0]

    # \u77E9\u9635
    matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
    flat = [x for x in row for row in matrix]
    &gt;&gt; flat = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    squared = [[x ** 2 for x in row] for row in matrix]
    &gt;&gt; squared = [[1, 4, 9], [16, 25, 36], [49, 64, 81]]

    # \u518D\u590D\u6742\u7684\u7ED3\u6784\uFF0C\u5EFA\u8BAE\u4F7F\u7528for\u5FAA\u73AF
    
    # \u5217\u8868\u63A8\u5230\u6BCF\u4E2A\u503C\u90FD\u8981\u521B\u5EFA\u4E00\u4E2A\u5168\u65B0\u5217\u8868\uFF0C\u5360\u7528\u5927\u91CF\u5185\u5B58
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u4E24\u79CD\u751F\u6210\u65B9\u6CD5 <ol><li>\u751F\u6210\u5668\u5C31\u662F\u628A[] \u6362\u6210 ()</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>g = (x * x for x in range(10))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol><li>\u5B9E\u73B0yield\u51FD\u6570<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u5B9E\u73B0\u4E86yield\u7684\u51FD\u6570
def mygen(n):
    now = 0
    while now &lt; n:
        yield now
        now += 1

if __name__ == &#39;__main__&#39;:
    gen = mygen(10)
    print(isinstance(gen, Generator))  # True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol></li><li>\u6FC0\u6D3B\u751F\u6210\u5668 <ol><li>next(g)</li><li>generator.send(None)</li></ol></li><li>\u751F\u6210\u5668\u7684\u56DB\u79CD\u72B6\u6001<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>GEN_CREATED # \u7B49\u5F85\u5F00\u59CB\u6267\u884C
GEN_RUNNING # \u89E3\u91CA\u5668\u6B63\u5728\u6267\u884C\uFF08\u53EA\u6709\u5728\u591A\u7EBF\u7A0B\u5E94\u7528\u4E2D\u624D\u80FD\u770B\u5230\u8FD9\u4E2A\u72B6\u6001\uFF09
GEN_SUSPENDED # \u5728yield\u8868\u8FBE\u5F0F\u5904\u6682\u505C
GEN_CLOSED # \u6267\u884C\u7ED3\u675F

from inspect import getgeneratorstate

def mygen(n):
    now = 0
    while now &lt; n:
        yield now
        now += 1

if __name__ == &#39;__main__&#39;:
    gen = mygen(2)
    print(getgeneratorstate(gen))  # GEN_CREATED

    print(next(gen))
    print(getgeneratorstate(gen))  # GEN_SUSPENDED

    print(next(gen))
    gen.close()  # \u624B\u52A8\u5173\u95ED/\u7ED3\u675F\u751F\u6210\u5668
    print(getgeneratorstate(gen))   # GEN_CLOSED

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li>\u751F\u6210\u5668\u7684\u5F02\u5E38\u72B6\u6001 \u629B\u51FA: StopIteration</li></ol></li><li><p>Iterable <code>collections.Iterable</code> \u53EF\u8FED\u4EE3\u5BF9\u8C61</p><ol><li>\u751F\u6210\u5668(generator)</li><li>string, list, dict, tuple, deque...</li></ol></li></ol>`,3),r=[s];function a(t,v){return i(),n("div",null,r)}var u=e(d,[["render",a],["__file","iteration_generator_iterable.html.vue"]]);export{u as default};
