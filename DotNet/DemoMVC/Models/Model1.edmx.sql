
-- --------------------------------------------------
-- Entity Designer DDL Script for SQL Server 2005, 2008, 2012 and Azure
-- --------------------------------------------------
-- Date Created: 01/10/2023 22:52:47
-- Generated from EDMX file: C:\PGDACS\My work\.Net\classwork\day12\Day12\DemoMVC\Models\Model1.edmx
-- --------------------------------------------------

SET QUOTED_IDENTIFIER OFF;
GO
USE [punedb];
GO
IF SCHEMA_ID(N'dbo') IS NULL EXECUTE(N'CREATE SCHEMA [dbo]');
GO

-- --------------------------------------------------
-- Dropping existing FOREIGN KEY constraints
-- --------------------------------------------------


-- --------------------------------------------------
-- Dropping existing tables
-- --------------------------------------------------

IF OBJECT_ID(N'[dbo].[Emp]', 'U') IS NOT NULL
    DROP TABLE [dbo].[Emp];
GO
IF OBJECT_ID(N'[dbo].[UserTable]', 'U') IS NOT NULL
    DROP TABLE [dbo].[UserTable];
GO

-- --------------------------------------------------
-- Creating all tables
-- --------------------------------------------------

-- Creating table 'UserTables'
CREATE TABLE [dbo].[UserTables] (
    [Id] int  NOT NULL,
    [Username] varchar(20)  NOT NULL,
    [Password] varchar(10)  NOT NULL
);
GO

-- Creating table 'Emps'
CREATE TABLE [dbo].[Emps] (
    [No] int IDENTITY(1,1) NOT NULL,
    [Name] varchar(50)  NOT NULL,
    [Address] varchar(50)  NOT NULL
);
GO

-- --------------------------------------------------
-- Creating all PRIMARY KEY constraints
-- --------------------------------------------------

-- Creating primary key on [Id] in table 'UserTables'
ALTER TABLE [dbo].[UserTables]
ADD CONSTRAINT [PK_UserTables]
    PRIMARY KEY CLUSTERED ([Id] ASC);
GO

-- Creating primary key on [No] in table 'Emps'
ALTER TABLE [dbo].[Emps]
ADD CONSTRAINT [PK_Emps]
    PRIMARY KEY CLUSTERED ([No] ASC);
GO

-- --------------------------------------------------
-- Creating all FOREIGN KEY constraints
-- --------------------------------------------------

-- --------------------------------------------------
-- Script has ended
-- --------------------------------------------------