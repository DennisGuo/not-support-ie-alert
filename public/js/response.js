(function () {

    var createStylesheet = function(){
        var link = document.createElement("link");
        link.href = "//ciyuer.com:7001/css/not-support-ie.css";
        
        document.head.appendChild(link);
    };

    var createOverflow = function(){
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.zIndex = "998";
        div.style.width = "100%";
        div.style.height = "100%";
        div.style.top = "0";
        div.style.left = "0";
        div.style.filter = "alpha(opacity:80)";
        div.style.backgroundColor = "black";
        div.style.backgroundColor = "black";
        document.body.appendChild(div);
    };

    var createAlert = function(){
        var div = document.createElement("div");
        div.style.position = "fixed";
        div.style.zIndex = "999";
        div.style.width = "600px";
        div.style.height = "200px";
        div.style.top = "50%";
        div.style.left = "50%";
        div.style.marginTop = "-100px";
        div.style.marginLeft = "-300px";
        div.style.border = "1px solid red";
        div.style.filter = "alpha(opacity:80)";
        div.style.backgroundColor = "black";
        div.style.backgroundColor = "black";

        var h = document.createElement('h2');
        h.innerText = "Sorry, We're Not Supporting IE Anymore !"
        h.style.color = "#fff";
        h.style.fontSize = "18px";
        h.style.textAlign = "center";
        div.appendChild(h);

        var p = document.createElement('p');
        p.innerHTML = "<a href='https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support' target='_blank' style='color:#eee;'>Internet Explorer End of Support - Microsoft</a>";
        p.style.fontSize = "14px";
        p.style.lineHeight = "20px";
        p.style.textAlign = "center";
        div.appendChild(p);

        var p1 = document.createElement('p');
        p1.innerHTML = "To get the best experience using our website , we recommend that you use a diffenrent web browser.";
        p1.style.fontSize = "14px";
        p1.style.lineHeight = "20px";
        p1.style.color = "#ff0";
        p1.style.textAlign = "center";
        div.appendChild(p1);

        var ul = document.createElement('ul');
        ul.innerHTML = 
            "<li><img src='http://ciyuer.com:7001/images/chrome_256x256.png' width='100'/><a target='_blank' href='https://www.google.com/chrome/browser/desktop/index.html'/>Google Chrome</a></li>"+
            "<li><img src='http://ciyuer.com:7001/images/firefox_256x256.png' width='100'/><a target='_blank' href='https://www.mozilla.org'/>Firefox</a></li>"
        ;
        ul.style.listStyle = "none";
        ul.style.width = "100%"
        div.appendChild(ul);

        document.body.appendChild(div);
    };

    setTimeout(function () {
        createStylesheet();
        createOverflow();
        createAlert();
    }, 0)
}())