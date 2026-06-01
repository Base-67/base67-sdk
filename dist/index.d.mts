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

declare class Base67 extends BaseClient {
    organizations: Organizations;
    users: Users;
    inquiries: Inquiries;
    projects: Projects;
    invoices: Invoices;
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
}

export { Base67, BaseClient, Inquiries, Invoices, Organizations, Projects, Users };
