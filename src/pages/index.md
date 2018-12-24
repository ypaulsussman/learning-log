---
templateKey: 'about-page'
path: /
title: An About Page
---

## What are we doing here?

Well, I know what _I'm_ doing here!

I wanted to “start a blog”: more specifically, I wanted to build (or adapt) a small, low-investment codebase that would impel me to write down more of my thoughts. 

My reactions to media I've consumed, my ideas for projects that I may someday even start, my observations on unbidden stimuli as the universe rolls past... I don't have a ton of confidence in _their_ intrinsic value, but I feel pretty good about the mental exercise that I predict ${_recording those thoughts, and sharpening them in that process of recording_} will bring. 

## But how does a blog help?

I keenly feel EB White's complaint: 

> “If the world were merely seductive, that would be easy. If it were merely challenging, that would be no problem. But I arise in the morning torn between a desire to improve the world and a desire to enjoy the world. This makes it hard to plan the day.”

Compounding this, I’m concerned by both ${_the dubiousness of my efforts to improve the world_} and ${_the discrepancies in mapping self-improvement - the point of this blog - to world-improvement_}. 

And, in parallel, I know I'm very, very skilled at enjoying the world.

## So what to do? 

This blog turns on an contradiction: I don't _want_ anyone to see this. 

In technical terms, it's vaguely embarrassing. I mean, [take a look yourself:](https://github.com/ypaulsussman/learning-log) it’s essentially a slash-and-burn adapatation of [Netlify’s Gatsby CMS starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms), except...
* there’s a shameful amount of DRY-violation in the components; 
* the GraphQL’s been modified without the slightest understanding of how that language actually works, or how to optimize it; 
* the styling roughly translates to “_import the lightest-weight columns-and-components library you can find, then write a bunch of contradictory overrides_”... woof. This list could go on. 

As for the content, I’m more concerned by its absence than by its quality: at this stage, it’s mostly distillations of books I’ve read or workshops I’ve attended, as opposed to actual engagement with them. [Bloom would not be pleased.](https://cft.vanderbilt.edu/guides-sub-pages/blooms-taxonomy/) 

And yet.

And yet, for all that, this blog **needs** to be (_at least hypothetically!_) visible to others, to force me to continue thinking about it, and contributing to it, and refining it. So, while the intent is not actually to help you, dear reader, or anyone else - it's purely selfish, to be a spur for my own extracurricular, professional, personal development - I do need you to exist, if only as a possibility. 

A stick to the carrot of ${_writing and coding for fun_}. 

A friendly threat, from a well-meaning neighbor.

Thanks for stopping by. :)

## OK, sure, cool, whatever. What’s next?

I'm weighing the (_as-yet-unreplicated?_) [warnings against sharing goals publicly](http://www.psych.nyu.edu/gollwitzer/09_Gollwitzer_Sheeran_Seifert_Michalski_When_Intentions_.pdf) with, again, the hope that knowing this is available on the public internet will terrify me into slowly iterating through them. So how do I want to improve this site?

* **On the content side**: 
    * You've converted perhaps three-dozen notes from Google Docs to Markdown, but none of them involve any commentary on the books, sites, lectures, workshops. Write some posts a la "_Revisiting notes from ${text}, several months on_".
    * You should still have a Plaintext file containing sequential errors, logs, warnings, etc from your summertime adventure of setting up hosting for the `daily_ua` MVP. Convert that file into a series of posts: I'm not sure you'll use GCP (or even the Translate API) in the future, but even the process of ${_categorizing the errors you made, and how you solved them_} could be beneficial.
    * You've been studying Ukrainian in a foreign language situation, now, for close to a year. How have your practices evolved? What have you learned - not about Ukrainian, but about learning?
    * You have several pages of ${_toy app, doctoral thesis, research project, distance learning startup_} ideas remaining in Docs. Markdownify those, disaggregate, and expand.
    * As you begin implementing some of those above toy apps, take notes on what you do and what you learn.
* **On the technical side**:
    * ~~Make the `/notes` && `/ideas` pages into one component that takes a prop (_they differ by literally one word: a query variable, which happens to be the same as_ `props.location.pathname[1, -1]`)~~ **Update:** currently [there's no template interpolation in GraphQL fragments.](https://github.com/gatsbyjs/gatsby/issues/5069) (_It looks like this isn't limited to Gatsby._) On hold (_along with the two following tasks_) for now.
        * Add pagination to said component
        * Add a defensive “_no posts here!_” presentational component to render inside said component, if `data.allMarkdownRemark.edges.length === 0`
    * Add (_back_) a 404 page
    * Rip out Spectre; write your own CSS
