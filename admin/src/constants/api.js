export const API_HOST = 'http://localhost:8080';
export const ADMIN_HOST = 'http://localhost:8000';

//Acciones asociadas a Forms
export const POST_FORM = `${API_HOST}/users`;

//Acciones asociadas a Users
export const GET_ONE_USER = `${API_HOST}/users`;

export const POST_AUTH = `${API_HOST}/users/auth`;
export const GET_AUTH = `${API_HOST}/users/auth`;

//Acciones asociadas a Accounts
export const GET_ACCOUNT = `${API_HOST}/users/accounts`;

//Acciones asociadas a Transferencias
export const GET_TRANSFER = `${API_HOST}/users/transfer/list-transfer`

//Acciones asociadas a Estadisticas
export const GET_STATISTICS = `${API_HOST}/users/statistics/web`