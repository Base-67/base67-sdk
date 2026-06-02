import { BaseClient } from '../core/client';
import type { RequestAdminLoginPayload, VerifyAdminLoginPayload, AdminAuthResponse } from '../types/adminAuth';

export class AdminAuth {
  constructor(private client: BaseClient) {}

  async requestLogin(data: RequestAdminLoginPayload | string) {
    const payload = typeof data === 'string' ? { email: data } : data;
    return this.client.request<AdminAuthResponse>('/api/admin/auth/request', {
      method: 'POST',
      body: JSON.stringify(payload),
    });
  }

  async verifyLogin(data: VerifyAdminLoginPayload | { email: string; code: string }) {
    return this.client.request<AdminAuthResponse>('/api/admin/auth/verify', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }
}
