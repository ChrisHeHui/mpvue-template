## 小程序开发文档



### 此文档假定你已经了解vue、webpack以及node和npm一些基础知识



#### 快速了解小程序

> * [小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/)

> * [小程序开发工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

> * [mpvue介绍](http://mpvue.com/)

> * [Vant框架](https://youzan.github.io/vant-weapp/#/icon)



---




### 小程序没有单页面应用，mpvue以及一些插件只是封装。开发小程序最重要是开发的项目要尽量简单，能两个页面就完成的尽量不要开发多页面，功能尽量简洁，突出重要功能。而且也能加快微信官方的审核速度。


---


### 安装环境（请先安装vue-cli）

> vue Mercer-Li/mpvue-template 你的项目名字

如果没有什么特殊配置，一路无脑回车就行，然后依次执行命令
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/init.png"/>
</div>
   



* 打开[微信开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)，如下图操作，本地预览项目，能正常显示没有报错就是跑通环境了，可以使用vscode等工具编写代码，微信开发者工具作为预览和调试的工具，改动都是热更新的
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/xcx.png"/>
</div>



* 把vant文件下载（就在这个项目这里，自行下载）放到安装的dist文件夹目录下，这样才能使用
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/vant.png"/>
</div>





* src下文件存放路径说明：
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/src.png"/>
</div>





* Vuex和各种封装的工具函数要想使用如下：

  ```javascript
  import store from './vuex'
  import MpvueRouterPatch from 'mpvue-router-patch'
  import httpLint from './utils/httpLint'
  import request from './utils/request'
  
  Vue.prototype.$httpLint = httpLint
  Vue.prototype.$store = store
  Vue.use(MpvueRouterPatch)
  Vue.prototype.$request = request
  ```





* 路由配置详解：
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/vue-router.png"/>
</div>


---


### mpvue的一些注意事项：

* 生命周期钩子:

  > ```
  >你进入项目的时候所有页面的created钩子都会触发，而且页面跳转的时候不会再触发，
  >所有用小程序自带的onload()代替。比如要接收路由跳转时的带过来的keyword参数，例子如下：
  > ```
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/onLoad.png"/>
</div>

  >```
  >mounted：你如果从页面B返回页面A，页面A的mounted钩子不会触发，因为页面没有
  >重新加载（mpvue并没有真正的组件挂载的完整生命周期）。所以请用小程序的onShow代替
  >```

  > ```最坑的是不要用v-show这个指令来指定渲染元素，失策
  >最坑的是不要用v-show这个指令来指定渲染元素，请用v-if代替，不用太在意v-if重复渲染带来的性能问题
  > ```
  >
  > ```
  >因为是热更新，所以每次更改配置文件或者eslint检测到代码不规范，就不会执行热更新，这时候去控制台检查下错误就行，
  >是配置文件更改了需要重新执行npm run dev
  > ```







### Vant的一些注意事项：

>很多组件中诸如bind:search要改为@search，以及例如搜索组件中的input的
>alue无法实现数据双向绑定，获取值的方法如下：
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/vant-search.png"/>
</div>
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/event.png"/>
</div>


---


### 小程序的注意事项：

1、小程序中的图片资源如果前缀没有http或者https是无法显示图片的，不过在本地的微信开发者工具可以预览到，所以请检验服务器的图片资源，比如写个httpLint.js

2、就算是在mpvue框架上我们能写浏览器的标准标签，但是我们无法操作dom。

3、不建议使用小程序的scroll-view来做视图滚动到底部触发的请求加载，建议使用onReachBottom( )来监听。比如我要在视图滚动到底部时发送一个请求，例子如下：
<div align=center>
   <img src="https://github.com/Mercer-Li/mpvue-template/blob/master/docs/image/bottom.png"/>
</div>

4、提交审核的时候请先看关注下当时微信官方审核的一些规则和注意事项以及提醒，一般1——3天就会有审核结果。

