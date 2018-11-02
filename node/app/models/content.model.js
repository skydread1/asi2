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
            return data;
        };
        this.setData = (pData) => {
            data = pData;
        };

    }

    static create(content,callback){
        //Vérification du type de l'object
        if(typeof content!="object") return callback();
        let jsonObj=JSON.stringify(content);
        let urlMeta=CONFIG.contentDirectory+'/'+content.id+'.meta.json';
        fs.writeFile(urlMeta,jsonObj,'utf8',(err)=>{
            if (err) {
                return callback(err);
            };
            if(content.type!=='video' && content.type!=='img_url' && content.type!=='web')
            {
                let data=content.getData();
                let url=CONFIG.contentDirectory+'/'+content.fileName;
                fs.writeFile(url,data,'utf8',(err)=>{
                    if (err) {
                        return callback(err);
                    };
                    callback();
                })  
            }
        }); 
    }
 
    static read(id,callback){
        let pathFile=utils.getMetaFilePath(id);
        utils.readFileIfExists(pathFile, function(err,file){
            if(err) {
                return callback(err, null);
            }
            callback(null, new ContentModel(JSON.parse(file)));
        });
    }


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

    static delete(id,callback){

        ContentModel.read(id,function(err,objContent){
            if(err){
                return callback(err,null);
            }
            let path=utils.getMetaFilePath(id);
            fs.unlink(path,function(err){
                if(err) return callback(err);
            })
            let pathDel=utils.getDataFilePath(objContent.fileName);
            fs.unlink(pathDel,function(err){
                if(err) return callback(err);
            })
        })
        callback();
    }
}

module.exports = ContentModel;