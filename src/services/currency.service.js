class CurrencyService {
  getRates = async () => {
    let result;

    try {
      const response = await fetch(
        'http://data.fixer.io/api/latest?access_key=7c2eaa8f1fcad3ab9927dc726af1c523&format=1'
      );
      result = await response.json();
    } catch (err) {
      throw new Error(err);
    }

    return result.rates;
  };
}

export default CurrencyService;
