import { BaseClient } from '../core/client';

export class ChatMessages {
  constructor(private client: BaseClient) {}

  async list(options?: { projectId?: string }) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : '';
    return this.client.request<any[]>(`/api/chat-messages${query}`);
  }

  async create(data: { projectId: string; senderId: string; message: string }) {
    return this.client.request<any>('/api/chat-messages', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
