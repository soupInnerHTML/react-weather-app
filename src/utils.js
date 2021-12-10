export const parseToC = F => F && Math.round(F - 273.15) + "°"

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
