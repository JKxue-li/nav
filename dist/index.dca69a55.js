!function(e) {
    var t, n, o, i, c, d = '<svg><symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M512 128C300.8 128 128 300.8 128 512s172.8 384 384 384 384-172.8 384-384S723.2 128 512 128zM512 832c-179.2 0-320-140.8-320-320s140.8-320 320-320 320 140.8 320 320S691.2 832 512 832z"  ></path><path d="M672 352c-12.8-12.8-32-12.8-44.8 0L512 467.2 396.8 352C384 339.2 364.8 339.2 352 352S339.2 384 352 396.8L467.2 512 352 627.2c-12.8 12.8-12.8 32 0 44.8s32 12.8 44.8 0L512 556.8l115.2 115.2c12.8 12.8 32 12.8 44.8 0s12.8-32 0-44.8L556.8 512l115.2-115.2C684.8 384 684.8 364.8 672 352z"  ></path></symbol><symbol id="icon-add" viewBox="0 0 1025 1024"><path d="M895.531061 485.788536 535.640488 485.788536 535.640488 125.897963c0-13.5716-11.001648-24.573248-24.573248-24.573248s-24.573248 11.001648-24.573248 24.573248l0 359.890572L126.604444 485.788536c-13.5716 0-24.573248 11.001648-24.573248 24.573248s11.001648 24.573248 24.573248 24.573248l359.889548 0 0 359.890572c0 13.5716 11.001648 24.573248 24.573248 24.573248s24.573248-11.001648 24.573248-24.573248L535.640488 534.934007l359.890572 0c13.5716 0 24.573248-11.001648 24.573248-24.573248S909.102661 485.788536 895.531061 485.788536z"  ></path></symbol></svg>', s = (s = document.getElementsByTagName("script"))[s.length - 1].getAttribute("data-injectcss"), l = function(e, t) {
        t.parentNode.insertBefore(e, t);
    };
    if (s && !e.__iconfont__svg__cssinject__) {
        e.__iconfont__svg__cssinject__ = !0;
        try {
            document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
        } catch (e1) {
            console && console.log(e1);
        }
    }
    function a() {
        c || (c = !0, o());
    }
    function r() {
        try {
            i.documentElement.doScroll("left");
        } catch (e) {
            return void setTimeout(r, 50);
        }
        a();
    }
    t = function() {
        var e, t;
        (t = document.createElement("div")).innerHTML = d, d = null, (e = t.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", t = e, (e = document.body).firstChild ? l(t, e.firstChild) : e.appendChild(t));
    }, document.addEventListener ? ~[
        "complete",
        "loaded",
        "interactive"
    ].indexOf(document.readyState) ? setTimeout(t, 0) : (n = function() {
        document.removeEventListener("DOMContentLoaded", n, !1), t();
    }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = t, i = e.document, c = !1, r(), i.onreadystatechange = function() {
        "complete" == i.readyState && (i.onreadystatechange = null, a());
    });
}(window);

//# sourceMappingURL=index.dca69a55.js.map
