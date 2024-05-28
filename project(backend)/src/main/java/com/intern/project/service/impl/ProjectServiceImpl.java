package com.intern.project.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intern.project.model.ProjectModel;
import com.intern.project.repository.ProjectRepository;
import com.intern.project.service.ProjectService;

@Service
public class ProjectServiceImpl implements ProjectService {
	
	ProjectRepository projectRepository;
	
		public ProjectServiceImpl(ProjectRepository projectRepository) {
		super();
		this.projectRepository = projectRepository;
	}

	@Override
	public String createInverter(ProjectModel projectModel) {
		projectRepository.save(projectModel);
		return "Success";
	}

	@Override
	public String updateInverter(ProjectModel projectModel) {
		projectRepository.save(projectModel);
		return "Sucess";
	}

	@Override
	public ProjectModel getInverter(String id) {
		return projectRepository.findById(id).get();
	}

	@Override
	public List<ProjectModel> getAllInverter() {
		return projectRepository.findAll();
	}

	@Override
	public String deleteInverter(String id) {
		projectRepository.deleteById(id);
		return "Success";
	}

	

	

}
