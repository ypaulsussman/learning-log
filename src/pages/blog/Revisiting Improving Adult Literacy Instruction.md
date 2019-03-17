---
templateKey: "blog-post"
title: Revisiting Improving Adult Literacy Instruction
date: 2019-03-17
description: These are my thoughts on rereading the notes I'd taken while reading Improving Adult Literacy Instruction.
postType: "ideas"
tags:
  - education
  - learning
  - teaching
  - literacy
  - revisitation
---

## What Are We Doing Here?

This document is a weird one: it’s notes from a review-of-the-literature white paper that... apparently I had elected to read for fun? Sometime in the middle of... my first salaried ~~development~~ (_phrasing!_) programming job?

Whatever my motives -- and I’m not being coy when I say, a year and a half on, they are entirely obscure to me -- over the intervening 18 months, I've done nothing with the material therein. No application to toy apps, no usage in the classroom... it's been completely unreferenced.

As a result, my first (_somewhat shamefaced_) instinct was to skip revisiting this file entirely, and just surreptitiously delete it: but I had gone so long without reviewing any of my education-related notes that I decided to undertake the (_pretty massive_) pruning, editing, and restructuring that was necessary to allow any meaningful engagement with the actual content. 

And I’m glad I did! Albeit for unexpected reasons.

## Revisitation

First, a note on process, or... meta-observation? I felt that in this revisitation I engaged with the content in greater depth and granularity than I have in many  revisitations prior. I believe this stemmed from these notes' need for a broad, detailed reorganization and trimming. (_Bluntly: they were a dispersed, digressive, repetitive mess._) 

Ultimately, I suspect this made the revisitation more protracted, less superficial... and mentally more rewarding. One takeaway for the future, then (_facilitated, already, by the clipping feature of the Kindle I now largely use_) is to be liberal, when in doubt, in selecting what to highlight. It'll force one's future self, on revisitation, to interact at a level deeper on the [DoK tables.](https://www.lake.k12.fl.us/Page/27614) 

---

Less positively: this set of notes finally drove home the annoyance and superfluousness of my earlier attempts to maintain (_at least a facsimile of_) APA-style citations. So many unnecessary periphrastic brackets... an unpleasant but forceful reminder to write for the genre, even if the genre in question is "_loose notes, solely for you and your busy self a couple months from now._"

---

Ironically, perhaps, the thickest section (_and one I got the most out of_) was the literacy-irrelevant, skill-neutral overview on What Works® in the broader world of instructional design. Completely removed from the world of adult literacy education, there's plenty in this chapter that plan to apply in my own neurotic attempt to perpetually measure and hone my personal autodidactic process. <sup>1</sup>

---

On a slightly less myopic level, one mental tool initiated by revisiting this article was an envisioning of `${adult literacy development}` as a proxy or analogue for `${the process of learning to code.}` They share a similar reliance on several skills (_each integrated to varying degrees_); in both cases, there exist several ongoing (_yet still-in-use!_) sources of potential interference; and both deal in several levels of functional proficiency (rather than a binary, so-unhelpful-as-to-be-meaningless "_able to code_"/"_able to read._") 

I'm not sure to what level of detail one should explore the analogy, or even whether to focus instead on areas in which the equivalence breaks down: but it's definitely a comparison to further contemplate. I suspect successful practices in one field could be reenvisioned and applied, beneficially, for the other. 'Literacy bootcamp?' Well, why not?<sup>2</sup>

---

Finally, coming on the heels of my navel-gazing about the tension and tradeoffs between `${perfecting pedagogical efficacy}` [vs] `${buttressing and expanding the basic social affordances which make even passable pedagogy realistic at a given institution}` (_see "Revisiting How the Brain Learns"_), this report was refreshingly clear about what it considers the most important target of future efforts. (_Spoilers: the latter._) 

## Next Steps

I can't do much for their first research priority ("_engage learners for longer periods of time, encourage students to participate and persevere_") -- I'm not crazy about emulating big-tobacco-style advertising, even for education.<sup>3</sup> Likewise, you (_alas!_) won't see me in a position to tweak state/federal stipends for learners anytime soon. For the other priorities, though, there's more to think about: and, reassuringly for my ego, several options approachable via toy-app experimentation!

---

A second direction, to "_develop more valid ways of measuring adults’ literacy gains with assessments designed to show progress in specific component skills,_" resonates with my experience in ELL literacy instruction. The [CASAS test's items](https://www.casas.org/product-overviews/curriculum-management-instruction/sample-test-items/life-and-work-reading) are fairly straightforward in their structure (_they're all selected-response, multiple-choice._) 

This makes them rather amenable to [1] easy human generation (_or more-difficult computer generation_) of similarly-formatted questions on a variety of desired content topics, and [2] inclusion in a modified SRS system that, for literacy development, could also track (_and respond with changes to_) feedback format (_e.g. from input of picture, to word, to eventually audio clip; and from output of selected word, to typed words, to possibly even speech-to-text._)

---

The paper also points toward technology's potential to "_free literacy practice from being dependent on a specific learning location,_" and while I'm loath to say anything nice about well, digital anything, I’ve been surprised on multiple occasions by students' facility with their mobile devices, at no correlation to their English-language or (_any-language_) literacy skill.

One such example is students across proficiency levels using YouTube (_on their phone_) to gain exposure to English conversational language and set expressions. So how to deepen the quality of their interactions with English via this channel?

I see two paths to leveraging this. The first involves more human labor up front: a school would need to submit their own videos. However, by adding a link in the video description to to a website with `[comprehension, language-focus, even text-response]` questions, you obviate the learner-barrier of needing to first successfully browse/navigate to the correct URL (_a blocker I’ve encountered several times prior, and one indifferent to the complexity of the URL itself._)

The second (_significantly more ambitious_) project would embed a video, and generate questions automatically. It looks like both YouTube's submitted and automatic captions are wrapped in the `class="captions-text"` selector, so presumably you can agnostically scrape text from English-language videos, regardless of whether captions were initially provided by the uploader. (_A quick StackOverflowing tentatively confirms this._) The NLP needed to generate even the simplest of questions meaningfully derived from video captions make this well outside my bounds of competence: but in principle it certainly seems doable with today’s technology.

---

The final research priority is into technology's ability to "_overcome the high cost of intelligent human labor, in this case literacy instructors._" I feel my dozen-odd years in the classroom give me some right to make the comparison, here, of full-time teachers to subsistence farmers. (_Bear with me._)

The hours of the day are so insufficient, the baseline required tasks so demanding, and the price of failure so high, that... there’s just not a ton of logical incentive to expend even moderate amounts of energy on even moderately-proven innovations. By that logic, any teacher-support application is _a priori_ unhelpful unless it decreases, substantially, the amount of work the teacher needs to do. 

When I think through the graph of constituent activities a classroom instructor commonly engages in, the first point of assistance that comes to mind is that of surfacing relevant materials. I'm not sure whether the best model forward is via "push" (_that is, a teachers'-library search engine, customizable by e.g. proficiency level of students, theme guiding the lesson, standards composing the curriculum and informing later assessments, etc._) or "pull" (_...that is, the lesson-planner equivalent of Clippy: "it looks like next Thursday you're teaching a course for the NRS 0-1 Class on Transporation. Would you like to see some relevant vocab sheets, and associated exercises?"_) -- I suspect the latter would see greater use, but perhaps would need the former accessible from within it?

The second point of assistance builds on that aforementioned unctuous nightmare being, “_lesson planner Clippy._” The amount of _post facto_ time teachers resentfully spend aligning `${what they intuit (based on their experience, and usually correctly) to be the best structure of a lesson}` with `${whatever two-dozen bullets of inaccessible standards were attached by the [institutional, regional, federal, international] accredititng body}` is so acknowledged and intractable as to essentially be a meme at this point. (_By "aligning" I here mean "contorting so as to be justified by, because again I'm on hour 10 of this day, still have to make copies for the students and finish grading my other course, and as such will be damned if I'm going to rewrite the entire controlled-practice section of this class."_) 

And yet... those standards often do have real value to add to the creation of a lesson! If nothing else, they inject a second voice and paradigm, even if detached: and thereby can provoke the lesson-builder into questioning those default assumptions and rote formulas that creep into even the best teacher's practice over the semesters. I propose that standards have been damned by their implementation, not their existence: no one wants a scolding, unaccountable, disembodied schoolmarm casting a critical eye over the painstaking work they've just barely managed to punctually complete. What they might like is a dialogue with a peer, and one occuring during the creation process.

I'd envision the second role of (_gakh, shudder_) “_lesson planner Clippy_” to be almost that of a real-time chatbot, providing input prompts to speed up e.g. task creation while simultaneously guiding the teacher to integrate best practices (_such as those listed in, well, the `Principles of Learning for Instructional Design` section of this paper..._)

Admittedly, this envisions the lesson-plan creation process as something akin to form-filling, which is simply impractical in some cases: but for the majority of classroom instruction sessions that I've been part of, I see such a tool fulfilling that highest, most praiseworthy goal. (_That is: to return time back to teachers._)

---
<sup>1</sup> Yes, that sounds healthy: read a list of how to design things to help others... then curl up on your couch and use them for yourself. Noice.

<sup>2</sup>Well, sure, ignoring the whole "_complete lack of market demand/funding model_" and "_whole-cloth unsuitability to the realities of most non-literate ELL's family adn work lives._" ...beyond those, it seems promising?

<sup>3</sup> Wow: I'm old! It occurs to me that I can't even really make that reference anymore... I should've instead referred to Facebook.