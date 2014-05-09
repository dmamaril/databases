CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
 /* Describe your table here.*/
 id int(15),
 username varchar(20),
 message varchar(256),
 createdAt date,

);

/* You can also create more tables, if you need them... */

/*  Execute this file from the command line by typing:
 *    mysql < schema.sql
 *  to create the database and the tables.*/

/*
  What if...
    - we can make something that makes tables based on waht we get from the server
      node request

*/
