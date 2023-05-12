export const getAccessToken = () => JSON.parse(localStorage.getItem('access_token') || 'null')
