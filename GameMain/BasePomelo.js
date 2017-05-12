/***网络请求基类 */
var BasePomeloClient = function(){

};

var pro = BasePomeloClient.prototype;

/***发生数据请求包
 * 
 */
pro.send = function( route , msg , cb  ){
    MsgNetWait.create();
    pomelo.request(route, msg, function (data) {
           MsgNetWait.close();
           cb(data);           
    });
};


/***游戏网络数据*/
var BasePomelo = function(){
    this.msg = {};
};

var pro = BasePomelo.prototype;

/***向服务器请求出牌
 * _msg :  {id:1};
 */
pro.sendCard = function( _msg , cb ){
    //路由
    var route = '';
    (new BasePomeloClient()).send( route,_msg , cb );
};

/***向服务器请求动作
 * 比如：碰、吃、杠
 * _msg : { enumAction : 1 , cards : [1,2] }
 */
pro.sendAction = function(  _msg , cb ){
    //路由
    var route = '';
    (new BasePomeloClient()).send( route,_msg , cb );
};

module.exports = BasePomelo;