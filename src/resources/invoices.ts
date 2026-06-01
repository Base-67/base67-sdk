import { BaseClient } from '../core/client';

export class Invoices {
  constructor(private client: BaseClient) {}

  async list(options?: { organizationId?: string }) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : '';
    return this.client.request<any[]>(`/api/invoices${query}`);
  }

  async create(data: {
    organizationId: string;
    projectId?: string;
    amount: number;
    currency?: string;
    dueDate: Date | string;
  }) {
    return this.client.request<any>('/api/invoices', {
      method: 'POST',
      body: JSON.stringify({ ...data, dueDate: new Date(data.dueDate).getTime() }),
    });
  }
}
