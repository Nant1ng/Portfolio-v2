export const fetchMessage = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${apiUrl}/Message`);

  if (!res.ok) {
    throw new Error("Network response was not ok");
  }

  const message = await res.text();

  return message;
};
