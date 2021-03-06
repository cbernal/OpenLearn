package org.openlearn.dto;

import javax.validation.constraints.NotNull;

/**
 * A DTO representing an org admin user
 */
public class OrgAdminDTO extends UserDTO {

	@NotNull
	private Long organizationId;

	@NotNull
	private String orgRole;

	public Long getOrganizationId() {
		return organizationId;
	}

	public void setOrganizationId(Long organizationId) {
		this.organizationId = organizationId;
	}

	public String getOrgRole() {
		return orgRole;
	}

	public void setOrgRole(String orgRole) {
		this.orgRole = orgRole;
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		if (!super.equals(o)) return false;

		OrgAdminDTO that = (OrgAdminDTO) o;

		if (organizationId != null ? !organizationId.equals(that.organizationId) : that.organizationId != null)
			return false;
		return orgRole != null ? orgRole.equals(that.orgRole) : that.orgRole == null;
	}

	@Override
	public int hashCode() {
		int result = super.hashCode();
		result = 31 * result + (organizationId != null ? organizationId.hashCode() : 0);
		result = 31 * result + (orgRole != null ? orgRole.hashCode() : 0);
		return result;
	}

	@Override
	public String toString() {
		return "OrgAdminDTO{" +
			"organizationId=" + organizationId +
			", orgRole='" + orgRole + '\'' +
			"} " + super.toString();
	}
}
