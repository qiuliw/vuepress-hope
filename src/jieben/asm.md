---
icon: pen-to-square
date: 2024-03-21
category:
  - 接本
tags:
  - asm
---


# 汇编错题

## 堆栈

设当前的 SP=0100H，执行 `PUSH AX` 指令后，SP=__H。若改为执行 `INT 21H` 指令后，则 SP=__H。

> 答：0FEH,0FAH

```NASM
PUSH AX ; SP-2,压入AX
INT N ; SP-6,压入FR,CS,IP
```

---

若当前 SP=6000H，CPU 执行一条 `IRET` 指令后，SP=__H ; 而当CPU执行一条段内返回指令 `RET 6` 后，SP=__H。

> 答：60006H,6008H

```nasm
IRET ; 弹出IP、CS、FR;SP+6
RET 6; SP+2+6 即弹出IP后+6
```


