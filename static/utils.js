export const getTimeString = (time = null) => {
  if (time) {
    return time.toLocaleTimeString().split(":").slice(0, 2).join(":");
  }

  return new Date(Date.now()).toLocaleTimeString().split(":").slice(0, 2).join(":");
}

export const getTime = (time = null) => {
  if (time) {
    return time.getTime();
  }
  return Date.now();
}

export const getTimeParts = (time) => {
  const hours = Math.floor(time / 3600)
  const minutes = Math.floor((time % 3600) / 60)
  const seconds = time % 60

  return {
    hours: hours,
    minutes: minutes,
    seconds: seconds
  }
}