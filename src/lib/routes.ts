// ROOT - route to redirect user when is not authenticated and try to access private route
export const ROOT = '/login'

// PUBLIC_ROUTES - array to declare all public routes
export const PUBLIC_ROUTES = ['/login', '/signup', '/landing-page']

// DEFAULT_REDIRECT - route to redirect user when is authenticated and try to access public route
export const DEFAULT_REDIRECT = '/'

export const LANDING_PAGE = 'home'
