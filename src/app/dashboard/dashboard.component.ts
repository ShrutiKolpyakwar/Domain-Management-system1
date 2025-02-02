import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DomainService } from '../domain.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  filteredDomains: any[] = [];
  newDomain = { name: '', createdOn: '', status: '', serverLocation: '' };
  isDomain = false;

  isEditPage = false; // Flag for navigating to the edit view
  editDomainData: any = { name: '', createdOn: '', status: '', serverLocation: '' };

  constructor(private router: Router, public domainservice: DomainService) {}

  ngOnInit(): void {
    this.filteredDomains = [...this.domainservice.domains];
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  filterDomains(status: string) {
    this.filteredDomains = status === 'all' 
      ? [...this.domainservice.domains] 
      : this.domainservice.domains.filter((d: any) => d.status === status);
  }

  showDomainComponent() {
    this.router.navigate(['/domain']);
  }

  addDomain() {
    if (this.newDomain.name && this.newDomain.createdOn && this.newDomain.status && this.newDomain.serverLocation) {
      const newDomainToAdd = { ...this.newDomain };
      this.filteredDomains = [...this.domainservice.domains];
      this.newDomain = { name: '', createdOn: '', status: '', serverLocation: '' };
      this.isDomain = false;
      alert('Domain added successfully!');
    } else {
      alert('Please fill all fields!');
    }
  }

  editDomain(domain: any): void {
    this.isEditPage = true; // Navigate to the edit page
    this.editDomainData = { ...domain, createdOn: this.formatDateForInput(domain.createdOn) };
  }

  updateDomain(): void {
    const index = this.filteredDomains.findIndex(d => d.name === this.editDomainData.name);
    if (index !== -1) {
      this.filteredDomains[index] = { ...this.editDomainData, createdOn: new Date(this.editDomainData.createdOn) };
      this.domainservice.domains[index] = this.filteredDomains[index];
    }
    alert('Domain details updated successfully!');
    this.cancelEdit();
  }

  cancelEdit(): void {
    this.isEditPage = false; // Go back to the list view
    this.editDomainData = { name: '', createdOn: '', status: '', serverLocation: '' };
  }

  deleteDomain(domain: any) {
    if (confirm(`Are you sure you want to delete the domain: ${domain.name}?`)) {
      this.filteredDomains = this.filteredDomains.filter((d: any) => d !== domain);
    }
  }

  formatDateForInput(date: Date): string {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
}
