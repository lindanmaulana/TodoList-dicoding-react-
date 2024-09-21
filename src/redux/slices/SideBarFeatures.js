import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    isOpen: true
}

const SideBarFeatures = createSlice({
    name: "Side Bar",
    initialState,
    reducers: {
        handleIsOpen: (state) => {
            state.isOpen = !state.isOpen
        }
    }
})

export const {handleIsOpen} = SideBarFeatures.actions
export default SideBarFeatures.reducer