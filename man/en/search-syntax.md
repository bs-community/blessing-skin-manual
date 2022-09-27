# Search Syntax

From Blessing Skin v5, the filtering and sorting functions in User Management and Role Management are integrated into the search box above the management list. Flexible filtering and sorting can be achieved by using syntactical queries.

## search

### Exact search

Most fields in the list support exact searches. For example, to find the user with UID 1 you can use a query like this:

````
uid = 1
````

You can also use a colon (`:`, half-width) instead of the equal sign (`=`):

````
uid: 1
````

In the above statement, spaces do not affect the query.

Some more examples:

Query the user corresponding to an email address:

````
email = 'a@b.c'
````

Single quotes can be changed to double quotes. But no matter what kind of quotation marks are used, they must be half-width quotation marks:

````
email = "a@b.c"
````

### Specifies the search for the comparison relation

The `>`, `<`, `>=`, `<=` operators can also be used in queries. These operators work not only with numbers (including integers and decimals), but also with dates.

For example, to find users with more than 50 points:

````
score > 50
````

Or to find users whose registration time is after 2020-01-01 00:00:00:

````
register_at > '2020-01-01 00:00:00'
````

Note that **add** quotation marks when using dates.

Additionally, relative dates such as `today` and `tomorrow` can be used when looking up by date:

````
register_at >= today
````

At this point **no need** for the quotation marks.

### Fuzzy search

There are several fields for fuzzy search. The fields that currently support fuzzy search are:

- `email` field in User model

- the `nickname` field in the user model

- the `name` field in the role model

When using fuzzy search, you don't have to specify field names like Exact Search, and you don't need an exact match when searching.

For example, suppose there are two users with email addresses `abc@test.test` and `bcd@test.test`. When using fuzzy search, you can directly enter in the search box:

````
bc
````

Then both users will be searched.

By contrast, if you enter:

````
email = 'bc'
````

At this point no user will be matched because this is an exact search.

### Logical operators

Currently supported logical operators are `not`, `and` and `or`.

Find users with 50 or fewer points:

````
not score>50
````

Find users with more than 50 points and a UID greater than 100:

````
score > 50 and uid > 100
````

Find users with more than 50 points or UIDs greater than 100:

````
score > 50 or uid > 100
````

When used, half-width parentheses can be added to clarify the precedence of expressions:

````
(score < 50 or uid < 100) and permission = 0
````

The above query will find users who meet **any** of the following conditions:

- Ordinary users with less than 50 points (`permission` is 0)
- Normal users with UID less than 100 (`permission` is 0)

## sort

To specify a sort, just add `sort:` and the field name to the query. The default is ascending order.

like:

````
sort:register_at
````

This means sorting in ascending order of registration time.

If you need to sort in descending order, add `-` before the field name:

````
sort:-register_at
````

## Queries limit

Although this feature is rarely used, we can limit the number of query items in the query statement, just like SQL:

````
limit:5 from:7
````

This means start at 8 and only query 5 records.

::: tip

The `limit` parameter and the `from` parameter can be used independently of each other.

:::