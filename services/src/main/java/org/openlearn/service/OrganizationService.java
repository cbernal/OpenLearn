package org.openlearn.service;

import org.openlearn.domain.Organization;
import org.openlearn.domain.User;
import org.openlearn.dto.OrganizationDTO;
import org.openlearn.repository.OrganizationRepository;
import org.openlearn.security.SecurityUtils;
import org.openlearn.transformer.OrganizationTransformer;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * Service Implementation for managing Organization.
 */
@Service
@Transactional
public class OrganizationService {

	private static final Logger log = LoggerFactory.getLogger(OrganizationService.class);

	private final OrganizationRepository organizationRepository;

	private final OrganizationTransformer organizationTransformer;

	private final UserService userService;

	public OrganizationService(final OrganizationRepository organizationRepository,
	                           final OrganizationTransformer organizationTransformer, final UserService userService) {
		this.organizationRepository = organizationRepository;
		this.organizationTransformer = organizationTransformer;
		this.userService = userService;
	}

	/**
	 * Save an organization.
	 *
	 * @param organizationDTO the entity to save
	 * @return the persisted entity
	 */
	public OrganizationDTO save(final OrganizationDTO organizationDTO) {
		log.debug("Request to save Organization : {}", organizationDTO);
		if (SecurityUtils.isAdmin() || isOrgOfCurrentUser(organizationDTO)) {
			return organizationTransformer.transform(organizationRepository.save(organizationTransformer.transform(organizationDTO)));
		}
		// TODO: Error handling / logging
		return null;
	}

	/**
	 * Get all the organizations.
	 *
	 * @param pageable the pagination information
	 * @return the list of entities
	 */
	@Transactional(readOnly = true)
	public Page<OrganizationDTO> findAll(final Pageable pageable) {
		log.debug("Request to get all Organizations");
		User user = userService.getCurrentUser();
		if (SecurityUtils.isAdmin()) {
			return organizationRepository.findAll(pageable).map(organizationTransformer::transform);
		} else {
			return organizationRepository.findById(user.getOrganization().getId(), pageable)
				.map(organizationTransformer::transform);
		}
	}

	/**
	 * Get one organization by id.
	 *
	 * @param id the id of the entity
	 * @return the entity
	 */
	@Transactional(readOnly = true)
	public OrganizationDTO findOne(final Long id) {
		log.debug("Request to get Organization : {}", id);
		Organization organization = organizationRepository.findOne(id);
		if (organization != null && (SecurityUtils.isAdmin() || isOrgOfCurrentUser(organization))) {
			return organizationTransformer.transform(organization);
		}
		// TODO: Error handling / logging
		return null;
	}

	/**
	 * Delete the organization by id.
	 *
	 * @param id the id of the entity
	 */
	public void delete(final Long id) {
		log.debug("Request to delete Organization : {}", id);
		organizationRepository.delete(id);
	}

	private boolean isOrgOfCurrentUser(final OrganizationDTO organizationDTO) {
		User user = userService.getCurrentUser();
		return user.getOrganization().getId().equals(organizationDTO.getId());
	}

	private boolean isOrgOfCurrentUser(final Organization organization) {
		User user = userService.getCurrentUser();
		return user.getOrganization().equals(organization);
	}
}
