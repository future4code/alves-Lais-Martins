// aprofundamento MySQL exercícios

// SELECT \* FROM `alves-lais-martins`.Actor;

// -- Aprofundamento MySQL

// ALTER TABLE Actor ADD favorite\_ice\_cream\_flavor VARCHAR(255);

// ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

// -- Exercício 1

// -- a)

// -- exclui a coluna salary

// -- b)

// -- muda o nome da coluna de gender para sex e define que é uma varchar de limite 6 caracteres

// -- c)

// -- muda a coluna gender mantendo o nome mas alterando o varchar para 255

// -- d)

// ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

// -- Exercício 2

// -- a)

// update Actor set name = "Patati" where id = "003";

// update Actor set birth\_date = '1816-12-12' where id = "003";

// -- b)

// select lower (name) from Actor where name = "Juluiana Paes";

// update Actor set name = "Juluiana Paes" where name = "JULIANA PAES";

// SET SQL\_SAFE\_UPDATES = 0;

// -- c)

// update Actor set

// name = "Elisabeth II",

// salary = 199,

// birth\_date =  "1988-05-21",

// gender = "no-bi",

// favorite\_ice\_cream\_flavor = "cream"

// where id = "005";

// -- d)

// update Actor set name = "Gasparzinho" where id = "102";

// -- Dá certo mas aparece que 0 linhas foram afetadas pq ainda não foi criado o id 102

// -- Exercício 3

// DELETE FROM Actor WHERE name = "Tony Ramos";

// -- a)

// DELETE FROM Actor WHERE name = "Fernanda Montenegro";

// -- b)

// DELETE FROM Actor WHERE gender = "male" and salary > 1000000;

// -- Exercício 4

// -- a)

// select \* from Actor order by salary desc limit 1;

// -- b)

// select min(salary) from Actor where gender = "female";

// -- c)

// select count(\*) from Actor where gender = "female";

// -- d)

// select sum(salary) from Actor;

// -- Exercício 5

// -- a)

// SELECT COUNT(\*), gender

// FROM Actor

// GROUP BY gender;

// -- Retornando a quantidade de Actors por gender

// -- b)

// select id, name from Actor order by name desc;

// -- c)

// select \* from Actor order by salary;

// -- d)

// select \* from Actor order by salary desc limit 3;

// -- e)

// select avg (salary) as media\_salario, gender from Actor group by gender;




