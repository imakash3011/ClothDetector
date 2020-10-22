navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia
        || navigator.oGetUserMedia

if(navigator.getUserMedia){
    navigator.getUserMedia({video:true}, handleVideo, videoError);
}

function handleVideo(stream){
    document.querySelector('#videoElement').srcObject = stream;

    // document.querySelector('#videoElement').src = window.URL.createObjectURL(stream);
}

function videoError(){
    alert("There has some problem...")
}