# Learning Log

- **Text to add below**:
  - what do you use this for
  - what was the process of exploring various gatsby starters, unsuccessfully setting out to build your own, then selecting the `Gatsby + Netlify CMS Starter` to adapt
  - what were the major adaptations you made, and why
  - how do you host it

- **Next steps on the technical side**:
  - ~~Make the `/notes` && `/ideas` pages into one component that takes a prop (_they differ by literally one word: a query variable, which happens to be the same as_ `props.location.pathname[1, -1]`)~~ **Update:** currently [there's no template interpolation in GraphQL fragments.](https://github.com/gatsbyjs/gatsby/issues/5069) (_It looks like this isn't limited to Gatsby._) On hold (_along with the two following tasks_) for now.
    - Add pagination to said component
    - Add a defensive “_no posts here!_” presentational component to render inside said component, if `data.allMarkdownRemark.edges.length === 0`
  - Add (_back_) a 404 page
  - Rip out Spectre; write your own CSS
