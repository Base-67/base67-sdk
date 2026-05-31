export class Base67 {
  private baseUrl: string;
  private apiKey: string | undefined;

  constructor(options?: { baseUrl?: string; apiKey?: string }) {
    this.baseUrl = options?.baseUrl || 'https://base67-api.base67.workers.dev';
    this.apiKey = options?.apiKey;
  }

  private async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const headers = new Headers(options?.headers);
    headers.set('Content-Type', 'application/json');
    if (this.apiKey) {
      headers.set('Authorization', `Bearer ${this.apiKey}`);
    }

    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`Base67 API error: ${response.statusText}`);
    }

    return response.json() as Promise<T>;
  }

  // --- ORGANIZATIONS ---
  async getOrganizations() {
    return this.request<any[]>('/api/organizations');
  }

  async createOrganization(data: { name: string; industry?: string; website?: string }) {
    return this.request<any>('/api/organizations', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // --- USERS ---
  async getUsers() {
    return this.request<any[]>('/api/users');
  }

  async createUser(data: { organizationId?: string; email: string; name: string; role?: string }) {
    return this.request<any>('/api/users', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // --- INQUIRIES ---
  async getInquiries() {
    return this.request<any[]>('/api/inquiries');
  }

  async createInquiry(data: {
    email: string;
    name: string;
    companyName?: string;
    projectType?: string;
    budget?: string;
    message?: string;
  }) {
    return this.request<any>('/api/inquiries', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  // --- PROJECTS ---
  async getProjects(options?: { organizationId?: string }) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : '';
    return this.request<any[]>(`/api/projects${query}`);
  }

  async createProject(data: {
    organizationId: string;
    name: string;
    description?: string;
  }) {
    return this.request<any>('/api/projects', {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async updateProject(id: string, data: Partial<{ name: string; description: string; status: string; progress: number }>) {
    return this.request<any>(`/api/projects/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  // --- INVOICES ---
  async getInvoices(options?: { organizationId?: string }) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : '';
    return this.request<any[]>(`/api/invoices${query}`);
  }

  async createInvoice(data: {
    organizationId: string;
    projectId?: string;
    amount: number;
    currency?: string;
    dueDate: Date | string;
  }) {
    return this.request<any>('/api/invoices', {
      method: 'POST',
      body: JSON.stringify({ ...data, dueDate: new Date(data.dueDate).getTime() }),
    });
  }
}
