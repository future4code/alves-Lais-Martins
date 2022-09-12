CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

## Exercício 1

-- a) 
-- id é um varchar(n) = strings e seu número máximo de caracteres e é uma cgave primária /
-- name é um varchar(n) = strings e seu número máximo de caracteres e não pode ser nulo /
-- salary é um número não inteiro e não pode ser nulo/
-- birth_date é uma data e não pode ser nulo/
-- gender é um varchar(n) = strings e seu número máximo de caracteres e não pode ser nulo

-- b)
show databases;
-- exibe o banco de dados disponível
show tables;
-- exibe as tabelas disponíveis no banco

-- c)
describe Actor;
-- exibe as informações da tabela Actor

## Exercício 2
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- Exercício 3

-- a)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Glória Pires",
  1200000,
  "1963-08-23", 
  "female"
);	

-- b)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Maria Flor",
  1900000,
  "1983-08-31", 
  "female"
);	
-- chave primária duplicada / ocorre porque ó id já existe

-- c)
INSERT INTO Actor (id, name, salary)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);
-- "A contagem de colunas não corresponde à contagem de valores"
-- o número de valores fornecidosno insert é diferente do número de colunas

-- d)
 INSERT INTO Actor (id, salary, birth_date, gender)
VALUES(
  "004",
  400000,
  "1949-04-18", 
  "male"
);
-- "A contagem de colunas não corresponde à contagem de valores"
-- o número de valores fornecidosno insert é diferente do número de colunas

-- e)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  1979-03-26, 
  "female"
);																
-- valor da data incorreto/ Faltou ""                                                                     

-- f)
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Emilio Dantas",
  500000,
  "1982-11-29", 
  "male"
);

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "004", 
  "Sophie Charlotte",
  1400000,
  "1989-04-29", 
  "female"
);

## Exercício 3

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

-- a)
SELECT * from Actor WHERE gender = "female";

-- b)
select salary from Actor where name = "Tony Ramos";

-- c)
select * from Actor where gender = "invalid";
-- Retornou a primeira linha em branco da tabela onde as informações são null

-- d)
select id, name, salary from Actor where salary <= 500000;

-- e)
SELECT id, nome from Actor WHERE id = "002";
-- coluna nome é desconhecida/ Correção:
SELECT id, name from Actor WHERE id = "002";

## Exercício 4
select * from Actor where name like "a%" or name like "j%" 
and salary > 300000;

-- a) selecione tudo da tabela Actor onde o nome comece com a ou j e o salario seja maior que 300000

-- b)
select * from Actor where name not like "a%" and salary > 350000;

-- c)
select * from Actor where name like "%g%" or name like "%G%";

-- d)
select * from Actor where name like "%a%" or name like "%A%" 
or name like "%g%" or name like "%G%" 
and salary between 350000 and 900000;


