import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-domain',
  templateUrl: './domain.component.html',
  styleUrls: ['./domain.component.css']
})
export class DomainComponent {
  domain = { name: '', createdOn: '', status: '', serverLocation: '' };

  statusOptions = [
    { label: 'Active', value: 'Active' },
    { label: 'Inactive', value: 'Inactive' },
    { label: 'Expired', value: 'Expired' }
  ];

  constructor(private router: Router,public domainservice:DomainService) {}


  onSubmit() {
    if (!this.domain.name || !this.domain.createdOn || !this.domain.status || !this.domain.serverLocation) {
      alert('Please fill all required fields.');
    } else {
      const domainData:any= {
        ...this.domain,
        createdOn: new Date(this.domain.createdOn).toISOString() // Use ISO format for consistent date parsing
      };
      alert('Domain added successfully!');
      this.domainservice.addDomain(domainData);
      this.router.navigate(['/dashboard'], { state: { domainData } });
    }
  }
}
