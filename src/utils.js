export const parseToC = F => Math.round(F - 273.15)

export const doAsync = async (asyncF, setter) => {
    let data = await asyncF()
    setter(data)
}

export const pressureGradation = pressure => {
    if (pressure < 1005) {
        return "low"
    }
    if (pressure < 1010) {
        return "pre-normal"
    }
    if (pressure < 1020) {
        return "normal"
    }
    if (pressure > 1020) {
        return "high"
    }
}