---
title: A more creative approach to learning git
date: 2020-02-01 00:00:00 Z
layout: post
description: Reframing git naming conventions, interactive rebasing, and other fundamentals around cooking metaphors.
---

For me personally, learning git has often felt like struggling to swim. Without knowing much, I’ve generally been able to get to where I need to go. But sometimes only with an awful lot of awkward splashing, second guesses, and unnecessary panic.

And if you’re anything like me, surviving even just one or two botched attempts at a git merge can make you question if you’re the only human who struggles with command-line tasks — and the awkwardness can be amplified by unsuccessful attempts to understand the super-technical nature of git’s documentation.

So when I had an opportunity to teach other creatives about git earlier this year, I started experimenting with a slightly different, analog approach. It involved sandwiches.

## But why sandwiches

A very kind senior developer once told me that learning how to solve new problems with code is a lot like writing a recipe for making a sandwich. He was totally right: and I think the concept applies to any form of cooking. Even if you don’t understand how to recreate the fluffiness of a buttermilk pancake without flour or dairy, you can still typically begin to strategize the individual, discrete steps that might push you in the right direction.

But less seriously, I’m mostly just nostalgic for a good grilled cheese.

## Sandwich blogging for beginners

If you were to write down the necessary steps to make a traditional bánh mì, you might include a lot of short, concise instructions in the present tense. Like “buy sourdough baguette” or “add pickled carrots.”

Maybe all of your friends and followers love fermented food, so there’s no reason to ever blog about _why_ exactly anyone should add pickled carrots. And working with git is pretty similar — you can make a series of decisions about your code, and then choose to write simple, self-explanatory messages about each one without additional explanation.

On occasion maybe there’s a significant reason for choosing one particular sourdough baguette over another. So you write down “buy sourdough baguette” and then in a sub-section beneath that heading, elaborate on why you think the sourdough baguette from a small bakery in Northeast Minneapolis has no comparable alternative, because all other attempts at a sourdough with a large, amorphously blobby crumb structure are unfortunately just garbage and not suitable to the demands of this particular sandwich.

Other times, you’ve made preventative considerations for commonly occurring problems — like the scourge of a soggy sandwich.

Part of the magic of git for me is that it provides individuals with a structured way to handle all three of these situations, by allowing individual contributors to annotate changes in the heading, body, and footer sections of a commit message. Even better, platforms like Github can automatically parse — and link — these comments to relevant discussions and feature-specific issues.

## Collaborative sandwich arts

Sometimes you need to get inspired before you can even commit to making a sandwich, much less write about it. So you spend an hour watching videos from the Bon Appétit test kitchen to get into an experimental mood, and eventually end up copying down a recipe for a seemingly great grilled Halloumi sandwich from Montreal’s Dépanneur Le Pick-Up.

After you write the recipe down, you delete certain steps that don’t make any sense. Like, Halloumi gives you mad gas. But maybe you could replace it with a nice garlicky cashew cheese? You’re also one of the unfortunate humans who think cilantro tastes like soap. But you have some parsley about to wilt in the fridge, and that might be nice. And your initial dose of hot sauce was just not quite sufficient enough — three separate times.

Cooking is full of this type of experimentation, and it feels like the perfect parallel to git’s interactive rebase features — which make it easier to delete, combine, or re-arrange commits in your existing git history.

I didn’t love using git’s interactive rebase until a couple years ago. I thought if I tried rebasing frequently I might just end up screwing up all the time. And I wasn’t sure how necessary it was, in the same way in which coloring outside of the lines of a given recipe can feel like too big of a risk.

But rebasing your commit history can help provide a cleaner, more linear narrative for your code. That might make it easier for others to read in code reviews, or even easier to debug in the future — when and if you’re faced with digging through multiple commits to find where exactly a certain bug was introduced.

## Insert your own sandwich jokes, please

I’m sure there are plenty of other silly things that can be said about sandwiches and collaborative coding. These are just a few, and I’d welcome anyone to add their own.
