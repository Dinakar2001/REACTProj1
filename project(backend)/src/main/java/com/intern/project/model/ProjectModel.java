package com.intern.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table( name = "backend")
public class ProjectModel {
	
	@Id
	private String id;
	private String inverter;
	
	public ProjectModel() {
		
	}
	
	public ProjectModel(String id, String inverter) {
		super();
		this.id = id;
		this.inverter = inverter;
	}
	
	
	public String getId() {
		return id;
	}	
	public void setId(String id) {
		this.id = id;
	}
	
	
	public String getInverter() {
		return inverter;
	}
	public void setInverter(String inverter) {
		this.inverter = inverter;
	}
	
	
	
}
