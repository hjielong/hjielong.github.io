/*1.0添加图片top*/
var top_up = "<img id='upj' class='upj' style='max-width: 300%; transform: translate(-120px,-110px);' src='https://cdn.jsdelivr.net/gh/hjielong/imgbed/use/up03.gif' title='回到顶部' >";
/*添加到返回顶部按钮下*/
document.getElementById("go-up").innerHTML += top_up;

// 2.0可爱的Title
var OriginTitle = document.title;
var titleTime;
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(つェ⊂) 我藏好了哦~~';
        clearTimeout(titleTime);
    } else {
        $('[rel="icon"]').attr('href', "/img/favicon.ico");
        document.title = '(*´∇｀*) 被你发现啦~~' + OriginTitle;
        titleTime = setTimeout(function() {
            document.title = OriginTitle;
        }, 2000);
    }
});

// 3.0气泡
function qipao() {
    $('#page-header').circleMagic({
        radius: 10,
        density: .2,
        color: 'rgba(255,255,255,.4)',
        clearOffset: 0.99
    });
}! function(p) {
    p.fn.circleMagic = function(t) {
        var o, a, n, r, e = !0,
            i = [],
            d = p.extend({ color: "rgba(255,0,0,.5)", radius: 10, density: .3, clearOffset: .2 }, t),
            l = this[0];

        function c() { e = !(document.body.scrollTop > a) }

        function s() { o = l.clientWidth, a = l.clientHeight, l.height = a + "px", n.width = o, n.height = a }

        function h() {
            if (e)
                for (var t in r.clearRect(0, 0, o, a), i) i[t].draw();
            requestAnimationFrame(h)
        }

        function f() {
            var t = this;

            function e() { t.pos.x = Math.random() * o, t.pos.y = a + 100 * Math.random(), t.alpha = .1 + Math.random() * d.clearOffset, t.scale = .1 + .3 * Math.random(), t.speed = Math.random(), "random" === d.color ? t.color = "rgba(" + Math.floor(255 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.floor(0 * Math.random()) + ", " + Math.random().toPrecision(2) + ")" : t.color = d.color }
            t.pos = {}, e(), this.draw = function() { t.alpha <= 0 && e(), t.pos.y -= t.speed, t.alpha -= 5e-4, r.beginPath(), r.arc(t.pos.x, t.pos.y, t.scale * d.radius, 0, 2 * Math.PI, !1), r.fillStyle = t.color, r.fill(), r.closePath() }
        }! function() {
            o = l.offsetWidth, a = l.offsetHeight,
                function() {
                    var t = document.createElement("canvas");
                    t.id = "canvas", t.style.top = 0, t.style.zIndex = 0, t.style.position = "absolute", l.appendChild(t), t.parentElement.style.overflow = "hidden"
                }(), (n = document.getElementById("canvas")).width = o, n.height = a, r = n.getContext("2d");
            for (var t = 0; t < o * d.density; t++) {
                var e = new f;
                i.push(e)
            }
            h()
        }(), window.addEventListener("scroll", c, !1), window.addEventListener("resize", s, !1)
    }
}(jQuery);

// 调用气泡方法
qipao();

// 4.0页脚博主
$(document).ready(function(e) {
    $('.copyright').html('©2020 <i style="color:#FF6A6A;animation: announ_animation 0.8s linear infinite;" class="fa fa-heartbeat"></i> H-GIE');
});

// 5.0鼠标雪花样式(很卡建议不用)
// (function(){function t(){i(),a()}function i(){document.addEventListener("mousemove",o),document.addEventListener("touchmove",e),document.addEventListener("touchstart",e),window.addEventListener("resize",n)}function n(t){d=window.innerWidth,window.innerHeight}function e(t){if(t.touches.length>0)for(var i=0;i<t.touches.length;i++)s(t.touches[i].clientX,t.touches[i].clientY,r[Math.floor(Math.random()*r.length)])}function o(t){u.x=t.clientX,u.y=t.clientY,s(u.x,u.y,r[Math.floor(Math.random()*r.length)])}function s(t,i,n){var e=new l;e.init(t,i,n),f.push(e)}function h(){for(var t=0;t<f.length;t++)f[t].update();for(t=f.length-1;t>=0;t--)f[t].lifeSpan<0&&(f[t].die(),f.splice(t,1))}function a(){requestAnimationFrame(a),h()}function l(){this.character="*",this.lifeSpan=120,this.initialStyles={position:"fixed",top:"0",display:"block",pointerEvents:"none","z-index":"10000000",fontSize:"20px","will-change":"transform"},this.init=function(t,i,n){this.velocity={x:(Math.random()<.5?-1:1)*(Math.random()/2),y:1},this.position={x:t-10,y:i-20},this.initialStyles.color=n,console.log(n),this.element=document.createElement("span"),this.element.innerHTML=this.character,c(this.element,this.initialStyles),this.update(),document.body.appendChild(this.element)},this.update=function(){this.position.x+=this.velocity.x,this.position.y+=this.velocity.y,this.lifeSpan--,this.element.style.transform="translate3d("+this.position.x+"px,"+this.position.y+"px,0) scale("+this.lifeSpan/120+")"},this.die=function(){this.element.parentNode.removeChild(this.element)}}function c(t,i){for(var n in i)t.style[n]=i[n]}var r=["#D61C59","#E7D84B","#1B8798"],d=window.innerWidth,u=(window.innerHeight,{x:d/2,y:d/2}),f=[];t()})();

