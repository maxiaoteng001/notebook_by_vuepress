import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as r,c as a,a as e,b as s,w as i,d as o}from"./app.29a9c448.js";const l={},d=e("h1",{id:"cookies",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#cookies","aria-hidden":"true"},"#"),o(" Cookies")],-1),_=e("p",null,"[TOC]",-1),h=e("h2",{id:"_1-set-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-set-cookie","aria-hidden":"true"},"#"),o(" 1. set cookie")],-1),k=o("requests"),u=o("scrapy"),p=e("ol",null,[e("li",null,"scrapy \u81EA\u52A8\u7BA1\u7406cookie, \u65E0\u9700\u8FC7\u591A\u5E72\u9884"),e("li",null,[o("refresh_cookie \u56E0\u4E3Ascrapy\u542F\u7528cookie\u4E4B\u540E\u4F1A\u4E0D\u65AD\u5408\u5E76response\u7684set-cookie, \u5982\u679C\u53EA\u5E0C\u671B\u53D1\u9001\u662F\u643A\u5E26\u6307\u5B9Acookie, \u53EF\u4EE5\u4F7F\u7528"),e("code",null,"dont_merge_cookies")])],-1),f=e("h2",{id:"_2-get-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_2-get-cookie","aria-hidden":"true"},"#"),o(" 2. get cookie")],-1),m=o("requests"),y=o("scrapy"),g=e("h2",{id:"_3-get-set-cookie",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_3-get-set-cookie","aria-hidden":"true"},"#"),o(" 3. get set_cookie")],-1),x=e("pre",null,[e("code",null,`\`\`\`
import requests
from http.cookies import SimpleCookie
res = requests.get('https://www.xiaohongshu.com/')
cookie = SimpleCookie(res.headers.get('Set-Cookie'))
for i in cookie.values():
    i.key
    i.value

# scrpay
cookies = response.headers.getlist('Set-Cookie')
for cookie in cookies:
    cookie = cookie.decode('utf-8')
    cookie_dict = SimpleCookie(cookie)
    for i in cookie_dict.values():
        i.key
        i.value
\`\`\`
`)],-1);function b(C,q){const t=c("RouterLink");return r(),a("div",null,[d,_,h,e("ol",null,[e("li",null,[s(t,{to:"/python/basic/requests.html##1"},{default:i(()=>[k]),_:1})]),e("li",null,[s(t,{to:"/python/basic/Scrapy/request-and-response.html##1"},{default:i(()=>[u]),_:1}),p])]),f,e("ol",null,[e("li",null,[s(t,{to:"/python/basic/requests.html##1"},{default:i(()=>[m]),_:1})]),e("li",null,[s(t,{to:"/python/basic/Scrapy/request-and-response.html##1"},{default:i(()=>[y]),_:1})])]),g,x])}var w=n(l,[["render",b],["__file","cookies.html.vue"]]);export{w as default};
