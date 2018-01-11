function FormValidate()
{
    var username = document.getElementById('usr').value;
    var password = document.getElementById('pwd').value;
 
    if (username == ''){
        alert('Bạn chưa nhập tên đăng nhập');
    }
    else if (password == ''){
        alert('Bạn chưa nhập mật khẩu');
    }
    else if (username == 'admin' && password == 'admin'){
        location.href = "Index.html";
    }
    else{
        alert('Nhập sai username hoặc password, vui lòng nhập lại!');
        return true;
    }
    return false;
}

