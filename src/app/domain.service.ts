import { Injectable } from '@angular/core';

export interface Domain {
  id: number;
  name: string;
  type: string;
  details: string;
}

@Injectable({
  providedIn: 'root',
})
export class DomainService {
  domains:any= [
    { name: 'loremvallis.com', createdOn: new Date(2013, 9, 4), status: 'Active', serverLocation: 'Buenos Aires' },
    { name: 'quisquamut.net', createdOn: new Date(2014, 4, 8), status: 'Inactive', serverLocation: 'Australia' },
    { name: 'convallissed.com', createdOn: new Date(2015, 10, 15), status: 'Active', serverLocation: 'United Kingdom' },
    { name: 'phasellusri.org', createdOn: new Date(2016, 5, 9), status: 'Expired', serverLocation: 'Romania' },
    { name: 'facilisleo.com', createdOn: new Date(2017, 11, 8), status: 'Inactive', serverLocation: 'Germany' },
  ];

  constructor() {}

  // Add domain to the list
  addDomain(domain: Domain): void {
    this.domains.push(domain);
  }

  // Get all domains
  getDomains(): Domain[] {
    return this.domains;
  }
}
