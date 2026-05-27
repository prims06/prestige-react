import { useCallback } from 'react';
import { filesApi } from '../api/modules/files';
import { useAsync } from './useAsync';

export function useFileUpload() {
  const { isLoading: isUploading, error, execute } = useAsync();

  const upload = useCallback((file, purpose) =>
    execute(() => filesApi.upload(file, purpose)), [execute]);

  return { upload, isUploading, error };
}
