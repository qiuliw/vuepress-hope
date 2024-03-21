import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as s,e as l}from"./app-jG9re2PU.js";const i={},n=l(`<h1 id="指令" tabindex="-1"><a class="header-anchor" href="#指令"><span>指令</span></a></h1><h2 id="算数运算指令" tabindex="-1"><a class="header-anchor" href="#算数运算指令"><span>算数运算指令</span></a></h2><p>算数运算指令的执行大多对状态标志位会产生影响</p><h3 id="mov" tabindex="-1"><a class="header-anchor" href="#mov"><span>MOV</span></a></h3><div class="language-asm line-numbers-mode" data-ext="asm" data-title="asm"><pre class="language-asm"><code>MOV AX,0;AX&lt;-0
MOV指令不影响标志位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="add" tabindex="-1"><a class="header-anchor" href="#add"><span>ADD</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ADD AX,BX;AX+BX--AX
;不允许两个都是存储器操作数。如add [eax],[ebx] 这类情况是错的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对6个标志位均有影响</p><h3 id="adc" tabindex="-1"><a class="header-anchor" href="#adc"><span>ADC</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ADC AX,BX;AX=AX+BX+CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对6个标志位均有影响</p><p>ADC指令多用于多字节数相加，使用前要先将CF清0</p><h3 id="inc" tabindex="-1"><a class="header-anchor" href="#inc"><span>INC</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>INC AX;AX++
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不影响CF,常用于在程序中修改地址指针</p><p>不能是段寄存器，不能是立即数</p><p>例：求内存数据段中M1为首和M2为首的两个20字节数之和，并将结果写入M2为首的区域中</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>	LEA SI, M1
	LEA DI, M2
	MOV CX, 20
  	CLC;使CF=0
  NEXT: MOV AL, [SI] 
	ADC [DI], AL
	INC SI
	INC DI
	DEC CX
	JNZ NEXT
	HLT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="sub" tabindex="-1"><a class="header-anchor" href="#sub"><span>SUB</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>SUB AX,BX;AX=AX-BX
;不允许两个都是存储器操作数。如add [eax],[ebx] 这类情况是错的
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对6个标志位均有影响</p><h3 id="sbb" tabindex="-1"><a class="header-anchor" href="#sbb"><span>SBB</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ADC AX,BX;AX=AX-BX-CF
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对6个标志位均有影响</p><p>ADC指令多用于多字节数相减，使用前要先将CF清0</p><h3 id="dec" tabindex="-1"><a class="header-anchor" href="#dec"><span>DEC</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>DEC AX;AX--
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>除CF标志位 ，其余标志位都受影响</p><h3 id="cmp" tabindex="-1"><a class="header-anchor" href="#cmp"><span>CMP</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>CMP AX,BX;AX-BX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>指令执行的结果不影响目标操作数，仅影响标志位</p><p>用于比较两个数的大小，可作为条件转移指令转移的条件</p><h3 id="neg" tabindex="-1"><a class="header-anchor" href="#neg"><span>NEG</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>NEG AX;AX=0-AX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>影响6个标志位</p><h3 id="mul" tabindex="-1"><a class="header-anchor" href="#mul"><span>MUL</span></a></h3><p>无符号数相乘</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MUL BL;AX=BL*AL
MUL BX;(DX,AX)=BX*AX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>影响6个状态位</p><p>单操作数，隐含了被乘数（AX/AL）；src字节：AL * SRC -- AX，src字 ：AX* SRC--DX,AX</p><h3 id="div" tabindex="-1"><a class="header-anchor" href="#div"><span>DIV</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>div reg;AX/reg(8位)=AL···AH
div 内存单元;(DX,AX)/reg(16位)=AX···DX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>被除数</th><th>AX</th><th style="text-align:center;">DX和AX</th></tr></thead><tbody><tr><td>除数</td><td>8位内存或寄存器</td><td style="text-align:center;">16位内存或寄存器</td></tr><tr><td>商</td><td>AL</td><td style="text-align:center;">AX</td></tr><tr><td>余数</td><td>AH</td><td style="text-align:center;">DX</td></tr></tbody></table><p>除数：有8位和16位两种，在一个reg(寄存器)或内存单元中。</p><p>被除数：<strong>默认</strong>放在AX或DX和AX中，如果除数为8位，被除数则为16位，默认在AX中存放；如果除数为16位，被除数则为32位，在DX和AX中存放，DX存放高16位，AX存放低16位。</p><p>结果：如果除数为8位，则AL存储除法操作的商，AH存储除法操作的余数；如果除数为16位，则AX存储除法操作的商，DX存储除法操作的余数。</p><h2 id="扩展指令" tabindex="-1"><a class="header-anchor" href="#扩展指令"><span>扩展指令</span></a></h2><h3 id="cbw" tabindex="-1"><a class="header-anchor" href="#cbw"><span>CBW</span></a></h3><p>将符号位扩展到整个高位：AL-AX ; 字节-字</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>CBW  ;AL--AX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对标志位无影响</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AL,O5H
CBW             ;AX=0005H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AL,80H
CBW           ;AX=FF80H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cwd" tabindex="-1"><a class="header-anchor" href="#cwd"><span>CWD</span></a></h3><p>AX-DX,AX ; 字-双字</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AX,5
CWD          ;DX=0000H,AX=0005H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AX,9500H
CWD           ;DX=FFFFH,AX=9500H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对标志位无影响</p><p>例：已知字节变量 x,y,z 字变量w,编程实现 x*y+zw</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AL,X
MOV BL,Y
MUL BL
MOV DX,AX
MOV AL,Z
CBW 
ADD DX,AX
MOV w,DX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="逻辑运算指令" tabindex="-1"><a class="header-anchor" href="#逻辑运算指令"><span>逻辑运算指令</span></a></h2><h3 id="and" tabindex="-1"><a class="header-anchor" href="#and"><span>AND</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>AND AL,0; AL=0,CF=OF=0

AND AL,AL ;AL不变,  CF=OF=0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>CF和OF=0,并根据目标操作数的值来修改SF 、ZF和PF</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV AL,12H
AND AL,0FH ;AL=02H  清除AL的高4位
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOV BL,34H
AND BL,F0H ;AL=30H
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="test" tabindex="-1"><a class="header-anchor" href="#test"><span>TEST</span></a></h3><h2 id="跳转指令" tabindex="-1"><a class="header-anchor" href="#跳转指令"><span>跳转指令</span></a></h2><h2 id="串操作指令" tabindex="-1"><a class="header-anchor" href="#串操作指令"><span>串操作指令</span></a></h2><h3 id="串传送指令-movs" tabindex="-1"><a class="header-anchor" href="#串传送指令-movs"><span>串传送指令 MOVS</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>MOVS OPRD1,OPRD2          //MOVS ES:[DI],DS:[SI]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>此格式仅用于源操作数需段重设的情况下</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>;分别用mov指令和movs指令编写将200个字节数据从内存数据段MEM1中的程序为首地址的区域送到附加段MEM2为首地址的区域

;MOV
        LEA SI, MEM1
        LEA DI, MEM2
        MOV CX, 200
  NEXT: MOV AL, [SI]
        MOV ES:[DI], AL
        INC SI
        INC DI
        DEC CX
        JNZ NEXT
        HLT

;MOVS

    LEA SI, MEM1
    LEA DI, MEM2
    MOV CX, 200
    CLD;DF=0,方向标志，递增；STD ：DF=1 递减
    REP MOVSB; 重复前缀REP : 当CX0时重复
    HLT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串装入指令-lods" tabindex="-1"><a class="header-anchor" href="#串装入指令-lods"><span>串装入指令 LODS</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>LODS ;DS:[SI]--AL/AX
LODSB
LODSW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串存储指令-stosb" tabindex="-1"><a class="header-anchor" href="#串存储指令-stosb"><span>串存储指令 STOSB</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>STOSB
STOSW;AXES:DI
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="串比较指令-cmps" tabindex="-1"><a class="header-anchor" href="#串比较指令-cmps"><span>串比较指令 CMPS</span></a></h3><p>操作：目标串-源串。结果不写回源地址</p><ol><li>CMPS OPRD1,OPRD2</li><li>CMPSB</li><li>CMPSW</li></ol><p>串比较指令执行·会影响全部6个状态标志位，但前缀的操作对标志位不影响</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>;测试上述中200个字节数据是否传输正确

LEA SI, MEM1;源
LEA DI, MEM2;目的
MOV CX, 200;长度
CLD;方向
REPE CMPSB;相等则重复，先cmpsb，指针已加再repe
JZ STOP
DEC SI;若两数据串不同，指向存放不相等数据的地址
MOV AL, [SI]
MOV BX, SI
STOP:HLT
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结束串比较指令的条件：<br> CX=0或ZF=0</p><h3 id="串扫描指令-scas" tabindex="-1"><a class="header-anchor" href="#串扫描指令-scas"><span>串扫描指令 SCAS</span></a></h3><p>常用于在指定存储区域中寻找某个关键字</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>SCAS OPRD   AX/AL——DS[SI]
SCASB
SCASW
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>源操作数是AX或AL</p><h2 id="栈操作" tabindex="-1"><a class="header-anchor" href="#栈操作"><span>栈操作</span></a></h2><h3 id="push" tabindex="-1"><a class="header-anchor" href="#push"><span>PUSH</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>PUSH OPRD;OPRD-stack
;1. SP=SP-2
;2. OPRD-[SP]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OPRD只能是16位寄存器 reg、段寄存器 sreg、存储器mem。不能是立即数或立即数寻址</p><h3 id="pop" tabindex="-1"><a class="header-anchor" href="#pop"><span>POP</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>POP OPRD;stack-OPRD
;1. [SS:SP]-OPRD
;2. SP=SP+2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>OPRD只能是16位寄存器 reg、段寄存器 sreg、存储器mem。不能是立即数或立即数寻址</p><h2 id="i-o操作" tabindex="-1"><a class="header-anchor" href="#i-o操作"><span>I/O操作</span></a></h2><h3 id="in-out" tabindex="-1"><a class="header-anchor" href="#in-out"><span>IN/OUT</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>IN AX/AL,PORT	;从端口传入字或字节（AX/AL）
		;port表示地址，00H~FFH可以直接用立即数表示
		;0100H~FFFFH需用DX进行间接寻址
OUT PORT,AX/AL	;将AX/AL中的内容传入PORT为地址的端口
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="跳转指令-1" tabindex="-1"><a class="header-anchor" href="#跳转指令-1"><span>跳转指令</span></a></h2><h3 id="无条件跳转-jmp" tabindex="-1"><a class="header-anchor" href="#无条件跳转-jmp"><span>无条件跳转 jmp</span></a></h3><p>jmp为无条件转移指令，可以只修改IP，也可以同时修改CS和IP。</p><p>jmp指令要给出两种信息：<br> 转移的目的地址<br> 转移的距离（段间转移、段内短转移、段内近转移）</p><p><strong>段内短转移</strong></p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp short 标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实现的是段内短转移，执行后： （IP） = （IP）+ 8位位移。</p><p>（1）8位位移=标号处的地址-jmp指令后第一个字节的地址；&lt;br /（2）short指明此处的位移为8位位移；&lt;br /（3）8位位移的范围为-128~127，用补码表示；&lt;br /（4）8位位移由编译程序在编译时算出。</p><p>段内近转移</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp near ptr 标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>实现的是段内近转移，执行后：（IP） = （IP） + 16位位移。</p><p>（1）16位位移=标号处的地址-jmp指令后第一个字节的地址；&lt;br /（2）near ptr 指明此处的位移为16位位移，进行的是段内近转移；<br> （3）16位位移的范围为-32768~32767，用补码表示；&lt;br /（4）16位位移由编译程序在编译时算出。</p><p>段间转移</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp far ptr 标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>far ptr指明了跳转到的目的地址，即包含了标号的段地址CS和偏移地址IP</p><p>转移地址在寄存器中</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp 16位的reg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该指令实现的功能为：（IP）= （16位的reg）</p><p>转移地址在内存中</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp word ptr 内存单元地址（段内转移）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>功能：从内存单元地址处开始存放一个字，是转移的目的偏移地址。</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jmp dword ptr 内存单元地址（段间转移）
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>功能：从内存单元地址处开始存放着两个字，高地址处的字是转移的<strong>目的段地址</strong>，低地址处是转移的目的的<strong>偏移地址</strong>。</p><h3 id="有条件跳转" tabindex="-1"><a class="header-anchor" href="#有条件跳转"><span>有条件跳转</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>JE   ;等于则跳转
JNE  ;不等于则跳转

JZ   ;为 0 则跳转
JNZ  ;不为 0 则跳转

JS   ;为负则跳转
JNS  ;不为负则跳转

JC   ;进位则跳转
JNC  ;不进位则跳转

JO   ;溢出则跳转
JNO  ;不溢出则跳转

JA   ;无符号大于则跳转
JNA  ;无符号不大于则跳转
JAE  ;无符号大于等于则跳转
JNAE ;无符号不大于等于则跳转

JG   ;有符号大于则跳转
JNG  ;有符号不大于则跳转
JGE  ;有符号大于等于则跳转
JNGE ;有符号不大于等于则跳转

JB   ;无符号小于则跳转
JNB  ;无符号不小于则跳转
JBE  ;无符号小于等于则跳转
JNBE ;无符号不小于等于则跳转

JL   ;有符号小于则跳转
JNL  ;有符号不小于则跳转
JLE  ;有符号小于等于则跳转
JNLE ;有符号不小于等于则跳转

JP   ;奇偶位置位则跳转
JNP  ;奇偶位清除则跳转
JPE  ;奇偶位相等则跳转
JPO  ;奇偶位不等则跳转
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jcxz" tabindex="-1"><a class="header-anchor" href="#jcxz"><span>jcxz</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>jcxz 标号;if(cx==0)ip=标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>功能：如果（cx）=0，则转移到标号处执行。如果（cx）≠ 0，则程序继续向下执行。</p><p>jcxz指令为有条件转递指令，所有的有条件转移指令都是短转移，在对应的机器码中包含转移的位移，而不是目的地址。对IP的修改范围都为：-128~127。</p><h2 id="返回指令" tabindex="-1"><a class="header-anchor" href="#返回指令"><span>返回指令</span></a></h2><h3 id="iret" tabindex="-1"><a class="header-anchor" href="#iret"><span>IRET</span></a></h3><p>弹出FR、CS、IP SP+6</p><h3 id="ret" tabindex="-1"><a class="header-anchor" href="#ret"><span>ret</span></a></h3><p>ret 用栈中的数据，修改IP的内容，从而实现近转移；</p><p>CPU执行ret指令时，进行下面两步操作：</p><p>（1）(IP) = ((SS)*16+(SP)) （2）(sp) = (sp)+2</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上步骤相当于进行：</p><p>pop IP</p><p><strong>有参数的</strong></p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ret n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以上相当于：</p><p>pop IP<br> add sp,n</p><p>举例：</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>ret 8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>相当于:</p><p>pop IP<br> add sp,8</p><p>因为8086/8088的堆栈是字堆栈（就是说进栈出栈都是16位的），所以，ret n中的<strong>n必须是偶数</strong>。</p><h3 id="retf" tabindex="-1"><a class="header-anchor" href="#retf"><span>retf</span></a></h3><p>retf指令用栈中的数据，修改CS和IP的内容，从而实现远转移。</p><p>CPU执行retf指令时，进行下面4步操作：</p><p>（1）(IP) = ((SS)*16+(SP)) （2）(sp) = (sp)+2 （3）(CS) = ((SS)*16+(SP)) （4）(sp) = (sp)+2</p><p>以上步骤相当于进行：</p><p>pop IP<br> pop CS</p><h2 id="call" tabindex="-1"><a class="header-anchor" href="#call"><span>call</span></a></h2><p>call指令可以理解为高级语言中的方法（函数）调用功能。</p><p>CPU指令call指令时，进行两步操作：</p><p>（1）将当前的IP或CS和IP压入栈中。 （保存现场）<br> （2）转移。</p><p>call指令不能实现短转移，除此之外，call指令实现转移的方法和jmp指令的原理相同。</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>call 标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU执行该指令时相当于进行：</p><p>push IP<br> jmp near ptr 标号</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>call far ptr 标号
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU执行该指令时相当于进行：</p><p>push CS<br> push IP<br> jmp far ptr 标号</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>call 16位reg
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU执行该指令时相当于进行：</p><p>push IP<br> jmp 16位reg</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>call word ptr 内存单元地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU执行该指令时相当于进行：</p><p>push IP<br> jmp word ptr 内存单元地址</p><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>call dword ptr 内存单元地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>CPU执行该指令时相当于进行：</p><p>push CS<br> push IP<br> jmp dword ptr 内存单元地址</p><p>cld 指令和 std 指令</p><p>cld 指令：将标志寄存器的 df 位置0； std 指令：将标志寄存器的 df 位置1。</p><p>lea：传偏移地址到16位寄存器</p><p>lea num 即将ds：num 地址保存到某寄存器</p><p>offset：回送标号偏移地址</p><h2 id="int" tabindex="-1"><a class="header-anchor" href="#int"><span>INT</span></a></h2><p><code>01H</code>：将键盘输入的字符存放在<strong>AL</strong></p><p><code>02H</code>：显示<strong>DL</strong>寄存器的字符</p><p>0DH：换行</p><p>09H: 显示DX地址的字符串</p><p>XLAT 查表指令</p><p>功能：把以DS:[BX+AL]为地址的待查表格的一个字节内容送到AL累加器中。<br> 在执行该指令前，将数据表偏移址送BX中，将待查字节在数据表的偏移指针送AL。</p><p>其他指令</p><h3 id="lds" tabindex="-1"><a class="header-anchor" href="#lds"><span>LDS</span></a></h3><div class="language-assembly line-numbers-mode" data-ext="assembly" data-title="assembly"><pre class="language-assembly"><code>LDS reg,mem; 这条指令的功能是把mem指向的地址,高位存放在DS中,低位存放在reg中
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,186),d=[n];function r(t,c){return a(),s("div",null,d)}const b=e(i,[["render",r],["__file","asm-4.html.vue"]]),p=JSON.parse('{"path":"/jieben/asm-note/asm-4.html","title":"指令","lang":"zh-CN","frontmatter":{"date":"2024-03-21T00:00:00.000Z","icon":"pen-to-square","category":["接本"],"tags":["asm"],"order":4,"description":"指令 算数运算指令 算数运算指令的执行大多对状态标志位会产生影响 MOV ADD 对6个标志位均有影响 ADC 对6个标志位均有影响 ADC指令多用于多字节数相加，使用前要先将CF清0 INC 不影响CF,常用于在程序中修改地址指针 不能是段寄存器，不能是立即数 例：求内存数据段中M1为首和M2为首的两个20字节数之和，并将结果写入M2为首的区域中 S...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/vuepress-hope/jieben/asm-note/asm-4.html"}],["meta",{"property":"og:site_name","content":"Q的博客"}],["meta",{"property":"og:title","content":"指令"}],["meta",{"property":"og:description","content":"指令 算数运算指令 算数运算指令的执行大多对状态标志位会产生影响 MOV ADD 对6个标志位均有影响 ADC 对6个标志位均有影响 ADC指令多用于多字节数相加，使用前要先将CF清0 INC 不影响CF,常用于在程序中修改地址指针 不能是段寄存器，不能是立即数 例：求内存数据段中M1为首和M2为首的两个20字节数之和，并将结果写入M2为首的区域中 S..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-21T03:51:20.000Z"}],["meta",{"property":"article:author","content":"Qiuliw"}],["meta",{"property":"article:tag","content":"asm"}],["meta",{"property":"article:published_time","content":"2024-03-21T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-21T03:51:20.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"指令\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-21T00:00:00.000Z\\",\\"dateModified\\":\\"2024-03-21T03:51:20.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Qiuliw\\",\\"url\\":\\"https://www.github.io/qiuliw\\"}]}"]]},"headers":[{"level":2,"title":"算数运算指令","slug":"算数运算指令","link":"#算数运算指令","children":[{"level":3,"title":"MOV","slug":"mov","link":"#mov","children":[]},{"level":3,"title":"ADD","slug":"add","link":"#add","children":[]},{"level":3,"title":"ADC","slug":"adc","link":"#adc","children":[]},{"level":3,"title":"INC","slug":"inc","link":"#inc","children":[]},{"level":3,"title":"SUB","slug":"sub","link":"#sub","children":[]},{"level":3,"title":"SBB","slug":"sbb","link":"#sbb","children":[]},{"level":3,"title":"DEC","slug":"dec","link":"#dec","children":[]},{"level":3,"title":"CMP","slug":"cmp","link":"#cmp","children":[]},{"level":3,"title":"NEG","slug":"neg","link":"#neg","children":[]},{"level":3,"title":"MUL","slug":"mul","link":"#mul","children":[]},{"level":3,"title":"DIV","slug":"div","link":"#div","children":[]}]},{"level":2,"title":"扩展指令","slug":"扩展指令","link":"#扩展指令","children":[{"level":3,"title":"CBW","slug":"cbw","link":"#cbw","children":[]},{"level":3,"title":"CWD","slug":"cwd","link":"#cwd","children":[]}]},{"level":2,"title":"逻辑运算指令","slug":"逻辑运算指令","link":"#逻辑运算指令","children":[{"level":3,"title":"AND","slug":"and","link":"#and","children":[]},{"level":3,"title":"TEST","slug":"test","link":"#test","children":[]}]},{"level":2,"title":"跳转指令","slug":"跳转指令","link":"#跳转指令","children":[]},{"level":2,"title":"串操作指令","slug":"串操作指令","link":"#串操作指令","children":[{"level":3,"title":"串传送指令 MOVS","slug":"串传送指令-movs","link":"#串传送指令-movs","children":[]},{"level":3,"title":"串装入指令 LODS","slug":"串装入指令-lods","link":"#串装入指令-lods","children":[]},{"level":3,"title":"串存储指令 STOSB","slug":"串存储指令-stosb","link":"#串存储指令-stosb","children":[]},{"level":3,"title":"串比较指令 CMPS","slug":"串比较指令-cmps","link":"#串比较指令-cmps","children":[]},{"level":3,"title":"串扫描指令 SCAS","slug":"串扫描指令-scas","link":"#串扫描指令-scas","children":[]}]},{"level":2,"title":"栈操作","slug":"栈操作","link":"#栈操作","children":[{"level":3,"title":"PUSH","slug":"push","link":"#push","children":[]},{"level":3,"title":"POP","slug":"pop","link":"#pop","children":[]}]},{"level":2,"title":"I/O操作","slug":"i-o操作","link":"#i-o操作","children":[{"level":3,"title":"IN/OUT","slug":"in-out","link":"#in-out","children":[]}]},{"level":2,"title":"跳转指令","slug":"跳转指令-1","link":"#跳转指令-1","children":[{"level":3,"title":"无条件跳转 jmp","slug":"无条件跳转-jmp","link":"#无条件跳转-jmp","children":[]},{"level":3,"title":"有条件跳转","slug":"有条件跳转","link":"#有条件跳转","children":[]},{"level":3,"title":"jcxz","slug":"jcxz","link":"#jcxz","children":[]}]},{"level":2,"title":"返回指令","slug":"返回指令","link":"#返回指令","children":[{"level":3,"title":"IRET","slug":"iret","link":"#iret","children":[]},{"level":3,"title":"ret","slug":"ret","link":"#ret","children":[]},{"level":3,"title":"retf","slug":"retf","link":"#retf","children":[]}]},{"level":2,"title":"call","slug":"call","link":"#call","children":[]},{"level":2,"title":"INT","slug":"int","link":"#int","children":[{"level":3,"title":"LDS","slug":"lds","link":"#lds","children":[]}]}],"git":{"createdTime":1710993080000,"updatedTime":1710993080000,"contributors":[{"name":"qiuliw","email":"1807191473@qq.com","commits":1}]},"readingTime":{"minutes":9.58,"words":2875},"filePathRelative":"jieben/asm-note/asm-4.md","localizedDate":"2024年3月21日","excerpt":"\\n<h2>算数运算指令</h2>\\n<p>算数运算指令的执行大多对状态标志位会产生影响</p>\\n<h3>MOV</h3>\\n<div class=\\"language-asm\\" data-ext=\\"asm\\" data-title=\\"asm\\"><pre class=\\"language-asm\\"><code>MOV AX,0;AX&lt;-0\\nMOV指令不影响标志位\\n</code></pre></div><h3>ADD</h3>\\n<div class=\\"language-assembly\\" data-ext=\\"assembly\\" data-title=\\"assembly\\"><pre class=\\"language-assembly\\"><code>ADD AX,BX;AX+BX--AX\\n;不允许两个都是存储器操作数。如add [eax],[ebx] 这类情况是错的\\n</code></pre></div>","autoDesc":true}');export{b as comp,p as data};
