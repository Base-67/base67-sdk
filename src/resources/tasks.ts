import { BaseClient } from '../core/client';

export class Tasks {
  constructor(private client: BaseClient) {}

  async list(options?: { projectId?: string }) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : '';
    return this.client.request<any[]>(`/api/tasks${query}`);
  }

  async create(data: { projectId: string; title: string; description?: string; priority?: string; dueDate?: string; assigneeId?: string; invoiceId?: string }) {
    return this.client.request<any>('/api/tasks', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async update(id: string, data: Partial<{ title: string; status: string; priority: string; dueDate: string }>) {
    return this.client.request<any>(`/api/tasks/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }
}
