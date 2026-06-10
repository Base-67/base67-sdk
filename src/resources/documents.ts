import { BaseClient } from '../core/client';

export class Documents {
  constructor(private client: BaseClient) {}

  async list(options?: { projectId?: string }) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : '';
    return this.client.request<any[]>(`/api/documents${query}`);
  }

  async create(data: { projectId: string; name: string; fileUrl: string; fileType?: string; uploadedById?: string }) {
    return this.client.request<any>('/api/documents', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
