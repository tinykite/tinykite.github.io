---
layout: post
title: "PSA: Conway's Game of Life is a Gateway Drug"
description: "Visual Identity, Animation, Web Design & Development"
weight: 7
image: screenshots/paulsexton-homepage-browser.png
---
It started simple. My brother [Paul](http://psexton.net) asked me if I could create a business card for him. He's a software engineer by day, maker of bad dad jokes at night. He off-handedly mentioned that he's always been fascinated with the mathematical algorithm known as [Conway's Game of Life](http://conwaylife.com/wiki/Conway%27s_Game_of_Life). And sort of wanted that in easily digestible, logo form. 

Could I do it? 

It was a simple enough premise: many of GoL’s most infamous patterns, such as the spaceship (below) oscillate or evolve through no more than a handful of states.

![Illustration of Conway Game of Life Glider](/assets/img/conway-1.png)

The more I experimented, however, the more I felt slightly conflicted.

Minus any academic context, it felt awfully all-or-nothing as a concept. Either someone might catch the isolated reference to a so-called “zero player” game first introduced in the pages of Scientific American in 1970. Or—if they were anything at all like me

![Illustration of Conway Game of Life Automaton](/assets/img/conway-2.png)

All the illustration might resemble is a space invader with a giant nose.

So I decided to create a pattern that would complement a software engineer’s overall brand identity without requiring any recognition or understanding of Game of Life.

As an easter egg for über nerds, it would still need to be primarily comprised of commonly occuring cellular automata. And it would also have to be possible, my brother decided, for the pattern to be able to be plugged into a Game of Life simulator (such as Golly) and substantially evolve for at least 1-2,000 generations.

After multiple rounds of experimentation in Golly, the pattern that successfuly met my own aesthetic criteria – as well as my brother’s own technical ones – ended up being surprisingly simple.

![Illustration of Business Card](/assets/img/conway-businesscard.png)

The back-side pattern of the business card (below) contains four [R-pentominos](http://conwaylife.com/w/index.php?title=R-pentomino) surrounding a common form of [induction coil](http://conwaylife.com/wiki/Induction_coil).

With an induction coil (a classification of pattern often used to stabilize large initial “game” configurations) I was able to place the R-pentominos closely together without sacrificing longevity; The pattern substantially evolves – symmetrically – for close to 2,000 generations.

![Screenshot from Golly](/assets/img/golly-still.png)

You can download the Golly file I created for this experiment [here](http://tinykitelab.com/assets/gol-businesscard.rle).

After finishing work on the business cards, I felt really curious about exploring other ways Game of Life could influence design decisions or even be used to produce generative design work.

I found my opportunity in the website I created for Paul way back in 2012.

![Screenshot of Old Illustration](/assets/img/oldwebsite.png)

I orginally created it as a way to learn [ExpressionEngine](https://ellislab.com/expressionengine). As a learning opportunity, it also served as the first time I was ever exposed to the concept of building a website from the inside out, from a series of reusable code snippets and custom site-wide variables – versus solely relying on a system of embedded templates within other templates.

More relevantly, it featured an illustration (above) that I cobbled together from a couple of basic shapes and Noun Project-provided icons. The original image feels _incredibly_ embarassing now. But I still loved the concept.

So I decided to create a new illustration for the website, one that this time would be animated with a GoL easter egg.

Using [Sketch](https://www.sketchapp.com/), I created a couple of test illustrations. I hand-edited the resulting svg code with additional class names and data attributes, and then began teaching myself how to use the Greensock animation platform to produce the animation.

The current iteration published to [Paul's website](http://psexton.net) remains relatively simple: only five generations of a GoL “board” configuration – which was designated at random by Golly – are animated.

<svg class="animation" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 438 360">
  <defs>
    <ellipse id="path-1" cx="30.8635392" cy="19.3007916" rx="4.5" ry="4.5" />
    <mask id="mask-2" x="0" y="0" width="9" height="9" fill="#fff">
      <use xlink:href="#path-1" />
    </mask>
  </defs>
  <g fill="none" fill-rule="evenodd">
    <g class="stars">
      <path class="Star1" fill="#D6E1E8" d="M136.618 30.585l3.292-8.733 9.026-3.517-8.54-4.506-3.96-8.25-4.202 8.73-8.298 4.303 9.426 3.717 3.256 8.248" />
      <path class="Star2" fill="#E7ECF0" d="M113.213 60.688l2.37-5.94 6.5-2.39-6.15-3.065-2.85-5.605-3.027 5.937-5.974 2.928 6.787 2.527 2.34 5.608" />
    </g>
    <g class="tree1" transform="translate(.5 168)" fill="#84AEA5">
      <path class="trunk" d="M35.166 43.84h5v30h-5z" />
      <circle id="foliage" cx="39.0683617" cy="37.0382118" r="13" />
      <ellipse class="foliage" cx="38.0598421" cy="18.3982702" rx="10.5" ry="10.5" />
      <ellipse class="foliage" cx="50.3948271" cy="30.2452058" rx="11" ry="11" />
      <ellipse class="foliage" cx="27.0919663" cy="31.0214532" rx="11" ry="11" />
      <ellipse class="foliage" cx="18.0683617" cy="19.2452058" rx="7" ry="7" />
      <ellipse class="foliage_animated" cx="5.64587214" cy="6.21733856" rx="5.5" ry="5.5" />
    </g>
    <g class="tree2" fill="#84AEA5">
      <path class="trunk" d="M414.874 248.157h6v-34h-6" />
      <path d="M423.415 205.8c0 6.904-5.373 12.5-12 12.5s-12-5.596-12-12.5c0-6.902 5.373-12.5 12-12.5s12 5.598 12 12.5z" id="foliage" />
      <path d="M425.438 193.3c6.627 0 12 5.598 12 12.5 0 6.904-5.373 12.5-12 12.5s-12-5.596-12-12.5c0-6.902 5.373-12.5 12-12.5" id="foliage" />
      <path d="M418.712 179.755c6.903 0 12.5 6.044 12.5 13.5s-5.597 13.5-12.5 13.5c-6.904 0-12.5-6.044-12.5-13.5s5.596-13.5 12.5-13.5" id="foliage" />
    </g>
    <g class="sqbuilding">
      <path d="M84.714 112.866c0-4.97 4.03-9.002 9-9.002h42.002c4.97 0 9 4.022 9 9.002v125.998H84.713V112.866z" id="structure" fill="#D3BDB0" />
      <g class="sqwGroup" fill="#FFF">
        <path class="w" data-index="1" d="M108.865 218.497h12v12h-12z" />
        <path class="w" data-index="2" d="M93.88 218.417h12v12h-12z" />
        <path class="w" data-index="3" d="M123.85 203.33h12v12h-12z" />
        <path class="w" data-index="4" d="M108.865 203.692h12v12h-12z" />
        <path class="w" data-index="5" d="M93.88 203.61h12v12h-12z" />
        <path class="w" data-index="6" d="M123.85 188.364h12v12h-12z" />
        <path class="w" data-index="7" d="M108.865 188.726h12v12h-12z" />
        <path class="w" data-index="8" d="M93.88 188.645h12v12h-12z" />
        <path class="w" data-index="9" d="M123.85 173.197h12v12h-12z" />
        <path class="w" data-index="10" d="M108.865 173.558h12v12h-12z" />
        <path class="w" data-index="11" d="M93.88 173.478h12v12h-12z" />
        <path class="w" data-index="12" d="M123.85 158.392h12v12h-12z" />
        <path class="w" data-index="13" d="M108.865 158.753h12v12h-12z" />
        <path class="w" data-index="14" d="M93.88 158.673h12v12h-12z" />
        <path class="w" data-index="15" d="M123.85 143.426h12v12h-12z" />
        <path class="w" data-index="16" d="M108.865 143.787h12v12h-12z" />
        <path class="w" data-index="17" d="M93.88 143.707h12v12h-12z" />
        <path class="w" data-index="18" d="M123.7 128.26h12v12h-12z" />
        <path class="w" data-index="19" d="M108.713 128.62h12v12h-12z" />
        <path class="w" data-index="20" d="M93.726 128.54h12v12h-12z" />
        <path class="w" data-index="21" d="M108.665 113.687h12v12h-12z" />
        <path class="w" data-index="22" d="M123.85 113.687h12v12h-12z" />
        <path class="w" data-index="23" d="M123.85 218.458h12v12h-12z" />
        <path class="w" data-index="24" d="M93.478 113.687h12v12h-12z" />
      </g>
    </g>
    <g class="hancock">
      <path class="structure" fill="#D3BDB0" d="M326.352 51.64h40l10 187h-60" />
      <path class="detail" fill="#FFF" d="M319.71 172.634h53v6h-53m3.127-68.842h47v5h-47z" />
      <g class="xGroup" fill="#FFF">
        <path d="M333.23 193.094c1.656 0 3.78 1.087 4.75 2.438l22.14 30.79c.97 1.345.415 2.436-1.242 2.436h-.18c-1.655 0-3.772-1.097-4.73-2.45l-21.766-30.762c-.958-1.354-.398-2.452 1.264-2.452h-.236z" id="detail" />
        <path d="M360.31 193.182c-1.657 0-3.827 1.064-4.843 2.375l-23.905 30.825c-1.017 1.312-.507 2.376 1.158 2.376h.295c1.657 0 3.816-1.065 4.82-2.376l23.62-30.825c1.006-1.312.482-2.375-1.18-2.375h.035z" id="detail" />
      </g>
      <g class="xGroup" fill="#FFF">
        <path d="M333.23 127.196c1.656 0 3.78 1.087 4.75 2.437l22.14 30.79c.97 1.346.415 2.437-1.242 2.437h-.18c-1.655 0-3.772-1.097-4.73-2.45l-21.766-30.762c-.958-1.354-.398-2.452 1.264-2.452h-.236z" id="Path-7" />
        <path d="M360.31 127.283c-1.657 0-3.827 1.065-4.843 2.376l-23.905 30.82c-1.017 1.31-.507 2.372 1.158 2.372h.295c1.657 0 3.816-1.066 4.82-2.377l23.62-30.825c1.006-1.312.482-2.376-1.18-2.376h.035z" id="Path-7" />
      </g>
      <g class="xGroup" fill="#FFF">
        <path d="M333.23 63.79c1.656 0 3.78 1.088 4.75 2.438l22.14 30.79c.97 1.346.415 2.437-1.242 2.437h-.18c-1.655 0-3.772-1.097-4.73-2.45L332.202 66.24c-.958-1.353-.398-2.45 1.264-2.45h-.236z" id="Path-7" />
        <path d="M360.31 63.878c-1.657 0-3.827 1.065-4.843 2.376L331.562 97.08c-1.017 1.31-.507 2.375 1.158 2.375h.295c1.657 0 3.816-1.065 4.82-2.376l23.62-30.83c1.006-1.31.482-2.38-1.18-2.38h.035z" id="Path-7" />
      </g>
      <path class="detail" fill="#D3BDB0" d="M336.498 39.16h6v13h-6m12.068-13h6v13h-6z" />
    </g>
    <g class="willets" transform="translate(234.885 1)">
      <path d="M33.73 24.532H.4v213h33.33v-213zm13.334 37.826H33.73v175.174h13.334V62.358zm13.334 92.078H47.064v83.096h13.334v-83.096z" id="structure" fill="#84AFA5" />
      <path class="detail" fill="#84AEA5" d="M6.116.688h6v24h-6zm15.454 0h6v24h-6z" />
      <path class="detail" fill="#FDFDFD" d="M9.116 90.697h27v9h-27m-.372-24h27v9h-27" />
      <rect class="cw" fill="#FFF" x="24.5712272" y="164.956077" width="11" height="11" rx="5.5" />
      <path class="sqw" fill="#FFF" d="M9.336 164.956h11v11h-11z" />
      <rect class="cw" fill="#FFF" x="24.5712272" y="106.37828" width="11" height="11" rx="5.5" />
      <path class="sqw" fill="#FFF" d="M9.336 106.378h11v11h-11zM24.57 123.27h11v11h-11z" />
      <rect class="cw" fill="#FFF" x="9.33596848" y="123.268531" width="11" height="11" rx="5.5" />
    </g>
    <g class="vbuilding">
      <path class="structure" fill="#C3E3D8" d="M164.76 88.864h50.002v150h-50" />
      <path class="detail" fill="#FFF" d="M162.024 113.7l22.98 19.284-2.57 3.064-22.98-19.284m1.74 8.8l22.982 19.283-2.57 3.064-22.983-19.28m59.81-4.69l-22.98 19.29 2.57 3.065 22.98-19.284m-1.743 8.8l-22.98 19.283 2.57 3.064 22.983-19.282m-59.81 16.833l22.98 19.284-2.57 3.065-22.98-19.283m1.74 8.8l22.983 19.284-2.57 3.062-22.983-19.282m59.81-4.687l-22.98 19.284 2.57 3.065 22.98-19.28m-1.743 8.8l-22.98 19.28 2.57 3.065 22.983-19.28" />
      <path class="roof" fill="#C2E3D7" d="M189.76 61.268l25 27-25 27-25-27" />
      <path class="detail" fill="#FFF" d="M164.925 83.888l24.372 26.518 24.366-26.518 2.24 5.176-26.606 29.824-27.394-29.824" />
      <path class="detail" fill="#FFF" d="M187.706 57.864h5v30h-5z" />
    </g>
    <g class="lake">
      <path class="beach" fill="#D6E1E8" d="M35.187 256.416h386v8h-386" />
      <g class="boat1" transform="translate(132.82 275.77)">
        <path d="M.725 31.718h45l-3.342 14H9.88l-9.155-14z" id="hull" fill="#D6E1E8" />
        <text class="comment" font-family="EnzoOT-Black, Enzo OT" font-size="12.0473531" font-weight="700" fill="#FFF">
          <tspan x="31.3015812" y="42.3040746">//</tspan>
        </text>
        <path class="mast" fill="#D6E1E8" d="M17.386 8.87h4v24h-4" />
        <path class="sail" fill="#D6E1E8" d="M24.41.92v25h20" />
        <use class="detail" stroke="#FFF" mask="url(#mask-2)" stroke-width="5.13" xlink:href="#path-1" />
        <path class="detail" fill="#FFF" d="M34.07 17.104l3.862-1.035.518 1.93-3.864 1.03m-11.453 1.21l3.864-1.037.517 1.93-3.864 1.037" />
      </g>
      <g class="boat2" fill="#D6E1E8">
        <path class="hull" d="M339.4 301.44h-50l13.722 13h24.158" />
        <path class="mast" d="M315.924 276.674h-4v25h4z" />
        <path class="sail" d="M308.524 276.44l-10 20h10m11.056-20l20 20h-20" />
      </g>
      <g class="duck" transform="translate(211.244 320)" fill="#D6E1E8">
        <rect class="torso" x="0.0292825736" y="7.62807107" width="30" height="14" rx="7" />
        <ellipse class="head" cx="26.1322536" cy="5.62564369" rx="6.5" ry="5" />
        <path class="beak" d="M31.24 7.56v-4l8 1.454" />
      </g>
      <path class="ripples detail" d="M274.133 307.624h-13v-4h13m-38.153 3.916h-14v-3.916h14m-17 4h-14v-4h14m27.21 3.884h-7v-4h7m-44.888 4h-7v-4h7m56.152 4.116h-7v-4h7m-22.48 53.24h-27.36v-3.916h27.36m10.533 4h-7v-4h7m-87.165-16.93h24v-4h-24m35.6 3.874h-7v-4h7m108.46 2.125h-24v-4h24m-35.602 3.875h7v-4h-7m-58.457-40.54h-7v-4h7m10.903 4h-7v-4h7m-21.34 4h-14v-4h14m84.65 4.392h-50v-4h50" fill="#E6ECF0" />
    </g>
  </g>
</svg>

You can take a closer look at [some similar experiments on CodePen](http://codepen.io/tinykite/). 

It’s still a work in progress. I started this project with limited familiarity with Javascript and Jquery, and zero familiarity with Greensock. But somehow, Conway's Game of Life has become a gateway drug to accidental, actual math appreciation. 
