import { useMutation } from '@tanstack/react-query';
import type { UseMutationOptions, UseMutationResult } from '@tanstack/react-query';
import { login } from '@/lib/api';
import { queryKeys } from './queryKeys';

export function useLogin<TData = unknown, TError = unknown, TVariables = void>(
  options?: UseMutationOptions<TData, TError, TVariables>
): UseMutationResult<TData, TError, TVariables> {
  return useMutation<TData, TError, TVariables>({
    mutationFn: login as any,
    mutationKey: queryKeys.login,
    ...options,
  });
} 