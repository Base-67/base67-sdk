export interface SchoolLeadPayload {
  name: string;
  website?: string;
  email?: string;
  scenario: string;
}

export interface SchoolLead extends SchoolLeadPayload {
  id: string;
  createdAt: string;
}
