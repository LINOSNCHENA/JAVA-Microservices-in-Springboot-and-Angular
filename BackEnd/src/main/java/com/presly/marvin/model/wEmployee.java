package com.presly.marvin.model;
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
	@GeneratedValue(strategy = GenerationType.AUTO)
	private int id;

	@Column(name = "names") // Next seven collumns
	private String names;
	@Column(name = "post")
	private String post;
	@Column(name = "dept")
	private String dept;
	@Column(name = "salary")
	private int salary;
	@Column(name = "status")
	private String status;
	@Column(name = "createdAt")
	private String createdAt;

public wEmployee(String names, String post, String dept,
		int salary, String status, String createdAt) {
		this.names = names;			this.post = post;		
		this.dept = dept;			this.salary = salary;	
		this.status = status;		this.createdAt = createdAt;	 }

	public wEmployee()     			    {}
	
	public int getId()		 		    {	return id;			}
	public void setId(int id) 		    {	this.id = id;		}
	public String getNames()  		    {	return names;		}
	public void setNames(String names)  {   this.names = names;	}

	public String getDept()  		  {	return dept;			}
	public void setDept(String dept)  {	this.dept = dept;		}
	public String getPost()  		  {	return post;			}
	public void setPost(String post)  {	this.post = post;		}

	public int getSalary()          		 {	return salary;		  }
	public void setSalary(int salary)		 {	this.salary = salary; }
	public String getStatus()  		 	     {	return status;		  }
	public void setStatus(String status)     {	this.status = status; }

	public String getCreatedAt()                {	return createdAt;			}
	public void setCreatedAt(String createdAt)  {	this.createdAt = createdAt;	}
	
}