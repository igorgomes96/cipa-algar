set sql_safe_updates = 0;
delete from LinhasDimensionamentos;
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,0,50,0,0 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,51,100,1,1 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,101,140,2,1 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,141,300,3,2 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,301,500,4,3 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,501,1000,5,4 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,1001,2500,6,5 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,2501,5000,8,6 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,5001,10000,10,8 from Grupos a where CodigoGrupo <> "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,0,19,0,0 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,20,29,1,1 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,30,50,2,1 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,51,100,3,2 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,101,140,4,2 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,141,300,4,3 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,301,500,5,4 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,501,1000,6,5 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,1001,2500,9,7 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,2501,5000,11,8 from Grupos a where CodigoGrupo = "C-18a";
insert into LinhasDimensionamentos (GrupoId, Minimo, Maximo, QtdaEfetivos, QtdaSuplentes) select a.Id,5001,10000,13,10 from Grupos a where CodigoGrupo = "C-18a";
update Grupos set AcrescimoEfetivos = 1, AcrescimoSuplentes = 1;
update Grupos set AcrescimoEfetivos = 2, AcrescimoSuplentes = 2 where CodigoGrupo = "C-18a";