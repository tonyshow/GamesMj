/***业务员逻辑基类*/
var BaseBusiness = function(){

};

var pro = BaseBusiness.prototype;

/***主游戏界面制作完成后调用
 *  处理游戏
 *  defaultUIFatherNode : 个性化的节点父节点载体
 */
pro.onInitUI = function( defaultUIFatherNode ){

};

/***超时处理 */
pro.timeOut = function(){

};

/***抓牌*/
pro.sendCard = function( seatIdx ){

};

/***出牌*/
pro.outCard = function( seatIdx ){

};

/***动作
 * seatIdx:逻辑座位号
 * enumAction:动作类型  吃、碰、杠、听...
 * id：动作目标  (enumAction的牌)
 */
pro.doAction = function( seatIdx , enumAction , id ){

};

/***重连成功 */
pro.resetFinsh = function(){

};
