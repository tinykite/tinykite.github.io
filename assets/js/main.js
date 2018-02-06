

// This animation could use serious optimization, maybe with a loop? So many variables currently.  

var sqWindowGroup1 = $('.sqwGroup'), foliage = $('.foliage_animated'), sqw1 = $('[data-index="1"]'), sqw2 = $('[data-index="2"]'), sqw3 = $('[data-index="3"]'), sqw4 = $('[data-index="4"]'),  sqw5 = $('[data-index="5"]'),  sqw6 = $('[data-index="6"]'),  sqw7 = $('[data-index="7"]'),  sqw8 = $('[data-index="8"]'),  sqw9 = $('[data-index="9"]'),  sqw10 = $('[data-index="10"]'),  sqw11 = $('[data-index="11"]'),  sqw12 = $('[data-index="12"]'),  sqw13 = $('[data-index="13"]'),  sqw14 = $('[data-index="14"]'),  sqw15 = $('[data-index="15"]'),  sqw16 = $('[data-index="16"]'),  sqw17 = $('[data-index="17"]'),  sqw18 = $('[data-index="18"]'),  sqw19 = $('[data-index="19"]'),  sqw20 = $('[data-index="20"]'),  sqw21 = $('[data-index="21"]'),  sqw22 = $('[data-index="22"]'),  sqw23 = $('[data-index="23"]'),  sqw24 = $('[data-index="24"]'), svg = $("svg"); 

TweenMax.from(svg, 1, {autoAlpha:0, ease:Power1.easeIn})

// Each "round" of animations below is a represetation of how a pattern would evolve according to the rules of Conway's Game of Life.

var tl = new TimelineMax({repeat: -1});
tl.timeScale(0.75)
  .add("round0")
  .from(sqWindowGroup1, 3, {autoAlpha: 0, ease:Power1.easeIn}, "round0")
  .to ([sqw6, sqw8, sqw9, sqw14, sqw15, sqw16, sqw17, sqw19, sqw22, sqw24],  2, {autoAlpha: 0, ease:Power1.easeOut}, "+=3")
  .add("round1")
  .to ([sqw2, sqw4, sqw5, sqw7, sqw11, sqw12], 2, {autoAlpha: 0, ease:Power1.easeOut}, "round1+=3")
  .to ([sqw6, sqw9, sqw15, sqw24], 2, {autoAlpha: 1, ease:Power1.easeIn}, "round1+=3")
  .add("round2")
  .to ([sqw9, sqw15, sqw20, sqw21], 2, {autoAlpha: 0, ease:Power1.easeOut}, "round2+=3")
  .to ([sqw4, sqw8], 2, {autoAlpha: 1, ease:Power1.easeIn}, "round2+=3")
  .add("round3")
  .to ([sqw4, sqw10, sqw20, sqw23], 2, {autoAlpha: 0, ease:Power1.easeOut}, "round3+=3")
  .to ([sqw9, sqw11, sqw14, sqw20], 2, {autoAlpha: 1, ease:Power1.easeIn}, "round3+=3")
  .add("round4")
  .to ([sqw3, sqw6, sqw9, sqw11, sqw18], 2, {autoAlpha: 0, ease:Power1.easeOut}, "round4+=3")
  .to ([sqw4], 2, {autoAlpha: 1, ease:Power1.easeIn}, "round4+=3")
  .add("round5")
  .to ([sqw1, sqw8, sqw14, sqw20], 2, {autoAlpha: 0, ease:Power1.easeOut}, "round5+=3")
  .to ([sqw3, sqw5, sqw6, sqw7, sqw11, sqw12, sqw16, sqw17], 2, {autoAlpha: 1, ease:Power1.easeIn}, "round5+=3")
  .add("round6")
  .to (sqWindowGroup1, 2, {autoAlpha: 0, ease:Power1.easeOut}, "round6+=3")
  