package com.presly.marvin.view;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.presly.marvin.model.Muntu;

@Repository
// Repository Vs Reposit naming conversions

public interface Reposit extends JpaRepository < Muntu, Integer> {}