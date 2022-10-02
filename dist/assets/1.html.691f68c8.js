import{_ as n,r as d,o as s,c as i,a as e,b as c,e as t,d as o}from"./app.d316fad4.js";const a={},h=t('<h1 id="docker\u6982\u8FF0" tabindex="-1"><a class="header-anchor" href="#docker\u6982\u8FF0" aria-hidden="true">#</a> Docker\u6982\u8FF0</h1><p>[toc]</p><h2 id="\u{1F60E}docker\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u{1F60E}docker\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u{1F60E}docker\u662F\u4EC0\u4E48\uFF1F\uFF1F\uFF1F</h2><p>Docker\u662F\u4E00\u4E2A\u7528\u4E8E\u5F00\u53D1\uFF0C\u4EA4\u4ED8\u548C\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u7684\u5F00\u653E\u5E73\u53F0\u3002Docker\u4F7F\u60A8\u80FD\u591F\u5C06\u5E94\u7528\u7A0B\u5E8F\u4E0E\u57FA\u7840\u67B6\u6784\u5206\u5F00\uFF0C\u4ECE\u800C\u53EF\u4EE5\u5FEB\u901F\u4EA4\u4ED8\u8F6F\u4EF6\u3002\u501F\u52A9Docker\uFF0C\u60A8\u53EF\u4EE5\u4EE5\u4E0E\u7BA1\u7406\u5E94\u7528\u7A0B\u5E8F\u76F8\u540C\u7684\u65B9\u5F0F\u6765\u7BA1\u7406\u57FA\u7840\u67B6\u6784\u3002\u901A\u8FC7\u5229\u7528Docker\u7684\u5FEB\u901F\u4EA4\u4ED8\uFF0C\u6D4B\u8BD5\u548C\u90E8\u7F72\u4EE3\u7801\u7684\u65B9\u6CD5\uFF0C\u60A8\u53EF\u4EE5\u663E\u7740\u51CF\u5C11\u7F16\u5199\u4EE3\u7801\u548C\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u8FD0\u884C\u4EE3\u7801\u4E4B\u95F4\u7684\u5EF6\u8FDF\u3002</p><p><strong>docker\u4E4B\u6240\u4EE5\u80FD\u53D1\u5C55\u5982\u6B64\u8FC5\u901F\uFF0C\u56E0\u4E3A\u5B83\u7ED9\u51FA\u4E86\u4E00\u4E2A\u6807\u51C6\u5316\u7684\u89E3\u51B3\u65B9\u6848\u2014\u7CFB\u7EDF\u5E73\u6ED1\u79FB\u690D\uFF0C\u5BB9\u5668\u865A\u62DF\u5316\u6280\u672F</strong></p><blockquote><p>\u5373\u5C06\u5F00\u53D1\u548C\u8FD0\u7EF4\u5408\u5E76\uFF0C\u5C06\u539F\u6765100%\u80FD\u8DD1\u901A\u7684\u6E90\u7801\u914D\u7F6E\u548C\u7248\u672C\u6253\u5305\u6210\u955C\u50CF\u6587\u4EF6\uFF08\u7C7B\u4F3C\u4E8E\u865A\u62DF\u673Avm\u4F7F\u7528iso\u955C\u50CF\u6587\u4EF6\uFF0C\u867D\u7136\u662F\u5047\u7684\uFF0C\u4F46\u662F\u548C\u771F\u7684\u4E00\u6A21\u4E00\u6837\uFF09\uFF0C\u6B64\u65F6\u7528\u4E00\u79CD\u8F6F\u4EF6docker\u5F15\u64CE\u539F\u5C01\u4E0D\u52A8\u7684\u6253\u5305\u8FC7\u6765\uFF0C\u5B9E\u73B0\u8DE8\u5E73\u53F0\u4E4B\u95F4\u65E0\u7F1D\u63A5\u8F68\u3002</p></blockquote><p><strong>\u6765\u81EA\u7EF4\u57FA\u767E\u79D1\u7684\u4ECB\u7ECD\uFF1A</strong></p>',7),l=e("strong",null,"Docker",-1),_=o(" \u4F7F\u7528 "),k=e("code",null,"Google",-1),p=o(" \u516C\u53F8\u63A8\u51FA\u7684 "),u={href:"https://golang.google.cn/",target:"_blank",rel:"noopener noreferrer"},g=o("Go \u8BED\u8A00"),b=o(" \u8FDB\u884C\u5F00\u53D1\u5B9E\u73B0\uFF0C\u57FA\u4E8E "),D=e("code",null,"Linux",-1),f=o(" \u5185\u6838\u7684 "),m={href:"https://zh.wikipedia.org/wiki/Cgroups",target:"_blank",rel:"noopener noreferrer"},x=o("cgroup"),v=o("\uFF0C"),I={href:"https://en.wikipedia.org/wiki/Linux_namespaces",target:"_blank",rel:"noopener noreferrer"},w=o("namespace"),A=o("\uFF0C\u4EE5\u53CA "),C={href:"https://docs.docker.com/storage/storagedriver/overlayfs-driver/",target:"_blank",rel:"noopener noreferrer"},P=o("OverlayFS"),L=o(" \u7C7B\u7684 "),q={href:"https://en.wikipedia.org/wiki/Union_mount",target:"_blank",rel:"noopener noreferrer"},y=o("Union FS"),S=o(" \u7B49\u6280\u672F\uFF0C\u5BF9\u8FDB\u7A0B\u8FDB\u884C\u5C01\u88C5\u9694\u79BB\uFF0C\u5C5E\u4E8E "),E={href:"https://en.wikipedia.org/wiki/Operating-system-level_virtualization",target:"_blank",rel:"noopener noreferrer"},N=o("\u64CD\u4F5C\u7CFB\u7EDF\u5C42\u9762\u7684\u865A\u62DF\u5316\u6280\u672F"),V=o("\u3002\u7531\u4E8E\u9694\u79BB\u7684\u8FDB\u7A0B\u72EC\u7ACB\u4E8E\u5BBF\u4E3B\u548C\u5176\u5B83\u7684\u9694\u79BB\u7684\u8FDB\u7A0B\uFF0C\u56E0\u6B64\u4E5F\u79F0\u5176\u4E3A\u5BB9\u5668\u3002\u6700\u521D\u5B9E\u73B0\u662F\u57FA\u4E8E "),z={href:"https://linuxcontainers.org/lxc/introduction/",target:"_blank",rel:"noopener noreferrer"},B=o("LXC"),G=o("\uFF0C\u4ECE "),T=e("code",null,"0.7",-1),U=o(" \u7248\u672C\u4EE5\u540E\u5F00\u59CB\u53BB\u9664 "),X=e("code",null,"LXC",-1),F=o("\uFF0C\u8F6C\u800C\u4F7F\u7528\u81EA\u884C\u5F00\u53D1\u7684 "),H={href:"https://github.com/docker/libcontainer",target:"_blank",rel:"noopener noreferrer"},O=o("libcontainer"),R=o("\uFF0C\u4ECE "),M=e("code",null,"1.11",-1),W=o(" \u7248\u672C\u5F00\u59CB\uFF0C\u5219\u8FDB\u4E00\u6B65\u6F14\u8FDB\u4E3A\u4F7F\u7528 "),$={href:"https://github.com/opencontainers/runc",target:"_blank",rel:"noopener noreferrer"},j=o("runC"),J=o(" \u548C "),K={href:"https://github.com/containerd/containerd",target:"_blank",rel:"noopener noreferrer"},Q=o("containerd"),Y=o("\u3002"),Z=t(`<h2 id="docker\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#docker\u5E73\u53F0" aria-hidden="true">#</a> Docker\u5E73\u53F0</h2><p>Docker\u63D0\u4F9B\u4E86\u5728\u677E\u6563\u9694\u79BB\u7684\u73AF\u5883\uFF08\u79F0\u4E3A\u5BB9\u5668\uFF09\u4E2D\u6253\u5305\u548C\u8FD0\u884C\u5E94\u7528\u7A0B\u5E8F\u7684\u529F\u80FD\u3002\u9694\u79BB\u548C\u5B89\u5168\u6027\u4F7F\u60A8\u53EF\u4EE5\u5728\u7ED9\u5B9A\u4E3B\u673A\u4E0A\u540C\u65F6\u8FD0\u884C\u591A\u4E2A\u5BB9\u5668\u3002\u5BB9\u5668\u662F\u8F7B\u91CF\u7EA7\u7684\uFF0C\u5305\u542B\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u6240\u6709\u5185\u5BB9\uFF0C\u56E0\u6B64\u60A8\u65E0\u9700\u4F9D\u8D56\u4E3B\u673A\u4E0A\u5F53\u524D\u5B89\u88C5\u7684\u5185\u5BB9\u3002\u60A8\u53EF\u4EE5\u5728\u5DE5\u4F5C\u65F6\u8F7B\u677E\u5171\u4EAB\u5BB9\u5668\uFF0C\u5E76\u786E\u4FDD\u4E0E\u60A8\u5171\u4EAB\u7684\u6BCF\u4E2A\u4EBA\u90FD\u80FD\u4EE5\u76F8\u540C\u7684\u65B9\u5F0F\u83B7\u5F97\u76F8\u540C\u7684\u5BB9\u5668\u3002</p><p>Docker\u63D0\u4F9B\u4E86\u5DE5\u5177\u548C\u5E73\u53F0\u6765\u7BA1\u7406\u5BB9\u5668\u7684\u751F\u547D\u5468\u671F\uFF1A</p><ul><li>\u4F7F\u7528\u5BB9\u5668\u5F00\u53D1\u5E94\u7528\u7A0B\u5E8F\u53CA\u5176\u652F\u6301\u7EC4\u4EF6\u3002</li><li>\u5BB9\u5668\u6210\u4E3A\u5206\u53D1\u548C\u6D4B\u8BD5\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u5355\u5143\u3002</li><li>\u51C6\u5907\u5C31\u7EEA\u540E\uFF0C\u53EF\u4EE5\u5C06\u5E94\u7528\u7A0B\u5E8F\u4F5C\u4E3A\u5BB9\u5668\u6216\u534F\u8C03\u670D\u52A1\u90E8\u7F72\u5230\u751F\u4EA7\u73AF\u5883\u4E2D\u3002\u65E0\u8BBA\u60A8\u7684\u751F\u4EA7\u73AF\u5883\u662F\u672C\u5730\u6570\u636E\u4E2D\u5FC3\uFF0C\u4E91\u63D0\u4F9B\u5546\u8FD8\u662F\u4E24\u8005\u7684\u6DF7\u5408\uFF0C\u5176\u5DE5\u4F5C\u539F\u7406\u90FD\u76F8\u540C\u3002</li></ul><h2 id="\u6211\u53EF\u4EE5\u5C06docker\u7528\u4E8E\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u6211\u53EF\u4EE5\u5C06docker\u7528\u4E8E\u4EC0\u4E48" aria-hidden="true">#</a> \u6211\u53EF\u4EE5\u5C06Docker\u7528\u4E8E\u4EC0\u4E48\uFF1F</h2><p><strong>\u5FEB\u901F\uFF0C\u4E00\u81F4\u5730\u4EA4\u4ED8\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\uFF08\u6709\u591A\u5FEB\u{1F60D} \u8BD5\u8BD5\u5C31\u901D\u4E16\uFF09</strong></p><p><strong>Docker\u901A\u8FC7\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u4F7F\u7528\u63D0\u4F9B\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u7684\u672C\u5730\u5BB9\u5668\u5728\u6807\u51C6\u5316\u73AF\u5883\u4E2D\u5DE5\u4F5C\uFF0C\u4ECE\u800C\u7B80\u5316\u4E86\u5F00\u53D1\u751F\u547D\u5468\u671F\u3002\u5BB9\u5668\u975E\u5E38\u9002\u5408\u8FDB\u884C\u6301\u7EED\u96C6\u6210\u548C\u6301\u7EED\u4EA4\u4ED8\uFF08CI / CD\uFF09\u5DE5\u4F5C\u6D41\u3002</strong></p><p>\u8003\u8651\u4EE5\u4E0B\u793A\u4F8B\u65B9\u6848\uFF1A</p><ul><li>\u60A8\u7684\u5F00\u53D1\u4EBA\u5458\u5728\u672C\u5730\u7F16\u5199\u4EE3\u7801\uFF0C\u5E76\u4F7F\u7528Docker\u5BB9\u5668\u4E0E\u540C\u4E8B\u5171\u4EAB\u4ED6\u4EEC\u7684\u5DE5\u4F5C\u3002</li><li>\u4ED6\u4EEC\u4F7F\u7528Docker\u5C06\u5176\u5E94\u7528\u7A0B\u5E8F\u63A8\u9001\u5230\u6D4B\u8BD5\u73AF\u5883\u4E2D\uFF0C\u5E76\u6267\u884C\u81EA\u52A8\u548C\u624B\u52A8\u6D4B\u8BD5\u3002</li><li>\u5F53\u5F00\u53D1\u4EBA\u5458\u53D1\u73B0\u9519\u8BEF\u65F6\uFF0C\u4ED6\u4EEC\u53EF\u4EE5\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u5BF9\u5176\u8FDB\u884C\u4FEE\u590D\uFF0C\u7136\u540E\u5C06\u5176\u91CD\u65B0\u90E8\u7F72\u5230\u6D4B\u8BD5\u73AF\u5883\u4E2D\u4EE5\u8FDB\u884C\u6D4B\u8BD5\u548C\u9A8C\u8BC1\u3002</li><li>\u6D4B\u8BD5\u5B8C\u6210\u540E\uFF0C\u5C06\u4FEE\u8865\u7A0B\u5E8F\u63A8\u9001\u7ED9\u751F\u4EA7\u73AF\u5883\u5C31\u50CF\u5C06\u66F4\u65B0\u7684\u6620\u50CF\u63A8\u9001\u5230\u751F\u4EA7\u73AF\u5883\u4E00\u6837\u7B80\u5355\u3002</li></ul><p><strong>\u54CD\u5E94\u5F0F\u90E8\u7F72\u548C\u6269\u5C55</strong></p><p>Docker\u7684\u57FA\u4E8E\u5BB9\u5668\u7684\u5E73\u53F0\u5141\u8BB8\u9AD8\u5EA6\u53EF\u79FB\u690D\u7684\u5DE5\u4F5C\u8D1F\u8F7D\u3002Docker\u5BB9\u5668\u53EF\u4EE5\u5728\u5F00\u53D1\u4EBA\u5458\u7684\u672C\u5730\u7B14\u8BB0\u672C\u7535\u8111\u4E0A\uFF0C\u6570\u636E\u4E2D\u5FC3\u5185\u7684\u7269\u7406\u6216\u865A\u62DF\u673A\u4E0A\uFF0C\u4E91\u63D0\u4F9B\u5546\u4E0A\u6216\u6DF7\u5408\u73AF\u5883\u4E2D\u8FD0\u884C\u3002</p><p>Docker\u7684\u53EF\u79FB\u690D\u6027\u548C\u8F7B\u91CF\u7EA7\u7684\u7279\u6027\u8FD8\u4F7F\u60A8\u53EF\u4EE5\u8F7B\u677E\u5730\u52A8\u6001\u7BA1\u7406\u5DE5\u4F5C\u8D1F\u8F7D\uFF0C\u5E76\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u6307\u793A\u5B9E\u65F6\u6269\u5C55\u6216\u62C6\u9664\u5E94\u7528\u7A0B\u5E8F\u548C\u670D\u52A1\u3002</p><p><strong>\u5728\u76F8\u540C\u7684\u786C\u4EF6\u4E0A\u8FD0\u884C\u66F4\u591A\u7684\u5DE5\u4F5C\u8D1F\u8F7D</strong></p><p>Docker\u8F7B\u5DE7\u5FEB\u901F\u3002\u5B83\u4E3A\u57FA\u4E8E\u865A\u62DF\u673A\u7BA1\u7406\u7A0B\u5E8F\u7684\u865A\u62DF\u673A\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u884C\u7684\uFF0C\u5177\u6709\u6210\u672C\u6548\u76CA\u7684\u66FF\u4EE3\u65B9\u6848\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5229\u7528\u66F4\u591A\u7684\u8BA1\u7B97\u80FD\u529B\u6765\u5B9E\u73B0\u4E1A\u52A1\u76EE\u6807\u3002Docker\u975E\u5E38\u9002\u5408\u9AD8\u5BC6\u5EA6\u73AF\u5883\u4EE5\u53CA\u4E2D\u5C0F\u578B\u90E8\u7F72\uFF0C\u800C\u60A8\u9700\u8981\u7528\u66F4\u5C11\u7684\u8D44\u6E90\u505A\u66F4\u591A\u7684\u4E8B\u60C5\u3002</p><h2 id="docker\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#docker\u67B6\u6784" aria-hidden="true">#</a> Docker\u67B6\u6784</h2><p>Docker\u4F7F\u7528\u5BA2\u6237\u7AEF-\u670D\u52A1\u5668\u67B6\u6784\uFF08C/S\u67B6\u6784\uFF09\u3002Docker<em>\u5BA2\u6237\u7AEF</em>\u4E0EDocker<strong>\u5B88\u62A4\u8FDB\u7A0B</strong>\u8FDB\u884C\u5BF9\u8BDD\uFF0C\u8BE5<strong>\u5B88\u62A4\u8FDB\u7A0B</strong>\u5B8C\u6210\u4E86\u6784\u5EFA\uFF0C\u8FD0\u884C\u548C\u5206\u53D1Docker\u5BB9\u5668\u7684\u7E41\u91CD\u5DE5\u4F5C\u3002Docker\u5BA2\u6237\u7AEF\u548C\u5B88\u62A4\u7A0B\u5E8F<em>\u53EF\u4EE5</em> \u5728\u540C\u4E00\u7CFB\u7EDF\u4E0A\u8FD0\u884C\uFF0C\u6216\u8005\u60A8\u53EF\u4EE5\u5C06Docker\u5BA2\u6237\u7AEF\u8FDE\u63A5\u5230\u8FDC\u7A0BDocker\u5B88\u62A4\u7A0B\u5E8F\u3002Docker\u5BA2\u6237\u7AEF\u548C\u5B88\u62A4\u7A0B\u5E8F\u5728UNIX\u5957\u63A5\u5B57\u6216\u7F51\u7EDC\u63A5\u53E3\u4E0A\u4F7F\u7528<strong>REST API</strong>\u8FDB\u884C\u901A\u4FE1\u3002\u53E6\u4E00\u4E2ADocker\u5BA2\u6237\u7AEF\u662FDocker Compose\uFF0C\u5B83\u4F7F\u60A8\u53EF\u4EE5\u5904\u7406\u7531\u4E00\u7EC4\u5BB9\u5668\u7EC4\u6210\u7684\u5E94\u7528\u7A0B\u5E8F\u3002</p><blockquote><p>\u5173\u4E8EPESTAPI\u597D\u50CF\u662F\u5728\u7F51\u8DEF\u91CC\u9762\u6709\u8BB2</p></blockquote><p><img src="https://dockerdocs.cn/images/architecture.svg" alt="Docker\u67B6\u6784\u56FE"></p><blockquote><p>client\u662F\u5BA2\u6237\u7AEF\uFF0Cdocker_host\u662F\u4E00\u4E2A\u5F15\u64CE\uFF0C\u5982\u679C\u662F\u6709\u955C\u50CF\uFF0C\u5C31\u4F1A\u7EC4\u6210\u4E00\u4E2A\u4E2A\u670D\u52A1\u5668\u5B9E\u4F8B,\u662F\u672C\u5730\u7684\u5E93\uFF0C\u5982\u679C\u672C\u5730\u5E931\u6CA1\u6709\u7684\u8BDD\u5C31\u662F\u4ECE\u8FDC\u7A0B\u5E93registry\u4E0Azhao</p></blockquote><h3 id="docker\u5B88\u62A4\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#docker\u5B88\u62A4\u7A0B\u5E8F" aria-hidden="true">#</a> Docker\u5B88\u62A4\u7A0B\u5E8F</h3><p>Docker\u5B88\u62A4\u7A0B\u5E8F\uFF08<code>dockerd</code>\uFF09\u4FA6\u542CDocker API\u8BF7\u6C42\u5E76\u7BA1\u7406Docker\u5BF9\u8C61\uFF0C\u4F8B\u5982\u56FE\u50CF\uFF0C\u5BB9\u5668\uFF0C\u7F51\u7EDC\u548C\u5377\u3002\u5B88\u62A4\u7A0B\u5E8F\u8FD8\u53EF\u4EE5\u4E0E\u5176\u4ED6\u5B88\u62A4\u7A0B\u5E8F\u901A\u4FE1\u4EE5\u7BA1\u7406Docker\u670D\u52A1\u3002</p><h3 id="docker\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#docker\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> Docker\u5BA2\u6237\u7AEF</h3><p>Docker\u5BA2\u6237\u7AEF\uFF08<code>docker</code>\uFF09\u662F\u8BB8\u591ADocker\u7528\u6237\u4E0EDocker\u4EA4\u4E92\u7684\u4E3B\u8981\u65B9\u5F0F\u3002\u5F53\u60A8\u4F7F\u7528\u8BF8\u5982\u4E4B\u7C7B\u7684\u547D\u4EE4\u65F6<code>docker run</code>\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u5C06\u8FD9\u4E9B\u547D\u4EE4\u53D1\u9001\u5230<code>dockerd</code>\uFF0C\u4EE5\u6267\u884C\u8FD9\u4E9B\u547D\u4EE4\u3002\u8BE5<code>docker</code>\u547D\u4EE4\u4F7F\u7528Docker API\u3002Docker\u5BA2\u6237\u7AEF\u53EF\u4EE5\u4E0E\u591A\u4E2A\u5B88\u62A4\u7A0B\u5E8F\u901A\u4FE1\u3002</p><h3 id="docker\u6CE8\u518C\u8868" tabindex="-1"><a class="header-anchor" href="#docker\u6CE8\u518C\u8868" aria-hidden="true">#</a> Docker\u6CE8\u518C\u8868</h3><p>Docker\u6CE8\u518C\u8868\u5B58\u50A8Docker\u6620\u50CF\u3002<strong>Docker Hub\u662F\u4EFB\u4F55\u4EBA\u90FD\u53EF\u4EE5\u4F7F\u7528\u7684\u516C\u5171\u6CE8\u518C\u8868</strong>\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CDocker\u5DF2\u914D\u7F6E\u4E3A\u5728Docker Hub\u4E0A\u67E5\u627E\u6620\u50CF\u3002\u60A8\u751A\u81F3\u53EF\u4EE5\u8FD0\u884C\u81EA\u5DF1\u7684\u79C1\u4EBA\u6CE8\u518C\u8868\u3002</p><p>\u4F7F\u7528<code>docker pull</code>\u6216<code>docker run</code>\u547D\u4EE4\u65F6\uFF0C\u5C06\u4ECE\u914D\u7F6E\u7684\u6CE8\u518C\u8868\u4E2D\u63D0\u53D6\u6240\u9700\u7684\u56FE\u50CF\u3002\u4F7F\u7528\u8BE5<code>docker push</code>\u547D\u4EE4\u65F6\uFF0C\u4F1A\u5C06\u6620\u50CF\u63A8\u9001\u5230\u5DF2\u914D\u7F6E\u7684\u6CE8\u518C\u8868\u3002</p><h3 id="docker\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#docker\u5BF9\u8C61" aria-hidden="true">#</a> Docker\u5BF9\u8C61</h3><p>\u4F7F\u7528Docker\u65F6\uFF0C\u60A8\u6B63\u5728\u521B\u5EFA\u548C\u4F7F\u7528\u6620\u50CF\uFF0C\u5BB9\u5668\uFF0C\u7F51\u7EDC\uFF0C\u5377\uFF0C\u63D2\u4EF6\u548C\u5176\u4ED6\u5BF9\u8C61\u3002\u672C\u8282\u662F\u5176\u4E2D\u4E00\u4E9B\u5BF9\u8C61\u7684\u7B80\u8981\u6982\u8FF0\u3002</p><h4 id="\u56FE\u7247" tabindex="-1"><a class="header-anchor" href="#\u56FE\u7247" aria-hidden="true">#</a> \u56FE\u7247</h4><p>\u4E00\u4E2A<em>\u56FE\u50CF</em>\u662F\u7528\u4E8E\u521B\u5EFA\u4E00\u4E2A\u7801\u5934\u5DE5\u4EBA\u5BB9\u5668\u6307\u4EE4\u7684\u53EA\u8BFB\u6A21\u677F\u3002\u901A\u5E38\uFF0C\u4E00\u4E2A\u6620\u50CF<em>\u57FA\u4E8E</em>\u53E6\u4E00\u4E2A\u6620\u50CF\uFF0C\u5E76\u8FDB\u884C\u4E00\u4E9B\u5176\u4ED6\u81EA\u5B9A\u4E49\u3002\u4F8B\u5982\uFF0C\u60A8\u53EF\u4EE5\u57FA\u4E8E\u8BE5<code>ubuntu</code> \u6620\u50CF\u6784\u5EFA\u6620\u50CF\uFF0C\u4F46\u5B89\u88C5Apache Web\u670D\u52A1\u5668\u548C\u60A8\u7684\u5E94\u7528\u7A0B\u5E8F\uFF0C\u4EE5\u53CA\u8FD0\u884C\u8BE5\u5E94\u7528\u7A0B\u5E8F\u6240\u9700\u7684\u914D\u7F6E\u8BE6\u7EC6\u4FE1\u606F\u3002</p><p>\u60A8\u53EF\u4EE5\u521B\u5EFA\u81EA\u5DF1\u7684\u56FE\u50CF\uFF0C\u4E5F\u53EF\u4EE5\u4EC5\u4F7F\u7528\u5176\u4ED6\u4EBA\u521B\u5EFA\u5E76\u5728\u6CE8\u518C\u8868\u4E2D\u53D1\u5E03\u7684\u56FE\u50CF\u3002\u8981\u6784\u5EFA\u81EA\u5DF1\u7684\u6620\u50CF\uFF0C\u60A8\u53EF\u4EE5 \u4F7F\u7528\u7B80\u5355\u7684\u8BED\u6CD5\u521B\u5EFA\u4E00\u4E2A<em>Dockerfile</em>\uFF0C\u4EE5\u5B9A\u4E49\u521B\u5EFA\u6620\u50CF\u5E76\u8FD0\u884C\u5B83\u6240\u9700\u7684\u6B65\u9AA4\u3002Dockerfile\u4E2D\u7684\u6BCF\u6761\u6307\u4EE4\u90FD\u4F1A\u5728\u6620\u50CF\u4E2D\u521B\u5EFA\u4E00\u4E2A\u5C42\u3002\u5F53\u60A8\u66F4\u6539Dockerfile\u5E76\u91CD\u5EFA\u6620\u50CF\u65F6\uFF0C\u4EC5\u91CD\u5EFA\u90A3\u4E9B\u5DF2\u66F4\u6539\u7684\u5C42\u3002\u4E0E\u5176\u4ED6\u865A\u62DF\u5316\u6280\u672F\u76F8\u6BD4\uFF0C\u8FD9\u662F\u4F7F\u6620\u50CF\u5982\u6B64\u8F7B\u5DE7\uFF0C\u5C0F\u578B\u548C\u5FEB\u901F\u7684\u90E8\u5206\u539F\u56E0\u3002</p><h4 id="\u8D27\u67DC" tabindex="-1"><a class="header-anchor" href="#\u8D27\u67DC" aria-hidden="true">#</a> \u8D27\u67DC</h4><p>\u5BB9\u5668\u662F\u56FE\u50CF\u7684\u53EF\u8FD0\u884C\u5B9E\u4F8B\u3002\u60A8\u53EF\u4EE5\u4F7F\u7528Docker API\u6216CLI\u521B\u5EFA\uFF0C\u542F\u52A8\uFF0C\u505C\u6B62\uFF0C\u79FB\u52A8\u6216\u5220\u9664\u5BB9\u5668\u3002\u60A8\u53EF\u4EE5\u5C06\u5BB9\u5668\u8FDE\u63A5\u5230\u4E00\u4E2A\u6216\u591A\u4E2A\u7F51\u7EDC\uFF0C\u5C06\u5B58\u50A8\u8FDE\u63A5\u5230\u5B83\uFF0C\u751A\u81F3\u6839\u636E\u5176\u5F53\u524D\u72B6\u6001\u521B\u5EFA\u4E00\u4E2A\u65B0\u6620\u50CF\u3002</p><p>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BB9\u5668\u4E0E\u5176\u4ED6\u5BB9\u5668\u53CA\u5176\u4E3B\u673A\u4E4B\u95F4\u7684\u9694\u79BB\u5EA6\u76F8\u5BF9\u8F83\u9AD8\u3002\u60A8\u53EF\u4EE5\u63A7\u5236\u5BB9\u5668\u7684\u7F51\u7EDC\uFF0C\u5B58\u50A8\u6216\u5176\u4ED6\u5E95\u5C42\u5B50\u7CFB\u7EDF\u4E0E\u5176\u4ED6\u5BB9\u5668\u6216\u4E0E\u4E3B\u673A\u7684\u9694\u79BB\u7A0B\u5EA6\u3002</p><p>\u5BB9\u5668\u7531\u5176\u6620\u50CF\u4EE5\u53CA\u5728\u521B\u5EFA\u6216\u542F\u52A8\u65F6\u4E3A\u5176\u63D0\u4F9B\u7684\u4EFB\u4F55\u914D\u7F6E\u9009\u9879\u5B9A\u4E49\u3002\u5220\u9664\u5BB9\u5668\u540E\uFF0C\u672A\u5B58\u50A8\u5728\u6301\u4E45\u6027\u5B58\u50A8\u4E2D\u7684\u72B6\u6001\u66F4\u6539\u5C06\u6D88\u5931\u3002</p><h3 id="\u793A\u4F8Bdocker-run\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8Bdocker-run\u547D\u4EE4" aria-hidden="true">#</a> \u793A\u4F8B<code>docker run</code>\u547D\u4EE4</h3><p>\u4EE5\u4E0B\u547D\u4EE4\u8FD0\u884C\u4E00\u4E2A<code>ubuntu</code>\u5BB9\u5668\uFF0C\u4EE5\u4EA4\u4E92\u65B9\u5F0F\u9644\u52A0\u5230\u672C\u5730\u547D\u4EE4\u884C\u4F1A\u8BDD\uFF0C\u7136\u540E\u8FD0\u884C<code>/bin/bash</code>\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ docker run -i -t ubuntu /bin/bash    #-it
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u5F53\u60A8\u8FD0\u884C\u6B64\u547D\u4EE4\u65F6\uFF0C\u4F1A\u53D1\u751F\u4EE5\u4E0B\u60C5\u51B5\uFF08\u5047\u8BBE\u60A8\u4F7F\u7528\u7684\u662F\u9ED8\u8BA4\u6CE8\u518C\u8868\u914D\u7F6E\uFF09\uFF1A</strong></p><ol><li>\u5982\u679C\u60A8\u5728<code>ubuntu</code>\u672C\u5730\u6CA1\u6709\u8BE5\u6620\u50CF\uFF0C\u5219Docker\u4F1A\u5C06\u5176\u4ECE\u5DF2\u914D\u7F6E\u7684\u6CE8\u518C\u8868\u4E2D\u62C9\u51FA\uFF0C\u5C31\u50CF\u60A8\u5DF2<code>docker pull ubuntu</code>\u624B\u52A8\u8FD0\u884C\u4E00\u6837\u3002</li><li>Docker\u4F1A\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BB9\u5668\uFF0C\u5C31\u50CF\u60A8\u5DF2<code>docker container create</code> \u624B\u52A8\u8FD0\u884C\u547D\u4EE4\u4E00\u6837\u3002</li><li>Docker\u5C06\u4E00\u4E2A\u8BFB\u5199\u6587\u4EF6\u7CFB\u7EDF\u5206\u914D\u7ED9\u5BB9\u5668\uFF0C\u4F5C\u4E3A\u5176\u6700\u540E\u4E00\u5C42\u3002\u8FD9\u5141\u8BB8\u8FD0\u884C\u4E2D\u7684\u5BB9\u5668\u5728\u5176\u672C\u5730\u6587\u4EF6\u7CFB\u7EDF\u4E2D\u521B\u5EFA\u6216\u4FEE\u6539\u6587\u4EF6\u548C\u76EE\u5F55\u3002</li><li>Docker\u521B\u5EFA\u4E86\u4E00\u4E2A\u7F51\u7EDC\u63A5\u53E3\uFF0C\u5C06\u5BB9\u5668\u8FDE\u63A5\u5230\u9ED8\u8BA4\u7F51\u7EDC\uFF0C\u56E0\u4E3A\u60A8\u6CA1\u6709\u6307\u5B9A\u4EFB\u4F55\u7F51\u7EDC\u9009\u9879\u3002\u8FD9\u5305\u62EC\u4E3A\u5BB9\u5668\u5206\u914DIP\u5730\u5740\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u5BB9\u5668\u53EF\u4EE5\u4F7F\u7528\u4E3B\u673A\u7684\u7F51\u7EDC\u8FDE\u63A5\u8FDE\u63A5\u5230\u5916\u90E8\u7F51\u7EDC\u3002</li><li>Docker\u542F-\u52A8\u5BB9\u5668\u5E76\u6267\u884C<code>/bin/bash</code>\u3002\u7531\u4E8E\u5BB9\u5668\u662F\u4EA4\u4E92\u5F0F\u8FD0\u884C\u7684\uFF0C\u5E76\u4E14\u5DF2\u9644\u52A0\u5230\u60A8\u7684\u7EC8\u7AEF\uFF08\u7531\u4E8E<code>-i</code>\u548C<code>-t</code> \u6807\u5FD7\uFF09\uFF0C\u56E0\u6B64\u60A8\u53EF\u4EE5\u5728\u8F93\u51FA\u8BB0\u5F55\u5230\u7EC8\u7AEF\u65F6\u4F7F\u7528\u952E\u76D8\u63D0\u4F9B\u8F93\u5165\u3002</li><li>\u5F53\u60A8\u952E\u5165<code>exit</code>\u4EE5\u7EC8\u6B62<code>/bin/bash</code>\u547D\u4EE4\u65F6\uFF0C\u5BB9\u5668\u5C06\u505C\u6B62\u4F46\u4E0D\u4F1A\u88AB\u5220\u9664\u3002\u60A8\u53EF\u4EE5\u91CD\u65B0\u542F\u52A8\u6216\u5220\u9664\u5B83\u3002</li></ol><h2 id="\u5E95\u5C42\u6280\u672F" tabindex="-1"><a class="header-anchor" href="#\u5E95\u5C42\u6280\u672F" aria-hidden="true">#</a> \u5E95\u5C42\u6280\u672F</h2>`,41),ee=o("Docker\u7528"),oe={href:"https://golang.org/",target:"_blank",rel:"noopener noreferrer"},re=o("Go\u7F16\u7A0B\u8BED\u8A00"),ce=o("\u7F16\u5199\uFF0C**\u5E76\u5229\u7528Linux\u5185\u6838\u7684\u591A\u79CD\u529F\u80FD\u6765\u4EA4\u4ED8\u5176\u529F\u80FD\u3002**Docker\u4F7F\u7528\u4E00\u79CD\u79F0\u4E3A\u7684\u6280\u672F"),te=e("code",null,"namespaces",-1),ne=o("\u6765\u63D0\u4F9B\u79F0\u4E3A\u5BB9\u5668\u7684\u9694\u79BB\u5DE5\u4F5C\u533A\u3002\u8FD0\u884C\u5BB9\u5668\u65F6\uFF0CDocker\u4F1A\u4E3A\u8BE5\u5BB9\u5668\u521B\u5EFA\u4E00\u7EC4 "),de=e("em",null,"\u540D\u79F0\u7A7A\u95F4",-1),se=o("\u3002"),ie=e("p",null,"\u8FD9\u4E9B\u540D\u79F0\u7A7A\u95F4\u63D0\u4F9B\u4E86\u4E00\u5C42\u9694\u79BB\u3002\u5BB9\u5668\u7684\u6BCF\u4E2A\u65B9\u9762\u90FD\u5728\u5355\u72EC\u7684\u540D\u79F0\u7A7A\u95F4\u4E2D\u8FD0\u884C\uFF0C\u5E76\u4E14\u5BF9\u5176\u7684\u8BBF\u95EE\u4EC5\u9650\u4E8E\u8BE5\u540D\u79F0\u7A7A\u95F4\u3002",-1),ae=e("p",null,"\u540E\u9762\u4F1A\u5BF9docker\u7684\u5E95\u5C42\u6E90\u7801\u8FDB\u884C\u89E3\u6790\uFF0C\u6709\u5174\u8DA3\u7684\u53EF\u4EE5\u5173\u6CE8\u6211\u7684\u535A\u5BA2",-1),he=o("[x] "),le={href:"http://nsddd.top",target:"_blank",rel:"noopener noreferrer"},_e=o("Myblog"),ke=e("h3",{id:"docker\u7684\u76EE\u6807",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#docker\u7684\u76EE\u6807","aria-hidden":"true"},"#"),o(" docker\u7684\u76EE\u6807")],-1),pe=e("p",null,[e("strong",null,"build,ship and Run Any App,Anywhere")],-1),ue=e("p",null,[e("strong",null,"\u901A\u8FC7\u5BF9\u5E94\u7528\u7EC4\u4EF6\u7684\u5C01\u88C5\u3001\u5206\u53D1\u3001\u90E8\u7F72\u3001\u8FD0\u884C\u7B49\u751F\u547D\u5468\u671F\u7684\u7BA1\u7406\uFF0C\u4F7F\u7528\u6237\u7684APP\uFF08\u6216\u8005web\u6216database\uFF09\u548C\u8FD0\u884C\u73AF\u5883\u80FD\u8FBE\u5230\u201C\u4E00\u6B21\u955C\u50CF\uFF0C\u5904\u5904\u8FD0\u884C\u201D")],-1),ge=e("p",null,"docker\u662Flinux\u5BB9\u5668\u6280\u672F\u7684\u4E00\u79CD\u5B9E\u73B0\u3002\u5B9E\u73B0\u4E86\u8DE8\u5E73\u53F0\u548C\u8DE8\u670D\u52A1\u5668\u3002",-1);function be(De,fe){const r=d("ExternalLinkIcon");return s(),i("div",null,[h,e("p",null,[l,_,k,p,e("a",u,[g,c(r)]),b,D,f,e("a",m,[x,c(r)]),v,e("a",I,[w,c(r)]),A,e("a",C,[P,c(r)]),L,e("a",q,[y,c(r)]),S,e("a",E,[N,c(r)]),V,e("a",z,[B,c(r)]),G,T,U,X,F,e("a",H,[O,c(r)]),R,M,W,e("a",$,[j,c(r)]),J,e("a",K,[Q,c(r)]),Y]),Z,e("p",null,[ee,e("a",oe,[re,c(r)]),ce,te,ne,de,se]),ie,e("blockquote",null,[ae,e("ul",null,[e("li",null,[he,e("a",le,[_e,c(r)])])])]),ke,pe,ue,ge])}const xe=n(a,[["render",be],["__file","1.html.vue"]]);export{xe as default};
