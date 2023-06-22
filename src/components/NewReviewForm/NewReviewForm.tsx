import { useCallback, useEffect, useReducer } from "react";

const initialState = {
    name: 'Dima',
    text: 'something',
    rating: 10,
}

export const NewReviewForm = () => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    // const ref = useRef(); // {current:...}

    // useEffect(() => {
    //     if (ref.current){
    //         ref.current.focus();
    //     }
    // }, [])
    // const onNameChange = (event) => dispatch (
    //    { type: FORM_ACTIONS.setName, payload: {name: event.target.value} }
    // )
    const setFocus = useCallback(
        (element) => {element.focus()},
        []
    );
    return(
        <div>
            <label>
                Name:
                    <input ref={setFocus}
                        type="text"
                    />
            </label>
        </div>
    );
}