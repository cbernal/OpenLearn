export class AppConstants {
  public static Role = {
    Admin: 'ROLE_ADMIN',
    OrgAdmin: 'ROLE_ORG_ADMIN',
    Instructor: 'ROLE_INSTRUCTOR',
    Student: 'ROLE_STUDENT',
  };
  public static ForgotPasswordEmail = "passwordrequest@openlearn.com";
  public static States = [
    {name: 'Alabama', value: 'ALABAMA'},
    {name: 'Alaska', value: 'ALASKA'},
    {name: 'Arizona', value: 'ARIZONA'},
    {name: 'Arkansas', value: 'ARKANSAS'},
    {name: 'California', value: 'CALIFORNIA'},
    {name: 'Colorado', value: 'COLORADO'},
    {name: 'Connecticut', value: 'CONNECTICUT'},
    {name: 'Delaware', value: 'DELAWARE'},
    {name: 'Florida', value: 'FLORIDA'},
    {name: 'Georgia', value: 'GEORGIA'},
    {name: 'Hawaii', value: 'HAWAII'},
    {name: 'Idaho', value: 'IDAHO'},
    {name: 'Illinois', value: 'ILLINOIS'},
    {name: 'Indiana', value: 'INDIANA'},
    {name: 'Iowa', value: 'IOWA'},
    {name: 'Kansas', value: 'KANSAS'},
    {name: 'Kentucky', value: 'KENTUCKY'},
    {name: 'Louisiana', value: 'LOUISIANA'},
    {name: 'Maine', value: 'MAINE'},
    {name: 'Maryland', value: 'MARYLAND'},
    {name: 'Massachusetts', value: 'MASSACHUSETTS'},
    {name: 'Michigan', value: 'MICHIGAN'},
    {name: 'Minnesota', value: 'MINNESOTA'},
    {name: 'Mississippi', value: 'MISSISSIPPI'},
    {name: 'Missouri', value: 'MISSOURI'},
    {name: 'Montana', value: 'MONTANA'},
    {name: 'Nebraska', value: 'NEBRASKA'},
    {name: 'Nevada', value: 'NEVADA'},
    {name: 'New Hampshire', value: 'NEW_HAMPSHIRE'},
    {name: 'New Jersey', value: 'NEW_JERSEY'},
    {name: 'New Mexico', value: 'NEW_MEXICO'},
    {name: 'New York', value: 'NEW_YORK'},
    {name: 'North Carolina', value: 'NORTH_CAROLINA'},
    {name: 'North Dakota', value: 'NORTH_DAKOTA'},
    {name: 'Ohio', value: 'OHIO'},
    {name: 'Oklahoma', value: 'OKLAHOMA'},
    {name: 'Oregon', value: 'OREGON'},
    {name: 'Pennsylvania', value: 'PENNSYLVANIA'},
    {name: 'Rhode Island', value: 'RHODE_ISLAND'},
    {name: 'South Carolina', value: 'SOUTH_CAROLINA'},
    {name: 'South Dakota', value: 'SOUTH DAKOTA'},
    {name: 'Tennessee', value: 'TENNESSEE'},
    {name: 'Texas', value: 'TEXAS'},
    {name: 'Utah', value: 'UTAH'},
    {name: 'Vermont', value: 'VERMONT'},
    {name: 'Virginia', value: 'VIRGINIA'},
    {name: 'Washington', value: 'WASHINGTON'},
    {name: 'West Virginia', value: 'WEST_VIRGINIA'},
    {name: 'Wisconsin', value: 'WISCONSIN'},
    {name: 'Wyoming', value: 'WYOMING'},
    {name: 'District of Columbia', value: 'DISTRICT_OF_COLUMBIA'}
  ];
  public static OLValidators = {
    Email: "^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$",
    Login: "^[_'.@A-Za-z0-9-]*$",
    Points: "[0-9]+",
    PostalCode: "^[0-9]{5}(-[0-9]{4})?$"
  }
}
