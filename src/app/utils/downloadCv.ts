export const downloadCvPdfFile = () => {
  const link = document.createElement('a')
  link.href = '/docs/gabrielbueno_cv.pdf'
  link.target = '_blank'
  link.download = 'gabriel_cv.pdf'
  link.click()
}

