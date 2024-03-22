import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,e as n}from"./app-BgnZuos0.js";const s={},i=n(`<h1 id="汇编程序" tabindex="-1"><a class="header-anchor" href="#汇编程序"><span>汇编程序</span></a></h1><h2 id="格式" tabindex="-1"><a class="header-anchor" href="#格式"><span>格式</span></a></h2><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>data segment
...
data ends

stack segmet
...
stack ends

extra segment
...
extra ends

code segment
	assume ds:data,cs:code,ss:stack,es:extra
start:	mov ax,data
	mov ds,ax
	mov ax,stack
	mov ss,ax
	mov ax,extra
	mov ex,ax
	...
	mov ah,4ch
	INT 21H;返回操作系统
code ends
end start ;整个程序汇编结束
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="段属性" tabindex="-1"><a class="header-anchor" href="#段属性"><span>段属性</span></a></h2><p>段属性：[定位类型]、[组合类型]、[类别]</p><ul><li>定位类型：PARA、BYTE、WORD、PAGE</li><li>组合类型：NONE、PUBLIC、STACK、COMMON、MEMORY</li></ul><blockquote><p>一个程序中，至少有一个代码段</p></blockquote>`,7),d=[i];function l(r,c){return t(),a("div",null,d)}const v=e(s,[["render",l],["__file","asm-1.html.vue"]]),p=JSON.parse('{"path":"/jieben/asm-note/asm-1.html","title":"汇编程序","lang":"zh-CN","frontmatter":{"icon":"pen-to-square","date":"2024-03-20T00:00:00.000Z","category":["接本"],"tags":["asm"],"order":1,"description":"汇编程序 格式 段属性 段属性：[定位类型]、[组合类型]、[类别] 定位类型：PARA、BYTE、WORD、PAGE 组合类型：NONE、PUBLIC、STACK、COMMON、MEMORY 一个程序中，至少有一个代码段","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-hope/jieben/asm-note/asm-1.html"}],["meta",{"property":"og:site_name","content":"阿Q的博客"}],["meta",{"property":"og:title","content":"汇编程序"}],["meta",{"property":"og:description","content":"汇编程序 格式 段属性 段属性：[定位类型]、[组合类型]、[类别] 定位类型：PARA、BYTE、WORD、PAGE 组合类型：NONE、PUBLIC、STACK、COMMON、MEMORY 一个程序中，至少有一个代码段"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T03:51:20.000Z"}],["meta",{"property":"article:author","content":"Qiuliw"}],["meta",{"property":"article:tag","content":"asm"}],["meta",{"property":"article:published_time","content":"2024-03-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T03:51:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"汇编程序\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-20T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T03:51:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Qiuliw\\",\\"url\\":\\"https://www.github.io/qiuliw\\"}]}"]]},"headers":[{"level":2,"title":"格式","slug":"格式","link":"#格式","children":[]},{"level":2,"title":"段属性","slug":"段属性","link":"#段属性","children":[]}],"git":{"createdTime":1710993080000,"updatedTime":1710993080000,"contributors":[{"name":"qiuliw","email":"1807191473@qq.com","commits":1}]},"readingTime":{"minutes":0.46,"words":137},"filePathRelative":"jieben/asm-note/asm-1.md","localizedDate":"2024年3月20日","excerpt":"\\n<h2>格式</h2>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>data segment\\n...\\ndata ends\\n\\nstack segmet\\n...\\nstack ends\\n\\nextra segment\\n...\\nextra ends\\n\\ncode segment\\n\\tassume ds:data,cs:code,ss:stack,es:extra\\nstart:\\tmov ax,data\\n\\tmov ds,ax\\n\\tmov ax,stack\\n\\tmov ss,ax\\n\\tmov ax,extra\\n\\tmov ex,ax\\n\\t...\\n\\tmov ah,4ch\\n\\tINT 21H;返回操作系统\\ncode ends\\nend start ;整个程序汇编结束\\n</code></pre></div>","autoDesc":true}');export{v as comp,p as data};
