---
icon: pen-to-square
date: 2024-03-20
category:
  - 接本
tags:
  - asm
order: 1
---
# 汇编程序

## 格式

```assembly
data segment
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
```

## 段属性

段属性：[定位类型]、[组合类型]、[类别]

* 定位类型：PARA、BYTE、WORD、PAGE
* 组合类型：NONE、PUBLIC、STACK、COMMON、MEMORY

> 一个程序中，至少有一个代码段