import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as e,e as l}from"./app.29a9c448.js";const d={},s=l(`<h1 id="ajax" tabindex="-1"><a class="header-anchor" href="#ajax" aria-hidden="true">#</a> Ajax</h1><p>Asynchronous JavaScript + XML</p><h2 id="http\u74F6\u9888" tabindex="-1"><a class="header-anchor" href="#http\u74F6\u9888" aria-hidden="true">#</a> HTTP\u74F6\u9888</h2><ol><li><p>\u8868\u5355\u63D0\u4EA4<br> \u4E00\u6B21\u64CD\u4F5C\u6E32\u67D3\u6574\u4E2A\u9875\u9762 \u6709\u4E9B\u64CD\u4F5C\u5C06\u4F1A\u589E\u52A0\u5E26\u5BBD(\u70B9\u8D5E)<br> \u6709\u7684\u64CD\u4F5C\u4F1A\u5F71\u54CD\u4F7F\u7528\u5F53\u524D\u4F7F\u7528(\u89C6\u9891\u7F51\u7AD9\u7684\u6536\u85CF\\\u70B9\u8D5E\u7B49)</p></li><li><p>\u5185\u5BB9\u7684\u5B9E\u65F6\u66F4\u65B0<br> \u901A\u77E5/\u79C1\u4FE1\u7B49\u63D0\u9192</p></li></ol><h2 id="ajax\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#ajax\u7684\u5B9E\u73B0" aria-hidden="true">#</a> Ajax\u7684\u5B9E\u73B0</h2><p><strong>\u53EA\u505A\u5C40\u90E8\u66F4\u65B0</strong></p><p>\u4E00\u4E2Ademo</p><h3 id="ajax\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#ajax\u51FD\u6570" aria-hidden="true">#</a> ajax\u51FD\u6570</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var log = function() {
    console.log.apply(console, arguments)
}

var e = function(sel) {
    return document.querySelector(sel)
}

/* 
 ajax \u51FD\u6570
*/
var ajax = function(method, path, data, responseCallback) {
    var r = new XMLHttpRequest()
    // \u8BBE\u7F6E\u8BF7\u6C42\u65B9\u6CD5\u548C\u8BF7\u6C42\u5730\u5740
    r.open(method, path, true)
    // \u8BBE\u7F6E\u53D1\u9001\u7684\u6570\u636E\u7684\u683C\u5F0F\u4E3A application/json
    // \u8FD9\u4E2A\u4E0D\u662F\u5FC5\u987B\u7684
    r.setRequestHeader(&#39;Content-Type&#39;, &#39;application/json&#39;)
    // \u6CE8\u518C\u54CD\u5E94\u51FD\u6570
    r.onreadystatechange = function() {
        if(r.readyState === 4) {
            // r.response \u5B58\u7684\u5C31\u662F\u670D\u52A1\u5668\u53D1\u8FC7\u6765\u7684\u653E\u5728 HTTP BODY \u4E2D\u7684\u6570\u636E
            responseCallback(r.response)
        }
    }
    // \u628A\u6570\u636E\u8F6C\u6362\u4E3A json \u683C\u5F0F\u5B57\u7B26\u4E32
    data = JSON.stringify(data)
    // \u53D1\u9001\u8BF7\u6C42
    r.send(data)
}

// TODO API
// \u83B7\u53D6\u6240\u6709 todo
var apiTodoAll = function(callback) {
    var path = &#39;/api/todo/all&#39;
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// \u589E\u52A0\u4E00\u4E2A todo
var apiTodoAdd = function(form, callback) {
    var path = &#39;/api/todo/add&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// \u5220\u9664\u4E00\u4E2A todo
var apiTodoDelete = function(id, callback) {
    var path = &#39;/api/todo/delete?id=&#39; + id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
    //    get(path, callback)
}

// \u66F4\u65B0\u4E00\u4E2A todo
var apiTodoUpdate = function(form, callback) {
    var path = &#39;/api/todo/update&#39;
    ajax(&#39;POST&#39;, path, form, callback)
    //    post(path, form, callback)
}

// load weibo all
var apiWeiboAll = function(callback) {
    var path = &#39;/weibo/all&#39;
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// \u589E\u52A0\u4E00\u4E2A \u5FAE\u535A
var apiWeiboAdd = function(form, callback) {
    var path = &#39;/weibo/add&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// \u5220\u9664\u4E00\u4E2A\u5FAE\u535A
var apiWeiboDelete = function(weibo_id, callback) {
    var path = &#39;/weibo/delete?id=&#39;+weibo_id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}

// \u66F4\u65B0\u4E00\u4E2A\u5FAE\u535A
var apiWeiboUpdate = function(form, callback) {
   var path = &#39;/weibo/update&#39;
   ajax(&#39;POST&#39;, path, form, callback)
}

// \u589E\u52A0\u4E00\u6761\u5FAE\u535A\u8BC4\u8BBA
var apiCommentAdd = function(form, callback){
    var path = &#39;/weibo/commentAdd&#39;
    ajax(&#39;POST&#39;, path, form, callback)
}

// \u5220\u9664\u4E00\u6761\u5FAE\u535A\u8BC4\u8BBA
var apiCommentDelete = function(comment_id, callback){
    var path = &#39;/weibo/commentDelete?id=&#39;+comment_id
    ajax(&#39;GET&#39;, path, &#39;&#39;, callback)
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5177\u4F53\u64CD\u4F5Cdom" tabindex="-1"><a class="header-anchor" href="#\u5177\u4F53\u64CD\u4F5Cdom" aria-hidden="true">#</a> \u5177\u4F53\u64CD\u4F5Cdom</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>var timeString = function(timestamp) {
    t = new Date(timestamp * 1000)
    t = t.toLocaleString(&#39;ja-JP&#39;)
    return t
}

var commentsTemplate = function(comments) {
    var html = &#39;&#39;
    for(var i = 0; i &lt; comments.length; i++) {
        var c = comments[i]
        var t = \`
            &lt;div class=&#39;comment-form&#39; id=&#39;comment-id-\${c.id}&#39; data-id=\${c.id}&gt;
                &lt;br&gt;
                [\${c.username}]:\${c.content}
                &lt;br&gt;
                &lt;span&gt;[\u521B\u5EFA\u65F6\u95F4]: \${timeString(c.ct)}&lt;/span&gt;
                &lt;button class=&#39;comment-delete&#39;&gt;\u5220\u9664\u8BC4\u8BBA&lt;/button&gt;
            &lt;/div&gt;
        \`
        html += t
    }
    return html
}

var WeiboTemplate = function(Weibo) {
    var content = Weibo.content
    var id = Weibo.id
    var ct = Weibo.ct
    var visitor = Weibo.visitor
    var comments = commentsTemplate(Weibo.comments)
    var t = \`
        &lt;div class=&#39;Weibo-cell&#39; id=&#39;Weibo-\${id}&#39; data-id=\${id}&gt;
            &lt;div class=&#39;Weibo-single&#39;&gt;
                [\${visitor}]: &lt;span class=&#39;Weibo-content&#39;&gt;\${content}&lt;/span&gt;
                &lt;br&gt;
                &lt;span&gt;[\u7559\u8A00\u65F6\u95F4]: \${timeString(ct)}&lt;/span&gt;
                &lt;br&gt;&lt;br&gt;
            &lt;/div&gt;
            &lt;button class=&quot;Weibo-delete&quot;&gt;\u5220\u9664\u7559\u8A00&lt;/button&gt;
            &lt;button class=&quot;Weibo-edit&quot;&gt;\u7F16\u8F91\u7559\u8A00&lt;/button&gt;
            &lt;div class=&quot;comment-list&quot;&gt;
                \u73B0\u6709\u8BC4\u8BBA: \${comments}
            &lt;/div&gt;
            &lt;div class=&quot;comment-form&quot;&gt;
                &lt;input type=&quot;hidden&quot; name=&quot;weibo_id&quot; value=&quot;&quot;&gt;
                &lt;br&gt;
                \u8BC4\u8BBA\u5185\u5BB9:&lt;input class=&#39;comment-content&#39;name=&quot;content&quot;&gt;
                &lt;br&gt;&lt;br&gt;
                \u8BC4\u8BBA\u4EBA(\u9ED8\u8BA4\u533F\u540D):&lt;input class=&#39;comment-username&#39; name=&#39;username&#39;&gt;
                &lt;br&gt;&lt;br&gt;
                &lt;button class=&quot;comment-add&quot;&gt;\u6DFB\u52A0\u8BC4\u8BBA&lt;/button&gt;
            &lt;/div&gt;
            &lt;p&gt;============================================================&lt;/p&gt;
        &lt;/div&gt;
    \`
    return t
}

var insertWeibo = function(Weibo) {
    var WeiboCell = WeiboTemplate(Weibo)
    // log(&#39;\u5355\u4E2A\u5FAE\u535Ahtml\u6807\u7B7E&#39;, WeiboCell)
    // \u63D2\u5165 Weibo-list
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.insertAdjacentHTML(&#39;beforeend&#39;, WeiboCell)
}

var insertEditForm = function(cell, content) {
    var form = \`
        &lt;div class=&#39;Weibo-edit-form&#39;&gt;
            &lt;input class=&quot;Weibo-edit-input&quot;&gt;
            // &lt;button class=&#39;Weibo-update&#39;&gt;\u66F4\u65B0&lt;/button&gt;
        &lt;/div&gt;
    \`
    cell.insertAdjacentHTML(&#39;afterBegin&#39;, form)
    var input = e(&#39;.Weibo-edit-input&#39;)
    input.value = content
}

var loadWeibos = function() {
        // \u8C03\u7528 ajax api \u6765\u8F7D\u5165\u6570\u636E
    apiWeiboAll(function(r) {
        // console.log(&#39;load all&#39;, r)
        // \u89E3\u6790\u4E3A \u6570\u7EC4
        var Weibos = JSON.parse(r)
        // \u5FAA\u73AF\u6DFB\u52A0\u5230\u9875\u9762\u4E2D
        for(var i = 0; i &lt; Weibos.length; i++) {
            var Weibo = Weibos[i]
            insertWeibo(Weibo)
        }
    })
}

var bindEventWeiboAdd = function() {
    var b = e(&#39;#id-button-add-weibo&#39;)
    // \u6CE8\u610F, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u7ED9\u51FA\u5B9A\u4E49\u51FD\u6570
    b.addEventListener(&#39;click&#39;, function(){
        var input1 = e(&#39;#id-input-weibo&#39;)
        var content = input1.value
        var input2 = e(&#39;#id-visitor-weibo&#39;)
        var visitor = input2.value
        log(&#39;click add&#39;, content, visitor)
        var form = {
            &#39;content&#39;: content,
            &#39;visitor&#39;: visitor,
        }
        input1.value = &#39;&#39;
        input2.value = &#39;&#39;
        if(content.length&gt;2){
            apiWeiboAdd(form, function(r) {
                // \u6536\u5230\u8FD4\u56DE\u7684\u6570\u636E, \u63D2\u5165\u5230\u9875\u9762\u4E2D
                var Weibo = JSON.parse(r)
                insertWeibo(Weibo)
            })
        }
        else{
            alert(&quot;\u7559\u8A00\u5185\u5BB9\u592A\u5C11\u4E86\u5427!&quot;)
        }
    })
}

var bindEventWeiboDelete = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // \u6CE8\u610F, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u7ED9\u51FA\u5B9A\u4E49\u51FD\u6570
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-delete&#39;)){
            // \u5220\u9664\u8FD9\u4E2A Weibo
            var WeiboCell = self.parentElement
            var Weibo_id = WeiboCell.dataset.id
            log(&#39;\u70B9\u51FB\u5230\u4E86\u5220\u9664\u6309\u94AE, \u5FAE\u535Aid\u662F:&#39;, Weibo_id)
            apiWeiboDelete(Weibo_id, function(r){
                log(&#39;\u5220\u9664\u6210\u529F&#39;, Weibo_id)
                var return_wb = JSON.parse(r)
                if(return_wb.id==Weibo_id){
                    WeiboCell.remove()
                }
            })
        }
    })
}

var bindEventWeiboEdit = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // \u6CE8\u610F, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u7ED9\u51FA\u5B9A\u4E49\u51FD\u6570
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-edit&#39;)){
            // \u5220\u9664\u8FD9\u4E2A Weibo
            var WeiboCell = self.parentElement
            // \u4ECE\u5FAE\u535Acell\u4E2D\u9009\u51FA\u5C55\u793A\u5FAE\u535A\u5185\u5BB9\u7684\u90A3\u90E8\u5206,\u7F29\u5C0F\u4E86\u67E5\u627E\u8303\u56F4
            var weibo_content = WeiboCell.querySelector(&#39;.Weibo-content&#39;)
            var content = weibo_content.innerHTML
            // \u5C06\u539F\u6765\u7684\u5C55\u793A\u5185\u5BB9\u6539\u4E3A\u4FEE\u6539\u6846
            weibo_content.parentElement.style.display=&quot;none&quot;
            // \u63D2\u5165\u66F4\u65B0\u6846
            insertEditForm(WeiboCell, content)
        }
    })
}

var bindEventWeiboUpdate = function() {
    var WeiboList = e(&#39;.Weibo-list&#39;)
    // \u6CE8\u610F, \u7B2C\u4E8C\u4E2A\u53C2\u6570\u53EF\u4EE5\u76F4\u63A5\u7ED9\u51FA\u5B9A\u4E49\u51FD\u6570
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&#39;Weibo-update&#39;)){
            log(&#39;\u70B9\u51FB\u4E86 update &#39;)
            //
            var editForm = self.parentElement
            // querySelector \u662F DOM \u5143\u7D20\u7684\u65B9\u6CD5
            // document.querySelector \u4E2D\u7684 document \u662F\u6240\u6709\u5143\u7D20\u7684\u7956\u5148\u5143\u7D20
            var input = editForm.querySelector(&#39;.Weibo-edit-input&#39;)
            var content = input.value
            // \u7528 closest \u65B9\u6CD5\u53EF\u4EE5\u627E\u5230\u6700\u8FD1\u7684\u76F4\u7CFB\u7236\u8282\u70B9
            var WeiboCell = self.closest(&#39;.Weibo-cell&#39;)
            var Weibo_id = WeiboCell.dataset.id
            var form = {
                &#39;id&#39;: Weibo_id,
                &#39;content&#39;: content,
            }
            apiWeiboUpdate(form, function(r){
                log(&#39;\u66F4\u65B0\u6210\u529F&#39;, Weibo_id)
                var Weibo = JSON.parse(r)
                log(Weibo)
                var selector = &#39;#Weibo-&#39; + Weibo.id
                var WeiboCell = e(selector)
                var contentSpan = WeiboCell.querySelector(&#39;.Weibo-content&#39;)
                contentSpan.innerHTML = Weibo.content
                // \u663E\u793A\u5FAE\u535A\u5185\u5BB9\u6846
                contentSpan.parentElement.style.display=&quot;&quot;
                // \u5C06\u7F16\u8F91\u6846\u5220\u9664
                var edit_form = WeiboCell.querySelector(&quot;.Weibo-edit-form&quot;)
                edit_form.remove()
                //  WeiboCell.remove()
            })
        }
    })
}


// \u63D2\u5165\u8BC4\u8BBA\u51FD\u6570
var insertCommentCell = function(comment){
    var comments = [comment]
    var commentCell = commentsTemplate(comments)
    var weibo_id = comment.weibo_id
    var weiboCell = e(&#39;#Weibo-&#39; + weibo_id)
    // log(&#39;weiboCell:&#39;, weiboCell)
    var commentsList = weiboCell.querySelector(&#39;.comment-list&#39;)
    commentsList.insertAdjacentHTML(&#39;beforeend&#39;, commentCell)
}


// \u7ED1\u5B9A\u6DFB\u52A0\u8BC4\u8BBA\u4E8B\u4EF6
var bindEventCommentAdd = function(){
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&quot;comment-add&quot;)){
            // log(&#39;\u70B9\u51FB\u5230\u4E86\u8BC4\u8BBA\u6309\u94AE&#39;, self)
            var comment_form = self.parentElement
            var input1 = comment_form.querySelector(&#39;.comment-content&#39;)
            var comment_content = input1.value
            var input2 = comment_form.querySelector(&#39;.comment-username&#39;)
            var comment_username= input2.value
            var WeiboCell = comment_form.parentElement
            var Weibo_id = WeiboCell.dataset.id
            // log(&#39;\u5F53\u524D\u5FAE\u535A\u7684id&#39;, Weibo_id)
            var form = {
              &#39;weibo_id&#39;: Weibo_id,
              &#39;content&#39;: comment_content,
              &#39;username&#39;: comment_username,
            }
            input1.value = &#39;&#39;
            input2.value = &#39;&#39;
            if(comment_content.length&gt;0){
                apiCommentAdd(form, function(r){
                    // \u6536\u5230\u54CD\u5E94, \u5148log\u51FA\u6765
                    var new_comment = JSON.parse(r)
                    // log(&#39;\u8BC4\u8BBA\u5DF2\u6DFB\u52A0&#39;, new_comment)
                    insertCommentCell(new_comment)
                })
            }else{
                alert(&#39;\u8BC4\u8BBA\u5185\u5BB9\u4E0D\u53EF\u4E3A\u7A7A&#39;)
            }
        }
    })
}


// \u7ED1\u5B9A\u5220\u9664\u8BC4\u8BBA\u4E8B\u4EF6
var bindEventCommentDelete = function(){
    var WeiboList = e(&#39;.Weibo-list&#39;)
    WeiboList.addEventListener(&#39;click&#39;, function(event){
        var self = event.target
        if(self.classList.contains(&quot;comment-delete&quot;)){
            log(&#39;\u70B9\u51FB\u5230\u4E86\u5220\u9664\u8BC4\u8BBA\u6309\u94AE&#39;, self)
            var comment_form = self.parentElement
            comment_id = comment_form.dataset.id
            log(&#39;\u62A5\u544A,\u5F53\u524D\u8981\u5220\u9664\u7684\u8BC4\u8BBAid&#39;, comment_id)
            apiCommentDelete(comment_id, function(r){
                var delete_comment = JSON.parse(r)
                comment_form = e(&#39;#comment-id-&#39;+comment_id)
                // log(&#39;\u62A5\u544A,\u6211\u8981\u79FB\u9664\u7684\u8BC4\u8BBA\u6807\u7B7E:&#39;, comment_form)
                comment_form.remove()
            })
        }
    })
}


var bindEvents = function() {
    bindEventWeiboAdd()
    bindEventWeiboDelete()
//    bindEventWeiboEdit()
//    bindEventWeiboUpdate()
    bindEventCommentAdd()
//    bindEventCommentDelete()
}


var __main = function() {
    bindEvents()
    loadWeibos()
}

__main()

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),v=[s];function a(r,t){return n(),e("div",null,v)}var b=i(d,[["render",a],["__file","ajax.html.vue"]]);export{b as default};
