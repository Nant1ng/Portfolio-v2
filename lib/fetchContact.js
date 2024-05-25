export const fetchContact = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_AZURE_API_URL;
  const res = await fetch(`${apiUrl}/Contact`);

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
