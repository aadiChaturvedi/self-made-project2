AFRAME.registerComponent('drive',{init:function(){
    var gameStateValue=this.EL.getAttribute('game')
    if (gameStateValue=='play'){
        this.driveCar()
    }
}})