import { HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  const baseUrl = environment.BASE_URL;
  const authReq = req.clone({
    url: `${baseUrl}/${req.url}`,
    setHeaders: {
      Authorization: `Bearer ${authToken}`,
      'Content-Type': 'application/json',
    },
  });
  return next(authReq);
};
