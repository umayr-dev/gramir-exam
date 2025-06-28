const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export interface ApiError {
  message: string;
  status?: number;
}

export interface LoginRequest {
  phone: string;
  passwrod: string;
}

export interface RegisterRequest {
  firstName: string;
  lastName: string;
  phone: string;
  passwrod: string;
}

export interface AuthResponse {
  user: {
    id: string;
    firstName: string;
    lastName: string;
    phone: string;
  };
  token: string;
}

const apiRequest = async (endpoint: string, options: RequestInit = {}) => {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(options.headers || {}),
    },
  });
  return response;
};

export const login = async (data: LoginRequest): Promise<AuthResponse> => {
  const response = await apiRequest('/user/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw { message: error.message || 'Login failed', status: response.status } as ApiError;
  }

  return response.json();
};

export const register = async (data: RegisterRequest): Promise<AuthResponse> => {
  const response = await apiRequest('/user/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw { message: error.message || 'Registration failed', status: response.status } as ApiError;
  }

  return response.json();
}; 