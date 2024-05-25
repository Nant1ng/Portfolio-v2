export const fetchContact = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_AZURE_API_URL;
  const res = await fetch(`${apiUrl}/Contact`);

  console.log("Response Status:", res.status);

  if (!res.ok) {
    throw new Error(`Network response was not ok. Status: ${res.status}`);
  }

  const data = await res.json();

  return data;
};
