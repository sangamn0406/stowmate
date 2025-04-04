import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000'; // Update with your backend URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Cargo Management API
export const cargoApi = {
  getCargoItems: () => api.get('/cargo'),
  addCargoItem: (item) => api.post('/cargo', item),
  updateCargoItem: (id, item) => api.put(`/cargo/${id}`, item),
  deleteCargoItem: (id) => api.delete(`/cargo/${id}`),
  optimizeCargo: () => api.post('/cargo/optimize'),
  resetSimulation: () => api.post('/simulation/reset'),
  saveConfiguration: (config) => api.post('/simulation/save', config),
  generateReport: (reportType, cargoData) => api.post(`/generate-report/${reportType}`, cargoData, {
    responseType: 'blob'
  })
};

// Analytics API
export const analyticsApi = {
  getWeightDistribution: () => api.get('/analytics/weight'),
  getPriorityDistribution: () => api.get('/analytics/priority'),
  getOptimizationMetrics: () => api.get('/analytics/metrics')
};