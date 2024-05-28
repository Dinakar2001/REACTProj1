package com.intern.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.intern.project.model.ProjectModel;

public interface ProjectRepository extends JpaRepository<ProjectModel,String>{

}
