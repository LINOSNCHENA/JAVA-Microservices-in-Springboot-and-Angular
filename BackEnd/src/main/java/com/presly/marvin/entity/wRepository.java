package com.presly.marvin.entity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.presly.marvin.model.wEmployee;

@Repository
public interface wRepository extends JpaRepository<wEmployee, Integer> {}