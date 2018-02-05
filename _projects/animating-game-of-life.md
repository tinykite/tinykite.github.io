---
layout: post
title: "Animating Conway's Game of Life"
description: "Identity Design, Animation, Web Design/Development"
weight: 7
image: PaulSexton-Thumb-Final-C.jpg
---
It started simple. My brother asked me I could create a business card for him. He's a software engineer by day, maker of bad dad jokes at night. He off-handedly mentioned that he's always been fascinated with the mathematical algorithm known as Conway's Game of Life. And sort of wanted that in easily digestible, logo form. 

Could I do it? 

It was a simple enough premise: many of GoL’s most infamous patterns, such as the spaceship (above) oscillate or evolve through no more than a handful of states.

The more I experimented, however, the more I felt slightly conflicted.

Minus any academic context, it felt awfully all-or-nothing as a concept. Either someone might catch the isolated reference to a so-called “zero player” game first introduced in the pages of Scientific American in 1970. Or—if they were anything at all like me

All the above illustration might resemble is a space invader with a giant nose.

So I decided to create a pattern that would complement a software engineer’s overall brand identity without requiring any recognition or understanding of Game of Life.

As an easter egg for über nerds, it would still need to be primarily comprised of commonly occuring cellular automata. And it would also have to be possible, my brother decided, for the pattern to be able to be plugged into a Game of Life simulator (such as Golly) and substantially evolve for at least 1-2,000 generations.

After multiple rounds of experimentation in Golly, the pattern that successfuly met my own aesthetic criteria – as well as my brother’s own technical ones – ended up being surprisingly simple.

The back-side pattern of the business card (below) contains four R-pentominos surrounding a common form of induction coil.

With an induction coil (a classification of pattern often used to stabilize large initial “game” configurations) I was able to place the R-pentominos closely together without sacrificing longevity; The pattern substantially evolves – symmetrically – for close to 2,000 generations.

You can download the Golly file I created for this experiment here.

Experiment 2
After finishing work on the business cards, I felt really curious about exploring other ways Game of Life could influence design decisions or even be used to produce generative design work.

I found my opportunity in the website I created for Paul way back in 2012.

I orginally created it as a way to learn ExpressionEngine. As a learning opportunity, it also served as the first time I was ever exposed to the concept of building a website from the inside out, from a series of reusable code snippets and custom site-wide variables – versus solely relying on a system of embedded templates within other templates.

More relevantly, it featured an illustration (above) that I cobbled together from a couple of basic shapes and Noun Project-provided icons. The original image feels embarassing now. But I still love the concept.

So I decided to create a new illustration for the website, one that this time would be animated with a GoL easter egg.

Using Sketch, I iterated a couple of test illustrations. I hand-edited the resulting svg code with additional class names and data attributes, and then began teaching myself how to use the Greensock animation platform to produce the animation.

The current iteration published to Paul’s website remains relatively simple: only five generations of a GoL “board” configuration – which was designated at random by Golly – are animated.

You can take a closer look at some similar experiments on CodePen.

It’s still a work in progress. I started this project with limited familiarity with Javascript and Jquery, and zero familiarity with Greensock.

I want to add other animation elements to the illustration and also improve up on the current code (which currently relies on a manual assignment of a data attribute to a jquery variable, and doesn’t benefit from the use of loops or any kind of math or logic).

At some point this year, I’d also like to evolve the animation into a full-fledged Game of Life simulator.