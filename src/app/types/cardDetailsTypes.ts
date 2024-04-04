type cardDetailsType = {
  card_name: string;
  img_front_link?: string;
  img_back_link?: string;
  job_title?: string;
  email: string;
  phone: string;
  company_name?: string;
  company_website?: string;
  contact_name: string;
};
type cardResponsType = {
  status: boolean;
  message: string;
  data: object;
};
export { cardDetailsType, cardResponsType };
