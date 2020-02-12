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
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("full")

public class Controller {
@Autowired  	Reposit participantx;

// http://8080/full/accounts
@PostMapping(path = "accounts")											// POST #1
	public Muntu addItem(@RequestBody Muntu presentX)
		 { return participantx.save(presentX); }
 
// http://8080/full/accounts/:[id]	
@GetMapping(path = "accounts/{id}")										//	GET #2
	public Muntu getItem(@PathVariable("id") int id)
		{ return participantx.findById(id).orElse(null);}
@GetMapping(path = "accounts")
	public List<Muntu> getItems()
		 { return participantx.findAll();	}						//	GET #3
		
// http://8080/full/account/:[id]			SECOND OPTION							//	UPDATE #4
@PutMapping(path = "accounts")
	public Muntu saveOrUpdateItem(@RequestBody Muntu presentY) 
			  { return participantx.save(presentY);	}	

// http://8080/full/accounts/:[id]           OPTION ONE
@PutMapping(path = "accounts/{id}")										// UPDATING #5
	public Muntu updateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu promotedX) {
		Muntu promotedCopy = participantx.findById(id).orElse(null);
		promotedCopy.setName(promotedX.getName());		
		promotedCopy.setDept(promotedX.getDept());		
		promotedCopy.setPost(promotedX.getPost());
		promotedCopy.setSalary(promotedX.getSalary());
		promotedCopy.setStatus(promotedX.getStatus());
		Muntu updatedItem = participantx.save(promotedCopy);		
		return updatedItem;	}

// http://8080/full/accounts/:[id]
@PatchMapping(path = "accounts/{id}")									// PATCH (#6P)
	public Muntu patchUpdateItemById(@PathVariable int id, 
	@Valid @RequestBody Muntu demotedx) {
		Muntu demotedCopy = participantx.findById(id).orElse(null);
		demotedCopy.setName(demotedx.getName());
		demotedCopy.setDept(demotedx.getDept());		
		demotedCopy.setPost(demotedx.getPost());
		demotedCopy.setSalary(demotedx.getSalary());
		demotedCopy.setStatus(demotedx.getStatus());
		Muntu updatedItem = participantx.save(demotedCopy);
		return updatedItem; 
	}
// http://8080/full/accounts/:[id]
@DeleteMapping(path = "accounts/{id}")							         // DELETING #7
	public String deleteItem(@PathVariable int id)
	 {	participantx.deleteById(id);		
		return "participants' record erased successfully";
	}

// http://8080/full/accounts		EVERYTHING
 @DeleteMapping(path = "accounts")								         // DELETE-#8p
	public void deleteAllItems(Muntu firedx) 
		{	participantx.deleteAll();	}
}
