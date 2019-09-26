## 获取首页所有是商家的信息
    get;
    http://localhost:8000/api/home;

##  获取具体商家的信息
    get;
    http://localhost:8000/api/shopdetail？shopName = "参数";
    params {
        shopName: "商家名"
    }

## 获取商家加该商家内一个具体的食物信息，用于foodInfoPage
    get ;
    http://localhost:8000/api/shopdetail? shopName = "商家名"& food = "具体食物名";
    params {
        shopName: "商家名",
        food: "食物名",
    }

## 获取相应食品的评论
    get:
    http://localhost:8000/api/common?foodname= 
    params {
        foodname: "食品名称"
    }

## 获取城市
    get
    http://localhost:8000/api/city


## 用户登入
    post 
    http://localhost:8000/api/login

## 登入校验
    get
    http://localhost:8000/api/login

    res {
        userNmae: ..,
        status:..,
        msg: ..
    }
