package com.presly.marvin.controller;
import java.util.List;	
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.presly.marvin.entity.wRepository;
import com.presly.marvin.model.wEmployee;

@RestController
@RequestMapping("first")
@CrossOrigin(origins = "http://localhost:4200")

public class wController {
	@Autowired
	wRepository employeeX;


// http://8080/first/accounts/				    	//		GET/PUT/DELETE(*3)
@GetMapping(path = "accounts")
	public List<wEmployee> getItems()
		 { return employeeX.findAll();	}

@PostMapping(path = "accounts")
	public wEmployee addItem(@RequestBody wEmployee employeeY)
		 { return employeeX.save(employeeY); }

@DeleteMapping(path = "accounts")
	public void deleteAllItems(wEmployee employeeY) 
		  {	employeeX.deleteAll();	}

// http://8080/first/account/:[id]					//		GET/PUT/DELETE(*5)
   @PutMapping(path = "account")
		  public wEmployee saveOrUpdateItem(@RequestBody wEmployee employeeY) 
			  { return employeeX.save(employeeY);	}	  

	@GetMapping(path = "account/{id}")
	public wEmployee getItem(@PathVariable("id") int id)
		{ return employeeX.findById(id).orElse(null);}
		
	@DeleteMapping(path = "account/{id}")
	public String deleteItem(@PathVariable int id)
		 {	employeeX.deleteById(id);		
			return "Employees' record erased successfully";	}

	@PutMapping(path = "account/{id}")
	public wEmployee updateItemById(@PathVariable int id, 
	@Valid @RequestBody wEmployee employeeY) {
		wEmployee employeeZ = employeeX.findById(id).orElse(null);
		employeeZ.setNames(employeeY.getNames());		
		employeeZ.setDept(employeeY.getDept());		
		employeeZ.setPost(employeeY.getPost());
		employeeZ.setSalary(employeeY.getSalary());
		employeeZ.setStatus(employeeY.getStatus());
		employeeZ.setCreatedAt(employeeY.getCreatedAt());
		wEmployee updatedItem = employeeX.save(employeeZ);		
		return updatedItem;	}

	@PatchMapping(path = "accounts/{id}")
	public wEmployee patchUpdateItemById(@PathVariable int id, 
	@Valid @RequestBody wEmployee employeeZ) {
		wEmployee employeeY = employeeX.findById(id).orElse(null);
		employeeY.setNames(employeeZ.getNames());
		employeeY.setDept(employeeZ.getDept());		
		employeeY.setPost(employeeZ.getPost());
		employeeY.setSalary(employeeZ.getSalary());
		employeeY.setStatus(employeeZ.getStatus());
		employeeY.setCreatedAt(employeeZ.getCreatedAt());
		wEmployee updatedItem = employeeX.save(employeeY);
		return updatedItem; 
	}
	}
