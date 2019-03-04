---
templateKey: 'blog-post'
title: Revisiting Vanilla JS Notes
date: 2019-03-04
description: Thoughts on JavaScript, data structures, algorithms, and my prior studies of each.
postType: 'ideas'
tags:
  - javascript
  - data-structures
  - algorithms
  - revisitation
---

## Where Are We Coming From?

I suppose I have a bit of a chip on my shoulder for having missed ~~much~~ <small>all</small> of the traditional CS coursework, prior to beginning my career as a developer.

Less-experienced developers with whom I work have frequently confided that it contributed much less to their success as a  professional programmer than, say, coterminous internships, personal projects, university-sponsored hackathons, etc... but an equal percentage of more-senior developers equivocate, concerningly, when the topic inevitably comes up around the lunchtable.

Obviously, not all BS-in-CS-FOMO components are equal. I’m more comfortable with my lacuna of expertise in, say, chipboard control than I am with that fabled whiteboard Scylla and Charybdis: Data Structures and Algorithms.<sup>1</sup> To at least prepare myself to remedy this in the future -- to be pointed in the right direction, should the need arise to undergo that training -- over the last 18 months I’ve essayed multiple lukewarm introductions to each field.

Each of these notes has gone unopened and unreferenced since the time of their completion, so this revisitation carried with it a frisson of uncertainty: had I used _any_ of this content, even unconsciously? Or is it all simply too many layers of abstraction below what I typically find myself working on?

## Rereading Notes: Two Books, One Workshop

Somewhat unfairly, I'd lumped [_Object-Oriented JavaScript_](https://www.packtpub.com/web-development/object-oriented-javascript-second-edition) in with the two more explicitly-related materials, largely because I didn’t have a better bucket to add it to. The book promptly repaid this slight by being the only one featuring content that I _have_ actually made use of at work or home in the last ~year. Draw from that what you will.

I wonder what the "reacquaintance" corollary to the [Baader-Meinhof complex](https://en.wikipedia.org/wiki/Baader%E2%80%93Meinhof_effect) would be titled. In the back of my head, I dimly store the difference between passing-by-reference and passing-by-value, and if queried I could-easily enough dredge it up: but (_as it comes up so rarely in my daily coding, at least_), it was surprisingly refreshing to encounter the explicit definitions, laid out clearly and with enumerations of its most-common gotchas (e.g. "_whoops I **did** just mod the original...right?_") Especially when those gotchas then randomly resurface 2-3 times in the following couple days.

I wonder if you see fewer cases of the `.call`/`.apply` methods because ES6 modules have made encapsulation easier to both [1] reason about and [2] tighten. ...or if I just don’t work enough within lower-level utility packages/libraries that (_appear to_) rely on more classical OOP practices? Keep an eye out for them: it (_unscientifically_) feels, at least, like they were omnipresent in our (Backbone/jQuery/CoffeeScript) legacy code.

And, finally, the warmest of warm fuzzies: though  I hadn't thought about them via their generic descriptions (as presented here, each of the design patterns mentioned connected almost instantaneously to a vivid example in our code base. I recall the sense of frustration at not being able to grok, _a priori_, a factory vs an observer vs a singleton: oh, what a difference twelve months of Ruby makes.

## Next Steps

Parallel to your conclusions from the React revisitation on learning more about underlying browser technologies: when you get a sec, spend some time learning
1. [the details of `history.pushState`](https://developer.mozilla.org/en-US/docs/Web/API/History_API#The_pushState()_method) more deeply, and
2. [the most common usages, and methods for use, of `document.cookie`.](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

And, you know, beyond that? Maybe the most meaningful takeaway from these three texts is the realization not every review **does** need to conclude with a toy-app to spec out, or a resolution for future involvement/action.

Sometimes, the sum of a Revisitation (_big R, as in "an instance of this experiment you're undertaking to return to notes you've written in the past"_) really can be to simply take a pore-through at at the materials, reflect on what value studying them has provided to you in the time intervening, and move on. And that's okay.

<sup>1</sup>Not, to be clear, because I have any driving interest in working at a FAANG: but rather because my inference, based on those lunchtable conversations, is that thinking through the problems offered in those courses is good training for the sort of problem-solving that goes into architecting and leading development on an at-scale web app. Which, for all I know, might be hilariously inaccurate.