# "Learning Log" - Gatsby-based blog implementation (v1)

## What _is_ this repo?

I wanted to build a blog, but not reinvent the wheel (_or go crazy: at the time, I was spending 7-10 hours a day writing React components for work._) 

I started adapting the [Gatsby + Netlify CMS Starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) to get off the ground running; for several months, it worked nicely as a spur to produce more Markdown posts in my free time.

I made an early decision to implement [Spectre.css](https://picturepan2.github.io/spectre/) -- a lightweight framework, and one I enjoyed working with, but ultimately not the right tool for this job.

The work required to get the styling to something I'd enjoy combined with the work required to understand and confidently write GraphQL queries -- and neither of those were priorities for where I wanted to spend my time.

Eventually, I came across Netlify's Lumen starter, did a couple of quick calculations on time cost, and spent an afternoon porting over my posts and performing the minorest of tweaks. [Results here!](http://www.suss.world/) 

Overall, I'm happy with the time I spent on this repo, even if I didn't end up deploying it. Mostly I learned how rusty my prose-writing has become; however, I learned something similar about my holistic-design skills. And those are valuable discoveries, if a little concerning!

## (Now-discarded) next steps on the technical side:
  - ~~Make the `/notes` && `/ideas` pages into one component that takes a prop (_they differ by literally one word: a query variable, which happens to be the same as_ `props.location.pathname[1, -1]`)~~ **Update:** currently [there's no template interpolation in GraphQL fragments.](https://github.com/gatsbyjs/gatsby/issues/5069) (_It looks like this isn't limited to Gatsby._) On hold (_along with the two following tasks_) for now.
    - Add pagination to said component
    - Add a defensive “_no posts here!_” presentational component to render inside said component, if `data.allMarkdownRemark.edges.length === 0`
  - Add (_back_) a 404 page
  - Rip out Spectre; write your own CSS
