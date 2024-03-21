---
date: 2024-03-21
icon: pen-to-square
category:
  - 接本
tags:
  - asm
order: 4
---

# 指令

## 算数运算指令

算数运算指令的执行大多对状态标志位会产生影响
### MOV

```asm
MOV AX,0;AX<-0
MOV指令不影响标志位
```

### ADD

```assembly
ADD AX,BX;AX+BX--AX
;不允许两个都是存储器操作数。如add [eax],[ebx] 这类情况是错的
```

 对6个标志位均有影响

### ADC

```assembly
ADC AX,BX;AX=AX+BX+CF
```

 对6个标志位均有影响

 ADC指令多用于多字节数相加，使用前要先将CF清0

### INC

```assembly
INC AX;AX++
```

 不影响CF,常用于在程序中修改地址指针

 不能是段寄存器，不能是立即数

 例：求内存数据段中M1为首和M2为首的两个20字节数之和，并将结果写入M2为首的区域中

```assembly
	LEA SI, M1
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
```

### SUB

```assembly
SUB AX,BX;AX=AX-BX
;不允许两个都是存储器操作数。如add [eax],[ebx] 这类情况是错的
```

 对6个标志位均有影响

### SBB

```assembly
ADC AX,BX;AX=AX-BX-CF
```

 对6个标志位均有影响

 ADC指令多用于多字节数相减，使用前要先将CF清0


### DEC

```assembly
DEC AX;AX--
```

 除CF标志位 ，其余标志位都受影响


### CMP

```assembly
CMP AX,BX;AX-BX
```

指令执行的结果不影响目标操作数，仅影响标志位

用于比较两个数的大小，可作为条件转移指令转移的条件

### NEG

```assembly
NEG AX;AX=0-AX
```

影响6个标志位

### MUL

无符号数相乘

```assembly
MUL BL;AX=BL*AL
MUL BX;(DX,AX)=BX*AX
```

影响6个状态位

单操作数，隐含了被乘数（AX/AL）；src字节：AL * SRC -- AX，src字 ：AX* SRC--DX,AX

### DIV

```assembly
div reg;AX/reg(8位)=AL···AH
div 内存单元;(DX,AX)/reg(16位)=AX···DX
```

| 被除数 | AX              |      DX和AX      |
| ------ | --------------- | :--------------: |
| 除数   | 8位内存或寄存器 | 16位内存或寄存器 |
| 商     | AL              |        AX        |
| 余数   | AH              |        DX        |

 除数：有8位和16位两种，在一个reg(寄存器)或内存单元中。

 被除数：**默认**放在AX或DX和AX中，如果除数为8位，被除数则为16位，默认在AX中存放；如果除数为16位，被除数则为32位，在DX和AX中存放，DX存放高16位，AX存放低16位。

 结果：如果除数为8位，则AL存储除法操作的商，AH存储除法操作的余数；如果除数为16位，则AX存储除法操作的商，DX存储除法操作的余数。



## 扩展指令

### CBW

将符号位扩展到整个高位：AL-AX ; 字节-字

```assembly
CBW  ;AL--AX
```

对标志位无影响

```assembly
MOV AL,O5H
CBW             ;AX=0005H
```

```assembly
MOV AL,80H
CBW           ;AX=FF80H
```

### CWD

 AX-DX,AX ; 字-双字

```assembly
MOV AX,5
CWD          ;DX=0000H,AX=0005H
```

```assembly
MOV AX,9500H
CWD           ;DX=FFFFH,AX=9500H
```

 对标志位无影响


例：已知字节变量 x,y,z   字变量w,编程实现 x*y+zw

```assembly
MOV AL,X
MOV BL,Y
MUL BL
MOV DX,AX
MOV AL,Z
CBW 
ADD DX,AX
MOV w,DX
```



## 逻辑运算指令
### AND

```assembly
AND AL,0; AL=0,CF=OF=0

AND AL,AL ;AL不变,  CF=OF=0
```

 CF和OF=0,并根据目标操作数的值来修改SF 、ZF和PF


```assembly
MOV AL,12H
AND AL,0FH ;AL=02H  清除AL的高4位
```

```assembly
MOV BL,34H
AND BL,F0H ;AL=30H
```


### TEST





## 跳转指令





## 串操作指令

### 串传送指令 MOVS

```assembly
MOVS OPRD1,OPRD2          //MOVS ES:[DI],DS:[SI]
```

 此格式仅用于源操作数需段重设的情况下


```assembly
;分别用mov指令和movs指令编写将200个字节数据从内存数据段MEM1中的程序为首地址的区域送到附加段MEM2为首地址的区域

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
```

### 串装入指令 LODS

```assembly
LODS ;DS:[SI]--AL/AX
LODSB
LODSW
```

### 串存储指令 STOSB

```assembly
STOSB
STOSW;AXES:DI
```



### 串比较指令 CMPS

操作：目标串-源串。结果不写回源地址

1. CMPS OPRD1,OPRD2
2. CMPSB
3. CMPSW

串比较指令执行·会影响全部6个状态标志位，但前缀的操作对标志位不影响

```assembly
;测试上述中200个字节数据是否传输正确

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
```

结束串比较指令的条件：  
CX=0或ZF=0



### 串扫描指令 SCAS

常用于在指定存储区域中寻找某个关键字

```assembly
SCAS OPRD   AX/AL——DS[SI]
SCASB
SCASW
```

源操作数是AX或AL


## 栈操作

### PUSH

```assembly
PUSH OPRD;OPRD-stack
;1. SP=SP-2
;2. OPRD-[SP]
```

OPRD只能是16位寄存器 reg、段寄存器 sreg、存储器mem。不能是立即数或立即数寻址



### POP

```assembly
POP OPRD;stack-OPRD
;1. [SS:SP]-OPRD
;2. SP=SP+2
```

OPRD只能是16位寄存器 reg、段寄存器 sreg、存储器mem。不能是立即数或立即数寻址


## I/O操作
### IN/OUT

```assembly
IN AX/AL,PORT	;从端口传入字或字节（AX/AL）
		;port表示地址，00H~FFH可以直接用立即数表示
		;0100H~FFFFH需用DX进行间接寻址
OUT PORT,AX/AL	;将AX/AL中的内容传入PORT为地址的端口
```

## 跳转指令

### 无条件跳转 jmp

jmp为无条件转移指令，可以只修改IP，也可以同时修改CS和IP。

jmp指令要给出两种信息：  
转移的目的地址  
转移的距离（段间转移、段内短转移、段内近转移）



**段内短转移**

```assembly
jmp short 标号
```

 实现的是段内短转移，执行后： （IP） = （IP）+ 8位位移。

 （1）8位位移=标号处的地址-jmp指令后第一个字节的地址；<br /（2）short指明此处的位移为8位位移；<br /（3）8位位移的范围为-128~127，用补码表示；<br /（4）8位位移由编译程序在编译时算出。



段内近转移

```assembly
jmp near ptr 标号
```

 实现的是段内近转移，执行后：（IP） = （IP） + 16位位移。

 （1）16位位移=标号处的地址-jmp指令后第一个字节的地址；<br /（2）near ptr 指明此处的位移为16位位移，进行的是段内近转移；  
 （3）16位位移的范围为-32768~32767，用补码表示；<br /（4）16位位移由编译程序在编译时算出。



段间转移

```assembly
jmp far ptr 标号
```

 far ptr指明了跳转到的目的地址，即包含了标号的段地址CS和偏移地址IP



转移地址在寄存器中

```assembly
jmp 16位的reg
```

 该指令实现的功能为：（IP）= （16位的reg）



转移地址在内存中

```assembly
jmp word ptr 内存单元地址（段内转移）
```

 功能：从内存单元地址处开始存放一个字，是转移的目的偏移地址。

```assembly
jmp dword ptr 内存单元地址（段间转移）
```

 功能：从内存单元地址处开始存放着两个字，高地址处的字是转移的**目的段地址**，低地址处是转移的目的的**偏移地址**。


### 有条件跳转

```assembly
JE   ;等于则跳转
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
```

### jcxz

```assembly
jcxz 标号;if(cx==0)ip=标号
```

 功能：如果（cx）=0，则转移到标号处执行。如果（cx）≠ 0，则程序继续向下执行。

 jcxz指令为有条件转递指令，所有的有条件转移指令都是短转移，在对应的机器码中包含转移的位移，而不是目的地址。对IP的修改范围都为：-128~127。



## 返回指令

### IRET

弹出FR、CS、IP
SP+6


### ret

ret 用栈中的数据，修改IP的内容，从而实现近转移；

CPU执行ret指令时，进行下面两步操作：

（1）(IP) = ((SS)\*16+(SP))
（2）(sp) = (sp)+2

```assembly
ret
```

以上步骤相当于进行：

 pop IP



**有参数的**

```assembly
ret n
```

以上相当于：

 pop IP  
 add sp,n

举例：

```assembly
ret 8
```

相当于:

 pop IP  
 add sp,8

因为8086/8088的堆栈是字堆栈（就是说进栈出栈都是16位的），所以，ret n中的**n必须是偶数**。



### retf

retf指令用栈中的数据，修改CS和IP的内容，从而实现远转移。

CPU执行retf指令时，进行下面4步操作：

（1）(IP) = ((SS)\*16+(SP))
（2）(sp) = (sp)+2
（3）(CS) = ((SS)\*16+(SP))
（4）(sp) = (sp)+2

以上步骤相当于进行：

 pop IP  
 pop CS

## call

call指令可以理解为高级语言中的方法（函数）调用功能。

CPU指令call指令时，进行两步操作：

（1）将当前的IP或CS和IP压入栈中。  （保存现场）  
（2）转移。

call指令不能实现短转移，除此之外，call指令实现转移的方法和jmp指令的原理相同。



```assembly
call 标号
```

CPU执行该指令时相当于进行：

 push IP  
 jmp near ptr 标号



```assembly
call far ptr 标号
```

CPU执行该指令时相当于进行：

 push CS  
 push IP  
 jmp far ptr 标号



```assembly
call 16位reg
```

CPU执行该指令时相当于进行：

 push IP  
 jmp 16位reg



```assembly
call word ptr 内存单元地址
```

CPU执行该指令时相当于进行：

 push IP  
 jmp word ptr 内存单元地址



```assembly
call dword ptr 内存单元地址
```

CPU执行该指令时相当于进行：

 push CS  
 push IP  
 jmp dword ptr 内存单元地址





cld 指令和 std 指令

cld 指令：将标志寄存器的 df 位置0；
std 指令：将标志寄存器的 df 位置1。





 lea：传偏移地址到16位寄存器

 lea num  即将ds：num 地址保存到某寄存器



 offset：回送标号偏移地址



## INT

`01H`：将键盘输入的字符存放在**AL**

`02H`：显示**DL**寄存器的字符

0DH：换行

09H: 显示DX地址的字符串


XLAT 查表指令

功能：把以DS:[BX+AL]为地址的待查表格的一个字节内容送到AL累加器中。  
在执行该指令前，将数据表偏移址送BX中，将待查字节在数据表的偏移指针送AL。


其他指令

### LDS

```assembly
LDS reg,mem; 这条指令的功能是把mem指向的地址,高位存放在DS中,低位存放在reg中
```
