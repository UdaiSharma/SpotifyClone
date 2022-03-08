
let soundIndex = 0;



let audioElement = new Audio('./songs/1.mp3');

let masterPlay = document.getElementById('masterPlay');


let progressBar = document.getElementById('progressBar');
let gif = document.getElementById('gif');






const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(
        (element)=>{
           
                
                element.classList.remove('fa-circle-pause');

                element.classList.add('fa-circle-play');

              
               
             
    
        
    }
    )  
}


masterPlay.addEventListener('click' , ()=>{

    if(audioElement.paused || audioElement.currentTime<=0 ){
        console.log('playing');
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;


    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;


    }

})

audioElement.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');

progress  =  parseInt((audioElement.currentTime/audioElement.duration)*100);


progressBar.value = progress;



})


progressBar.addEventListener('change', ()=>{
    if(progressBar.value == 100){
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    
    }
    audioElement.currentTime = (progressBar.value * audioElement.duration)/100;
})


Array.from(document.getElementsByClassName('songItemPlay')).forEach(
    (element)=>{
        element.addEventListener('click',(e)=>{
            makeAllPlays();
            
            songIndex = parseInt(e.target.id);
            element.classList.remove('fa-circle-play');
            element.classList.add('fa-circle-pause');
            audioElement.src = `./songs/${ songIndex}.mp3`;

            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
    
    
            

        })
    }
)
document.getElementById('next').addEventListener('click',()=>{

if(songIndex<=6){

    songIndex+=1;}


    else{
        songIndex=1;
    }
    makeAllPlays();
document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');




    audioElement.src = `./songs/${ songIndex}.mp3`;

            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
    
})
document.getElementById('previous').addEventListener('click',()=>{

if(songIndex>=2){

    songIndex-=1;}


    else{
        songIndex=7;
    }

    makeAllPlays();
    document.getElementById(`${songIndex}`).classList.remove('fa-circle-play');
    document.getElementById(`${songIndex}`).classList.add('fa-circle-pause');

    audioElement.src = `./songs/${ songIndex}.mp3`;

            audioElement.currentTime = 0;
            audioElement.play();
            masterPlay.classList.remove('fa-circle-play');
            masterPlay.classList.add('fa-circle-pause');
            gif.style.opacity = 1;
    
})









// audioElement.play();