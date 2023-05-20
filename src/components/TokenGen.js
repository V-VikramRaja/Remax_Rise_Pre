const TokenGen = async () => {
  let data;
  const url = "https://api.rexsoftware.com/v1/rex/Authentication/login";
  const payload = {
    email: "rise@remax.com.au",
    password: "Rise9realestate",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    data = await response.json();
    console.log(data.result);
  } catch (error) {
    console.error("Error:", error);
  }
  return data.result;
};

export default TokenGen;
