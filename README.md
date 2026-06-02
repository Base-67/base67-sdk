# @base67/sdk

The official isomorphic TypeScript client for the Base67 API.

## Installation

```bash
npm install @base67/sdk
# or
yarn add @base67/sdk
# or
pnpm add @base67/sdk
```

## Usage

```typescript
import { Base67 } from '@base67/sdk';

// Initialize the client
const client = new Base67({
  apiKey: 'your-api-key' // Optional: omit if interacting with public endpoints
});

// Example: Fetching projects
const projects = await client.getProjects();
console.log(projects);
```

## Available Resources

### Admin Authentication
- `client.requestAdminLogin(email: string)`
- `client.verifyAdminLogin(email: string, code: string)`

### Schools (Outreach/Leads)
- `client.getSchoolLeads()`
- `client.createSchoolLead(data: SchoolLeadPayload)`

### Organizations
- `client.getOrganizations()`
- `client.createOrganization(data)`

### Users
- `client.getUsers()`
- `client.createUser(data)`

### Projects
- `client.getProjects(opts?)`
- `client.createProject(data)`
- `client.updateProject(id, data)`

### Invoices
- `client.getInvoices(opts?)`
- `client.createInvoice(data)`

### Inquiries
- `client.getInquiries()`
- `client.createInquiry(data)`

## License
MIT
