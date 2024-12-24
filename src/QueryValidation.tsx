



import { ReactNode } from 'react';
import cls from './QueryValidation.module.scss';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';

interface QueryValidationProps { children: ReactNode, error: FetchBaseQueryError | SerializedError | undefined, isLoading: boolean }

export const QueryValidation = ({children, error, isLoading}: QueryValidationProps) => {

  if (error) return <p>Error was occurred</p>

  if (isLoading) return <p>Loading . . .</p>
  
  return (
    <div>
      {children}
    </div>
  )
}