# 移动端项目
## Day 01
### 蓝湖协作
  1. 下载安装ps （ps cc 2017及以上版本），蓝湖ps插件
  2. 具体使用： 
       1. ps工具栏-窗口->扩展功能->选择蓝湖；
       2. 蓝湖工具栏：登录-选择设计宽度iso @2x（具体取决于当前项目本身的设计宽度），并且选择手机项目还是pc项目一定要勾选；
       3. 切图： ps设计稿里选择 要切图的图标或者图片的图层，之后切换到蓝湖工具栏，选择切图->点击标记为切图 （如何检验图标或者图片的切图范围是否正确，查看当前切图的这个图片或者图标的边框是否有蓝色的虚线标注）
       4. 之后重新上传全部画板；
       5. psd设计稿恢复之前的状态 （ps工具栏-文件-恢复）
       6. 到蓝湖工具栏找到切图下载的图标（选择图片或者图标格式，设备类型、几倍图，是否开启压缩，选择图片或者图标的质量），可下载图标或者图片的切片；
       7. 打开蓝湖-项目-选择标注
       8. vscode工具 开始布局页面（写html+css）
## Day 02
### 项目开发
**一.需求分析：**
   1. 产品层面：
       1.1  需求文档梳理 （文档）
       1.2  功能分析（文档+原型）
   2. UI层面：
       1.1 网站的通用皮肤（主色、辅助颜色）
       1.2 适配方案选择 （适配哪些终端，设计稿宽度确认[rem+js/rem+vw/clientWidth/10]） 
       1.3 界面icon选择，阿里字体图标查找(默认的扁平图标，或者ui给我们的svg上传)
       1.3 通用模块（组件）梳理
   3. 技术栈的选择
      vue2x/vue3x + axios + es6 + less/sass + iconfont

   3. 公司中项目开发流程以及其他团队协作关系   

**二.项目开发流程**
   1. 创建vue项目 npm/cnpm/pnpm
      ```
       npm  install @vue/cli -g; 
       vue create 项目名
      ```
   2. 目录分配 （公用目录[api/utils/less/images/font]、业务模块目录[views/*]）
   3. 去iconfont阿里字体库，选择项目图标icon加入到assets/font目录，并把iconsont.css改为iconfont.less
   4. 创建公用全局css：cssReset.less，common.less[适配方案rem+vw]，并在入口文件main.js 全局引入

   5. vscode 常用插件Vue VSCode Snippets -快速生成vue模板-支持vue2、vue3
   6. 页面布局的时候-蓝湖标注和ps配合布局
   7. 路由懒加载的方式（3）  
   8. 路由跳转的几种方式   
            1. [声明式
               <router-link to="/路由地址"></router-link>
            2. <router-link :to={path（/路由地址）-query:{}}/ {name（路由地址）-params: {}}
         2. $router.push() 模板里面用；   如果是在js里面加this.$router；
   9.  axios全局设置，baseUrl和请求响应设置 ->utils/request.js
   10. api存放项目中所有接口请求方法 api/体检模块.js // 每个功能模块的接口有一个自己的js，方便后期接口维护
   11. 解决跨域 在（vue.config.js）添加 devServer对象中设置允许跨域
   12. 渲染页面数据()
## Day 03
   1. 公共组件封装 （header[3]）-footer封装自己完成 [父传子、子传父] emit、on
   2. iconfont CDN方式，如何维护iconfont图标
   3. 路由跳转编程导航式 （套餐分类跳转到-套餐列表）
   4. ref 如何在vue中获取dom元素，$event 事件对象
   5. 页面排版-flex/block [通过条件判断显示横版还是竖版]
   6. 公共header样式居中问题-> 假如一行多列的时候 title内容不在正中间，我们需要给title：text-indent: -左边的距离； 
   7. 添加网站cssReset
   8. 首页的机构收藏（$event, ref）取决于实际场景，收藏不是视觉上的收藏，而是要更改数据库这条数据状态。
   9. 列表-排序 / 常用的操作数据的方法有哪些？ 哪些会改变原数组？
   10. swiper的应用 （1.安装对应的版本；2.去官网看我们想要用的特效效果； 3.去github对应的网站copy代码）
   11. 详情页tab切换
   
 ## Day 04
   1. 深度作用选择器 [style[>>>] less/scss[/deep/ ::v-deep (推荐)]] -> element-ui / swiper 
   2. vue 多个class用法 [定义class的方式有3中(mood,arr,obj)] 
       mood: -> :class="classA"
       arr:  -> :class="[classA, classB]"
       obj:  -> :class="[{classA: true},{ classB: true}]" // 我的预约案例 - 体检套餐多个订单状态问题颜色不同

   3. calendar控件 [默认安装最新版本-不用指定版本] 
       3.1 npm install vue-hash-calendar
       3.2 main.js 全局注册组件
       3.3 在页面直接使用
       备注：如果想修改默认表现，去官方文档看API
   4. 手机拨打电话，邮件，发短信
       默认也就是在我们html>head 中是开启的，根据具体需求我们不需要页面上每个电话都可以拨打，那么需要在head中设置： content="telephone=no,email=no" name="format-detection"
       然后单个按钮或者图标或者电话/邮件等需要有相关功能的时候：用a标签href里面指定：
       tel: 手机号
       sms: 手机号
       mailto: 邮箱

   5. 网站通用全局样式编写[比如通用的背景，padding，border]
   6. 导航守卫 路由拦截 （配合路由meta权限属性和token 校验）
   7. 验证码注册[发生验证码-手机号入库]、登录，存储token
   --------------------------------------
   必须完成的： 
   1. 首页 
   2. 列表 
   3. 详情 (轮播图-用到深度选择器，tab切换)
   4. 支付完成预约-日历； 
   5. 我的预约(四个订单状态判断-颜色区分)-> 
    备注： 
        1.所有页面适配完好。浏览器默认样式重置- cssReset
        2.所学知识点在页面中都要用到； 
        3. [1,2,3,5]数据全部从接口取

   **我的预约页面数据生成流程**
   1. 先用手机号验证码注册登录[发送验证码-登录] 拿到：token，data:{ user_id: xxx}
   2. 套餐列表拿到套餐id-> composeid
   3. 第一个~第三个接口，按顺序，修改对应参数 （token，composeid, health_user_id,orderid)
 ## Day 05
   1. 登录页面 [登录状态判断] ;
     [路由权限重定向的问题？ this.$route.query.redirect = undefined 代表之前没有路由信息,所以登录成功之后路由跳转需要判断：
       判断条件：如果我上一个路由是默认页面，重定向url是undefined，我们需要给这种情况做个判断 !undefined ? '/home' : this.$route.query.redirect
   2. 打包
     2.1 修改打包之后的文件路径 [在配置文件里vue.config.js publicPath: './';
     2.2 在package.json文件中找到打包命令build： npm install build --report； --report生成页面资源占用情况报告：
     2.3 在vue.config.js配置文件的webpack对象下添加externals对象，把不需要打包到chrunkjs文件的插件放到这个对象下：注意冒号右边的对应好真正的全局变量]，打包之后就会从chunkjs文件提取出来这些插件的js代码。 那么首屏代码的体积就会减少，首屏加载速度就会提升。
     2.4 分析页面资源占用情况： 打包之后再dist目录里面有个report.html 打开可以看到所有项目中的js情况。
     2.5 打包之后项目中会生成一个dist目录，里面是我们要放到服务器上的代码[js/css/img、html]
     2.6 本地测试好打包后的页面完全没有问题[布局-(css/img)，接口请求的数据是否正常的]，ok后发给负责上线的同事。
     -----------------------------
    1. 线上/生产环境 取消consolog.log [prosess.env.NODE_ENV /dev*->开发环境 / production->线上环境];主要是通过在入口文件给console.log = function() {} 来解决。
    2. sourceMap: false // vue.config.js // true的时候一般在开发环境调试代码用到；生产环境false，代码直接加密压缩。
    3. gzip压缩-需要后台配合 x.g
    4. css3动画 inset：上 右 下 左；案例：比如loading各种场景
            
  
