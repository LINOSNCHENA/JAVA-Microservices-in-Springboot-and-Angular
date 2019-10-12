package com.presly.marvin.model;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "bank1")
public class wEmployee {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "name") // Next six columns
	private String name;
	@Column(name = "post")
	private String post;
	@Column(name = "dept")
	private String dept;
	@Column(name = "salary")
	private int salary;
	@Column(name = "status")
	private String status;

   	@Column(name = "createdt",nullable = false,  columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP")
	private Date createdt;

public wEmployee(String name, String post, String dept,
		int salary, String status, Date createdt) {
		this.name = name;			this.post = post;		
		this.dept = dept;			this.salary = salary;	
		this.status = status;		this.createdt = createdt;	 }

public wEmployee()     			    {}
	
public int getId()		 		    {	return id;			}
public void setId(int id) 		    {	this.id = id;		}
public String getName()  		    {	return name;		}
public void setName(String name)  {   this.name = name;	}

public String getDept()  		  {	return dept;			}
public void setDept(String dept)  {	this.dept = dept;		}
public String getPost()  		  {	return post;			}
public void setPost(String post)  {	this.post = post;		}

public int getSalary()          		 {	return salary;		 	 }
public void setSalary(int salary)		 {	this.salary = salary;	 }
public String getStatus()  		 	     {	return status;		 	 }
public void setStatus(String status)     {	this.status = status; 	 }

public Date getCreatedt()  		 	   {	return createdt;		  }
public void setCreatedt(Date createdt) {	this.createdt = createdt; }

}