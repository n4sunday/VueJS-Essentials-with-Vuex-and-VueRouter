const state = {
    images: []
}

const getters = {
    allImages: state => state.images
}

const actions = {

}

const mutations = {
    setImages: (state, images) => {
        state.images = images
    }
}