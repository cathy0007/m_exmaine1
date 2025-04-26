# m_examine

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 前端页面适配方案vw+rem
html: {font-size: 8.88888888888889vw;}
计算规则： 基于设计稿1125px宽度开发； vw是把屏幕分成100列就是100vw，那么1vw就是11.25px，那么把根元素设置100px，100px对应的vw就是：100/11.25 = 8.88888888888889vw; 在页面编写css的时候就这样算：比如header的高度是88px对应的rem就是 88/100 = 0.88rem；小数点往前移动两位即可。

### 模拟数据
运行 json-server --watch data.json -p 3009 
### 项目开发梳理
#### 一.需求分析
   1. 产品层面：
       1.1  需求文档梳理 （文档）
       1.2  功能分析（文档+原型）
   2. UI层面：
       1.1 网站的通用皮肤（主色、辅助颜色）
       1.2 适配方案选择 （适配哪些终端，设计稿宽度确认[rem+vw]） 
       1.3 界面icon选择，阿里字体图标查找(默认的扁平图标，或者ui给我们的svg上传)
   3. 技术栈的选择
      vue2x + axios + es6 + less + iconfont

#### 二.项目开发流程
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
####  公共组件封装
   1. 公共组件封装
   2. iconfont CDN方式
   3. 路由跳转编程导航式 （套餐分类跳转到-套餐列表）
   5. 页面排版-flex/block [通过条件判断显示横版还是竖版]
   8. 首页的机构收藏（$event, ref）取决于实际场景，收藏不是视觉上的收藏，而是要更改数据库这条数据状态。

   **我的预约页面数据生成流程**
   1. 先用手机号验证码注册登录[发送验证码-登录] 拿到：token，data:{ user_id: xxx}
   2. 套餐列表拿到套餐id-> composeid
   3. 第一个~第三个接口，按顺序，修改对应参数 （token，composeid, health_user_id,orderid)
 #### 路由权限
      登录页面 [登录状态判断] ;
     [路由权限重定向的问题？ this.$route.query.redirect = undefined 代表之前没有路由信息,所以登录成功之后路由跳转需要判断：
       判断条件：如果我上一个路由是默认页面，重定向url是undefined，我们需要给这种情况做个判断 !undefined ? '/home' : this.$route.query.redirect
#### 打包
     1. 修改打包之后的文件路径 [在配置文件里vue.config.js publicPath: './';
     2. 在package.json文件中找到打包命令build： npm install build --report； --report生成页面资源占用情况报告：
     3. 在vue.config.js配置文件的webpack对象下添加externals对象，把不需要打包到chrunkjs文件的插件放到这个对象下：注意冒号右边的对应好真正的全局变量]，打包之后就会从chunkjs文件提取出来这些插件的js代码。 那么首屏代码的体积就会减少，首屏加载速度就会提升。
     4. 分析页面资源占用情况： 打包之后再dist目录里面有个report.html 打开可以看到所有项目中的js情况。
     5. 打包之后项目中会生成一个dist目录，里面是我们要放到服务器上的代码[js/css/img、html]
     6. 本地测试好打包后的页面完全没有问题[布局-(css/img)，接口请求的数据是否正常的]，ok后发给负责上线的同事。
     -----------------------------注意
    1. 线上/生产环境 取消consolog.log [prosess.env.NODE_ENV /dev*->开发环境 / production->线上环境];主要是通过在入口文件给console.log = function() {} 来解决。
    2. sourceMap: false // vue.config.js // true的时候一般在开发环境调试代码用到；生产环境false，代码直接加密压缩。
    3. gzip压缩-需要后台配合 x.g

---待确定
   #### 注意事项
       手机拨打电话，邮件，发短信
       默认也就是在我们html>head 中是开启的，根据具体需求我们不需要页面上每个电话都可以拨打，那么需要在head中设置： content="telephone=no,email=no" name="format-detection"
       然后单个按钮或者图标或者电话/邮件等需要有相关功能的时候：用a标签href里面指定：
       tel: 手机号
       sms: 手机号
       mailto: 邮箱
       导航守卫 路由拦截 （配合路由meta权限属性和token 校验）
       验证码注册[发生验证码-手机号入库]、登录，存储token