
(function() {

    var supports3DTransforms = document.body.style['perspectiveProperty'] !== undefined ||
        document.body.style['WebkitPerspective'] !== undefined ||
        document.body.style['MozPerspective'] !== undefined ||
        document.body.style['msPerspective'] !== undefined ||
        document.body.style['OPerspective'] !== undefined;

    if (!supports3DTransforms) {
        alert('Your browser doesn\'t support CSS3 3D transforms :/');
    }

    function transform(element, value) {
        element.style.WebkitTransform = value;
        element.style.MozTransform = value;
        element.style.msTransform = value;
        element.style.OTransform = value;
        element.style.transform = value;
    }

    var width = 400,
        height = 500,
        quantity = 326,
        ball = 100,
		snow = 300, //雪花数量
        types = ['text', 'picture'],
        greetings = ['陈绍文', '卢宣竹', '武汉', '杭州', '连云港', '苍梧小学', '苍梧中学', '新海高级中学', '浙江大学', '中国地质大学', '哈尔滨', '长白山', '延吉', '长春', '天池看雪', '雪夜温泉', '西湖音乐节', '民俗园合影'];
        pic_paths = []
        for (var i = 1; i < 21;i++){
            pic_paths.push(i)
        }

    var tree = document.querySelector('.tree'),
        treeRotation = 0;

    tree.style.width = width + 'px';
    tree.style.height = height + 'px';

    window.addEventListener('resize', resize, false);

    // star
    for (var i=0; i< 2;i++){
        var element = document.createElement('img');
        element.src='./img/star.png';	
        element.style.width = '100px';
        element.style.height = '100px';
        var x = width / 2 - 50*(1-i)
            y = -80,
            z = 50 * i;
        var rx = 0,
            ry = 90 * i,
            rz = 0;
        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
        tree.appendChild(element);
    }

    // The tree
    for (var i = 0; i < quantity; i++) {
        // 设置一个新元素，随机抽取类型和文字
        var element = null,
            type = types[Math.floor(Math.random() * types.length)],
            greeting = greetings[Math.floor(Math.random() * greetings.length)],
            path = pic_paths[Math.floor(Math.random() * pic_paths.length)];
        var x = width / 2,
            y = Math.round(Math.random() * height);

        var rx = 0,
            ry = Math.random() * 360,
            rz = -Math.random() * 15;

        var elemenWidth = 5 + ((y / height) * width / 2),
            elemenHeight = 26;

        switch (type) {
            case 'picture':
                element = document.createElement('img');
  			    element.src='./img/'+ path + '.jpg';
                element.style.width = elemenWidth + 'px';
                element.style.height = elemenWidth / 4 * 3 + 'px';
                break;
            case 'text':

            default:
                element = document.createElement('input');
                element.setAttribute('type', 'text');
                element.setAttribute('value', greeting);
                element.style.width = elemenWidth + 'px';
                element.style.height = elemenHeight + 'px';
                element.style.backgroundColor = 'green';
                element.style.textAlign = 'center';
                element.style.color = 'yellow';
            
        }

        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, 0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');

        tree.appendChild(element);
    }

    // ball
    for(var i = 0; i < ball; i++){
        var element = document.createElement('img');
            element.src='./img/ball.png';	
            element.style.width = '230px';
        
        var x = width / 2;
            y = height + 50;
            
        var rx = 0,
            ry = Math.random() * 360,
            rz = 0;
        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + '0px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
        tree.appendChild(element);
    }
    // The snow
    for (var i = 0; i < snow; i++) {
        var element = document.createElement('img');
  			element.src='./img/snowflake.png';
			
			element.style.width = '15px';
			element.style.height = '15px';

        var spread = width * 2;

        var x = Math.round(Math.random() * spread) - (spread / 4),
            y = Math.round(Math.random() * (height + 300)) - 100,
            z = Math.round(Math.random() * spread) - (spread / 2);

        var rx = 0,
            ry = Math.random() * 360,
            rz = 0;

        transform(element, 'translate3d(' + x + 'px, ' + y + 'px, ' + z + 'px) rotateX(' + rx + 'deg) rotateY(' + ry + 'deg) rotateZ(' + rz + 'deg)');
        tree.appendChild(element);
    }

    // 把树移到中间
    function resize() {
        tree.style.top = ((window.innerHeight - height - 100) / 2) + 'px';
    }

    resize();

    document.body.addEventListener('click', function() {
        var overlay = document.getElementById('overlay');
        overlay.style.display = 'flex';
        setTimeout(function() {
            overlay.style.opacity = '1'; /* 通过改变透明度实现渐变效果 */
        }, 500); // 在50毫秒后开始渐变
    });
})()
