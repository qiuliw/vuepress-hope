---
date: 2024-03-21
icon: pen-to-square
category:
  - 接本
tags:
  - asm
order: 3
---
# 程序结构

## 顺序结构

例：屏幕显示字符串“helloworld”   $代表结束

```assembly
data segment
	string db 'helloworld','$'
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
```

 例：从键盘接受的小写字母转换为大写字母，并屏幕显示

```assembly
code segment
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

```

## 分支结构

 例：键盘接受小写字母转换成大写字母，若输入的不是小写字母，则结束

```assembly
code segment
	assume cs:code
start:	mov ah,01h
	int 21h
	cmp al,'a'
	JB L1
	cmp al,'z'
	JA L1
	SUB AL,20H
	MOV DL,AL
	MOV AH,02H
	INT 21H
    L1:	MOV AH,4CH
	INT 21H
code ends
	end start
```

 例：内存数据段buf为首地址的10个有符号字节数，求最小数，并存入MIN单元

```assembly
data segment
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
```


## 循环结构

 编程实现2+4+6····+100累加和，并存入s单元


```assembly
data segment
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
```

## 汇编调试

1. 编辑、源文件、扩展名.asm
2. .sam   -masm.exe/汇编程序-.obj
3. .obj    link/链接程序-  .exe
4. 运行 .exe
5. 调试  Debug.exe

    -R：显示寄存器  
    -D：显示内存区  
    -U：反汇编  
    -Q：退出调试程序

```
debug

-r：可以查看，改变寄存器中的内容

-d：可以查看内存中的内容

-u：可以将 内存中的机器指令翻译成汇编指令

-a：可以以汇编指令格式在内存中写入一条汇编指令

-t：执行当前cs:ip所指向的机器指令

-e：可以改写内存中的内容
```

## 练习

 阅读程序回答问题

 ```assembly
 MOV AL,06h
 SHL AL,01H
 MOV BL,AL
 MOV CL,2
 SHL AL,CL
 ADD AL,BL
 ```

 SHL:逻辑左移


1. 执行程序段后，本程序功能：AL扩大10倍（AL*2 *4+AL *2）
2. 执行后，AL=60(3CH)

 例，设DX=5678h

 ```assembly
 MOV CL,8
 ROR DX,CL
 AND DX,0FFH
 CMP DX,56H
 ```

 ROR:循环右移


执行上述程序后，DX=0056H,ZF=11


