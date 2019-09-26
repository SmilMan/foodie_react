import style from 'styled-components'

export const ContWrap = style.div`
    position: absolute;
    top: 1rem;
    bottom: 0;
    left: 0;
    right: 0;
    min-width: 300px;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0px
    }
    .logo-wrap{
        height: 2.2rem;
        .header-logo{
            width: 100%;
            height: 100%;
        }
    }
`
export const Content = style.div`
    .gallery-wrap{
        position: relative;
        height: 3.2rem;
        width: 100%;
        .gallery-title{
            height: 100%;
            width: 100%;
        }
        .icon{
            width: 1rem;
            height: 1rem;
            text-align: center;
            line-height: 1rem;
            position: absolute;
            bottom: .3rem;
            right: .3rem;
            z-index: 1;
            font-size: .6rem;
            color: #eee;
            background-color: #000;
            opacity: 0.5;
            border-radius: 50%;
            text-decoration: none;
        }
    }
`
export const ShopInfo = style.div`
    background: #fff;
    padding-left: .2rem;
    box-sizing: border-box;
    .shop-name{
        padding-bottom: .2rem;
        .name{
            font-size: .32rem;
            padding: .3rem 0;
        }
        .star-price{
            display: flex;
            .star{
                font-size: 0rem;
                span{
                    display: inline-block;
                    .icon{
                        color: #fa952f;
                        width: .28rem;
                        height: .28rem;
                    }
                    .num{
                        color: #fa952f;
                        font-size: .3rem;
                        margin-left: .2rem;
                    }   
                }
            }
            .price{
                font-size: .3rem;
                color: #999;
                margin-left: .6rem;
            }
        }
    }
    .shop-location{
        border-top: 1px solid #ddd8ce;
        font-size: .28rem;
        display: flex;
        padding: .17rem 0;
        .location-info{
            display: flex;
            flex-grow: 1;
            .location-icon{
                display: inline-block;
                line-height: 1rem;
                width:1rem;
                text-align: center;
            }
            .location{
                flex-grow: 1;
                padding: .28rem 0;
                line-height: 1.41;
            }
        }
        .icon{
            width: 2rem;
            height: 1rem;
            .icon-link{
                display: block;
                color: #06c1ae;
                height: 80%;
                margin: .1rem 0;
                line-height: .8rem;
                text-decoration: none;
                border-left: 1px solid #ddd8ce;
                text-align: center;
                i{
                    font-size: .5rem;
                }
            }
        }

    }
`
export const FoodInfo = style.div`
    margin-top: .2rem;
    background: #fff;
    .title{
        margin-left: .2rem;
        font-size: .34rem;
        font-weight: 400;
        padding: .2rem 0;
    }
    .no-food{
        padding: .5rem 0 .5rem .7rem;
        font-size: .34rem;
        color: #eee;
        border-top: 1px solid #eee;
    }
    .food-link{
        text-decoration: none;
        cursor: pointer;
        .food-content{
            border-top: 1px solid #eee;
            padding: .2rem 0 .2rem .2rem;
            display: flex;
            font-size: .34rem;
            .img-wrap{
                height: 1.6rem;
                width: 2.3rem;
                img{
                    width: 100%;
                    height: 100%;
                }
            }
            .cont-info{
                padding-left: .3rem;
                width: 100%;
                .info-title{
                    color: #333;
                    height: .7rem;
                    -webkit-line-clamp:2;
                    -webkit-box-orient: vertical;
                    text-overflow: ellipsis;
                    overflow: hidden;
                    margin-bottom: .4rem;
                    padding-right: .1rem;
                }
                .price-info{
                    display: flex;
                    .price{
                        flex-grow: 1;
                        color: #06c1ae;
                    }
                    .sold{
                        color:#333;
                        font-size: .24rem;
                        text-align: center;
                        width: 2.5rem;
                    }
                }
            }
        }
    }
`

export const FoodRecom = style.div`
    margin-top: .2rem;
    padding-bottom: .2rem;
    background: #fff;
    .recom-title{
        font-size: .34rem;
        font-weight: 400;
        margin-left: .2rem;
        padding: .2rem 0;
        border-bottom: 1px solid #eee;
    }
    .recom-cont{
        font-size: .3rem;
        font-weight: 400;
        padding: .28rem .2rem;
        span{
            display: inline-block;
            margin-right: .24rem;
            margin-bottom: .2rem;
        }
    }
`
 
export const ShopDec = style.div`
    margin-top: .2rem;
    background: #fff;
    padding-left: .2rem;
    font-size: .34rem;
    font-weight: 400;
    .title{
        padding: .2rem 0;
    }
    .content{
        .flex{
            display: flex;
            padding: .3rem 0;
            border-top: 1px solid #eee;
            .pr{
                padding-right: .3rem;
            }
        }
    }
`
