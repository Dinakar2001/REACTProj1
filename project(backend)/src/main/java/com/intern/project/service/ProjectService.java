package com.intern.project.service;

import java.util.List;

import com.intern.project.model.ProjectModel;

public interface ProjectService {

	public String createInverter(ProjectModel projectModel);
	public String updateInverter(ProjectModel projectModel);
	public String deleteInverter(String id);
	public ProjectModel getInverter(String id);
	public List<ProjectModel> getAllInverter();
	
	
	
}
