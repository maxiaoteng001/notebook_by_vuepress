import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as s,c as d,a as i,b as l,e as u,d as n}from"./app.29a9c448.js";const v={},q=u(`<h1 id="scrapyd" tabindex="-1"><a class="header-anchor" href="#scrapyd" aria-hidden="true">#</a> Scrapyd</h1><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>sudo python36 -m pip install scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u542F\u52A8\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u670D\u52A1" aria-hidden="true">#</a> \u542F\u52A8\u670D\u52A1</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>scrapyd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,5),a=n("\u6D4F\u89C8\u5668\u8BBF\u95EE\uFF1A "),r={href:"http://localhost.6800",target:"_blank",rel:"noopener noreferrer"},c=n("http://localhost.6800"),m=n(" \u53EF\u4EE5\u67E5\u770Bscrapyd\u7684web\u9875\u9762\uFF0C\u4F46\u662F\u9875\u9762\u4E3B\u8981"),b=u(`<h2 id="api\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#api\u8BF4\u660E" aria-hidden="true">#</a> API\u8BF4\u660E</h2><p>\u4EE5\u4E0B\u662Fpostman\u5BFC\u51FA\u7684\u4E00\u4E2Acollection\uFF0C\u53EF\u4EE5\u91CD\u547D\u540D\u4E3A\uFF1A<code>scrapyd.postman_collection.json</code> \u5BFC\u5165\u5230postman\u67E5\u770B</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;info&quot;: {
        &quot;_postman_id&quot;: &quot;ff84db97-b2bd-40af-9b4e-273f48f6dc4e&quot;,
        &quot;name&quot;: &quot;scrapyd&quot;,
        &quot;description&quot;: &quot;scrapyd api\u7EC3\u4E60&quot;,
        &quot;schema&quot;: &quot;https://schema.getpostman.com/json/collection/v2.1.0/collection.json&quot;
    },
    &quot;item&quot;: [
        {
            &quot;name&quot;: &quot;daemonstatus&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/daemonstatus.json&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;daemonstatus.json&quot;
                    ]
                },
                &quot;description&quot;: &quot;\u67E5\u770B\u72B6\u6001&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;addversion&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;file&quot;,
                    &quot;file&quot;: {}
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/addversion.json?project=dianping&amp;version=v01&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;addversion.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;version&quot;,
                            &quot;value&quot;: &quot;v01&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u4E3A\u9879\u76EE\u589E\u52A0\u7248\u672C&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;schedule&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/schedule.json?project=dianping&amp;spider=region&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;schedule.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;spider&quot;,
                            &quot;value&quot;: &quot;region&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u542F\u52A8\u722C\u866B&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;cancel&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/cancel.json?project=dianping&amp;job=ae07a0a011b711e9bb7c06c0685ba786&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;cancel.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;job&quot;,
                            &quot;value&quot;: &quot;ae07a0a011b711e9bb7c06c0685ba786&quot;,
                            &quot;description&quot;: &quot;job_id&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u53D6\u6D88\u722C\u866B&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listprojects&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listprojects.json&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listprojects.json&quot;
                    ]
                },
                &quot;description&quot;: &quot;\u5217\u51FA\u6240\u6709\u7684\u722C\u866B\u9879\u76EE&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listverisons&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listversions.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listversions.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;,
                            &quot;description&quot;: &quot;\u6307\u5B9A\u9879\u76EE,\u8FD4\u56DE\u7248\u672C\u5217\u8868&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u5217\u51FA\u6307\u5B9A\u9879\u76EE\u7684\u7248\u672C&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listspiders&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listspiders.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listspiders.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u5217\u51FA\u9879\u76EE\u7684\u6240\u6709\u722C\u866B\u9879\u76EE&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;listjobs&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;GET&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/listjobs.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;listjobs.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u5217\u51FA\u9879\u76EE\u76EE\u524D\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;delversion&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/delversion.json?project=dianping&amp;version=1546759284&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;delversion.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        },
                        {
                            &quot;key&quot;: &quot;version&quot;,
                            &quot;value&quot;: &quot;1546759284&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u5217\u51FA\u9879\u76EE\u76EE\u524D\u6B63\u5728\u8FD0\u884C\u7684\u4EFB\u52A1&quot;
            },
            &quot;response&quot;: []
        },
        {
            &quot;name&quot;: &quot;delproject&quot;,
            &quot;request&quot;: {
                &quot;method&quot;: &quot;POST&quot;,
                &quot;header&quot;: [],
                &quot;body&quot;: {
                    &quot;mode&quot;: &quot;raw&quot;,
                    &quot;raw&quot;: &quot;&quot;
                },
                &quot;url&quot;: {
                    &quot;raw&quot;: &quot;http://localhost.6800/delproject.json?project=dianping&quot;,
                    &quot;protocol&quot;: &quot;http&quot;,
                    &quot;host&quot;: [
                        &quot;scrapyd&quot;,
                        &quot;maxiaoteng&quot;,
                        &quot;xyz&quot;
                    ],
                    &quot;path&quot;: [
                        &quot;delproject.json&quot;
                    ],
                    &quot;query&quot;: [
                        {
                            &quot;key&quot;: &quot;project&quot;,
                            &quot;value&quot;: &quot;dianping&quot;
                        }
                    ]
                },
                &quot;description&quot;: &quot;\u5220\u9664\u6307\u5B9A\u7684\u9879\u76EE&quot;
            },
            &quot;response&quot;: []
        }
    ]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function p(h,y){const e=t("ExternalLinkIcon");return s(),d("div",null,[q,i("p",null,[a,i("a",r,[c,l(e)]),m]),b])}var x=o(v,[["render",p],["__file","scrapyd.html.vue"]]);export{x as default};
