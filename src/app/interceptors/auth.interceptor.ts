import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  const baseUrl = 'http://localhost:3000';
  const authReq = req.clone({
    url: `${baseUrl}/${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
  return next(authReq);
};
