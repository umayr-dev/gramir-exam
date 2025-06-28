import { useMutation } from '@tanstack/react-query';
import { login } from '@/lib/api';
import { queryKeys } from './queryKeys';

export function useLogin(options?: any) {
  return useMutation({
    mutationFn: login,
    mutationKey: queryKeys.login,
    ...options,
  });
} 