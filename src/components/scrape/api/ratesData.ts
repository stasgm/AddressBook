import { IRateData } from './../scrape';

const baseURL = 'https://wrapapi.com/use/damned_god/select-by/best-rates/0.0.3';
const wrapAPIKey = 'OM3kz0KsWSPDTfjkp0hwH4XlInvwV7RJ';

export const fetchData = async (): Promise<IRateData> => {
  const response = await fetch(baseURL, {
    method: 'post',
    headers: {
      // tslint:disable-next-line:object-literal-key-quotes
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ wrapAPIKey })
  });

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const res = await response.json();
  if (!res.success) {
    throw new Error(res.messages);
  }

  return mapToState(res);
};

const mapToState = res => {
  return res.data;
};
