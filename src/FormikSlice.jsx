import { createSlice } from "@reduxjs/toolkit";

export const FormikSlice = createSlice({
    name: "formikcalc",
    initialState: {
        enter: {
            fname: "",
            lname: "",
            city: ""

        },
        test: [],
        id: null
    },
    reducers: {
        addData: (state, action) => {
            if (state.id != null) {
                state.test[state.id] = action.payload
                state.id = null
            }
            else {
                // console.log(action);
                state.test.push(action.payload)

            }
            state.enter = { fname: "", lname: "", city: "" };
        },
        removeData: (state, action) => {
            state.test.splice(action.payload, 1)

        },
        editData: (state, action) => {
            state.enter = { ...state.test[action.payload] }
            state.id = action.payload

        }
    }
});
export const { addData, removeData, editData } = FormikSlice.actions
export default FormikSlice.reducer

