/**
 * Actions
 */
export enum EActions {
    GET_INFO = '@info/HTTP_GET_INFO',
    GET_INFO_SUCCESS = '@info/HTTP_GET_INFO_SUCCESS',
    GET_INFO_FAIL = '@info/HTTP_GET_INFO_FAIL',
}

/**
 * State
 */
export interface IState {
    readonly isFetching: boolean
    readonly hasErrors: boolean
    readonly starsInfo: []
}
