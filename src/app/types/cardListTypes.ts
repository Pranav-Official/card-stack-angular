type cardListResponse = {
  card_id: string;
  card_name: string;
  email: string;
  phone: string;
  job_title: string;
  company_name: string;
};

type deleteCardResponse = {
  status: boolean;
  message: string;
  data: {
  };
}
export { cardListResponse,deleteCardResponse };
