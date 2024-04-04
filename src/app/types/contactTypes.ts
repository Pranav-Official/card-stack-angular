type contactType = {
  card_id: string;
  contact_name: string;
  cardListCount: number;
};
type contactListReturnType = {
  data: contactType[];
  message: string;
  status: boolean;
};
type responseStatus = 'success' | 'error';
export { contactType, contactListReturnType, responseStatus };
