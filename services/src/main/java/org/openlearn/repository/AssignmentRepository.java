package org.openlearn.repository;

import org.openlearn.domain.Assignment;
import org.openlearn.domain.Course;
import org.openlearn.domain.Organization;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Spring Data JPA repository for the Assignment entity.
 */
public interface AssignmentRepository extends JpaRepository<Assignment, Long> {

	Page<Assignment> findByCourse(Course course, Pageable pageable);

	Page<Assignment> findByOrganization(Organization organization, Pageable pageable);
}
