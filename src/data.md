##数据库的表
    allshop(首页所有的商家信息)
        s_name: 商家名
        location: 位置信息
        price: 价格
        classfy: 商店的类别, 披萨还是西餐
        dec： 描述
        title_img: 商家的图片
        num: 总评价数
        type: 类型，小吃，甜点，，， >  用来当首页点击小图标时，进行相应的筛选
    common(具体食物信息页中的评论)
        id: id标识
        use_name: 评价的用户名
        photo: 用户的头像
        time : 评价的时间
        content: 评价的内容
        f_name: 外键  ---> 具体食物的名字
        good: 好评还是差评
    food(具体的食物信息)
        s_name: 商家的名
        start_num: 评价星数
        num： 评数
        sold: 已经售的数量
        price: 价格
        foodname: 食物名
        shop_info: 商家的位置信息
        title_img: 图片
    imgbar(foo 食物详情页的头部点击图片画廊)
        id: 标识
        foodname: 食物的名称
        imgurl: 画廊图片的地址
    order(订单表)
        id: 标识
        user_name: 用户名
        food_name: 点的食物名
        price：价格
        order_num: 数量
    shopdetail(商家详情表)
        shop_name: 商家名
        img_url: 头部的图片地址
        food_recom: 店里推荐  --》 有时可能会为空， shopDetail index.jsx  做判断，当为空时就显示  --》 该店无推荐菜
        detail_location: 具体的位置
    user(用户表)
        user_id: 用户的ID
        user_name: 用户名
        user_pas: 密码