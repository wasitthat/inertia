"use strict";

jQuery(function($) {
  var supportsAudio = !!document.createElement('audio').canPlayType;
  if(supportsAudio) {
    var index = 0,
    playing = false,
    mediaPath = './static/music/',
    extension = '.mp3',
    tracks = [
      {"track":1,"name":"Goodbye","length":"04:15","file":"Goodbye"},
      {"track":2,"name":"Ashes Are Forever","length":"03:19","file":"ashes"},
      {"track":3,"name":"What the Fuck","length":"02:54","file":"wtf"},
      {"track":4,"name":"Where Were You","length":"02:50","file":"wwy"},
      {"track":5,"name":"Dreaming In Reverse","length":"01:27","file":"dir"}
    ],
    trackCount = tracks.length,
    npAction = $('#npAction'),
    npTitle = $('#npTitle'),
    audio = $('#audio1').bind('play', function() {
      playing = true;
      npAction.text('Now Playing:');
    }).bind('pause', function() {
      playing = false;
      npAction.text('Paused:');
    }).bind('ended', function() {
      npAction.text('Paused:');
      if((index + 1) < trackCount) {
        index++;
        loadTrack(index);
        audio.play();
      } else {
        audio.pause();
        index = 0;
        loadTrack(index);
      }
    }).get(0),
    btnPrev = $('#btnPrev').click(function() {
      if((index - 1) > -1) {
        index--;
        loadTrack(index);
        if(playing) {
          audio.play();
        }
      } else {
        audio.pause();
        index = 0;
        loadTrack(index);
      }
    }),
    btnNext = $('#btnNext').click(function() {
      if((index + 1) < trackCount) {
        index++;
        loadTrack(index);
        if(playing) {
          audio.play();
        }
      } else {
        audio.pause();
        index = 0;
        loadTrack(index);
      }
    }),
    li = $('#plUL li').click(function() {
      var id = parseInt($(this).index());
      if(id !== index) {
        playTrack(id);
      }
    }),
    loadTrack = function(id) {
      $('.plSel').removeClass('plSel');
      $('#plUL li:eq(' + id + ')').addClass('plSel');
      npTitle.text(tracks[id].name);
      index = id;
      try{
          
      audio.src = mediaPath + tracks[id].file + extension;
      } catch (e){}
    },
    playTrack = function(id) {
      loadTrack(id);
      audio.play();
    };
    try{
    extension = audio.canPlayType('audio/mpeg') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
}catch (e){
}
    loadTrack(index);
  }

  $('#useLegend').click(function(e) {
    e.preventDefault();
    $('#use').slideToggle(300, function() {
      $('#useSpanSpan').text(($('#use').css('display') == 'none' ? 'show' : 'hide'));
    });
  });
});