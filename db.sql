use adamjoha;

drop table time_slots;
drop table assistants; # Radera tabeller om de redan finns

create table assistants (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(64),
	PRIMARY KEY (id)
);

create table time_slots (
	id int NOT NULL AUTO_INCREMENT,
	assistant_id int,
	time varchar(64),
	booked_by varchar(64),
	PRIMARY KEY (id),
	FOREIGN KEY (assistant_id) REFERENCES assistants(id) ON DELETE CASCADE
);
