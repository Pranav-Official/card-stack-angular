type cardDetailsType = {
  cardName: string;
  img_front_link?: string;
  img_back_link?: string;
  jobTitle?: string;
  email: string;
  phone: string;
  companyName?: string;
  companyWebsite?: string;
  contactName: string;
};
type cardResponsType = {
  status: boolean;
  message: string;
  data: Object;
};
export { cardDetailsType, cardResponsType };
