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
export { contactType, contactListReturnType };
