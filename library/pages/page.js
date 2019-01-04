'use strict';
const YamlReader = require('../support/yaml-reader');
const argv = require('yargs').argv; 

class Page {
    constructor(){
        this.title = 'Login Page';
    }
    getCredentialsData(parentData){
        let envToExecute = argv.env;
        if(!argv.env){
            envToExecute = 'dev';
        } 
        const ymldata = YamlReader.yamlDataFileObject(envToExecute + "-credentials.yml")[parentData];    
        return ymldata;
    }
}
module.exports = Page;