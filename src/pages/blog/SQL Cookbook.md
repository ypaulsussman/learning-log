---
templateKey: "blog-post"
title: SQL Cookbook (Molinaro, Anthony)
date: 2019-03-30
description: This book will show you how to create UIs with this small JavaScript library that can deftly display data changes on large-scale, data-driven websites without page reloads. Along the way, you’ll learn how to work with functional programming and the latest ECMAScript features.
postType: "notes"
tags:
  - book
  - oreilly
  - sql
  - database
---

## Code Conventions

Many solutions make use of inline views, or subqueries in the `FROM` clause:

```sql
select job, sal
  from (select job, max(sal) sal from emp
    group by job)x;
```

Notice the letter `X` following the final, closing parenthesis.

- That letter `X` becomes the name of the “table” returned by the subquery in the `FROM` clause.
- While column aliases are a valuable tool for writing self-documenting code, aliases on inline views (_for most recipes in this book_) are simply formalities.
- They are typically given trivial names such as `X`, `Y`, `Z`, `TMP1`, and `TMP2`.
- In cases where I feel a better alias will provide more understanding, I do so.

---

## Retrieving Records

### Referencing an Aliased Column in the `WHERE` Clause

Wrapping your query as an inline view you can reference the aliased columns (here, `sal` and `comm`):

```sql
select * from (
  select sal as salary, comm as commission from emp
  )x
where salary < 5000
```

### Concatenating Column Values

You would like to return values in multiple columns as a single column. For example, you would like to produce this result set from a query against the `EMP` table, e.g. `CLARK WORKS AS A MANAGER`

PostgreSQL uses the double vertical bar as the concatenation operator:

```sql
select ename||' WORKS AS A '||job as msg
  from emp
  where deptno=10
```

The `||` is a shortcut for the `CONCAT` function in PostgreSQL.

### Using Conditional Logic in a `SELECT` Statement

If you want:

| ENAME | SAL  | STATUS    |
| ----- | ---- | --------- |
| SMITH | 800  | UNDERPAID |
| ALLEN | 1600 | UNDERPAID |
| WARD  | 1250 | UNDERPAID |
| JONES | 2975 | OK        |

Use the `CASE` expression to perform conditional logic directly in your `SELECT` statement:

```sql
select ename,sal,
  case when sal <= 2000 then 'UNDERPAID'
    when sal >= 4000 then 'OVERPAID'
    else 'OK'
  end as status
from emp

```

In the solution, you’ll see the alias `STATUS` given to the result of the `CASE` expression.

- The `ELSE` clause is optional.
- Omit the `ELSE`, and the `CASE` expression will return `NULL` for any row that does not satisfy the test condition.

### Finding Null Values

To determine whether a value is null, you must use `IS NULL`:

```sql
select *
  from emp
where comm is null
```

- `NULL` is never equal/not equal to anything, not even itself, therefore you cannot use `=` or `!=` for testing whether a column is `NULL`.
- To determine whether or not a row has `NULL` values you must use `IS NULL`.
- You can also use `IS NOT NULL` to find rows without a null in a given column.

### Transforming Nulls into Real Values

Use the function `COALESCE` to substitute real values for nulls:

```sql
select coalesce(comm,0) from emp
```

The `COALESCE` function takes one or more values as arguments.

- The function returns the first non-null value in the list.
- In the code above, the value of `COMM` is returned whenever `COMM` is not null.
- Otherwise, a zero is returned.

While you can also use `CASE` to translate nulls into values, you can see that it’s much easier and more succinct to use `COALESCE`.

---

## Sorting Query Results

### Returning Query Results in a Specified Order

You need not specify the name of the column on which to sort.

- You can instead specify a number representing the column.
- The number starts at 1 and matches the items in the `SELECT` list from left to right:

```sql
select ename,job,sal from emp where deptno = 10 order by 3 desc
```

- The number `3` in this example’s `ORDER BY` clause corresponds to the third column in the `SELECT` list, which is `SAL`.
- By default, `ORDER BY` will sort in ascending order, and the `ASC` clause is therefore optional.

### Sorting by Multiple Fields

You want to sort the rows from `EMP`...

- first by `DEPTNO` ascending,
- then by `salary` descending.

```sql
select empno,deptno,sal,ename,job 2 from emp 3 order by deptno, sal desc
```

- The order of precedence in ORDER BY is from left to right.
- You are generally permitted to order by a column not in the SELECT list, but to do so you must explicitly name the column.
- However, if you are using GROUP BY or DISTINCT in your query, you cannot order by columns that are not in the SELECT list.

### Sorting by Substrings

You want to return employee names and jobs from table `EMP`, then sort by the last two characters in the `job` field.

| ENAME  | JOB       |
| ------ | --------- |
| KING   | PRESIDENT |
| SMITH  | CLERK     |
| ADAMS  | CLERK     |
| JAMES  | CLERK     |
| JONES  | MANAGER   |
| BLAKE  | MANAGER   |
| MARTIN | SALESMAN  |

Use the `SUBSTR` function in the `ORDER BY` clause:

```sql
select ename,job from emp order by substr(job,length(job)-1)
```

### Dealing with Nulls When Sorting

To sort non-NULL values in ascending or descending order and all `NULL` values last, you can use a `CASE` expression to conditionally sort the column.

```sql
/* NON-NULL COMM SORTED ASCENDING, ALL NULLS LAST */
select ename,sal,comm from (
  select ename,sal,comm,  
    case when comm is null then 0 
      else 1 
    end as is_null 
  from emp ) x 
order by is_null desc,comm
``` 




ENAME SAL COMM ------ ----- ---------- TURNER 1500 0 ALLEN 1600 300 WARD 1250 500 MARTIN 1250 1400 SMITH 800 JONES 2975 JAMES 950 MILLER 1300

Problem You want to sort based on some conditional logic. For example: if JOB is “SALESMAN” you want to sort on COMM; otherwise, you want to sort by SAL. You want to return the following result set: ENAME SAL JOB COMM ---------- ---------- --------- ---------- TURNER 1500 SALESMAN 0 ALLEN 1600 SALESMAN 300 WARD 1250 SALESMAN 500 SMITH 800 CLERK JAMES 950 CLERK ADAMS 1100 CLERK MILLER 1300 CLERK MARTIN 1250 SALESMAN 1400 CLARK 2450 MANAGER BLAKE 2850 MANAGER JONES 2975 MANAGER SCOTT 3000 ANALYST FORD 3000 ANALYST KING 5000 PRESIDENT Solution Use a CASE expression in the ORDER BY clause: 1 select ename,sal,job,comm 2 from emp 3 order by case when job = 'SALESMAN' then comm else sal end Discussion You can use the CASE expression to dynamically change how results are sorted.

For example, you want to display the name and department number of the employees in department 10 in table EMP, along with the name and department number of each department in table DEPT. You want the result set to look like the following: ENAME_AND_DNAME DEPTNO --------------- ---------- CLARK 10 KING 10 MILLER 10 ---------- ACCOUNTING 10 RESEARCH 20 SALES 30 OPERATIONS 40 Solution Use the set operation UNION ALL to combine rows from multiple tables: 1 select ename as ename_and_dname, deptno 2 from emp 3 where deptno = 10 4 union all 5 select '----------', null 6 from t1 7union all 8 select dname, deptno 9 from dept Discussion UNION ALL combines rows from multiple row sources into one result set. As with all set operations, the items in all the SELECT lists must match in number and data type.

UNION ALL will include duplicates if they exist. If you wish to filter out duplicates, use the UNION operator.

Using UNION is roughly equivalent to the following query, which applies DISTINCT to the output from a UNION ALL: select distinct deptno from ( select deptno from emp union all select deptno from dept ) DEPTNO --------- 10 20 30 40 You wouldn’t use DISTINCT in a query unless you had to, and the same rule applies for UNION; don’t use it instead of UNION ALL unless you have to.

you want to display the names of all employees in department 10 along with the location of each employee’s department, but that data is stored in two separate tables.

Join table EMP to table DEPT on DEPTNO: 1 select e.ename, d.loc 2 from emp e, dept d 3 where e.deptno = d.deptno 4 and e.deptno = 10 Discussion The solution is an example of a join, or more accurately an equi-join, which is a type of inner join.

Conceptually, the result set from a join is produced by first creating a Cartesian product (all possible combinations of rows) from the tables listed in the FROM clause, as seen below: select e.ename, d.loc, e.deptno as emp_deptno, d.deptno as dept_deptno from emp e, dept d where e.deptno = 10

Then, the expression in the WHERE clause involving e.deptno and d.deptno (the join) restricts the result set such that the only rows returned are the ones where EMP.DEPTNO and DEPT.DEPTNO are equal:

An alternative solution makes use of an explicit JOIN clause (the “INNER” keyword is optional): select e.ename, d.loc from emp e inner join dept d on (e.deptno = d.deptno) where e.deptno = 10

Use the JOIN clause if you prefer to have the join logic in the FROM clause rather than the WHERE clause. Both styles are ANSI compliant and work on all the latest versions of the RDBMSs in this book.

You want to find common rows between two tables but there are multiple columns on which you can join.

select \* from emp; EMPNO ENAME JOB MGR HIREDATE SAL COMM DEPTNO

The contents of EMP and DEPT are shown below, respectively:

select \* from dept; DEPTNO DNAME LOC

Additionally, you will find four pivot tables used in this book; T1, T10, T100, and T500. Because these tables exist only to facilitate pivots, I did not find it necessary to give them clever names. The number following the “T” in each of the pivot tables signifies the number of rows in each table starting from

Additionally, you will find four pivot tables used in this book; T1, T10, T100, and T500. Because these tables exist only to facilitate pivots, I did not find it necessary to give them clever names. The number following the “T” in each of the pivot tables signifies the number of rows in each table starting from 1.

some vendors allow partial SELECT statements. For example, you can have SELECT without a FROM clause. I don’t particularly like this, thus I select against a support table, T1, with a single row, rather than using partial queries.

create view V as select ename,job,sal from emp where job = 'CLERK'

Only clerks are returned from view V. However, the view does not show all possible EMP columns. You want to return the EMPNO, ENAME, JOB, SAL, and DEPTNO of all employees in EMP that match the rows from view V.

Join the tables on all the columns necessary to return the correct result. Alternatively, use the set operation INTERSECT to avoid performing a join and instead return the intersection (common rows) of the two tables.

1 select e.empno,e.ename,e.job,e.sal,e.deptno 2 from emp e join V 3 on ( e.ename = v.ename 4 and e.job = v.job 5 and e.sal = v.sal )

It’s the solution you should use if you need to return values from view V. If you do not actually need to return columns from view V, you may use the set operation INTERSECT along with an IN predicate: 1 select empno,ename,job,sal,deptno 2 from emp 3 where (ename,job,sal) in ( 4 select ename,job,sal from emp 5intersect 6 select ename,job,sal from V 7 )

Discussion When performing joins, you must consider the proper columns to join on in order to return correct results. This is especially important when rows can have common values for some columns while having different values for others.

When using INTERSECT, you are required to compare the same number of items, having the same data type, from two tables. When working with set operations keep in mind that, by default, duplicate rows will not be returned.

you want to find which departments (if any) in table DEPT do not exist in table EMP. In the example data, DEPTNO 40 from table DEPT does not exist in table EMP, so

PostgreSQL, and Oracle support set difference operations.

Use the set operation EXCEPT: 1 select deptno from dept 2 except 3 select deptno from emp

Use a subquery to return all DEPTNOs from table EMP into an outer query that searches table DEPT for rows that are not amongst the rows returned from the subquery: 1 select deptno 2 from dept 3 where deptno not in (select deptno from emp)

There are restrictions on the use of set operators, including EXCEPT. Data types and number of values to compare must match in both SELECT lists. Additionally, EXCEPT will not return duplicates and, unlike a subquery using NOT IN, NULLs do not present a problem

Duplicate elimination is something you’ll want to consider when using the MySQL and SQL Server solutions. The EXCEPT- and MINUS-based solutions used for the other platforms eliminate duplicate rows from the result set, ensuring that each DEPTNO is reported only one time.

you could use DISTINCT as follows to ensure that each DEPTNO value missing from EMP is reported only once: select distinct deptno from dept where deptno not in (select deptno from emp) Be mindful of NULLs when using NOT IN.

In SQL, “TRUE or NULL” is TRUE, but “FALSE or NULL” is NULL! You must keep this in mind when using IN predicates and when performing logical OR evaluations, and NULL values are involved. To avoid the problem with NOT IN and NULLs, use a correlated subquery in conjunction with NOT EXISTS. The term "correlated subquery” is used because rows from the outer query are referenced in the subquery. The following example is an alternative solution that will not be affected by NULL rows (going back to the original query from the “Problem” section): select d.deptno from dept d where not exists ( select 1 from emp e where d.deptno = e.deptno )

```

```
