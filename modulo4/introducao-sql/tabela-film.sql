## Exercício 5
CREATE TABLE Film (
    id varchar (7) PRIMARY KEY,
    titulo VARCHAR (200) NOT NULL,
    sinopse  text (2000) NOT NULL,
    lancamento DATE NOT NULL,
    avaliacao int(2) NOT NULL 
);

-- a)
-- A diferença entre text e varchar é que o text 
-- sempre vai ser armazenado em blob e o varchar 
-- diretamente nas linhas, exceto caso ele exceda o limite de 8k 
-- e daí ele será armazenado como blob

-- b)
INSERT INTO Film (id, titulo, sinopse, lancamento, avaliacao)
VALUES (
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
"2006/01/06",
 7
);

-- c)
INSERT INTO Film (id, titulo, sinopse, lancamento, avaliacao)
VALUES (
"002",
"Doce de mãe",
"Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
"2012/12/27",
 10
);

-- d)
INSERT INTO Film (id, titulo, sinopse, lancamento, avaliacao)
VALUES (
"003",
"Dona Flor e Seus Dois Maridos",
"Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce",
'2017/11/02',
 8
);

-- e)
INSERT INTO Film (id, titulo, sinopse, lancamento, avaliacao)
VALUES (
"004",
"O Código Tarantino",
"Dois amigos em um bar conversam sobre teorias envolvendo os filmes do Tarantino",
'2006/11/20',
 8
);

## Exercício 6

-- a)
select id, titulo, avaliacao from Film where id = "002";

-- b)
select * from Film where name = "O Código Tarantino";

-- c)
select id, titulo, sinopse from Film where avaliacao > 6;

## Exercício 7

-- a)
select * from Film where titulo like "%vida%";

-- b)
select * from Film where titulo like "%uma%" or sinopse like "%uma%";

-- c)
select * from Film where lancamento < '2022/08/22';

-- d)
 select * from Film where titulo like "%uma%" or sinopse like "%uma%"
 and lancamento < '2022/08/22' and avaliacao > 7;
 
 SELECT * FROM Film WHERE lancamento < curdate();