/* 
 * css_versioned (parameters)
 * Accepts the very same parameters as Hexo's css helper function .
 * It adds the package.json version number to css the path, so
 * it avoids caching on mobile devices and force them to get the latest css file.
 * See:  
 * 
 * <%- css_versioned(path, ...) %>
 *
 * <%- css_versioned('style.css') %>
 * Will return
 * <link rel="stylesheet" href="/style.css?v1">
 * 
*/
hexo.extend.helper.register('css_versioned', function(path){
    const css = hexo.extend.helper.get('css').bind(hexo);
    const pjson = require('../../../package.json');
    return css(path + '.css?v' + pjson.version ) ;
});

