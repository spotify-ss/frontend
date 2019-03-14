/**
 *  Average of every numeric property
 * @param {array} tracks 
 */
export const averagePerObjectProperty = (tracks) => {
    return tracks.reduce((taste, track) => {
        Object.keys(track).forEach(key => {
            if(typeof track[key] !== 'number' || key === 'id') return //skip non numeric properties and id
            if(!taste[key]){
                taste[key] = track[key]
            }else{
                taste[key] = (taste[key] + track[key])/2
            }
        })
        return taste
    }, {})
}