# SIMPLE MICROSERVICES AS BACKEND & FRONTEND APIs

The purpose of this application is to create a full-stack simple application by combining two of the current popular frameworks. Angular and Spring-Boot, which includes three different databases alternatives. The implementation is successfull using the three types of databases. Several CRUD operations are implemented and exploited using three databases with a uniform interface as JSON data connectivity. Data entry MUST be complete.

### Technology Stack exploited

The development full-stack application composes of;
1. JavaScript(Angular 8)
2. Java 8(Spring boot)
3. Database(MSSQL,Postgresql,MySQL)
4. Pending Database(MongoDB, H2)
5. Maven
6. Catalina Run
7. Hibernate
8. Tomcat Server

Note: In the database used the data type of the primary-key in MySQL and MSSQL is auto-increment while in the Postgresql database the primary key field used is serial. This is a minor diference in implementaion of MSSQL/MySQL and Postgresql primary key fields. Need changes in the data model design as necessary respectivily. 

### Execution Commands

Two separate modules make up this application
1. Backend module use the following Command
        mvn clean package
        mvn spring boot run
2. Front End application use the following command
        npm start
        npm stop




        ## Execution commands

```
mvn clean package
mvn spring-boot:run

```

## Interface UX
 Below are screens shots from the application

![ Application Muntu Interface page #1 ](https://github.com/LINOSNCHENA/Microservice-APIs-in-SpringBoot-and-Angular/blob/master/page1.png)

![ Application Muntu Interface page #2 ](https://github.com/LINOSNCHENA/Microservice-APIs-in-SpringBoot-and-Angular/blob/master/page2.png)
