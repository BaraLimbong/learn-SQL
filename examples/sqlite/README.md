# PRACTICE SQLite

Table:

| id  | name | email          |
| --- | ---- | -------------- |
| 1   | John | john@gmail.com |
| 2   | Wick | wick@gmail.com |
| 3   | Cole | cole@gmail.com |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

## Insert Data

```sql
INSERT INTO users (name, email)
VALUES
("John", "john@gmail.com"),
("Wick", "wick@gmail.com"),
("Cole", "cole@gmail.com");
```
