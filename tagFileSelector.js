const glob = require('glob');
const fs = require('fs');
const TagExpressionParser = require('cucumber-tag-expressions').TagExpressionParser;

module.exports = {

    nameCheck(){
        'use strict';
        const tagParser = new TagExpressionParser();
    
        const cucumberTags = process.env.TAGS != null ? process.env.TAGS : 'not @x';
        const expressionNode = tagParser.parse(cucumberTags);
    
        const filesWithTags = glob.sync('./features/**/*.feature').map((file) => {
        const content = fs.readFileSync(file, 'utf8');

        if (content.length > 0) {
            const tagsInFile = content.match(/(@\w+)/g) || []
            if (expressionNode.evaluate(tagsInFile)) {
                return file;
            } 
        }
        return null;
        }).filter(x => x != null);
        // console.log(filesWithTags);
        return filesWithTags;
    }
}
