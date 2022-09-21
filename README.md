# 你好，这是一个自学前端的练习项目
---
## 模仿bilibili的pc端页面
### 基于Vue、Express、Axios、Lodash和MongoDB
### 使用的图片素材来自bilibili、Iconfont和fontAwesome（无商业用途仅是本人学习使用）
---
## 组件结构
* App
  * pages
    * Home 主页组件（大部分功能已完成）
    * Animation 动画区（未施工）
    * Bangumi 番剧区（未施工）
    * ……其他分区（未施工）
  * components
    * topbarTool (顶部栏)
      * comicTool （漫画栏，内嵌B站的网页）
      * gameTool （游戏栏，内嵌B站的网页）
      * liveTool （直播栏，内嵌B站的页面）
      * userBox 用户信息
      * userCollection 用户收藏夹
      * userHistory 用户浏览历史
      * userMesssage 用户消息提示（后台更新推送功能暂无）
      * userTrend 视频动态（后台更新推送功能暂无）
    * bangumiLunbo 主页番剧模块轮播图
    * befLoginTip 登入前提示登录的模块
    * <b>columnBox 主页频道模块</b>
    * ~dragonAhead 已废弃~
    * elevator 主页侧边导航栏（调整导航栏顺序，自动调整页面布局的功能未实现）
    * firstScreen 首页主视图
    * ~hot已废弃~
    * internationalFooter 页面尾部模块
    * internationalHeader 页面头部模块
    * liveRank 主页直播频道右侧模块
    * login 登入模块
    * lunbo 主视图的轮播图
    * rankBangumi 番剧和国创频道排行榜模块
    * ranking 频道右侧排行榜通用模块
    * timeLine 时间表模块
    * ~userDownBox 已废弃~
    * userLogin 登入网站前的登入tip模块
    * videoCardG 视频的卡片模块(预览功能没有实现，预览弹幕功能未实现)
  * http 
    *  index axios 封装模块（目前仅写了地址，拦截器和响应器未设置，登入使用的是token）
 ### 后端代码项见express项目
 ---
 ## 目前已知的问题
 ### 由于很多子页面没有制作，大部分跳转功能没办法指向正常的页面
 ### 上线后，部分情况下请求没办法正常发送（可能是耗时问题）
 ### 工具栏已做异步优化，而主页尾部的频道还没有异步优化（同上一条）
 ### 代码复用度不够（轮播图等）
 ### 部分异步回调没有按照最佳实践来写
 ---
 ## 声明 
 ### 本人并非从事IT行业，所有的代码均为手写，很多地方的处理方式可能与实际项目需求不一致（如代码复用等），仅仅是一个演示Demo，请多多见谅，欢迎提出意见
 ### 上线效果见http://119.23.243.9:3000/
 ### 可使用账号admin和密码admin888进行登入测试
