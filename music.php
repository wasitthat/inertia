<?php include "./header.html" ?>

    <img src="static/css/images/NEW-COVER.png" alt="" class="album">
    <hr class="hr2">

<div id="content" role="main">
  <div id="cwrap">
    <div id="nowPlay" class="is-audio">
      <h3 id="npAction">Paused:</h3>
      <div class = "box wwy" id="npTitle"></div>
    </div>
    <div id="audiowrap">
      <div id="audio0">
        <audio id="audio1" controls="controls"controlsList="nodownload">
          Your browser does not support the HTML5 Audio Tag.
        </audio>
      </div>
      <noscript>Your browser does not support JavaScript or JavaScript has been disabled. You will need to enable JavaScript for this page.</noscript>
      <div id="extraControls" class="is-audio">
        <button id="btnPrev" class="ctrlbtn"><span class="material-symbols-outlined">
fast_rewind
</span></button> <button id="btnNext" class="ctrlbtn"><span class="material-symbols-outlined">
fast_forward
</span></button>
      </div>
    </div>
    <div id="plwrap" class="is-audio">
    </div>
  </div>
</div>
<?php include "./footer.html" ?>