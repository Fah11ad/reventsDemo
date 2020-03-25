import { INCREMENT_COUNTER, DECREMENT_COUNTER } from './TestConstants'

export const incrementCounter = () => { //action creator

    return {
        type: INCREMENT_COUNTER
    }
}

export const decrementCounter = () => { //action creator

    return {
        type: DECREMENT_COUNTER
    }
}

