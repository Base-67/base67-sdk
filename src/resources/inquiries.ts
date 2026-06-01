import { BaseClient } from '../core/client';

export class Inquiries {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<any[]>('/api/inquiries');
  }

  async create(data: {
    email: string;
    name: string;
    companyName?: string;
    projectType?: string;
    budget?: string;
    message?: string;
  }) {
    return this.client.request<any>('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
