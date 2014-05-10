CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
 /* Describe your table here.*/
 id int(10) AUTO_INCREMENT,
 username varchar(20),
 text text,
 roomname varchar(20),
 PRIMARY KEY (id)
 );

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/
