export interface ExchangeRateResponse {
  result: string;
  documentation: string;
  time_last_update_unix: number;
  time_last_update_utc: string;
  time_next_update_unix: number;
  time_next_update_utc: string;
  base_code: string; // Ex: "USD"
  conversion_rates: {
    // A chave que nos interessa é o BRL
    [key: string]: number; 
  };
}

export type CurrencyCode = 'BRL'; // Podemos expandir isso depois