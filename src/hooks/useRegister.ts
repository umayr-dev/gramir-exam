import { useMutation } from '@tanstack/react-query';
import { register } from '@/lib/api';
import { queryKeys } from './queryKeys';

export function useRegister(options?: any) {
  return useMutation({
    mutationFn: register,
    mutationKey: queryKeys.register,
    ...options,
  });
} 