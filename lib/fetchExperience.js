export const fetchExperience = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_AZURE_API_URL;
  const res = await fetch(`${apiUrl}/Experience`);

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
