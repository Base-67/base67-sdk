// src/index.ts
var Base67 = class {
  baseUrl;
  apiKey;
  constructor(options) {
    this.baseUrl = options?.baseUrl || "https://base67-api.base67.workers.dev";
    this.apiKey = options?.apiKey;
  }
  async request(endpoint, options) {
    const headers = new Headers(options?.headers);
    headers.set("Content-Type", "application/json");
    if (this.apiKey) {
      headers.set("Authorization", `Bearer ${this.apiKey}`);
    }
    const response = await fetch(`${this.baseUrl}${endpoint}`, {
      ...options,
      headers
    });
    if (!response.ok) {
      throw new Error(`Base67 API error: ${response.statusText}`);
    }
    return response.json();
  }
  // --- ORGANIZATIONS ---
  async getOrganizations() {
    return this.request("/api/organizations");
  }
  async createOrganization(data) {
    return this.request("/api/organizations", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  // --- USERS ---
  async getUsers() {
    return this.request("/api/users");
  }
  async createUser(data) {
    return this.request("/api/users", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  // --- INQUIRIES ---
  async getInquiries() {
    return this.request("/api/inquiries");
  }
  async createInquiry(data) {
    return this.request("/api/inquiries", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  // --- PROJECTS ---
  async getProjects(options) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : "";
    return this.request(`/api/projects${query}`);
  }
  async createProject(data) {
    return this.request("/api/projects", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  async updateProject(id, data) {
    return this.request(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }
  // --- INVOICES ---
  async getInvoices(options) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : "";
    return this.request(`/api/invoices${query}`);
  }
  async createInvoice(data) {
    return this.request("/api/invoices", {
      method: "POST",
      body: JSON.stringify({ ...data, dueDate: new Date(data.dueDate).getTime() })
    });
  }
};
export {
  Base67
};
