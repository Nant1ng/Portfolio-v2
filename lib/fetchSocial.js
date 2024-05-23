export const fetchSocial = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/Social`);

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
