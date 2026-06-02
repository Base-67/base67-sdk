import { BaseClient } from '../core/client';
import type { SchoolLead, SchoolLeadPayload } from '../types/schools';

export class Schools {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<SchoolLead[]>('/api/schools');
  }

  async create(data: SchoolLeadPayload) {
    return this.client.request<SchoolLead>('/api/schools', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
