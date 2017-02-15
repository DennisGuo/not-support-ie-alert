(function () {

    var nsiehost;
    var nsieversion;
    var nsieinfo;

    var createStylesheet = function(){
        var link = document.createElement("link");
        link.href = nsiehost + "/css/not-support-ie.css";
        link.rel = "stylesheet";
        document.getElementsByTagName('head')[0].appendChild(link);
    };

    var createOverflow = function(){
        var div = document.createElement("div");
        div.id = "nsie-overflow"
        div.className = "nsie-overflow";
        document.body.appendChild(div);
    };

    var createAlert = function(){
        var div = document.createElement("div");
        div.id = "nsie-alert"
        div.className ="nsie-alert";

        var h = document.createElement('h2');
        h.innerText = "Sorry, We're Not Supporting IE"+nsieversion+"- Anymore !"
        div.appendChild(h);

        var p = document.createElement('p');
        p.innerHTML = "<a href='https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support' target='_blank' style='color:#eee;'>Internet Explorer End of Support - Microsoft</a>";
        div.appendChild(p);

        var p1 = document.createElement('p');
        p1.className = "nsie-info"
        p1.innerHTML = nsieinfo;
        div.appendChild(p1);

        var ul = document.createElement('ul');
        ul.innerHTML = 
            "<li><a target='_blank' href='https://www.google.com/chrome/browser/desktop/index.html'/><img src='"+nsiehost+"/images/chrome_256x256.png' /><br/>Google Chrome</a></li>"+
            "<li><a target='_blank' href='https://www.mozilla.org'/><img src='"+nsiehost+"/images/firefox_256x256.png' /><br/>Firefox</a></li>"+
            "<li><a target='_blank' href='https://www.microsoft.com/en-us/windows/microsoft-edge'/><img src='"+nsiehost+"/images/edge_256x256.png' /><br/>Edge</a></li>"+
            "<li><a target='_blank' href='https://www.opera.com'/><img src='"+nsiehost+"/images/opera_256x256.png'/><br/>Firefox</a></li>"
        ;
        div.appendChild(ul);

         var close = document.createElement('span');
        close.className = "nsie-close"
        close.innerText = "close";
        close.onclick = function(){
            var overflow = document.getElementById('nsie-overflow');
            var alert = document.getElementById('nsie-alert');
            document.body.removeChild(overflow);
            document.body.removeChild(alert);
        }
        div.appendChild(close);

        document.body.appendChild(div);
    };

    setTimeout(function () {
        createStylesheet();
        createOverflow();
        createAlert();
    }, 0)
}())