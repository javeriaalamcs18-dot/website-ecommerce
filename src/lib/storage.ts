import { ApplicationRecord, INITIAL_APPLICATIONS, STORAGE_KEY } from './data';

export function getApplications(): ApplicationRecord[] {
  if (typeof window === 'undefined') return INITIAL_APPLICATIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_APPLICATIONS));
      return INITIAL_APPLICATIONS;
    }
    return JSON.parse(raw);
  } catch {
    return INITIAL_APPLICATIONS;
  }
}

export function saveApplication(data: Omit<ApplicationRecord, 'id' | 'status' | 'createdAt'>): ApplicationRecord {
  const existing = getApplications();
  const randomSuffix = Math.floor(100000 + Math.random() * 900000);
  const newApp: ApplicationRecord = {
    ...data,
    id: `NGSS-2026-${randomSuffix}`,
    status: 'Application Received',
    createdAt: new Date().toISOString()
  };

  const updated = [newApp, ...existing];
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }
  return newApp;
}

export function findApplication(appId: string, phone: string): ApplicationRecord | null {
  const cleanId = appId.trim().toUpperCase();
  const cleanPhone = phone.trim().replace(/[^0-9]/g, '');
  const apps = getApplications();

  return apps.find(app => {
    const p1 = app.phone.replace(/[^0-9]/g, '');
    return app.id.toUpperCase() === cleanId && (p1.endsWith(cleanPhone) || cleanPhone.endsWith(p1));
  }) || null;
}

export function updateApplicationStatus(id: string, status: ApplicationRecord['status']): boolean {
  const apps = getApplications();
  const index = apps.findIndex(a => a.id === id);
  if (index === -1) return false;

  apps[index].status = status;
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
  }
  return true;
}
