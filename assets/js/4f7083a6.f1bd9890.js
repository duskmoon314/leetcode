(self.webpackChunkleetcode=self.webpackChunkleetcode||[]).push([[3768],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(a,".").concat(d)]||f[d]||s[d]||i;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:o,l[1]=p;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1565:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return a},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(4034),o=n(9973),i=(n(7294),n(3905)),l=["components"],p={slug:502,title:"502 IPO",tags:["\u4f18\u5148\u7ea7\u961f\u5217","\u5927\u6839\u5806","\u8d2a\u5fc3"]},a=void 0,c={permalink:"/leetcode/502",editUrl:"https://github.com/duskmoon314/leetcode/edit/master/website/blog/blog/2021-09-08-502.md",source:"@site/blog/2021-09-08-502.md",title:"502 IPO",description:"\u5148\u5bf9\u6240\u6709\u7684\u9879\u76ee\u6839\u636e\u8d44\u672c\u8fdb\u884c\u6392\u5e8f\uff0c\u7136\u540e\u5206\u6bb5\u52a0\u5165\u4e00\u4e2a\u4ee5\u5229\u6da6\u4e3a\u504f\u5e8f\u7684\u5927\u6839\u5806\u7684\u4f18\u5148\u7ea7\u961f\u5217\uff0c\u6bcf\u6b21\u53d6\u51fa\u5806\u9876\u66f4\u65b0\u8d44\u672c\uff0c\u518d\u8fdb\u5165\u4e0b\u4e00\u8f6e\u9879\u76ee\u7684\u52a0\u5165\u548c\u9009\u53d6\u3002\u6ce8\u610f\u8d44\u672c\u4ec0\u4e48\u9879\u76ee\u90fd\u505a\u4e0d\u4e86\u7684\u60c5\u51b5\u8981\u76f4\u63a5\u8fd4\u56de\u3002",date:"2021-09-08T00:00:00.000Z",formattedDate:"September 8, 2021",tags:[{label:"\u4f18\u5148\u7ea7\u961f\u5217",permalink:"/leetcode/tags/\u4f18\u5148\u7ea7\u961f\u5217"},{label:"\u5927\u6839\u5806",permalink:"/leetcode/tags/\u5927\u6839\u5806"},{label:"\u8d2a\u5fc3",permalink:"/leetcode/tags/\u8d2a\u5fc3"}],readingTime:3.175,truncated:!0,authors:[],nextItem:{title:"704 \u4e8c\u5206\u67e5\u627e",permalink:"/leetcode/704"}},u={authorsImageUrls:[]},s=[{value:"\u9898\u76ee",id:"\u9898\u76ee",children:[],level:2},{value:"C++ Solution",id:"c-solution",children:[],level:2}],f={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u5148\u5bf9\u6240\u6709\u7684\u9879\u76ee\u6839\u636e\u8d44\u672c\u8fdb\u884c\u6392\u5e8f\uff0c\u7136\u540e\u5206\u6bb5\u52a0\u5165\u4e00\u4e2a\u4ee5\u5229\u6da6\u4e3a\u504f\u5e8f\u7684\u5927\u6839\u5806\u7684\u4f18\u5148\u7ea7\u961f\u5217\uff0c\u6bcf\u6b21\u53d6\u51fa\u5806\u9876\u66f4\u65b0\u8d44\u672c\uff0c\u518d\u8fdb\u5165\u4e0b\u4e00\u8f6e\u9879\u76ee\u7684\u52a0\u5165\u548c\u9009\u53d6\u3002\u6ce8\u610f\u8d44\u672c\u4ec0\u4e48\u9879\u76ee\u90fd\u505a\u4e0d\u4e86\u7684\u60c5\u51b5\u8981\u76f4\u63a5\u8fd4\u56de\u3002"),(0,i.kt)("h2",{id:"\u9898\u76ee"},"\u9898\u76ee"),(0,i.kt)("p",null,"\u5047\u8bbe \u529b\u6263\uff08LeetCode\uff09\u5373\u5c06\u5f00\u59cb IPO \u3002\u4e3a\u4e86\u4ee5\u66f4\u9ad8\u7684\u4ef7\u683c\u5c06\u80a1\u7968\u5356\u7ed9\u98ce\u9669\u6295\u8d44\u516c\u53f8\uff0c\u529b\u6263 \u5e0c\u671b\u5728 IPO \u4e4b\u524d\u5f00\u5c55\u4e00\u4e9b\u9879\u76ee\u4ee5\u589e\u52a0\u5176\u8d44\u672c\u3002 \u7531\u4e8e\u8d44\u6e90\u6709\u9650\uff0c\u5b83\u53ea\u80fd\u5728 IPO \u4e4b\u524d\u5b8c\u6210\u6700\u591a k \u4e2a\u4e0d\u540c\u7684\u9879\u76ee\u3002\u5e2e\u52a9 \u529b\u6263 \u8bbe\u8ba1\u5b8c\u6210\u6700\u591a k \u4e2a\u4e0d\u540c\u9879\u76ee\u540e\u5f97\u5230\u6700\u5927\u603b\u8d44\u672c\u7684\u65b9\u5f0f\u3002"),(0,i.kt)("p",null,"\u7ed9\u4f60 n \u4e2a\u9879\u76ee\u3002\u5bf9\u4e8e\u6bcf\u4e2a\u9879\u76ee i \uff0c\u5b83\u90fd\u6709\u4e00\u4e2a\u7eaf\u5229\u6da6 profits","[i]"," \uff0c\u548c\u542f\u52a8\u8be5\u9879\u76ee\u9700\u8981\u7684\u6700\u5c0f\u8d44\u672c capital","[i]"," \u3002"),(0,i.kt)("p",null,"\u6700\u521d\uff0c\u4f60\u7684\u8d44\u672c\u4e3a w \u3002\u5f53\u4f60\u5b8c\u6210\u4e00\u4e2a\u9879\u76ee\u65f6\uff0c\u4f60\u5c06\u83b7\u5f97\u7eaf\u5229\u6da6\uff0c\u4e14\u5229\u6da6\u5c06\u88ab\u6dfb\u52a0\u5230\u4f60\u7684\u603b\u8d44\u672c\u4e2d\u3002"),(0,i.kt)("p",null,"\u603b\u800c\u8a00\u4e4b\uff0c\u4ece\u7ed9\u5b9a\u9879\u76ee\u4e2d\u9009\u62e9 \u6700\u591a k \u4e2a\u4e0d\u540c\u9879\u76ee\u7684\u5217\u8868\uff0c\u4ee5 \u6700\u5927\u5316\u6700\u7ec8\u8d44\u672c \uff0c\u5e76\u8f93\u51fa\u6700\u7ec8\u53ef\u83b7\u5f97\u7684\u6700\u591a\u8d44\u672c\u3002"),(0,i.kt)("p",null,"\u7b54\u6848\u4fdd\u8bc1\u5728 32 \u4f4d\u6709\u7b26\u53f7\u6574\u6570\u8303\u56f4\u5185\u3002"),(0,i.kt)("p",null,"\u793a\u4f8b 1\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1ak = 2, w = 0, profits = [1,2,3], capital = [0,1,1]\n\u8f93\u51fa\uff1a4\n\u89e3\u91ca\uff1a\n\u7531\u4e8e\u4f60\u7684\u521d\u59cb\u8d44\u672c\u4e3a 0\uff0c\u4f60\u4ec5\u53ef\u4ee5\u4ece 0 \u53f7\u9879\u76ee\u5f00\u59cb\u3002\n\u5728\u5b8c\u6210\u540e\uff0c\u4f60\u5c06\u83b7\u5f97 1 \u7684\u5229\u6da6\uff0c\u4f60\u7684\u603b\u8d44\u672c\u5c06\u53d8\u4e3a 1\u3002\n\u6b64\u65f6\u4f60\u53ef\u4ee5\u9009\u62e9\u5f00\u59cb 1 \u53f7\u6216 2 \u53f7\u9879\u76ee\u3002\n\u7531\u4e8e\u4f60\u6700\u591a\u53ef\u4ee5\u9009\u62e9\u4e24\u4e2a\u9879\u76ee\uff0c\u6240\u4ee5\u4f60\u9700\u8981\u5b8c\u6210 2 \u53f7\u9879\u76ee\u4ee5\u83b7\u5f97\u6700\u5927\u7684\u8d44\u672c\u3002\n\u56e0\u6b64\uff0c\u8f93\u51fa\u6700\u540e\u6700\u5927\u5316\u7684\u8d44\u672c\uff0c\u4e3a 0 + 1 + 3 = 4\u3002\n")),(0,i.kt)("p",null,"\u793a\u4f8b 2\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u8f93\u5165\uff1ak = 3, w = 0, profits = [1,2,3], capital = [0,1,2]\n\u8f93\u51fa\uff1a6\n")),(0,i.kt)("p",null,"\u63d0\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"1 <= k <= 105\n0 <= w <= 109\nn == profits.length\nn == capital.length\n1 <= n <= 105\n0 <= profits[i] <= 104\n0 <= capital[i] <= 109\n")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a\u529b\u6263\uff08LeetCode\uff09\n\u94fe\u63a5\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/ipo"},"https://leetcode-cn.com/problems/ipo"),"\n\u8457\u4f5c\u6743\u5f52\u9886\u6263\u7f51\u7edc\u6240\u6709\u3002\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u8054\u7cfb\u5b98\u65b9\u6388\u6743\uff0c\u975e\u5546\u4e1a\u8f6c\u8f7d\u8bf7\u6ce8\u660e\u51fa\u5904\u3002")),(0,i.kt)("h2",{id:"c-solution"},"C++ Solution"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"class Solution {\npublic:\n    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {\n        vector<tuple<int, int>> proj;\n        priority_queue<int> heap;\n        for (int i = 0; i < profits.size(); ++i) {\n            proj.push_back(make_tuple(capital[i], profits[i]));\n        }\n        sort(proj.begin(), proj.end());\n        int idx = 0;\n        for (; k > 0; --k) {\n            for (; idx < profits.size() && get<0>(proj[idx]) <= w; ++idx) {\n                heap.push(get<1>(proj[idx]));\n            }\n            if (heap.empty()) {\n                return w;\n            }\n            w += heap.top();\n            heap.pop();\n        }\n        return w;\n    }\n};\n")))}d.isMDXComponent=!0}}]);