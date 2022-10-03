import{_ as i,r as a,o as t,c as p,a as e,b as n,w as r,d as o,e as s}from"./app.2596e004.js";const l="/assets/4sZOnIBaUPReTvm.4b78f283.gif",u="/assets/1tzar8HIcCm2PQf.99993e4b.gif",h="/assets/4-1Z4161413112O.5c512066.gif",k={},m=e("h1",{id:"docker\u5F15\u64CE-engine-\u8BE6\u89E3",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker\u5F15\u64CE-engine-\u8BE6\u89E3","aria-hidden":"true"},"#"),o(" Docker\u5F15\u64CE\uFF08engine\uFF09\u8BE6\u89E3")],-1),_={class:"table-of-contents"},D=o("engine\u4ECB\u7ECD"),f=o("\u6446\u8131 LXC"),b=o("\u6452\u5F03\u5927\u800C\u5168\u7684 Docker deamon"),C=o("\u5F00\u653E\u5BB9\u5668\u8BA1\u5212\uFF08OCI\uFF09\u7684\u5F71\u54CD"),x=o("runc"),I=o("containerd"),g=o("\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668"),L=o("\u8BE5\u6A21\u578B\u7684\u663E\u8457\u4F18\u52BF"),O=o("shim"),v=o("\u5728 Linux \u4E2D\u7684\u5B9E\u73B0"),X=o("daemon \u7684\u4F5C\u7528"),P=e("p",null,"[toc]",-1),N=e("h2",{id:"engine\u4ECB\u7ECD",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#engine\u4ECB\u7ECD","aria-hidden":"true"},"#"),o(" engine\u4ECB\u7ECD")],-1),A={href:"http://c.biancheng.net/docker/",target:"_blank",rel:"noopener noreferrer"},E=o("Docker"),T=o(" \u5F15\u64CE\u662F\u7528\u6765\u8FD0\u884C\u548C\u7BA1\u7406\u5BB9\u5668\u7684\u6838\u5FC3\u8F6F\u4EF6\u3002\u901A\u5E38\u4EBA\u4EEC\u4F1A\u7B80\u5355\u5730\u5C06\u5176\u4EE3\u6307\u4E3A Docker \u6216 Docker \u5E73\u53F0\u3002"),S=s('<p>\u5982\u679C\u4F60\u5BF9 VMware \u7565\u77E5\u4E00\u4E8C\uFF0C\u90A3\u4E48\u53EF\u4EE5\u5C06 Docker \u5F15\u64CE\u7406\u89E3\u4E3A ESXi \u7684\u89D2\u8272\u3002</p><ol><li><p>\u57FA\u4E8E\u5F00\u653E\u5BB9\u5668\u8BA1\u5212\uFF08OCI\uFF09\u76F8\u5173\u6807\u51C6\u7684\u8981\u6C42\uFF0CDocker \u5F15\u64CE\u91C7\u7528\u4E86\u6A21\u5757\u5316\u7684\u8BBE\u8BA1\u539F\u5219\uFF0C\u5176\u7EC4\u4EF6\u662F\u53EF\u66FF\u6362\u7684\u3002</p></li><li><p>\u4ECE\u591A\u4E2A\u89D2\u5EA6\u6765\u770B\uFF0CDocker \u5F15\u64CE\u5C31\u50CF\u6C7D\u8F66\u5F15\u64CE\u2014\u2014\u4E8C\u8005\u90FD\u662F\u6A21\u5757\u5316\u7684\uFF0C\u5E76\u4E14\u7531\u8BB8\u591A\u53EF\u4EA4\u6362\u7684\u90E8\u4EF6\u7EC4\u6210\u3002</p></li><li><p>\u6C7D\u8F66\u5F15\u64CE\u7531\u8BB8\u591A\u4E13\u7528\u7684\u90E8\u4EF6\u534F\u540C\u5DE5\u4F5C\uFF0C\u4ECE\u800C\u4F7F\u6C7D\u8F66\u53EF\u4EE5\u884C\u9A76\uFF0C\u4F8B\u5982\u8FDB\u6C14\u7BA1\u3001\u8282\u6C14\u95E8\u3001\u6C14\u7F38\u3001\u706B\u82B1\u585E\u3001\u6392\u6C14\u7BA1\u7B49\u3002</p></li><li><p>Docker \u5F15\u64CE\u7531\u8BB8\u591A\u4E13\u7528\u7684\u5DE5\u5177\u534F\u540C\u5DE5\u4F5C\uFF0C\u4ECE\u800C\u53EF\u4EE5\u521B\u5EFA\u548C\u8FD0\u884C\u5BB9\u5668\uFF0C\u4F8B\u5982 API\u3001\u6267\u884C\u9A71\u52A8\u3001\u8FD0\u884C\u65F6\u3001shim \u8FDB\u7A0B\u7B49\u3002</p></li></ol><p><strong>Docker \u5F15\u64CE\u7531\u5982\u4E0B\u4E3B\u8981\u7684\u7EC4\u4EF6\u6784\u6210\uFF1A</strong></p><ul><li><p>Docker \u5BA2\u6237\u7AEF\uFF08Docker Client\uFF09</p></li><li><p>Docker \u5B88\u62A4\u8FDB\u7A0B\uFF08<code>Docker deamon</code>\uFF09</p></li><li><p>containerd</p></li><li><p>runc</p></li></ul><blockquote><p>\u5B83\u4EEC\u5171\u540C\u8D1F\u8D23\u5BB9\u5668\u7684\u521B\u5EFA\u548C\u8FD0\u884C\u3002</p></blockquote><p>\u603B\u4F53\u903B\u8F91\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="'+l+'" alt="Docker\u603B\u4F53\u903B\u8F91"></p><p>Docker \u9996\u6B21\u53D1\u5E03\u65F6\uFF0CDocker \u5F15\u64CE\u7531\u4E24\u4E2A\u6838\u5FC3\u7EC4\u4EF6\u6784\u6210\uFF1A<code>LXC</code> \u548C <code>Docker deamon</code>\u3002</p><p><code>Docker deamon</code> \u662F\u5355\u4E00\u7684\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5305\u542B\u8BF8\u5982 Docker \u5BA2\u6237\u7AEF\u3001Docker API\u3001\u5BB9\u5668\u8FD0\u884C\u65F6\u3001\u955C\u50CF\u6784\u5EFA\u7B49\u3002</p><p><code>LXC</code> \u63D0\u4F9B\u4E86\u5BF9\u8BF8\u5982\u547D\u540D\u7A7A\u95F4\uFF08Namespace\uFF09\u548C\u63A7\u5236\u7EC4\uFF08CGroup\uFF09\u7B49\u57FA\u7840\u5DE5\u5177\u7684\u64CD\u4F5C\u80FD\u529B\uFF0C\u5B83\u4EEC\u662F\u57FA\u4E8E Linux \u5185\u6838\u7684\u5BB9\u5668\u865A\u62DF\u5316\u6280\u672F\u3002</p><p>\u4E0B\u56FE\u9610\u91CA\u4E86\u5728 Docker \u65E7\u7248\u672C\u4E2D\uFF0C<code>Docker deamon</code>\u3001<code>LXC</code> \u548C\u64CD\u4F5C\u7CFB\u7EDF\u4E4B\u95F4\u7684\u4EA4\u4E92\u5173\u7CFB\u3002</p><p><img src="'+u+`" alt="\u5148\u524D\u7684Docker\u67B6\u6784"></p><h2 id="\u6446\u8131-lxc" tabindex="-1"><a class="header-anchor" href="#\u6446\u8131-lxc" aria-hidden="true">#</a> \u6446\u8131 LXC</h2><p>\u5BF9 <code>LXC</code> \u7684\u4F9D\u8D56\u81EA\u59CB\u81F3\u7EC8\u90FD\u662F\u4E2A\u95EE\u9898\u3002</p><p>\u9996\u5148\uFF0C<code>LXC</code> \u662F\u57FA\u4E8E Linux \u7684\u3002\u8FD9\u5BF9\u4E8E\u4E00\u4E2A\u7ACB\u5FD7\u4E8E\u8DE8\u5E73\u53F0\u7684\u9879\u76EE\u6765\u8BF4\u662F\u4E2A\u95EE\u9898\u3002</p><p>\u5176\u6B21\uFF0C\u5982\u6B64\u6838\u5FC3\u7684\u7EC4\u4EF6\u4F9D\u8D56\u4E8E\u5916\u90E8\u5DE5\u5177\uFF0C\u8FD9\u4F1A\u7ED9\u9879\u76EE\u5E26\u6765\u5DE8\u5927\u98CE\u9669\uFF0C\u751A\u81F3\u5F71\u54CD\u5176\u53D1\u5C55\u3002</p><p>\u56E0\u6B64\uFF0CDocker \u516C\u53F8\u5F00\u53D1\u4E86\u540D\u4E3A Libcontainer \u7684\u81EA\u7814\u5DE5\u5177\uFF0C\u7528\u4E8E\u66FF\u4EE3 <code>LXC</code>\u3002</p><p>Libcontainer \u7684\u76EE\u6807\u662F\u6210\u4E3A\u4E0E\u5E73\u53F0\u65E0\u5173\u7684\u5DE5\u5177\uFF0C\u53EF\u57FA\u4E8E\u4E0D\u540C\u5185\u6838\u4E3A Docker \u4E0A\u5C42\u63D0\u4F9B\u5FC5\u8981\u7684\u5BB9\u5668\u4EA4\u4E92\u529F\u80FD\u3002</p><p>\u5728 Docker 0.9 \u7248\u672C\u4E2D\uFF0CLibcontainer \u53D6\u4EE3 <code>LXC</code> \u6210\u4E3A\u9ED8\u8BA4\u7684\u6267\u884C\u9A71\u52A8\u3002</p><h2 id="\u6452\u5F03\u5927\u800C\u5168\u7684-docker-deamon" tabindex="-1"><a class="header-anchor" href="#\u6452\u5F03\u5927\u800C\u5168\u7684-docker-deamon" aria-hidden="true">#</a> \u6452\u5F03\u5927\u800C\u5168\u7684 Docker deamon</h2><p>\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C<code>Docker deamon</code> \u7684\u6574\u4F53\u6027\u5E26\u6765\u4E86\u8D8A\u6765\u8D8A\u591A\u7684\u95EE\u9898\u3002\u96BE\u4E8E\u53D8\u66F4\u3001\u8FD0\u884C\u8D8A\u6765\u8D8A\u6162\u3002\u8FD9\u5E76\u975E\u751F\u6001\uFF08\u6216Docker\u516C\u53F8\uFF09\u6240\u671F\u671B\u7684\u3002</p><p>Docker \u516C\u53F8\u610F\u8BC6\u5230\u4E86\u8FD9\u4E9B\u95EE\u9898\uFF0C\u5F00\u59CB\u52AA\u529B\u7740\u624B\u62C6\u89E3\u8FD9\u4E2A\u5927\u800C\u5168\u7684 <code>Docker deamon</code> \u8FDB\u7A0B\uFF0C\u5E76\u5C06\u5176\u6A21\u5757\u5316\u3002</p><p>\u8FD9\u9879\u4EFB\u52A1\u7684\u76EE\u6807\u662F\u5C3D\u53EF\u80FD\u62C6\u89E3\u51FA\u5176\u4E2D\u7684\u529F\u80FD\u7279\u6027\uFF0C\u5E76\u7528\u5C0F\u800C\u4E13\u7684\u5DE5\u5177\u6765\u5B9E\u73B0\u5B83\u3002\u8FD9\u4E9B\u5C0F\u5DE5\u5177\u53EF\u4EE5\u662F\u53EF\u66FF\u6362\u7684\uFF0C\u4E5F\u53EF\u4EE5\u88AB\u7B2C\u4E09\u65B9\u62FF\u53BB\u7528\u4E8E\u6784\u5EFA\u5176\u4ED6\u5DE5\u5177\u3002</p><p>\u8FD9\u4E00\u8BA1\u5212\u9075\u5FAA\u4E86\u5728 UNIX \u4E2D\u5F97\u4EE5\u5B9E\u8DF5\u5E76\u9A8C\u8BC1\u8FC7\u7684\u4E00\u79CD\u8F6F\u4EF6\u54F2\u5B66\uFF1A\u5C0F\u800C\u4E13\u7684\u5DE5\u5177\u53EF\u4EE5\u7EC4\u88C5\u4E3A\u5927\u578B\u5DE5\u5177\u3002</p><p>\u8FD9\u9879\u62C6\u89E3\u548C\u91CD\u6784 Docker \u5F15\u64CE\u7684\u5DE5\u4F5C\u4ECD\u5728\u8FDB\u884C\u4E2D\u3002\u4E0D\u8FC7\uFF0C\u6240\u6709\u5BB9\u5668\u6267\u884C\u548C\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u4EE3\u7801\u5DF2\u7ECF\u5B8C\u5168\u4ECE daemon \u4E2D\u79FB\u9664\uFF0C\u5E76\u91CD\u6784\u4E3A\u5C0F\u800C\u4E13\u7684\u5DE5\u5177\u3002</p><p>\u76EE\u524D Docker \u5F15\u64CE\u7684\u67B6\u6784\u793A\u610F\u56FE\u5982\u4E0B\u56FE\u6240\u793A\uFF0C\u56FE\u4E2D\u6709\u7B80\u8981\u7684\u63CF\u8FF0\u3002</p><p><img src="https://s2.loli.net/2022/05/08/gh1pjOqJHftEXkU.gif" alt="Docker\u5F15\u64CE\u7684\u67B6\u6784"></p><h2 id="\u5F00\u653E\u5BB9\u5668\u8BA1\u5212-oci-\u7684\u5F71\u54CD" tabindex="-1"><a class="header-anchor" href="#\u5F00\u653E\u5BB9\u5668\u8BA1\u5212-oci-\u7684\u5F71\u54CD" aria-hidden="true">#</a> \u5F00\u653E\u5BB9\u5668\u8BA1\u5212\uFF08OCI\uFF09\u7684\u5F71\u54CD</h2><p>\u5F53 Docker \u516C\u53F8\u6B63\u5728\u8FDB\u884C <code>Docker deamon</code> \u8FDB\u7A0B\u7684\u62C6\u89E3\u548C\u91CD\u6784\u7684\u65F6\u5019\uFF0COCI \u4E5F\u6B63\u5728\u7740\u624B\u5B9A\u4E49\u4E24\u4E2A\u5BB9\u5668\u76F8\u5173\u7684\u89C4\u8303\uFF08\u6216\u8005\u8BF4\u6807\u51C6\uFF09\u3002</p><p>\u955C\u50CF\u89C4\u8303\u548C\u5BB9\u5668\u8FD0\u884C\u65F6\u89C4\u8303\uFF0C\u4E24\u4E2A\u89C4\u8303\u5747\u4E8E 2017 \u5E74 7 \u6708\u53D1\u5E03\u4E86 1.0 \u7248\u3002</p><p>Docker \u516C\u53F8\u53C2\u4E0E\u4E86\u8FD9\u4E9B\u89C4\u8303\u7684\u5236\u5B9A\u5DE5\u4F5C\uFF0C\u5E76\u8D21\u732E\u4E86\u8BB8\u591A\u7684\u4EE3\u7801\u3002</p><p>\u4ECE Docker 1.11 \u7248\u672C\uFF082016 \u5E74\u521D\uFF09\u5F00\u59CB\uFF0CDocker \u5F15\u64CE\u5C3D\u53EF\u80FD\u5B9E\u73B0\u4E86 OCI \u7684\u89C4\u8303\u3002\u4F8B\u5982\uFF0C<code>Docker deamon</code> \u4E0D\u518D\u5305\u542B\u4EFB\u4F55\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u4EE3\u7801\u2014\u2014\u6240\u6709\u7684\u5BB9\u5668\u8FD0\u884C\u4EE3\u7801\u5728\u4E00\u4E2A\u5355\u72EC\u7684 OCI \u517C\u5BB9\u5C42\u4E2D\u5B9E\u73B0\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDocker \u4F7F\u7528 runc \u6765\u5B9E\u73B0\u8FD9\u4E00\u70B9\u3002runc \u662F OCI \u5BB9\u5668\u8FD0\u884C\u65F6\u6807\u51C6\u7684\u53C2\u8003\u5B9E\u73B0\u3002</p><p>\u5982\u4E0A\u56FE\u4E2D\u7684 runc \u5BB9\u5668\u8FD0\u884C\u65F6\u5C42\u3002runc \u9879\u76EE\u7684\u76EE\u6807\u4E4B\u4E00\u5C31\u662F\u4E0E OCI \u89C4\u8303\u4FDD\u6301\u4E00\u81F4\u3002</p><p>\u76EE\u524D OCI \u89C4\u8303\u5747\u4E3A 1.0 \u7248\u672C\uFF0C\u6211\u4EEC\u4E0D\u5E0C\u671B\u5B83\u4EEC\u9891\u7E41\u5730\u8FED\u4EE3\uFF0C\u6BD5\u7ADF\u7A33\u5B9A\u80DC\u4E8E\u4E00\u5207\u3002</p><p>\u9664\u6B64\u4E4B\u5916\uFF0CDocker \u5F15\u64CE\u4E2D\u7684 containerd \u7EC4\u4EF6\u786E\u4FDD\u4E86 Docker \u955C\u50CF\u80FD\u591F\u4EE5\u6B63\u786E\u7684 OCI Bundle \u7684\u683C\u5F0F\u4F20\u9012\u7ED9 runc\u3002</p><p>\u5176\u5B9E\uFF0C\u5728 OCI \u89C4\u8303\u4EE5 1.0 \u7248\u672C\u6B63\u5F0F\u53D1\u5E03\u4E4B\u524D\uFF0CDocker \u5F15\u64CE\u5C31\u5DF2\u7ECF\u9075\u5FAA\u8BE5\u89C4\u8303\u5B9E\u73B0\u4E86\u90E8\u5206\u529F\u80FD\u3002</p><h2 id="runc" tabindex="-1"><a class="header-anchor" href="#runc" aria-hidden="true">#</a> runc</h2><p>\u5982\u524D\u6240\u8FF0\uFF0Crunc \u662F OCI \u5BB9\u5668\u8FD0\u884C\u65F6\u89C4\u8303\u7684\u53C2\u8003\u5B9E\u73B0\u3002Docker \u516C\u53F8\u53C2\u4E0E\u4E86\u89C4\u8303\u7684\u5236\u5B9A\u4EE5\u53CA runc \u7684\u5F00\u53D1\u3002</p><p>\u53BB\u7C97\u53D6\u7CBE\uFF0C\u4F1A\u53D1\u73B0 runc \u5B9E\u8D28\u4E0A\u662F\u4E00\u4E2A\u8F7B\u91CF\u7EA7\u7684\u3001\u9488\u5BF9 Libcontainer \u8FDB\u884C\u4E86\u5305\u88C5\u7684\u547D\u4EE4\u884C\u4EA4\u4E92\u5DE5\u5177\uFF08Libcontainer \u53D6\u4EE3\u4E86\u65E9\u671F Docker \u67B6\u6784\u4E2D\u7684 <code>LXC</code>\uFF09\u3002</p><p>runc \u751F\u6765\u53EA\u6709\u4E00\u4E2A\u4F5C\u7528\u2014\u2014\u521B\u5EFA\u5BB9\u5668\uFF0C\u8FD9\u4E00\u70B9\u5B83\u975E\u5E38\u62FF\u624B\uFF0C\u901F\u5EA6\u5F88\u5FEB\uFF01\u4E0D\u8FC7\u5B83\u662F\u4E00\u4E2A CLI \u5305\u88C5\u5668\uFF0C\u5B9E\u8D28\u4E0A\u5C31\u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u5DE5\u5177\u3002</p><p>\u56E0\u6B64\u76F4\u63A5\u4E0B\u8F7D\u5B83\u6216\u57FA\u4E8E\u6E90\u7801\u7F16\u8BD1\u4E8C\u8FDB\u5236\u6587\u4EF6\uFF0C\u5373\u53EF\u62E5\u6709\u4E00\u4E2A\u5168\u529F\u80FD\u7684 runc\u3002\u4F46\u5B83\u53EA\u662F\u4E00\u4E2A\u57FA\u7840\u5DE5\u5177\uFF0C\u5E76\u4E0D\u63D0\u4F9B\u7C7B\u4F3C Docker \u5F15\u64CE\u6240\u62E5\u6709\u7684\u4E30\u5BCC\u529F\u80FD\u3002</p><p>\u6709\u65F6\u4E5F\u5C06 runc \u6240\u5728\u7684\u90A3\u4E00\u5C42\u79F0\u4E3A\u201COCI \u5C42\u201D\uFF0C\u5982\u4E0A\u56FE\u6240\u793A\u3002\u5173\u4E8E runc \u7684\u53D1\u5E03\u4FE1\u606F\u89C1 GitHub \u4E2D opencontainers/runc \u5E93\u7684 release\u3002</p><h2 id="containerd" tabindex="-1"><a class="header-anchor" href="#containerd" aria-hidden="true">#</a> containerd</h2><p>\u5728\u5BF9 <code>Docker deamon</code> \u7684\u529F\u80FD\u8FDB\u884C\u62C6\u89E3\u540E\uFF0C\u6240\u6709\u7684\u5BB9\u5668\u6267\u884C\u903B\u8F91\u88AB\u91CD\u6784\u5230\u4E00\u4E2A\u65B0\u7684\u540D\u4E3A containerd\uFF08\u53D1\u97F3\u4E3A container-dee\uFF09\u7684\u5DE5\u5177\u4E2D\u3002</p><p>\u5B83\u7684\u4E3B\u8981\u4EFB\u52A1\u662F\u5BB9\u5668\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406\u2014\u2014start | stop | pause | rm....</p><p>containerd \u5728 Linux \u548C Windows \u4E2D\u4EE5 daemon \u7684\u65B9\u5F0F\u8FD0\u884C\uFF0C\u4ECE 1.11 \u7248\u672C\u4E4B\u540E Docker \u5C31\u5F00\u59CB\u5728 Linux \u4E0A\u4F7F\u7528\u5B83\u3002</p><p>Docker \u5F15\u64CE\u6280\u672F\u6808\u4E2D\uFF0Ccontainerd \u4F4D\u4E8E daemon \u548C runc \u6240\u5728\u7684 OCI \u5C42\u4E4B\u95F4\u3002Kubernetes \u4E5F\u53EF\u4EE5\u901A\u8FC7 cri-containerd \u4F7F\u7528 containerd\u3002</p><p>\u5982\u524D\u6240\u8FF0\uFF0Ccontainerd \u6700\u521D\u88AB\u8BBE\u8BA1\u4E3A\u8F7B\u91CF\u7EA7\u7684\u5C0F\u578B\u5DE5\u5177\uFF0C\u4EC5\u7528\u4E8E\u5BB9\u5668\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406\u3002\u7136\u800C\uFF0C\u968F\u7740\u65F6\u95F4\u7684\u63A8\u79FB\uFF0C\u5B83\u88AB\u8D4B\u4E88\u4E86\u66F4\u591A\u7684\u529F\u80FD\uFF0C\u6BD4\u5982\u955C\u50CF\u7BA1\u7406\u3002</p><p>\u5176\u539F\u56E0\u4E4B\u4E00\u5728\u4E8E\uFF0C\u8FD9\u6837\u4FBF\u4E8E\u5728\u5176\u4ED6\u9879\u76EE\u4E2D\u4F7F\u7528\u5B83\u3002\u6BD4\u5982\uFF0C\u5728 Kubernetes \u4E2D\uFF0Ccontainerd \u5C31\u662F\u4E00\u4E2A\u5F88\u53D7\u6B22\u8FCE\u7684\u5BB9\u5668\u8FD0\u884C\u65F6\u3002</p><p>\u7136\u800C\u5728 Kubernetes \u8FD9\u6837\u7684\u9879\u76EE\u4E2D\uFF0C\u5982\u679C containerd \u80FD\u591F\u5B8C\u6210\u4E00\u4E9B\u8BF8\u5982 push \u548C pull \u955C\u50CF\u8FD9\u6837\u7684\u64CD\u4F5C\u5C31\u66F4\u597D\u4E86\u3002</p><p>\u56E0\u6B64\uFF0C\u5982\u4ECA containerd \u8FD8\u80FD\u591F\u5B8C\u6210\u4E00\u4E9B\u9664\u5BB9\u5668\u751F\u547D\u5468\u671F\u7BA1\u7406\u4E4B\u5916\u7684\u64CD\u4F5C\u3002\u4E0D\u8FC7\uFF0C\u6240\u6709\u7684\u989D\u5916\u529F\u80FD\u90FD\u662F\u6A21\u5757\u5316\u7684\u3001\u53EF\u9009\u7684\uFF0C\u4FBF\u4E8E\u81EA\u884C\u9009\u62E9\u6240\u9700\u529F\u80FD\u3002</p><p>\u6240\u4EE5\uFF0CKubernetes \u8FD9\u6837\u7684\u9879\u76EE\u5728\u4F7F\u7528 containerd \u65F6\uFF0C\u53EF\u4EE5\u4EC5\u5305\u542B\u6240\u9700\u7684\u529F\u80FD\u3002</p><p>containerd \u662F\u7531 Docker \u516C\u53F8\u5F00\u53D1\u7684\uFF0C\u5E76\u6350\u732E\u7ED9\u4E86\u4E91\u539F\u751F\u8BA1\u7B97\u57FA\u91D1\u4F1A\uFF08Cloud Native Computing Foundation, CNCF\uFF09\u30022017 \u5E74 12 \u6708\u53D1\u5E03\u4E86 1.0 \u7248\u672C\uFF0C\u5177\u4F53\u7684\u53D1\u5E03\u4FE1\u606F\u89C1 GitHub \u4E2D\u7684 containerd/ containerd \u5E93\u7684 releases\u3002</p><h2 id="\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668" aria-hidden="true">#</a> \u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668</h2><p>\u73B0\u5728\u6211\u4EEC\u5BF9 Docker \u5F15\u64CE\u5DF2\u7ECF\u6709\u4E86\u4E00\u4E2A\u603B\u4F53\u8BA4\u8BC6\uFF0C\u4E5F\u4E86\u89E3\u4E86\u4E00\u4E9B\u5386\u53F2\uFF0C\u4E0B\u9762\u4ECB\u7ECD\u4E00\u4E0B\u521B\u5EFA\u65B0\u5BB9\u5668\u7684\u8FC7\u7A0B\u3002</p><p>\u5E38\u7528\u7684\u542F\u52A8\u5BB9\u5668\u7684\u65B9\u6CD5\u5C31\u662F\u4F7F\u7528 Docker \u547D\u4EE4\u884C\u5DE5\u5177\u3002\u4E0B\u9762\u7684<code>docker container run</code>\u547D\u4EE4\u4F1A\u57FA\u4E8E <code>alpine:latest</code> \u955C\u50CF\u542F\u52A8\u4E00\u4E2A\u65B0\u5BB9\u5668\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> container run <span class="token parameter variable">--name</span> ctr1 <span class="token parameter variable">-it</span> alpine:latest <span class="token function">sh</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5F53\u4F7F\u7528 Docker \u547D\u4EE4\u884C\u5DE5\u5177\u6267\u884C\u5982\u4E0A\u547D\u4EE4\u65F6\uFF0CDocker \u5BA2\u6237\u7AEF\u4F1A\u5C06\u5176\u8F6C\u6362\u4E3A\u5408\u9002\u7684 API \u683C\u5F0F\uFF0C\u5E76\u53D1\u9001\u5230\u6B63\u786E\u7684 API \u7AEF\u70B9\u3002</p><p>API \u662F\u5728 daemon \u4E2D\u5B9E\u73B0\u7684\u3002\u8FD9\u5957\u529F\u80FD\u4E30\u5BCC\u3001\u57FA\u4E8E\u7248\u672C\u7684 REST API \u5DF2\u7ECF\u6210\u4E3A Docker \u7684\u6807\u5FD7\uFF0C\u5E76\u4E14\u88AB\u884C\u4E1A\u63A5\u53D7\u6210\u4E3A\u4E8B\u5B9E\u4E0A\u7684\u5BB9\u5668 API\u3002</p><p>\u4E00\u65E6 daemon \u63A5\u6536\u5230\u521B\u5EFA\u65B0\u5BB9\u5668\u7684\u547D\u4EE4\uFF0C\u5B83\u5C31\u4F1A\u5411 containerd \u53D1\u51FA\u8C03\u7528\u3002daemon \u5DF2\u7ECF\u4E0D\u518D\u5305\u542B\u4EFB\u4F55\u521B\u5EFA\u5BB9\u5668\u7684\u4EE3\u7801\u4E86\uFF01</p><p>daemon \u4F7F\u7528\u4E00\u79CD CRUD \u98CE\u683C\u7684 API\uFF0C\u901A\u8FC7 gRPC \u4E0E containerd \u8FDB\u884C\u901A\u4FE1\u3002</p><p>\u867D\u7136\u540D\u53EB containerd\uFF0C\u4F46\u662F\u5B83\u5E76\u4E0D\u8D1F\u8D23\u521B\u5EFA\u5BB9\u5668\uFF0C\u800C\u662F\u6307\u6325 runc \u53BB\u505A\u3002</p><p>containerd \u5C06 Docker \u955C\u50CF\u8F6C\u6362\u4E3A OCI bundle\uFF0C\u5E76\u8BA9 runc \u57FA\u4E8E\u6B64\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668\u3002</p><p>\u7136\u540E\uFF0Crunc \u4E0E\u64CD\u4F5C\u7CFB\u7EDF\u5185\u6838\u63A5\u53E3\u8FDB\u884C\u901A\u4FE1\uFF0C\u57FA\u4E8E\u6240\u6709\u5FC5\u8981\u7684\u5DE5\u5177\uFF08Namespace\u3001CGroup\u7B49\uFF09\u6765\u521B\u5EFA\u5BB9\u5668\u3002\u5BB9\u5668\u8FDB\u7A0B\u4F5C\u4E3A runc \u7684\u5B50\u8FDB\u7A0B\u542F\u52A8\uFF0C\u542F\u52A8\u5B8C\u6BD5\u540E\uFF0Crunc \u5C06\u4F1A\u9000\u51FA\u3002</p><p>\u81F3\u6B64\uFF0C\u5BB9\u5668\u542F\u52A8\u5B8C\u6BD5\u3002\u6574\u4E2A\u8FC7\u7A0B\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p><img src="`+h+'" alt="\u542F\u52A8\u65B0\u5BB9\u5668\u7684\u8FC7\u7A0B"></p><h2 id="\u8BE5\u6A21\u578B\u7684\u663E\u8457\u4F18\u52BF" tabindex="-1"><a class="header-anchor" href="#\u8BE5\u6A21\u578B\u7684\u663E\u8457\u4F18\u52BF" aria-hidden="true">#</a> \u8BE5\u6A21\u578B\u7684\u663E\u8457\u4F18\u52BF</h2><p>\u5C06\u6240\u6709\u7684\u7528\u4E8E\u542F\u52A8\u3001\u7BA1\u7406\u5BB9\u5668\u7684\u903B\u8F91\u548C\u4EE3\u7801\u4ECE daemon \u4E2D\u79FB\u9664\uFF0C\u610F\u5473\u7740\u5BB9\u5668\u8FD0\u884C\u65F6\u4E0E <code>Docker deamon</code> \u662F\u89E3\u8026\u7684\uFF0C\u6709\u65F6\u79F0\u4E4B\u4E3A\u201C\u65E0\u5B88\u62A4\u8FDB\u7A0B\u7684\u5BB9\u5668\uFF08daemonless container\uFF09\u201D\uFF0C\u5982\u6B64\uFF0C\u5BF9 <code>Docker deamon</code> \u7684\u7EF4\u62A4\u548C\u5347\u7EA7\u5DE5\u4F5C\u4E0D\u4F1A\u5F71\u54CD\u5230\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u3002</p><p>\u5728\u65E7\u6A21\u578B\u4E2D\uFF0C\u6240\u6709\u5BB9\u5668\u8FD0\u884C\u65F6\u7684\u903B\u8F91\u90FD\u5728 daemon \u4E2D\u5B9E\u73B0\uFF0C\u542F\u52A8\u548C\u505C\u6B62 daemon \u4F1A\u5BFC\u81F4\u5BBF\u4E3B\u673A\u4E0A\u6240\u6709\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u88AB\u6740\u6389\u3002</p><p>\u8FD9\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u662F\u4E00\u4E2A\u5927\u95EE\u9898\u2014\u2014\u60F3\u4E00\u60F3\u65B0\u7248 Docker \u7684\u53D1\u5E03\u9891\u6B21\u5427\uFF01\u6BCF\u6B21 daemon \u7684\u5347\u7EA7\u90FD\u4F1A\u6740\u6389\u5BBF\u4E3B\u673A\u4E0A\u6240\u6709\u7684\u5BB9\u5668\uFF0C\u8FD9\u592A\u7CDF\u4E86\uFF01</p><p>\u5E78\u8FD0\u7684\u662F\uFF0C\u8FD9\u5DF2\u7ECF\u4E0D\u518D\u662F\u4E2A\u95EE\u9898\u3002</p><h2 id="shim" tabindex="-1"><a class="header-anchor" href="#shim" aria-hidden="true">#</a> shim</h2><p>shim \u662F\u5B9E\u73B0\u65E0 daemon \u7684\u5BB9\u5668\uFF08\u7528\u4E8E\u5C06\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u4E0E daemon \u89E3\u8026\uFF0C\u4EE5\u4FBF\u8FDB\u884C daemon \u5347\u7EA7\u7B49\u64CD\u4F5C\uFF09\u4E0D\u53EF\u6216\u7F3A\u7684\u5DE5\u5177\u3002</p><p>\u524D\u9762\u63D0\u5230\uFF0Ccontainerd \u6307\u6325 runc \u6765\u521B\u5EFA\u65B0\u5BB9\u5668\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u6BCF\u6B21\u521B\u5EFA\u5BB9\u5668\u65F6\u5B83\u90FD\u4F1A fork \u4E00\u4E2A\u65B0\u7684 runc \u5B9E\u4F8B\u3002</p><p>\u4E0D\u8FC7\uFF0C\u4E00\u65E6\u5BB9\u5668\u521B\u5EFA\u5B8C\u6BD5\uFF0C\u5BF9\u5E94\u7684 runc \u8FDB\u7A0B\u5C31\u4F1A\u9000\u51FA\u3002\u56E0\u6B64\uFF0C\u5373\u4F7F\u8FD0\u884C\u4E0A\u767E\u4E2A\u5BB9\u5668\uFF0C\u4E5F\u65E0\u987B\u4FDD\u6301\u4E0A\u767E\u4E2A\u8FD0\u884C\u4E2D\u7684 runc \u5B9E\u4F8B\u3002</p><p>\u4E00\u65E6\u5BB9\u5668\u8FDB\u7A0B\u7684\u7236\u8FDB\u7A0B runc \u9000\u51FA\uFF0C\u76F8\u5173\u8054\u7684 containerd-shim \u8FDB\u7A0B\u5C31\u4F1A\u6210\u4E3A\u5BB9\u5668\u7684\u7236\u8FDB\u7A0B\u3002\u4F5C\u4E3A\u5BB9\u5668\u7684\u7236\u8FDB\u7A0B\uFF0Cshim \u7684\u90E8\u5206\u804C\u8D23\u5982\u4E0B\u3002</p><ul><li>\u4FDD\u6301\u6240\u6709 STDIN \u548C STDOUT \u6D41\u662F\u5F00\u542F\u72B6\u6001\uFF0C\u4ECE\u800C\u5F53 daemon \u91CD\u542F\u7684\u65F6\u5019\uFF0C\u5BB9\u5668\u4E0D\u4F1A\u56E0\u4E3A\u7BA1\u9053\uFF08pipe\uFF09\u7684\u5173\u95ED\u800C\u7EC8\u6B62\u3002</li><li>\u5C06\u5BB9\u5668\u7684\u9000\u51FA\u72B6\u6001\u53CD\u9988\u7ED9 daemon\u3002</li></ul><h2 id="\u5728-linux-\u4E2D\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u5728-linux-\u4E2D\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u5728 Linux \u4E2D\u7684\u5B9E\u73B0</h2><p>\u5728 Linux \u7CFB\u7EDF\u4E2D\uFF0C\u524D\u9762\u8C08\u5230\u7684\u7EC4\u4EF6\u7531\u5355\u72EC\u7684\u4E8C\u8FDB\u5236\u6765\u5B9E\u73B0\uFF0C\u5177\u4F53\u5305\u62EC dockerd(<code>Docker deamon</code>)\u3001docker-containerd(containerd)\u3001docker-containerd-shim (shim) \u548C docker-runc (runc)\u3002</p><p>\u901A\u8FC7\u5728 Docker \u5BBF\u4E3B\u673A\u7684 Linux \u7CFB\u7EDF\u4E2D\u6267\u884C ps \u547D\u4EE4\u53EF\u4EE5\u770B\u5230\u4EE5\u4E0A\u7EC4\u4EF6\u7684\u8FDB\u7A0B\u3002\u5F53\u7136\uFF0C\u6709\u4E9B\u8FDB\u7A0B\u53EA\u6709\u5728\u8FD0\u884C\u5BB9\u5668\u7684\u65F6\u5019\u624D\u53EF\u89C1\u3002</p><h2 id="daemon-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#daemon-\u7684\u4F5C\u7528" aria-hidden="true">#</a> daemon \u7684\u4F5C\u7528</h2><p>\u5F53\u6240\u6709\u7684\u6267\u884C\u903B\u8F91\u548C\u8FD0\u884C\u65F6\u4EE3\u7801\u90FD\u4ECE daemon \u4E2D\u5265\u79BB\u51FA\u6765\u4E4B\u540E\uFF0C\u95EE\u9898\u51FA\u73B0\u4E86\u2014\u2014 daemon \u4E2D\u8FD8\u5269\u4EC0\u4E48\uFF1F</p><p>\u663E\u7136\uFF0C\u968F\u7740\u8D8A\u6765\u8D8A\u591A\u7684\u529F\u80FD\u4ECE daemon \u4E2D\u62C6\u89E3\u51FA\u6765\u5E76\u88AB\u6A21\u5757\u5316\uFF0C\u8FD9\u4E00\u95EE\u9898\u7684\u7B54\u6848\u4E5F\u4F1A\u53D1\u751F\u53D8\u5316\u3002</p><p>\u4E0D\u8FC7\uFF0Cdaemon \u7684\u4E3B\u8981\u529F\u80FD\u5305\u62EC\u955C\u50CF\u7BA1\u7406\u3001\u955C\u50CF\u6784\u5EFA\u3001REST API\u3001\u8EAB\u4EFD\u9A8C\u8BC1\u3001\u5B89\u5168\u3001\u6838\u5FC3\u7F51\u7EDC\u4EE5\u53CA\u7F16\u6392\u3002</p><blockquote><p>\u6587\u7AE0\u8282\u9009\u4E8E\u5FAE\u4FE1\u516C\u4F17\u53F7\u300C\u7AD9\u957F\u4E25\u957F\u751F\u300D</p></blockquote>',86);function q(B,R){const c=a("router-link"),d=a("ExternalLinkIcon");return t(),p("div",null,[m,e("nav",_,[e("ul",null,[e("li",null,[n(c,{to:"#engine\u4ECB\u7ECD"},{default:r(()=>[D]),_:1})]),e("li",null,[n(c,{to:"#\u6446\u8131-lxc"},{default:r(()=>[f]),_:1})]),e("li",null,[n(c,{to:"#\u6452\u5F03\u5927\u800C\u5168\u7684-docker-deamon"},{default:r(()=>[b]),_:1})]),e("li",null,[n(c,{to:"#\u5F00\u653E\u5BB9\u5668\u8BA1\u5212-oci-\u7684\u5F71\u54CD"},{default:r(()=>[C]),_:1})]),e("li",null,[n(c,{to:"#runc"},{default:r(()=>[x]),_:1})]),e("li",null,[n(c,{to:"#containerd"},{default:r(()=>[I]),_:1})]),e("li",null,[n(c,{to:"#\u542F\u52A8\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668"},{default:r(()=>[g]),_:1})]),e("li",null,[n(c,{to:"#\u8BE5\u6A21\u578B\u7684\u663E\u8457\u4F18\u52BF"},{default:r(()=>[L]),_:1})]),e("li",null,[n(c,{to:"#shim"},{default:r(()=>[O]),_:1})]),e("li",null,[n(c,{to:"#\u5728-linux-\u4E2D\u7684\u5B9E\u73B0"},{default:r(()=>[v]),_:1})]),e("li",null,[n(c,{to:"#daemon-\u7684\u4F5C\u7528"},{default:r(()=>[X]),_:1})])])]),P,N,e("p",null,[e("a",A,[E,n(d)]),T]),S])}const V=i(k,[["render",q],["__file","6.html.vue"]]);export{V as default};
