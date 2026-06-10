declare class BaseClient {
    baseUrl: string;
    apiKey: string | undefined;
    constructor(options?: {
        baseUrl?: string;
        apiKey?: string;
    });
    request<T>(endpoint: string, options?: RequestInit): Promise<T>;
}

declare class Organizations {
    private client;
    constructor(client: BaseClient);
    list(): Promise<any[]>;
    create(data: {
        name: string;
        industry?: string;
        website?: string;
    }): Promise<any>;
}

declare class Users {
    private client;
    constructor(client: BaseClient);
    list(): Promise<any[]>;
    create(data: {
        organizationId?: string;
        email: string;
        name: string;
        role?: string;
    }): Promise<any>;
}

declare class Inquiries {
    private client;
    constructor(client: BaseClient);
    list(): Promise<any[]>;
    create(data: {
        email: string;
        name: string;
        companyName?: string;
        projectType?: string;
        budget?: string;
        message?: string;
    }): Promise<any>;
}

declare class Projects {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        organizationId?: string;
    }): Promise<any[]>;
    create(data: {
        organizationId: string;
        name: string;
        description?: string;
    }): Promise<any>;
    update(id: string, data: Partial<{
        name: string;
        description: string;
        status: string;
        progress: number;
    }>): Promise<any>;
}

declare class Invoices {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        organizationId?: string;
    }): Promise<any[]>;
    create(data: {
        organizationId: string;
        projectId?: string;
        amount: number;
        currency?: string;
        dueDate: Date | string;
    }): Promise<any>;
}

interface SchoolLeadPayload {
    name: string;
    website?: string;
    email?: string;
    scenario: string;
}
interface SchoolLead extends SchoolLeadPayload {
    id: string;
    createdAt: string;
}

declare class Schools {
    private client;
    constructor(client: BaseClient);
    list(): Promise<SchoolLead[]>;
    create(data: SchoolLeadPayload): Promise<SchoolLead>;
}

declare class Hotels {
    private client;
    constructor(client: BaseClient);
    list(): Promise<any[]>;
    create(data: {
        name: string;
        website?: string;
        email?: string;
        scenario?: string;
    }): Promise<any>;
}

declare class Restaurants {
    private client;
    constructor(client: BaseClient);
    list(): Promise<any[]>;
    create(data: {
        name: string;
        website?: string;
        email?: string;
        scenario?: string;
    }): Promise<any>;
}

declare class Tasks {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        projectId?: string;
    }): Promise<any[]>;
    create(data: {
        projectId: string;
        title: string;
        description?: string;
        priority?: string;
        dueDate?: string;
        assigneeId?: string;
        invoiceId?: string;
    }): Promise<any>;
    update(id: string, data: Partial<{
        title: string;
        status: string;
        priority: string;
        dueDate: string;
    }>): Promise<any>;
}

declare class ProjectStages {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        projectId?: string;
    }): Promise<any[]>;
    create(data: {
        projectId: string;
        name: string;
        order: number;
        status?: string;
    }): Promise<any>;
    update(id: string, data: Partial<{
        name: string;
        status: string;
        order: number;
    }>): Promise<any>;
    delete(id: string): Promise<{
        success: boolean;
    }>;
}

declare class Documents {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        projectId?: string;
    }): Promise<any[]>;
    create(data: {
        projectId: string;
        name: string;
        fileUrl: string;
        fileType?: string;
        uploadedById?: string;
    }): Promise<any>;
}

declare class ChatMessages {
    private client;
    constructor(client: BaseClient);
    list(options?: {
        projectId?: string;
    }): Promise<any[]>;
    create(data: {
        projectId: string;
        senderId: string;
        message: string;
    }): Promise<any>;
}

interface RequestAdminLoginPayload {
    email: string;
}
interface VerifyAdminLoginPayload {
    email: string;
    code: string;
}
interface AdminAuthResponse {
    success?: boolean;
    token?: string;
    message?: string;
    [key: string]: any;
}

declare class AdminAuth {
    private client;
    constructor(client: BaseClient);
    requestLogin(data: RequestAdminLoginPayload | string): Promise<AdminAuthResponse>;
    verifyLogin(data: VerifyAdminLoginPayload | {
        email: string;
        code: string;
    }): Promise<AdminAuthResponse>;
}

declare class Base67 extends BaseClient {
    organizations: Organizations;
    users: Users;
    inquiries: Inquiries;
    projects: Projects;
    invoices: Invoices;
    schools: Schools;
    hotels: Hotels;
    restaurants: Restaurants;
    tasks: Tasks;
    projectStages: ProjectStages;
    documents: Documents;
    chatMessages: ChatMessages;
    adminAuth: AdminAuth;
    getOrganizations(): Promise<any[]>;
    createOrganization(data: any): Promise<any>;
    getUsers(): Promise<any[]>;
    createUser(data: any): Promise<any>;
    getInquiries(): Promise<any[]>;
    createInquiry(data: any): Promise<any>;
    getProjects(opts?: any): Promise<any[]>;
    createProject(data: any): Promise<any>;
    updateProject(id: string, data: any): Promise<any>;
    getInvoices(opts?: any): Promise<any[]>;
    createInvoice(data: any): Promise<any>;
    getSchoolLeads(): Promise<SchoolLead[]>;
    createSchoolLead(data: any): Promise<SchoolLead>;
    requestAdminLogin(email: string): Promise<AdminAuthResponse>;
    verifyAdminLogin(email: string, code: string): Promise<AdminAuthResponse>;
}

export { AdminAuth, type AdminAuthResponse, Base67, BaseClient, ChatMessages, Documents, Hotels, Inquiries, Invoices, Organizations, ProjectStages, Projects, type RequestAdminLoginPayload, Restaurants, type SchoolLead, type SchoolLeadPayload, Schools, Tasks, Users, type VerifyAdminLoginPayload };
