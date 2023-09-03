/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * OpenAPI spec version: 1.0.0
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError
} from 'axios'
import {
  useQuery,
  useMutation
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseMutationOptions,
  QueryFunction,
  MutationFunction,
  UseQueryResult,
  QueryKey
} from '@tanstack/react-query'

axios.defaults.baseURL = 'http://localhost:5000'
export interface UpdateBlogDto { [key: string]: any }

export interface CreateBlogDto { [key: string]: any }

export interface UpdateUserDto { [key: string]: any }

export interface CreateUserDto { [key: string]: any }




export const userCreate = (
  createUserDto: CreateUserDto, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/user`,
    createUserDto, options
  );
}



export const getUserCreateMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userCreate>>, TError, { data: CreateUserDto }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof userCreate>>, TError, { data: CreateUserDto }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof userCreate>>, { data: CreateUserDto }> = (props) => {
    const { data } = props ?? {};

    return userCreate(data, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type UserCreateMutationResult = NonNullable<Awaited<ReturnType<typeof userCreate>>>
export type UserCreateMutationBody = CreateUserDto
export type UserCreateMutationError = AxiosError<unknown>

export const useUserCreate = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userCreate>>, TError, { data: CreateUserDto }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getUserCreateMutationOptions(options);

  return useMutation(mutationOptions);
}

export const userFindAll = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(
    `/user`, options
  );
}


export const getUserFindAllQueryKey = () => [`/user`] as const;



export const getUserFindAllQueryOptions = <TData = Awaited<ReturnType<typeof userFindAll>>, TError = AxiosError<unknown>>(options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof userFindAll>>, TError, TData>, axios?: AxiosRequestConfig }
): UseQueryOptions<Awaited<ReturnType<typeof userFindAll>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserFindAllQueryKey();



  const queryFn: QueryFunction<Awaited<ReturnType<typeof userFindAll>>> = ({ signal }) => userFindAll({ signal, ...axiosOptions });



  return { queryKey, queryFn, ...queryOptions }
}

export type UserFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof userFindAll>>>
export type UserFindAllQueryError = AxiosError<unknown>

export const useUserFindAll = <TData = Awaited<ReturnType<typeof userFindAll>>, TError = AxiosError<unknown>>(
  options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof userFindAll>>, TError, TData>, axios?: AxiosRequestConfig }

): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getUserFindAllQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}


export const userFindOne = (
  id: string, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(
    `/user/${id}`, options
  );
}


export const getUserFindOneQueryKey = (id: string,) => [`/user/${id}`] as const;



export const getUserFindOneQueryOptions = <TData = Awaited<ReturnType<typeof userFindOne>>, TError = AxiosError<unknown>>(id: string, options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof userFindOne>>, TError, TData>, axios?: AxiosRequestConfig }
): UseQueryOptions<Awaited<ReturnType<typeof userFindOne>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getUserFindOneQueryKey(id);



  const queryFn: QueryFunction<Awaited<ReturnType<typeof userFindOne>>> = ({ signal }) => userFindOne(id, { signal, ...axiosOptions });



  return { queryKey, queryFn, enabled: !!(id), ...queryOptions }
}

export type UserFindOneQueryResult = NonNullable<Awaited<ReturnType<typeof userFindOne>>>
export type UserFindOneQueryError = AxiosError<unknown>

export const useUserFindOne = <TData = Awaited<ReturnType<typeof userFindOne>>, TError = AxiosError<unknown>>(
  id: string, options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof userFindOne>>, TError, TData>, axios?: AxiosRequestConfig }

): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getUserFindOneQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}


export const userUpdate = (
  id: string,
  updateUserDto: UpdateUserDto, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.patch(
    `/user/${id}`,
    updateUserDto, options
  );
}



export const getUserUpdateMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userUpdate>>, TError, { id: string; data: UpdateUserDto }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof userUpdate>>, TError, { id: string; data: UpdateUserDto }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof userUpdate>>, { id: string; data: UpdateUserDto }> = (props) => {
    const { id, data } = props ?? {};

    return userUpdate(id, data, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type UserUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof userUpdate>>>
export type UserUpdateMutationBody = UpdateUserDto
export type UserUpdateMutationError = AxiosError<unknown>

export const useUserUpdate = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userUpdate>>, TError, { id: string; data: UpdateUserDto }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getUserUpdateMutationOptions(options);

  return useMutation(mutationOptions);
}

export const userRemove = (
  id: string, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.delete(
    `/user/${id}`, options
  );
}



export const getUserRemoveMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userRemove>>, TError, { id: string }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof userRemove>>, TError, { id: string }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof userRemove>>, { id: string }> = (props) => {
    const { id } = props ?? {};

    return userRemove(id, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type UserRemoveMutationResult = NonNullable<Awaited<ReturnType<typeof userRemove>>>

export type UserRemoveMutationError = AxiosError<unknown>

export const useUserRemove = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof userRemove>>, TError, { id: string }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getUserRemoveMutationOptions(options);

  return useMutation(mutationOptions);
}

export const blogsCreate = (
  createBlogDto: CreateBlogDto, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.post(
    `/blogs`,
    createBlogDto, options
  );
}



export const getBlogsCreateMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsCreate>>, TError, { data: CreateBlogDto }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof blogsCreate>>, TError, { data: CreateBlogDto }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogsCreate>>, { data: CreateBlogDto }> = (props) => {
    const { data } = props ?? {};

    return blogsCreate(data, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type BlogsCreateMutationResult = NonNullable<Awaited<ReturnType<typeof blogsCreate>>>
export type BlogsCreateMutationBody = CreateBlogDto
export type BlogsCreateMutationError = AxiosError<unknown>

export const useBlogsCreate = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsCreate>>, TError, { data: CreateBlogDto }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getBlogsCreateMutationOptions(options);

  return useMutation(mutationOptions);
}

export const blogsFindAll = (
  options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(
    `/blogs`, options
  );
}


export const getBlogsFindAllQueryKey = () => [`/blogs`] as const;



export const getBlogsFindAllQueryOptions = <TData = Awaited<ReturnType<typeof blogsFindAll>>, TError = AxiosError<unknown>>(options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof blogsFindAll>>, TError, TData>, axios?: AxiosRequestConfig }
): UseQueryOptions<Awaited<ReturnType<typeof blogsFindAll>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getBlogsFindAllQueryKey();



  const queryFn: QueryFunction<Awaited<ReturnType<typeof blogsFindAll>>> = ({ signal }) => blogsFindAll({ signal, ...axiosOptions });



  return { queryKey, queryFn, ...queryOptions }
}

export type BlogsFindAllQueryResult = NonNullable<Awaited<ReturnType<typeof blogsFindAll>>>
export type BlogsFindAllQueryError = AxiosError<unknown>

export const useBlogsFindAll = <TData = Awaited<ReturnType<typeof blogsFindAll>>, TError = AxiosError<unknown>>(
  options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof blogsFindAll>>, TError, TData>, axios?: AxiosRequestConfig }

): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getBlogsFindAllQueryOptions(options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}


export const blogsFindOne = (
  id: string, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.get(
    `/blogs/${id}`, options
  );
}


export const getBlogsFindOneQueryKey = (id: string,) => [`/blogs/${id}`] as const;



export const getBlogsFindOneQueryOptions = <TData = Awaited<ReturnType<typeof blogsFindOne>>, TError = AxiosError<unknown>>(id: string, options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof blogsFindOne>>, TError, TData>, axios?: AxiosRequestConfig }
): UseQueryOptions<Awaited<ReturnType<typeof blogsFindOne>>, TError, TData> & { queryKey: QueryKey } => {
  const { query: queryOptions, axios: axiosOptions } = options ?? {};

  const queryKey = queryOptions?.queryKey ?? getBlogsFindOneQueryKey(id);



  const queryFn: QueryFunction<Awaited<ReturnType<typeof blogsFindOne>>> = ({ signal }) => blogsFindOne(id, { signal, ...axiosOptions });



  return { queryKey, queryFn, enabled: !!(id), ...queryOptions }
}

export type BlogsFindOneQueryResult = NonNullable<Awaited<ReturnType<typeof blogsFindOne>>>
export type BlogsFindOneQueryError = AxiosError<unknown>

export const useBlogsFindOne = <TData = Awaited<ReturnType<typeof blogsFindOne>>, TError = AxiosError<unknown>>(
  id: string, options?: { query?: UseQueryOptions<Awaited<ReturnType<typeof blogsFindOne>>, TError, TData>, axios?: AxiosRequestConfig }

): UseQueryResult<TData, TError> & { queryKey: QueryKey } => {

  const queryOptions = getBlogsFindOneQueryOptions(id, options)

  const query = useQuery(queryOptions) as UseQueryResult<TData, TError> & { queryKey: QueryKey };

  query.queryKey = queryOptions.queryKey;

  return query;
}


export const blogsUpdate = (
  id: string,
  updateBlogDto: UpdateBlogDto, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.patch(
    `/blogs/${id}`,
    updateBlogDto, options
  );
}



export const getBlogsUpdateMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsUpdate>>, TError, { id: string; data: UpdateBlogDto }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof blogsUpdate>>, TError, { id: string; data: UpdateBlogDto }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogsUpdate>>, { id: string; data: UpdateBlogDto }> = (props) => {
    const { id, data } = props ?? {};

    return blogsUpdate(id, data, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type BlogsUpdateMutationResult = NonNullable<Awaited<ReturnType<typeof blogsUpdate>>>
export type BlogsUpdateMutationBody = UpdateBlogDto
export type BlogsUpdateMutationError = AxiosError<unknown>

export const useBlogsUpdate = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsUpdate>>, TError, { id: string; data: UpdateBlogDto }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getBlogsUpdateMutationOptions(options);

  return useMutation(mutationOptions);
}

export const blogsRemove = (
  id: string, options?: AxiosRequestConfig
): Promise<AxiosResponse<void>> => {
  return axios.delete(
    `/blogs/${id}`, options
  );
}



export const getBlogsRemoveMutationOptions = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsRemove>>, TError, { id: string }, TContext>, axios?: AxiosRequestConfig }
  ): UseMutationOptions<Awaited<ReturnType<typeof blogsRemove>>, TError, { id: string }, TContext> => {
  const { mutation: mutationOptions, axios: axiosOptions } = options ?? {};




  const mutationFn: MutationFunction<Awaited<ReturnType<typeof blogsRemove>>, { id: string }> = (props) => {
    const { id } = props ?? {};

    return blogsRemove(id, axiosOptions)
  }




  return { mutationFn, ...mutationOptions }
}

export type BlogsRemoveMutationResult = NonNullable<Awaited<ReturnType<typeof blogsRemove>>>

export type BlogsRemoveMutationError = AxiosError<unknown>

export const useBlogsRemove = <TError = AxiosError<unknown>,

  TContext = unknown>(options?: { mutation?: UseMutationOptions<Awaited<ReturnType<typeof blogsRemove>>, TError, { id: string }, TContext>, axios?: AxiosRequestConfig }
  ) => {

  const mutationOptions = getBlogsRemoveMutationOptions(options);

  return useMutation(mutationOptions);
}
