(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[8701],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),m=o,f=s["".concat(i,".").concat(m)]||s[m]||d[m]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=s;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},5942:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},assets:function(){return u},toc:function(){return d},default:function(){return m}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),l=["components"],c={slug:470,title:"470 \u7528 Rand7() \u5b9e\u73b0 Rand10()",tags:["\u91c7\u6837","\u6982\u7387"]},i=void 0,p={permalink:"/leetcode/470",editUrl:"https://github.com/duskmoon314/leetcode/edit/master/website/blog/blog/2021-09-05-470.md",source:"@site/blog/2021-09-05-470.md",title:"470 \u7528 Rand7() \u5b9e\u73b0 Rand10()",description:"\u6700\u7b80\u5355\u7684\u5b9e\u73b0\u662f\u6784\u6210\u4e8c\u7ef4\u70b9\u9635\uff0c\u4ece\u4e2d\u9009\u53d6\u53ef\u4ee5\u5e73\u5747\u91c7\u6837\u7684\u54ea\u4e9b\uff0c\u5176\u4ed6\u70b9\u53d8\u4e3a\u201c\u518d\u6765\u4e00\u6b21\u201d\u3002\u4e5f\u53ef\u4ee5\u7cbe\u5fc3\u8bbe\u8ba1\u201c\u518d\u6765\u4e00\u6b21\u201d\u4ee5\u51cf\u5c11\u8c03\u7528\u6b21\u6570\u3002",date:"2021-09-05T00:00:00.000Z",formattedDate:"September 5, 2021",tags:[{label:"\u91c7\u6837",permalink:"/leetcode/tags/\u91c7\u6837"},{label:"\u6982\u7387",permalink:"/leetcode/tags/\u6982\u7387"}],readingTime:1.4,truncated:!0,authors:[],prevItem:{title:"704 \u4e8c\u5206\u67e5\u627e",permalink:"/leetcode/704"},nextItem:{title:"\u5251\u6307 Offer 10-I \u6590\u6ce2\u90a3\u5951\u6570\u5217",permalink:"/leetcode/offer10I"}},u={authorsImageUrls:[]},d=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[],level:2},{value:"C++ Solution",id:"c-solution",children:[],level:2}],s={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6700\u7b80\u5355\u7684\u5b9e\u73b0\u662f\u6784\u6210\u4e8c\u7ef4\u70b9\u9635\uff0c\u4ece\u4e2d\u9009\u53d6\u53ef\u4ee5\u5e73\u5747\u91c7\u6837\u7684\u54ea\u4e9b\uff0c\u5176\u4ed6\u70b9\u53d8\u4e3a\u201c\u518d\u6765\u4e00\u6b21\u201d\u3002\u4e5f\u53ef\u4ee5\u7cbe\u5fc3\u8bbe\u8ba1\u201c\u518d\u6765\u4e00\u6b21\u201d\u4ee5\u51cf\u5c11\u8c03\u7528\u6b21\u6570\u3002"),(0,a.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,a.kt)("p",null,"\u5df2\u6709\u65b9\u6cd5 \xa0rand7\xa0 \u53ef\u751f\u6210 1 \u5230 7 \u8303\u56f4\u5185\u7684\u5747\u5300\u968f\u673a\u6574\u6570\uff0c\u8bd5\u5199\u4e00\u4e2a\u65b9\u6cd5 \xa0rand10\xa0 \u751f\u6210 1 \u5230 10 \u8303\u56f4\u5185\u7684\u5747\u5300\u968f\u673a\u6574\u6570\u3002"),(0,a.kt)("p",null,"\u4e0d\u8981\u4f7f\u7528\u7cfb\u7edf\u7684 \xa0Math.random()\xa0 \u65b9\u6cd5\u3002"),(0,a.kt)("p",null,"\u793a\u4f8b 1:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165: 1\n\u8f93\u51fa: [7]\n")),(0,a.kt)("p",null,"\u793a\u4f8b 2:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165: 2\n\u8f93\u51fa: [8,4]\n")),(0,a.kt)("p",null,"\u793a\u4f8b 3:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u8f93\u5165: 3\n\u8f93\u51fa: [8,1,10]\n")),(0,a.kt)("p",null,"\u63d0\u793a:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rand7\xa0\u5df2\u5b9a\u4e49\u3002\n\u4f20\u5165\u53c2\u6570:\xa0n\xa0\u8868\u793a\xa0rand10\xa0\u7684\u8c03\u7528\u6b21\u6570\u3002\n")),(0,a.kt)("p",null,"\u8fdb\u9636:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"rand7()\u8c03\u7528\u6b21\u6570\u7684\xa0\u671f\u671b\u503c\xa0\u662f\u591a\u5c11\xa0?\n\u4f60\u80fd\u5426\u5c3d\u91cf\u5c11\u8c03\u7528 rand7() ?\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/implement-rand10-using-rand7"},"https://leetcode-cn.com/problems/implement-rand10-using-rand7"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002")),(0,a.kt)("h2",{id:"c-solution"},"C++ Solution"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int rand10() {\n        int i, j, ans;\n        do {\n            i = rand7();\n            j = rand7();\n            ans = j + i * 7;\n        } while (ans > 47);\n        return 1 + ans % 10;\n    }\n};\n")))}m.isMDXComponent=!0}}]);