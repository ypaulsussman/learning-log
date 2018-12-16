---
templateKey: "blog-post"
title: React and Firebase (Kinney, Steve)
date: 2018-12-13
description: This workshop is for web developers who want to build real-time applications using React rapidly. If you’ve ever had an idea for a product or project but not wanted to deal with the hassle of provisioning servers or setting up databases, this course is for you.
postType: 'notes'
tags:
  - frontend-masters
  - live-course
  - nonfiction
  - react
  - firebase
  - javascript
  - steve-kinney
---

## Intro

Can write backend code for Firebase, too - not just for communicating w/ frontend.

Web code has become similar to native apps -- bundle of JS around single-line HTML file. Firebase makes that more explicit.

Cloud Firestore replaces-ish Realtime Database

- Both replace lots of functionality that would otherwise require WebSockets (realtime updates)
- RD might be cheaper if you have tons (of tons of tons) of queries/read/writes; otherwise, use CF

Side note: v1 of class focuses on Realtime Database

Realtime Database uses one giant JSON tree - forces you to keep tree very shallow, b/c you'd get every subnode.

Cloud Firestore is based on collections: shallow (one-level) queries let you then query only specific subcollections (not all by default), and thus do less data denormalization.

```javascript
//querying sub-collections:
firestore.collection("posts");
firestore.collection("posts").doc("kslkdf48f7sdfh43");
firestore
  .collection("posts")
  .doc("kslkdf48f7sdfh43")
  .collection("comments");
firestore
  .collection("posts")
  .doc("kslkdf48f7sdfh43")
  .collection("comments")
  .doc(xmcvhuy6s787dfvcx);

//alternatively
firestore.collection("posts/kslkdf48f7sdfh43/comments");
//there's another, but you miseed it
```

Can get SQL-like queries: under the hood, Cloud Firestore indexes by each field: so you can `orderBy`, `where`, `limit`(by up to ~200 properties.)

You can use pagination to limit how much is sent - this limits cost, too.

Can't to substring search, but can do alph order.

Preferred in Firestore is k:v store, b/c indices may change all the time in real-time store

Currently in Firestore there's only one dbname for e.g.

```
servicecloud.firestore{
    match /databases/${dbname}/documents {
      match /posts/${postid}{
        allow read, write: if request.auth.uid !== null;
      }
    }
}
```

`${dbname}` will, at least for now, always be 'default.'

read: get/list
write: create/update/delete

`resource.data` = all fields currently in db
`request.resource.data` = all fields && incoming document (i.e. use to respond to doc creation)

Security rules are all or nothing; if one case is true for a user, then they have permission.

Good practice: security rule to limit size of query against malicious users.

Custom Claims can allow you to put ~1kb of extra data on a user object (for when you're only using e.g. Google Auth's user object)... but in general it's way better to create your own user collections.

Auth State Change is not like Firestore Change -- former only pushes on login/logout.

V1 of the course uses redux & thunk to manage component-level state from firestore.

=> check remark: usable on all react apps?
=> google 'firebase vs ' to see comparables (...if any?)

**es6 computed properties?**

```javascript
class Foo extends Bar {
  get baz() {
    return quuz;
  }
}
```

Subcollection advantages: if you don't want to get everything in a first pass, you can place the extra data in a subcollection (thus saving the amount of data you need to grab on e.g. a list vs a get)

`<WithRouter>` is the React Router HOC that passes all the [history, location, match] info in as props

V8 perf optimization (knowing shape of object in advance) => where did you encounter that?

Components: have outermost element be `<section/>`, not a `<div/>` - more semantic. (Or, if possible: main, aside, nav, etc?)

Best Practice: set up (provisional) permissions for a given collection before coding out the frontend - looks like if you don't you'll frequently be slipping on 'lacking access' errors.

=> Check the 'comments' architecture in the codebase, to see how a document (posts) can have its own collection (comments)

`WrappedComponent.displayName =`WithUser(\${getDisplayName(WrappedComponent)})`;` is used in order to for Babel to provide the accurate name for the React devTools

Hook into firebase for the data you need once, then use Context/Hooks to provide slices of that data to only the proper components (also - Context allows you to send the result of that one single query to all those components, vs e.g. setState.)

The CLI gives you all the power of the browser-based dashboard.

There's a tool for writing unit tests against your DB access rules.

Compound indexes _aren't_ joins - but they let you speed up other indices.

So far, everything we've done has been on the client, save for access rules. Serverless functions allow you to write "backend" code.

On free plan, can't call any (non-Google) third-party API via cloud functions; however, you can install any npm packages you like.

Cloud functions can listen to [1] HTTP requests (thereby creating your own API), or [2] changes in the datastore.

No implicit return in cloud functions: must either return a value or a promise!

You get to play with "eventual consistency" - round out the bottom 10's or so and you're good to go.

Need to code a little more defensively b/c (unlike e.g. ActiveRecord, where db updates before HTML is rendered and sent to client) you _can_ find yourself in a situation where the page has updated before the realtime data store has pushed the new data.

Build documents that can start from the UI backwards.

Next step: how to architect a nosql database? often, counterintuitive to sql db architecture.

One downside: not the greatest set of logs, b/c you can't see the server.