const API_VESRION = '/api/admin';

const __ENDPOINTS = Object.freeze({
  USERS: `${API_VESRION}/users`,
  ADMINS: `${API_VESRION}/admins`,
  ADMIN_STATS: `${API_VESRION}/stats`,
  ADMIN_REGISTER: `${API_VESRION}/signup`,
  DELETE_USER: `${API_VESRION}/delete/user`,
  DELETE_ADMIN: `${API_VESRION}/delete/admin`,
  LOGIN_EMAIL_URL: `${API_VESRION}/email/login`,
  TRANSACTIONS_URL: `${API_VESRION}/tx/complete`,
  BLOCK_ADMIN: `${API_VESRION}/update/availability`,
  LOGIN_PASSWORD_URL: `${API_VESRION}/password/login`,
  UPDATE_PASSWORD_URL: `${API_VESRION}/update/password`,
  UPDATE_FULLNAME_URL: `${API_VESRION}/update/fullname`,
  UPDATE_ADDRESS_URL: `${API_VESRION}/update/address`,
});

export default __ENDPOINTS;
