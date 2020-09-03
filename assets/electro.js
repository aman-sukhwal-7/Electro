var k = 1;
var a = 1;
var z = 1;
var o = 1;
//assigning keypress
$(document).keydown(function(e)
{ 
    /*for q*/ if(e.which === 81 && k == 1) {  $(".q").toggleClass("pdc bright");  k = 0;}
    /*for w*/ if(e.which === 87) {   $(".w").toggleClass("pdc bright"); }
    /*for e*/ if(e.which === 69) {   $(".e").toggleClass("pdc bright"); }
    /*for r*/ if(e.which === 82) {   $(".r").toggleClass("pdc bright"); }
    /*for t*/ if(e.which === 84) {   $(".t").toggleClass("pdc bright"); }
    
    /*for a*/ if(e.which === 65 && a == 1) {   $(".a").toggleClass("pdc bright");  a = 0;}
    /*for s*/ if(e.which === 83) {   $(".s").toggleClass("pdc bright"); }
    /*for d*/ if(e.which === 68) {   $(".d").toggleClass("pdc bright"); }
    /*for f*/ if(e.which === 70) {   $(".f").toggleClass("pdc bright"); }
    /*for g*/ if(e.which === 71) {   $(".g").toggleClass("pdc bright"); }
    
    /*for z*/ if(e.which === 90 && z == 1) {   $(".z").toggleClass("pdc bright");  z = 0;}
    /*for x*/ if(e.which === 88) {   $(".x").toggleClass("pdc bright"); }
    /*for c*/ if(e.which === 67) {   $(".c").toggleClass("pdc bright"); }
    /*for v*/ if(e.which === 86) {   $(".v").toggleClass("pdc bright"); }
    /*for b*/ if(e.which === 66) {   $(".b").toggleClass("pdc bright"); }
    
    /*for 1*/ if(e.which === 49 && o == 1) {   $(".1").toggleClass("pdc bright");  o = 0;}
    /*for 2*/ if(e.which === 50) {   $(".2").toggleClass("pdc bright"); }
    /*for 3*/ if(e.which === 51) {   $(".3").toggleClass("pdc bright"); }
    /*for 4*/ if(e.which === 52) {   $(".4").toggleClass("pdc bright"); }
    /*for 5*/ if(e.which === 53) {   $(".5").toggleClass("pdc bright"); }
});
$(document).keyup(function(e)
{   
    /*for w*/ if(e.which === 87) {   $(".w").toggleClass("pdc bright"); }
    /*for e*/ if(e.which === 69) {   $(".e").toggleClass("pdc bright"); }
    /*for r*/ if(e.which === 82) {   $(".r").toggleClass("pdc bright"); }
    /*for t*/ if(e.which === 84) {   $(".t").toggleClass("pdc bright"); }

    /*for s*/ if(e.which === 83) {   $(".s").toggleClass("pdc bright"); }
    /*for d*/ if(e.which === 68) {   $(".d").toggleClass("pdc bright"); }
    /*for f*/ if(e.which === 70) {   $(".f").toggleClass("pdc bright"); }
    /*for g*/ if(e.which === 71) {   $(".g").toggleClass("pdc bright"); }

    /*for x*/ if(e.which === 88) {   $(".x").toggleClass("pdc bright"); }
    /*for c*/ if(e.which === 67) {   $(".c").toggleClass("pdc bright"); }
    /*for v*/ if(e.which === 86) {   $(".v").toggleClass("pdc bright"); }
    /*for b*/ if(e.which === 66) {   $(".b").toggleClass("pdc bright"); }

    /*for u*/ if(e.which === 50) {   $(".2").toggleClass("pdc bright"); }
    /*for i*/ if(e.which === 51) {   $(".3").toggleClass("pdc bright"); }
    /*for o*/ if(e.which === 52) {   $(".4").toggleClass("pdc bright"); }
    /*for p*/ if(e.which === 53) {   $(".5").toggleClass("pdc bright"); }

});

//adding sound
var keyData = {
      w: {
            sound: new Howl({
              src: ['sound/BrassG.wav']
            }),
        },
        e: {
            sound: new Howl({
              src: ['sound/Clap.wav']
            }),
        },
        r: {
            sound: new Howl({
              src: ['sound/Crash.wav']
            }),
        },
        t: {
            sound: new Howl({
              src: ['sound/Scrape.wav'],
            }),
        },
        s: {
            sound: new Howl({
              src: ['sound/HatL.wav']
            }),
        },
        d: {
            sound: new Howl({
              src: ['sound/HatR.wav']
            }),
        },
        f: {
            sound: new Howl({
              src: ['sound/KickG1.wav']
            }),
        },
        g: {
            sound: new Howl({
              src: ['sound/KickG2.wav'],
            }),
        },
       
        x: {
            sound: new Howl({
              src: ['sound/SynthC.wav']
            }),
        },
        c: {
            sound: new Howl({
              src: ['sound/SynthD.wav']
            }),
        },
        v: {
            sound: new Howl({
              src: ['sound/SynthE.wav']
            }),
        },
        b: {
            sound: new Howl({
              src: ['sound/SynthG.wav'],
            }),
        },
        
        2: {
            sound: new Howl({
              src: ['sound/Snare.wav'],
            }),
        },
        3: {
            sound: new Howl({
              src: ['sound/SwipeRide.wav'],
            }),
        }
}
var loopData = 
{
q: {
    sound: new Howl({
      src: ['sound/Technosynth.wav'],
      loop: true
    })
},
a: {
  sound: new Howl({
    src: ['sound/Technochords.wav'],
    loop: true
  }),
},
z: {
  sound: new Howl({
    src: ['sound/TechnobassB.wav'],
    loop: true
  }),
},
1: {
  sound: new Howl({
    src: ['sound/technorhythm.wav'],
    loop: true
  }),
}
}

$(document).keydown(function(event) 
    { if(loopData[event.key]) 
          { loopData[event.key].sound.play();
          }
    });




$(document).keydown(function(event) 
    { if(keyData[event.key]) 
           { keyData[event.key].sound.play();} 
      if(event.which === 52) 
        {   loopData['1'].sound.stop();
            loopData['q'].sound.stop(); 
            loopData['a'].sound.stop(); 
            loopData['z'].sound.stop();
            /*for q*/  $(".q").removeClass("bright"); 
            /*for a*/  $(".a").removeClass("bright"); 
            /*for z*/  $(".z").removeClass("bright"); 
            /*for 1*/  $(".1").removeClass("bright"); 
            /*for q*/  $(".q").addClass("pdc"); 
            /*for a*/  $(".a").addClass("pdc"); 
            /*for z*/  $(".z").addClass("pdc"); 
            /*for 1*/  $(".1").addClass("pdc");
            k=1;
            a=1;
            z=1;
            o=1;
        } 
});

(function($){
  'use strict';
    $(window).on('load', function () {
        if ($(".loader_wrapper").length > 0)
        {
            $(".loader_wrapper").fadeOut("slow");
        }
    });
})(jQuery)