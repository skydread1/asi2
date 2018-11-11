'use strict';

var fs = require('fs');
var CONFIG = require("../../config.json");
var utils=require("../utils/utils.js");

class ContentModel{
    constructor({id, fileName, type, title, src}){
        this.id=id;
        this.fileName=fileName;
        this.type=type;
        this.title=title;
        this.src=src;
        let data;
        this.getData = () => {
            if(data!=null)  return data;
            else return null;
        };
        this.setData = (pData) => {
            data = pData;
        };

    }

    /*
    Input:Object ContentModel
    Output: -[contentModel.id].meta.json that contains the metadata
            -if type='img',[content.fileName] that contains [content.data]      
    */
    static create(content,callback){
        //Vérification du type de l'object
        if(typeof content!="object") return callback();
        let jsonObj=JSON.stringify(content);
        let urlMeta=CONFIG.contentDirectory+'/'+content.id+'.meta.json';
        if(content.type!=='video' && content.type!=='img_url' && content.type!=='web')
        {
            fs.writeFile(urlMeta,jsonObj,'utf8',(err)=>{
                if (err) {
                    return callback(err);
                };
                    let data=content.getData();
                    let url=CONFIG.contentDirectory+content.fileName;
                    fs.writeFile(url,data,'utf8',(err)=>{
                        if (err) {
                            return callback(err);
                        };
                        callback();
                    })  
                
            }); 
        }
        else{
            fs.writeFile(urlMeta,jsonObj,'utf8',(err)=>{
                if (err) {
                    return callback(err);
                };
                callback();
            }); 
        }
    }
 
    /*
    Input: id
    Output: Object ContentModel from [contentModel.id].meta.json
    */
    static read(id,callback){
        let pathFile=utils.getMetaFilePath(id);
        utils.readFileIfExists(pathFile, function(err,file){
            if(err) {
                return callback(err, null);
            }
            callback(null, new ContentModel(JSON.parse(file)));
        });
    }

    /*
    Input: ObjectModel
    Ouput: -Update the metadata file [contentModel.id].meta.json
           -if type='img', update [content.fileName]
    */
    static update(content,callback){
        ContentModel.read(content.id,function(err,objContent){
            if(err){
                return callback(err);
            }
            ContentModel.create(content,function(err){
                if(err){
                    return callback(err);
                }
                else callback();
            })
        })
    }

    /*
    Input: id
    Ouput: -Delete the metadata file [contentModel.id].meta.json
           -if type='img', delete [content.fileName]
    */
    static delete(id,callback){

        ContentModel.read(id,function(err,objContent){
            if(err){
                return callback(err,null);
            }
            let path=utils.getMetaFilePath(id);
            fs.unlink(path,function(err){
                if(err) return callback(err); 
                let pathDel=utils.getDataFilePath(objContent.fileName);
                fs.unlink(pathDel,function(err){
                    if(err) return callback(err);
                    callback();
                })
            })  
        })
    }
}

module.exports = ContentModel;