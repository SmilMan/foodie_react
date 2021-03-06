import styled from 'styled-components'

export const Wrap = styled.div`
    margin-top: .2rem;
    background: #fff;
    .show{
        display: block;
        padding-bottom: 1rem;
        background: #fff;
    }
    .hidden{
        display: none;
        padding-bottom: 1rem;
        background: #fff;
    }
`

export const Title = styled.p`
    font-size: .34rem;
    padding: 0rem .2rem;
    line-height: .83rem
    height: .83rem;
    text-align: center;
    border-bottom: 1px solid #eee;
`
export const Content = styled.div`
    ul{
        padding-left: .2rem;
        background: #fff;
        li{
            border-top: 2px solid #eee;
            padding: .2rem 0 .2rem 0;
            font-size: .3rem;
            .navlink{
                display: flex;
                text-decoration: none;
                .pic-wrap img{
                    width: 1.8rem;
                    height: 100%;
                }
                .dec-wrap{
                    padding-left: .2rem;
                    position: relative;
                    flex-grow: 1;
                    .name{
                        color: #333;
                        font-size: .34rem;
                        padding: .1rem 0;
                    }
                    .location{
                        font-size: .24rem;
                        color: #666;
                        padding: .2rem 0;
                        width: 4rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }
                    .many{
                        padding-top: .2rem;
                        .classfy{
                            color: #666666;
                            font-size: .24rem;
                            padding-right: .2rem;
                        }
                        .totle{
                            color: #f60;
                            font-size: .3rem;
                        }
                        .out{
                            position: absolute;
                            right: .3rem;
                            color: #f60;
                            .num{
                                color: #fa952f;
                            }
                        }
                    }
                }
        
            }

        }
    }


`