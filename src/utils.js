export const parseToC = F => Math.round(F - 273.15)

export const doAsync = async (asyncF, setter) => {
    let data = await asyncF()
    setter(data)
}