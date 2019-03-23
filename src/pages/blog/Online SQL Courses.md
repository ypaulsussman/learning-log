---
templateKey: "blog-post"
title: Online SQL Courses (various)
date: 2019-03-29
description: I realized I'd been relying on very basic, stultified strategies for querying our database; given my absence of any formal SQL training, I elected to run though a few online intro courses. Here are the notes on what I'd never verbalized or formally intuited before (...yeah, `or just didn't know.)
postType: 'notes'
tags:
  - website
  - database
  - sql
---
 
 ## [Select Star SQL](https://selectstarsql.com/) 
 
 Backticks can be used to denote column and table names. This is useful when the column or table name is the same as a SQL keyword and when they have a space in them.

---

 In SQL, `NULL` is the value of an empty entry. This is different from the empty string `''` and the integer `0`, both of which are not considered `NULL`. 
 
 To check if an entry is `NULL`, use `IS` and `IS NOT` instead of `=` and `!=`.

---

```sql
SELECT
  county,
  COUNT(*) AS county_executions
FROM executions
GROUP BY county
```
Didn’t we just learn not to mix aggregated and non-aggregated columns? 
* The difference above is that grouping column(s) are the _only_ columns allowed to be non-aggregate in the query. 
* That is, all the rows composing a given group must have the same values on that/those column(s), so there’s no ambiguity in the value that should be returned.
* The grouping columns don't necessarily have to be in the `SELECT` block.

Using `GROUP BY` with multiple columns will group only those rows that have the same value for _all_ listed columns (_thus resulting in more rows, each composing more-specific groups_)

---

The below code finds the percentage of executions from each county. (_100.0 is a decimal so we can get decimal percentages._)
```sql
SELECT
  county,
  100.0 * COUNT(*) / (select count(*) from executions)
    AS percentage
FROM executions
GROUP BY county
ORDER BY percentage DESC
```

---

`JOIN` creates a big combined table which is then fed into the `FROM` block just like any other table. 

The `JOIN` command defaults to performing what is called an “_inner join,_” in which unmatched rows are dropped. 

A join creates enough rows of so that each matching row gets its own partner. In this way, joins can create tables that are larger than the their constituents. 

---

`previous` is derived from `executions`, so we’re effectively joining `executions` to itself. This is called a _“self join_” and is a powerful technique for allowing rows to get information from other parts of the same table.

```sql
SELECT
  last_ex_date AS start,
  ex_date AS end,
  -- sqllite requires functions to perform operations on dates
  JULIANDAY(ex_date) - JULIANDAY(last_ex_date) AS day_difference
FROM executions
JOIN (
    SELECT
      ex_number + 1 AS ex_number,
      ex_date AS last_ex_date
    FROM executions
  ) previous
  ON executions.ex_number = previous.ex_number
ORDER BY day_difference DESC
LIMIT 10
```

---

## [PostgreSQL Exercises](https://pgexercises.com/)
