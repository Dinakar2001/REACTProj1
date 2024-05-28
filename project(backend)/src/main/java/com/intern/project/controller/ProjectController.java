package com.intern.project.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.intern.project.model.ProjectModel;
import com.intern.project.response.ResponseHandler;
import com.intern.project.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {
	
	ProjectService projectService;

	public ProjectController(ProjectService projectService) {
		super();
		this.projectService = projectService;
	}
	
	@GetMapping("get/{id}")
	public ResponseEntity<Object> getInverter(@PathVariable("id") String id) {
		return ResponseHandler.responsebuilder(	"Requested Inverter Details are given below",
				HttpStatus.OK,projectService.getInverter(id));
	}
	
	
	@GetMapping("get/")
	public List<ProjectModel> getAllInverter(){
		return projectService.getAllInverter();
	}
	
	@PostMapping("post/")
	public String createInverter(@RequestBody ProjectModel projectModel) {
		projectService.createInverter(projectModel);
		return "Id added Successfully";
	}
	
	@PutMapping("put/")
	public String updateInverter(@RequestBody ProjectModel projectModel) {
		projectService.updateInverter(projectModel);
		return "Inverter updated Successfully";
	}
	
	@DeleteMapping("delete/{id}")
	public String deleteInverter(@PathVariable String id) {
		projectService.deleteInverter(id);
		return "Inverter deleted Successfully";
	}
	
	
}
