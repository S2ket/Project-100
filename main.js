var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start(){
    recognition.start();
} 

recognition.onresult = function(event){
    console.log(event); 
    Content = event.results[0][0].transcript.toLowerCase();
    console.log(Content);
      if(Content == "take my selfie" || Content == "selfie"){
        console.log("taking selfie --- ");
        speak();
      }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);

    console.log("a");

    setTimeout(function(){ 
        img_id = "selfie1";
        take_selfie();
        speak_data = "taking your next selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 10000);

    console.log("b");

    setTimeout(function(){ 
        img_id = "selfie2";
        take_selfie();
        speak_data = "taking your next selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 15000);

    setTimeout(function(){ 
        img_id = "selfie3";
        take_selfie();
        speak_data = "taking your next selfie in 20 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
    }, 20000);
}

camera = document.getElementById("camera");
Webcam.set({
    width:450,
    height:400,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_selfie(){
    console.log("c");
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML ='<img id="selfie1" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML ='<img id="selfie2" src="'+data_uri+'"/>';
        }
        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML ='<img id="selfie3" src="'+data_uri+'"/>';
        }
    });
}
