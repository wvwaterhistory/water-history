var audio = [
  {
    name: "estep",
    tracks: ["184575928","184576595"]
  },
  {
    name: "good",
    tracks: ["184577890"]
  },
  {
    name: "lambert",
    tracks: ["184578066","184578220","184578493"]
  },
  {
    name: "watts",
    tracks: ["184579892"]
  },
  {
    name: "stottlemyer",
    tracks: ["184577240","184577501","184577714","184578996","184579235","184579463","184579790"]
  }
];
for (var i=0; i < audio.length; i++) {
  var speaker = audio[i].name,
      tracks = audio[i].tracks,
      clips = document.getElementById(speaker+'Clips');
  for (var j=0; j < tracks.length; j++) {
    var player = document.createElement("iframe");
    player.width="100%";
    player.height="126";
    player.scrolling="no";
    player.frameBorder="no";
    player.src = 'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/'+ tracks[j] +'&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false';
    clips.appendChild(player);
  }
}
