let songIndex = 0;
let toggleBar = document.getElementById("toggleBar");
var allSongs = {
  music: ["Lover - Diljit Dosanjh", "Pasoori - Shae Gill, Ali Sethi", "Bijlee - Harrdy Sandhu", "Excuses - Ap Dhillon", "Insane - Ap Dhillon"]
}
let audio = new Audio("Songs/1.mp3");
let index = 0;

$("#mainButt").click(function(){
  if(audio.paused || audio.currentTime<=0){
    audio.play();
    $("#mainButt").removeClass("fa-regular fa-2x fa-circle-play");
    $("#mainButt").addClass("fa-regular fa-2x fa-circle-pause");
    $("#gif").css("opacity", "1");
  }
  else{
    audio.pause();
    $("#mainButt").removeClass("fa-regular fa-2x fa-circle-pause");
    $("#mainButt").addClass("fa-regular fa-2x fa-circle-play");
    $("#gif").css("opacity", "0");
  }
});

audio.addEventListener("timeupdate", ()=>{
  progress = parseInt((audio.currentTime/audio.duration)*100);
  toggleBar.value = progress;
  if(toggleBar.value==100){
    if(index>=5){
      index = 1;
    }
    else{
      index += 1;
    }
    audio.src = ("Songs/"+(index)+".mp3");
    audio.play();
    document.getElementById("sideName").innerText = allSongs.music[index-1];
    animate = ("#" + index);
    $(animate).fadeIn(100).fadeOut(100).fadeIn(100);
  }
});

toggleBar.addEventListener("click",()=>{
  audio.currentTime = toggleBar.value * audio.duration/100;
});

Array.from(document.getElementsByClassName("songItem")).forEach((element)=>{
  element.addEventListener("click", (e)=>{
    index = parseInt(e.target.id);
    audio.src = ("Songs/"+(index)+".mp3");
    document.getElementById("sideName").innerText = allSongs.music[index-1];
    audio.currentTime = 0;
    audio.play();
    $("#mainButt").removeClass("fa-regular fa-2x fa-circle-play");
    $("#mainButt").addClass("fa-regular fa-2x fa-circle-pause");
    $("#gif").css("opacity", "1");
    animate = ("#" + index);
    $(animate).fadeIn(100).fadeOut(100).fadeIn(100);
  });
});
$("#forw").click(()=>{
  if(index>=5){
    index = 1;
  }
  else{
    index += 1;
  }
  audio.src = ("Songs/"+(index)+".mp3");
  audio.currentTime = 0;
  audio.play();
  $("#mainButt").removeClass("fa-regular fa-2x fa-circle-play");
  $("#mainButt").addClass("fa-regular fa-2x fa-circle-pause");
  animate = ("#" + index);
  $(animate).fadeIn(100).fadeOut(100).fadeIn(100);
  document.getElementById("sideName").innerText = allSongs.music[index-1];
});

$("#prev").click(()=>{
  if(index<=1){
    index = 1;
  }
  else{
    index -= 1;
  }
  audio.src = ("Songs/"+(index)+".mp3");
  audio.currentTime = 0;
  audio.play();
  $("#mainButt").removeClass("fa-regular fa-2x fa-circle-play");
  $("#mainButt").addClass("fa-regular fa-2x fa-circle-pause");
  animate = ("#" + index);
  $(animate).fadeIn(100).fadeOut(100).fadeIn(100);
  document.getElementById("sideName").innerText = allSongs.music[index-1];
});
