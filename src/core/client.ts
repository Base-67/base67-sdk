export class BaseClient {
  public baseUrl: string;
  public apiKey: string | undefined;

  constructor(options?: { baseUrl?: string; apiKey?: string }) {
    this.baseUrl = options?.baseUrl || 'https://base67-api.base67.workers.dev';
    this.apiKey = options?.apiKey;
  }

  public async request<T>(endpoint: string, options?: RequestInit): Promise<T> {
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
}
