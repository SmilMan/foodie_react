
## src / asset
    项目的静态资源，如Logo , iconfont

## src / components
    项目所有的组件

## src / store
    整个项目的store

## src / router 
    项目的路由

## src / util
    项目的单元工具（如根据屏幕的大小设置html根节点的字体大小，用rem布局时，
    根据屏幕的大小可以调整字体的大小）

## home / index.jsx
    componentDidMount 注册容器的滚动监听事件，区分移动端打开还是pc端打开，两种的检测距离会不同

## 首页数据的请求  home/recomend/index.jsx
    compomentDidMount
    加个定时器延长数据请求的时间，loading效果

## src/router/RouterMap.js
    路由模块   在项目根目录下的index.js下引用   app.js原本在index.js中引用，但是引入路由后，
    在路由模块引入app.js，然后在Index.js下引入路由模块
## src/common/foot
    尾部

## 1xp border 的问题


## scr/components/shopDetail
    home/recomend   首页所有商家的推荐（全部美食）
    ->  商家的名字通过路由传到shopDetail ，
    
    shopDetail 
        获取路由的参数,  在createAction中发送异步的请求数据

        生命周期函数： componentDidMound(){}  组件每次由路由进来时，都会触发一次，页面重新挂载


## 点击首页的icon图标进行相应的筛选()
    src/compomets/home/icon
        当点击相应的图标，立马派发一个action带上类型，
        因为用了redux提供的combineReducers ,合并多个reducer ，
        每一个action单独的reducer都能接收的到，

一：  recomend里商店数据的改变

        在icon/index.jsx里派发的action，放在recomend 下的reducer.js去接收，
        因为在这里才能获取到allShop，才能对其进行相应的筛选.

        遇到的问题： 当直接改recomend/reducer.js 中的newState.AllShop时， 
        第一个小图标的时候，可以实现筛选（利用filter）,但是当第一次选过后，再点击另一个小图标时，
        就会从上一次的结果进行筛选，这样就出现了问题？

        ***思考： 怎么能保存第一次的全部数据，-----》 可以用localStorage/sessionStorage来实现，
        注意存对象的时候，应该将对象先转为字符串。取的时候在进行相应的转变。

        ***在filter里在加一个if   当是全部的时候，就全部返回出去。

二： 首页导航文字的改变

    在recomend store reducer.js 下默然返回navText  = ”全部美食“

    当icon 下的图标被点击的时候，会派发一个action 相应的去筛选AllShop里面的数据,
    可以在这里同时派发一个改变导航的文字信息的action ,然后在recomend reducer.js 
    下处理，当数据改变后，页面同步的渲染。


### 问题：
    1.当首页点击图标后，显示出相应类型的食物，但是客户主动去刷新浏览器时，
    数据就会变成全部的数据（不会停在当前选的类型食品上， 因为刷新时，页面重新构建，
    recomend-> store -> createAction.js 
    重新发送了请求，请求相应的AllShop数据，并且派发action去改变数据，
    页面监听到后，就将数据显示了，就存在刷新后好像就失去了上个显示相应类型的食品页,这样体验并不友好）
        解决的思路：
        
        ****不做多余页面的跳转， 就在加一条路由，首页的动态路由 

        A： 刚开始是想用storage去做相应的缓存，在icon点击的时候将类型存起来，
        当页面刷新时，检查是否有storage，如果有就派发一个该类型的action去改变数据,
        并且不能让页面去请求新的数据。来一层判断。
            请求一次数据，然后根据storage来做数据的筛选条件.

        recomend/index.jsx componentDidMount -->
        (```)
            const action = getAllShop();
            setTimeout(() => {
            if (sessionStorage.getItem("type")) { 
                store.dispatch({
                        type: "get_type_shop",
                        shopType: sessionStorage.getItem("type")
                    });
                    store.dispatch({
                        type: "chang_loading",
                        data: false
                    });
                }else{ 
                    store.dispatch(action)
                }
            }, 1000);

        (```)
        iconf/index.jsx 当点击icon时记录 在getTypeShop 里 sessionStorage.setItem("type", shopType)

        A: 方法也存在缺点： 当用户按浏览器的前进后退键时，页面数据并不会发生变化，意思就是，主动点击小图标，数据就不会发生变化


        B： 思路： 是否可以利用动态路由的参数来改变，就得结合withRouter这个react-router-dom提供的方法，
                    让recomend可以获取到相应的路由参数
                    感觉很完美啦。但是手动去点击浏览器的前进后退，路由变啦，页面数据没有变(
                    因为是在同一个组件，组件相应的钩子不会触发)。MTF。想着监听路由的变化，onhashchange
                    当改变时就刷新下页面，没想到的是这个不行，刷新时，刚开始可以显示相应类别的食品，
                    当时组件相应的钩子也会触发，会派发新的action会有闪动

                    自动刷新是不可行的

                    那？？？  可以派发一个action就行啦。目前能解决这个问题难题。
        
        recomend/index.jsx componentDidMount -->
            (```)
                window.onhashchange = () => {
                    store.dispatch({
                            type: "get_type_shop",
                            shopType: this.props.match.params.name
                        });
                }   //  ***** 监听路由变化不能随便乱加，这个是在全局下监听的，弄不好整个全局的数据就不好把控因为数据的变更会引起组件及子组件的重新渲染。


                const action = getAllShop();
                setTimeout(() => {
                if (this.props.match.params.name) { 
                    store.dispatch({
                            type: "get_type_shop",
                            shopType: this.props.match.params.name
                        });
                        store.dispatch({
                            type: "chang_loading",
                            data: false
                        });
                    }else{
                        store.dispatch(action)
                    }
                }, 1000);
            (```)

        2. 监听onhashchange方法，虽然可以实现手动去点击浏览器的前进后退时，对应的数据得到更新，
          但是不好的一点就是，这样子，当从shopDetail点回来的时候，每次多会派发一个action 去更改数据，
          页面就存在刷新一下的效果，这并不是想要的。

            思路： 可以利用storage来做缓存，首页shopType做个缓存，当从shopDetail切换回首页的时候，
            进行相应的判断，当前路由的参数是不是等于shopType，要是相等，就不派发action;
            这一步也是做一个优化，当切换回来的时候，如果shopType和缓存的是以样的，及不在派发action;
       
### 路由多惨数
    to = {{pathname:"/shopDetail/" + ele.s_name, params:{price:ele.price}}}

    获取： this.props.location.params.price   但是页面刷新就会丢失数据；


####  首页价格传到shopDetail里面  / 总评价数
    本来设想shopDetail里的价格，可以从首页的 recomend 里通过父子组件的形式将数据传递过来，
    但是因为用到了路由。父子组件的传参，就实现不小，就想着用路由传参，当时多参时，像上面的方法，
    是可以实现，当时当用户手动的去刷新页面的话，数据就会丢失。

    算啦： 还是用本地的缓存吧，sessionStorage
        当recomend点击相应的类型是，就价格价格做一个缓存，在shopDetail去取值。


### 假路由的设置    
    recomend/index.jsx
    to = {"shopDetail/" + ele.s_name + ".html"}

    shopDetail/index.jsx componentDidMount 获取参数是，应该拆解一下
    const param = this.props.match.params.name.split(".")[0];


## foodPage的开发
    (I): 怎么获取数据
        A:设计数据接口，从shopDetail的数据接口里加上另一个参数，对应的foodName， 
        去查商家下单独的一种食物.

        store-> reducer.js  createAtction.js actionType.js

        思路： foodPage由shopDetail页进入，所以该页点击时，就去初始化foodPage的数据，
        因为只有在这里才能获取到shop_name foodName这两个接口所需要的参数,

        A方法可以实现初始化foodPage的数据，但是如果在foodPage页面，用户主动去刷新的话，
        页面的数据就会丢失，解决的方法：可以结合foodPage组件的生命周期函数componentDidMount，
        防止在当前组件下刷新数据丢失的情况，在这个生命周期函数里，去初始化数据（请求接口）。
        但是shop_name在该页面是获取不到的，foodname可以通过动态路由的参数获取，
        this.props.match.params.name.  shop_name可以通过sessionstorage，
        在shopDetail时存一下。这样接口的两个参数就齐全了。

        这个方法缺点就是： 请求接口过于频繁。若用户一直主动去刷新页面，
        或者点击shopDetail里的具体食物时，都会发送请求。

        B：借用shopDetail的数据，--> 进行筛选就可以，在foodPage页面里componentDidMount里，
        派发一个action,这个action在shopDetail的reducer.js下处理，当注意这里在初始化shopDetail的数据是，
        应提前保存一份（用sessionStorage）,不然手动刷新时，数据还是会丢失。


        这种方法，减少了请求的总次数，并且相应的时间会比较快。
                不好的地方可能就是，数据的高度耦合
                然后就出现了下面的问题。。。
                    |
                    ^

######  做完才发现的却点：真是要命：：：：：：：
        解决啦，
            当用B方法时，当从shopDetail进入foodInfo时，在shopDetail 下的reducer.js 
            里面会接收到三次的action, 第一次是 shopDetail 点击时发的，
            第二次是：foodInfo componentDidMount 发的
            第三次就诡异了： 他是recomend index.jsx下监听路由变化时发的，
            会跟新数据后，会引起一系列的问题。
            （解决： 必须再加一个限制条件 this.props.match.params.name 存在时才发。）
            




### 解决问题： 
    当从主页进入到shopDetail时，数据会有闪动，就是会有上次的数据的闪屏，然后才显示出正确的数据
        解决： 
            在shopDetail  componentWillUnMount 这个钩子里面处理，在该逐渐即将注销的时候就将组件内的数据
                初始化为空数据，当下次进来的时候，就不会存在闪数据的效果。


----------------------------9-8--------------------------------------------------------------
## foodPage 下的评论接口对接


## 评论页面接口及页面的开发
    存在的问题：评论数据可以全部取到，但是区分出差评、好评的数量还没完成


## 主页滚动，切换路由时，切回来时的停留位置
    用sessionStorage来存滚动的位置。切换回来的时候就dom.scrollTop = XXX


## 城市页面选择页的开发
    接口调试，页面布局

    遇到的难题： 就是重新洗数据， allcity比较难。

    存在的缺点：去掉了 字母的排序，就不能 直接点击相应的字母到相应的区位

    遇到的问题：传参数
        当点击时传递参数：
            <a href = "" onClick={(e) => this.getName(e, text)}>
            传递事件源对象和参数

            <a href = "" onClick={this.getName.bind(text)}>
            只能参数好像


## 商家详情页  shopDetail下，商家位置的定位
    理由百度地图的接口

    登入百度地图开发平台 --》 注册 --》 在控制台创建应用 --》 设置相应的白名单 --》 * 所有的域名都可以访问

    注意秘钥： ak 

    具体详细见：api 开发文档

    html中引入：
    <script type="text/javascript" src="http://api.map.baidu.com/api?v=3.0&ak=UmzCwvuleRNVeDe2Z5gGsOtObaTzWsmx"></script>

## ************  login 页面
    axios post 发送的是json格式的，application/json
    服务端允许接收的content-type : text/plain   multipart/form-data  application/x-www-form-urloncoded

    如果是发josn格式的，浏览器会先发一个预请求，看服务端是否接收json格式的content-type
    如果不通过。则请求失败，

    *****一： 更改axios post发送数据的格式 √
    *****   利用formData 将数据串联成表单数据格式
    *****   axios.post('..', formData, 
                    {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
                  ).then( (res) => {]})

    *****    express 服务端解析： 借助express-formidable req.fields 非文件的数据 req.field文件数据
    *****   
        若上面用nginx代理，好像可以允许axios post 直接发送json，在express  req.body可以解析到
       < 想想用postmen ,测试post application/json是可以通过的 >

    二：在服务端设置允许的content-type 
        .......


    三；登入后：后端会返回用户名，前端将用户名做一层缓存(sessionStorage)



## 退出页面（登出）
    发个请求将服务端的缓存清空就可以，
    当res.session.userName = ''时，前端在访问需要登入的页面时，后端会返回res.session.userName,返回为空，就是为登入，就的重新登入。

## *************   axios 跨域请求和携带cookie   服务端允许跨域的设置（基于express  cors 插件）
    axios 请求是不携带cookie的，
          当服务端接收到axios请求时，会派发一个session_id（可以理解成token），因为axios不携带cookie,这个session_id就不会别带回带客服端。进而让人误认为服务端没有派发。

          axios配置项有一个withCredentials，表示跨域请求时是否需要使用凭证，默认值为false
          即axios在发起跨域时默认不携带cookie。


          axios.defaults.withCredentials=true; 这个设置允许axios携带cookie。
          但是当这是这个时：在跨域的情况下，服务端就不能设置"Access-Control-Allow-Origin":"*",
          因为这个会和axios.defaults.withCreadentials= true冲突。

          解决： （1）：需要配置指定的地址：如：req.setHeader("Access-Control-Allow-Origin","http://localhost:3000")
                （2）： express服务端，可以使用 cors 跨域插件：npm i cors --save ,
                        const cors = require("cors");
                        app.use(cors({
                            credentials: true,  //还没搞清楚为什么要这true,false时好像也可以将                        cookie派发给客户端。
                            origin: "http://localhost:3000",
                            <!-- origin: "*" -->//会和前端axios起冲突。
                        }))

    ****拓展：axios 请求拦截器：axios.interceptors.request.use()
                响应拦截器：axios.interceptors.response.use()

## homeHeader comHeader 的登入校验
    在这两个头里面有进入用户页的链接：myPage

    效果：如果用户没有登入的话就强制跳转到： login页面
          如果有登入的话，就跳到myPage页面

    怎么判断有没有登入： 接口：/api/loginCheck  请求这个接口会将session_id通过cookie带过来，当req.session.userName存在的话就表示有登入，如果没有就没有登入。的登入后才能进入myPage。

## 隐藏login页面
    myPage： 有两个头可以进入：登入时，会由login进入到myPage页面，myPage头部的返回时，因为是window.histoty.go(-1),这时就会返回到登入页，这是不好的体验，这时应该直接返回到进入登入也的那个页面。

    解决：在两个头点击我的按钮是，会进行相应的登入验证，若没有登入，登入后，myPage:window.histoty.go(-2)
          第一次这样，（-2）的话就会直接跳过登入页，返回到进入登入页的页面。

          第二次：当已经登入过，就直接到myPage页面，可以在这里做个手脚，window.histoty.pushState('/use/page')，在路由中加一层，当myPage.  go(-2)时才能正确的回到进入myPage的页面。


## myPage 用户名的获取
    两个头，当验证已经登入时，服务器会返回用户的姓名，在跳转时（定向），进行myPage reducer.js里面数据的初始化（store.dispacth(action)）,还做了一层缓存，防止用户自动刷新时，数据会到初识的空数据。

    上面的缓存没有必要，因为在登入的时候（loginPage里面）,当点击登入时已经做了缓存，在两个头进入myPage判断时，当有登入时，返回用户名，没有必要在缓存，因为如果有登入，用户名已经有缓存啦。



<!-- ##  数据缓存的配置
    res.setHeader("Cache-Control","max-age=10000"); -->



## myInfo 页面的整理
    分为三个板块： 修改用户名，修改密码，绑定手机号
    修改用户名： 主要的函数是： changeUsName()  正则 数据的串联 根据返回的结果进行操作
                        后端： 进行相应sql的处理, 清除req.session.userName,以免前端用缓存假登入
    改改密码：   主要函数：postUserPas()  大概思路同上（修改用户名）;



## changeUserPas
    利用伪元素放icon字体
        &::after{
            content: '\\e61b';  //需要转义
            display: block;
            width:10px;
            height: 10px;
            position: absolute;
            top: .28rem;
            right: .5rem;
            font-family: "iconfont" !important; //加上字体
            font-size: .38rem;
        }


## foodPage 立即预定（订餐）
    和comHeader homeHeader 两个头差不多，两个头要进入myPage前要先判断下是否已经登入，

    立即预定也要先判断下是否已经登入： window.location.href = "url"

    myPage中的  window.history.go(-2),  是为了响应： comHeader / homeHeader/ foodPage 中的 window.history.pushState({} "#/user/login"),  
     
    在路由上加一层，当go(-2) 时 ，就会跳过登入页面，达到将登入页面隐藏的效果.


## orderToPay  待付款页面
    有一个取消按钮， 有一个支付按钮

    取消按钮： 当点击时会将订单的编号到过去，删除订单， 然后再将剩余的订单查询出来，返回给前端，前端通过这个去改redux里的数据，就有种当点击时，被点击的订单消失，其他订单还好好的。

>>>>>>这个要注意： orderToPay  orderToCom orderToUse  共同用一个数据。

    支付按钮： 但点击时，通过路由将商店名，总价格，订单编号带过去，在支付的时候以订单编号为准去更改数据库订单的状态。


## foodPage页面（请求数据需要带的参数： shop_name , food_name ）
    allOrder
    orderToUse
    orderToCom
    orderToPay

    shopDetail

    都可以进入到foodPage,  进来时，通过路由将shop_name, food_name带过来， foodPage带着参数去请求相应的数据进行展示

    有一个情况： 第一次进入foodPage时，再一次进入，会闪一下上次食品的数据，比如图片。为了更好的体验感，在foodPage每次即将销毁是，派发一个action，将数据清空。下次进来的时候就不会有闪数据的情况。


## 注意三个页面:  orderToUse orderToCom orderToPay 同用一个store文件。
    也会出现上面数据一闪的情况，

    同理： 在组件即将销毁的时候就清空数据。


## 浏览器缓存的问题：
    chrome 浏览器的控制台的  Disable cache 如果打钩的话，就会忽略缓存，

    express  etag

## etag 数据签名
    //关于数据签名，缓存验证
    // app.use(express.static(path.join(__dirname, 'public')));
    // app.use(express.static(path.join(__dirname, 'public'), {
    //         etag: false
    // }));
    //返回的数据不存在验证缓存， 前端每次请求都是新的数据
    //若不关掉，前端会优先从缓存中去，请求不会是一个新的请求，导致一些问题，如评论：当评论完，刷新页面，评论的内容并没有更新，
    // 就是因为，前端通过etag验证，后端验证数据签名没有变，请求的数据会从缓存中取，不会派发一个新的请求。

    // app.set('etag', false); // turn on

    express 源码里可以找的到。



## md5 加密
    对密码进行加密


## express 中间件的使用  user.js(router)
    nameUniquCheck: 用于用户名的检测，如果用户名已经注册了，就返回注册失败，该用户名已经注册啦，
    如果没有，就执行下一个中间件。


## sql注入  xss攻击 密码加密md5
    sql注入： 
        const escap = require('mysql').escape  --> 是一个方法

    xss： 
        只用在了  评论的内容里



>>>>>>>项目的缺点： axios 没有封装，有点代码的冗余，和不好维护。
>>>>>>>            太多的依赖与 sessionStorage 的缓存


>>>>>>>最难把控的是: 因为是web app，浏览的时候，手机浏览器下面有返回键，
>>>>>>>             如： 在退出也(myInfo) 成功退出后页面利用location.href
>>>>>>>                  跳到home、但是当用户点击手机浏览器的返回键时，就会
>>>>>>>                  在回到muInfo。这是不合常理的.

>>>>>>> 单页应用而且路由掌握在前端，很难把控。

>>>>>>>  后端整体的容错机制不是很完善，一旦报错，promise没有处理。