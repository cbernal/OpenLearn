package org.openlearn.repository;

import org.openlearn.domain.User;

import java.time.ZonedDateTime;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;
import java.util.Set;

/**
 * Spring Data JPA repository for the User entity.
 */
public interface UserRepository extends JpaRepository<User, Long> {

  Optional<User> findOneByActivationKey(String activationKey);

  List<User> findAllByActivatedIsFalseAndCreatedDateBefore(ZonedDateTime dateTime);

  Optional<User> findOneByResetKey(String resetKey);

  Optional<User> findOneByEmail(String email);

  Optional<User> findOneByLogin(String login);

  Page<User> findOneByLogin(Pageable pageable, String login);

  @EntityGraph(attributePaths = "authorities")
  User findOneWithAuthoritiesById(Long id);

  @EntityGraph(attributePaths = "authorities")
  Optional<User> findOneWithAuthoritiesByLogin(String login);

  Page<User> findAllByLoginNot(Pageable pageable, String login);

  Set<User> findAllByOrganizationIds(Long organizationId);

  Page<User> findAllByOrganizationIdsIn(Pageable pageable,Set<Long> organizationIds);
}