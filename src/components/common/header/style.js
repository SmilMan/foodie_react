import styled from 'styled-components'

export const Header = styled.header`
    background: rgba(250, 250, 250, 0);
    min-width: 300px;
    display: flex;
    color: #fff;
    padding: .15rem 0rem;
    .logoStyleHeight{
       height : .7rem;
    }
    .logoStyleNoHeight{
        height: 0rem;
    }
`

export const CityWrap = styled.div`
    width: 1.7rem;
    height: .8rem;
    font-size: .35rem;
    line-height: .8rem;
    text-align: center;
    min-width: 50px;
    div{
        text-decoration: none;
    }
`

export const Title = styled.div`
    font-size: .3rem;
    flex-grow: 1;
    text-align: center;
    line-height: .8rem;
    height: .8rem;
    img{
        height: 0;
    }
`

export const Personal = styled.div`
    width: 1.7rem;
    height: .8rem;
    text-align: center;
    line-height: .8rem;
    font-size: .6rem;

`