document.querySelector(".login-password").addEventListener("mousedown", function(e) {
    let pwd = this.parentElement.children[0];
    console.log("鼠标按下");
    pwd.type = "text";
})

document.querySelector(".login-password").addEventListener("mouseup", function(e) {
    let pwd = this.parentElement.children[0];
    console.log("鼠标抬起");
    pwd.type = "password";
})

document.querySelector(".login-password").addEventListener("touchstart", function(e) {
    let pwd = this.parentElement.children[0];
    console.log("鼠标按下");
    pwd.type = "text";
})

document.querySelector(".login-password").addEventListener("touchend", function(e) {
    let pwd = this.parentElement.children[0];
    console.log("鼠标抬起");
    pwd.type = "password";
})

function msg(msg, type = "success", time = 1) {
    let msgDomHtml =
        `
        <div style="font-size: 16px;background-color: #d4edda;min-width: 100px;position: fixed;top: 10%;z-index: 9999;
    border-color: #c3e6cb;border-radius: 3px;border-width: 0px;text-align: center;vertical-align: middle;line-height: 40px;padding: 0 10px;">
             ${msg}
        </div>
    `;

    var dom = createDom(msgDomHtml);
    dom.style.backgroundColor = json[type].bgColor;
    dom.style.color = json[type].color;
    dom.style.borderColor = json[type].borderColor;
    dom.innerText = json[type].title + randomString(10);
    document.body.appendChild(dom);
    setTimeout(e => {
        document.body.removeChild(dom);
    }, time * 1000);
}



function msg2(msg, type = 'success') {
    let msgDomHtml =
        `
      <div class="container">
    <div class="alert alert-${type} alert-dismissible fade show">
    <button type="button" class="close" data-dismiss="alert">&times;</button>
    <strong>${msg_json[type]}</strong> ${msg}
  </div>
  </div>
    `;
    var dom = createDom(msgDomHtml);
    document.body.appendChild(dom);

    setTimeout(e => {
        document.body.removeChild(dom);
    }, 10000);
}

var json = {
    "success": {
        "color": "#155724",
        "bgColor": "#d4edda",
        "borderColor": "#c3e6cb",
        "title": "成功"
    },
    "info": {
        "color": "#0c5460",
        "bgColor": "#d1ecf1",
        "borderColor": "#bee5eb",
        "title": "信息"
    },
    "warning": {
        "color": "#856404",
        "bgColor": "#fff3cd",
        "borderColor": "#ffeeba",
        "title": "警告"
    },
    "danger": {
        "color": "#721c24",
        "bgColor": "#f8d7da",
        "borderColor": "#f5c6cb",
        "title": "错误"
    },
    "primary": {
        "color": "#004085",
        "bgColor": "#cce5ff",
        "borderColor": "#b8daff",
        "title": "首选"
    },
    "secondary": {
        "color": "#b8daff",
        "bgColor": "#e2e3e5",
        "borderColor": "#d6d8db",
        "title": "次要的"
    },
    "dark": {
        "color": "#1b1e21",
        "bgColor": "#d6d8d9",
        "borderColor": "#c6c8ca",
        "title": "深灰色"
    },
    "light": {
        "color": "#818182",
        "bgColor": "#fefefe",
        "borderColor": "#fdfdfe",
        "title": "灰色"
    }
}

function createDom(htmlStr) {
    var msgDom = document.createElement("div");
    msgDom.innerHTML = htmlStr;
    return msgDom.children[0];
}

var msg_json = {
    "success": "成功!",
    "info": "信息!",
    "warning": "警告!",
    "danger": "错误!",
    "primary": "首选!",
    "secondary": "次要的!",
    "dark": "深灰色!",
    "light": "灰色!",
}

function randomString(e) {
    e = e || 32;
    var t = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678",
        a = t.length,
        n = "";
    for (i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
    return n
}