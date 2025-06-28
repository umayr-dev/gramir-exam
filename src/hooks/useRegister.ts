import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { register } from '@/lib/api';
import { queryKeys } from './queryKeys';

export function useRegister<TData = unknown, TError = unknown, TVariables = void>(
  options?: UseMutationOptions<TData, TError, TVariables>
): UseMutationResult<TData, TError, TVariables> {
  return useMutation<TData, TError, TVariables>({
    mutationFn: register as any,
    mutationKey: queryKeys.register,
    ...options,
  });
} 