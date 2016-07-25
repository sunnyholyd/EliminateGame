cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
        time:0,
    },

    // use this for initialization
    onLoad: function () {
        this.schedule(this.updataTime,1);

    },
    updataTime:function(){//更新时间的回调函数
        this.time++;
        var com=this.getComponent(cc.Label);
        com.string="Time:"+this.time;
    }

    // called every frame, uncomment this function to activate update callback
    //  update: function (dt) {

    //  },
});
