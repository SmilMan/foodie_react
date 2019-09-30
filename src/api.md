## 获取首页所有是商家的信息
    get;
    http://localhost:8000/api/home;

##  获取具体商家的信息
    get;
    http://localhost:8000/api/shopdetail？shopName = "参数";
    query {
        shopName: "商家名"
    }

## 获取商家加该商家内一个具体的食物信息，用于foodInfoPage
    get ;
    http://localhost:8000/api/shopdetail? shopName = "商家名"& food = "具体食物名";
    query {
        shopName: "商家名",
        food: "食物名",
    }

## 获取相应食品的评论
    get:
    http://localhost:8000/api/common?foodname= 
    query {
        foodname: "食品名称"
    }

## 获取城市
    get
    http://localhost:8000/api/city


## 用户登入
    post 
    http://localhost:8000/api/login
    
    data{
        userName
        userPas
    }

## 登入校验
    get
    http://localhost:8000/api/login

    query {
        userNmae: ..,
        status:..,
        msg: ..
    }

   
## 修改用户名  users 
    post
    http://localhost:8000/api/update/userName
    data {
        userName,
        newName
    }

## 修改密码 users
    post 
    http://localhost:8000/api/update/userPas
    data {
        userName,
        newUserPas
    }

## 创建订单数据，状态为未支付 (在提交订单时创建)
    post 
    http://localhost:8000/api/pushOrder
    data {
        shopName,
        foodName,
        price,
        imgUrl,
        userName,
        statu
    }

## 当付款时改变订单的状态
    post 
    http://localhost:8000/api/updateStatu
    data{
        statu: "待使用"
    }


## 获取全部订单的数据
    get
    http://localhost:8000/api/getAllOrder


## 获取相应类型的订单数据
    get
    http://localhost:8000/api/getClassOrder
    query{
        classfy(类型)
    }

## 按照订单的编号来获取订单数据(用于订单的详情页)
    get
    http://localhost:8000/api/getNumberOrder
    query{
        number(订单的编号)
    }

## 按照订单的编号来删除订单（取消未支付的订单）
    post
    http://localhost/api/deleteOrder
    data{
        number(订单的编号)
    }

    return 剩余订单的数据



    