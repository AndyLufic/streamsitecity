<template>
<link rel="stylesheet" href="https://cdnjs.couldflare.com/ajax/libs/meyer-reset.min.css">
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.0.13/css/all.css"  crossorigin="anonymous">
  <div class="container">
    <div class="c-video">
        <video class="video" src="https://firebasestorage.googleapis.com/v0/b/streamsitecity.appspot.com/o/test.mp4?alt=media&token=ba06b5e4-b01c-4fca-b0be-38eaec0cdab3"  >
            <div class="controls">
                <div class="orangebar">
                    <div class="orangejuice">                        
                    </div>
                </div>
                <div class="buttons">
                    <buttton id="play-pause"></buttton>
                </div>
            </div>
        </video>

    
    </div>
   
  </div>
 


</template>

<script>
var video=document.querySelector('.video');
var juice=document.querySelector('.orange-juice');
var btn=document.querySelector('play-pause');

function toggle(){
    if(video.paused){
        btn.className='pause';
        video.play();
    }
    else{
        btn.className="play";
        video.pause();
    }
}
btn.onclick=function(){
    toggle();

}
video.addEventListener('timeupdate', function(){
    var juicePos =video.currentTime/video.duration;
    juice.style.width= juicePos * 100 + "%";
})
</script>

<style lang="scss">
.container{
     display: flex; 
     background: #ccc !important;
     justify-content:center ;
     align-items: center;
    height: 100vh;


}
.video {
    width: 100%;

}
.c-video:hover .controls{
    transform: translateY(0);
    
}
.c-video{
    width: 100%; 
    max-width: 800px;
    overflow: hidden;
}
.controls{
    display: flex; 
    position: absolute;
    bottom: 0%;
    width: 100%;
    flex-wrap: wrap;
    background-color: rgba(0, 0,0,0.7);
    transform: translateY(100%)translateY('-5px');
    transition: all 0.2s;
}
.buttons{
    padding: 10px; 
}
.buttons button{
    background: none;
    border: 0; 
    outline: 0;
    cursor: pointer;
}
.buttons button:before{
    content:"\f144";
    font-family: 'Font Awesome 5 Free';
    width: 30px; 
    height: 30px;
    display: inline-block;
    font-size: 28px;
    color: #fff;
    -webkit-font-smoothing: antialiased;

}
.buttons button.play:before{
    content: '\f144';

}
.buttons button.pause:before{
    content: '\f28b';
    
}
.orange-bar{
    height: 10px;
    top: 0; 
    left: 0;
    width: 100%;


}
.orange-juice{
    height: 10px;
    width:100px; 
    background-color: orangered;

}
</style>