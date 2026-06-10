import { BaseClient } from '../core/client';

export class Restaurants {
  constructor(private client: BaseClient) {}

  async list() {
    return this.client.request<any[]>('/api/restaurants');
  }

  async create(data: { name: string; website?: string; email?: string; scenario?: string }) {
    return this.client.request<any>('/api/restaurants', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
