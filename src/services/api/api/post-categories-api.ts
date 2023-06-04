/* tslint:disable */
/* eslint-disable */
/**
 * Новосибирск BMW Клуб API
 * API спецификация api.bmw-nsk.ru
 *
 * The version of the OpenAPI document: 1.0
 * Contact: evist0@dblade.tech
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { CreatePostCategoryDto } from '../models';
// @ts-ignore
import { PaginationDto } from '../models';
// @ts-ignore
import { PartnersControllerFind400Response } from '../models';
// @ts-ignore
import { PartnersControllerFind403Response } from '../models';
// @ts-ignore
import { PostCategoriesControllerFind200Response } from '../models';
// @ts-ignore
import { PostCategoriesControllerFindOne404Response } from '../models';
// @ts-ignore
import { PostCategoriesSortingDto } from '../models';
// @ts-ignore
import { PostCategoryEntity } from '../models';
// @ts-ignore
import { UpdatePostCategoryDto } from '../models';
// @ts-ignore
import { UploadControllerUpload401Response } from '../models';
/**
 * PostCategoriesApi - axios parameter creator
 * @export
 */
export const PostCategoriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Создает новую категорию статей.
         * @param {CreatePostCategoryDto} createPostCategoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerCreate: async (createPostCategoryDto: CreatePostCategoryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createPostCategoryDto' is not null or undefined
            assertParamExists('postCategoriesControllerCreate', 'createPostCategoryDto', createPostCategoryDto)
            const localVarPath = `/post-categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(createPostCategoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Возвращает список категорий статей.
         * @param {PaginationDto} [pagination] 
         * @param {PostCategoriesSortingDto} [sorting] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerFind: async (pagination?: PaginationDto, sorting?: PostCategoriesSortingDto, name?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/post-categories`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (pagination !== undefined) {
                localVarQueryParameter['pagination'] = pagination;
            }

            if (sorting !== undefined) {
                localVarQueryParameter['sorting'] = sorting;
            }

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Возвращает указанную категорию статей.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerFindOne: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postCategoriesControllerFindOne', 'id', id)
            const localVarPath = `/post-categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Удаляет указанную категорию статей.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerRemove: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postCategoriesControllerRemove', 'id', id)
            const localVarPath = `/post-categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Обновляет указанную категорию статей.
         * @param {string} id 
         * @param {UpdatePostCategoryDto} updatePostCategoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerUpdate: async (id: string, updatePostCategoryDto: UpdatePostCategoryDto, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('postCategoriesControllerUpdate', 'id', id)
            // verify required parameter 'updatePostCategoryDto' is not null or undefined
            assertParamExists('postCategoriesControllerUpdate', 'updatePostCategoryDto', updatePostCategoryDto)
            const localVarPath = `/post-categories/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearer required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(updatePostCategoryDto, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PostCategoriesApi - functional programming interface
 * @export
 */
export const PostCategoriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PostCategoriesApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Создает новую категорию статей.
         * @param {CreatePostCategoryDto} createPostCategoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCategoriesControllerCreate(createPostCategoryDto: CreatePostCategoryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCategoryEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCategoriesControllerCreate(createPostCategoryDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Возвращает список категорий статей.
         * @param {PaginationDto} [pagination] 
         * @param {PostCategoriesSortingDto} [sorting] 
         * @param {string} [name] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCategoriesControllerFind(pagination?: PaginationDto, sorting?: PostCategoriesSortingDto, name?: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCategoriesControllerFind200Response>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCategoriesControllerFind(pagination, sorting, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Возвращает указанную категорию статей.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCategoriesControllerFindOne(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCategoryEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCategoriesControllerFindOne(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Удаляет указанную категорию статей.
         * @param {string} id 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCategoriesControllerRemove(id: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCategoryEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCategoriesControllerRemove(id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Обновляет указанную категорию статей.
         * @param {string} id 
         * @param {UpdatePostCategoryDto} updatePostCategoryDto 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async postCategoriesControllerUpdate(id: string, updatePostCategoryDto: UpdatePostCategoryDto, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PostCategoryEntity>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.postCategoriesControllerUpdate(id, updatePostCategoryDto, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PostCategoriesApi - factory interface
 * @export
 */
export const PostCategoriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PostCategoriesApiFp(configuration)
    return {
        /**
         * 
         * @summary Создает новую категорию статей.
         * @param {PostCategoriesApiPostCategoriesControllerCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerCreate(requestParameters: PostCategoriesApiPostCategoriesControllerCreateRequest, options?: AxiosRequestConfig): AxiosPromise<PostCategoryEntity> {
            return localVarFp.postCategoriesControllerCreate(requestParameters.createPostCategoryDto, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Возвращает список категорий статей.
         * @param {PostCategoriesApiPostCategoriesControllerFindRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerFind(requestParameters: PostCategoriesApiPostCategoriesControllerFindRequest = {}, options?: AxiosRequestConfig): AxiosPromise<PostCategoriesControllerFind200Response> {
            return localVarFp.postCategoriesControllerFind(requestParameters.pagination, requestParameters.sorting, requestParameters.name, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Возвращает указанную категорию статей.
         * @param {PostCategoriesApiPostCategoriesControllerFindOneRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerFindOne(requestParameters: PostCategoriesApiPostCategoriesControllerFindOneRequest, options?: AxiosRequestConfig): AxiosPromise<PostCategoryEntity> {
            return localVarFp.postCategoriesControllerFindOne(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Удаляет указанную категорию статей.
         * @param {PostCategoriesApiPostCategoriesControllerRemoveRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerRemove(requestParameters: PostCategoriesApiPostCategoriesControllerRemoveRequest, options?: AxiosRequestConfig): AxiosPromise<PostCategoryEntity> {
            return localVarFp.postCategoriesControllerRemove(requestParameters.id, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Обновляет указанную категорию статей.
         * @param {PostCategoriesApiPostCategoriesControllerUpdateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        postCategoriesControllerUpdate(requestParameters: PostCategoriesApiPostCategoriesControllerUpdateRequest, options?: AxiosRequestConfig): AxiosPromise<PostCategoryEntity> {
            return localVarFp.postCategoriesControllerUpdate(requestParameters.id, requestParameters.updatePostCategoryDto, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for postCategoriesControllerCreate operation in PostCategoriesApi.
 * @export
 * @interface PostCategoriesApiPostCategoriesControllerCreateRequest
 */
export interface PostCategoriesApiPostCategoriesControllerCreateRequest {
    /**
     * 
     * @type {CreatePostCategoryDto}
     * @memberof PostCategoriesApiPostCategoriesControllerCreate
     */
    readonly createPostCategoryDto: CreatePostCategoryDto
}

/**
 * Request parameters for postCategoriesControllerFind operation in PostCategoriesApi.
 * @export
 * @interface PostCategoriesApiPostCategoriesControllerFindRequest
 */
export interface PostCategoriesApiPostCategoriesControllerFindRequest {
    /**
     * 
     * @type {PaginationDto}
     * @memberof PostCategoriesApiPostCategoriesControllerFind
     */
    readonly pagination?: PaginationDto

    /**
     * 
     * @type {PostCategoriesSortingDto}
     * @memberof PostCategoriesApiPostCategoriesControllerFind
     */
    readonly sorting?: PostCategoriesSortingDto

    /**
     * 
     * @type {string}
     * @memberof PostCategoriesApiPostCategoriesControllerFind
     */
    readonly name?: string
}

/**
 * Request parameters for postCategoriesControllerFindOne operation in PostCategoriesApi.
 * @export
 * @interface PostCategoriesApiPostCategoriesControllerFindOneRequest
 */
export interface PostCategoriesApiPostCategoriesControllerFindOneRequest {
    /**
     * 
     * @type {string}
     * @memberof PostCategoriesApiPostCategoriesControllerFindOne
     */
    readonly id: string
}

/**
 * Request parameters for postCategoriesControllerRemove operation in PostCategoriesApi.
 * @export
 * @interface PostCategoriesApiPostCategoriesControllerRemoveRequest
 */
export interface PostCategoriesApiPostCategoriesControllerRemoveRequest {
    /**
     * 
     * @type {string}
     * @memberof PostCategoriesApiPostCategoriesControllerRemove
     */
    readonly id: string
}

/**
 * Request parameters for postCategoriesControllerUpdate operation in PostCategoriesApi.
 * @export
 * @interface PostCategoriesApiPostCategoriesControllerUpdateRequest
 */
export interface PostCategoriesApiPostCategoriesControllerUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof PostCategoriesApiPostCategoriesControllerUpdate
     */
    readonly id: string

    /**
     * 
     * @type {UpdatePostCategoryDto}
     * @memberof PostCategoriesApiPostCategoriesControllerUpdate
     */
    readonly updatePostCategoryDto: UpdatePostCategoryDto
}

/**
 * PostCategoriesApi - object-oriented interface
 * @export
 * @class PostCategoriesApi
 * @extends {BaseAPI}
 */
export class PostCategoriesApi extends BaseAPI {
    /**
     * 
     * @summary Создает новую категорию статей.
     * @param {PostCategoriesApiPostCategoriesControllerCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostCategoriesApi
     */
    public postCategoriesControllerCreate(requestParameters: PostCategoriesApiPostCategoriesControllerCreateRequest, options?: AxiosRequestConfig) {
        return PostCategoriesApiFp(this.configuration).postCategoriesControllerCreate(requestParameters.createPostCategoryDto, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Возвращает список категорий статей.
     * @param {PostCategoriesApiPostCategoriesControllerFindRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostCategoriesApi
     */
    public postCategoriesControllerFind(requestParameters: PostCategoriesApiPostCategoriesControllerFindRequest = {}, options?: AxiosRequestConfig) {
        return PostCategoriesApiFp(this.configuration).postCategoriesControllerFind(requestParameters.pagination, requestParameters.sorting, requestParameters.name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Возвращает указанную категорию статей.
     * @param {PostCategoriesApiPostCategoriesControllerFindOneRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostCategoriesApi
     */
    public postCategoriesControllerFindOne(requestParameters: PostCategoriesApiPostCategoriesControllerFindOneRequest, options?: AxiosRequestConfig) {
        return PostCategoriesApiFp(this.configuration).postCategoriesControllerFindOne(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Удаляет указанную категорию статей.
     * @param {PostCategoriesApiPostCategoriesControllerRemoveRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostCategoriesApi
     */
    public postCategoriesControllerRemove(requestParameters: PostCategoriesApiPostCategoriesControllerRemoveRequest, options?: AxiosRequestConfig) {
        return PostCategoriesApiFp(this.configuration).postCategoriesControllerRemove(requestParameters.id, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Обновляет указанную категорию статей.
     * @param {PostCategoriesApiPostCategoriesControllerUpdateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PostCategoriesApi
     */
    public postCategoriesControllerUpdate(requestParameters: PostCategoriesApiPostCategoriesControllerUpdateRequest, options?: AxiosRequestConfig) {
        return PostCategoriesApiFp(this.configuration).postCategoriesControllerUpdate(requestParameters.id, requestParameters.updatePostCategoryDto, options).then((request) => request(this.axios, this.basePath));
    }
}