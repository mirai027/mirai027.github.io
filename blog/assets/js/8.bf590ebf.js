(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{356:function(t,s,a){"use strict";a.r(s);var v=a(42),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"自适应布局方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自适应布局方案"}},[t._v("#")]),t._v(" 自适应布局方案")]),t._v(" "),a("p",[t._v("一套代码对应一份设计稿，实现向上/向下兼容自适应布局方案对比")]),t._v(" "),a("blockquote",[a("p",[t._v("这里只做最表面的使用方法不对，不进行多种环境（复杂布局等）的测试，内容仅供参考。")]),t._v(" "),a("p",[t._v("后续会对每一个方案做进一步的研究。你问我什么时候？下次一定！👾")])]),t._v(" "),a("h2",{attrs:{id:"起步"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#起步"}},[t._v("#")]),t._v(" 起步")]),t._v(" "),a("h3",{attrs:{id:"rem-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem-是什么"}},[t._v("#")]),t._v(" rem 是什么")]),t._v(" "),a("p",[a("code",[t._v("rem")]),t._v("（font size of the root element）是指相对于根元素"),a("code",[t._v("<html>")]),t._v("来做计算的字体大小单位。")]),t._v(" "),a("p",[t._v("e.g. 设置"),a("code",[t._v("html { font-size: 75px }")]),t._v("时，其他元素"),a("code",[t._v("1rem = 75px")]),t._v("，"),a("code",[t._v("4rem = 300px")])]),t._v(" "),a("h3",{attrs:{id:"vw-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vw-是什么"}},[t._v("#")]),t._v(" vw 是什么")]),t._v(" "),a("p",[a("code",[t._v("vw")]),t._v("是基于"),a("code",[t._v("viewport")]),t._v("视窗的长度单位。"),a("code",[t._v("1vw")]),t._v("等于"),a("code",[t._v("window.innerWidth")]),t._v("的"),a("code",[t._v("1%")])]),t._v(" "),a("p",[t._v("e.g. 设备物理宽度为"),a("code",[t._v("375px")]),t._v("时，"),a("code",[t._v("1vw = 3.75px")])]),t._v(" "),a("h3",{attrs:{id:"dpr-是什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dpr-是什么"}},[t._v("#")]),t._v(" dpr 是什么")]),t._v(" "),a("p",[t._v("设备像素比"),a("code",[t._v("device pixel ratio")]),t._v("简称"),a("code",[t._v("dpr")]),t._v("，即物理像素和设备独立像素的比值。")]),t._v(" "),a("p",[t._v("在"),a("code",[t._v("web")]),t._v("中，浏览器为我们提供了"),a("code",[t._v("window.devicePixelRatio")]),t._v("来帮助我们获取"),a("code",[t._v("dpr")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("iPhone 6、7、8")]),t._v("的实际物理像素是"),a("code",[t._v("750 x 1334")]),t._v("，在开发者工具中我们可以看到：它的设备独立像素是"),a("code",[t._v("375 x 667")]),t._v("，设备像素比"),a("code",[t._v("dpr")]),t._v("为"),a("code",[t._v("2")])]),t._v(" "),a("p",[t._v("e.g. 如果给定一个元素的高度为"),a("code",[t._v("200px")]),t._v("(这里的"),a("code",[t._v("px")]),t._v("指物理像素，非"),a("code",[t._v("CSS")]),t._v("像素)，"),a("code",[t._v("iphone6")]),t._v("的设备像素比"),a("code",[t._v("dpr = 2")]),t._v("，我们给定的"),a("code",[t._v("height")]),t._v("应为"),a("code",[t._v("200px/2=100dp")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"flexible（前手淘做法）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flexible（前手淘做法）"}},[t._v("#")]),t._v(" Flexible（前手淘做法）")]),t._v(" "),a("p",[t._v("js 获取"),a("code",[t._v("clientWidth")]),t._v("，分成十份。再设置"),a("code",[t._v("rem")]),t._v("。字体大小则是"),a("code",[t._v("12 * dpr")])]),t._v(" "),a("h2",{attrs:{id:"postcss-px-to-viewport（有赞做法）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-px-to-viewport（有赞做法）"}},[t._v("#")]),t._v(" postcss-px-to-viewport（有赞做法）")]),t._v(" "),a("p",[a("code",[t._v("postcss-px-to-viewport")]),t._v("的做法其实没多大不同，它直接计算每个像素在设计稿中占据的"),a("code",[t._v("%")]),t._v("来输出"),a("code",[t._v("vw")]),t._v("，"),a("code",[t._v("rem")])]),t._v(" "),a("blockquote",[a("p",[t._v("设计稿 = 375px 时")])]),t._v(" "),a("h4",{attrs:{id:"_1-转换-vw-方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-转换-vw-方案"}},[t._v("#")]),t._v(" 1. 转换 VW 方案")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'postcss-px-to-viewport'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    unitToConvert"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'px'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// 需要转换的单位，默认为"px"')]),t._v("\n    viewportWidth"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("375")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 视窗的宽度，对应设计稿的宽度")]),t._v("\n    viewportUnit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定需要转")]),t._v("\n    fontViewportUnit"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vw'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字体使用的视口单位")]),t._v("\n    unitPrecision"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 指定`px`转换为视窗单位值的小数后 x位数")]),t._v("\n   \t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("1px = 100 / 375 = 0.2666666666666%")]),t._v(" 即 "),a("code",[t._v("100px = 26.6666666666666% = 26.6666666666666vw")])]),t._v(" "),a("p",[t._v("实际渲染时（375px 的屏幕），"),a("code",[t._v("26.6666666666666vw = 26.6666666666% * 375 = 100px")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/03/aUYRmV.png",alt:""}})]),t._v(" "),a("p",[t._v("在 转换成"),a("code",[t._v("vw")]),t._v("的方案设置媒体查询超出宽度范围后固定"),a("code",[t._v("body")]),t._v("宽度，内容居中时，会出现样式过大影响查看的问题。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/03/aUdwGD.gif",alt:""}})]),t._v(" "),a("h4",{attrs:{id:"_2-转换-rem-方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-转换-rem-方案"}},[t._v("#")]),t._v(" 2.转换 REM 方案")]),t._v(" "),a("p",[t._v("避免不同浏览器的默认字体大小不一样导致大小不一致的问题，我们需要固定好"),a("code",[t._v("root元素 html")]),t._v("的"),a("code",[t._v("font-size")])]),t._v(" "),a("p",[t._v("恰好我们可以利用"),a("code",[t._v("postcss-px-viewport")]),t._v("不支持内联样式的转换。来设置"),a("code",[t._v("root元素 html")]),t._v("的内联"),a("code",[t._v("font-size: 16px;")]),t._v("来固定"),a("code",[t._v("root")]),t._v("的字体大小以适配转换成"),a("code",[t._v("rem")]),t._v("的方案。")]),t._v(" "),a("p",[a("code",[t._v("1px = 100 / 375 = 0.2666666666666%")]),t._v(" 即 "),a("code",[t._v("100px = 26.6666666666666% = 26.6666666666666rem")])]),t._v(" "),a("p",[t._v("由于我们设置了"),a("code",[t._v("root元素 html")]),t._v("的内联"),a("code",[t._v("font-size: 16px;")]),t._v("来固定"),a("code",[t._v("root")]),t._v("的字体大小。因此，实际渲染时（375px 的屏幕），容器"),a("code",[t._v("26.6666666666666rem = 26.6666666666666 * 16 = 426.6666666666656px")])]),t._v(" "),a("p",[t._v("也就是说，我们需要更改"),a("code",[t._v("viewportWidth")]),t._v("的大小来和设计图适配。直接推导一下设计图与"),a("code",[t._v("viewportWidth")]),t._v("的倍数关系 = "),a("code",[t._v("426.6666666666656 / 100 = 4.26656")]),t._v("倍。设置"),a("code",[t._v("viewportWidth: 1599.96")]),t._v(" "),a("code",[t._v("（375 * 4.26656 = 1599.96）")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/03/aUDBkt.png",alt:""}})]),t._v(" "),a("p",[t._v("同样设置媒体查询超出宽度范围后固定"),a("code",[t._v("body")]),t._v("宽度，内容居中")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/03/aU0BDA.gif",alt:" "}})]),t._v(" "),a("h2",{attrs:{id:"rem-vw（网易移动端做法）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rem-vw（网易移动端做法）"}},[t._v("#")]),t._v(" rem + vw（网易移动端做法）")]),t._v(" "),a("p",[t._v("原则上也需要一个参考的设计图，这边假设为"),a("code",[t._v("375px")]),t._v("宽设计图。计算方法与"),a("code",[t._v("postcss-px-to-viewport rem")]),t._v("方案一至。")]),t._v(" "),a("blockquote",[a("p",[t._v("计算公式 ："),a("code",[t._v("1vw = 7.5px")]),t._v(" "),a("code",[t._v("1px = 0.1333333333333333vw")]),t._v(" "),a("code",[t._v("100px = 13.3333333333333333vw")])]),t._v(" "),a("p",[a("code",[t._v("1rem = 13.3333333333333333vw = 100px")])])]),t._v(" "),a("p",[t._v("但需要注意的是，设置时需要把"),a("code",[t._v("1rem")]),t._v("设置成"),a("code",[t._v("100px 对应的 vw值")]),t._v("的值（防止小于浏览器最小字体），编写时根据设计图"),a("code",[t._v("px / 100")]),t._v("来编写。")]),t._v(" "),a("p",[t._v("当需要"),a("code",[t._v("向上兼容")]),t._v("自适应的时候，设置好"),a("code",[t._v("@media")]),t._v("对应不同的"),a("code",[t._v("font-size")]),t._v("即可。")]),t._v(" "),a("p",[t._v("同样设置媒体查询超出宽度范围后固定"),a("code",[t._v("body")]),t._v("宽度，内容居中。")]),t._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 26.6666666666666667vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("body ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 重置字体大小")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0.14rem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 9vw"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 768px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s1.ax1x.com/2020/08/28/d5DkrQ.gif",alt:"ren+vw方案"}})]),t._v(" "),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("blockquote",[a("p",[a("code",[t._v("Flexible")]),t._v("在当今已经可以放弃掉，转用 CSS的方法解放因使用"),a("code",[t._v("JS")]),t._v("动态修改"),a("code",[t._v("fontsize")]),t._v("所消耗的性能")])]),t._v(" "),a("h3",{attrs:{id:"只做移动端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#只做移动端"}},[t._v("#")]),t._v(" 只做移动端")]),t._v(" "),a("h4",{attrs:{id:"postcss-px-to-viewport-vw方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#postcss-px-to-viewport-vw方法"}},[t._v("#")]),t._v(" "),a("code",[t._v("postcss-px-to-viewport -- vw")]),t._v("方法")]),t._v(" "),a("p",[t._v("一把梭，什么都不用考虑。且是最真实的按照屏幕大小的比例来放大缩小。")]),t._v(" "),a("h3",{attrs:{id:"小屏设计图向上兼容自适应大屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小屏设计图向上兼容自适应大屏幕"}},[t._v("#")]),t._v(" 小屏设计图向上兼容自适应大屏幕")]),t._v(" "),a("blockquote",[a("p",[t._v("当需要从移动端设计图适配到"),a("code",[t._v("平板")]),t._v("、"),a("code",[t._v("PC屏幕")])])]),t._v(" "),a("h4",{attrs:{id:"（最方便）postcss-px-to-viewport-rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（最方便）postcss-px-to-viewport-rem"}},[t._v("#")]),t._v(" （最方便）"),a("code",[t._v("postcss-px-to-viewport -- rem")])]),t._v(" "),a("h5",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("自动转换 UI框架中的单位。")]),t._v(" "),a("li",[t._v("配合"),a("code",[t._v("media媒体查询")]),t._v("设置"),a("code",[t._v("root fontSize")]),t._v("适配不同分辨率的大小以及"),a("code",[t._v("限制最大宽度")]),t._v("。")])]),t._v(" "),a("h5",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("所有设置转换的单位都会被转换掉，无法设置某些样式的单位不被转换。")])]),t._v(" "),a("h4",{attrs:{id:"（最灵活）rem-vw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（最灵活）rem-vw"}},[t._v("#")]),t._v(" （最灵活）"),a("code",[t._v("rem + vw")])]),t._v(" "),a("h5",{attrs:{id:"优点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-2"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("配合"),a("code",[t._v("media媒体查询")]),t._v("设置"),a("code",[t._v("root fontSize")]),t._v("适配不同分辨率的大小以及"),a("code",[t._v("限制最大宽度。")])]),t._v(" "),a("li",[t._v("高度自定义，谁需要转换谁转换成"),a("code",[t._v("rem")]),t._v("。")])]),t._v(" "),a("h5",{attrs:{id:"缺点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-2"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("当需要把 UI框架中的单位也转换时，会非常的头大。需要一个一个覆盖。")])]),t._v(" "),a("h4",{attrs:{id:"（不适合）postcss-px-to-viewport-vw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（不适合）postcss-px-to-viewport-vw"}},[t._v("#")]),t._v(" （不适合）"),a("code",[t._v("postcss-px-to-viewport -- vw")])]),t._v(" "),a("p",[t._v("该方案在限制最大宽度的时候，由于大小都是更具 "),a("code",[t._v("viewport")]),t._v("来决定的。所以限制了最大宽度时里面的内容依旧会随"),a("code",[t._v("viewport")]),t._v("变大而变大。故不合适")]),t._v(" "),a("h3",{attrs:{id:"大屏设计图向下兼容自适应小屏幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#大屏设计图向下兼容自适应小屏幕"}},[t._v("#")]),t._v(" 大屏设计图向下兼容自适应小屏幕")]),t._v(" "),a("h4",{attrs:{id:"（建议）postcss-px-to-viewport-rem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（建议）postcss-px-to-viewport-rem"}},[t._v("#")]),t._v(" （建议）"),a("code",[t._v("postcss-px-to-viewport -- rem")])]),t._v(" "),a("h5",{attrs:{id:"优点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-3"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("自动转换 UI框架中的单位，省事。")]),t._v(" "),a("li",[t._v("设置最小宽度居中，超出部分滚动条。")]),t._v(" "),a("li",[t._v("适配比设计稿更大的屏幕时把"),a("code",[t._v("root fontSize")]),t._v("设置为更大即可。")])]),t._v(" "),a("h5",{attrs:{id:"缺点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-3"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("所有设置转换的单位都会被转换掉，无法设置某些样式的单位不被转换。")])]),t._v(" "),a("h4",{attrs:{id:"（一般）-rem-vw"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（一般）-rem-vw"}},[t._v("#")]),t._v(" （一般） rem + vw")]),t._v(" "),a("blockquote",[a("p",[t._v("假设屏幕 1024px")]),t._v(" "),a("p",[t._v("计算公式 ："),a("code",[t._v("1vw = 10.24px")]),t._v(" "),a("code",[t._v("1px = 0.09765625vw")]),t._v(" "),a("code",[t._v("100px = 9.765625vw")])]),t._v(" "),a("p",[a("code",[t._v("1rem = 9.765625vw = 100px")])])]),t._v(" "),a("h5",{attrs:{id:"优点-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点-4"}},[t._v("#")]),t._v(" 优点")]),t._v(" "),a("ol",[a("li",[t._v("设置时需要把"),a("code",[t._v("1rem")]),t._v("设置成"),a("code",[t._v("100px 对应的 vw值")]),t._v("的值（防止小于浏览器最小字体），编写时根据设计图"),a("code",[t._v("px / 100")]),t._v("来编写。")])]),t._v(" "),a("h5",{attrs:{id:"缺点-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点-4"}},[t._v("#")]),t._v(" 缺点")]),t._v(" "),a("ol",[a("li",[t._v("需要写多个媒体查询更改"),a("code",[t._v("root fontSize")]),t._v("（因为存在字体太大导致一屏内容显示太少问题）。")]),t._v(" "),a("li",[t._v("当需要把 UI框架中的单位也转换时，会非常的头大。需要一个一个覆盖。")]),t._v(" "),a("li",[t._v("无法设置最小宽度居中内容。")])]),t._v(" "),a("h4",{attrs:{id:"（不适合）postcss-px-to-viewport-vw-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#（不适合）postcss-px-to-viewport-vw-2"}},[t._v("#")]),t._v(" （不适合）"),a("code",[t._v("postcss-px-to-viewport -- vw")])]),t._v(" "),a("p",[t._v("由于国产浏览器中的"),a("code",[t._v("root fontSize")]),t._v("小于默认最小字体（一般是 12px）时，会强制保持"),a("code",[t._v("root fontSize = 12px")]),t._v(" ，因此该方法并不适合。")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://github.com/mirai027/miari-adaptive",target:"_blank",rel:"noopener noreferrer"}},[t._v("demo仓库地址"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);