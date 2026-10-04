export interface ApplicationRecord {
  id: string; // e.g. NGSS-2026-XXXXXX
  fullName: string;
  fatherName: string;
  cnic: string;
  phone: string;
  email: string;
  age: string;
  education: string;
  city: string;
  occupation: string;
  reason: string;
  status: 'Application Received' | 'Under Review' | 'Selected' | 'Waitlisted' | 'Rejected';
  createdAt: string;
  notes?: string;
}

export const INITIAL_APPLICATIONS: ApplicationRecord[] = [
  {
    id: 'NGSS-2026-894102',
    fullName: 'Ayesha Khan',
    fatherName: 'Muhammad Tariq',
    cnic: '16101-1234567-2',
    phone: '0312-8444762',
    email: 'ayesha.k@example.com',
    age: '21',
    education: 'Bachelor of Science (Computer Science)',
    city: 'Mardan City',
    occupation: 'Student',
    reason: 'Passionate about setting up my own online modest fashion Shopify store.',
    status: 'Selected',
    createdAt: '2026-10-01T10:30:00Z',
  },
  {
    id: 'NGSS-2026-749210',
    fullName: 'Fatima Noor',
    fatherName: 'Noor Muhammad',
    cnic: '16102-9876543-4',
    phone: '0300-9876543',
    email: 'fatima.noor@example.com',
    age: '23',
    education: 'BBA Marketing',
    city: 'Takht Bhai, Mardan',
    occupation: 'Freelancer',
    reason: 'Want to master Shopify product research and run digital commerce campaigns.',
    status: 'Under Review',
    createdAt: '2026-10-02T14:15:00Z',
  },
  {
    id: 'NGSS-2026-512398',
    fullName: 'Zainab Bibi',
    fatherName: 'Abdul Rasheed',
    cnic: '16101-4455667-8',
    phone: '0333-5566778',
    email: 'zainab.b@example.com',
    age: '20',
    education: 'Intermediate (FSc)',
    city: 'Mardan Cantonment',
    occupation: 'Student',
    reason: 'Seeking practical skills to support my family with digital entrepreneurship.',
    status: 'Application Received',
    createdAt: '2026-10-03T09:00:00Z',
  },
  {
    id: 'NGSS-2026-349811',
    fullName: 'Maryam Gul',
    fatherName: 'Gul Rehman',
    cnic: '16101-9988776-6',
    phone: '0345-1122334',
    email: 'maryam.gul@example.com',
    age: '24',
    education: 'Master in Economics',
    city: 'Katlang, Mardan',
    occupation: 'Home Maker / Aspiring Entrepreneur',
    reason: 'Eager to build a handicrafts digital store on Shopify.',
    status: 'Waitlisted',
    createdAt: '2026-10-03T11:20:00Z',
  }
];

export const STORAGE_KEY = 'ngss_shopify_applications';
