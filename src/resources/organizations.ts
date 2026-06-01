import { BaseClient } from '../core/client';

export class Organizations {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<any[]>('/api/organizations');
  }

  async create(data: { name: string; industry?: string; website?: string }) {
    return this.client.request<any>('/api/organizations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
