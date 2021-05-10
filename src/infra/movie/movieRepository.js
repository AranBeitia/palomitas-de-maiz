import defaultRequest from '@/infra/request'

const getMovieDetail = async (id) => {
    const jsonResponse = await defaultRequest.createRequest(id)
    return jsonResponse
}

export default {
    getMovieDetail
}