const arr = [
    ["你是不是想减肥，我有办法让你三天之内减掉两斤。",

        "什么办法，快说。",

        "只要把你的心放在我这里。"
    ],

    ["我觉得我们两个中了箭。",

        "哪来的箭？",

        "我说的是爱神的丘比特之箭。"
    ],

    ["我最近手头有点紧……",

        "嗯？",

        "能借你手牵一下嘛"

    ],

    ["你以后会孤独的。",

        "为什么？",

        "因为你一个人住在我心里没有邻居。"
    ],

    ["你左手有几个手指",

        "5",

        "你有几个眼睛",

        "2",

        "你有几个嘴巴",

        "1",

        "嗯 我也爱你"
    ],

    ["我要偷你的体温",

        "说人话",

        "要抱抱"
    ],
    [
        '你相信日久生情吗?',

        '嗯呢',

        '那你一定会爱上我',

        '??',

        '因为我很持久'
    ],
    [
        '看不惯就滚',

        '??',

        '床单我都铺好了'
    ],
    [

        "你知道我为什么会长这么高吗？",

        "为什么？",

        "因为你贴过来的时候，就会听到我的心跳"
    ],
    ['以后爬楼梯的时候不要给我打电话',
        '为什么',

        '你的喘息会让我石更'
    ],
    [
        ' 给我发个红包',

        '干嘛?',

        '在我心里住这么久，不用交房租啊?'
    ],
    [
        '你会做饭吗?',

        '会啊，怎么了?',

        '巧了，我会吃'
    ],
    ["问你个问题，老爸老妈老姐老哥老公哪个和你没有血缘关系?",

        "老公啊",

        "诶~老婆真聪明~"
    ]
]

function createLeftEle(val) {
    let left = document.createElement('div')
    left.classList.add('lefttext')
    left.classList.add('text')
    left.classList.add('upIn')
    left.innerHTML = val
    document.getElementById('mainbox').appendChild(left)
}

function createCenterEle(val) {
    let center = document.createElement('div')
    center.classList.add('centertext')
    center.classList.add('text')
    center.classList.add('upIn')
    center.innerHTML = val
    document.getElementById('mainbox').appendChild(center)
}

function createRightEle(val) {
    let right = document.createElement('div')
    right.classList.add('righttext')
    right.classList.add('text')
    right.classList.add('upIn')
    right.innerHTML = val
    document.getElementById('mainbox').appendChild(right)
}

var count = 0
var wordIndex = 0
var ishuifu = true
max = arr.length
createLeftEle(arr[count][wordIndex])

function next() {
    ishuifu = true
    document.getElementById('mainbox').innerHTML = ''
    wordIndex = 0
    count++;
    if (count >= arr.length) {
        createCenterEle("重头开始了")
        count = 0
    }
    createLeftEle(arr[count][wordIndex])
}

function nextword() {
    if (ishuifu) {
        ishuifu = false
        if (wordIndex >= arr[count].length - 1) {
            createCenterEle("会话结束")
        } else {
            createRightEle(arr[count][++wordIndex])
            setTimeout(() => {
                createLeftEle(arr[count][++wordIndex])
                ishuifu = true
            }, 500)

        }
    }
}

function start() {
    createLeftEle(arr[count][wordIndex])
    arr[count].forEach((item, index) => {
        index % 2 == 0 ? createLeftEle(item) : createRightEle(item)
    })
}