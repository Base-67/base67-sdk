import { BaseClient } from '../core/client';

export class Users {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<any[]>('/api/users');
  }

  async create(data: { organizationId?: string; email: string; name: string; role?: string }) {
    return this.client.request<any>('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
