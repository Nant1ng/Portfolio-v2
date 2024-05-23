export const fetchAbout = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/About`);

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
