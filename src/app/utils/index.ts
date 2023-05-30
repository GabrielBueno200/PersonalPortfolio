export const calculateAge = () => {
  const birthDate = new Date('2000-11-07')
  const today = new Date()
  const age = today.getFullYear() - birthDate.getFullYear()

  const hasPassedBirthday =
    today.getMonth() > birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() >= birthDate.getDate())

  return hasPassedBirthday ? age : age - 1
}

