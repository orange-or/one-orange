// JavaScript代码，用于切换密码输入框的显示和隐藏
function togglePasswordVisibility() {
    var passwordInput = document.getElementById('password');
    var toggleimg = document.getElementById('toggleimg')
    // 切换密码输入框的type属性
    if (passwordInput.type === 'password' && toggleimg.src.includes('hide')) {
    passwordInput.type = 'text';
    toggleimg.src = "/one-orange/img/show.png";
    } else {
    passwordInput.type = 'password';
    toggleimg.src = "/one-orange/img/hide.png";
    }
}

// 点击验证账号密码
var users = [
    { username: '小胡', password: 'xiaohu', redirectURL: 'aixin.html' },
    { username: '罗洁', password: 'luojie', redirectURL: 'aixin2.html' },
    { username: 'buzhidao', password: 'buzhidao', redirectURL: 'aixin2.html' },
    { username: '何', password: 'he', redirectURL: 'lianxi.html' },
    { username: '宝宝', password: '20241011', redirectURL: '/one-orange/anniversaries of important events/纪念日.html' },
    // 添加更多账号密码
  ];
  
  function checkLogin() {
    // 获取用户名和密码输入框的值
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var tangchuang = document.getElementById('tangchuang');

    // 检查用户名是否为空
    if (username.trim() === '') {
        tangchuang.style.display = 'block';
        document.getElementById('tangchuangtext').innerHTML = "还没输入名字呢~";
        return; // 结束函数，不进行后续验证
    }
    // 检查密码是否为空
    if (password.trim() === '') {
      tangchuang.style.display = 'block';
      document.getElementById('tangchuangtext').innerHTML = "还没输入密码呢~";
      return; // 结束函数，不进行后续验证
  }
    
    // 遍历用户数组，检查用户名和密码是否正确
    var isMatched = false;
    for (var i = 0; i < users.length; i++) {
        if (username === users[i].username && password === users[i].password) {
            // 跳转到对应页面
            window.location.href = users[i].redirectURL;
            isMatched = true;
            return; // 结束函数，已经找到匹配
        }
    }
    // 如果循环结束仍未找到匹配，弹出警告框
        tangchuang.style.display = 'block';
    document.getElementById('tangchuangtext').innerHTML = "可能是账号或者密码错了吧~";
}

  function guanbi(){
    tangchuang.style.display = 'none';
  }
  function on(){
    var tc = document.getElementById('tangchuang');
    tc.style.display = 'block';
    document.getElementById('tangchuangtext').innerHTML = "抱歉该功能未开发";
    
  }
