create database shrm 
go 
use shrm 

create table employee(
	picture_file nvarchar(50), /* emoloyee picture file location on server */
	NIC nvarchar(30) PRIMARY KEY,
	firstName nvarchar(30),
	lastName nvarchar(30),
	email nvarchar(30),
	password_emp nvarchar(30), /* password for employee "password is reserved in SQL"*/
	DOB date
)
alter table employee add isAdmin int
create table candidate(
	email nvarchar(30) PRIMARY KEY, /* username for candidate */
	password_can nvarchar(30),  /* password for candidate "password is reserved in SQL"*/
	cnic nvarchar(30)

)
create table attendance(
	dated date,
	status nvarchar(10),
	NIC nvarchar(30) Foreign Key references employee(NIC)

) 

create table compensation(
	NIC nvarchar(30) Foreign Key references employee(NIC),
	salary int,
	fuel int,
	insurance nvarchar(10),
	benificiaries int
)

create table job_opening(
	job_id int IDENTITY(1,1) PRIMARY KEY, 
	job_title nvarchar(30),
	job_description nvarchar(500),
	posted_on date
)
select *from job_opening
insert into job_opening values('Software Engineer','LMAO NICE',GETDATE())
insert into job_opening values('CLOUD','wORKDS WELL',GETDATE())

create table job_applications(
	firstName nvarchar(30),
	job_id int FOREIGN KEY REFERENCES job_opening(job_id),
	lastName nvarchar(30),
	email nvarchar(30) ,
	contactNo nvarchar(30),
	resume_file nvarchar(30),
	cover_letter nvarchar(30)
	FOREIGN KEY(email) REFERENCES candidate(email) NULL
	PRIMARY KEY(job_id,email)
)

