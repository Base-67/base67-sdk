import { BaseClient } from '../core/client';

export class ProjectStages {
  constructor(private client: BaseClient) {}

  async list(options?: { projectId?: string }) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : '';
    return this.client.request<any[]>(`/api/project-stages${query}`);
  }

  async create(data: { projectId: string; name: string; order: number; status?: string }) {
    return this.client.request<any>('/api/project-stages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update(id: string, data: Partial<{ name: string; status: string; order: number }>) {
    return this.client.request<any>(`/api/project-stages/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete(id: string) {
    return this.client.request<{ success: boolean }>(`/api/project-stages/${id}`, {
      method: 'DELETE',
    });
  }
}
