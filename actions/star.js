import * as types from './actionTypes';
// export const getStar = () => ({
//     type: types.GET_STAR$
// });


// export const getStarSuc = (res) => ({
//     type: types.GET_STAR_SUC,
//     data: res
// });


export function getStar()
{
    return {
        type: types.GET_STAR$ 
    };
}

export function getStarSuc(res)
{
    return {
        type: types.GET_STAR_SUC,
        data: res
    }
}

export function getStarErr(err)
{
    return {
        type: types.GET_STAR_ERR,
        err
    }
}