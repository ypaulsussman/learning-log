---
templateKey: 'blog-post'
title: Revisiting Ruby Notes
date: 2019-02-01
description: Thoughts on my relationship to [Ruby, Rails], and what I could do to deepen it.
postType: 'ideas'
tags:
  - ruby
  - rails
  - revisitation
    
---

### Where are we coming from?

“_Between the idea / And the reality / Between the motion / And the act / Falls the Shadow_”

I attended a full-stack-JavaScript boot camp for six months; I learned quite a lot. I did not, however, learn any Ruby, or any Rails: both of which I needed for my first job afterward. While I started at that position almost exclusively working on the front end, I tried to get up to speed on our server technologies in the evenings and weekends, first via Codecademy's free course on Ruby. 

After about a year, that employer shut down the lab under which I was working; I found myself looking for a new job, and looking to strengthen my ability to talk knowledgeably about Ruby and Rails. To that end, I discovered [a great list of questions on both subjects](https://rubygarage.org/blog/how-to-interview-your-ruby-on-rails-developer), and went to town on digging up the answers.

That was a little over six months ago; in the interim, I’ve spent far more time working in RoR than I had in the previous year and a half. I’m curious, in this post, to revisit those two notes: and to see how tightly their contents has aligned to what I’ve actually found myself doing.

### Rereading Codecademy’s 'Learn Ruby' Notes

An aside: you still fully don't understand the difference between local variables, instance variables, and symbols. No, seriously: this bit you, earlier this week, when passing decorated objects around controllers and Jbuilder templates.

You've never used `String.chomp`, in all your Ruby coding: and yet I doubt you'll ever forget it. Too darn cute. (Unexpectedly, though, you _had_ forgotten `collect` and `inject`, and always use the original methods they alias, even though they rhyme nicely together as “_collect, inject, select_”...)

You’d forgot that, when running `.each` on a hash, you pass two params to the block: one for the key and one for the value! (Looks like you’d also forgot that the `.each_key` and `.each_value` hash methods exist, too...)

Wow, you hadn’t thought of using your own `Proc` in... months. It’s stupefying how much power it has... and, concomitantly, how much you've then been able to achieve without it. Hm.

Remember, `include` is for adding module methods at the instance level; `extend` at the class level.

### Rereading Ruby Garage’s Questions


### Quietly Considering Why I'm Bad At Everything

As I went through the above two documents, I found myself reflecting, for a protracted time, on a single question. (Intriguingly -- disconcertingly? -- the answer changed over that period of time.)

In the last 18 months, what is the ratio of time I’ve spent referencing (_that is, accessing in order to locate a pre-formed question, not reading sequentially for general edification_) the [core API docs](https://ruby-doc.org/core-2.6/), the [Rails API docs](https://api.rubyonrails.org/), and the [Rails guides](https://guides.rubyonrails.org/)?

Almost immediately I knew it wasn’t the first; however, my initial instinct was that I’d spent the most time looking up information in the official Rails documentation. That is, after all, its intended purpose: the third is a series of broadly-instructional overviews, sometimes almost narrative. 

And yet, counting up the actual cases of seeking out a specific detail or solution? Overwhelmingly, I'd found my answers within the Rails guides. Hm. Curious.

That sent me to a 45-min (_and, admittedly, wholly unscientific_) perusal of the contents of the two Rails subdomains, and to a somewhat humbling conclusion: I'm using the Rails guides because, well, I don't know Rails very well at all. 

Yet.

### So What, Now What? 


Turn [the documentation](https://api.rubyonrails.org/) into a story. Tell the story of data coursing around a fictional webapp; describe the routes, and each of the Rails libraries used. [like this?](https://blog.sessionstack.com/how-does-javascript-actually-work-part-1-b0bacc073cf)