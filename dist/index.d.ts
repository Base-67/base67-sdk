declare class Base67 {
    private baseUrl;
    private apiKey;
    constructor(options?: {
        baseUrl?: string;
        apiKey?: string;
    });
    private request;
    getOrganizations(): Promise<any[]>;
    createOrganization(data: {
        name: string;
        industry?: string;
        website?: string;
    }): Promise<any>;
    getUsers(): Promise<any[]>;
    createUser(data: {
        organizationId?: string;
        email: string;
        name: string;
        role?: string;
    }): Promise<any>;
    getInquiries(): Promise<any[]>;
    createInquiry(data: {
        email: string;
        name: string;
        companyName?: string;
        projectType?: string;
        budget?: string;
        message?: string;
    }): Promise<any>;
    getProjects(options?: {
        organizationId?: string;
    }): Promise<any[]>;
    createProject(data: {
        organizationId: string;
        name: string;
        description?: string;
    }): Promise<any>;
    updateProject(id: string, data: Partial<{
        name: string;
        description: string;
        status: string;
        progress: number;
    }>): Promise<any>;
    getInvoices(options?: {
        organizationId?: string;
    }): Promise<any[]>;
    createInvoice(data: {
        organizationId: string;
        projectId?: string;
        amount: number;
        currency?: string;
        dueDate: Date | string;
    }): Promise<any>;
}

export { Base67 };
