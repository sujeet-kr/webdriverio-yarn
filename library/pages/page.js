'use strict';
const YamlReader = require('../support/yaml-reader');

class Page {
    constructor(){
        this.title = 'Login Page';
    }
    getCredentialsData(parentData){
        var ymldata = eval("YamlReader.yamlDataFileObject('dev-credentials.yml')." + parentData);    
        return ymldata;
    }
}
module.exports = Page;