var iframeElement = document.querySelector("iframe");
var widget1 = SC.Widget(iframeElement);
var widget = null;
var song_indexes = new Array();
var current_index = 0;

function shuffleButt() {
  widget1.bind(SC.Widget.Events.READY, function () {
    widget1.bind(SC.Widget.Events.FINISH, function () {
      play_next_shuffled_song();
    });

    widget1.getSounds(function (sounds) {
      create_shuffled_indexes(sounds.length);
      play_next_shuffled_song();
    });
  });
  document
    .querySelector("#button_sc_next")
    .addEventListener("click", play_next_shuffled_song);
}

function play_next_shuffled_song() {
  if (current_index >= song_indexes.length) {
    current_index = 0;
  }
  var track_number = song_indexes[current_index];
  current_index++;
  widget1.skip(track_number);
  console.log(track_number);
}

function create_shuffled_indexes(num_songs) {
  for (var i = 0; i < num_songs; i++) {
    song_indexes.push(i);
  }
  song_indexes = shuffle(song_indexes);
}

//+ Jonas Raoni Soares Silva
//@ http://jsfromhell.com/array/shuffle [v1.0]
function shuffle(o) {
  //v1.0
  for (
    var j, x, i = o.length;
    i;
    j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
  );
  return o;
}

//Play/Pause Button
function playPause() {
  if (widget1.toggle() == widget1.pause()) {
    document.getElementById("playpause").innerHTML = "Play";
  } else {
    document.getElementById("playpause").innerHTML = "Pause";
  }
}

// document.querySelector("#playpause").addEventListener("click", playPause);
