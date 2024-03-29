---
title: CSS3有哪些好玩的新特性
---

---

# CSS3 有哪些好玩的新特性

## 什么是`CSS3`,它能做些什么？

- CSS3 是 CSS2 的升级版本，3 只是版本号
- `css3` 新增了好玩的特性，大体包括三大交互属性 `变换` `过渡` `动画` 以及`圆角` `阴影` `渐变`等等
- 存在一定的兼容性问题
- 能做些什么
  - 增添强大的选择器
  - 圆角的效果
  - 块阴影与文字阴影
  - 更多的颜色定义 HSL RGBA HSLA
  - 渐变效果
  - 个性化的字体
  - 多背景图
  - 边框背景图
  - 变形处理
  - 多栏布局方式
  - 媒体查询

## 圆角与阴影

### 圆角效果 border-radius

```css
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.box {
  width: 50px;
  height: 100px;
  background-color: rebeccapurple;
  border-radius: 50px 50px 0 0;
}
```

![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-28_19-52-47.png)

### 阴影 text-shadow

```css
text-shadow: 0 2px 1px red;
```

![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-28_20-20-37.png)

## 文字与字体

### text-overflow

```css
.box {
  width: 100px;
  height: 100px;
  /* to right 等价于 90deg */
  background-image: linear-gradient(to right, red, pink, green);
  box-shadow: 1px 2px 4px olivedrab;
  color: #fff;
  /* // 表示显示省略标记 */
  text-overflow: ellipsis;
  /*  在一行显示*/
  white-space: nowrap;
  /* 超出的就不显示了 */
  overflow: hidden;
}
```

![](https://cdn.jsdelivr.net/gh/yayxs/Pics/dontKownJS/Snipaste_2020-11-28_20-14-40.png)

## 背景 background

## 动画 animations

动画包括两部分：

- 其一 描述动画的样式规则
- 其二 指定动画开始、结束、中间点的关键帧（此处指的是帧动画|可以理解为一帧一帧的）

脚本也可以实现动画，那么纯正的`css` 实现动画有什么好处或者优点

> 1.  能够非常容易地创建简单动画，你甚至不需要了解 JavaScript 就能创建动画。
> 2.  动画运行效果良好，甚至在低性能的系统上。渲染引擎会使用跳帧或者其他技术以保证动画表现尽可能的流畅。而使用 JavaScript 实现的动画通常表现不佳（除非经过很好的设计）。
> 3.  让浏览器控制动画序列，允许浏览器优化性能和效果，如降低位于隐藏选项卡中的动画更新频率。
>
> 摘自《MDN》

先来看一段 css3 的动画

```html
<style>
  * {
    margin: 0;
    padding: 0;
  }
  body {
    width: 100vw;
    height: 100vh;
    background-color: yellowgreen;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  main {
    width: 100px;
    height: 100px;
    background-color: #fff;
    animation-name: animationName;
    animation-duration: 4s;
  }

  @keyframes animationName {
    form {
      background-color: #fff;
    }
    to {
      background-color: black;
    }
  }
</style>
<body>
  <main></main>
</body>
```

其中`animation-xxx` 描述的是动画的细节、这些细节指的是动画持续的时间、时长、等等

```css
animation: name duration timing-function delay iteration-count direction
  fill-mode;
```

上述不明白暂时没有关系，接着看

<div style="color:red">上述的完整代码  </div>

### keyframes

desc:用来定义动画的序列（两个及以上的关键帧） 上个例子的

```css
form {
  // 代表的是从什么时间开始 开始状态
  background-color: #fff;
}
to {
  // 代表结束状态
  background-color: black;
}
```

上述便是关键帧的简单实用

```css
@keyframes animationName {
  100% {
    background-color: #fff;
  }
  0% {
    // 元素的原始状态
    background-color: black;
  }
}
// 值得注意的是即使是顺序颠倒也是同样的道理 0% 是动画的开始，100% 是动画的完成。 为了得到最佳的浏览器支持，您应该始终定义 0% 和 100% 选择器。
```

## 生成内容 content

```css
.box {
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-image: linear-gradient(to bottom, pink);
  border: 1px solid;
  cursor: pointer;
}
.box:after {
  content: '123';
  color: red;
}
```

## 媒体查询 Media Queries

### 媒体类型

媒体类型（Media Type）在 CSS2 中是一个常见的属性，也是一个非常有用的属性，可以通过媒体类型对不同的设备指定不同的样式。

在 CSS2 中常碰到的就是 all(全部)、screen(屏幕)、print(页面打印或打印预览模式)，其实媒体类型远不止这三种，W3C 总共列出了 10 种媒体类型。

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style media="screen"></style>
  <style media="print"></style>
</head>
<body>
  <h1>现在在打印机上</h1>
  <h2>显示在屏幕</h2>
</body>
```

### 引入文件的方式

@import 可以引用样式文件，同样也可以用来引用媒体类型。@import 引入媒体类型主要有两种方式，一种是在样式中通过@import 调用另一个样式文件；另一种方法是在<head></head>标签中的<style></style>中引入，但这种使用方法在 IE6~7 都不被支持，如样式文件中调用另一个样式文件时，就可以指定对应的媒体类型。

```css
@import url(screen.css) screen;
@import url(print.css) print;
```

