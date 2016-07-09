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
        
        icons:{
            default:[],
            type:cc.SpriteFrame
        },
        pos:{
            default:new cc.Vec2
        },
        sfIndex:0,
    },
    
    
    // use this for initialization
    onLoad: function () {
        this.initSpriteFrame();
        // this.listeningEvent();
    },
    initSpriteFrame:function(){
        function getRandomInt(min,max){
            var ratio=Math.random();
            return min+Math.floor((max-min)*ratio);
        }
        this.sfIndex=getRandomInt(0,4);
        // window.console.log(this.index);
        var sprite=this.getComponent(cc.Sprite);
        sprite.spriteFrame=this.icons[this.sfIndex];
    },

    
    

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
