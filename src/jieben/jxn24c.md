---
icon: pen-to-square
date: 2024-03-21
category:
  - 接本
tags:
  - C
---

# C 题中遇到知识点

## printf 函数

%s

```c
int main(){
    char ch[]="abcDEF";
    printf("%-5.3s",ch);
    return 0;
}
```

输出

```
abc  % 
```

格式符说明

- `-` : 靠左对齐（不加默认右对齐）
- `5` : 所占空间
- `3` : 实际输出的字符长度

## 结构体

定义

```c
struct {
    int x;
    int y;
}a;
```

a是匿名结构体的一个变量

