/*** 
 * 麻将游戏的主场景
 * tony
 * 2017-05-12
 * */

module.exports = cc.Class({
    extends: cc.Component,
   
    onLoad:function(){
        //window.g_GameData大厅选则游戏之后就会创建 断线重连回来也会创建
        var gameName =  window.g_GameData.getGameName(); 
        var bfPath = './'+gameName+'/'+gameName;

        //业务逻辑的处理
        var BusinessPath = bfPath+'Business.js';
        var Business = require( BusinessPath );      
        this.mBusiness = new Business();
        this.mBusiness.onInitUI( this.node );
                
    },   
});
