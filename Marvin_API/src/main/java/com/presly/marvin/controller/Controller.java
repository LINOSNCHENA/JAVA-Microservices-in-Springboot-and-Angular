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
import com.presly.marvin.view.Reposit;
import com.presly.marvin.model.Muntu;

@RestController
@CrossOrigin(origins ={"http://localhost:4200","http://localhost:4400" ,"http://localhost:4600" ,"http://localhost:4800"})
@RequestMapping("full")

public class Controller {
@Autowired  	Reposit customa;
// http://8080/full/accounts
@PostMapping(path = "accounts")											// POST #1
	public Muntu addItem(@RequestBody Muntu firstClient)
		 { return customa.save(firstClient); }
 

@GetMapping(path = "accounts/{id}")										// GET #2A
	public Muntu getItem(@PathVariable("id") int id)
		{ return customa.findById(id).orElse(null);}
@GetMapping(path = "accounts")											// GET #2B
	public List<Muntu> getItems()
		 { return customa.findAll();	}					    	
		
@PutMapping(path = "accounts")										// UPDATE #3A
	public Muntu saveOrUpdateItem(@RequestBody Muntu presentY) 
			  { return customa.save(presentY);	}	

@PutMapping(path = "accounts/{id}")									// UPDATE #3B			
	public Muntu updateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu promotedX) {
		Muntu promotedCopy = customa.findById(id).orElse(null);
		promotedCopy.setName(promotedX.getName());		
		promotedCopy.setDept(promotedX.getDept());		
		promotedCopy.setPost(promotedX.getPost());
		promotedCopy.setSalary(promotedX.getSalary());
		promotedCopy.setStatus(promotedX.getStatus());
		Muntu updatedItem = customa.save(promotedCopy);		
		return updatedItem;	}


		@PatchMapping(path = "accounts/{id}")								// UPDATE #3C							
	public Muntu patchUpdateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu demotedx) {
		Muntu demotedCopy = customa.findById(id).orElse(null);
		demotedCopy.setName(demotedx.getName());
		demotedCopy.setDept(demotedx.getDept());		
		demotedCopy.setPost(demotedx.getPost());
		demotedCopy.setSalary(demotedx.getSalary());
		demotedCopy.setStatus(demotedx.getStatus());
		Muntu updatedItem = customa.save(demotedCopy);
		return updatedItem; 
	}

@DeleteMapping(path = "accounts/{id}")							// UPDATE #4B						        
	public String deleteItem(@PathVariable int id)
	 {	customa.deleteById(id);		
		return "Customer record erased successfully";
	}


 @DeleteMapping(path = "accounts")						// UPDATE #4B				        
	public void deleteAllItems(Muntu firedx) 
		{	customa.deleteAll();	}
}
