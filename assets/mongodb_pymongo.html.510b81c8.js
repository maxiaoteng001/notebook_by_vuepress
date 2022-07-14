import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as t,c as r,a as e,b as l,e as n,d as i}from"./app.29a9c448.js";const u={},o=n(`<h1 id="\u6570\u636E\u5E93-pymongo" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93-pymongo" aria-hidden="true">#</a> \u6570\u636E\u5E93 pymongo</h1><h2 id="_1-\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_1-\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> 1. \u6570\u636E\u5E93\u64CD\u4F5C</h2><h3 id="_1-\u8FDE\u63A5" tabindex="-1"><a class="header-anchor" href="#_1-\u8FDE\u63A5" aria-hidden="true">#</a> 1. \u8FDE\u63A5</h3><ul><li><strong>\u9ED8\u8BA4\u8FDE\u63A5</strong></li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dbconfig = {
    &#39;host&#39;: MONGODB_SERVER,
    &quot;port&quot;: MONGODB_PORT,
    &#39;database&#39;: MONGODB_DATABASE,
}

class Mongodb(object):

    # \u521D\u59CB\u5316
    def __init__(self, dbconfig):
        self.host = dbconfig.get(&#39;host&#39;)
        self.port = dbconfig.get(&#39;port&#39;)
        self.database = dbconfig.get(&#39;database&#39;)
        self._client = pymongo.MongoClient(self.host, self.port)
        self._db = self._client[self.database]


    # \u9000\u51FA
    def __exit__(self):
        self._client.close()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>\u7528\u6237\u540D\u5BC6\u7801\u8FDE\u63A5</strong></li></ul><blockquote><p>\u65B9\u6CD51</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>client = pymongo.MongoClient(host, port)
db = client.mydb
db.authenticate(user, password)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>\u65B9\u6CD52</p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>uri = &quot;mongodb://{username}:{password}@{host}:{port}/{db_name}?authMechanism=MONGODB-CR&quot;.format(username=user_name,password=user_pwd,host=host,port=port,db_name=db_name)
mongo_client = pymongo.MongoClient(uri)
mongo_db = mongo_client[db_name]
mongo_coll = mongo_db[coll_name]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>**\u5BC6\u94A5\u8FDE\u63A5 **</li></ul><h3 id="_2-\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#_2-\u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F" aria-hidden="true">#</a> 2. \u67E5\u770B\u6570\u636E\u5E93\u4FE1\u606F</h3><p><strong>\u67E5\u770B\u6570\u636E\u5E93\u7684\u6587\u6863</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>db.collection_names(include_system_collections=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><hr><h1 id="_2-\u96C6\u5408\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_2-\u96C6\u5408\u64CD\u4F5C" aria-hidden="true">#</a> 2. \u96C6\u5408\u64CD\u4F5C</h1><h3 id="_1-\u83B7\u53D6\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_1-\u83B7\u53D6\u96C6\u5408" aria-hidden="true">#</a> 1. \u83B7\u53D6\u96C6\u5408</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def get_collection(self, name):
    collection = self.db[name]
    # collection = self.db.name
    # \u83B7\u53D6\u96C6\u5408\u65F6, \u5982\u679Cname == &#39;test&#39;
    # \u4E5F\u53EF\u5199\u6210: collection = self.db.test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-\u5220\u9664\u96C6\u5408" tabindex="-1"><a class="header-anchor" href="#_2-\u5220\u9664\u96C6\u5408" aria-hidden="true">#</a> 2. \u5220\u9664\u96C6\u5408</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>name = &#39;test&#39;
db.drop_collection(name)
// \u6216\u8005 

collection = db[name]
collection.drop()  # \u6210\u529F\u8FD4\u56DEtrue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-\u7EDF\u8BA1" tabindex="-1"><a class="header-anchor" href="#_3-\u7EDF\u8BA1" aria-hidden="true">#</a> 3. \u7EDF\u8BA1</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>num = collection.count_documents()   # \u96C6\u5408\u7684count() \u65B9\u6CD5\u8FD4\u56DE\u96C6\u5408\u4E2D\u6587\u6863\u7684\u4E2A\u6570

num = collection.find(query),count()  # \u548C\u4E0A\u9762\u7684\u901F\u5EA6\u662F\u4E00\u6837\u5FEB\u7684

num = collection.update_many(...).modified_count()  # \u67E5\u770B\u66F4\u65B0\u64CD\u4F5C\u4FEE\u6539\u4E86\u591A\u5C11\u884C

num = collection.deleted_many(...).deleted_count()  # \u67E5\u770B\u64CD\u4F5C\u5220\u9664\u4E86\u591A\u5C11\u884C

num = collection.insert_many(...).inserted_count()  # \u67E5\u770B\u63D2\u5165\u4E86\u591A\u5C11\u884C

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="_3-\u6587\u6863\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#_3-\u6587\u6863\u64CD\u4F5C" aria-hidden="true">#</a> 3. \u6587\u6863\u64CD\u4F5C</h2><h3 id="_1-\u63D2\u5165\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_1-\u63D2\u5165\u6587\u6863" aria-hidden="true">#</a> 1. \u63D2\u5165\u6587\u6863</h3><ol><li><p><strong>\u63D2\u5165\u4E00\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>item = {
    &#39;name&#39;: &#39;xxx&#39;,
    &#39;age&#39;: 22
}

insert_id = collection.insert_one(item).inserted_id  
// \u8FD4\u56DEInsertOneResult\u5B9E\u4F8B, \u5C31\u662Fitem\u589E\u52A0\u4E86inserted_id, \u6700\u7EC8\u8FD4\u56DE: ObjectId(&#39;...&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u6279\u91CF\u63D2\u5165</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>items = [
    {...}, 
    {...},
    ...
]
result = collection.insert_many(items)
// result \u662F\u4E00\u4E2AInsertManyResult\u5B9E\u4F8B\uFF0C\u652F\u6301\u8FED\u4EE3
# \u5982\u679C\u63D2\u5165\u65F6\u6570\u636E\u5E93\u6709\u552F\u4E00\u7EA6\u675F\uFF0C\u53EF\u4EE5\u6DFB\u52A0ordered\u4E3A\u65E0\u5E8F\uFF0C\u4F7F\u7528try except\u6765\u5FFD\u7565\u91CD\u590D\u63D2\u5165\u7684\u5F02\u5E38\uFF0C\u5176\u4ED6\u7684\u5C31\u53EF\u4EE5\u7EE7\u7EED\u63D2\u5165
result = collection.insert_many(items, ordered=False)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u6279\u91CF\u4E0D\u91CD\u590D\u63D2\u5165</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>for r in rs:
    query = {
        &quot;unique_colum&quot;: r.get(&#39;unique_colum&#39;), 
    }
    update = {
        &quot;$set&quot;: r,
    }
    rs = collection.find_one_and_update(query, update, upsert=True)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_2-\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#_2-\u4FEE\u6539" aria-hidden="true">#</a> 2. \u4FEE\u6539</h3>`,27),c=i("\u53C2\u8003\uFF1A "),v={href:"https://blog.csdn.net/user_longling/article/details/52398667",target:"_blank",rel:"noopener noreferrer"},m=i("https://blog.csdn.net/user_longling/article/details/52398667"),b=i(" update\u5171\u6709\u56DB\u4E2A\u53C2\u6570\uFF1A - query # \u6761\u4EF6 - updata # \u66F4\u65B0\u5185\u5BB9 - upsert # \u9ED8\u8BA4false\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u8981\u63D2\u5165\uFF0C\u5219\u4E3Atrue - multi # \u9ED8\u8BA4false\uFF0C\u8981\u4FEE\u6539\u6240\u6709\u7B26\u5408\u6761\u4EF6\u7684\u67E5\u8BE2\uFF0C\u5219\u4E3Atrue"),g=n(`<ol><li><p>\u57FA\u672C\u64CD\u4F5C\uFF0C updata\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u503C\uFF0C\u5C06\u6574\u4E2Adocument\u4FEE\u6539</p></li><li><p>\u4E0D\u5B58\u5728\u63D2\u5165\uFF0C\u5B58\u5728\u5219\u4E0D\u64CD\u4F5C &quot;$setOnInsert&quot;</p></li><li><p>\u4FEE\u6539\u67D0\u4E2Akey\uFF0C\u6709\u5219\u4FEE\u6539\uFF0C\u6CA1\u6709\u5C31\u65B0\u589E &quot;$set&quot; <strong>\u4FEE\u6539\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &quot;name&quot;: &quot;xxx&quot;
}

newvalue = {
    &quot;$set&quot;: {
        &quot;name&quot;: &quot;sss&quot;
    }
}
collection.update_one(query, newvalue)  # \u4FEE\u6539\u5355\u6761
result = collection.update_many(query, newvalue)  # \u4FEE\u6539\u591A\u6761
result.modified_count()   # \u8FD4\u56DE\u4FEE\u6539\u5185\u5BB9\u7684\u6570\u91CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>\u5220\u9664\u67D0\u4E2A\u952E &quot;$unset&quot;</p></li><li><p>\u589E\u52A0\u8BA1\u7B97 &quot;$inc&quot;</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    newvalue = {
        &quot;$inc&quot;: {
            &quot;key&quot; : 3,  # \u6216\u8005-7
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>&quot;$push&quot; # field\u7684\u503C\u5FC5\u987B\u662Flist</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    updata = {
        &quot;$push&quot;: {
            &quot;field&quot;: &quot;value&quot;,
        }
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>&quot;pushAll&quot; # \u5C06list\u7684\u6BCF\u4E2A\u503Cpush\u8FDB\u53BB\uFF0C\u548Cpush\u533A\u522B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    pushall\u63A5\u53D7list\uFF0C\u5C06\u6BCF\u4E2A\u503C\u653E\u5230\u76EE\u6807\u6570\u7EC4\u4E2D
    \u5982\u679Cpush\u4E00\u4E2Alist\uFF0Clist\u5C06\u4F5C\u4E3A\u6574\u4F53\u52A0\u5165\u5230\u76EE\u6807\u6570\u7EC4\u4E2D
    \u539F\u59CB\uFF1A[&#39;aa&#39;, &#39;bb&#39;]
    push [&#39;cc&#39;, &#39;dd&#39;]   # \u7ED3\u679C [&#39;aa&#39;, &#39;bb&#39;\uFF0C[&#39;cc&#39;, &#39;dd&#39;]]
    pushall [&#39;cc&#39;, &#39;dd&#39;]   # \u7ED3\u679C [&#39;aa&#39;, &#39;bb&#39;\uFF0C&#39;cc&#39;, &#39;dd&#39;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="_3-\u67E5\u8BE2\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#_3-\u67E5\u8BE2\u6587\u6863" aria-hidden="true">#</a> 3. \u67E5\u8BE2\u6587\u6863</h3>`,2),h=n(`<li><p><strong>\u67E5\u8BE2\u7B2C\u4E00\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &#39;kk&#39;: &#39;vv&#39;,
    ...
}
collection.find_one(query)
// \u8FD4\u56DE\u4E00\u4E2Adict, \u6CA1\u6709\u7B26\u5408\u6761\u4EF6, \u8FD4\u56DENone
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u67E5\u8BE2\u591A\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>result = collection.find(query)
#\u3000**\u6CE8\u610F:** \u6B64\u5904\u8FD4\u56DEresult\u7C7B\u578B\`&lt;pymongo.cursor.Cursor object at 0x0000000002C6DBE0&gt;\`\u662F\u53EF\u8FED\u4EE3\u5BF9\u8C61,\u53EF\u4EE5\u4F7F\u7528list(result)\u8F6C\u6362, \u4E5F\u53EF\u4EE5\u4F7F\u7528for\u5FAA\u73AF\u8FED\u4EE3

num = result.count()   # Cursor\u6709\u4E00\u4E2Acount\u65B9\u6CD5, \u8FD4\u56DE\u67E5\u8BE2\u7ED3\u679C\u7684\u4E2A\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),p=e("strong",null,"\u8303\u56F4\u67E5\u8BE2",-1),q=i(" \u53C2\u8003\uFF1A "),_={href:"https://blog.csdn.net/yangguangxiadeshu/article/details/45096007",target:"_blank",rel:"noopener noreferrer"},x=i("https://blog.csdn.net/yangguangxiadeshu/article/details/45096007"),f=n(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &quot;date&quot;: {
        # \u8303\u56F4\u67E5\u8BE2
        &quot;$gt&quot;: d,   # \u5927\u4E8E
        &quot;$lt&quot;: d,   # \u5C0F\u4E8E
        &quot;$gte&quot;: d,   # \u5927\u4E8E\u7B49\u4E8E
        &quot;$lte&quot;: d,   # \u5C0F\u4E8E\u7B49\u4E8E
        &quot;$ne&quot;: d,   # \u4E0D\u7B49\u4E8E
    },
    &quot;value1&quot;: {  
        # \u5E76\u5217\u67E5\u8BE2
        &quot;$lt&quot;: 20,   # \u5C0F\u4E8E
        &quot;$gte&quot;: 3,   # \u5927\u4E8E\u7B49\u4E8E
    },
    &quot;value2&quot;: {  
        # in or not in
        &quot;$in&quot;: [2, 3], 
        &quot;$nin&quot;: [2, 3],   
    },
    &quot;value3&quot;: {  
        # \u53D6\u6A21\u8FD0\u7B97
        &quot;$mod&quot;: [10, 1],   # \u7B49\u4EF7\u4E8E value3 % 10 == 1
    },
    &quot;value4&quot;: {  
        # list\u5927\u5C0F
        &quot;$size&quot;: 5,   # value4\u8FD9\u4E2Alist\u7684\u5927\u5C0F\uFF0C\u5B98\u7F51\u4E0D\u5EFA\u8BAE\u67E5\u627Esize\u7684\u8303\u56F4\uFF0C\u5982\u679C\u60F3\u8981\u627Esize&lt;5, \u5EFA\u8BAE\u521B\u5EFA\u4E00\u4E2A\u5B57\u6BB5\u6765\u4FDD\u5B58\u5143\u7D20\u7684\u6570\u91CF
    },
    &quot;value5&quot;: {  
        # \u662F\u5426\u5B58\u5728
        &quot;$exists&quot;: true,   # \u5B58\u5728
        &quot;$exists&quot;: false,   # \u4E0D\u5B58\u5728
    },
    &quot;value6&quot;: {  
        # \u7C7B\u578B\u5224\u65AD
        &quot;$type&quot;: 2,   # string, \u57FA\u4E8Ebson\u6765\u5224\u65AD\uFF0C
        &quot;$type&quot;: 16,   # int
        &quot;$gte&quot;: 3,   # \u5927\u4E8E\u7B49\u4E8E
    },
    &quot;value7&quot;: {  
        # \u5143\u7D20\u5339\u914D,\u9488\u5BF9list\u7C7B\u578B
        &quot;$elemMath&quot;:{
            a : 1, 
            b : {
                &quot;$gt&quot;: 2
            }
        }
    },
    &quot;value8.name&quot;: {  
        # \u5D4C\u5165\u5BF9\u8C61\u67E5\u8BE2,\u76F4\u63A5\u4F7F\u7528.\u5373\u53EF
        &quot;name_target&quot;,
    }
}
result = collection.find(query)  # \u67E5\u8BE2\u7ED3\u679C
result.sort(&#39;name&#39;)  # \u5347\u5E8F\u6392\u5E8F
result.sort(&#39;name&#39;, -1)  # \u964D\u5E8F\u6392\u5E8F
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),y=n(`<li><p><strong>\u968F\u673A\u67E5\u8BE2</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = [{
    &#39;$sample&#39;: {
        &quot;size&quot;: 2,
    },
}]
rs = list(collection.aggregate(pipeline=query))
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u8FC7\u6EE4\u663E\u793A</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>filter = {
    &#39;id&#39;: 0,  # 0\u8868\u793A\u4E0D\u663E\u793A, 1\u8868\u793A\u663E\u793A, 0\u548C1\u53EA\u80FD\u5B58\u5728\u4E00\u79CD
    &#39;url&#39;: 0,
}
result = collection.find({}, filter)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>`,2),N=n(`<h3 id="_4-\u5220\u9664" tabindex="-1"><a class="header-anchor" href="#_4-\u5220\u9664" aria-hidden="true">#</a> 4. \u5220\u9664</h3><ol><li><p><strong>\u5220\u9664\u4E00\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {&quot;name&quot;: &quot;maxiaoteng&quot;}
collection.delete_one(query)  # \u5220\u9664\u7B26\u5408\u6761\u4EF6\u7684\u7B2C\u4E00\u6761
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u5220\u9664\u591A\u6761</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &quot;name&quot;: {
        &quot;$regex&quot;: &quot;^F&quot;  # \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F:name\u4E2D\u4EE5F\u5F00\u5934\u7684
    }
}
x = collection.delete_many(query)
count = x.deleted_count  # \u8FD4\u56DE\u5220\u9664\u6587\u6863\u7684\u4E2A\u6570
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>\u5220\u9664\u6240\u6709</strong><br> query = {} # \u5373\u53EF</p></li></ol><hr><h2 id="_4-\u521B\u5EFA\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#_4-\u521B\u5EFA\u7D22\u5F15" aria-hidden="true">#</a> 4. \u521B\u5EFA\u7D22\u5F15</h2><p>\u6DFB\u52A0\u7D22\u5F15\u53EF\u4EE5\u52A0\u5FEB\u67E5\u8BE2\u901F\u5EA6</p><ul><li>\u4F7F\u7528mongoShell\u64CD\u4F5C\uFF0C\u4F7F\u7528<code>3.0</code>\u4E4B\u540E\u7248\u672C</li></ul><pre><code>\`\`\`
    # \u521B\u5EFA\u7D22\u5F15\uFF0C1\u8868\u793A\u5347\u5E8F\uFF0C-1\u8868\u793A\u964D\u5E8F
    # option
    # 1. \u521B\u5EFA\u7D22\u5F15
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1})

    # 2. \u7EC4\u5408\u7D22\u5F15
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1})

    # 3. \u540E\u53F0\u521B\u5EFA\u7D22\u5F15
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1}, {&quot;background&quot;: 1})

    # 4. \u67E5\u770B\u7D22\u5F15
    db.COLLECTION_NAME.getIndexes()
    db.COLLECTION_NAME.getIndexkeys()

    # 5. \u5220\u9664\u7D22\u5F15,\u6839\u636Ename
    db.COLLECTION_NAME.dropIndex(&quot;name_1&quot;)
    db.COLLECTION_NAME.dropIndex(&quot;name_1_age_1&quot;)
    db.COLLECTION_NAME.dropIndexes()    # \u5220\u9664\u6240\u6709\u7D22\u5F15

    # 6. \u521B\u5EFA\u552F\u4E00\u7D22\u5F15
    db.COLLECTION_NAME.createIndex({&quot;name&quot;:1, &quot;age&quot;: -1}, {unique: true})

    # 7. \u4FEE\u6539\u7D22\u5F15
    db.COLLECTION_NAME.reIndex({&quot;name&quot;:1, &quot;age&quot;: -1})
    # \u5C06\u6570\u636E\u63D2\u5165\u5E26\u6709\u552F\u4E00\u7EA6\u675F\u7684\u8868\u4E2D\uFF0C\u5728insert_many\u4E2D\u8BBE\u7F6Eordered=false

    # pymongo\u521B\u5EFA
    result = collection.create_index([(&#39;user_id&#39;, pymongo.ASCENDING)], unique=True)
    // user_id\u7684\u503C\u4E3A\u9012\u589E, \u4E14\u552F\u4E00, \u4E4B\u540E\u518D\u63D2\u5165, \u5219\u629B\u51FA\u9519\u8BEF
\`\`\`
</code></pre><hr><h2 id="\u540C\u6B65\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u540C\u6B65\u64CD\u4F5C" aria-hidden="true">#</a> \u540C\u6B65\u64CD\u4F5C</h2><p>find_one_and_update find_one_and_replace find_one_and_delete</p><hr><h2 id="mongodb\u4E2D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F" tabindex="-1"><a class="header-anchor" href="#mongodb\u4E2D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F" aria-hidden="true">#</a> mongodb\u4E2D\u7684\u6B63\u5219\u8868\u8FBE\u5F0F</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &#39;name&#39;: {
        &quot;$regex&quot;: &quot;^f&quot;, # \u4EE5f\u5F00\u5934\u7684
        &quot;$regex&quot;: &quot;f&quot;,  # \u5305\u542Bf\u7684
    }

}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="mongodb\u4E2D\u7684\u8303\u56F4\u67E5\u8BE2" tabindex="-1"><a class="header-anchor" href="#mongodb\u4E2D\u7684\u8303\u56F4\u67E5\u8BE2" aria-hidden="true">#</a> mongodb\u4E2D\u7684\u8303\u56F4\u67E5\u8BE2</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>query = {
    &#39;age&#39;: {
        &quot;$gt&quot;: 25,  # \u5927\u4E8E25\u5C81
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><h2 id="\u5FC3\u5F97" tabindex="-1"><a class="header-anchor" href="#\u5FC3\u5F97" aria-hidden="true">#</a> \u5FC3\u5F97</h2><p>\u8BF7\u4F7F\u7528\u6700\u65B0\u7684, \u4E14\u89C4\u8303\u7684\u65B9\u6CD5\u6765\u64CD\u4F5C. \u6BD4\u5982:</p><ul><li>\u7EDF\u8BA1\u4F7F\u7528collection.find().count(),</li><li>\u589E\u5220\u6539\u67E5\u4F7F\u7528xx_one \u548C xx_many, \u6A21\u7CCA\u7684update, insert\u7B49\u5DF2\u7ECF\u88AB\u5F03\u7528.</li><li>\u67E5\u8BE2\u5E76\u66F4\u65B0\u4F7F\u7528find_one_and_update(), delete, replace... \u8FD8\u53EF\u4EE5\u6839\u636E\u53C2\u6570, \u9009\u62E9\u8FD4\u56DE\u7684\u662F\u4FEE\u6539\u524D\u8FD8\u662F\u4FEE\u6539\u540E\u7684\u5185\u5BB9</li><li>\u907F\u514D\u91CD\u590D\u63D2\u5165\u7684\u65B9\u6CD5: \u4E00\u4E2A\u4E00\u4E2A\u63D2\u5165, \u6BCF\u6B21\u63D2\u5165\u65F6\u4F7F\u7528find_one_and_update(query, update, upsert=True).(\u5373\u4E0D\u5B58\u5728\u5219\u63D2\u5165, \u5B58\u5728\u5219\u66F4\u65B0)</li></ul><h2 id="\u503C\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u503C\u7684\u6BD4\u8F83" aria-hidden="true">#</a> \u503C\u7684\u6BD4\u8F83</h2><p>\u6BD4\u8F83</p><table><thead><tr><th></th><th>MongoDB</th><th>pymongo</th></tr></thead><tbody><tr><td>1</td><td>true</td><td>True</td></tr><tr><td>2</td><td>false</td><td>False</td></tr><tr><td>3</td><td>null/\u4E0D\u5B58\u5728</td><td>None</td></tr></tbody></table>`,23);function O($,C){const d=a("ExternalLinkIcon");return t(),r("div",null,[o,e("p",null,[c,e("a",v,[m,l(d)]),b]),g,e("ol",null,[h,e("li",null,[e("p",null,[p,q,e("a",_,[x,l(d)])]),f]),y]),N])}var L=s(u,[["render",O],["__file","mongodb_pymongo.html.vue"]]);export{L as default};
