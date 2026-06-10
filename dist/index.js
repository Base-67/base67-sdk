"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  AdminAuth: () => AdminAuth,
  Base67: () => Base67,
  BaseClient: () => BaseClient,
  ChatMessages: () => ChatMessages,
  Documents: () => Documents,
  Hotels: () => Hotels,
  Inquiries: () => Inquiries,
  Invoices: () => Invoices,
  Organizations: () => Organizations,
  ProjectStages: () => ProjectStages,
  Projects: () => Projects,
  Restaurants: () => Restaurants,
  Schools: () => Schools,
  Tasks: () => Tasks,
  Users: () => Users
});
module.exports = __toCommonJS(index_exports);

// src/core/client.ts
var BaseClient = class {
  baseUrl;
  apiKey;
  constructor(options) {
    this.baseUrl = options?.baseUrl || "https://base67-api.stanleyisaac134.workers.dev";
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
};

// src/resources/organizations.ts
var Organizations = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/organizations");
  }
  async create(data) {
    return this.client.request("/api/organizations", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/users.ts
var Users = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/users");
  }
  async create(data) {
    return this.client.request("/api/users", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/inquiries.ts
var Inquiries = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/inquiries");
  }
  async create(data) {
    return this.client.request("/api/inquiries", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/projects.ts
var Projects = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : "";
    return this.client.request(`/api/projects${query}`);
  }
  async create(data) {
    return this.client.request("/api/projects", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  async update(id, data) {
    return this.client.request(`/api/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/invoices.ts
var Invoices = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.organizationId ? `?organizationId=${options.organizationId}` : "";
    return this.client.request(`/api/invoices${query}`);
  }
  async create(data) {
    return this.client.request("/api/invoices", {
      method: "POST",
      body: JSON.stringify({ ...data, dueDate: new Date(data.dueDate).getTime() })
    });
  }
};

// src/resources/schools.ts
var Schools = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/schools");
  }
  async create(data) {
    return this.client.request("/api/schools", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/hotels.ts
var Hotels = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/hotels");
  }
  async create(data) {
    return this.client.request("/api/hotels", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/restaurants.ts
var Restaurants = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list() {
    return this.client.request("/api/restaurants");
  }
  async create(data) {
    return this.client.request("/api/restaurants", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/tasks.ts
var Tasks = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : "";
    return this.client.request(`/api/tasks${query}`);
  }
  async create(data) {
    return this.client.request("/api/tasks", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  async update(id, data) {
    return this.client.request(`/api/tasks/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/projectStages.ts
var ProjectStages = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : "";
    return this.client.request(`/api/project-stages${query}`);
  }
  async create(data) {
    return this.client.request("/api/project-stages", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
  async update(id, data) {
    return this.client.request(`/api/project-stages/${id}`, {
      method: "PUT",
      body: JSON.stringify(data)
    });
  }
  async delete(id) {
    return this.client.request(`/api/project-stages/${id}`, {
      method: "DELETE"
    });
  }
};

// src/resources/documents.ts
var Documents = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : "";
    return this.client.request(`/api/documents${query}`);
  }
  async create(data) {
    return this.client.request("/api/documents", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/chatMessages.ts
var ChatMessages = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async list(options) {
    const query = options?.projectId ? `?projectId=${options.projectId}` : "";
    return this.client.request(`/api/chat-messages${query}`);
  }
  async create(data) {
    return this.client.request("/api/chat-messages", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/resources/adminAuth.ts
var AdminAuth = class {
  constructor(client) {
    this.client = client;
  }
  client;
  async requestLogin(data) {
    const payload = typeof data === "string" ? { email: data } : data;
    return this.client.request("/api/auth/send-otp", {
      method: "POST",
      body: JSON.stringify(payload)
    });
  }
  async verifyLogin(data) {
    return this.client.request("/api/auth/verify-otp", {
      method: "POST",
      body: JSON.stringify(data)
    });
  }
};

// src/Base67.ts
var Base67 = class extends BaseClient {
  organizations = new Organizations(this);
  users = new Users(this);
  inquiries = new Inquiries(this);
  projects = new Projects(this);
  invoices = new Invoices(this);
  schools = new Schools(this);
  hotels = new Hotels(this);
  restaurants = new Restaurants(this);
  tasks = new Tasks(this);
  projectStages = new ProjectStages(this);
  documents = new Documents(this);
  chatMessages = new ChatMessages(this);
  adminAuth = new AdminAuth(this);
  // Backward compatibility
  async getOrganizations() {
    return this.organizations.list();
  }
  async createOrganization(data) {
    return this.organizations.create(data);
  }
  async getUsers() {
    return this.users.list();
  }
  async createUser(data) {
    return this.users.create(data);
  }
  async getInquiries() {
    return this.inquiries.list();
  }
  async createInquiry(data) {
    return this.inquiries.create(data);
  }
  async getProjects(opts) {
    return this.projects.list(opts);
  }
  async createProject(data) {
    return this.projects.create(data);
  }
  async updateProject(id, data) {
    return this.projects.update(id, data);
  }
  async getInvoices(opts) {
    return this.invoices.list(opts);
  }
  async createInvoice(data) {
    return this.invoices.create(data);
  }
  async getSchoolLeads() {
    return this.schools.list();
  }
  async createSchoolLead(data) {
    return this.schools.create(data);
  }
  async requestAdminLogin(email) {
    return this.adminAuth.requestLogin(email);
  }
  async verifyAdminLogin(email, code) {
    return this.adminAuth.verifyLogin({ email, code });
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  AdminAuth,
  Base67,
  BaseClient,
  ChatMessages,
  Documents,
  Hotels,
  Inquiries,
  Invoices,
  Organizations,
  ProjectStages,
  Projects,
  Restaurants,
  Schools,
  Tasks,
  Users
});
