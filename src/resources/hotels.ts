import { BaseClient } from '../core/client';

export class Hotels {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<any[]>('/api/hotels');
  }

  async create(data: { name: string; website?: string; email?: string; scenario?: string }) {
    return this.client.request<any>('/api/hotels', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
