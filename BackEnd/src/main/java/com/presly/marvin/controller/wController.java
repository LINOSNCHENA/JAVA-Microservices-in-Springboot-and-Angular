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
import com.presly.marvin.view.wRepository;
import com.presly.marvin.model.wEmployee;

@RestController
@RequestMapping("full")
@CrossOrigin(origins = "http://localhost:4200")

public class wController {
	@Autowired
	wRepository employeesOfCMIS;

@PostMapping(path = "accounts")											// POST
	public wEmployee addItem(@RequestBody wEmployee employeeAppointed)
		 { return employeesOfCMIS.save(employeeAppointed); }
 
// http://8080/full/accounts/	
@GetMapping(path = "accounts/{id}")										//	GET (*x2)
	public wEmployee getItem(@PathVariable("id") int id)
		{ return employeesOfCMIS.findById(id).orElse(null);}
@GetMapping(path = "accounts")
	public List<wEmployee> getItems()
		 { return employeesOfCMIS.findAll();	}
		
// http://8080/full/account/:[id]										//	UPDATE
@PutMapping(path = "accounts")
	public wEmployee saveOrUpdateItem(@RequestBody wEmployee employeeCurrent) 
			  { return employeesOfCMIS.save(employeeCurrent);	}	

@PutMapping(path = "accounts/{id}")										// UPDATING/Pending-(P)
	public wEmployee updateItemById(@PathVariable int id, 
	@Valid @RequestBody wEmployee employeePromoted) {
		wEmployee employeeZ = employeesOfCMIS.findById(id).orElse(null);
		employeeZ.setName(employeePromoted.getName());		
		employeeZ.setDept(employeePromoted.getDept());		
		employeeZ.setPost(employeePromoted.getPost());
		employeeZ.setSalary(employeePromoted.getSalary());
		employeeZ.setStatus(employeePromoted.getStatus());
		wEmployee updatedItem = employeesOfCMIS.save(employeeZ);		
		return updatedItem;	}

@PatchMapping(path = "accounts/{id}")									// PaATCH /updating-(P)
	public wEmployee patchUpdateItemById(@PathVariable int id, 
	@Valid @RequestBody wEmployee employeeDemoted) {
		wEmployee employeeY = employeesOfCMIS.findById(id).orElse(null);
		employeeY.setName(employeeDemoted.getName());
		employeeY.setDept(employeeDemoted.getDept());		
		employeeY.setPost(employeeDemoted.getPost());
		employeeY.setSalary(employeeDemoted.getSalary());
		employeeY.setStatus(employeeDemoted.getStatus());
		wEmployee updatedItem = employeesOfCMIS.save(employeeY);
		return updatedItem; 
	}

@DeleteMapping(path = "accounts/{id}")							// DELETING
	public String deleteItem(@PathVariable int id)
		 {	employeesOfCMIS.deleteById(id);		
			return "Employees' record erased successfully";	}

@DeleteMapping(path = "accounts")								// DELETE-(pending)
	public void deleteAllItems(wEmployee employeeFired) 
		{	employeesOfCMIS.deleteAll();	}
}
