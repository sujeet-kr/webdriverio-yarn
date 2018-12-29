'use strict';

class Page {
    constructor(){
        this.title = 'Login Page';
    }
    open(path){
        browser.url(path);
    }
}
module.exports = Page;