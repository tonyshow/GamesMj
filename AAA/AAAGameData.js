
/****客户端游戏数据 */

var ClientBaseGameData = require('./../../ClientFrameWorkMj/ClientBaseGameData');

var AAAGameData = function(){

};

var pro = AAAGameData.prototype;

/***玩家总人数 
 * 因为有可能是两个人 、三个人、四个人的游戏
*/
pro.getPlayerCnt = function(){
    //必须实现
    return 4;
};

/*** 断线重连 */
pro.resetData = function(){
    //必须实现
};