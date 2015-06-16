// JavaScript Document

/**
 * @name     :regLoginTab
 * @author   :Nice
 * @dependent:登陆注册切换
 */
function regLoginTab(id) {
    var e=$("#"+id);
    var tab=e.find('.tab');
    var tabItme=tab.find('.itme');
    var content=e.find('.content');
    var contentItme=content.find('.itme');

    
    tabItme.click(function(event) {
        contentItme.removeClass('none');
        var i=$(this).index();
        
        contentItme.css({
            display: 'none'
        });
        console.log(contentItme[i]);

        $(contentItme[i]).css({
            display: 'block'
        });

        tabItme.removeClass('hover');
        $(this).addClass('hover');
    });

}
/* @end **/

regLoginTab('regLoginBox');


/**
* @name		:
* @author	:Nice
* @version	:
* @type		:基类
* @explain	:
* @relating	:
* @dependent:
*/

/* @end **/