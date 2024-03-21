---
date: 2024-03-21
icon: pen-to-square
category:
  - 接本
tags:
  - asm
order: 2
---

# 伪指令

## 段定义伪指令

```assembly
段名 segment
...
段名 ends
```

```assembly
assume DS:段名,CS:段名,SS:段名,ES:段名
```

## 过程定义伪指令

```assembly
过程名 proc [Near/Far]
	...
        RET
过程名 endp
```

## 结束伪指令

```assembly
end [标号]
```

## ORG

设置数据的起始地址

```nasm
data segment
	ORG 5000H
	X DB ?
data ends
```

X所在单元即5000H


## DUP

用来重复开辟内存空间。

dup指令要和db、dw、dd等数据定义伪指令配合使用，使用格式如下：

```assembly
db 重复次数 dup (重复的字节型数据)
dw 重复次数 dup (重复的字型数据)
dd 重复次数 dup (重复的双字型数据)
```

例如，如下代码表示定义了9个字节：

```c
db 3 dup (0,1,2)
```



## OFFSET

操作符offset在汇编语言中是由编译器处理的符号，它的功能是取得标号的偏移地址。

```assembly
...
L1:...
...
MOV AX,offset L1
```

