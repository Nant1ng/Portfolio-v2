export const fetchSkill = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/Skills`);

  if (!res.ok) {
    throw new Error("Network response was not ok.");
  }

  const data = await res.json();

  return data;
};
