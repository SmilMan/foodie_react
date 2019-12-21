import style from "styled-components"

export const Header = style.header`
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
export const Back = style.div`
    width: 1rem;
    height: 1rem;
    line-height: 1rem;
    box-sizing: border-box;
    padding-right: .2rem;
    .icon{
        font-size: .8rem !important;
    }
`
export const Title = style.div`
    flex-grow: 1;
    height: 1rem;
    line-height: 1rem;
    font-size: .36rem;
    font-weight: 400;
    text-align: center;
`
export const NavWrap = style.div`
    height: 1rem;
    line-height: 1rem;
    display:flex;
    .right-nav{
        width: 1rem;
        text-align: center;
        .icon{
            height: 0rem;
        }
        .icon-nav{
            font-size: .4rem;
        }
    }
`

export const Dec = style.div`
    background: #fff;
    min-width: 300px;
    padding: .6rem 0 .9rem .3rem;
    .totle-recoment{
        font-size: .38rem;
        .icon{
            color: #f90;
        }
    }
    .classfy{
        font-size: .28rem;
        margin-top: .5rem;
        span{
            margin-left: .3rem;
            color: #FDB338;
            cursor: pointer;
            border:1px solid #FDB338;
            padding: .1rem .2rem;
        }
    }
`

 export const CommentWrap = style.div`
    min-width: 300px;
    background: #fff;
    font-size: .34rem;
    position: absolute;
    top: 3.7rem;
    right: 0;
    left: 0;
    bottom: 0;
    overflow-y: scroll;
    &::-webkit-scrollbar{
        width: 0px
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
        text-align: center;
        line-height: 3rem;
    }
 `