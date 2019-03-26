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

### Basic 

The `IN` operator is a good early demonstrator of the elegance of the relational model. 
- The argument it takes is not just a list of values - it's actually a table with a single column. 
- Since queries also return tables, if you create a query that returns a single column, you can feed those results into an `IN` operator:

```sql
select * 
	from cd.facilities
	where
		facid in (
			select facid from cd.facilities
			);
```

This example is functionally equivalent to just selecting all the facilities, but shows you how to feed the results of one query into another. 

---

Below, we're doing computation in the area of the query between `SELECT` and `FROM`: 

```sql
select name, 
	case when (monthlymaintenance > 100) then
		'expensive'
	else
		'cheap'
	end as cost
	from cd.facilities;    
```

Previously we've only used this to select columns that we want to return, but you can put anything in here that will produce a single result per returned row - including subqueries.

---

Below, you use a subquery to find out what the most recent `joindate` is: 

```sql
select firstname, surname, joindate
	from cd.members
	where joindate = 
		(select max(joindate) 
			from cd.members);          
```

- This subquery returns a scalar table - that is, a table with a single column and a single row. 
- Since we have just a single value, we can substitute the subquery anywhere we might put a single constant value. 
- In this case, we use it to complete the `WHERE` clause of a query to find a given member.

---

### Joins and Subqueries

https://pgexercises.com/questions/joins/
