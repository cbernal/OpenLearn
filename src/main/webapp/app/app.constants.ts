export class AppConstants {
  public static Role = {
    Admin: 'ROLE_ADMIN',
    OrgAdmin: 'ROLE_ORG_ADMIN',
    Instructor: 'ROLE_INSTRUCTOR',
    Student: 'ROLE_STUDENT',
  };
  public static ForgotPasswordEmail = "passwordrequest@opengive.com";
  public static States = [
    {name: 'Alabama',         code: 'AL'}, {name: 'Alaska',         code: 'AK'}, {name: 'Arizona',        code: 'AZ'},
    {name: 'Arkansas',        code: 'AR'}, {name: 'California',     code: 'CA'}, {name: 'Colorado',       code: 'CO'},
    {name: 'Connecticut',     code: 'CT'}, {name: 'Delaware',       code: 'DE'}, {name: 'Florida',        code: 'FL'},
    {name: 'Georgia',         code: 'GA'}, {name: 'Hawaii',         code: 'HI'}, {name: 'Idaho',          code: 'ID'},
    {name: 'Illinois',        code: 'IL'}, {name: 'Indiana',        code: 'IN'}, {name: 'Iowa',           code: 'IA'},
    {name: 'Kansas',          code: 'KS'}, {name: 'Kentucky',       code: 'KY'}, {name: 'Louisiana',      code: 'LA'},
    {name: 'Maine',           code: 'ME'}, {name: 'Maryland',       code: 'MD'}, {name: 'Massachusetts',  code: 'MA'},
    {name: 'Michigan',        code: 'MI'}, {name: 'Minnesota',      code: 'MN'}, {name: 'Mississippi',    code: 'MS'},
    {name: 'Missouri',        code: 'MO'}, {name: 'Montana',        code: 'MT'}, {name: 'Nebraska',       code: 'NE'},
    {name: 'Nevada',          code: 'NV'}, {name: 'New Hampshire',  code: 'NH'}, {name: 'New Jersey',     code: 'NJ'},
    {name: 'New Mexico',      code: 'NM'}, {name: 'New York',       code: 'NY'}, {name: 'North Carolina', code: 'NC'},
    {name: 'North Dakota',    code: 'ND'}, {name: 'Ohio',           code: 'OH'}, {name: 'Oklahoma',       code: 'OK'},
    {name: 'Oregon',          code: 'OR'}, {name: 'Pennsylvania',   code: 'PA'}, {name: 'Rhode Island',   code: 'RI'},
    {name: 'South Carolina',  code: 'SC'}, {name: 'South Dakota',   code: 'SD'}, {name: 'Tennessee',      code: 'TN'},
    {name: 'Texas',           code: 'TX'}, {name: 'Utah',           code: 'UT'}, {name: 'Vermont',        code: 'VT'},
    {name: 'Virginia',        code: 'VA'}, {name: 'Washington',     code: 'WA'}, {name: 'West Virginia',  code: 'WV'},
    {name: 'Wisconsin',       code: 'WI'}, {name: 'Wyoming',        code: 'WY'}
  ];
  public static OLValidators = {
    Email: "^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$",
    Login: "^[_'.@A-Za-z0-9-]*$",
    Points: "[0-9]+",
    PostalCode: "^[0-9]{5}(-[0-9]{4})?$"
  }
}
