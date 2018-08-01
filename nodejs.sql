create table if not exists users(
	id int(255) not null auto_increment, 
	name varchar(100) not null, 
	last_name varchar(100) not null, 
	 varchar(255) not null, 
	 primary key(id)) 
engine=innodb 
default 
charset=latin1 
auto_increment=1;