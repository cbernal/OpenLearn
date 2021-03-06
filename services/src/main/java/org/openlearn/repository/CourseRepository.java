package org.openlearn.repository;

import org.openlearn.domain.Course;
import org.openlearn.domain.Organization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Course entity.
 */
public interface CourseRepository extends JpaRepository<Course, Long> {

	Page<Course> findByOrganization(Organization organization, Pageable pageable);
}
