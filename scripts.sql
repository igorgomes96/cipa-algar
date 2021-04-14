set sql_safe_updates = 0;
alter table Eleitores add column Login varchar(100) after Nome;
update Eleitores set Login = Email;
ALTER TABLE Eleitores CHANGE COLUMN Login Login VARCHAR(100) NOT NULL;
ALTER TABLE Eleitores ADD COLUMN MetodoAutenticacao INT NOT NULL DEFAULT 1 AFTER Login;
ALTER TABLE Usuarios ADD COLUMN Login VARCHAR(100) NULL AFTER Nome;
update Usuarios set Login = Email;
ALTER TABLE Usuarios CHANGE COLUMN Login Login VARCHAR(100) NOT NULL;
ALTER TABLE `Usuarios` 
ADD UNIQUE INDEX `Login_UNIQUE` (`Login` ASC) VISIBLE;
ALTER TABLE `Arquivos` 
CHANGE COLUMN `EmailUsuario` `LoginUsuario` VARCHAR(100) NOT NULL;
ALTER TABLE `Eleitores` 
CHANGE COLUMN `Email` `Email` VARCHAR(100) NULL ;
ALTER TABLE `Usuarios` 
ADD COLUMN `MetodoAutenticacao` INT NOT NULL DEFAULT 1 AFTER `Id`;
ALTER TABLE `Usuarios` DROP INDEX `IX_Usuarios_Email`;
ALTER TABLE `Usuarios` 
ADD INDEX `IX_Usuarios_Email` (`Email` ASC, `MetodoAutenticacao` ASC) VISIBLE;

