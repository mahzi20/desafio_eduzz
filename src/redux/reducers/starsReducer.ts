import { Dispatch, Reducer } from 'redux'

import { EActions, IState } from './types'

const INITIAL_STATE: IState = {
    isFetching: false,
    hasErrors: false,
    starsInfo: [],
}

const reducer: Reducer<IState> = (state = INITIAL_STATE, action): IState => {
    switch (action.type) {
        case EActions.GET_INFO:
            return {
                isFetching: true,
                hasErrors: state.hasErrors,
                starsInfo: state.starsInfo,
            }

        case EActions.GET_INFO_SUCCESS:
            return {
                isFetching: false,
                hasErrors: false,
                starsInfo: action.payload,
            }

        case EActions.GET_INFO_FAIL:
            return {
                isFetching: false,
                hasErrors: action.payload,
                starsInfo: INITIAL_STATE.starsInfo,
            }

        default:
            return state
    }
}

export const getStars = (nome: string) => {
    return async (dispatch: Dispatch) => {
        dispatch({ type: EActions.GET_INFO, payload: null })

        try {
            const url = `https://swapi.co/api/films/?search=${nome}`

            const response = await fetch(url)
            const json = await response.json()

            dispatch({ type: EActions.GET_INFO_SUCCESS, payload: json.results })
            console.log(json.results)
        } catch (error) {
            dispatch({ type: EActions.GET_INFO_FAIL, payload: error })
        }
    }
}

export default reducer
