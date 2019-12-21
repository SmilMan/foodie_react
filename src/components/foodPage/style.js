import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    min-width: 300px;
    height: 1rem;
    background: #06c1ae;
    color: #fff;
    .icon-wrap{
        text-decoration: none;
        color: #fff
        display: block;
        height: 1rem;
        min-width: .3rem;
        line-height: 1rem;
        .icon{
            display: block;
            width: 100%;
            height: 100%;
            line-height: 1rem;
            font-size: .5rem;
        }
    }
`
export const Back = styled.div`
    width: 1.5rem;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    padding-right: .5rem;
    .icon{
        font-size: .8rem !important;
    }
`
export const Title = styled.div`
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
`
export const NavWrap = styled.div`
    width: 1.5rem;
    height: 1rem;
    line-height: 1rem;
    display:flex;
    .right-nav{
        width: .8rem;
        text-align: center;
        .icon{
            height: 0rem;
        }
        .icon-nav{
            font-size: .5rem;
        }
        .dec{
            font-size: .2rem;
        }
    }
`

export const ContWrap = styled.div`
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

export const FoodInfoTitle = styled.div`
    .img-wrap{
        position: relative;
        height: 3.9rem;
        img{
            height: 100%;
            width: 100%;
        }
        .title-info{
            font-size: .38rem;
            position: absolute;
            bottom: 0rem;
            width: 100%;
            box-sizing: border-box;
            padding-left: .3rem;
            padding-bottom: .3rem;
            color: #fff;
            p{
                font-size: .24rem;
                line-height: .5rem;
                padding-left: .1rem;
            }
            &::after{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                display: block;
                content: '';
                height: 1.5rem;
                background: -webkit-linear-gradient( bottom, rgba(0, 0, 0, 0.58), rgba(0, 0, 0, 0.3) 64%, transparent );
                z-index: -1;
            }
        }
    }
    
    .price-info{
        font-size: .38rem;
        background: #fff;
        .wrapper{
            display: flex;
            height: 1.3rem;
            border-bottom: 1px solid #eee;
            .price-wrap{
                line-height: 1.3rem;
                padding-left: .2rem;
                flex-grow: 1;
                color: #06c1ae;
                .price{
                    font-size: .6rem;
                    padding: 0 .1rem;
                    font-weight: bolder;
                }
                .dec{
                    font-size: .28rem;
                    color: #999;
                    letter-spacing: -0.02rem;
                }
            }
            .order{
                width: 2.6rem;
                margin: .2rem .2rem .2rem 0;
                line-height: .9rem;
                text-align: center;
                background: #f90;
                color: #fff;
                font-size: .4rem;
                text-decoration: none;
            }
        }
        .info{
            padding: .3rem 0 .3rem .3rem;
            font-size: .28rem;
            line-height: .56rem;
            p{
                display: inline-block;
                width: 50%;
            }
            p:nth-child(1),
            p:nth-child(2){
                color: #6bbd00;
            }
            p:nth-child(3){
                color: #666;
            }

        }

    }

 `

 export const ShopInfo = styled.div`
    margin-top: .2rem;
    background: #fff;
    .info-title{
        border-bottom: 1px solid #eee;
        font-size: 0.34rem;
        line-height: 1.5;
        padding: 0.22rem 0.2rem 0.14rem 0.2rem;
        color: #333;
    }


    .info-cont{
        font-size: .28rem;
        display: flex;
        padding: .17rem 0;
        .location-info{
            flex-grow: 1;
            padding-left: .3rem;
            padding-right: .2rem;
            border-right: 1px solid #eee;
            .location-icon{
                padding: .1rem;
                margin-top: 0;
                margin-bottom: 0.06rem;
                font-size: .38rem;
                font-weight: bolder;
                width: 5rem;
                color: #000;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
            .location{
                line-height: .5rem;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                width: 5rem;
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
                text-align: center;
                i{
                    font-size: .5rem;
                }
            }
        }
    }
 `

 export const BuyDec = styled.div`
    margin-top: .2rem;
    background: #fff;
    padding-bottom: .4rem;
    .title{
        border-bottom: 1px solid #eee;
        font-size: 0.34rem;
        line-height: 1.5;
        padding: 0.22rem 0.2rem 0.14rem 0.2rem;
        color: #333;
        margin-bottom: .3rem;
    }
    .use{
        font-size: 0.3rem;
        padding-left: .2rem;
        color: #ff9900;
    }
    .use-time{
        padding-left: .7rem;
        line-height: 1rem;
        font-size: 0.3rem;
        color: #333333;
    }
    .role{
        padding:.2rem .3rem 0 1rem;
        font-size: .3rem;
        color: #333;
        list-style-type: disc;
        line-height: .5rem;
    }
 `

 export const Recommend = styled.div`
    margin-top: .2rem;
    background: #fff;
    font-size: .34rem;
    .recom-title{
        display: flex;
        line-height: 1rem;
        .title{
            flex-grow: 1;
            padding-left: .2rem;
        }
        .num{
            width: 2.6rem;
            color: #999;
            span{
                color: #fa952f;
            }
        }
    }

    .content{
        padding:0 0 .4rem .2rem;
        border-top: 1px solid #eee;
        .wrap{
            display: flex;
            padding-top: .2rem;
            .img{
                height: 0.74rem;
                width: 0.74rem;
                img{
                    width: 100%;
                    height: 100%;
                    border-radius: 50%;
                }
            }
            .user-info{
                padding-left: .2rem;
                font-size: .24rem;
                line-height: .4rem;
                p:nth-child(2){
                    span:nth-child(1){
                        color: #fa952f;
                    }
                    span:nth-child(2) {
                        color: #999;
                        padding-left: .2rem;
                    }
                }
            }
        }
        .cont{
            padding: .2rem .2rem .3rem;
            box-sizing: border-box;
            text-indent: .2rem;
            font-size: .33rem;
            line-height: 1.41;
            height: 1.2rem;
            overflow: hidden;
        }
    }

    .no-comment{
        color: rgba(0,0,0,0.5);
        line-height: 1.5rem;
        text-align: center;
    }

    .more-recom{
        position: relative;
        color: #06c1ae;
        border-top: 1px solid #eee;
        padding: .3rem .2rem .3rem .2rem;
        &::after{
            position: absolute;
            content: ">";
            right: .4rem;
        }
        a{
            color: #06c1ae;
            text-decoration: none;
            width: 100%;
            display: inline-block;
            z-index: 1;
        }
    }
`

export const ShowImgBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    background: #000;
    img{
        width: 100%;
    }
`