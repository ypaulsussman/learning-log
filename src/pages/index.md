---
templateKey: 'about-page'
path: /
title: What are we doing here?
---
I'll get to that down the road. for now, remember you need to:

* rip out spectre; write your own CSS
* add pagination to `/notes` && `/ideas`
* make their pages into one component that takes a prop, since they differ by literally one word (a query variable, which happens to be the same as `props.location.pathname[1, -1]`
* add defensive “no posts here!” presentational component to render inside said component if `data.allMarkdownRemark.edges.length === 0`
* add back a 404 page, you savage
* some ideas pages might not hurt, either
