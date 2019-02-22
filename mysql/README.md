# Using MySQL

## INSTALLATION

```sh
brew install mysql
sudo apt isntall mysql-server
```

## SETUP

```sh
mysql_secure_installation
```

## RUN

```sh
mysql -u root -p
```

## CREATE DATABASE

```sql
CREATE DATABASE mytasks;
USE mytasks;
```
## CREATE TABLE

Table:

| id  | name  | email           |
| --- | ----- | --------------- |
| 1   | jon   | jon@gmail.com   |
| 2   | wix   | wix@gmail.com   |
| 3   | kills | kills@gmail.com |

SQL Create Table:

```sql
CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(50),
  email VARCHAR(50)
);
```

## INSERT DATA

```sql
INSERT INTO users (name, email)
VALUES
('jon', 'jon@gmail.com '),
('wix', 'wix@gmail.com'),
('kills', 'kills@gmail.com');
```

## SELECT DATA

```sql
SELECT * FROM users;
```

Output:

```txt
1|jon|jon@gmail.com
2|wix|wix@gmail.com
3|kiils|kills@gmail.com
```