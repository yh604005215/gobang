const express = require('express');
const multer = require('multer');
const {register,login,getInfo,update,upPassword} = require('../controllers/userController');
const router = express.Router();
const auth = require('../middlewaares/auth');
const upload = multer({
    dest:'./uploads'
})


/**  
 * @api {post} http://localhost:4000/register 注册
 * @apiGroup user
 *
 * @apiParam {String} nickname  用户昵称
 * @apiParam {String} password  用户密码
 *
 * 
 * 
 * @apiSuccess {Number} code  错误状态码
 * @apiSuccess {String} msg 错误消息
*/

router.post('/register',register);



/**  
 * @api {post} http://localhost:4000/login 登录 
 * @apiGroup user
 *
 * @apiParam {String} nickname  用户昵称
 * @apiParam {String} password  用户密码
 *
 *
 * @apiSuccess {Number} code  错误状态码
 * @apiSuccess {String} msg 错误消息
 * @apiSuccess {String} token token
*/
router.post('/login',login);


/**  
 * @api {get} http://localhost:4000/getInfo 获取当前登录用户的基本信息
 * @apiGroup user
 *
 *
 * @apiParam (Headers) {String} Authorization token
 * @apiSuccess {Number} code  错误状态码
 * @apiSuccess {String} msg 错误消息
 * @apiSuccess {Object} data 当前用户的基本信息
*/

router.get('/getInfo', auth, getInfo);


/**  
 * @api {put} http://localhost:4000/users/update 修改当前用户信息
 * @apiGroup user
 *
 *
 * @apiParam (Headers) {String} Authorization token
 * @apiSuccess {Number} code  错误状态码
 * @apiSuccess {String} msg 错误消息
 * @apiSuccess {Object} data 当前用户的基本信息
*/

router.put('/users/update', auth, upload.single('avatar'), update);


/**  
 * @api {post} http://localhost:4000/users/uppassword 修改密码
 * @apiGroup user
 *
 *  @apiParam {String} password  用户密码
 *  @apiParam {String} userId  用户id
 *  @apiParam (Headers) {String} Authorization token
 *  @apiSuccess {Number} code  错误状态码
 *   @apiSuccess {String} msg 错误消息
 * 
*/

router.post('/users/uppassword',auth, upPassword);





module.exports = router;