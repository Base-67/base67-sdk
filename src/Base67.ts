import { BaseClient } from './core/client';
import { Organizations } from './resources/organizations';
import { Users } from './resources/users';
import { Inquiries } from './resources/inquiries';
import { Projects } from './resources/projects';
import { Invoices } from './resources/invoices';
import { Schools } from './resources/schools';
import { AdminAuth } from './resources/adminAuth';

export class Base67 extends BaseClient {
  public organizations = new Organizations(this);
  public users = new Users(this);
  public inquiries = new Inquiries(this);
  public projects = new Projects(this);
  public invoices = new Invoices(this);
  public schools = new Schools(this);
  public adminAuth = new AdminAuth(this);

  // Backward compatibility methods for existing code
  async getOrganizations() { return this.organizations.list(); }
  async createOrganization(data: any) { return this.organizations.create(data); }
  
  async getUsers() { return this.users.list(); }
  async createUser(data: any) { return this.users.create(data); }
  
  async getInquiries() { return this.inquiries.list(); }
  async createInquiry(data: any) { return this.inquiries.create(data); }
  
  async getProjects(opts?: any) { return this.projects.list(opts); }
  async createProject(data: any) { return this.projects.create(data); }
  async updateProject(id: string, data: any) { return this.projects.update(id, data); }
  
  async getInvoices(opts?: any) { return this.invoices.list(opts); }
  async createInvoice(data: any) { return this.invoices.create(data); }
  
  async getSchoolLeads() { return this.schools.list(); }
  async createSchoolLead(data: any) { return this.schools.create(data); }
  
  async requestAdminLogin(email: string) { return this.adminAuth.requestLogin(email); }
  async verifyAdminLogin(email: string, code: string) { return this.adminAuth.verifyLogin({ email, code }); }
}
