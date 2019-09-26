/**
 * 
 * @param {Object} doc 
 * @param {Object} win 
 * @param {Number} designWidth 
 */
const setHtmlFontSize = function(doc, win, designWidth){
    const html = doc.documentElement;

    const clientwidth = html.clientWidth || win.innerWidth

    if (clientwidth > designWidth) {
        html.style.fontSize = '100px';
    }else {
        //iphone 6 为例 375 / 750 * 100  设计图中：直接量出尺寸，处于100 就得到rem
        html.style.fontSize = 100 * (clientwidth / designWidth) + 'px';
    }
    console.log(html.style.fontSize)
}


export default setHtmlFontSize