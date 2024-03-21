import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as n,c as i,e as s}from"./app-jG9re2PU.js";const a={},d=s(`<h1 id="程序结构" tabindex="-1"><a class="header-anchor" href="#程序结构"><span>程序结构</span></a></h1><h2 id="顺序结构" tabindex="-1"><a class="header-anchor" href="#顺序结构"><span>顺序结构</span></a></h2><p>例：屏幕显示字符串“helloworld” $代表结束</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>data segment
	string db &#39;helloworld&#39;,&#39;$&#39;
data ends
code segment
	assume ds:data,cs:code
start:	mov ax,data
	mov ds,ax
	lea dx,string
	mov ah,09h
	int 21h         ;显示字符串
	mov ah,4ch
	int 21h		;返回dos系统
code ends
	end start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：从键盘接受的小写字母转换为大写字母，并屏幕显示</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>code segment
	assume cs:code
start:	mov ah,01h
	int 21h
	sub al,20h
	mov dl,al
	mov ah,02h
	int 21h
	mov ah,4ch
	int 21h
code ends
	end start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构"><span>分支结构</span></a></h2><p>例：键盘接受小写字母转换成大写字母，若输入的不是小写字母，则结束</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>code segment
	assume cs:code
start:	mov ah,01h
	int 21h
	cmp al,&#39;a&#39;
	JB L1
	cmp al,&#39;z&#39;
	JA L1
	SUB AL,20H
	MOV DL,AL
	MOV AH,02H
	INT 21H
    L1:	MOV AH,4CH
	INT 21H
code ends
	end start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例：内存数据段buf为首地址的10个有符号字节数，求最小数，并存入MIN单元</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>data segment
    buf DB -1,2,3,4,-5,6,7,8,9,10
    MIN DB ?
data ends

code segment
    assume ds:data,cs:code
start:
    mov AX,data
    MOV DS,AX
    lea BX,buf
    mov CX,9
    mov AL,[BX]
L2: INC BX
    CMP AL,[BX]
    JLE L1
    mov AL,[BX]
L1: loop L2
    MOV MIN,AL
    MOV AH,4ch
    INT 21H
code ends
    end start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构"><span>循环结构</span></a></h2><p>编程实现2+4+6····+100累加和，并存入s单元</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>data segment
    S dw ?
data ends
code segment
start:
    assume ds:data,cs:code   
    mov ax,data
    mov ds,AX
    mov ax,0
    mov dx,0
    mov cx,50
L1: add dx,2
    add ax,dx
    loop L1
    mov S,ax 
    lea dx,S
    MOV AH,4ch
    INT 21h
code ends
end start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="汇编调试" tabindex="-1"><a class="header-anchor" href="#汇编调试"><span>汇编调试</span></a></h2><ol><li><p>编辑、源文件、扩展名.asm</p></li><li><p>.sam -masm.exe/汇编程序-.obj</p></li><li><p>.obj link/链接程序- .exe</p></li><li><p>运行 .exe</p></li><li><p>调试 Debug.exe</p><p>-R：显示寄存器<br> -D：显示内存区<br> -U：反汇编<br> -Q：退出调试程序</p></li></ol><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>debug

-r：可以查看，改变寄存器中的内容

-d：可以查看内存中的内容

-u：可以将 内存中的机器指令翻译成汇编指令

-a：可以以汇编指令格式在内存中写入一条汇编指令

-t：执行当前cs:ip所指向的机器指令

-e：可以改写内存中的内容
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="练习" tabindex="-1"><a class="header-anchor" href="#练习"><span>练习</span></a></h2><p>阅读程序回答问题</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AL,06h
SHL AL,01H
MOV BL,AL
MOV CL,2
SHL AL,CL
ADD AL,BL
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>SHL:逻辑左移</p><ol><li>执行程序段后，本程序功能：AL扩大10倍（AL*2 *4+AL *2）</li><li>执行后，AL=60(3CH)</li></ol><p>例，设DX=5678h</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV CL,8
ROR DX,CL
AND DX,0FFH
CMP DX,56H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>ROR:循环右移</p><p>执行上述程序后，DX=0056H,ZF=11</p>`,26),l=[d];function t(v,r){return n(),i("div",null,l)}const u=e(a,[["render",t],["__file","asm-3.html.vue"]]),b=JSON.parse(`{"path":"/jieben/asm-note/asm-3.html","title":"程序结构","lang":"zh-CN","frontmatter":{"date":"2024-03-21T00:00:00.000Z","icon":"pen-to-square","category":["接本"],"tags":["asm"],"order":3,"description":"程序结构 顺序结构 例：屏幕显示字符串“helloworld” $代表结束 例：从键盘接受的小写字母转换为大写字母，并屏幕显示 分支结构 例：键盘接受小写字母转换成大写字母，若输入的不是小写字母，则结束 例：内存数据段buf为首地址的10个有符号字节数，求最小数，并存入MIN单元 循环结构 编程实现2+4+6····+100累加和，并存入s单元 汇编调...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-hope/jieben/asm-note/asm-3.html"}],["meta",{"property":"og:site_name","content":"Q的博客"}],["meta",{"property":"og:title","content":"程序结构"}],["meta",{"property":"og:description","content":"程序结构 顺序结构 例：屏幕显示字符串“helloworld” $代表结束 例：从键盘接受的小写字母转换为大写字母，并屏幕显示 分支结构 例：键盘接受小写字母转换成大写字母，若输入的不是小写字母，则结束 例：内存数据段buf为首地址的10个有符号字节数，求最小数，并存入MIN单元 循环结构 编程实现2+4+6····+100累加和，并存入s单元 汇编调..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T03:51:20.000Z"}],["meta",{"property":"article:author","content":"Qiuliw"}],["meta",{"property":"article:tag","content":"asm"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T03:51:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"程序结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T03:51:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Qiuliw\\",\\"url\\":\\"https://www.github.io/qiuliw\\"}]}"]]},"headers":[{"level":2,"title":"顺序结构","slug":"顺序结构","link":"#顺序结构","children":[]},{"level":2,"title":"分支结构","slug":"分支结构","link":"#分支结构","children":[]},{"level":2,"title":"循环结构","slug":"循环结构","link":"#循环结构","children":[]},{"level":2,"title":"汇编调试","slug":"汇编调试","link":"#汇编调试","children":[]},{"level":2,"title":"练习","slug":"练习","link":"#练习","children":[]}],"git":{"createdTime":1710993080000,"updatedTime":1710993080000,"contributors":[{"name":"qiuliw","email":"1807191473@qq.com","commits":1}]},"readingTime":{"minutes":2.13,"words":639},"filePathRelative":"jieben/asm-note/asm-3.md","localizedDate":"2024年3月21日","excerpt":"\\n<h2>顺序结构</h2>\\n<p>例：屏幕显示字符串“helloworld”   $代表结束</p>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>data segment\\n\\tstring db 'helloworld','$'\\ndata ends\\ncode segment\\n\\tassume ds:data,cs:code\\nstart:\\tmov ax,data\\n\\tmov ds,ax\\n\\tlea dx,string\\n\\tmov ah,09h\\n\\tint 21h         ;显示字符串\\n\\tmov ah,4ch\\n\\tint 21h\\t\\t;返回dos系统\\ncode ends\\n\\tend start\\n</code></pre></div>","autoDesc":true}`);export{u as comp,b as data};
