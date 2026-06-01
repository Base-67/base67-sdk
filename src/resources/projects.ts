import { BaseClient } from '../core/client';

export class Projects {
  constructor(private client: BaseClient) {}

  async list(options?: { organizationId?: string }) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : '';
    return this.client.request<any[]>(`/api/projects${query}`);
  }

  async create(data: {
    organizationId: string;
    name: string;
    description?: string;
  }) {
    return this.client.request<any>('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update(id: string, data: Partial<{ name: string; description: string; status: string; progress: number }>) {
    return this.client.request<any>(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}
